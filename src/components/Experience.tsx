import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    title: "Python Full Stack Intern",
    company: "PySpiders, Bengaluru",
    date: "Jan 2026 – Present",
    color: 'bg-yellow-400',
    description: [
      "Developing end-to-end web applications using Python, Flask/Django, and MySQL.",
      "Designing REST APIs and integrating frontend interfaces with backend services.",
      "Applying clean architecture and scalable system design principles.",
      "Strengthening deployment workflows and production-ready development practices."
    ]
  },
  {
    title: "AI/ML Intern",
    company:  "Happy Inbox",
    date: "Feb 2025 – Mar 2025",
    color: 'bg-red-500',
    description: [
       "Engineered ML models on 20,000+ user logs, boosting recommendation accuracy by 65%.",
      "Optimized preprocessing pipelines, reducing model training time by 40%.",
      "Conducted reproducible experiments for performance optimization."
    ]
  },
  {
    title: "Data Analyst Associate Intern",
    company: "Excelerate",
    date:  "Mar 2025 – Apr 2025",
    color: 'bg-green-500',
    description: [
      "Designed interactive dashboards improving financial visibility by 35%.",
      "Optimized SQL queries, reducing report generation time by 40%.",
      "Implemented ML-driven trend analysis across multiple departments."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="logs" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-8xl font-bold inline-block relative">
          EXPERIENCE<span className="text-red-500">_LOG</span>
          <div className="absolute -bottom-4 left-0 w-full h-2 bg-red-500/20" />
        </h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-text opacity-20 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Marker */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 thick-border bg-panel transform -translate-x-1/2 z-10">
                <div className={`w-full h-full ${exp.color}`} />
              </div>

              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <motion.div 
                  initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="thick-border bg-panel p-6 panel-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="bg-black text-white px-3 py-1 font-mono text-[10px] whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-red-500 font-mono text-sm font-bold mb-4">@ {exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="font-mono text-xs opacity-70 flex gap-2">
                        <span className="text-red-500">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
