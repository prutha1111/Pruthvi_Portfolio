import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-8 md:p-12 text-center shadow-[0_24px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.05),_transparent_30%)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground uppercase tracking-[0.28em] text-sm mb-6 font-semibold border border-border bg-background/70 w-fit px-4 py-2 rounded-full">{portfolioData.contact.eyebrow}</p>
          <h2 className="text-4xl md:text-[4.5rem] leading-[1.03] font-semibold tracking-tight text-foreground mb-8 max-w-4xl">
            {portfolioData.contact.headline}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-10">
            <span className="border border-border bg-background/70 px-4 py-2 rounded-full">{portfolioData.contact.location}</span>
            <span className="border border-border bg-background/70 px-4 py-2 rounded-full">{portfolioData.contact.phone}</span>
          </div>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-2xl md:text-3xl font-medium border-b border-muted-foreground pb-2 hover:text-foreground hover:border-foreground transition-colors cursor-pointer pointer-events-auto">
            {portfolioData.contact.email}
          </a>
          
          <div className="mt-14 w-full flex flex-col sm:flex-row justify-between items-center text-muted-foreground text-sm border-t border-border pt-8">
            <p>© {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0 pointer-events-auto">
              {portfolioData.contact.socials.map((social) => (
                <a key={social.label} href={social.href} className="hover:text-foreground transition-colors">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
