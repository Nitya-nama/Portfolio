import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Python Full Stack Developer',
    company: 'PySpiders (Unit of TEST YANTRA), Bengaluru',
    date: 'Jan 2026 – Present · 6 months',
    accentColor: '#facc15',
    certUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/PYSPIDERS.pdf',
    description: [
      'Developing and deploying full-stack web applications using Python, Flask, and RESTful APIs, owning end-to-end feature delivery across backend services and frontend interfaces in an Agile environment.',
      'Designing RESTful APIs, relational database schemas (Oracle SQL), and dynamic UI components in HTML/CSS/JavaScript, applying MVC architecture, Git version control, and CI/CD best practices.',
      'Applying clean architecture and scalable system design principles across frontend and backend services.',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'Happy Inbox',
    date: 'Feb 2025 – Mar 2025 · 2 months',
    accentColor: '#f87171',
    certUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/happyinbox.png',
    description: [
      'Engineered supervised ML models on 20,000+ user interaction logs using Scikit-learn and Python, achieving a 65% improvement in email recommendation accuracy through feature engineering and hyperparameter tuning.',
      'Automated data preprocessing pipelines using Pandas and NumPy, reducing model training time by 40% and improving pipeline reproducibility.',
      'Conducted reproducible experiments for performance optimisation and documented results for team review.',
    ],
  },
  {
    title: 'Data Analyst Associate Intern',
    company: 'Excelerate',
    date: 'Mar 2025 – Apr 2025 · 1 month',
    accentColor: '#4ade80',
    certUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/Excelerate.png',
    description: [
      'Built interactive financial dashboards using Google Looker Studio and Power BI, visualising KPIs across multiple business units and improving financial reporting visibility by 35% for stakeholder decision-making.',
      'Refactored complex SQL queries and normalised data models in MySQL, reducing report generation time by 40% through query optimisation and indexing strategies.',
      'Implemented ML-driven trend analysis across multiple departments to support stakeholder decision-making.',
    ],
  },
];

export const Experience: React.FC = () => (
  <section id="logs" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-8xl font-bold inline-block relative" style={{ color: 'var(--text)' }}>
        EXPERIENCE<span style={{ color: 'var(--accent-2)' }}>_LOG</span>
        <div className="absolute -bottom-4 left-0 w-full h-2"
          style={{ background: 'color-mix(in srgb, var(--accent-2) 20%, transparent)' }} />
      </h2>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
        style={{ background: 'var(--border)' }} />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i}
            className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 thick-border -translate-x-1/2 z-10"
              style={{ background: 'var(--panel)', borderColor: exp.accentColor }}>
              <div className="w-full h-full" style={{ background: exp.accentColor }} />
            </div>

            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <motion.div
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="thick-border p-6 panel-shadow"
                style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>

                {/* Title + date */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{exp.title}</h3>
                  <span className="px-3 py-1 font-mono text-[10px] whitespace-nowrap text-white flex-shrink-0"
                    style={{ background: 'color-mix(in srgb, var(--bg-dark, #0d0b14) 90%, transparent)' }}>
                    {exp.date}
                  </span>
                </div>

                {/* Company + certificate button */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <p className="font-mono text-sm font-bold" style={{ color: exp.accentColor }}>
                    @ {exp.company}
                  </p>
                  <a
                    href={exp.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold px-3 py-1.5 transition-all duration-200 hover:opacity-80 active:scale-95 whitespace-nowrap"
                    style={{
                      border: `1px solid ${exp.accentColor}`,
                      color: exp.accentColor,
                      background: `color-mix(in srgb, ${exp.accentColor} 10%, transparent)`,
                    }}
                    aria-label={`View ${exp.company} internship certificate`}>
                    <ExternalLink size={10} />
                    VIEW CERTIFICATE
                  </a>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="font-mono text-xs flex gap-2"
                      style={{ color: 'var(--text-2)' }}>
                      <span className="flex-shrink-0 font-bold" style={{ color: exp.accentColor }}>•</span>
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