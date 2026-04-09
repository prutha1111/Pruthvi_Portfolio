import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-4 reveal-up">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Education</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{portfolioData.experience.title}</h2>
      </div>
      <div className="lg:col-span-8 flex flex-col gap-6">
        {portfolioData.experience.items.map((job) => (
          <div key={`${job.company}-${job.period}`} className="timeline-item relative rounded-[1.5rem] border border-border bg-card/70 p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-foreground/30 via-border to-transparent"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2 pl-4">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">{job.role}</h3>
              <span className="text-muted-foreground text-xs md:text-sm tabular-nums tracking-[0.22em] uppercase bg-background/70 px-3 py-2 rounded-full border border-border mt-2 sm:mt-0">{job.period}</span>
            </div>
            <h4 className="text-foreground/80 font-medium mb-4 pl-4">{job.company}</h4>
            <p className="text-muted-foreground leading-relaxed font-light pl-4">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
