import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap } from 'lucide-react';

const skills = [
  { name: 'REACT', category: 'FRAMEWORK' },
  { name: 'NEXT.JS', category: 'FRAMEWORK' },
  { name: 'PYTHON', category: 'LANGUAGE' },
  { name: 'NODE.JS', category: 'BACKEND' },
  { name: 'TAILWIND', category: 'STYLING' },
  { name: 'MYSQL', category: 'DATA' },
  { name: 'HTML5', category: 'CORE' },
  { name: 'GIT', category: 'VERSION' },
  { name: 'GRAPHQL', category: 'QUERY' },
  { name: 'GITHUB', category: 'OPS' },
  { name: 'JAVA', category: 'LANGUAGE' },
  { name: 'DJANGO', category: 'FRAMEWORK' },
  { name: 'PHP', category: 'LANGUAGE' },
  { name: 'LARAVEL', category: 'FRAMEWORK' },
  { name: 'THREE.JS', category: '3D' },
  { name: 'C++', category: 'LANGUAGE' },
];

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-neon" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-neon" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-2">
              TECH<span className="text-accent-neon">_STACK</span>
            </h2>
            <div className="h-1 w-full bg-white/20" />
          </div>
          <div className="flex items-center gap-2 text-accent-neon font-mono text-[10px] mb-2">
            <Zap size={12} fill="currentColor" />
            /// SYSTEM_OPTIMIZED
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-l border-white/20">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', scale: 1.05, zIndex: 10 }}
              className="border-r border-b border-white/20 p-6 flex flex-col items-center justify-center text-center group cursor-crosshair transition-all"
            >
              <span className="text-[10px] font-mono opacity-40 mb-2 group-hover:text-accent-neon transition-colors">
                {skill.category}
              </span>
              <span className="font-mono font-bold text-sm tracking-widest">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center font-mono text-[10px] opacity-40">
          <span>TOTAL_NODES: {skills.length}</span>
          <span>MEMORY_USAGE: 128MB</span>
        </div>
      </div>
    </section>
  );
};
