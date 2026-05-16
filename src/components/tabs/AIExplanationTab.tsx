"use client";

import { useState } from "react";
import { Brain, Camera, ScanEye, TrendingUp, Sparkles, MapPin, AlertTriangle, Layers, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AnalysisResult } from "@/types/analysis";
import Image from "next/image";

interface AIExplanationTabProps {
  result: AnalysisResult;
}

interface OllamaExplanation {
  simple: string;
  technical: string;
}

export function AIExplanationTab({ result }: AIExplanationTabProps) {
  const { evidence, explanation } = result;
  const [ollamaExplanation, setOllamaExplanation] = useState<OllamaExplanation | null>(null);
  const [isLoadingOllama, setIsLoadingOllama] = useState(false);
  const [ollamaError, setOllamaError] = useState<string | null>(null);

  const getOllamaExplanation = async () => {
    setIsLoadingOllama(true);
    setOllamaError(null);

    try {
      // Convert heatmap URL to base64
      const heatmapResponse = await fetch(evidence.heatmapUrl);
      const heatmapBlob = await heatmapResponse.blob();
      const heatmapBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          resolve(base64.split(',')[1]);
        };
        reader.readAsDataURL(heatmapBlob);
      });

      // Get original image base64 (assuming it's available in result)
      const imageBase64 = heatmapBase64; // For now, using heatmap as both

      const response = await fetch('http://localhost:8000/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          predicted_class: evidence.label,
          confidence: evidence.confidence * 100, // Convert to percentage
          image_base64: imageBase64,
          heatmap_base64: heatmapBase64,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
        throw new Error(typeof errorData.detail === 'string' ? errorData.detail : JSON.stringify(errorData.detail));
      }

      const data: OllamaExplanation = await response.json();
      setOllamaExplanation(data);
    } catch (err) {
      console.error('Ollama explanation error:', err);
      let errorMessage = 'Failed to get AI explanation';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      
      setOllamaError(errorMessage);
    } finally {
      setIsLoadingOllama(false);
    }
  };
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500/10 text-red-600 border-red-500/30";
      case "medium": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/30";
      case "low": return "bg-blue-500/10 text-blue-600 border-blue-500/30";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* LLM Summary */}
      <Card className="card-hover shadow-lg border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            AI Explanation
          </CardTitle>
          <CardDescription>Detailed analysis from our explainability system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {explanation.summary}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Detailed Explanation</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {explanation.detailedExplanation}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Confidence Explanation</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {explanation.confidenceExplanation}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Ollama Vision AI Explanation */}
      <Card className="card-hover shadow-lg border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-500" />
            🤖 Vision AI Deep Analysis
          </CardTitle>
          <CardDescription>Advanced explanation using MiniCPM-V vision model</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!ollamaExplanation && !isLoadingOllama && (
            <div className="text-center py-6">
              <p className="text-sm text-muted-foreground mb-4">
                Get an advanced AI explanation that analyzes both the image and heatmap patterns
              </p>
              <Button 
                onClick={getOllamaExplanation}
                className="gap-2"
                size="lg"
              >
                <Sparkles className="h-4 w-4" />
                Get Vision AI Explanation
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                This may take 10-30 seconds
              </p>
            </div>
          )}

          {isLoadingOllama && (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-500" />
              <p className="text-sm text-muted-foreground">
                Analyzing image with vision AI model...
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                This may take a moment on first request
              </p>
            </div>
          )}

          {ollamaError && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-sm text-red-600">
                <strong>Error:</strong> {ollamaError}
              </p>
              <Button 
                onClick={getOllamaExplanation}
                variant="outline"
                size="sm"
                className="mt-3"
              >
                Try Again
              </Button>
            </div>
          )}

          {ollamaExplanation && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <span>💡</span> Simple Explanation
                </h4>
                <p className="text-sm leading-relaxed text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
                  {ollamaExplanation.simple}
                </p>
              </div>

              {ollamaExplanation.technical && (
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-purple-700 dark:text-purple-300">
                    <span>🔬</span> Technical Explanation
                  </h4>
                  <p className="text-sm leading-relaxed text-purple-900 dark:text-purple-100 whitespace-pre-wrap">
                    {ollamaExplanation.technical}
                  </p>
                </div>
              )}

              <Button 
                onClick={getOllamaExplanation}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Regenerate Explanation
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Heatmap Visualization */}
      <Card className="card-hover shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-purple-500" />
            Grad-CAM Heatmap
          </CardTitle>
          <CardDescription>Visual representation of model attention regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative rounded-lg overflow-hidden border border-border">
            <div className="relative w-full aspect-video bg-muted">
              <Image
                src={evidence.heatmapUrl}
                alt="Grad-CAM Heatmap"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Warmer colors (red/yellow) indicate regions with higher model activation, suggesting areas of interest or potential manipulation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Region Highlights from SAM */}
      {explanation.regionHighlights.length > 0 && (
        <Card className="card-hover shadow-lg border-orange-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              Detected Regions
            </CardTitle>
            <CardDescription>Specific areas flagged by the analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {explanation.regionHighlights.map((highlight) => {
                const region = evidence.regions.find(r => r.id === highlight.regionId);
                if (!region) return null;
                
                return (
                  <div 
                    key={highlight.regionId}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="font-semibold text-sm">Region {highlight.regionId.split('_')[1]}</span>
                      </div>
                      <Badge className={getSeverityColor(highlight.severity)}>
                        {highlight.severity}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {highlight.shortNote}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-muted/50">
                        <span className="text-muted-foreground">Confidence:</span>
                        <span className="ml-1 font-semibold">{(region.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="p-2 rounded bg-muted/50">
                        <span className="text-muted-foreground">Heat Mean:</span>
                        <span className="ml-1 font-semibold">{region.heatStats.mean.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded bg-muted/50">
                        <span className="text-muted-foreground">Heat Max:</span>
                        <span className="ml-1 font-semibold">{region.heatStats.max.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded bg-muted/50">
                        <span className="text-muted-foreground">BBox:</span>
                        <span className="ml-1 font-semibold">[{region.bbox.join(', ')}]</span>
                      </div>
                    </div>
                    
                    {region.artifacts.length > 0 && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-xs font-semibold mb-2">Detected Artifacts:</p>
                        <div className="flex flex-wrap gap-1">
                          {region.artifacts.map((artifact, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {artifact}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technical Metrics */}
      <Card className="card-hover shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            Technical Analysis
          </CardTitle>
          <CardDescription>Forensic indicators and detection methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Frequency Anomalies</span>
                <Badge variant={evidence.technicalMetrics.frequencyAnomalies ? "destructive" : "outline"}>
                  {evidence.technicalMetrics.frequencyAnomalies ? "Detected" : "None"}
                </Badge>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Resampling</span>
                <Badge variant={evidence.technicalMetrics.resamplingDetected ? "destructive" : "outline"}>
                  {evidence.technicalMetrics.resamplingDetected ? "Detected" : "None"}
                </Badge>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Compression Issues</span>
                <Badge variant={evidence.technicalMetrics.compressionInconsistencies ? "destructive" : "outline"}>
                  {evidence.technicalMetrics.compressionInconsistencies ? "Found" : "None"}
                </Badge>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lighting Issues</span>
                <Badge variant={evidence.technicalMetrics.lightingInconsistencies ? "destructive" : "outline"}>
                  {evidence.technicalMetrics.lightingInconsistencies ? "Found" : "None"}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Information */}
      <Card className="card-hover shadow-lg">
        <CardHeader>
          <CardTitle>Model Information</CardTitle>
          <CardDescription>Technical specifications of the analysis system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 text-sm">
            <div className="flex justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <span className="text-muted-foreground">Model Version:</span>
              <span className="font-medium">{evidence.modelVersion}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <span className="text-muted-foreground">Processing Time:</span>
              <span className="font-medium">{(result.processingTimeMs / 1000).toFixed(2)}s</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <span className="text-muted-foreground">Regions Analyzed:</span>
              <span className="font-medium">{evidence.regions.length}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <span className="text-muted-foreground">Analysis Date:</span>
              <span className="font-medium">{new Date(result.uploadedAt).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}