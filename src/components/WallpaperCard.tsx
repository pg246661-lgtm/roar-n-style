import { Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

interface WallpaperCardProps {
  image: string;
  title: string;
  category: string;
}

const WallpaperCard = ({ image, title, category }: WallpaperCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = `lion-wallpaper-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Wallpaper downloaded!");
  };

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from favorites" : "Added to favorites!");
  };

  return (
    <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_hsl(45,95%,60%,0.3)] hover:-translate-y-2">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary border border-primary/30 shadow-lg">
          {category}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Button
              variant="royal"
              size="lg"
              onClick={handleDownload}
              className="w-full shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLike}
              className={`w-full shadow-lg transition-all duration-300 ${
                liked ? "bg-primary/20 border-primary text-primary" : "hover:bg-primary/10"
              }`}
            >
              <Heart className={`mr-2 h-4 w-4 transition-all duration-300 ${liked ? "fill-primary text-primary scale-110" : ""}`} />
              {liked ? "Liked" : "Like"}
            </Button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 space-y-2 bg-gradient-to-b from-card/80 to-card">
        <h3 className="font-bold text-lg text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground font-medium">4K Ultra HD</p>
      </div>
    </Card>
  );
};

export default WallpaperCard;
