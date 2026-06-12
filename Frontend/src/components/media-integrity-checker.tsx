"use client";

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Upload, FileImage, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface PredictionResult {
  class: string;
  confidence: number;
  probabilities: Record<string, number>;
  overlay_base64: string;
}

interface ExplanationResult {
  simple: string;
  technical: string;
}

const MediaIntegrityChecker: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<ExplanationResult | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);
    setExplanation(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during analysis');
    } finally {
      setIsLoading(false);
    }
  };

  const getAIExplanation = async () => {
    if (!result || !previewUrl) return;

    setIsExplaining(true);
    setError(null);

    try {
      // Convert preview URL to base64
      const imageResponse = await fetch(previewUrl);
      const imageBlob = await imageResponse.blob();
      const imageBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          // Remove data:image/...;base64, prefix
          resolve(base64.split(',')[1]);
        };
        reader.readAsDataURL(imageBlob);
      });

      const response = await fetch('http://localhost:8000/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          predicted_class: result.class,
          confidence: result.confidence,
          image_base64: imageBase64,
          heatmap_base64: result.overlay_base64,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data: ExplanationResult = await response.json();
      setExplanation(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get AI explanation');
    } finally {
      setIsExplaining(false);
    }
  };

  const getClassIcon = (className: string) => {
    switch (className) {
      case 'Authentic':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'DeepFake':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'AI Generated':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getClassColor = (className: string) => {
    switch (className) {
      case 'Authentic':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'DeepFake':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'AI Generated':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileImage className="w-6 h-6" />
            Media Integrity Checker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            {isDragActive ? (
              <p className="text-blue-600">Drop the image here...</p>
            ) : (
              <div>
                <p className="text-gray-600 mb-2">
                  Drag & drop an image here, or click to select
                </p>
                <p className="text-sm text-gray-400">
                  Supports JPEG and PNG files
                </p>
              </div>
            )}
          </div>

          {selectedFile && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">
                  Selected: {selectedFile.name}
                </p>
                <Button
                  onClick={analyzeImage}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  {isLoading ? 'Analyzing...' : 'Analyze Image'}
                </Button>
              </div>

              {previewUrl && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Original Image</h3>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                  </div>

                  {result && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Grad-CAM Visualization</h3>
                      <img
                        src={`data:image/png;base64,${result.overlay_base64}`}
                        alt="Grad-CAM overlay"
                        className="w-full h-64 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {isLoading && (
            <div className="mt-4">
              <Progress value={undefined} className="w-full" />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Processing image with AI model...
              </p>
            </div>
          )}

          {error && (
            <Alert className="mt-4" variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Analysis Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  {getClassIcon(result.class)}
                  <Badge className={getClassColor(result.class)}>
                    {result.class}
                  </Badge>
                  <span className="text-lg font-semibold">
                    {result.confidence}% confidence
                  </span>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Detailed Probabilities</h4>
                  <div className="space-y-2">
                    {Object.entries(result.probabilities).map(([className, probability]) => (
                      <div key={className} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getClassIcon(className)}
                          <span className="text-sm">{className}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 ml-4">
                          <Progress value={probability} className="flex-1" />
                          <span className="text-sm font-medium w-12 text-right">
                            {probability.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium mb-1">What this means:</p>
                  {result.class === 'Authentic' && (
                    <p>This image appears to be authentic and unmodified.</p>
                  )}
                  {result.class === 'DeepFake' && (
                    <p>This image shows signs of deepfake manipulation or face swapping.</p>
                  )}
                  {result.class === 'AI Generated' && (
                    <p>This image appears to be generated by artificial intelligence.</p>
                  )}
                </div>

                <div className="pt-4 border-t">
                  <Button
                    onClick={getAIExplanation}
                    disabled={isExplaining}
                    className="w-full"
                    variant="outline"
                  >
                    {isExplaining ? 'Getting AI Explanation...' : '🤖 Get AI Explanation'}
                  </Button>
                </div>

                {explanation && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <span>💡</span> Simple Explanation
                      </h4>
                      <p className="text-sm text-blue-800 whitespace-pre-wrap">
                        {explanation.simple}
                      </p>
                    </div>

                    {explanation.technical && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                          <span>🔬</span> Technical Explanation
                        </h4>
                        <p className="text-sm text-purple-800 whitespace-pre-wrap">
                          {explanation.technical}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaIntegrityChecker;