import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Users, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'AI/ML Engineering Professional',
    issuer: 'Microsoft',
    date: 'Dec 2025',
    color: 'var(--accent-1)',
    icon: '⊞',
    verifyUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/MICROSOFT_AI_ML.jpeg',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University · Coursera',
    date: 'Jul 2025',
    color: 'var(--accent-2)',
    icon: '◈',
    verifyUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/STANFORD_ML.jpeg',
  },
  {
    title: 'Generative AI',
    issuer: 'Google Cloud',
    date: 'Feb 2025',
    color: 'var(--accent-3)',
    icon: '◎',
    verifyUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/GOOGLEGENAI.png',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Skill India Digital',
    date: 'Mar 2025',
    color: 'var(--accent-1)',
    icon: '◆',
    verifyUrl: 'https://github.com/Nitya-nama/Certificates/blob/main/skill-india.pdf',
  },
];

const achievements = [
  {
    icon: Trophy,
    label: 'National Hackathons',
    detail: 'Google · Microsoft · Pine Labs · SAWiT.AI · RIFT-26 · 2024–Present',
    verifyUrl: 'https://rift-2026-ai-hunters.vercel.app/',
    linkLabel: 'VIEW PROJECT',
  },
  {
    icon: Users,
    label: 'E-Cell IIT Bombay',
    detail: 'Organising hackathons & entrepreneurship events · 2023–Present',
    verifyUrl: null,
    linkLabel: null,
  },
  {
    icon: Award,
    label: 'Student Placement Coordinator',
    detail: 'RR Institute of Technology · 2024–Present',
    verifyUrl: null,
    linkLabel: null,
  },
];

export const Certifications: React.FC = () => (
  <section id="certifications" className="py-20 px-4 md:px-8"
    style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} className="mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          CREDENTIALS<span style={{ color: 'var(--accent-1)' }}>_LOG</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-2)' }}>
          Verified certifications — click VERIFY to view the original certificate
        </p>
      </motion.div>

      {/* Cert cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {certs.map((cert, i) => (
          <motion.div key={cert.title}
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="thick-border panel-shadow relative overflow-hidden flex flex-col"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: cert.color }} />

            <div className="p-6 flex flex-col flex-1">
              <div className="font-mono text-2xl mb-4" style={{ color: cert.color }}>{cert.icon}</div>
              <div className="font-mono font-bold text-sm mb-1 flex-1" style={{ color: 'var(--text)' }}>
                {cert.title}
              </div>
              <div className="font-mono text-xs mb-4" style={{ color: 'var(--text-2)' }}>
                {cert.issuer}
              </div>

              {/* Date + Verify row */}
              <div className="flex items-center justify-between gap-2 flex-wrap mt-auto">
                <div className="px-2 py-0.5 font-mono text-[10px] font-bold text-white"
                  style={{ background: cert.color }}>
                  {cert.date}
                </div>
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-3 py-1.5 transition-all duration-200 hover:opacity-80 active:scale-95"
                  style={{
                    background: `color-mix(in srgb, ${cert.color} 15%, transparent)`,
                    color: cert.color,
                    border: `1px solid color-mix(in srgb, ${cert.color} 35%, transparent)`,
                  }}>
                  <ExternalLink size={10} />
                  VERIFY
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="font-mono text-xs font-bold mb-4 px-1"
        style={{ color: 'var(--text-3)', letterSpacing: '0.1em' }}>
        ACHIEVEMENTS & LEADERSHIP
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <motion.div key={a.label}
            initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="thick-border px-5 py-4 flex items-start gap-4 panel-shadow"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0"
              style={{ background: 'color-mix(in srgb, var(--accent-1) 15%, transparent)', color: 'var(--accent-1)' }}>
              <a.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono font-bold text-xs mb-1" style={{ color: 'var(--text)' }}>{a.label}</div>
              <div className="font-mono text-[10px] leading-relaxed mb-2" style={{ color: 'var(--text-2)' }}>{a.detail}</div>
              {a.verifyUrl && (
                <a href={a.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-1 transition-all duration-200 hover:opacity-80"
                  style={{
                    background: 'color-mix(in srgb, var(--accent-1) 15%, transparent)',
                    color: 'var(--accent-1)',
                    border: '1px solid color-mix(in srgb, var(--accent-1) 30%, transparent)',
                  }}>
                  <ExternalLink size={9} />
                  {a.linkLabel}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);