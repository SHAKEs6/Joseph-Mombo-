import { Target, Handshake, TrendingUp, ShieldCheck } from "lucide-react";

const values = [
  { icon: Target, title: "Strategic", text: "Aligning procurement with broader business objectives." },
  { icon: Handshake, title: "Relational", text: "Long-term, trust-based supplier partnerships." },
  { icon: TrendingUp, title: "Results-driven", text: "Measurable savings without compromising quality." },
  { icon: ShieldCheck, title: "Compliant", text: "Strict adherence to public & private sector standards." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">About me</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Procurement built on integrity & results.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm Joseph Mombo, a procurement officer with hands-on experience managing
                end-to-end purchasing cycles — from requisition planning and supplier sourcing
                to contract negotiation, delivery, and performance evaluation.
              </p>
              <p>
                I work at the intersection of operations and finance, helping organizations
                tighten their supply chains, eliminate waste, and unlock measurable savings
                while maintaining full regulatory and ethical compliance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-accent">
                  <v.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
