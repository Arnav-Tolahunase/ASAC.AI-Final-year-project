# ASAC.AI — Explainable Deepfake & AI-Generated Media Forensic Detection System

## Complete AI Pipeline Node Flow

---

# 1. Problem Definition Layer

## NODE: Problem Definition

### Input
- Increasing deepfake and AI-generated media
- Need for digital forensic verification
- Requirement for explainable AI predictions

### Process
- Define forensic classification problem
- Define target classes
- Define explainability requirements
- Define system objectives

### Output
- Multi-class image forensic detection system

---

# 2. Dataset Acquisition Node

## NODE: Dataset Acquisition

### Input
- Public forensic datasets

### Process
- Collect images from:
  - CelebDF
  - CASIA
  - FaceForensics++

### Output
- Raw image dataset

---

# 3. Data Curation Node

## NODE: Data Curation

### Input
- Raw collected dataset

### Process
- Remove corrupted images
- Remove duplicate samples
- Balance classes
- Organize dataset categories
- Filter low-quality images
- Standardize image formats
- Ensure dataset diversity

### Output
- Structured curated forensic dataset

---

# 4. Data Preprocessing Node

## NODE: Data Preprocessing

### Input
- Curated dataset

### Process
- Face extraction
- Image resizing
- RGB normalization
- Pixel normalization

### Output
- Standardized tensor-ready images

---

# 5. Data Augmentation Node

## NODE: Data Augmentation

### Input
- Preprocessed images

### Process
- Horizontal flipping
- Rotation
- Saturation variation
- Noise injection

### Output
- Augmented training dataset

---

# 6. Dataset Splitting Node

## NODE: Dataset Splitting

### Input
- Augmented dataset

### Process
- Split dataset into:
  - 70% Training
  - 15% Validation
  - 15% Testing

### Output
- Training dataset
- Validation dataset
- Testing dataset

---

# 7. CNN Architecture Node

## NODE: CNN Architecture Design

### Input
- Tensor-ready images

### Process
- Design convolutional layers
- Perform feature extraction
- Apply pooling operations
- Build dense classification layers
- Generate Softmax probabilities

### Output
- Custom Multi-Class CNN Architecture

---

# 8. Model Training Node

## NODE: Model Training

### Input
- CNN architecture
- Training dataset

### Process
- Forward propagation
- Backpropagation
- Weight optimization using Adam optimizer
- Loss minimization using Categorical Cross-Entropy

### Output
- Trained forensic classification model

---

# 9. Validation & Evaluation Node

## NODE: Model Validation & Evaluation

### Input
- Trained model
- Validation and testing datasets

### Process
- Accuracy evaluation
- Precision evaluation
- Recall evaluation
- F1-score computation
- Confusion matrix generation

### Output
- Performance evaluation metrics

---

# 10. Training Optimization Node

## NODE: Training Optimization

### Input
- Training metrics
- Validation metrics

### Process
- Handle class imbalance
- Reduce overfitting
    - Dropout
    - Regularization
- Improve generalization
- Monitor validation performance

### Output
- Optimized robust CNN model

---

# 11. Explainable AI Node

## NODE: Explainable AI Generation

### Input
- CNN prediction
- Intermediate feature maps

### Process
- Generate Grad-CAM heatmaps
- Identify manipulated regions
- Visualize CNN attention areas

### Output
- Explainability heatmap

---

# 12. LLM-Based Interpretation Node

## NODE: LLM-Based Interpretation

### Input
- Heatmap
- CNN prediction
- Confidence score

### Process
- Interpret highlighted regions
- Generate human-readable explanations
- Enable forensic Q&A interaction

### Output
- Explainable AI narrative
- Interactive user assistance

---

# 13. FastAPI Inference Backend Node

## NODE: FastAPI Inference Backend

### Input
- Uploaded user image

### Process
- Receive uploaded image
- Trigger preprocessing pipeline
- Execute CNN inference
- Generate Grad-CAM heatmap
- Trigger LLM explanation generation

### Output
- Structured prediction response

---

# 14. React Frontend Node

## NODE: React Frontend

### Input
- User-uploaded image

### Process
- Handle image uploads
- Communicate with backend APIs
- Visualize classification results
- Render heatmaps
- Provide Q&A interaction interface

### Output
- Interactive forensic analysis dashboard

---

# 15. Report Generation Node

## NODE: Report Generation

### Input
- Prediction results
- Heatmap analysis
- LLM explanations

### Process
- Structure forensic analysis data
- Generate downloadable JSON reports

### Output
- Downloadable forensic analysis report

---

# 16. Future Expansion Node

## NODE: Future Expansion

### Input
- Existing AI forensic pipeline

### Process
- Extend temporal analysis capabilities
- Integrate audio analysis
- Implement multimodal fusion systems

### Output
- Real-time video deepfake detection
- Multimodal forensic AI framework

---

# Complete System Flow

```text
Problem Definition
        ↓
Dataset Acquisition
        ↓
Data Curation
        ↓
Data Preprocessing
        ↓
Data Augmentation
        ↓
Dataset Splitting
        ↓
Custom CNN Architecture
        ↓
Model Training
        ↓
Validation & Evaluation
        ↓
Training Optimization
        ↓
Grad-CAM Explainability
        ↓
LLM-Based Interpretation
        ↓
FastAPI Inference Backend
        ↓
React Frontend
        ↓
Report Generation
        ↓
Future Multimodal Expansion