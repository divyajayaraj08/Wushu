const schedule = [
  { day: "Monday", kids: "5:00 PM – 6:30 PM", adults: "7:00 PM – 8:30 PM" },
  { day: "Tuesday", kids: "5:00 PM – 6:30 PM", adults: "7:00 PM – 8:30 PM" },
  { day: "Wednesday", kids: "5:00 PM – 6:30 PM", adults: "7:00 PM – 8:30 PM" },
  { day: "Thursday", kids: "5:00 PM – 6:30 PM", adults: "7:00 PM – 8:30 PM" },
  { day: "Friday", kids: "5:00 PM – 6:30 PM", adults: "7:00 PM – 8:30 PM" },
  { day: "Saturday", kids: "9:00 AM – 11:00 AM", adults: "11:30 AM – 1:00 PM" },
  { day: "Sunday", kids: "9:00 AM – 11:00 AM", adults: "11:30 AM – 1:00 PM" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading tracking-[0.2em] text-sm mb-2">PLAN YOUR WEEK</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            Training <span className="text-gradient-primary">Schedule</span>
          </h2>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left py-3 px-4 font-heading text-sm tracking-wider text-foreground">Day</th>
                <th className="text-left py-3 px-4 font-heading text-sm tracking-wider text-foreground">Kids Batch</th>
                <th className="text-left py-3 px-4 font-heading text-sm tracking-wider text-foreground">Adults Batch</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.day} className={i % 2 === 0 ? "bg-card" : "bg-accent/30"}>
                  <td className="py-3 px-4 font-medium text-foreground text-sm">{row.day}</td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{row.kids}</td>
                  <td className="py-3 px-4 text-muted-foreground text-sm">{row.adults}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
