import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "@/assets/joseph-mombo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-3rem)] gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, hsl(38 65% 52%) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(210 40% 98%) 0%, transparent 40%)"
      }} />

      <div className="container relative mx-auto px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Procurement & Supply Chain Professional
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Joseph <span className="text-gradient-accent">Mombo</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Driving cost efficiency and operational excellence through strategic sourcing,
              vendor partnerships, and end-to-end supply chain optimization.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-accent text-accent-foreground hover:opacity-90 shadow-glow transition-smooth"
              >
                <Link to="/contact"><Mail className="mr-2 h-4 w-4" /> Get in touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">View services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              {[
                { n: "6+", l: "Years" },
                { n: "120+", l: "Vendors" },
                { n: "25%", l: "Avg. savings" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl font-bold text-accent">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gradient-accent opacity-30 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border-4 border-accent/40 lg:block" />
              <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full border-4 border-primary-foreground/20 lg:block" />
              <img
                src={portrait}
                alt="Joseph Mombo, Procurement Officer, professional portrait"
                className="relative z-10 h-72 w-72 rounded-2xl object-cover shadow-elegant ring-4 ring-primary-foreground/10 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
