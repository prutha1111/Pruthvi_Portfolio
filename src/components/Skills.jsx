import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 reveal-up">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Stack</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{portfolioData.skills.title}</h2>
        <p className="text-muted-foreground mt-4 max-w-xs leading-relaxed">{portfolioData.skills.description}</p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up">
        {portfolioData.skills.categories.map((category) => (
          <div key={category.label} className="group relative border border-border bg-card/70 p-6 rounded-[1.5rem] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.28em] text-muted-foreground font-semibold border-b border-border pb-4">{category.label}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <span key={tech} className="border border-border rounded-full px-3 py-2 text-sm text-muted-foreground bg-background/60 group-hover:text-foreground transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
