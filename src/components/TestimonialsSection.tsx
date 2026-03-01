import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "My son has completely transformed since joining the club. His confidence, focus, and discipline have improved tremendously. The coach truly cares about every child's growth.",
    name: "Priya M.",
    role: "Parent",
  },
  {
    quote: "I won my first state gold medal after just two years of training here. The techniques and mental preparation I received were world-class.",
    name: "Arjun K.",
    role: "Student, Age 16",
  },
  {
    quote: "As an adult beginner, I was nervous to start. But the welcoming atmosphere and structured classes made it easy. I've never felt healthier or more confident.",
    name: "Rahul S.",
    role: "Adult Student",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">VOICES</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            <span className="text-gradient-primary">Testimonials</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-heading text-foreground font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
