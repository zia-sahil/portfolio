import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: "var(--gradient-hero)" }}>
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />
      {/* Floating orb */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-mono text-muted-foreground">Available for opportunities</span>
        </div>

        <p className="font-mono text-primary text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          {"<hello world />"}
        </p>

        <h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Ahmad Zia <span className="text-gradient">Sahil</span>
        </h1>

        <h2
          className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Full Stack Developer
        </h2>

        <p
          className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Passionate Full Stack Developer with experience in building modern,
          responsive, and user-friendly web applications using modern front-end and
          back-end technologies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-primary/50 hover:bg-card transition-all"
          >
            Contact Me
          </a>
          <a
            href="/Ahmad_Zia_Sahil_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <a href="mailto:ah.ziasahil@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/zia-sahil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
