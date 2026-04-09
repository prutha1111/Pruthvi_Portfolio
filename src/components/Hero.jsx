import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export const Hero = () => {
  return (
    <section className="min-h-[82vh] flex items-center pb-24 border-b border-border reveal-up">
      <div className="w-full max-w-5xl flex flex-col justify-center">
        <p className="text-muted-foreground uppercase tracking-[0.28em] text-xs md:text-sm mb-6 font-semibold border border-border bg-secondary/60 w-fit px-4 py-2 rounded-full">
          {portfolioData.hero.eyebrow}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] leading-[0.92] font-semibold tracking-tight text-foreground max-w-4xl mb-6"
        >
          {portfolioData.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
        >
          {portfolioData.hero.description}
        </motion.p>
        <p className="max-w-2xl text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-10">
          Focused on ASP.NET Core MVC, Entity Framework Core, and building practical web apps with clean architecture.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a href={portfolioData.hero.primaryCta.href} className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all inline-flex items-center gap-2 cursor-pointer pointer-events-auto shadow-lg shadow-foreground/10">
            {portfolioData.hero.primaryCta.label}
          </a>
          <a href={portfolioData.hero.secondaryCta.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer pointer-events-auto relative group overflow-hidden py-3">
            {portfolioData.hero.secondaryCta.label}
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-foreground transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
          {portfolioData.hero.details.map((detail) => (
            <span key={detail} className="border border-border bg-card/70 px-4 py-2 rounded-full backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              {detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
