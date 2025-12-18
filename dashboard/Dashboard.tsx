import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, BarChart3, Settings, 
  Users, Bell, History, ShieldAlert, LogOut, 
  Menu, X, Sun, Moon, Search, Cpu, Zap, 
  ChevronRight, Globe, Image as ImageIcon, MessageSquare,
  Home as HomeIcon, Building2, Layers, CreditCard, Newspaper, Mail,
  ChevronDown, PanelTop, PanelBottom, Briefcase, Brain, LayoutGrid,
  Settings2, Palette
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Overview } from './sections/Overview';
import { PagesManager } from './sections/PagesManager';
import { Button } from '../components/ui/Button';

// Icons for nested items
const InfoIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;

// --- REFINED SIDEBAR DATA STRUCTURE ---
const NAV_GROUPS = [
  {
    title: 'Monitor',
    items: [
      { id: 'overview', label: 'Dashboard Home', icon: LayoutDashboard, path: '/control-centre' },
      { id: 'analytics', label: 'Live Analytics', icon: BarChart3, path: '/control-centre/analytics' },
    ]
  },
  {
    title: 'Management',
    items: [
      { 
        id: 'pages-group', 
        label: 'Website Pages', 
        icon: FileText, 
        path: '#',
        children: [
          { label: 'Home Page', path: '/control-centre/pages/home', icon: HomeIcon },
          { 
            id: 'inner-company',
            label: 'Company', 
            icon: Building2,
            path: '#',
            children: [
              { label: 'About Us', path: '/control-centre/pages/about', icon: InfoIcon },
              { label: 'Careers', path: '/control-centre/pages/careers', icon: Users },
              { label: 'Portfolio', path: '/control-centre/pages/portfolio', icon: Briefcase },
            ]
          },
          { 
            id: 'inner-services',
            label: 'Services', 
            icon: Layers,
            path: '#',
            children: [
              { label: 'All Services', path: '/control-centre/pages/services', icon: LayoutGrid },
              { label: 'AI Solutions', path: '/control-centre/pages/ai-solutions', icon: Brain },
            ]
          },
          { label: 'Pricing', path: '/control-centre/pages/pricing', icon: CreditCard },
          { label: 'Blog', path: '/control-centre/pages/blog', icon: Newspaper },
          { label: 'Contact', path: '/control-centre/pages/contact', icon: Mail },
        ]
      },
      { 
        id: 'layout-group', 
        label: 'Global UI', 
        icon: Palette, 
        path: '#',
        children: [
          { label: 'Navbar Config', path: '/control-centre/manage/navbar', icon: PanelTop },
          { label: 'Footer Config', path: '/control-centre/manage/footer', icon: PanelBottom },
        ]
      }
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      { 
        id: 'system-group', 
        label: 'System Tools', 
        icon: Settings2, 
        path: '#',
        children: [
          { label: 'Media Library', path: '/control-centre/content', icon: ImageIcon },
          { label: 'Activity Logs', path: '/control-centre/logs', icon: History },
          { label: 'Security Alerts', path: '/control-centre/alerts', icon: ShieldAlert },
        ]
      },
      { id: 'employees', label: 'Employee Hub', icon: Users, path: '/control-centre/employees', badge: 'Soon' },
      { id: 'settings', label: 'Global Settings', icon: Settings, path: '/control-centre/settings' },
    ]
  }
];

export const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]); // Collapsed by default to save space
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('techsafi_auth');
    navigate('/login');
  };

  // NavItem fixed to be explicitly typed as React.FC to allow 'key' prop when used in JSX
  const NavItem: React.FC<{ item: any; depth?: number }> = ({ item, depth = 0 }) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = location.pathname === item.path;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div className="w-full">
        {hasChildren ? (
          <div className="w-full">
            <button 
              onClick={() => toggleExpand(item.id)}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-all group ${
                isExpanded ? 'text-primary bg-primary/5 dark:bg-primary/10' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
              style={{ paddingLeft: `${(depth * 12) + 12}px` }}
            >
              <item.icon size={18} className={`${isExpanded ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />
              {sidebarOpen && (
                <div className="flex-1 flex items-center justify-between text-left">
                  <span className={`text-sm ${isExpanded ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : '-rotate-90'}`} />
                </div>
              )}
            </button>
            
            <AnimatePresence initial={false}>
              {isExpanded && sidebarOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-l border-slate-100 dark:border-white/5 ml-4 my-1"
                >
                  {item.children.map((child: any, idx: number) => (
                    // Recursive usage of NavItem with key
                    <NavItem key={idx} item={{...child, id: `${item.id}-${idx}`}} depth={depth + 1} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link 
            to={item.path === '#' ? '#' : item.path}
            className={`flex items-center gap-3 p-2.5 rounded-xl transition-all group ${
              isActive 
                ? 'bg-primary/10 text-primary border-r-2 border-primary' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
            style={{ paddingLeft: `${(depth * 12) + 12}px` }}
          >
            <item.icon size={18} className={`${isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />
            {sidebarOpen && (
              <div className="flex-1 flex items-center justify-between">
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                {item.badge && (
                  <span className="text-[8px] bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded-full text-slate-500 font-bold">{item.badge}</span>
                )}
              </div>
            )}
          </Link>
        )}
      </div>
    );
  };

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
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-3">
                  {group.title}
                </h5>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  // Usage of NavItem component with key
                  <NavItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-white/5 space-y-2">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-all group"
          >
            <Globe size={18} className="group-hover:text-primary transition-colors" />
            {sidebarOpen && <span className="text-sm font-bold">Public Website</span>}
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all group"
          >
            <LogOut size={18} className="group-hover:scale-110 transition-transform" />
            {sidebarOpen && <span className="text-sm font-bold">Sign Out</span>}
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
              className="lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white dark:bg-[#0f172a] z-[50] shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-2xl">T</div>
                   <span className="font-display font-bold text-xl dark:text-white">Control Centre</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 dark:text-white bg-slate-100 dark:bg-white/5 rounded-full"><X size={20} /></button>
              </div>
              
              <div className="space-y-6">
                {NAV_GROUPS.map((group, idx) => (
                  <div key={idx}>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">{group.title}</h5>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        // Usage of NavItem component with key in mobile view
                        <NavItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-6 border-t border-slate-100 dark:border-white/5 space-y-3">
                 <button 
                  onClick={() => { setMobileMenuOpen(false); navigate('/'); }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-white/5 font-bold"
                >
                  <Globe size={18} />
                  <span>Public Website</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 p-4 rounded-xl text-red-500 bg-red-50 dark:bg-red-500/10 font-bold"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT AREA --- */}
      <main 
        className="flex-1 min-w-0 transition-all"
        style={{ marginLeft: sidebarOpen ? '280px' : '80px', transition: 'margin 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <style>{`
          @media (max-width: 1024px) {
            main { margin-left: 0 !important; }
          }
        `}</style>

        {/* --- TOP HEADER --- */}
        <header className="h-16 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 sticky top-0 z-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 dark:text-white bg-slate-100 dark:bg-white/5 rounded-lg"><Menu size={24} /></button>
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
            <Route path="/pages/*" element={<PagesManager />} />
            {/* Catch-all for non-implemented management routes */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-32 text-center">
                 <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                    <Settings className="text-slate-400 animate-spin-slow" size={40} />
                 </div>
                 <h2 className="text-2xl font-bold dark:text-white mb-2">Module Under Construction</h2>
                 <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-sm">
                    This management interface is currently being synchronized with our production environment. Core tools will be active shortly.
                 </p>
                 <Button onClick={() => navigate('/control-centre')} variant="outline" className="rounded-full px-8">
                    Return to Overview
                 </Button>
              </div>
            } />
          </Routes>
        </div>
      </main>
      <style>{`
         @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
         }
         .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
         }
      `}</style>
    </div>
  );
};
