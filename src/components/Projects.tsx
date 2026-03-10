import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'PHARMAGUARD',
    description: 'AI-powered pharmacogenomic risk prediction platform that analyzes patient genetic (.VCF) data to predict personalized drug safety risks using CPIC-aligned guidelines. Built with React (Vite) frontend and Flask REST API backend enabling real-time genomic processing and explainable AI-driven clinical recommendations.',
    tags: ['React (Vite)', 'Flask', 'Python', 'REST APIs', 'CPIC Guidelines', 'VCF Genomics', 'Vercel'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw8ri5Dxq2i1ayCFhyzxAEdahifhh2bgItw&s',
    github: 'https://github.com/Chandan-N-2004/RIFT2026_AI_HUNTERS',
    live: 'https://rift-2026-ai-hunters.vercel.app/'
  },
  {
    title: 'CINERENT ERP',
    description: 'Scalable full-stack ERP system with JWT-based multi-role authentication managing 1,000+ transactional records across billing, inventory, and equipment rental modules. Improved workflow efficiency by 35% through modularized React components with Context API/Redux and lazy loading.',
    tags: ['React', 'Node.js', 'REST APIs', 'JWT Auth', 'Context API/Redux', 'MySQL'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/c7cd9884349537.5d5a84abd818a.jpg',
    github: 'https://github.com/Nitya-nama/Cinerent'
  },
  {
    title: 'EMOTION DETECTION AI',
    description: 'Transformer-based NLP emotion classification web app using Hugging Face BERT, achieving 92% accuracy with optimized inference pipeline reducing API response latency to <250ms. Full-stack Flask app with RESTful APIs improving throughput by 35% through backend caching and async request handling.',
    tags: ['Flask', 'Python', 'Hugging Face', 'BERT', 'NLP', 'JavaScript', 'REST APIs'],
    image: 'https://emotionlogic.ai/wp-content/uploads/2023/08/Firefly-Generate-illustrative-visual-representations-depicting-methods-of-emotion-detection-using-vo-e1691590316220.jpg',
    github: 'https://github.com/Nitya-nama/Emotion-Detection'
  },
  {
    title: 'ECOVISION',
    description: 'AI-enhanced economic forecasting web app with predictive ML models using ARIMA and LSTM, achieving 88% forecasting accuracy through feature engineering and cross-validation. Flask REST API backend with interactive JavaScript dashboard reducing prediction time by 40%.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'ARIMA', 'LSTM', 'JavaScript', 'REST APIs'],
    image: 'https://static.wixstatic.com/media/371c03_0f3513cb4f3944b1a8329d2b8bdc7fc2~mv2.png/v1/fit/w_2500,h_1330,al_c/371c03_0f3513cb4f3944b1a8329d2b8bdc7fc2~mv2.png',
    github: 'https://github.com/Nitya-nama/EcoVision'
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
