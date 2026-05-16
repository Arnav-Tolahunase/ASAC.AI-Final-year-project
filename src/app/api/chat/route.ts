import { NextRequest, NextResponse } from "next/server";
import type { ChatRequest, ChatMessage } from "@/types/analysis";

// Chat endpoint for Ask AI feature - contextual Q&A about analysis results
export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();
    const { analysisId, message, conversationHistory } = body;

    if (!message || !analysisId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Replace with actual LLM API call
    // Include analysis context + conversation history in prompt
    
    /*
    Example implementation with OpenAI:
    
    const systemPrompt = `You are an AI forensics assistant helping users understand image analysis results.
    Analysis ID: ${analysisId}
    
    Answer questions about the analysis results, explain technical terms, and provide guidance.
    Be clear, accurate, and helpful. If you don't know something, say so.`;
    
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.map(msg => ({ role: msg.role, content: msg.content })),
      { role: "user", content: message },
    ];
    
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });
    
    const aiResponse = response.choices[0].message.content;
    */

    // Simulated AI response for demo
    const aiResponse = generateContextualResponse(message, conversationHistory);

    const responseMessage: ChatMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      role: "assistant",
      content: aiResponse,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responseMessage);
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

// Simulated contextual responses - replace with actual LLM
function generateContextualResponse(message: string, history: ChatMessage[]): string {
  const lowerMessage = message.toLowerCase();

  // Context-aware responses based on keywords
  if (lowerMessage.includes("heatmap") || lowerMessage.includes("heat map")) {
    return "The heatmap visualization shows where our AI model focused its attention when making the detection. Brighter, warmer colors (red/yellow) indicate regions that had the strongest influence on the classification decision. These are typically the areas where manipulation artifacts are most concentrated. The heatmap is generated using Grad-CAM (Gradient-weighted Class Activation Mapping), which traces back through the neural network to identify which pixels contributed most to the final prediction.";
  }

  if (lowerMessage.includes("confidence") || lowerMessage.includes("sure") || lowerMessage.includes("certain")) {
    return "The confidence score represents how certain our model is about its prediction, based on the strength of evidence detected. A score above 90% indicates high confidence with multiple supporting forensic indicators. Scores between 70-90% suggest probable manipulation but warrant additional verification. Scores below 70% are less certain and should be considered preliminary. The confidence is calculated from multiple factors: heatmap activation strength, artifact consistency, inpainting test results, and technical metric alignments.";
  }

  if (lowerMessage.includes("region") || lowerMessage.includes("area") || lowerMessage.includes("where")) {
    return "The detected regions highlight specific areas of the image where manipulation artifacts were found. Each region is identified through a combination of: (1) Grad-CAM heatmap peaks showing high model attention, (2) SAM (Segment Anything Model) segmentation to define precise boundaries, and (3) forensic checks for resampling, compression inconsistencies, or synthetic patterns. The primary region typically shows the strongest evidence, while secondary regions may contain related artifacts or blending zones.";
  }

  if (lowerMessage.includes("deepfake") || lowerMessage.includes("deep fake")) {
    return "A deepfake is a form of manipulation where AI (typically deep learning models) is used to swap faces, alter expressions, or synthesize realistic modifications to people in images or videos. Common indicators include: resampling artifacts around face boundaries, lighting inconsistencies, unnatural skin textures, edge discontinuities, and frequency-domain anomalies. Our model is specifically trained to detect these telltale signs that distinguish deepfakes from authentic images.";
  }

  if (lowerMessage.includes("ai-generated") || lowerMessage.includes("synthetic") || lowerMessage.includes("generated")) {
    return "AI-generated images are created entirely by generative models (like Stable Diffusion, DALL-E, or GANs) rather than captured by cameras. Unlike deepfakes which modify real photos, these are synthetic from scratch. Detection relies on identifying: unnatural texture patterns, repetitive micro-structures, abnormal frequency spectra, missing camera noise/grain, and statistical properties unique to generative models. These artifacts are often distributed throughout the image rather than localized to specific regions.";
  }

  if (lowerMessage.includes("authentic") || lowerMessage.includes("real") || lowerMessage.includes("genuine")) {
    return "An authentic image is one captured by a camera without significant digital manipulation or AI generation. Authentic images typically show: natural camera noise patterns, consistent JPEG compression artifacts, proper frequency distribution matching optical systems, coherent lighting physics, and absence of synthetic patterns. While our model has high accuracy, no detection is 100% certain—context, metadata, and source verification remain important for complete authenticity assessment.";
  }

  if (lowerMessage.includes("grad-cam") || lowerMessage.includes("gradcam")) {
    return "Grad-CAM (Gradient-weighted Class Activation Mapping) is an explainability technique that shows which parts of an image influenced the neural network's decision. It works by analyzing the gradients flowing back through the network during classification, producing a heatmap that highlights important regions. This helps us understand not just what the model predicted, but why—making the 'black box' of AI more transparent and trustworthy.";
  }

  if (lowerMessage.includes("inpaint") || lowerMessage.includes("remove")) {
    return "Inpainting tests are a powerful validation technique where we digitally remove a suspected manipulation region and re-run the classifier. If the prediction flips (e.g., from 'deepfake' to 'authentic') or confidence drops significantly, this provides strong causal evidence that the removed region contained the manipulation. It's like a 'what if we remove this suspicious area?' experiment that confirms which regions are actually responsible for the detection.";
  }

  if (lowerMessage.includes("what should i do") || lowerMessage.includes("next steps") || lowerMessage.includes("recommend")) {
    return "Based on the analysis results, I recommend: (1) Review the heatmap and highlighted regions carefully, (2) Check the image metadata and source provenance, (3) For high-stakes decisions, seek forensic expert review, (4) Consider the context in which the image is being used, (5) Use reverse image search to find potential source materials. Remember that AI detection is a tool to assist human judgment, not replace it—especially for critical applications.";
  }

  if (lowerMessage.includes("accurate") || lowerMessage.includes("accuracy") || lowerMessage.includes("reliable")) {
    return "Our detection model achieves 93% accuracy on test datasets containing deepfakes, AI-generated images, and authentic photos. However, accuracy depends on image quality, manipulation sophistication, and artifact preservation. The explainability features (heatmaps, region detection, technical metrics) provide transparency so you can assess confidence for each specific case. For maximum reliability, combine AI detection with human expertise, metadata analysis, and source verification.";
  }

  if (lowerMessage.includes("how does") || lowerMessage.includes("how do")) {
    return "Our system works in several stages: (1) Your image is analyzed by a deep learning classifier trained on millions of authentic and manipulated images, (2) Grad-CAM generates heatmaps showing which regions influenced the decision, (3) SAM segments precise manipulation boundaries, (4) Forensic checks detect technical artifacts (resampling, compression inconsistencies, frequency anomalies), (5) An LLM synthesizes all evidence into human-readable explanations. This multi-stage approach provides both accurate detection and understandable explanations.";
  }

  if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
    return "You're welcome! I'm here to help you understand the analysis results. Feel free to ask any other questions about the detection, the highlighted regions, or what the findings mean.";
  }

  // Default response for unmatched queries
  return "I can help explain the analysis results, including the detection verdict, heatmap visualization, confidence scores, detected regions, and technical findings. I can also clarify concepts like deepfakes, AI-generated images, Grad-CAM, and forensic artifacts. What specific aspect would you like to know more about?";
}
