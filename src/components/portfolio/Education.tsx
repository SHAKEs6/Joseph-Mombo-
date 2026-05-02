import { GraduationCap, Award } from "lucide-react";

const education = [
  { year: "2024", title: "Bachelor's Degree in Procurement & Supply Chain Management", org: "Moi Kabarak University" },
  { year: "2022", title: "Diploma in Purchasing & Supplies Management", org: "Moi Kabarak University" },
];

const certs = [
  "CIPS — Chartered Institute of Procurement & Supply (Member)",
  "KISM — Kenya Institute of Supplies Management (Registered)",
  "Public Procurement & Asset Disposal Act (PPADA) Compliance Training",
  "Advanced Microsoft Excel for Procurement Analytics",
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Education & Certifications</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Credentials
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                <GraduationCap className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="mt-6 space-y-6">
              {education.map((e, i) => (
                <div key={i} className="border-l-2 border-accent pl-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{e.year}</span>
                  <p className="mt-1 font-semibold text-foreground">{e.title}</p>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                <Award className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {certs.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full gradient-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
