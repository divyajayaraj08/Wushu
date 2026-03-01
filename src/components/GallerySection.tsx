const images = [
  { label: "Training Session", emoji: "🥋" },
  { label: "Competition Day", emoji: "🏆" },
  { label: "Medal Ceremony", emoji: "🏅" },
  { label: "Group Photo", emoji: "👥" },
  { label: "Wushu Forms", emoji: "⚔️" },
  { label: "Sparring Drills", emoji: "🤼" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">MOMENTS</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            <span className="text-gradient-gold">Gallery</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.label}
              className="aspect-square bg-card border border-border rounded-lg flex flex-col items-center justify-center hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{img.emoji}</span>
              <p className="text-muted-foreground text-sm font-heading tracking-wider">{img.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          Upload your training and competition photos to bring this gallery to life.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
