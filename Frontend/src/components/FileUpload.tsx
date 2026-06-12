"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, File, X, Image as ImageIcon, Video, Music, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

interface FileUploadProps {
  onAnalyze: (file: File) => void;
}

export function FileUpload({ onAnalyze }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;
    
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size exceeds 10MB limit");
      return;
    }

    setSelectedFile(file);
    
    // Create preview for images and videos
    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
    
    toast.success(`File "${file.name}" selected successfully`);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "video/mp4": [".mp4"],
      "audio/wav": [".wav"],
    },
    maxFiles: 1,
  });

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="h-5 w-5" />;
    if (type.startsWith("video/")) return <Video className="h-5 w-5" />;
    if (type.startsWith("audio/")) return <Music className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleRemove = () => {
    setSelectedFile(null);
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      onAnalyze(selectedFile);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {!selectedFile ? (
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-all relative overflow-hidden group ${
            isDragActive
              ? "border-blue-500 bg-blue-500/5 scale-105"
              : "border-border/50 hover:border-blue-500/50 hover:bg-muted/30"
          }`}
        >
          <input {...getInputProps()} />
          
          {/* Shimmer Effect */}
          {!isDragActive && <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />}
          
          {/* Animated Circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>
          
          <div className="relative z-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <Upload className={`h-10 w-10 text-white ${isDragActive ? 'animate-bounce' : ''}`} />
            </div>
            <h3 className="mt-6 text-xl font-semibold">
              {isDragActive ? "Drop your file here" : "Upload Media File"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Drag and drop or click to browse
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="shadow-sm">JPG</Badge>
              <Badge variant="secondary" className="shadow-sm">PNG</Badge>
              <Badge variant="secondary" className="shadow-sm">MP4</Badge>
              <Badge variant="secondary" className="shadow-sm">WAV</Badge>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Maximum file size: 10MB
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-6 shadow-lg animate-in fade-in zoom-in-95 duration-300">
          {preview && selectedFile.type.startsWith("image/") && (
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img
                src={preview}
                alt="Preview"
                className="h-48 w-full object-cover"
              />
            </div>
          )}
          
          {preview && selectedFile.type.startsWith("video/") && (
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <video
                src={preview}
                className="h-48 w-full object-cover"
                controls
              />
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                {getFileIcon(selectedFile.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemove}
              className="shrink-0 hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleAnalyze}
            className="mt-6 w-full gradient-bg text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all group"
            size="lg"
          >
            <Zap className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Analyze Media
          </Button>
        </div>
      )}
    </div>
  );
}