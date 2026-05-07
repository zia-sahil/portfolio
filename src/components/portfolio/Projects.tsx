import { ArrowUpRight, Star, Globe, Database } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Database,
    featured: true,
    title: "Directorate of Publications Management System",
    description:
      "A comprehensive management information system designed to streamline publication workflows, document tracking, role-based access and reporting for organizational decision making.",
    tags: ["React", "TypeScript", "Node.js", "Database", "REST APIs"],
  },
  {
    icon: Globe,
    featured: false,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS. Features a professional UI/UX design, smooth animations and a fully mobile-friendly layout.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Responsive"],
  },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="featured work"
    title={<>Selected <span className="text-gradient">projects</span></>}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <article
          key={p.title}
          className="glow-card rounded-2xl p-8 relative overflow-hidden group flex flex-col"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
          <div className="relative flex-1">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              {p.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Star className="w-3 h-3 text-primary" />
                  <span className="text-xs font-mono text-primary">Featured</span>
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
          >
            Learn more <ArrowUpRight className="w-4 h-4" />
          </a>
        </article>
      ))}
    </div>
  </Section>
);
