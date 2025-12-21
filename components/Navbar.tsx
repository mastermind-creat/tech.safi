import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Monitor, ChevronRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useConfig } from '../context/ConfigContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
  const { theme, setTheme } = useTheme();
  const { config } = useConfig();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  const MotionDiv = motion.div as any;

  const toggleMobileExpanded = (id: string) => {
    setMobileExpanded(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (!config) return null;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav h-16' : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              {config.navbar.logoPrimary.charAt(0)}
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              {config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {config.navbar.links.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              
              if (hasChildren) {
                return (
                  <div 
                    key={item.id} 
                    className="relative group/nav-item"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeDropdown === item.id || location.pathname.startsWith(item.path)
                          ? 'text-primary' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.id && (
                        <MotionDiv
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute left-0 top-full pt-2 w-48 z-50"
                        >
                          <div className="bg-white dark:bg-[#0f172a] rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 p-2 overflow-hidden backdrop-blur-xl">
                            {item.children?.map((child) => (
                              <NavLink
                                key={child.id}
                                to={child.path}
                                className={({ isActive }: any) => 
                                  `flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isActive 
                                      ? 'bg-primary/10 text-primary' 
                                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </MotionDiv>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }: any) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }: any) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <MotionDiv
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-md bg-primary/10 dark:bg-white/10 z-0"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <NavLink to="/login" title="Executive Access" className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all">
              <Lock size={18} />
            </NavLink>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <NavLink to="/contact" className="hidden md:block">
               <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:opacity-90 shadow-lg shadow-primary/20">
                {config.navbar.ctaLabel}
               </button>
            </NavLink>
            
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden" />
            <MotionDiv initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-white dark:bg-[#020617] shadow-2xl flex flex-col md:hidden">
              <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
                <span className="text-lg font-bold font-display">Navigation</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                {config.navbar.links.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = mobileExpanded.includes(item.id);

                  if (hasChildren) {
                    return (
                      <div key={item.id} className="space-y-1">
                        <button 
                          onClick={() => toggleMobileExpanded(item.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${isExpanded ? 'bg-slate-50 dark:bg-white/5 text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                        >
                          <span className="font-bold">{item.label}</span>
                          <ChevronDown size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <MotionDiv initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 overflow-hidden">
                              {item.children?.map(child => (
                                <NavLink key={child.id} to={child.path} className={({ isActive }: any) => `flex items-center p-3 text-sm font-medium rounded-xl transition-colors ${isActive ? 'text-primary font-bold' : 'text-slate-500 dark:text-slate-500'}`}>
                                  {child.label}
                                </NavLink>
                              ))}
                            </MotionDiv>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }: any) =>
                        `flex items-center p-3 rounded-xl transition-all font-bold ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-white/5">
                <NavLink to="/contact" className="block w-full">
                  <button className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">
                    {config.navbar.ctaLabel}
                  </button>
                </NavLink>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
