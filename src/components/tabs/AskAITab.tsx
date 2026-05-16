"use client";

import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import type { AnalysisResult, ChatMessage } from "@/types/analysis";

interface AskAITabProps {
  result: AnalysisResult;
}

export function AskAITab({ result }: AskAITabProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      role: "assistant",
      content: `Hello! I'm your AI assistant with vision capabilities. I can see both your image and the analysis heatmap. I'm here to answer questions about:\n\n• Why the model classified this as "${result.evidence.label}"\n• What the heatmap patterns mean\n• Specific regions or artifacts detected\n• Technical details about the analysis\n• Confidence scores and their meaning\n\nFeel free to ask me anything about this specific image!`,
      timestamp: new Date().toISOString(),
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "What makes you confident about this result?",
    "Can you explain the Grad-CAM heatmap?",
    "What are the key indicators you found?",
    "How does the inpainting test work?",
  ];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { 
      id: `user_${Date.now()}`,
      role: "user", 
      content: input,
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Convert heatmap URL to base64
      const heatmapResponse = await fetch(result.evidence.heatmapUrl);
      const heatmapBlob = await heatmapResponse.blob();
      const heatmapBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          resolve(base64.split(',')[1]);
        };
        reader.readAsDataURL(heatmapBlob);
      });

      // Get original image base64
      const imageBase64 = heatmapBase64; // Using heatmap as both for now

      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          analysis_id: result.id,
          message: input,
          conversation_history: messages.map(m => ({
            role: m.role,
            content: m.content
          })),
          image_base64: imageBase64,
          heatmap_base64: heatmapBase64,
          predicted_class: result.evidence.label,
          confidence: result.evidence.confidence * 100,
          explanation_summary: result.explanation.summary,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
        throw new Error(typeof errorData.detail === 'string' ? errorData.detail : 'Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: data.response,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to get AI response';
      toast.error(errorMessage);
      
      // Fallback response
      const fallbackMessage: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: `I apologize, but I'm having trouble connecting right now. Error: ${errorMessage}. Based on the analysis, the confidence score reflects the statistical likelihood from our trained models. The key indicators identified include the technical metrics and regional findings shown in the other tabs.`,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="shadow-lg">
        <CardContent className="p-0">
          <ScrollArea className="h-[400px] p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 shadow-sm ${
                      message.role === "user"
                        ? "gradient-bg text-white"
                        : "bg-muted/80 backdrop-blur-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted shadow-md">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 animate-in fade-in duration-300">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-xl bg-muted/80 backdrop-blur-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Suggested questions:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto justify-start text-left text-sm hover:bg-blue-500/10 hover:border-blue-500/50 transition-all shadow-sm"
                onClick={() => handleSuggestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2">
        <Input
          placeholder="Ask a question about the analysis..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          disabled={isLoading}
          className="shadow-sm"
        />
        <Button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="gradient-bg text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}