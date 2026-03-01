import { Swords, Flame, Zap, Brain, Accessibility } from "lucide-react";

const benefits = [
  { icon: Swords, label: "Self-Defense" },
  { icon: Flame, label: "Fitness" },
  { icon: Brain, label: "Discipline" },
  { icon: Zap, label: "Confidence" },
  { icon: Accessibility, label: "Flexibility" },
];

const levels = [
  { title: "Beginners", desc: "Fundamentals, basic stances, and introductory forms." },
  { title: "Intermediate", desc: "Advanced techniques, sparring drills, and weapon forms." },
  { title: "Advanced", desc: "Competition prep, choreography, and elite conditioning." },
];

const ClassesSection = () => {
  return (
    <section id="classes" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">TRAIN WITH US</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            Wushu <span className="text-gradient-primary">Classes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground leading-relaxed">
            Wushu is a modern Chinese martial art that combines speed, power, and grace. It develops
            full-body coordination, mental focus, and athletic performance through dynamic forms and
            combat techniques. Open to kids, teens, and adults of all fitness levels.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5"
            >
              <b.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((l, i) => (
            <div
              key={l.title}
              className={`rounded-lg p-6 border text-center ${
                i === 1
                  ? "bg-primary/10 border-primary/40"
                  : "bg-card border-border"
              }`}
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{l.title}</h3>
              <p className="text-muted-foreground text-sm">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3 flex-wrap">
          {["Kids (5-12)", "Teens (13-17)", "Adults (18+)"].map((ag) => (
            <span key={ag} className="bg-secondary/10 text-secondary font-heading text-sm tracking-wider px-4 py-2 rounded-md">
              {ag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
