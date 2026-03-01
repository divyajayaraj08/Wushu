import { Star } from "lucide-react";

const CoachSection = () => {
  return (
    <section id="coach" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">MEET YOUR</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            Head <span className="text-gradient-primary">Coach</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12 text-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <span className="font-heading text-3xl font-bold text-primary">🥋</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Certified Wushu Master</h3>
          <p className="text-secondary font-heading tracking-wider text-sm mb-6">HEAD INSTRUCTOR</p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With over 15 years of experience in Wushu and martial arts, our head coach has dedicated
            his life to the art of combat sports. A certified Wushu trainer and former national
            competitor, he has trained hundreds of students—many of whom have gone on to win medals at
            district, state, and national levels. His passion for developing champions is matched only
            by his commitment to creating a safe, encouraging training environment.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Students Trained" },
              { value: "100+", label: "Medals Won" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-heading font-bold text-primary">{s.value}</p>
                <p className="text-muted-foreground text-xs tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
