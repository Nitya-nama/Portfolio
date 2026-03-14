import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const LOADING_LINES = [
  '> Initializing portfolio...',
  '> Loading modules...',
  '> System online.'
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState('');
  const lineRef = useRef(0);
  const charRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    // Reset on each effect run (handles StrictMode double-invoke)
    lineRef.current = 0;
    charRef.current = 0;
    doneRef.current = false;
    setText('');

    const type = () => {
      if (doneRef.current) return;

      const line = lineRef.current;
      const char = charRef.current;

      if (line >= LOADING_LINES.length) {
        doneRef.current = true;
        timeoutRef.current = setTimeout(onComplete, 1000);
        return;
      }

      const currentLine = LOADING_LINES[line];

      if (char < currentLine.length) {
        setText(prev => prev + currentLine[char]);
        charRef.current++;
        timeoutRef.current = setTimeout(type, 50);
      } else {
        setText(prev => prev + '\n');
        lineRef.current++;
        charRef.current = 0;
        timeoutRef.current = setTimeout(type, 500);
      }
    };

    type();

    return () => {
      doneRef.current = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center p-8"
    >
      <div className="w-full max-w-md font-mono text-lg whitespace-pre-wrap"
        style={{ color: 'var(--accent-1)' }}>
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="scanline" />
            <Navbar />
            <main>
              <Hero />
              <About />
              <TechStack />
              <Certifications />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <footer className="py-12 px-4 md:px-8"
              style={{ borderTop: '2px solid var(--border)' }}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                  © 2026 NITYA.EXE // ALL RIGHTS RESERVED
                </div>
                <div className="flex gap-8 font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                  <a href="https://github.com/Nitya-nama"
                    className="transition-colors hover:opacity-100"
                    style={{ opacity: 0.6 }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                    GITHUB
                  </a>
                  <a href="https://www.linkedin.com/in/nitya-nama/"
                    className="transition-colors"
                    style={{ opacity: 0.6 }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                    LINKEDIN
                  </a>
                </div>
                <div className="font-mono text-[10px] px-2 py-1 font-bold text-white"
                  style={{ background: 'var(--accent-1)' }}>
                  V.2.0.4_STABLE
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}