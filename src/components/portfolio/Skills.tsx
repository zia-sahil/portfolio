import { Section } from "./Section";
import { Code2, Server } from "lucide-react";

const frontend = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"];
const backend = ["Node.js", "Express.js", "Database Management", "REST APIs", "Git & GitHub"];

const Pill = ({ label }: { label: string }) => (
  <span className="px-3 py-1.5 text-sm font-mono rounded-lg bg-secondary/60 text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
    {label}
  </span>
);

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="tech stack"
    title={<>Front-end & <span className="text-gradient">Back-end</span></>}
  >
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glow-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">CLIENT SIDE</p>
            <h3 className="font-display font-bold text-xl">Front-End Technologies</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {frontend.map((s) => <Pill key={s} label={s} />)}
        </div>
      </div>

      <div className="glow-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Server className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">SERVER SIDE</p>
            <h3 className="font-display font-bold text-xl">Back-End Technologies</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {backend.map((s) => <Pill key={s} label={s} />)}
        </div>
      </div>
    </div>
  </Section>
);
