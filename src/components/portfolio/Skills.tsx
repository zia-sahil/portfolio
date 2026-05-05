import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { title: "Frameworks & Libraries", items: ["React", "Tailwind CSS", "Node.js"] },
  { title: "Databases & Tools", items: ["MySQL", "MongoDB", "Git", "REST APIs"] },
  { title: "Other", items: ["Responsive Design", "UI/UX", "CRM", "Problem Solving"] },
];

export const Skills = () => (
  <Section id="skills" eyebrow="skills" title={<>Tools I <span className="text-gradient">work with</span></>}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {groups.map((g) => (
        <div key={g.title} className="glow-card rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
            {g.title}
          </h3>
          <ul className="space-y-2">
            {g.items.map((s) => (
              <li key={s} className="flex items-center gap-2 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);
