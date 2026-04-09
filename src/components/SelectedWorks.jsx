import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export const SelectedWorks = () => {
  return (
    <section id="work" className="py-32 border-b border-border">
      <div className="reveal-up mb-20">
        <h2 className="text-3xl font-semibold tracking-tight">{portfolioData.works.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-10">
        {portfolioData.works.items.map((work) => (
          <motion.div
            key={work.title}
            className="group reveal-up border border-border bg-card rounded-[1.5rem] p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-5 block">{work.category}</span>
              <h3 className="text-3xl md:text-4xl font-semibold mb-5 flex items-center gap-4 group-hover:text-foreground text-foreground/85 transition-colors leading-tight tracking-tight">
                {work.title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8 max-w-3xl">{work.detail}</p>
              {work.highlights && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {work.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed rounded-2xl border border-border bg-background/55 p-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0"></span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-4 items-center pt-2 border-t border-border/70">
                <span className="h-[1px] w-12 bg-foreground/20 group-hover:w-24 group-hover:bg-foreground transition-all duration-500"></span>
                <a href={work.githubUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold tracking-widest text-muted-foreground uppercase group-hover:text-foreground transition-colors duration-500">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
