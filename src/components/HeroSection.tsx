import { Check, Sparkles } from "lucide-react";

export function HeroSection() {
  const features = [
    "Deep learning AI detection",
    "Multi-format support (Image, Video, Audio)",
    "Real-time analysis results",
    "Detailed forensic reports"
  ];

  return (
    <section className="pt-24 pb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Floating Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm floating">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Detect{" "}
            <span className="gradient-text">AI-Generated</span>
            {" "}Content
          </h2>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Advanced machine learning algorithms analyze media files to identify
            artificial intelligence manipulation and synthetic content with
            industry-leading accuracy.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm card-hover shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                  <Check className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-4 mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold gradient-text">94%</div>
              <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold gradient-text">10L+</div>
              <div className="text-xs text-muted-foreground mt-1">Samples Trained</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold gradient-text">&lt;5s</div>
              <div className="text-xs text-muted-foreground mt-1">Analysis Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}