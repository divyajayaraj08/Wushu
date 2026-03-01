import { Shield, Heart, Users, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Self-Defense", desc: "Practical techniques for real-world safety and awareness." },
  { icon: Heart, title: "Fitness & Health", desc: "Full-body conditioning that builds strength and endurance." },
  { icon: Users, title: "All Ages", desc: "Programs for kids, teens, and adults at every skill level." },
  { icon: Award, title: "Pro Coaching", desc: "Certified instructors in a safe, supportive environment." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">WHO WE ARE</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            About <span className="text-gradient-primary">The Club</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          Martial Arts and Multi Sports Club is dedicated to transforming lives through the art of Wushu.
          We build discipline, confidence, and physical fitness in a professional and safe training environment.
          Whether you're a beginner or a competitive athlete, our programs are designed to push your limits
          and unlock your true potential.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
