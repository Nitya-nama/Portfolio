import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const categories = [
  {
    label: 'LANGUAGES',
    color: 'var(--accent-1)',
    skills: ['PYTHON', 'JAVA', 'C++', 'SQL', 'JAVASCRIPT', 'HTML/CSS'],
  },
  {
    label: 'AI / ML',
    color: 'var(--accent-2)',
    skills: ['TENSORFLOW', 'PYTORCH', 'SCIKIT-LEARN', 'KERAS', 'BERT / NLP', 'ARIMA', 'LSTM', 'PANDAS', 'NUMPY'],
  },
  {
    label: 'WEB & BACKEND',
    color: 'var(--accent-3)',
    skills: ['REACT', 'FLASK', 'DJANGO', 'REST APIs', 'JWT AUTH', 'NODE.JS', 'TAILWIND'],
  },
  {
    label: 'DATA & CLOUD',
    color: 'var(--accent-1)',
    skills: ['MYSQL', 'POSTGRESQL', 'MONGODB', 'POWER BI', 'TABLEAU', 'LOOKER STUDIO', 'AWS', 'GCP', 'AZURE', 'VERCEL'],
  },
  {
    label: 'TOOLS & OPS',
    color: 'var(--accent-3)',
    skills: ['GIT', 'GITHUB', 'JUPYTER', 'GOOGLE COLAB', 'CI/CD', 'MVC'],
  },
];

export const TechStack: React.FC = () => (
  <section id="skills" className="py-24 relative overflow-hidden"
    style={{ background: 'var(--bg-dark, #0d0b14)', color: '#f0eeff' }}>
    {/* top / bottom accent lines */}
    <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'var(--accent-1)' }} />
    <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ background: 'var(--accent-1)' }} />

    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-2">
            TECH<span style={{ color: 'var(--accent-1)' }}>_STACK</span>
          </h2>
          <div className="h-0.5 w-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] mb-2" style={{ color: 'var(--accent-1)' }}>
          <Zap size={12} fill="currentColor" />
          /// SYSTEM_OPTIMIZED
        </div>
      </div>

      {/* Skill categories */}
      <div className="space-y-6">
        {categories.map((cat, ci) => (
          <div key={cat.label}>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5"
                style={{ background: cat.color, color: '#fff', letterSpacing: '0.08em' }}>
                {cat.label}
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>

            {/* Skill cells */}
            <div className="grid border-t border-l"
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
                gridTemplateColumns: `repeat(auto-fill, minmax(130px, 1fr))`,
              }}>
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (ci * cat.skills.length + i) * 0.025 }}
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)`, scale: 1.04, zIndex: 10 }}
                  className="border-r border-b px-4 py-4 flex flex-col items-center justify-center text-center cursor-crosshair transition-all group"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="font-mono font-bold text-xs tracking-widest" style={{ color: '#f0eeff' }}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer stats */}
      <div className="mt-10 flex justify-between items-center font-mono text-[10px]"
        style={{ color: 'rgba(255,255,255,0.25)' }}>
        <span>TOTAL_NODES: {categories.reduce((a, c) => a + c.skills.length, 0)}</span>
        <span>CATEGORIES: {categories.length}</span>
        <span>MEMORY_USAGE: 256MB</span>
      </div>
    </div>
  </section>
);