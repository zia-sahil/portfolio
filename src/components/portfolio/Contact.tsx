import { Mail, Phone, ArrowUpRight } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="section-padding max-w-7xl mx-auto">
    <div className="glow-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative">
        <p className="font-mono text-primary text-sm mb-3">// get in touch</p>
        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-5">
          Let's build something <span className="text-gradient">great</span>.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          I'm currently open to new opportunities and freelance work. Drop me a message
          and I'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ah.ziasahil@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur hover:border-primary/50 transition-all w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium">ah.ziasahil@gmail.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="tel:+93782494917"
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur hover:border-primary/50 transition-all w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-medium">+93 782 494 917</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </div>

    <footer className="text-center text-sm text-muted-foreground mt-16 font-mono">
      © {new Date().getFullYear()} Ahmad Zia Sahil — Crafted with care.
    </footer>
  </section>
);
