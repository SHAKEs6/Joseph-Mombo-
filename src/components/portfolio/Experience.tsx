const roles = [
  {
    period: "2023 — Present",
    role: "Senior Procurement Officer",
    org: "Confidential — Nairobi, Kenya",
    points: [
      "Manage an annual procurement portfolio across goods, works and services categories.",
      "Reduced average sourcing cycle by 30% through framework agreements and pre-qualified vendor pools.",
      "Lead supplier performance reviews and quarterly category strategy updates.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Procurement Officer",
    org: "Private Sector — Mombasa, Kenya",
    points: [
      "Oversaw end-to-end RFQ and tender processes worth over KES 80M annually.",
      "Built a 120+ vendor database with risk, capacity and compliance scoring.",
      "Delivered 25% average cost savings on key categories through competitive negotiation.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Procurement Assistant",
    org: "Logistics & Operations — Kenya",
    points: [
      "Supported requisition processing, PO issuance and goods-received reconciliation.",
      "Maintained accurate inventory records and assisted internal & external audits.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Experience</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Professional journey
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <div key={i} className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                  <div className={`absolute left-2 top-2 h-4 w-4 rounded-full gradient-accent ring-4 ring-background md:left-1/2 md:-translate-x-1/2`} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{r.period}</span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{r.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{r.org}</p>
                  <ul className={`mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {r.points.map((p, j) => (
                      <li key={j} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
