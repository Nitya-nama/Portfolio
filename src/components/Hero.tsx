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
        <div className="thick-border px-4 py-1 flex items-center gap-2 panel-shadow"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
          <Activity size={14} style={{ color: 'var(--accent-1)' }} className="animate-pulse" />
          <span className="font-mono text-xs font-bold" style={{ color: 'var(--text)' }}>SYSTEM_STATUS: ONLINE</span>
        </div>
      </motion.div>

      <div className="text-center z-10">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl md:text-9xl font-bold leading-none tracking-tighter mb-4"
          style={{ color: 'var(--text)' }}
        >
          NITYA NAMA<br />
          <span className="block text-5xl md:text-7xl font-bold leading-tight tracking-tight mt-2"
            style={{ color: 'var(--text)' }}>
            AI ENGINEER
            <br />
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              FULL STACK ARCHITECT
            </span>
          </span>
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="thick-border p-6 panel-shadow max-w-2xl mx-auto mb-12"
          style={{
            background: 'var(--panel)',
            borderColor: 'var(--accent-1)',
            color: 'var(--text)',
          }}
        >
          <p className="font-mono text-lg font-bold mb-2">
              I design and deploy intelligent systems — combining machine learning,
              scalable backend architecture, and modern frontend engineering.
          </p>
          <div className="flex justify-center gap-4 font-mono text-sm opacity-80"
            style={{ color: 'var(--text-2)' }}>
          • <span>Python</span> • <span>React</span> • <span>SQL</span> • <span>Flask</span> • <span>MongoDB</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="./nitya_resume.pdf"
            download="nitya_resume.pdf"
            className="btn-secondary flex items-center gap-2"
          >
            <Download size={18} />
            DOWNLOAD CV
          </a>
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