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
        <div className="thick-border bg-panel px-4 py-2 panel-shadow flex items-center gap-2">
          <Terminal size={18} className="text-accent-neon" />
          <span className="font-mono font-bold text-lg">NITYA NAMA</span>
        </div>
      </motion.div>

      <div className="flex flex-col items-end gap-4 pointer-events-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="thick-border bg-panel p-1 panel-shadow flex items-center"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-mono text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a 
            href="#contact"
            className="bg-accent-yellow text-black px-4 py-2 font-mono text-sm font-bold border-l-2 border-black"
          >
            HIRE ME
          </a>
        </motion.div>
      </div>
    </nav>
  );
};
