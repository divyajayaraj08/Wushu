import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Wushu fighter performing a high kick"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-secondary font-heading text-sm md:text-base tracking-[0.3em] mb-4 animate-fade-in-up">
          WELCOME TO
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Martial Arts &<br />
          <span className="text-gradient-primary">Multi Sports Club</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Build Strength, Discipline, and Confidence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#contact"
            className="px-8 py-3 rounded-md font-heading font-semibold tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            JOIN NOW
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-md font-heading font-semibold tracking-wider border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
