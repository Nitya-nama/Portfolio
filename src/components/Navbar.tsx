import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Terminal, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: '/ABOUT', href: '#about' },
    { name: '/SKILLS', href: '#skills' },
    { name: '/LOGS', href: '#logs' },
    { name: '/WORK', href: '#work' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 p-4 md:p-8 flex justify-between items-start pointer-events-none">
        {/* Logo */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          className="pointer-events-auto">
          <div className="thick-border px-3 py-2 md:px-4 panel-shadow flex items-center gap-2"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
            <Terminal size={16} style={{ color: 'var(--accent-1)' }} />
            <span className="font-mono font-bold text-sm md:text-lg" style={{ color: 'var(--text)' }}>
              NITYA NAMA
            </span>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-col items-end gap-4 pointer-events-auto">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="thick-border p-1 panel-shadow flex items-center"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href}
                className="px-4 py-2 font-mono text-sm transition-colors"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
                {link.name}
              </a>
            ))}
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="p-2 transition-colors" style={{ color: 'var(--text-2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact"
              className="px-4 py-2 font-mono text-sm font-bold text-white transition-opacity hover:opacity-80"
              style={{ background: 'var(--grad-main)' }}>
              HIRE ME
            </a>
          </motion.div>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2 pointer-events-auto">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="thick-border p-2 panel-shadow"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)', color: 'var(--text)' }}>
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className="thick-border p-2 panel-shadow"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)', color: 'var(--text)' }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[72px] left-4 right-4 z-50 thick-border panel-shadow flex flex-col overflow-hidden md:hidden"
            style={{ background: 'var(--panel)', borderColor: 'var(--border)' }}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}
                className="px-6 py-4 font-mono text-sm font-bold border-b transition-colors"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="px-6 py-4 font-mono text-sm font-bold text-white text-center"
              style={{ background: 'var(--grad-main)' }}>
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};