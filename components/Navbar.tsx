import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const MotionDiv = motion.div as any;

  const isPathActive = (path: string, children?: any[]) => {
    if (location.pathname === path) return true;
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    return false;
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
            <span className="text-xl font-bold font-display text-white tracking-tight">
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
                      <div className={`flex items-center text-sm font-medium transition-all duration-200 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
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
                            className="absolute top-full left-0 mt-2 w-56 p-2 rounded-xl glass-panel shadow-2xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-xl"
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
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
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
                          isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }: any) => (
                        <>
                          <span className="relative z-10">{item.label}</span>
                          {isActive && (
                            <MotionDiv
                              layoutId="navbar-indicator"
                              className="absolute inset-0 rounded-md bg-white/10 z-0"
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <NavLink to="/contact" className="hidden md:block">
               <button className="px-4 py-2 text-sm font-medium text-white bg-primary/10 border border-primary/50 rounded-full hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Get Started
               </button>
            </NavLink>
            
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
            />
            <MotionDiv
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-[#020617] border-l border-white/10 shadow-2xl flex flex-col md:hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <span className="text-lg font-bold text-white font-display">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="space-y-2">
                    {item.children ? (
                      <>
                        <div className="flex items-center space-x-3 p-3 text-slate-300 font-semibold rounded-xl bg-white/5">
                          <span className="text-primary">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <div className="pl-4 space-y-1 border-l border-white/10 ml-6">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }: any) =>
                                `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
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
                              ? 'bg-gradient-to-r from-primary/20 to-transparent text-white border-l-2 border-primary' 
                              : 'text-slate-400 hover:bg-white/5 hover:text-white'
                          }`
                        }
                      >
                        <span className={location.pathname === item.path ? 'text-primary' : ''}>{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5">
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