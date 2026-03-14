import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Star, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ─────────────────────────────────────────────────────
   EmailJS config — replace the three values below:
   1. Sign up free at https://emailjs.com
   2. Create a service (Gmail works) → copy Service ID
   3. Create an email template → copy Template ID
   4. Go to Account → copy your Public Key
   All three values go in the constants below.
───────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoPq'

// EmailJS template variables expected:
// {{from_name}}  {{from_email}}  {{message}}  {{to_name}} = "Nitya"

const testimonials = [
  {
    id: 'REPORT_003.LOG',
    text: "Cleanest code I've seen in years. Knows how to handle complex state management.",
    author: 'STUDENT @ L J UNIVERSITY',
    color: 'border-pink-500',
  },
  {
    id: 'REPORT_004.LOG',
    text: 'Creative designing idea and provided a unique UI experience.',
    author: 'DEV @ CREATIVECHAOS',
    color: 'border-purple-500',
  },
  {
    id: 'REPORT_005.LOG',
    text: 'Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it.',
    author: 'UX DESIGNER @ TECHFLOW',
    color: 'border-orange-500',
  },
];

export const Testimonials: React.FC = () => (
  <section className="py-24 overflow-hidden" style={{ background: '#000000', color: '#ffffff' }}>
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
    <div className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-12">
      {testimonials.map((t, i) => (
        <motion.div key={t.id}
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }} viewport={{ once: true }}
          className={`min-w-[300px] md:min-w-[400px] thick-border ${t.color} bg-[#141414] p-8 panel-shadow`}>
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-[10px] opacity-40">{t.id}</span>
            <span className="font-mono text-[10px] opacity-40">2025.txt</span>
          </div>
          <p className="text-lg font-mono mb-8 leading-relaxed">"{t.text}"</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-mono opacity-40 uppercase mb-1">From:</p>
              <p className="text-xs font-bold font-mono">{t.author}</p>
            </div>
            <div className="flex gap-1" style={{ color: 'var(--accent-2)' }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

type Status = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      // Dynamically import EmailJS so it doesn't bloat the bundle
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    'Nitya',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Floating label */}
        <div className="absolute -top-6 left-8 px-4 py-2 thick-border font-mono font-bold z-10 panel-shadow -rotate-2 text-white"
          style={{ background: 'var(--grad-hot)', borderColor: 'var(--accent-1)' }}>
          START A PROJECT
        </div>

        <div className="thick-border p-6 md:p-16 panel-shadow flex flex-col lg:flex-row gap-10 md:gap-16"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>

          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-none" style={{ color: 'var(--text)' }}>
              LET'S<br />TALK<br />
              <span style={{ background: 'var(--grad-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                CODE.
              </span>
            </h2>
            <p className="font-mono text-lg mb-12 max-w-md" style={{ color: 'var(--text-2)' }}>
              Currently available for full-time roles and freelance opportunities.
              Let's build something intelligent together.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail,   text: 'nityanama101@gmail.com' },
                { icon: MapPin, text: 'BENGALURU, INDIA' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 thick-border flex items-center justify-center transition-all duration-200"
                    style={{ background: 'var(--panel-alt)', color: 'var(--text)', borderColor: 'var(--border)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'var(--accent-1)';
                      el.style.borderColor = 'var(--accent-1)';
                      el.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'var(--panel-alt)';
                      el.style.borderColor = 'var(--border)';
                      el.style.color = 'var(--text)';
                    }}>
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-sm md:text-base font-bold" style={{ color: 'var(--text)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — functional form */}
          <div className="w-full lg:w-1/2">
            <div className="thick-border p-8" style={{ background: 'color-mix(in srgb, var(--accent-1) 4%, var(--panel))', borderColor: 'var(--border)' }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase" style={{ color: 'var(--text-3)' }}>Identity</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="NAME / COMPANY" required
                    className="w-full bg-transparent border-b-2 py-2 font-mono outline-none transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent-1)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase" style={{ color: 'var(--text-3)' }}>Coordinates</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="EMAIL ADDRESS" required
                    className="w-full bg-transparent border-b-2 py-2 font-mono outline-none transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent-1)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase" style={{ color: 'var(--text-3)' }}>Transmission</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="PROJECT DETAILS..." required
                    className="w-full bg-transparent border-b-2 py-2 font-mono outline-none transition-colors resize-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent-1)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                {/* Submit button — three states */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full py-4 flex items-center justify-center gap-3 font-mono text-sm font-bold uppercase text-white transition-all duration-200 disabled:opacity-70"
                  style={{ background: status === 'success' ? '#16a34a' : status === 'error' ? '#dc2626' : 'var(--grad-main)' }}
                >
                  {status === 'idle'    && <><Send size={18} /> TRANSMIT_DATA</>}
                  {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> SENDING...</>}
                  {status === 'success' && <><CheckCircle size={18} /> MESSAGE SENT!</>}
                  {status === 'error'   && <><Send size={18} /> FAILED — TRY AGAIN</>}
                </button>

                {/* EmailJS setup reminder — remove after configuring */}
                {EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' && (
                  <p className="font-mono text-[10px] text-center" style={{ color: 'var(--text-3)' }}>
                    ⚠ Configure EmailJS keys in Contact.tsx to activate form submission
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};