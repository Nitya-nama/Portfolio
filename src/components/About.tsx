import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle } from 'lucide-react';
import profilePhoto from '../assets/PassportPhoto.jpeg';

const useCountUp = (target: number, duration = 1600, start = false, decimals = 0) => {
  const [value, setValue] = useState('0');
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const raw = ease * target;
      setValue(decimals > 0 ? raw.toFixed(decimals) : Math.floor(raw).toString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, decimals]);
  return value;
};

interface StatProps { value: number; suffix: string; label: string; sublabel: string; delay: number; decimals?: number; }

const StatCard: React.FC<StatProps> = ({ value, suffix, label, sublabel, delay, decimals = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1600, visible, decimals);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div ref={ref} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay }} viewport={{ once: true }}
      className="thick-border p-5 flex flex-col panel-shadow"
      style={{ background: 'var(--panel-alt)', borderColor: 'var(--border)' }}>
      <div className="font-mono font-bold mb-1" style={{
        fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', background: 'var(--grad-text)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div className="font-mono font-bold text-xs mb-1" style={{ color: 'var(--text)' }}>{label}</div>
      <div className="font-mono text-[10px]" style={{ color: 'var(--text-3)' }}>{sublabel}</div>
    </motion.div>
  );
};

const stats: StatProps[] = [
  { value: 9.3, suffix: '/10', label: 'CGPA',               sublabel: 'Top 5% · RR Institute',     delay: 0,   decimals: 1 },
  { value: 92,  suffix: '%',   label: 'Best Model Accuracy', sublabel: 'BERT Emotion Detection',    delay: 0.1 },
  { value: 20,  suffix: 'K+',  label: 'Records Processed',  sublabel: 'ML pipeline · Happy Inbox', delay: 0.2 },
  { value: 3,   suffix: '+',   label: 'Live Deployments',    sublabel: 'Production · Vercel',       delay: 0.3 },
];

export const About: React.FC = () => (
  <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
      className="thick-border p-8 md:p-12 panel-shadow flex flex-col md:flex-row gap-12 items-start"
      style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>

      {/* Photo */}
      <div className="relative w-full sm:w-2/3 md:w-1/3 mx-auto aspect-square flex-shrink-0">
        <div className="absolute inset-0 thick-border -rotate-3 translate-x-4 translate-y-4"
          style={{ background: 'color-mix(in srgb, var(--accent-1) 15%, transparent)', borderColor: 'var(--accent-1)' }} />
        <div className="relative w-full h-full thick-border overflow-hidden panel-shadow"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
          <img src={profilePhoto} alt="Photo of Nitya Nama" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>WHO AM I?</h2>
          <div className="h-2 w-20 hidden md:block flex-shrink-0" style={{ background: 'var(--accent-1)' }} />
        </div>

        <p className="font-mono text-base md:text-lg mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>
          I'm Nitya — an{' '}
          <span className="px-1.5 font-bold" style={{ background: 'var(--accent-1)', color: '#fff' }}>
            AI &amp; Full Stack Engineer
          </span>{' '}
          who has shipped ML models trained on 20,000+ records, built production REST APIs serving
          real users, and deployed full-stack intelligent systems — all before graduating.
        </p>
        <p className="font-mono text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-2)' }}>
          I specialise in end-to-end ML systems: from feature engineering and model training (BERT, ARIMA, LSTM)
          to Flask REST APIs and React frontends. I don't just build models —{' '}
          <span className="font-bold" style={{ color: 'var(--accent-3)' }}>I build systems that work in production.</span>
        </p>

        <ul className="space-y-3 mb-10">
          {[
            'Production ML — BERT, ARIMA, LSTM, Scikit-learn, TensorFlow, PyTorch',
            'Full-stack with Flask / Django, React, REST APIs, JWT Auth, MVC',
            'SQL & NoSQL — MySQL, PostgreSQL, MongoDB, Oracle SQL',
            'Cloud deployment — AWS, GCP, Azure, Vercel, CI/CD best practices',
            'Data pipelines — Pandas, NumPy, Power BI, Tableau, Looker Studio',
          ].map((item, i) => (
            <motion.li key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }} viewport={{ once: true }}
              className="flex items-start gap-3 font-mono text-sm" style={{ color: 'var(--text)' }}>
              <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-1)' }}>{'>'}</span>
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Count-up stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <div className="thick-border px-4 py-2 flex items-center gap-2 font-mono text-xs"
            style={{ background: 'var(--panel-alt)', color: 'var(--text)', borderColor: 'var(--border)' }}>
            <MapPin size={13} className="text-red-500 flex-shrink-0" />
            LOCATION: BENGALURU
          </div>
          <div className="thick-border px-4 py-2 flex items-center gap-2 font-mono text-xs font-bold text-white"
            style={{ background: 'var(--accent-1)', borderColor: 'var(--accent-1)' }}>
            <CheckCircle size={13} className="flex-shrink-0" />
            STATUS: BUILDING INTELLIGENT SYSTEMS
          </div>
          <div className="thick-border px-4 py-2 font-mono text-xs font-bold text-white"
            style={{ background: 'var(--grad-hot)', borderColor: 'var(--accent-2)' }}>
            OPEN TO OPPORTUNITIES
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);