import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Metrics = () => {
  return (
    <section className="py-16 border-b border-border grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 reveal-up">
      {portfolioData.metrics.map((metric) => (
        <div key={metric.label} className="rounded-[1.25rem] border border-border bg-card/70 backdrop-blur-sm p-5 md:p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
          <span className="text-4xl md:text-5xl font-semibold text-foreground block">{metric.num}</span>
          <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.22em] mt-2 block">{metric.label}</span>
        </div>
      ))}
    </section>
  );
};
