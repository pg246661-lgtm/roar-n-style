import Hero from "@/components/Hero";
import WallpaperGallery from "@/components/WallpaperGallery";
import AIGenerator from "@/components/AIGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WallpaperGallery />
      <AIGenerator />
      <Footer />
    </div>
  );
};

export default Index;
