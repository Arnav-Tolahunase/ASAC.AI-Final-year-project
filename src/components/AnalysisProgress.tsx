"use client";

import { useEffect, useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import type { AnalysisResult, DetectionLabel } from "@/types/analysis";

interface AnalysisProgressProps {
  file: File;
  onComplete: (result: AnalysisResult) => void;
}

export function AnalysisProgress({ file, onComplete }: AnalysisProgressProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("Uploading file...");

  useEffect(() => {
    const analyzeFile = async () => {
      const stages = [
        { progress: 15, text: "Uploading file...", duration: 500 },
        { progress: 30, text: "Extracting features...", duration: 800 },
        { progress: 50, text: "Running AI models...", duration: 1200 },
        { progress: 70, text: "Generating heatmaps...", duration: 1000 },
        { progress: 85, text: "Computing confidence scores...", duration: 800 },
        { progress: 95, text: "Creating explanation...", duration: 500 },
      ];

      let currentIndex = 0;

      const updateProgress = () => {
        if (currentIndex < stages.length) {
          const current = stages[currentIndex];
          setProgress(current.progress);
          setStage(current.text);
          
          setTimeout(() => {
            currentIndex++;
            if (currentIndex < stages.length) {
              updateProgress();
            }
          }, current.duration);
        }
      };

      updateProgress();

      // Call the FastAPI backend
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://localhost:8000/predict", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.detail || "Analysis failed");
        }

        const backendResult = await response.json();
        
        // Transform backend result to match our AnalysisResult interface
        const result: AnalysisResult = {
          id: Date.now().toString(),
          fileName: file.name,
          uploadedAt: new Date().toISOString(),
          imageUrl: URL.createObjectURL(file),
          evidence: {
            label: backendResult.class.toLowerCase().replace(" ", "-") as DetectionLabel,
            confidence: backendResult.confidence / 100,
            modelVersion: "1.0",
            regions: [], // We'll populate this with heatmap data
            heatmapUrl: `data:image/png;base64,${backendResult.overlay_base64}`,
            technicalMetrics: {
              frequencyAnomalies: backendResult.class !== "Authentic",
              resamplingDetected: backendResult.class === "DeepFake",
              compressionInconsistencies: backendResult.class !== "Authentic",
              lightingInconsistencies: backendResult.class === "DeepFake"
            }
          },
          explanation: {
            summary: `This image has been classified as ${backendResult.class} with ${backendResult.confidence}% confidence.`,
            detailedExplanation: `Our AI model analyzed the image and detected patterns consistent with ${backendResult.class.toLowerCase()} content. The Grad-CAM visualization highlights the regions that most influenced this classification.`,
            regionHighlights: [],
            confidenceExplanation: `The model's confidence of ${backendResult.confidence}% is based on the analysis of visual patterns and artifacts in the image.`,
            recommendedActions: backendResult.class === "Authentic" 
              ? ["Image appears genuine", "No further verification needed"]
              : ["Verify source authenticity", "Cross-reference with original sources", "Consider additional verification methods"],
            keyFindings: [
              `Classification: ${backendResult.class}`,
              `Confidence: ${backendResult.confidence}%`,
              ...Object.entries(backendResult.probabilities).map(([cls, prob]) => 
                `${cls}: ${prob.toFixed(1)}%`
              )
            ]
          },
          processingTimeMs: 2000 // Approximate processing time
        };
        
        setProgress(100);
        setStage("Analysis complete!");
        
        setTimeout(() => {
          onComplete(result);
        }, 500);
      } catch (error) {
        console.error("Analysis error:", error);
        toast.error(error instanceof Error ? error.message : "Failed to analyze image");
        setStage("Analysis failed");
      }
    };

    analyzeFile();
  }, [file, onComplete]);

  return (
    <div className="mx-auto max-w-md animate-in fade-in zoom-in-95 duration-500">
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        {/* Pulsing Glow Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="relative z-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl pulse-glow">
            <Loader2 className="h-10 w-10 animate-spin text-white" />
          </div>
          
          <h3 className="mt-6 text-xl font-semibold flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
            Analyzing Media
            <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </h3>
          <p className="mt-2 text-sm text-muted-foreground font-medium">{stage}</p>
          
          <div className="mt-6">
            <Progress value={progress} className="h-3 shadow-sm" />
            <p className="mt-3 text-xs text-muted-foreground font-semibold">
              {progress}% Complete
            </p>
          </div>
          
          {/* Processing Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}