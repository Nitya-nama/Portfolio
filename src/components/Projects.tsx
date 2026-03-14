import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'PHARMAGUARD',
    description: 'AI-powered pharmacogenomic risk prediction platform that analyzes patient genetic (.VCF) data to predict personalized drug safety risks using CPIC-aligned guidelines. Built with React (Vite) frontend and Flask REST API backend enabling real-time genomic processing and explainable AI-driven clinical recommendations.',
    tags: ['React (Vite)', 'Flask', 'Python', 'REST APIs', 'CPIC Guidelines', 'VCF Genomics', 'Vercel'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw8ri5Dxq2i1ayCFhyzxAEdahifhh2bgItw&s',
    github: 'https://github.com/Chandan-N-2004/RIFT2026_AI_HUNTERS',
    live: 'https://rift-2026-ai-hunters.vercel.app/',
  },
  {
    title: 'CINERENT ERP',
    description: 'Scalable full-stack ERP system with JWT-based multi-role authentication managing 1,000+ transactional records across billing, inventory, and equipment rental modules. Improved workflow efficiency by 35% through modularized React components with Context API/Redux and lazy loading.',
    tags: ['React', 'Node.js', 'REST APIs', 'JWT Auth', 'Context API/Redux', 'MySQL'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c7cd9884349537.5d5a84abd818a.jpg',
    github: 'https://github.com/Nitya-nama/Cinerent_ERP',
    live: null,
  },
  {
    title: 'EMOTION DETECTION AI',
    description: 'Transformer-based NLP emotion classification web app using Hugging Face BERT, achieving 92% accuracy with optimized inference pipeline reducing API response latency to <250ms. Full-stack Flask app with RESTful APIs improving throughput by 35% through backend caching and async request handling.',
    tags: ['Flask', 'Python', 'Hugging Face', 'BERT', 'NLP', 'JavaScript', 'REST APIs'],
    image: 'https://emotionlogic.ai/wp-content/uploads/2023/08/Firefly-Generate-illustrative-visual-representations-depicting-methods-of-emotion-detection-using-vo-e1691590316220.jpg',
    github: 'https://github.com/Nitya-nama/Emotion-detection',
    live: null,
  },
  {
    title: 'ECOVISION',
    description: 'AI-enhanced economic forecasting web app with predictive ML models using ARIMA and LSTM, achieving 88% forecasting accuracy through feature engineering and cross-validation. Flask REST API backend with interactive JavaScript dashboard reducing prediction time by 40%.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'ARIMA', 'LSTM', 'JavaScript', 'REST APIs'],
    image: 'https://static.wixstatic.com/media/371c03_0f3513cb4f3944b1a8329d2b8bdc7fc2~mv2.png/v1/fit/w_2500,h_1330,al_c/371c03_0f3513cb4f3944b1a8329d2b8bdc7fc2~mv2.png',
    github: 'https://github.com/Nitya-nama/ECOVISION',
    live: 'https://ecovision-frontend-gold.vercel.app/',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 md:px-8" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl font-bold" style={{ color: 'var(--text)' }}>
            SELECTED<br />
            <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>WORKS</span>
          </h2>
          <p className="font-mono text-sm max-w-xs mb-2" style={{ color: 'var(--text-2)' }}>
            A collection of projects that push the boundaries of web development and user experience.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="thick-border panel-shadow group flex flex-col"
              style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}
            >
              {/* ── Image — clicking opens live or github ── */}
              <a
                href={project.live ?? project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video overflow-hidden border-b-2 cursor-pointer"
                style={{ borderColor: 'var(--border)' }}
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Live badge */}
                {project.live && (
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 font-mono text-[10px] font-bold text-white rounded-sm"
                    style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    LIVE
                  </div>
                )}

                {/* Arrow icon */}
                <div className="absolute top-4 right-4">
                  <div
                    className="w-12 h-12 thick-border flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    style={{ background: 'var(--accent-1)', borderColor: 'var(--accent-1)', color: '#fff' }}
                  >
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>

              {/* ── Card body ── */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed mb-8 flex-1" style={{ color: 'var(--text-2)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-[10px] uppercase"
                      style={{
                        background: 'color-mix(in srgb, var(--accent-1) 12%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent-1) 30%, transparent)',
                        color: 'var(--text-2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ── Action buttons ── */}
                <div className="flex gap-4 flex-wrap">
                  {/* GitHub — always shown */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-bold uppercase thick-border transition-all duration-200 hover:opacity-80 active:scale-95"
                    style={{
                      background: 'var(--panel-alt)',
                      color: 'var(--text)',
                      borderColor: 'var(--border)',
                    }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={15} />
                    GITHUB
                  </a>

                  {/* Live demo — only if deployed */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-bold uppercase text-white transition-all duration-200 hover:opacity-80 active:scale-95"
                      style={{ background: 'var(--grad-main)' }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};