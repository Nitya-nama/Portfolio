import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState('');
  const fullText = [
    '> Initializing portfolio...',
    '> Loading modules...',
    '> System online.'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (currentLine < fullText.length) {
        if (currentChar < fullText[currentLine].length) {
          setText(prev => prev + fullText[currentLine][currentChar]);
          currentChar++;
          timeout = setTimeout(type, 50);
        } else {
          setText(prev => prev + '\n');
          currentLine++;
          currentChar = 0;
          timeout = setTimeout(type, 500);
        }
      } else {
        setTimeout(onComplete, 1000);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center p-8"
    >
      <div className="w-full max-w-md font-mono text-accent-neon text-lg whitespace-pre-wrap">
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
              <Experience />
              <Projects />
              <Contact />
            </main>
            <footer className="py-12 px-4 md:px-8 border-t-2 border-black/10 dark:border-white/10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-mono text-xs opacity-40">
                  © 2026 NITYA.EXE // ALL RIGHTS RESERVED
                </div>
                <div className="flex gap-8 font-mono text-xs opacity-40">
                  <a href="https://github.com/Nitya-nama" className="hover:text-accent-neon transition-colors">GITHUB</a>
                  <a href="https://www.linkedin.com/in/nitya-nama/" className="hover:text-accent-neon transition-colors">LINKEDIN</a>
                </div>
                <div className="font-mono text-[10px] bg-accent-neon text-black px-2 py-1 font-bold">
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
