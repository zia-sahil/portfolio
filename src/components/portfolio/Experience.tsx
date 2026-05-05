import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const jobs = [
  {
    role: "Web Developer Intern",
    company: "ShafaHub",
    period: "2024 — Present",
    points: [
      "Developed and maintained responsive web interfaces using React and Tailwind CSS",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Integrated REST APIs and improved overall application performance",
    ],
  },
  {
    role: "CRM Officer",
    company: "Refah Alami",
    period: "2023 — 2024",
    points: [
      "Managed customer relationships and digital communication channels",
      "Streamlined CRM workflows, improving response times and client satisfaction",
      "Coordinated cross-team initiatives to enhance customer experience",
    ],
  },
];

export const Experience = () => (
  <Section id="experience" eyebrow="experience" title={<>Where I've <span className="text-gradient">worked</span></>}>
    <div className="relative">
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
      <div className="space-y-12">
        {jobs.map((job, i) => (
          <div key={job.company} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
            <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[var(--shadow-glow)]" />
              <p className="font-mono text-xs text-primary mb-2">{job.period}</p>
              <h3 className="font-display font-bold text-xl">{job.role}</h3>
              <p className="text-muted-foreground flex items-center gap-2 md:justify-end mt-1" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                <Briefcase className="w-4 h-4" /> {job.company}
              </p>
            </div>
            <div className={`pl-14 md:pl-0 mt-4 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p} className="leading-relaxed">— {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
