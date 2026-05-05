import { GraduationCap, Languages as LangIcon } from "lucide-react";
import { Section } from "./Section";

const languages = [
  { name: "Pashto", level: "Native", pct: 100 },
  { name: "Persian", level: "Native", pct: 100 },
  { name: "English", level: "Professional", pct: 80 },
];

export const EducationLanguages = () => (
  <Section id="education" eyebrow="education & languages" title={<>Background & <span className="text-gradient">communication</span></>}>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glow-card rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-2">EDUCATION</p>
        <h3 className="font-display font-bold text-2xl mb-2">Bachelor of Computer Science</h3>
        <p className="text-muted-foreground">Kabul University</p>
      </div>

      <div className="glow-card rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
          <LangIcon className="w-6 h-6 text-accent" />
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-4">LANGUAGES</p>
        <div className="space-y-4">
          {languages.map((l) => (
            <div key={l.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">{l.name}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
