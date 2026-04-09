import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Process = () => {
  return (
    <section id="process" className="py-32 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 reveal-up">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Core strengths</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{portfolioData.process.title}</h2>
        <p className="text-muted-foreground mt-4 max-w-xs leading-relaxed">{portfolioData.process.description}</p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up">
        {portfolioData.process.items.map((competency, index) => (
          <div key={competency} className="group flex gap-4 border border-border bg-card/70 p-6 rounded-[1.25rem] hover:-translate-y-1 transition-transform duration-500 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <span className="text-muted-foreground text-sm tracking-[0.2em] font-bold border-b border-border pb-4 min-w-12 group-hover:text-foreground transition-colors">{String(index + 1).padStart(2, '0')}</span>
            <p className="text-foreground leading-relaxed mt-1 text-sm md:text-base">{competency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
