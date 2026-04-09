import React from 'react';
import portfolioData from '../data/portfolioData.json';

export const Testimonials = () => {
  return (
    <section className="py-32 border-b border-border reveal-up" id="testimonials">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4 text-center md:text-left">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center md:text-left">{portfolioData.testimonials.title}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.testimonials.items.map((certification) => (
          <div key={certification.title} className="border border-border bg-card/70 p-6 rounded-[1.25rem] flex flex-col gap-3 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Certification</span>
            <h3 className="text-lg font-semibold text-foreground leading-snug">{certification.title}</h3>
            <p className="text-muted-foreground text-sm">{certification.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
