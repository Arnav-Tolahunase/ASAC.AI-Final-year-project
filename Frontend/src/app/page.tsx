"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FileUpload } from "@/components/FileUpload";
import { AnalysisProgress } from "@/components/AnalysisProgress";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Toaster } from "@/components/ui/sonner";
import type { AnalysisResult } from "@/types/analysis";

type AppState = "upload" | "analyzing" | "results";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = (file: File) => {
    setSelectedFile(file);
    setAppState("analyzing");
  };

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setAppState("results");
  };

  const handleStartOver = () => {
    setSelectedFile(null);
    setAnalysisResult(null);
    setAppState("upload");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-16">
        {appState === "upload" && (
          <>
            <HeroSection />
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FileUpload onAnalyze={handleAnalyze} />
            </section>
          </>
        )}

        {appState === "analyzing" && selectedFile && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <AnalysisProgress 
              file={selectedFile}
              onComplete={handleAnalysisComplete} 
            />
          </section>
        )}

        {appState === "results" && analysisResult && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            <AnalysisResults 
              result={analysisResult}
              onStartOver={handleStartOver}
            />
          </section>
        )}
      </main>

      <Toaster />
    </div>
  );
}