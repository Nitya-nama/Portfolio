import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'STOCKEASY',
    description: 'An Online Stock Market Platform with Stock analysis, Chatbot and admin panel for user support.',
    tags: ['Django', 'Python', 'Streamlit', 'Redis', 'Websockets', 'MySQL', 'Yfinance API'],
    image: 'https://picsum.photos/seed/stock/600/400'
  },
  {
    title: 'RESUMEIQ',
    description: 'A Resume Analyzer + Resume Builder which helps users check there resume and also build new resume from scratch.',
    tags: ['Streamlit', 'MySQL', 'Gemini API'],
    image: 'https://picsum.photos/seed/resume/600/400'
  },
  {
    title: 'A.I.V.A CHATBOT',
    description: 'Chatbot AI which answers all questions, does tasks assigned and also analyzes documents given by users.',
    tags: ['Django', 'Python', 'MySQL', 'AI'],
    image: 'https://picsum.photos/seed/aiva/600/400'
  },
  {
    title: 'PORTFOLIO V1',
    description: 'Portfolio made Using React, node and three.js. Fully Responsive and 3d animated components.',
    tags: ['React', 'Node', 'Three.js'],
    image: 'https://picsum.photos/seed/port/600/400'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 md:px-8 bg-accent-yellow/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl font-bold">SELECTED<br /><span className="text-transparent border-text" style={{ WebkitTextStroke: '2px var(--text)' }}>WORKS</span></h2>
          <p className="font-mono text-sm max-w-xs opacity-60 mb-2">
            A collection of projects that push the boundaries of web development and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="thick-border bg-panel panel-shadow group"
            >
              <div className="relative aspect-video overflow-hidden border-b-2 border-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 thick-border bg-accent-neon flex items-center justify-center panel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="font-mono text-sm opacity-70 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-black text-white px-3 py-1 font-mono text-[10px] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
