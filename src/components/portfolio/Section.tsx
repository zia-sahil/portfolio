import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

export const Section = ({ id, eyebrow, title, children }: Props) => (
  <section id={id} className="section-padding max-w-7xl mx-auto">
    <div className="mb-16 max-w-2xl">
      <p className="font-mono text-primary text-sm mb-3">// {eyebrow}</p>
      <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);
