import React, { useState, useEffect } from 'react';
import * as RouterDOM from 'react-router-dom';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

// Bypass type checking for react-router-dom imports due to environment issues
const { NavLink, useLocation } = RouterDOM as any;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location]);

  const MotionDiv = motion.div as any;

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
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
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
            ))}
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
                {/* Main Links */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Main</h4>
                  {NAV_ITEMS.filter(i => i.category === 'main').map(item => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }: any) =>
                        `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                          isActive ? 'bg-gradient-to-r from-primary/20 to-transparent text-white border-l-2 border-primary' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      <span className={location.pathname === item.path ? 'text-primary' : ''}>{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* Services Links */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Services</h4>
                  {NAV_ITEMS.filter(i => i.category === 'services').map(item => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }: any) =>
                        `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                          isActive ? 'bg-gradient-to-r from-primary/20 to-transparent text-white border-l-2 border-primary' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                       <span className={location.pathname === item.path ? 'text-primary' : ''}>{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* Company Links */}
                <div className="space-y-2">
                   <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Company</h4>
                   {NAV_ITEMS.filter(i => i.category === 'company').map(item => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }: any) =>
                        `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                          isActive ? 'bg-gradient-to-r from-primary/20 to-transparent text-white border-l-2 border-primary' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                       <span className={location.pathname === item.path ? 'text-primary' : ''}>{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
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