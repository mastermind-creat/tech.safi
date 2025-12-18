
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Monitor, ChevronRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setThemeDropdownOpen(false);
  }, [location]);

  const MotionDiv = motion.div as any;

  const isPathActive = (path: string, children?: any[]) => {
    if (location.pathname === path) return true;
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    return false;
  };

  const ThemeIcon = () => {
    if (theme === 'light') return <Sun size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <Monitor size={20} />;
  };

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
              T
            </div>
            <span className={`text-xl font-bold font-display tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
              Tech<span className="text-primary">Safi</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isPathActive(item.path, item.children);
              
              return (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.children && setActiveDropdown(null)}
                >
                  {item.children ? (
                    <div className="group px-3 py-2 cursor-pointer">
                      <div className={`flex items-center text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'text-primary' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'
                      }`}>
                        <span className="relative z-10">{item.label}</span>
                        <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <MotionDiv
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 p-2 rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] dark:backdrop-blur-xl"
                          >
                            <div className="flex flex-col space-y-1">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.path}
                                  to={child.path}
                                  className={({ isActive: isChildActive }: any) =>
                                    `flex items-center px-3 py-2.5 rounded-lg text-sm transition-all ${
                                      isChildActive 
                                        ? 'bg-primary/10 text-primary' 
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white'
                                    }`
                                  }
                                >
                                  {child.icon && <span className={`mr-3 ${location.pathname === child.path ? 'text-primary' : ''}`}>{React.cloneElement(child.icon as any, { size: 16 })}</span>}
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </MotionDiv>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }: any) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
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
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center space-x-3">
            {/* Login Icon for Executives */}
            <NavLink 
              to="/login" 
              title="Executive Access"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all focus:outline-none"
            >
              <Lock size={18} />
            </NavLink>

            {/* Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
              >
                <ThemeIcon />
              </button>
              
              <AnimatePresence>
                {themeDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setThemeDropdownOpen(false)}></div>
                    <MotionDiv
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-36 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-1 z-20"
                    >
                      <button 
                        onClick={() => { setTheme('light'); setThemeDropdownOpen(false); }}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${theme === 'light' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                      >
                        <Sun size={16} className="mr-2" /> Light
                      </button>
                      <button 
                        onClick={() => { setTheme('dark'); setThemeDropdownOpen(false); }}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                      >
                        <Moon size={16} className="mr-2" /> Dark
                      </button>
                      <button 
                        onClick={() => { setTheme('system'); setThemeDropdownOpen(false); }}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${theme === 'system' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                      >
                        <Monitor size={16} className="mr-2" /> System
                      </button>
                    </MotionDiv>
                  </>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className="hidden md:block">
               <button className="px-4 py-2 text-sm font-medium text-white bg-primary/10 dark:bg-primary/10 border border-primary/50 rounded-full hover:bg-primary/20 transition-all text-primary dark:text-white shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                Get Started
               </button>
            </NavLink>
            
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />
            <MotionDiv
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-white dark:bg-[#020617] border-l border-slate-200 dark:border-white/10 shadow-2xl flex flex-col md:hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
                <span className="text-lg font-bold text-slate-900 dark:text-white font-display">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="space-y-2">
                    {item.children ? (
                      <>
                        <div className="flex items-center space-x-3 p-3 text-slate-700 dark:text-slate-300 font-semibold rounded-xl bg-slate-50 dark:bg-white/5">
                          <span className="text-primary">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-white/10 ml-6">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }: any) =>
                                `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                                  isActive 
                                    ? 'text-primary font-medium' 
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`
                              }
                            >
                              <span>{child.icon && React.cloneElement(child.icon as any, { size: 16 })}</span>
                              <span className="text-sm font-medium">{child.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }: any) =>
                          `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                            isActive 
                              ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                          }`
                        }
                      >
                        <span className={location.pathname === item.path ? 'text-primary' : ''}>{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Mobile Login Link */}
                <NavLink
                  to="/login"
                  className={({ isActive }: any) =>
                    `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                    }`
                  }
                >
                  <Lock size={18} />
                  <span className="font-medium">Executive Access</span>
                </NavLink>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-white/5 space-y-4">
                {/* Mobile Theme Toggle */}
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-white/5">
                   <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Theme</span>
                   <div className="flex bg-white dark:bg-black/20 rounded-lg p-1">
                      {['light', 'system', 'dark'].map((t) => (
                         <button 
                           key={t}
                           onClick={() => setTheme(t as any)}
                           className={`p-1.5 rounded-md transition-all ${theme === t ? 'bg-white dark:bg-[#1e293b] text-primary shadow-sm' : 'text-slate-400'}`}
                         >
                            {t === 'light' ? <Sun size={16} /> : t === 'dark' ? <Moon size={16} /> : <Monitor size={16} />}
                         </button>
                      ))}
                   </div>
                </div>

                <NavLink to="/contact" className="block w-full">
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center space-x-2">
                    <span>Contact Us</span>
                    <ChevronRight size={16} />
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
