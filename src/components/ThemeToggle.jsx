import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { id: 'light', icon: <Sun className="w-4 h-4" /> },
    { id: 'system', icon: <Monitor className="w-4 h-4" /> },
    { id: 'dark', icon: <Moon className="w-4 h-4" /> },
  ];

  return (
    <div className="relative flex items-center p-1 bg-secondary rounded-full border border-border pointer-events-auto">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setTheme(option.id)}
          className={`relative z-10 p-2 rounded-full transition-colors duration-300 ${
            theme === option.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {option.icon}
          {theme === option.id && (
            <motion.div
              layoutId="theme-bubble"
              className="absolute inset-0 bg-background rounded-full shadow-sm"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              style={{ zIndex: -1 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
