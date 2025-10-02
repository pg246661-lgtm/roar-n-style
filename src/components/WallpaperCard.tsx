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
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45,95%,60%,0.2)] hover:scale-[1.02]">
      <div className="aspect-[9/16] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
            <Button
              variant="royal"
              size="lg"
              onClick={handleDownload}
              className="w-full"
            >
              <Download />
              Download
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLike}
              className={`w-full ${liked ? "bg-primary/20 border-primary" : ""}`}
            >
              <Heart className={liked ? "fill-primary text-primary" : ""} />
              {liked ? "Liked" : "Like"}
            </Button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20">
          {category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground">4K Ultra HD</p>
      </div>
    </Card>
  );
};

export default WallpaperCard;
