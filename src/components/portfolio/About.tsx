import { Code2, Database, Layers, Sparkles } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Code2, label: "Frontend", text: "React, TypeScript, Tailwind CSS" },
  { icon: Database, label: "Backend", text: "Node.js, REST APIs, Databases" },
  { icon: Layers, label: "Full Stack", text: "End-to-end web applications" },
  { icon: Sparkles, label: "Quality", text: "Clean, maintainable code" },
];

export const About = () => (
  <Section id="about" eyebrow="about me" title={<>Building the web,<br /><span className="text-gradient">one component at a time</span></>}>
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          I'm a passionate Full Stack Developer based in Kabul, Afghanistan. I love
          turning complex problems into simple, beautiful, and intuitive digital
          experiences.
        </p>
        <p>
          With hands-on experience in <span className="text-foreground">HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Node.js</span> and
          modern <span className="text-foreground">databases</span>, I build scalable applications that bring real value to users
          and businesses.
        </p>
        <p>
          When I'm not coding, I'm exploring new technologies, contributing to projects,
          and constantly leveling up my craft.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map(({ icon: Icon, label, text }) => (
          <div key={label} className="glow-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-1">{label}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
