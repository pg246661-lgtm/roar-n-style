import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import heroLion from "@/assets/hero-lion.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLion}
          alt="Majestic Lion"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Create Your Own{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              Lion Wallpapers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Get 1000+ HD & 4K AI-generated lion images in one place. Download now and give your phone a royal look.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="royal"
              size="xl"
              onClick={scrollToGallery}
              className="group"
            >
              <Download className="group-hover:animate-bounce" />
              Browse Wallpapers
            </Button>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToGenerator}
              className="group"
            >
              <Sparkles className="group-hover:rotate-180 transition-transform duration-500" />
              Create with AI
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">HD Wallpapers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-secondary">4K</div>
              <div className="text-sm text-muted-foreground">Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">Free</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
