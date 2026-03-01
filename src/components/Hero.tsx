import React from 'react';
import { motion } from 'motion/react';
import { ThreeScene } from './ThreeScene';
import { useTheme } from '../ThemeProvider';
import { Database, Download, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <ThreeScene theme={theme} />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="thick-border bg-panel px-4 py-1 flex items-center gap-2 panel-shadow">
          <Activity size={14} className="text-accent-neon animate-pulse" />
          <span className="font-mono text-xs font-bold">SYSTEM_STATUS: ONLINE</span>
        </div>
      </motion.div>

      <div className="text-center z-10">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl md:text-9xl font-bold leading-none tracking-tighter mb-4"
        >
          NITYA NAMA<br />
          <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px var(--text)' }}>
            PYTHON FULL STACK DEVELOPER
          </span>
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="thick-border bg-accent-yellow text-black p-6 panel-shadow max-w-2xl mx-auto mb-12"
        >
          <p className="font-mono text-lg font-bold mb-2">
            Building AI-powered and scalable web applications.
          </p>
          <div className="flex justify-center gap-4 font-mono text-sm opacity-80">
            <span>Python</span> • <span>React</span> • <span>SQL and MongoDB</span> • <span>Flask</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="btn-secondary flex items-center gap-2">
            <Download size={18} />
            DOWNLOAD CV
          </button>
        </motion.div>
      </div>

      {/* Floating Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-12 h-12 thick-border bg-blue-500 panel-shadow hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 thick-border bg-pink-400 rounded-full panel-shadow hidden md:block"
      />
    </section>
  );
};
