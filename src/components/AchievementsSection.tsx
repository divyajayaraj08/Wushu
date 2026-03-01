import { Trophy, Medal, Award } from "lucide-react";

const categories = [
  {
    icon: Trophy,
    title: "National Level",
    color: "text-secondary",
    borderClass: "border-secondary/30 hover:border-secondary/60",
    bgClass: "bg-secondary/10",
    achievements: [
      { medal: "🥇", event: "National Wushu Championship", year: "2023" },
      { medal: "🥈", event: "All India Martial Arts Open", year: "2022" },
      { medal: "🥇", event: "National Junior Wushu Cup", year: "2024" },
    ],
  },
  {
    icon: Medal,
    title: "State Level",
    color: "text-primary",
    borderClass: "border-primary/30 hover:border-primary/60",
    bgClass: "bg-primary/10",
    achievements: [
      { medal: "🥇", event: "State Wushu Championship", year: "2024" },
      { medal: "🥇", event: "State Sports Festival – Wushu", year: "2023" },
      { medal: "🥈", event: "Inter-State Kung Fu Open", year: "2022" },
      { medal: "🥉", event: "State Junior Wushu Cup", year: "2023" },
    ],
  },
  {
    icon: Award,
    title: "District Level",
    color: "text-foreground",
    borderClass: "border-border hover:border-foreground/40",
    bgClass: "bg-foreground/5",
    achievements: [
      { medal: "🥇", event: "District Wushu Championship", year: "2024" },
      { medal: "🥇", event: "District Sports Meet – Martial Arts", year: "2023" },
      { medal: "🥈", event: "Inter-School Wushu Tournament", year: "2024" },
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">OUR PRIDE</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            <span className="text-gradient-gold">Achievements</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-card border ${cat.borderClass} rounded-lg p-6 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full ${cat.bgClass} flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className={`font-heading text-xl font-bold ${cat.color}`}>{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 bg-accent/50 rounded-md p-3">
                    <span className="text-xl">{a.medal}</span>
                    <div>
                      <p className="text-foreground text-sm font-medium">{a.event}</p>
                      <p className="text-muted-foreground text-xs">{a.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
