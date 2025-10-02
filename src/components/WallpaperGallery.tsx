import WallpaperCard from "./WallpaperCard";
import lion1 from "@/assets/lion-1.jpg";
import lion2 from "@/assets/lion-2.jpg";
import lion3 from "@/assets/lion-3.jpg";
import lion4 from "@/assets/lion-4.jpg";
import lion5 from "@/assets/lion-5.jpg";

const wallpapers = [
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
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Wallpapers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked collection of the most majestic lion wallpapers in stunning 4K quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wallpapers.map((wallpaper, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
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
