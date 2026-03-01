import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Star } from 'lucide-react';

const testimonials = [
  {
    id: 'REPORT_003.LOG',
    text: "Cleanest code I've seen in years. He knows how to handle complex state management.",
    author: 'STUDENT @ L J UNIVERSITY',
    color: 'border-pink-500'
  },
  {
    id: 'REPORT_004.LOG',
    text: "Creative designing idea and provided a Unique UI experience.",
    author: 'DEV @ CREATIVECHAOS',
    color: 'border-purple-500'
  },
  {
    id: 'REPORT_005.LOG',
    text: "Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it.",
    author: 'UX DESIGNER @ TECHFLOW',
    color: 'border-orange-500'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="thick-border border-white/10 bg-white/5 p-4 inline-flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-xs font-bold">USER_REPORTS.txt</span>
          <span className="bg-blue-500 text-white px-2 py-0.5 text-[8px] font-bold">LIVE_FEED</span>
        </div>
      </div>

      <div className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-12 no-scrollbar">
        {testimonials.map((t, i) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`min-w-[300px] md:min-w-[400px] thick-border ${t.color} bg-[#141414] p-8 panel-shadow`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-[10px] opacity-40">{t.id}</span>
              <span className="font-mono text-[10px] opacity-40">2025.txt</span>
            </div>
            <p className="text-lg font-mono mb-8 leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-mono opacity-40 uppercase mb-1">From:</p>
                <p className="text-xs font-bold font-mono">{t.author}</p>
              </div>
              <div className="flex gap-1 text-accent-yellow">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -top-6 left-8 bg-accent-yellow text-black px-4 py-2 thick-border font-mono font-bold z-10 panel-shadow -rotate-2">
          START A PROJECT
        </div>
        
        <div className="thick-border bg-panel p-8 md:p-16 panel-shadow flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-none">LET'S<br />TALK<br />CODE.</h2>
            <p className="font-mono text-lg opacity-60 mb-12 max-w-md">
              I am currently available for freelance work and open to full-time opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 thick-border bg-black text-white flex items-center justify-center group-hover:bg-accent-neon group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-mono text-sm md:text-lg font-bold">nityanama101@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 thick-border bg-black text-white flex items-center justify-center group-hover:bg-accent-neon group-hover:text-black transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="font-mono text-sm md:text-lg font-bold">BENGALURU</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="thick-border border-black/10 p-8 bg-black/5 dark:bg-white/5">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] opacity-40 uppercase">Identity</label>
                  <input 
                    type="text" 
                    placeholder="NAME / COMPANY" 
                    className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/20 py-2 font-mono focus:border-accent-neon outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] opacity-40 uppercase">Coordinates</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/20 py-2 font-mono focus:border-accent-neon outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] opacity-40 uppercase">Transmission</label>
                  <textarea 
                    rows={4}
                    placeholder="PROJECT DETAILS..." 
                    className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/20 py-2 font-mono focus:border-accent-neon outline-none transition-colors resize-none"
                  />
                </div>
                <button className="w-full btn-primary py-4 flex items-center justify-center gap-3">
                  <Send size={18} />
                  TRANSMIT_DATA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
