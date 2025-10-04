import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Loader2, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const AIGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a description for your lion wallpaper");
      return;
    }

    setGenerating(true);
    setGeneratedImage(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-wallpaper', {
        body: { prompt }
      });

      if (error) throw error;

      if (data?.imageUrl) {
        setGeneratedImage(data.imageUrl);
        toast.success("Your lion wallpaper has been generated!");
      } else {
        throw new Error("No image was generated");
      }
    } catch (error: any) {
      console.error('Generation error:', error);
      if (error.message?.includes('Rate limit')) {
        toast.error("Rate limit exceeded. Please try again later.");
      } else if (error.message?.includes('credits')) {
        toast.error("AI credits exhausted. Please add credits to continue.");
      } else {
        toast.error("Failed to generate wallpaper. Please try again.");
      }
    } finally {
      setGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `lion-wallpaper-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Wallpaper downloaded!");
  };

  const examplePrompts = [
    "Majestic lion with golden mane at sunset",
    "White lion in snowy mountains",
    "Lion pride under starry night sky",
    "Fierce lion with glowing eyes",
  ];

  return (
    <section id="generator" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            AI{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Wallpaper
            </span>{" "}
            Generator
          </h2>
          <p className="text-lg text-muted-foreground">
            Describe your dream lion wallpaper and let AI create it for you
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-border/50">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">
                Describe your wallpaper
              </label>
              <div className="flex gap-3">
                <Input
                  placeholder="e.g., A majestic lion with golden mane at sunset..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  className="flex-1 bg-input border-border focus:border-primary"
                  disabled={generating}
                />
                <Button
                  variant="royal"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={generating}
                  className="shrink-0"
                >
                  {generating ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Try these examples:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    disabled={generating}
                    className="text-left p-3 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/50 transition-all text-sm text-foreground disabled:opacity-50"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-sm text-muted-foreground border-t border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Powered by Lovable AI</span>
            </div>
          </div>
        </Card>

        {generatedImage && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
            <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Your Generated Wallpaper</h3>
                  <Button
                    variant="royal"
                    size="sm"
                    onClick={handleDownload}
                  >
                    <Download />
                    Download
                  </Button>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={generatedImage}
                    alt="Generated lion wallpaper"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIGenerator;
