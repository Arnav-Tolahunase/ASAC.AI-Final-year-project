import io
import base64
import numpy as np
import tensorflow as tf
# Handle different TensorFlow versions
try:
    from tensorflow import keras
except ImportError:
    import keras
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import requests
from pydantic import BaseModel
import json
import re


# ====== CONFIG ======
import os
# Try multiple possible locations for the model
MODEL_PATHS = [
    "../first_try(baseline).h5",  # Parent directory
    "../../first_try(baseline).h5",  # Project root
    "first_try(baseline).h5",  # Current directory
]

MODEL_PATH = None
for path in MODEL_PATHS:
    if os.path.exists(path):
        MODEL_PATH = path
        break

if MODEL_PATH is None:
    raise FileNotFoundError(
        "Model file 'first_try(baseline).h5' not found! "
        "Please place it in the project root directory."
    )
LAST_CONV_LAYER_NAME = "conv2d_17"
CLASS_NAMES = ["AI Generated", "DeepFake", "Authentic"]
INPUT_SIZE = (224, 224)  # H, W

# Optional: make TF GPU memory growth nicer (prevents OOM at startup on some setups)
try:
    gpus = tf.config.list_physical_devices("GPU")
    for g in gpus:
        tf.config.experimental.set_memory_growth(g, True)
except Exception:
    pass

# ====== APP ======
app = FastAPI(title="Media Integrity Classifier with Grad-CAM", version="1.0")

# CORS: Allow frontend (localhost + production ALB)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "*"  # Allow all origins for demo (ALB will be dynamic)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model once at startup
model = keras.models.load_model(MODEL_PATH)

# ====== HELPERS ======
def preprocess_image_inference_jpeg_bytes(jpeg_bytes: bytes) -> tf.Tensor:
    """EXACTLY like training (decode_jpeg -> resize -> float32/255).
    Returns float32 tensor (224,224,3) in [0,1]."""
    img = tf.io.decode_jpeg(jpeg_bytes, channels=3)
    img = tf.image.resize(img, INPUT_SIZE)
    img = tf.cast(img, tf.float32) / 255.0
    return img

def make_gradcam_heatmap(img_batch: tf.Tensor) -> tuple[np.ndarray, np.ndarray]:
    """img_batch: (1,224,224,3) float32.
    Returns: (heatmap_2d float32 [0..1], preds np.ndarray shape (num_classes,))"""
    grad_model = keras.models.Model(
        inputs=model.inputs,
        outputs=[model.get_layer(LAST_CONV_LAYER_NAME).output, model.output]
    )
    
    with tf.GradientTape() as tape:
        conv_output, preds = grad_model(img_batch)          # conv: (1,H,W,C)
        pred_index = tf.argmax(preds[0])
        class_score = preds[:, pred_index]                   # scalar per batch
    
    grads = tape.gradient(class_score, conv_output)          # (1,H,W,C)
    
    # Move to CPU/NumPy (important for OpenCV compatibility)
    conv_output_np = conv_output[0].numpy()                  # (H,W,C)
    grads_np = grads[0].numpy()                              # (H,W,C)
    
    # Channel weights via GAP over H,W
    weights = np.mean(grads_np, axis=(0, 1))                 # (C,)
    
    # Weighted sum over channels -> (H,W)
    heatmap = np.dot(conv_output_np, weights)
    
    # ReLU + normalize
    heatmap = np.maximum(heatmap, 0)
    maxv = heatmap.max()
    if maxv > 0:
        heatmap = heatmap / maxv
    
    heatmap = heatmap.astype(np.float32)
    return heatmap, preds.numpy()[0]

def overlay_heatmap_on_image(heatmap_2d: np.ndarray, img_01: np.ndarray) -> np.ndarray:
    """heatmap_2d: (H,W) float32 in [0,1]
    img_01: (224,224,3) float32 in [0,1]
    returns: uint8 overlay image (224,224,3) in RGB"""
    import cv2
    
    if heatmap_2d.ndim != 2:
        raise ValueError(f"Heatmap must be 2D, got {heatmap_2d.shape}")
    
    heatmap_resized = cv2.resize(heatmap_2d, INPUT_SIZE)
    heatmap_uint8 = (heatmap_resized * 255).astype(np.uint8)
    heatmap_color = cv2.applyColorMap(heatmap_uint8, cv2.COLORMAP_JET)  # BGR
    
    orig_uint8 = (np.clip(img_01, 0.0, 1.0) * 255.0).astype(np.uint8)
    overlay_bgr = (0.4 * heatmap_color + orig_uint8).astype(np.uint8)
    overlay_rgb = overlay_bgr[:, :, ::-1]  # BGR -> RGB
    
    return overlay_rgb

def np_image_to_base64_png(img_rgb_uint8: np.ndarray) -> str:
    from PIL import Image
    with io.BytesIO() as buffer:
        Image.fromarray(img_rgb_uint8).save(buffer, format="PNG")
        return base64.b64encode(buffer.getvalue()).decode("utf-8")

# ====== ROUTES ======
@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Accept both JPEG and PNG files
    lower = file.filename.lower() if file.filename else ""
    if not (lower.endswith(".jpg") or lower.endswith(".jpeg") or lower.endswith(".png")):
        raise HTTPException(
            status_code=400,
            detail="Please upload a JPEG (.jpg/.jpeg) or PNG (.png) image."
        )
    
    try:
        # Read bytes
        contents = await file.read()
        
        # Preprocess exactly like training
        if lower.endswith(".png"):
            # For PNG files, decode as image then convert to JPEG bytes
            img_tensor = tf.io.decode_image(contents, channels=3)
            jpeg_bytes = tf.io.encode_jpeg(img_tensor).numpy()
            img = preprocess_image_inference_jpeg_bytes(jpeg_bytes)
        else:
            img = preprocess_image_inference_jpeg_bytes(contents)  # (224,224,3) float32
        
        img_batch = tf.expand_dims(img, axis=0)                # (1,224,224,3)
        
        # Grad-CAM + prediction
        heatmap, pred_vec = make_gradcam_heatmap(img_batch)
        pred_idx = int(np.argmax(pred_vec))
        pred_class = CLASS_NAMES[pred_idx] if pred_idx < len(CLASS_NAMES) else str(pred_idx)
        confidence = float(pred_vec[pred_idx] * 100.0)
        
        # Build overlay
        overlay_rgb = overlay_heatmap_on_image(heatmap, img.numpy())  # uint8 RGB
        overlay_b64 = np_image_to_base64_png(overlay_rgb)
        
        # Get all class probabilities
        all_probabilities = {
            CLASS_NAMES[i]: float(pred_vec[i] * 100.0) 
            for i in range(len(CLASS_NAMES))
        }
        
        return JSONResponse(content={
            "class": pred_class,
            "confidence": round(confidence, 2),
            "probabilities": all_probabilities,
            "overlay_base64": overlay_b64
        })
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing failed: {e}")


# ====== PYDANTIC MODEL FOR EXPLAIN ======
class ExplainRequest(BaseModel):
    predicted_class: str
    confidence: float
    image_base64: str          # original image (Base64 no prefix)
    heatmap_base64: str        # overlay heatmap (Base64 no prefix)


# ====== PYDANTIC MODEL FOR CHAT ======
class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    analysis_id: str
    message: str
    conversation_history: list[ChatMessage]
    image_base64: str
    heatmap_base64: str
    predicted_class: str
    confidence: float
    explanation_summary: str


@app.post("/chat")
async def chat_with_ai(data: ChatRequest):
    """
    Chat endpoint that maintains context about the image analysis.
    Uses Ollama with MiniCPM-V to answer questions about the specific image and analysis.
    """
    # Check if Ollama is running
    try:
        _ = requests.get("http://localhost:11434/api/tags", timeout=2)
    except:
        raise HTTPException(
            status_code=503,
            detail="Ollama is not running. Please start Ollama with: ollama serve"
        )
    
    # Build context-aware prompt
    conversation_context = "\n".join([
        f"{msg.role.upper()}: {msg.content}" 
        for msg in data.conversation_history[-5:]  # Last 5 messages for context
    ])
    
    prompt = f"""You are analyzing a media integrity check result.

CONTEXT:
• Classification: {data.predicted_class}
• Confidence: {data.confidence:.2f}%
• Summary: {data.explanation_summary}

CONVERSATION:
{conversation_context}

USER: {data.message}

INSTRUCTIONS:
- Be CONCISE and DIRECT
- Use bullet points (•) when listing multiple items
- Reference specific visual elements you see
- NO generic AI explanations
- Focus on THIS specific image
- Answer the question directly
- Keep responses under 100 words unless asked for details

Respond now:"""

    payload = {
        "model": "aiden_lu/minicpm-v2.6:Q4_K_M",
        "prompt": prompt,
        "images": [data.image_base64, data.heatmap_base64],
        "stream": True
    }
    
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json=payload,
            stream=True,
            timeout=60
        )
        
        raw_text = ""
        for line in response.iter_lines():
            if line:
                try:
                    obj = json.loads(line.decode("utf-8"))
                    if "response" in obj:
                        raw_text += obj["response"]
                except:
                    continue
        
        # Cleanup
        raw_text = re.sub(r'\s+', ' ', raw_text).strip()
        
        return {
            "response": raw_text,
            "timestamp": "2025-11-10T00:00:00Z"
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Chat failed: {str(e)}"
        )


@app.post("/explain")
async def explain_prediction(data: ExplainRequest):
    """
    Uses MiniCPM-V via Ollama to explain the model prediction using the original image + Grad-CAM overlay.
    
    Returns:
    {
        "simple": "...",
        "technical": "..."
    }
    """
    # Check if Ollama is running
    try:
        _ = requests.get("http://localhost:11434/api/tags", timeout=2)
    except:
        raise HTTPException(
            status_code=503,
            detail="Ollama is not running. Please start Ollama with: ollama serve"
        )
    
    prompt = f"""Analyze this image with Grad-CAM heatmap overlay.

PREDICTION: {data.predicted_class}
CONFIDENCE: {data.confidence:.2f}%

The red/yellow areas show model attention. Be CONCISE and use BULLET POINTS.

### Simple Explanation
Use 3-5 bullet points explaining:
• What the heatmap highlights show
• Why this indicates {data.predicted_class}
• Key visual indicators

### Technical Explanation  
Use 3-5 bullet points covering:
• Specific attention regions and their significance
• Detected artifacts or anomalies
• How Grad-CAM patterns support the classification
• Technical indicators (if any)

RULES:
- Use bullet points (•) for ALL points
- Be direct and concise
- NO generic AI descriptions
- Focus ONLY on THIS specific image
- Maximum 5 bullets per section"""

    payload = {
        "model": "aiden_lu/minicpm-v2.6:Q4_K_M",
        "prompt": prompt,
        "images": [data.image_base64, data.heatmap_base64],
        "stream": True
    }
    
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json=payload,
            stream=True
        )
        
        raw_text = ""
        for line in response.iter_lines():
            if line:
                try:
                    obj = json.loads(line.decode("utf-8"))
                    if "response" in obj:
                        raw_text += obj["response"]
                except:
                    continue
        
        # Cleanup
        raw_text = re.sub(r'\s+', ' ', raw_text).strip()
        
        # Split into Simple + Technical
        simple = ""
        technical = ""
        
        if "Technical" in raw_text:
            parts = re.split(r'(?i)technical explanation', raw_text)
            simple = parts[0].replace("Simple Explanation:", "").replace("Simple:", "").strip()
            technical = parts[1].strip() if len(parts) > 1 else ""
        else:
            simple = raw_text
        
        return {
            "simple": simple,
            "technical": technical
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"LLM explanation failed: {str(e)}"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)