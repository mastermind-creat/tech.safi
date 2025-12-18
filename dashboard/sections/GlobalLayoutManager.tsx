
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PanelTop, PanelBottom, Save, RefreshCw, 
  Plus, Trash2, Edit2, Link as LinkIcon, 
  Globe, Mail, Phone, MapPin, Share2,
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  Zap, Building2
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface NavLinkConfig {
  id: string;
  label: string;
  path: string;
}

interface GlobalLayoutManagerProps {
  activeTab: 'navbar' | 'footer';
}

export const GlobalLayoutManager: React.FC<GlobalLayoutManagerProps> = ({ activeTab: initialTab }) => {
  const [currentTab, setCurrentTab] = useState<'navbar' | 'footer'>(initialTab);
  const [isSaving, setIsSaving] = useState(false);

  // --- MOCK DATA FOR NAVBAR ---
  const [navLinks, setNavLinks] = useState<NavLinkConfig[]>([
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'Company', path: '/company' },
    { id: '3', label: 'Services', path: '/services' },
    { id: '4', label: 'Portfolio', path: '/portfolio' },
    { id: '5', label: 'Pricing', path: '/pricing' },
  ]);
  const [navbarCta, setNavbarCta] = useState("Get Started");

  // --- MOCK DATA FOR FOOTER ---
  const [footerDesc, setFooterDesc] = useState("Empowering businesses across Kenya and beyond with innovative technology solutions. We transform ideas into digital reality.");
  const [contactEmail, setContactEmail] = useState("info@techsafi.com");
  const [contactPhone, setContactPhone] = useState("+254 751 380 948");
  const [officeLocation, setOfficeLocation] = useState("Nairobi, Kenya");

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Configuration synced to production successfully.");
    }, 1200);
  };

  const MotionDiv = motion.div as any;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Global UI Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure structural UI elements used across all pages.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="ghost" className="flex-1 sm:flex-none border border-slate-200 dark:border-white/10 rounded-xl">
             <RefreshCw size={16} className="mr-2" /> Reset
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="flex-1 sm:flex-none bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20"
          >
             {isSaving ? <RefreshCw size={16} className="mr-2 animate-spin" /> : <Save size={16} className="mr-2" />}
             {isSaving ? "Syncing..." : "Apply Changes"}
          </Button>
        </div>
      </div>

      {/* --- TAB NAVIGATION --- */}
      <div className="flex border-b border-slate-200 dark:border-white/5">
        <button 
          onClick={() => setCurrentTab('navbar')}
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 transition-all relative ${
            currentTab === 'navbar' ? 'text-primary' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PanelTop size={18} /> Navbar Configuration
          {currentTab === 'navbar' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
        <button 
          onClick={() => setCurrentTab('footer')}
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 transition-all relative ${
            currentTab === 'footer' ? 'text-primary' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PanelBottom size={18} /> Footer Configuration
          {currentTab === 'footer' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentTab === 'navbar' ? (
          <MotionDiv 
            key="navbar"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Branding Section */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Type size={18} className="text-primary" /> Global Branding
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Logo Text (Primary)</label>
                    <div className="relative">
                       <input 
                        type="text" 
                        defaultValue="Tech" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Logo Text (Accent)</label>
                    <input 
                      type="text" 
                      defaultValue="Safi" 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-primary outline-none" 
                    />
                  </div>
               </div>
            </div>

            {/* Menu Links Section */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
               <div className="p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                    <LinkIcon size={18} className="text-primary" /> Navigation Links
                  </h3>
                  <button className="px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-1">
                    <Plus size={14} /> Add Link
                  </button>
               </div>
               <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {navLinks.map((link) => (
                    <div key={link.id} className="p-6 flex flex-col md:flex-row items-center gap-6 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                       <div className="w-full md:w-1/3 space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Label</label>
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => setNavLinks(navLinks.map(l => l.id === link.id ? {...l, label: e.target.value} : l))}
                            className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium dark:text-white outline-none focus:border-primary" 
                          />
                       </div>
                       <div className="w-full md:flex-1 space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Route Path</label>
                          <div className="relative">
                            <Globe size={14} className="absolute left-4 top-3.5 text-slate-400" />
                            <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => setNavLinks(navLinks.map(l => l.id === link.id ? {...l, path: e.target.value} : l))}
                              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-xs font-mono text-primary outline-none focus:border-primary" 
                            />
                          </div>
                       </div>
                       <div className="flex items-center gap-2 pt-6 md:pt-0">
                          <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"><Edit2 size={16} /></button>
                          <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"><Trash2 size={16} /></button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* CTA Config */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 {/* Fix: Added Zap to imports to resolve error on line 177 */}
                 <Zap size={18} className="text-primary" /> Primary CTA
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Button Label</label>
                    <input 
                      type="text" 
                      value={navbarCta} 
                      onChange={(e) => setNavbarCta(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                    />
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
                     <p className="text-[10px] font-bold uppercase text-slate-400 mb-4">Preview Component</p>
                     <Button className="rounded-full px-8 bg-primary/20 text-primary border border-primary/50 font-bold hover:bg-primary hover:text-white">
                       {navbarCta}
                     </Button>
                  </div>
               </div>
            </div>
          </MotionDiv>
        ) : (
          <MotionDiv 
            key="footer"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 {/* Fix: Added Building2 to imports to resolve error on line 207 */}
                 <Building2 size={18} className="text-primary" /> Corporate Identity
               </h3>
               <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Footer Tagline / Description</label>
                    <textarea 
                      rows={4}
                      value={footerDesc}
                      onChange={(e) => setFooterDesc(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none leading-relaxed" 
                    />
                  </div>
               </div>
            </div>

            {/* Global Contact Info */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Mail size={18} className="text-primary" /> Communication Channels
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Support Email</label>
                    <div className="relative">
                       <Mail size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="email" 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Business Phone</label>
                    <div className="relative">
                       <Phone size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="text" 
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Headquarters Address</label>
                    <div className="relative">
                       <MapPin size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="text" 
                        value={officeLocation}
                        onChange={(e) => setOfficeLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
               </div>
            </div>

            {/* Social Matrix */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Share2 size={18} className="text-primary" /> Social Connectivity
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub', 'Instagram', 'Facebook'].map((platform) => (
                    <div key={platform} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                       <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#0f172a] flex items-center justify-center text-slate-400 border border-slate-200 dark:border-white/10">
                          <LinkIcon size={14} />
                       </div>
                       <div className="flex-1 space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">{platform} URL</span>
                          <input 
                            type="text" 
                            placeholder={`https://${platform.toLowerCase()}.com/techsafi`}
                            className="w-full bg-transparent text-xs text-primary outline-none"
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

    </div>
  );
};
