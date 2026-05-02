import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FormEvent } from "react";

const contacts = [
  { icon: Mail, label: "Email", value: "mwasijoseph55@gmail.com", href: "mailto:mwasijoseph55@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 110 703 032", href: "tel:+254110703032" },
  { icon: Phone, label: "Alt. phone", value: "+254 736 626 313", href: "tel:+254736626313" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: null },
];

export const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:mwasijoseph55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
    form.reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Let's work together
          </h2>
          <p className="mt-4 text-base text-primary-foreground/70 sm:text-lg">
            Open to consulting engagements, full-time roles and procurement advisory.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {contacts.map((c) => {
              const Inner = (
                <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur transition-smooth hover:bg-primary-foreground/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg gradient-accent">
                    <c.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/60">{c.label}</p>
                    <p className="mt-0.5 truncate font-medium text-primary-foreground">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">{Inner}</a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-primary-foreground/80">Name</Label>
                <Input id="name" name="name" required className="mt-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email" className="text-primary-foreground/80">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-primary-foreground/80">Message</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Tell me about your project or role…" />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-accent text-accent-foreground hover:opacity-90 shadow-glow">
              <Mail className="mr-2 h-4 w-4" /> Send message
            </Button>
          </form>
        </div>

        <footer className="mt-16 border-t border-primary-foreground/15 pt-8 text-center text-sm text-primary-foreground/60">
          © 2026 Joseph Mombo · Procurement Officer · Nairobi, Kenya
        </footer>
      </div>
    </section>
  );
};
