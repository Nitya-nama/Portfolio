import React from 'react';
import { motion } from 'motion/react';
import { ThreeScene } from './ThreeScene';
import { useTheme } from '../ThemeProvider';
import { Download, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      <ThreeScene theme={theme} />

      {/* Status badge */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }} className="mb-6 md:mb-8">
        <div className="thick-border px-3 py-1 flex items-center gap-2 panel-shadow"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
          <Activity size={12} style={{ color: 'var(--accent-1)' }} className="animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs font-bold" style={{ color: 'var(--text)' }}>
            SYSTEM_STATUS: ONLINE
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <div className="text-center z-10 w-full max-w-5xl mx-auto">
        <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="font-bold leading-none tracking-tighter mb-4"
          style={{
            fontSize: 'clamp(2.8rem, 10vw, 8rem)',
            color: 'var(--text)',
          }}>
          NITYA NAMA
        </motion.h1>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-bold leading-tight tracking-tight mb-8"
          style={{ fontSize: 'clamp(1.4rem, 5vw, 4.5rem)' }}>
          <span style={{ color: 'var(--text)' }}>AI ENGINEER</span>
          <br />
          <span style={{
            background: 'var(--grad-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            FULL STACK ARCHITECT
          </span>
        </motion.div>

        {/* Description box */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="thick-border p-4 md:p-6 panel-shadow max-w-2xl mx-auto mb-8 md:mb-12"
          style={{ background: 'var(--panel)', borderColor: 'var(--accent-1)', color: 'var(--text)' }}>
          <p className="font-mono text-sm md:text-lg font-bold mb-2 leading-relaxed">
            I design and deploy intelligent systems — combining machine learning,
            scalable backend architecture, and modern frontend engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 font-mono text-xs md:text-sm"
            style={{ color: 'var(--text-2)' }}>
            {['Python', 'React', 'SQL', 'Flask', 'MongoDB'].map(t => (
              <span key={t}>• {t}</span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4">
          <a href="nitya_resume.pdf" download="nitya_resume.pdf"
            className="btn-secondary flex items-center gap-2 text-sm md:text-base">
            <Download size={16} />
            DOWNLOAD CV
          </a>
          <a href="#work"
            className="flex items-center gap-2 px-6 py-2 font-mono text-sm font-bold text-white uppercase"
            style={{ background: 'var(--grad-main)' }}>
            VIEW WORK
          </a>
        </motion.div>
      </div>

      {/* Floating shapes — hidden on small screens */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 md:left-20 w-10 h-10 md:w-12 md:h-12 thick-border bg-blue-500 panel-shadow hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 md:right-20 w-12 h-12 md:w-16 md:h-16 thick-border bg-pink-400 rounded-full panel-shadow hidden sm:block"
      />
    </section>
  );
};