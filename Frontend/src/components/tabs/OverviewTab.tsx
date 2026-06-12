"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle2, Download, Eye, RotateCcw, TrendingUp, Shield, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import type { AnalysisResult } from "@/types/analysis";

interface OverviewTabProps {
  result: AnalysisResult;
  onStartOver: () => void;
}

export function OverviewTab({ result, onStartOver }: OverviewTabProps) {
  const [confidenceProgress, setConfidenceProgress] = useState(0);
  
  const { evidence, explanation } = result;
  const isAuthentic = evidence.label === "authentic";
  const isDeepfake = evidence.label === "deepfake";
  const confidence = Math.round(evidence.confidence * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfidenceProgress(confidence);
    }, 100);
    return () => clearTimeout(timer);
  }, [confidence]);

  const handleDownloadReport = () => {
    const reportData = {
      fileName: result.fileName,
      verdict: evidence.label,
      confidence: confidence,
      summary: explanation.summary,
      keyFindings: explanation.keyFindings,
      recommendedActions: explanation.recommendedActions,
      analyzedAt: result.uploadedAt,
      modelVersion: evidence.modelVersion,
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `asac-analysis-${result.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success("Report downloaded successfully");
  };

  const [showHeatmap, setShowHeatmap] = useState(false);

  const handleViewHeatmap = () => {
    if (evidence.heatmapUrl.startsWith('data:image')) {
      // For base64 images, toggle inline display
      setShowHeatmap(!showHeatmap);
      toast.info(showHeatmap ? "Heatmap hidden" : "Heatmap visualization shown");
    } else {
      // For URLs, open in new window
      window.open(evidence.heatmapUrl, "_blank");
      toast.info("Heatmap visualization opened");
    }
  };

  const getVerdictConfig = () => {
    if (isAuthentic) {
      return {
        title: "Likely Authentic",
        description: "No significant signs of AI manipulation detected",
        icon: CheckCircle2,
        iconBg: "bg-green-500/20",
        iconColor: "text-green-600",
        cardBorder: "border-green-500/50",
        cardBg: "bg-green-500/5",
        glow: "glow-blue",
      };
    } else if (isDeepfake) {
      return {
        title: "Deepfake Detected",
        description: "Evidence of digital manipulation found",
        icon: AlertTriangle,
        iconBg: "bg-red-500/20",
        iconColor: "text-red-600",
        cardBorder: "border-red-500/50",
        cardBg: "bg-red-500/5",
        glow: "",
      };
    } else {
      return {
        title: "AI-Generated",
        description: "Evidence of artificial intelligence generation found",
        icon: AlertCircle,
        iconBg: "bg-yellow-500/20",
        iconColor: "text-yellow-600",
        cardBorder: "border-yellow-500/50",
        cardBg: "bg-yellow-500/5",
        glow: "",
      };
    }
  };

  const config = getVerdictConfig();
  const Icon = config.icon;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Verdict Card */}
      <Card className={`card-hover shadow-lg ${config.cardBorder} ${config.cardBg}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${config.iconBg} shadow-lg ${config.glow}`}>
                <Icon className={`h-7 w-7 ${config.iconColor}`} />
              </div>
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {config.title}
                  {isAuthentic && <Shield className="h-5 w-5 text-green-600" />}
                </CardTitle>
                <CardDescription>{config.description}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  Confidence Score
                </span>
                <span className="text-3xl font-bold gradient-text">{confidence}%</span>
              </div>
              <Progress 
                value={confidenceProgress} 
                className="h-4 shadow-inner"
              />
            </div>
            
            {/* Summary from LLM */}
            <div className="pt-2 border-t">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {explanation.summary}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Findings from LLM */}
      <Card className="card-hover shadow-lg">
        <CardHeader>
          <CardTitle>Key Findings</CardTitle>
          <CardDescription>Primary indicators from the analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {explanation.keyFindings.map((finding, index) => {
              const FindingIcon = isAuthentic ? CheckCircle2 : AlertTriangle;
              const colorClass = isAuthentic ? "green" : isDeepfake ? "red" : "yellow";
              
              return (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-lg bg-${colorClass}-500/5 border border-${colorClass}-500/20 transition-all hover:bg-${colorClass}-500/10`}
                >
                  <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-${colorClass}-500/20 shadow-sm`}>
                    <FindingIcon className={`h-4 w-4 text-${colorClass}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{finding}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Actions */}
      <Card className="card-hover shadow-lg border-blue-500/20">
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Next steps based on the analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {explanation.recommendedActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-muted-foreground">{action}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Heatmap Visualization */}
      {showHeatmap && evidence.heatmapUrl && (
        <Card className="card-hover shadow-lg border-purple-500/20">
          <CardHeader>
            <CardTitle>Grad-CAM Heatmap Visualization</CardTitle>
            <CardDescription>
              Areas highlighted in red/yellow show regions that most influenced the model's decision
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Original Image</h4>
                <img
                  src={result.imageUrl}
                  alt="Original"
                  className="w-full h-auto rounded-lg border shadow-sm"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Heatmap Overlay</h4>
                <img
                  src={evidence.heatmapUrl}
                  alt="Heatmap"
                  className="w-full h-auto rounded-lg border shadow-sm"
                />
              </div>
            </div>
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>How to read:</strong> Warmer colors (red, orange, yellow) indicate regions 
                that had the strongest influence on the classification. Cooler colors (blue, purple) 
                indicate less influential regions.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button 
          className="gradient-bg flex-1 text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all" 
          onClick={handleDownloadReport}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 hover:bg-muted/80 shadow-sm hover:shadow-md transition-all"
          onClick={handleViewHeatmap}
        >
          <Eye className="mr-2 h-4 w-4" />
          {showHeatmap ? "Hide Heatmap" : "View Heatmap"}
        </Button>
        <Button 
          variant="outline"
          onClick={onStartOver}
          className="hover:bg-muted/80 shadow-sm hover:shadow-md transition-all"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          New Analysis
        </Button>
      </div>
    </div>
  );
}