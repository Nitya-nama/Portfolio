import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: '/ABOUT', href: '#about' },
    { name: '/SKILLS', href: '#skills' },
    { name: '/LOGS', href: '#logs' },
    { name: '/WORK', href: '#work' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 p-4 md:p-8 flex justify-between items-start pointer-events-none">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="pointer-events-auto"
      >
        <div className="thick-border px-4 py-2 panel-shadow flex items-center gap-2"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
          <Terminal size={18} style={{ color: 'var(--accent-1)' }} />
          <span className="font-mono font-bold text-lg" style={{ color: 'var(--text)' }}>NITYA NAMA</span>
        </div>
      </motion.div>

      <div className="flex flex-col items-end gap-4 pointer-events-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="thick-border p-1 panel-shadow flex items-center"
          style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-mono text-sm transition-colors"
              style={{ color: 'var(--text-2)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
              }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 transition-colors"
            style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-1)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a 
            href="#contact"
            className="px-4 py-2 font-mono text-sm font-bold text-white transition-opacity hover:opacity-80"
            style={{
              background: 'var(--grad-main)',
              borderLeft: '2px solid transparent',
            }}
          >
            HIRE ME
          </a>
        </motion.div>
      </div>
    </nav>
  );
};