import { Download, FileText, Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

export const Resume = () => (
  <Section
    id="resume"
    eyebrow="resume & github"
    title={<>My CV & <span className="text-gradient">open source</span></>}
  >
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glow-card rounded-2xl p-8 flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-2">CURRICULUM VITAE</p>
        <h3 className="font-display font-bold text-2xl mb-3">Download my CV</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          A detailed overview of my experience, education, projects and technical
          skills as a Full Stack Developer.
        </p>
        <a
          href="/Ahmad_Zia_Sahil_CV.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all w-fit"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>

      <a
        href="https://github.com/zia-sahil"
        target="_blank"
        rel="noopener noreferrer"
        className="glow-card rounded-2xl p-8 flex flex-col group hover:border-primary/50 transition-all"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Github className="w-6 h-6 text-accent" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="font-mono text-xs text-muted-foreground mb-2">GITHUB PROFILE</p>
        <h3 className="font-display font-bold text-2xl mb-3">@zia-sahil</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          Explore my open source projects, code samples and contributions on GitHub.
        </p>
        <span className="font-mono text-sm text-primary">github.com/zia-sahil</span>
      </a>
    </div>
  </Section>
);
