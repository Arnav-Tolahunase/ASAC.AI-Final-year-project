// Analysis result types for the explainable AI system

export type DetectionLabel = "authentic" | "ai-generated" | "deepfake";

export interface RegionEvidence {
  id: string;
  bbox: [number, number, number, number]; // [x1, y1, x2, y2]
  confidence: number;
  heatStats: {
    mean: number;
    max: number;
    min: number;
  };
  artifacts: string[]; // e.g., ["resampling", "high-frequency anomalies"]
  maskUrl?: string; // URL to mask image if available
}

export interface InpaintCheck {
  regionId: string;
  labelAfterInpaint: DetectionLabel;
  confidenceChange: number;
  flipOccurred: boolean;
}

export interface AnalysisEvidence {
  label: DetectionLabel;
  confidence: number;
  modelVersion: string;
  regions: RegionEvidence[];
  heatmapUrl: string; // URL to heatmap overlay image
  inpaintChecks?: InpaintCheck[];
  technicalMetrics: {
    frequencyAnomalies: boolean;
    resamplingDetected: boolean;
    compressionInconsistencies: boolean;
    lightingInconsistencies: boolean;
  };
}

export interface LLMExplanation {
  summary: string; // 2-3 sentence overview
  detailedExplanation: string; // Comprehensive explanation
  regionHighlights: Array<{
    regionId: string;
    shortNote: string;
    severity: "low" | "medium" | "high";
  }>;
  confidenceExplanation: string;
  recommendedActions: string[];
  keyFindings: string[];
}

export interface AnalysisResult {
  id: string;
  fileName: string;
  uploadedAt: string;
  imageUrl: string;
  evidence: AnalysisEvidence;
  explanation: LLMExplanation;
  processingTimeMs: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ChatRequest {
  analysisId: string;
  message: string;
  conversationHistory: ChatMessage[];
}
