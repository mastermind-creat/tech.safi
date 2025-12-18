
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, BarChart3, Settings, 
  Users, Bell, History, ShieldAlert, LogOut, 
  Menu, X, Sun, Moon, Search, Cpu, Zap, 
  ChevronRight, Globe, Image as ImageIcon, MessageSquare
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Overview } from './sections/Overview';
import { PagesManager } from './sections/PagesManager';

// --- SIDEBAR DATA ---
const NAV_GROUPS = [
  {
    title: 'Core',
    items: [
      { id: 'home', label: 'Dashboard Home', icon: LayoutDashboard, path: '/control-centre' },
      { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/control-centre/analytics' },
    ]
  },
  {
    title: 'Management',
    items: [
      { 
        id: 'pages', 
        label: 'Pages', 
        icon: FileText, 
        path: '/control-centre/pages',
        children: ['Home', 'About Us', 'Services', 'Portfolio', 'Contact'] 
      },
      { id: 'content', label: 'Content Manager', icon: ImageIcon, path: '/control-centre/content' },
      { id: 'feedback', label: 'Testimonials', icon: MessageSquare, path: '/control-centre/testimonials' },
    ]
  },
  {
    title: 'System',
    items: [
      { id: 'logs', label: 'Activity Logs', icon: History, path: '/control-centre/logs' },
      { id: 'alerts', label: 'System Alerts', icon: ShieldAlert, path: '/control-centre/alerts' },
    ]
  },
  {
    title: 'Future',
    items: [
      { id: 'employees', label: 'Employee Hub', icon: Users, path: '/control-centre/employees', badge: 'Soon' },
      { id: 'settings', label: 'Global Settings', icon: Settings, path: '/control-centre/settings' },
    ]
  }
];

export const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex font-sans transition-colors duration-300">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="hidden lg:flex flex-col bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-white/5 fixed inset-y-0 z-30 transition-all shadow-xl"
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-white/5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">T</div>
            {sidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-display font-bold text-slate-900 dark:text-white"
              >
                Control<span className="text-primary">Centre</span>
              </motion.span>
            )}
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
          {NAV_GROUPS.map((group, idx) => (
            <div key={idx} className="mb-6 px-4">
              {sidebarOpen && (
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
                  {group.title}
                </h5>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link 
                    key={item.id} 
                    to={item.path}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-all group ${
                      location.pathname === item.path 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={20} className={`${location.pathname === item.path ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />
                    {sidebarOpen && (
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-sm font-medium">{item.label}</span>
                        {item.badge && (
                          <span className="text-[8px] bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded-full text-slate-500">{item.badge}</span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm font-bold">Exit Centre</span>}
          </button>
        </div>
      </motion.aside>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[40]" 
            />
            <motion.aside
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              className="lg:hidden fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white dark:bg-[#0f172a] z-[50] shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-xl dark:text-white">Control Centre</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 dark:text-white"><X /></button>
              </div>
              {/* Reuse NAV_GROUPS for mobile links */}
              {NAV_GROUPS.map((group, idx) => (
                <div key={idx} className="mb-6">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{group.title}</h5>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link 
                        key={item.id} to={item.path} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-4 p-3 rounded-xl dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT AREA --- */}
      <main 
        className="flex-1 min-w-0 transition-all"
        style={{ marginLeft: sidebarOpen ? '280px' : '80px', transition: 'margin 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Desktop sidebar offset logic updated via inline styles */}
        <style>{`
          @media (max-width: 1024px) {
            main { margin-left: 0 !important; }
          }
        `}</style>

        {/* --- TOP HEADER --- */}
        <header className="h-16 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 sticky top-0 z-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 dark:text-white"><Menu size={24} /></button>
            <button onClick={toggleSidebar} className="hidden lg:block p-2 text-slate-400 hover:text-primary transition-colors"><Menu size={20} /></button>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
              <Search size={14} className="text-slate-400" />
              <input type="text" placeholder="Search centre..." className="bg-transparent border-0 text-xs focus:ring-0 text-slate-600 dark:text-slate-300 w-48" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-primary transition-all"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <button className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#020617]"></span>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-white/10">
              <div className="hidden sm:block text-right">
                <div className="text-xs font-bold dark:text-white">W. Kennedy</div>
                <div className="text-[10px] text-slate-500 font-medium">Administrator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-md">K</div>
            </div>
          </div>
        </header>

        {/* --- PAGE CONTENT --- */}
        <div className="p-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/pages" element={<PagesManager />} />
            {/* Placeholder for future sections */}
            <Route path="*" element={<div className="py-20 text-center text-slate-500">Module under development. Swapping to Laravel soon...</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
