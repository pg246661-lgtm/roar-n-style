import WallpaperCard from "./WallpaperCard";
import lion1 from "@/assets/lion-1.jpg";
import lion2 from "@/assets/lion-2.jpg";
import lion3 from "@/assets/lion-3.jpg";
import lion4 from "@/assets/lion-4.jpg";
import lion5 from "@/assets/lion-5.jpg";
import lionDark1 from "@/assets/lion-dark-1.jpg";

const wallpapers = [
  {
    image: lionDark1,
    title: "Midnight Sovereign",
    category: "Dark",
  },
  {
    image: lion1,
    title: "Roaring Majesty",
    category: "Portrait",
  },
  {
    image: lion2,
    title: "Sunset Silhouette",
    category: "Nature",
  },
  {
    image: lion3,
    title: "Mystic White",
    category: "Artistic",
  },
  {
    image: lion4,
    title: "Pride Family",
    category: "Wildlife",
  },
  {
    image: lion5,
    title: "Golden Mane",
    category: "Portrait",
  },
];

const WallpaperGallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Wallpapers
              </span>
            </h2>
            <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked collection of the most majestic lion wallpapers in stunning 4K quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {wallpapers.map((wallpaper, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationDuration: '600ms'
              }}
            >
              <WallpaperCard {...wallpaper} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallpaperGallery;
