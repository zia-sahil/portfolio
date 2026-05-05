import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./Section";

export const Projects = () => (
  <Section id="projects" eyebrow="featured work" title={<>Selected <span className="text-gradient">projects</span></>}>
    <div className="glow-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Star className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono text-primary">Featured Project</span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Management Information System
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A comprehensive MIS platform designed to streamline organizational data
            management, reporting, and decision making. Built with a modern stack to
            handle complex workflows, role-based access and rich data visualization.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "Database"].map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border">
                {t}
              </span>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
            View case study <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mock UI */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-border bg-background/60 backdrop-blur p-4 shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="w-3 h-3 rounded-full bg-accent/70" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-2/3 rounded bg-muted" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border" />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-muted" />
                <div className="h-2 w-5/6 rounded bg-muted" />
                <div className="h-2 w-4/6 rounded bg-muted" />
              </div>
              <div className="h-20 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-end gap-1 p-3">
                {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-primary/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
