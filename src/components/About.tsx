import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="thick-border bg-panel p-8 md:p-12 panel-shadow flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="relative w-full md:w-1/3 aspect-square">
          <div className="absolute inset-0 thick-border bg-black/5 dark:bg-white/5 -rotate-3 translate-x-4 translate-y-4" />
          <div className="relative w-full h-full thick-border bg-panel overflow-hidden panel-shadow">
            <img 
              src="PassportPhoto.jpeg"
              alt="Nitya's Avatar" 
            
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">WHO AM I?</h2>
            <div className="h-2 w-24 bg-accent-neon hidden md:block" />
          </div>

          <p className="font-mono text-lg md:text-xl mb-8 leading-relaxed opacity-80">
            I am Nitya.I am a full-stack developer specializing in Python, React, Flask, Machine Learning and AI-driven applications.
            I enjoy building <span className="bg-accent-yellow text-black px-2">scalable systems</span> and visually engaging interfaces. 
          </p>

          <ul className="space-y-4 mb-10">
            {[
              '✔ AI & ML Integration',
              '✔ Flask Backend Architecture',
              '✔ Modern React UI Development',
              '✔ SQL & NoSQL Database Design',
              '✔ Performance Optimization',
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 font-mono text-sm"
              >
                <span className="text-accent-neon font-bold">{'>'}</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <div className="thick-border bg-black text-white px-4 py-2 flex items-center gap-2 font-mono text-xs">
              <MapPin size={14} className="text-red-500" />
              LOCATION: BENGALURU
            </div>
            <div className="thick-border bg-accent-neon text-black px-4 py-2 flex items-center gap-2 font-mono text-xs font-bold">
              <CheckCircle size={14} />
              STATUS: AVAILABLE
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
