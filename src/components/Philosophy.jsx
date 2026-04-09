import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Philosophy = () => {
  return (
    <section id="about" className="py-32 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 reveal-up">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Overview</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">{portfolioData.about.title}</h2>
      </div>
      <div className="lg:col-span-8 reveal-up">
        <div className="rounded-[1.75rem] border border-border bg-card/70 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm">
          <p className="text-lg md:text-[1.35rem] leading-relaxed text-muted-foreground font-light max-w-4xl">
            {portfolioData.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};
