import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import { ThemeToggle } from './ThemeToggle';
import portfolioData from '../data/portfolioData.json';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleLinkClick = (event, href) => {
    if (!href?.startsWith('#')) return;

    event.preventDefault();
    setMenuOpen(false);

    if (lenis) {
      lenis.scrollTo(href, { offset: -110, duration: 1.1 });
    } else {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.history.replaceState(null, '', href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-4 md:top-6 z-50 w-full mb-8"
    >
      <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-4 md:px-6 py-4">
        <div className="flex flex-col">
          <div className="text-sm md:text-xl font-bold tracking-tight text-foreground">{portfolioData.profile.name}.</div>
          {/* <div className="text-[8px] uppercase tracking-[0.32em] text-muted-foreground">{portfolioData.profile.role}</div> */}
        </div>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-8">
          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium tracking-wide text-muted-foreground mr-2">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleLinkClick(event, item.href)}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-border bg-card/70 text-foreground hover:bg-card transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden mt-3 rounded-2xl border border-border bg-background/90 backdrop-blur-xl shadow-[0_24px_90px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  className="flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-4 text-sm font-medium text-foreground hover:bg-card transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-muted-foreground text-xs tracking-[0.24em] uppercase">Go</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
