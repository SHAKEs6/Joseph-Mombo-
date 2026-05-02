const technical = [
  { name: "Strategic Sourcing", level: 95 },
  { name: "Contract Negotiation", level: 92 },
  { name: "Vendor Management", level: 90 },
  { name: "Spend & Cost Analysis", level: 88 },
  { name: "Inventory Optimization", level: 85 },
  { name: "ERP Systems (SAP / Odoo)", level: 80 },
];

const soft = ["Negotiation", "Communication", "Analytical Thinking", "Ethics & Integrity", "Stakeholder Management", "Problem Solving", "Attention to Detail", "Team Leadership"];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Capabilities</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Skills & expertise
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">Technical</h3>
            <div className="mt-6 space-y-5">
              {technical.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full gradient-accent transition-smooth" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">Professional</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {soft.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card transition-smooth hover:gradient-accent hover:text-accent-foreground hover:border-transparent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
