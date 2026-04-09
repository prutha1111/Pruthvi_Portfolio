import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';

import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Philosophy } from './components/Philosophy';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { SelectedWorks } from './components/SelectedWorks';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  
  // Sync Lenis scroll engine correctly with GSAP
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(() => {
    if (lenis) {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
    return () => {
      gsap.ticker.remove((time) => lenis?.raf(time * 1000));
    };
  }, [lenis]);

  // GSAP Entrance Animations
  useEffect(() => {
    const reveals = gsap.utils.toArray('.reveal-up');
    reveals.forEach(elem => {
      gsap.fromTo(elem, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((elem) => {
      gsap.fromTo(elem, 
        { opacity: 0, x: -30 }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="bg-background text-foreground min-h-screen font-sans selection:bg-foreground selection:text-background antialiased overflow-hidden transition-colors duration-500 relative">
        
        {/* Subtle 3D Canvas Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-35">
          <Canvas camera={{ position: [0, 0, 3] }}>
            {/* The fog updates natively based on the global CSS vars or we keep it very subtle */}
            <ParticleBackground />
          </Canvas>
        </div>

        <motion.div
          aria-hidden="true"
          className="fixed -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none z-0"
          animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="fixed top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl pointer-events-none z-0"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.03),_transparent_24%)]" />
        <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />

        {/* Main Content Component Hierarchy */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 md:px-10 lg:px-14 pb-28 pt-4">
          <Navbar />
          <Hero />
          <Metrics />
          <Philosophy />
          <Skills />
          <Process />
          <Experience />
          <SelectedWorks />
          <Testimonials />
          <Contact />
        </div>
        
      </div>
    </ReactLenis>
  );
}
