import { ClipboardList, Search, FileSignature, Truck, BarChart3, Users, PackageCheck, Scale } from "lucide-react";

const services = [
  { icon: Search, title: "Strategic Sourcing", text: "Market analysis, supplier identification and pre-qualification to secure best-value partners." },
  { icon: FileSignature, title: "Contract Negotiation", text: "Drafting, negotiating and managing supplier contracts that protect commercial interests." },
  { icon: Users, title: "Vendor Management", text: "Onboarding, performance scorecards, and long-term supplier relationship development." },
  { icon: ClipboardList, title: "Tendering & RFx", text: "End-to-end RFQ, RFP and tender management aligned with PPDA & internal policy." },
  { icon: Truck, title: "Logistics & Delivery", text: "Coordinating inbound logistics, customs and timely delivery to operational sites." },
  { icon: PackageCheck, title: "Inventory Control", text: "Stock optimization, reorder planning, and waste reduction across warehouses." },
  { icon: BarChart3, title: "Spend Analysis", text: "Data-driven spend visibility, category management and cost-saving roadmaps." },
  { icon: Scale, title: "Compliance & Audit", text: "Procurement audits, risk assessment and policy alignment with statutory requirements." },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Services</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What I deliver
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Comprehensive procurement support tailored to organizations of every size and sector.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elegant"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/5 transition-smooth group-hover:scale-150 group-hover:bg-accent/10" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-smooth group-hover:gradient-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-serif text-lg font-bold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
