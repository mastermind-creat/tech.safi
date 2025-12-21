
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useConfig } from '../context/ConfigContext';
// Added missing import for Button component
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const { config } = useConfig();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!config) return null;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl h-16 shadow-lg' : 'bg-transparent h-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {config.navbar.logoPrimary.charAt(0)}
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              {config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-1">
            {config.navbar.links.map((item) => (
              <NavLink key={item.id} to={item.path} className={({ isActive }) => `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:text-primary dark:hover:text-white'}`}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <AnimatePresence mode="wait">
                <motion.div key={theme} initial={{ scale: 0.5, rotate: -45, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.5, rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                   {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
            <NavLink to="/contact" className="hidden sm:block">
               <Button size="sm" className="rounded-full px-6 py-2 bg-primary text-white font-bold uppercase text-[10px] tracking-widest">{config.navbar.ctaLabel}</Button>
            </NavLink>
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-slate-600 dark:text-slate-300"><Menu size={24} /></button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[100] bg-white dark:bg-[#020617] flex flex-col p-6 lg:hidden">
            <div className="flex items-center justify-between mb-12">
               <span className="text-2xl font-black font-display">{config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span></span>
               <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 dark:bg-white/10 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex-1 space-y-4">
               {config.navbar.links.map((link) => (
                  <NavLink key={link.id} to={link.path} className="block text-4xl font-black tracking-tighter text-slate-900 dark:text-white">{link.label}</NavLink>
               ))}
            </div>
            <div className="pt-8 border-t border-slate-100 dark:border-white/10">
               <NavLink to="/contact" className="block w-full"><Button size="lg" className="w-full rounded-2xl py-4">{config.navbar.ctaLabel}</Button></NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
