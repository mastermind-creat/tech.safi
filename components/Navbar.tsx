
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Lock, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useConfig } from '../context/ConfigContext';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { theme, setTheme } = useTheme();
  const { config } = useConfig();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedId(null);
    setActiveDropdown(null);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!config) return null;

  const MotionDiv = motion.div as any;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled
          ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl h-16 shadow-lg border-b border-slate-200 dark:border-white/5'
          : 'bg-transparent h-24'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex items-center justify-between">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                {config.navbar.logoPrimary.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#020617] animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold font-display tracking-tighter text-slate-900 dark:text-white">
              {config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {config.navbar.links.map((link) => (
              <div
                key={link.id}
                className="relative group/navitem"
                onMouseEnter={() => link.children && setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.children ? '#' : link.path}
                  onClick={(e) => link.children && e.preventDefault()}
                  className={({ isActive }) => `
                    px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5
                    ${isActive && !link.children ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'}
                  `}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
                </NavLink>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.id && (
                    <MotionDiv
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-xl"
                    >
                      {link.children.map((child: any) => (
                        <NavLink
                          key={child.id}
                          to={child.path}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-all group/child"
                        >
                          {child.label}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/child:opacity-100 group-hover/child:translate-x-0 transition-all" />
                        </NavLink>
                      ))}
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions Section */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              title="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Executive Login Lock Icon */}
            <NavLink
              to="/login"
              className="flex p-2.5 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
              title="Executive Access"
            >
              <Lock size={18} />
            </NavLink>

            <NavLink to="/contact" className="hidden sm:block">
              <Button size="sm" className="rounded-xl px-6 py-2.5 bg-primary text-white font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                {config.navbar.ctaLabel}
              </Button>
            </NavLink>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-3 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ml-2 active:scale-90 transition-transform"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Structured Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[100] w-full sm:w-[400px] bg-white dark:bg-[#020617] flex flex-col shadow-2xl border-l border-slate-200 dark:border-white/5 lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">T</div>
                  <span className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span>
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl hover:rotate-90 transition-transform dark:text-white"><X size={24} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Navigation Menu</p>
                <div className="space-y-2">
                  {config.navbar.links.map((link) => (
                    <div key={link.id} className="space-y-1">
                      {link.children ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => toggleExpand(link.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl text-xl font-bold transition-all ${expandedId === link.id ? 'bg-primary/5 text-primary' : 'text-slate-900 dark:text-white bg-slate-50 dark:bg-white/5'}`}
                          >
                            {link.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${expandedId === link.id ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {expandedId === link.id && (
                              <MotionDiv
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-50/50 dark:bg-white/2 rounded-2xl ml-4"
                              >
                                {link.children.map((child: any) => (
                                  <NavLink
                                    key={child.id}
                                    to={child.path}
                                    className="block p-4 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </MotionDiv>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => `
                              block p-4 rounded-2xl text-xl font-bold transition-all
                              ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5'}
                            `}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>

                {/* Socials & Login Section */}
                <div className="pt-8 border-t border-slate-100 dark:border-white/5 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <NavLink to="/login" className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold hover:bg-primary/5 hover:text-primary transition-all">
                      <Lock size={18} />
                      <span>Executive</span>
                    </NavLink>
                    <button onClick={toggleTheme} className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold hover:bg-primary/5 hover:text-primary transition-all">
                      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                  </div>

                  <div className="flex justify-center gap-6 text-slate-400">
                    <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-white/5">
                <NavLink to="/contact" className="block w-full">
                  <Button size="lg" className="w-full rounded-2xl py-4 text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/25">
                    {config.navbar.ctaLabel}
                  </Button>
                </NavLink>
                <p className="text-[10px] text-center text-slate-400 mt-6 font-medium uppercase tracking-[0.2em]">© 2025 TechSafi Intelligence</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
