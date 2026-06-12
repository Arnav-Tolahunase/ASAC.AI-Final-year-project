"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "./tabs/OverviewTab";
import { AIExplanationTab } from "./tabs/AIExplanationTab";
import { AskAITab } from "./tabs/AskAITab";
import type { AnalysisResult } from "@/types/analysis";

interface AnalysisResultsProps {
  result: AnalysisResult;
  onStartOver: () => void;
}

export function AnalysisResults({ result, onStartOver }: AnalysisResultsProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold">Analysis Complete</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Results for: {result.fileName}
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="explanation">AI Explanation</TabsTrigger>
          <TabsTrigger value="ask-ai">Ask AI</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <OverviewTab result={result} onStartOver={onStartOver} />
        </TabsContent>

        <TabsContent value="explanation" className="mt-6">
          <AIExplanationTab result={result} />
        </TabsContent>

        <TabsContent value="ask-ai" className="mt-6">
          <AskAITab result={result} />
        </TabsContent>
      </Tabs>
    </div>
  );
}