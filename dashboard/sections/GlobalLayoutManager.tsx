
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PanelTop, PanelBottom, Save, RefreshCw, 
  Plus, Trash2, Edit2, Link as LinkIcon, 
  Globe, Mail, Phone, MapPin, Share2,
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  Zap, Building2, Clock, Scale, ShieldCheck, Loader2,
  Hash, ExternalLink, Activity
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchGlobalLayoutConfig, saveGlobalLayoutConfig, GlobalLayoutConfig } from '../services/api';

interface GlobalLayoutManagerProps {
  activeTab: 'navbar' | 'footer';
}

export const GlobalLayoutManager: React.FC<GlobalLayoutManagerProps> = ({ activeTab: initialTab }) => {
  const [currentTab, setCurrentTab] = useState<'navbar' | 'footer'>(initialTab);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [config, setConfig] = useState<GlobalLayoutConfig | null>(null);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const data = await fetchGlobalLayoutConfig();
      setConfig(data);
      setIsLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setIsSaving(true);
    try {
      await saveGlobalLayoutConfig(config);
      alert("Executive change applied successfully.");
    } catch (err) {
      alert("Failed to synchronize with production.");
    } finally {
      setIsSaving(false);
    }
  };

  // Generic List Management Helpers
  const addItem = (category: 'navbar' | 'footer', listKey: string) => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    const newItem = { id: newId, label: 'New Item', path: '#' };
    
    const updatedConfig = { ...config };
    (updatedConfig as any)[category][listKey] = [...(updatedConfig as any)[category][listKey], newItem];
    setConfig(updatedConfig);
  };

  const removeItem = (category: 'navbar' | 'footer', listKey: string, id: string) => {
    if (!config) return;
    const updatedConfig = { ...config };
    (updatedConfig as any)[category][listKey] = (updatedConfig as any)[category][listKey].filter((item: any) => item.id !== id);
    setConfig(updatedConfig);
  };

  const updateItem = (category: 'navbar' | 'footer', listKey: string, id: string, field: string, value: string) => {
    if (!config) return;
    const updatedConfig = { ...config };
    (updatedConfig as any)[category][listKey] = (updatedConfig as any)[category][listKey].map((item: any) => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setConfig(updatedConfig);
  };

  const addSocial = () => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        socials: [...config.footer.socials, { id: newId, platform: 'Platform Name', url: '#' }]
      }
    });
  };

  if (isLoading || !config) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
        <Loader2 className="text-primary animate-spin" size={48} />
        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Accessing UI Blueprint...</p>
      </div>
    );
  }

  const MotionDiv = motion.div as any;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Global UI Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure global navigation, branding, and footer matrix.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => window.location.reload()}
            variant="ghost" 
            className="flex-1 sm:flex-none border border-slate-200 dark:border-white/10 rounded-xl"
          >
             <RefreshCw size={16} className="mr-2" /> Discard
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="flex-1 sm:flex-none bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20"
          >
             {isSaving ? <Loader2 size={16} className="mr-2 animate-spin" /> : <Save size={16} className="mr-2" />}
             {isSaving ? "Applying..." : "Sync Changes"}
          </Button>
        </div>
      </div>

      {/* --- TAB NAVIGATION --- */}
      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
        <button 
          onClick={() => setCurrentTab('navbar')}
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 transition-all relative whitespace-nowrap ${
            currentTab === 'navbar' ? 'text-primary' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PanelTop size={18} /> Navbar Configuration
          {currentTab === 'navbar' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
        <button 
          onClick={() => setCurrentTab('footer')}
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 transition-all relative whitespace-nowrap ${
            currentTab === 'footer' ? 'text-primary' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PanelBottom size={18} /> Footer Architecture
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
                 <Type size={18} className="text-primary" /> Corporate Branding
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Brand Name (Primary)</label>
                    <input 
                      type="text" 
                      value={config.navbar.logoPrimary} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, logoPrimary: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Brand Name (Accent)</label>
                    <input 
                      type="text" 
                      value={config.navbar.logoAccent} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, logoAccent: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-primary outline-none" 
                    />
                  </div>
               </div>
            </div>

            {/* Menu Links Section */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
               <div className="p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                    <LinkIcon size={18} className="text-primary" /> Navigation Hierarchy
                  </h3>
                  <button 
                    onClick={() => addItem('navbar', 'links')}
                    className="px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Nav Link
                  </button>
               </div>
               <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {config.navbar.links.map((link) => (
                    <div key={link.id} className="p-6 flex flex-col md:flex-row items-center gap-6 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                       <div className="w-full md:w-1/3 space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Menu Label</label>
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => updateItem('navbar', 'links', link.id, 'label', e.target.value)}
                            className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                          />
                       </div>
                       <div className="w-full md:flex-1 space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Route Path</label>
                          <div className="relative">
                            <Globe size={14} className="absolute left-4 top-3.5 text-slate-400" />
                            <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => updateItem('navbar', 'links', link.id, 'path', e.target.value)}
                              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-xs font-mono text-primary outline-none focus:border-primary" 
                            />
                          </div>
                       </div>
                       <div className="flex items-center gap-2 pt-6 md:pt-0">
                          <button 
                            onClick={() => removeItem('navbar', 'links', link.id)}
                            className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* CTA Config */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Zap size={18} className="text-primary" /> Action Portal
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Main Button Label</label>
                    <input 
                      type="text" 
                      value={config.navbar.ctaLabel} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, ctaLabel: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                    />
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 text-center flex flex-col items-center justify-center">
                     <p className="text-[10px] font-bold uppercase text-slate-400 mb-4">Nav Component Preview</p>
                     <Button className="rounded-full px-8 bg-primary/20 text-primary border border-primary/50 font-bold">
                       {config.navbar.ctaLabel}
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
            {/* Corporate Profile Column */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Building2 size={18} className="text-primary" /> Footer Column 1: Brand Profile
               </h3>
               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Corporate Tagline</label>
                    <textarea 
                      rows={3}
                      value={config.footer.tagline}
                      onChange={(e) => setConfig({...config, footer: {...config.footer, tagline: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none leading-relaxed" 
                    />
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                           <Share2 size={12} /> Social Connectivity
                        </label>
                        <button 
                          onClick={addSocial}
                          className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"
                        >
                           <Plus size={12} /> Add Network
                        </button>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {config.footer.socials.map((social) => (
                           <div key={social.id} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 group">
                              <div className="flex-1 space-y-2">
                                 <input 
                                    type="text" 
                                    value={social.platform} 
                                    onChange={(e) => {
                                       const updated = config.footer.socials.map(s => s.id === social.id ? { ...s, platform: e.target.value } : s);
                                       setConfig({ ...config, footer: { ...config.footer, socials: updated } });
                                    }}
                                    className="w-full bg-transparent text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 outline-none"
                                 />
                                 <input 
                                    type="text" 
                                    value={social.url} 
                                    onChange={(e) => {
                                       const updated = config.footer.socials.map(s => s.id === social.id ? { ...s, url: e.target.value } : s);
                                       setConfig({ ...config, footer: { ...config.footer, socials: updated } });
                                    }}
                                    className="w-full bg-transparent text-xs text-primary outline-none"
                                 />
                              </div>
                              <button 
                                 onClick={() => {
                                    const updated = config.footer.socials.filter(s => s.id !== social.id);
                                    setConfig({ ...config, footer: { ...config.footer, socials: updated } });
                                 }}
                                 className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all"
                              >
                                 <Trash2 size={14} />
                              </button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Quick Links & Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Quick Links Column */}
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                       <ArrowRight size={18} className="text-primary" /> Footer Column 2: Quick Links
                     </h3>
                     <button 
                        onClick={() => addItem('footer', 'quickLinks')}
                        className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                     >
                       <Plus size={16} />
                     </button>
                  </div>
                  <div className="space-y-3">
                     {config.footer.quickLinks.map((link) => (
                        <div key={link.id} className="flex items-center gap-4 group">
                           <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/10" />
                           <input 
                              type="text" 
                              value={link.label}
                              onChange={(e) => updateItem('footer', 'quickLinks', link.id, 'label', e.target.value)}
                              className="w-1/3 bg-transparent text-sm font-bold dark:text-white outline-none"
                           />
                           <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => updateItem('footer', 'quickLinks', link.id, 'path', e.target.value)}
                              className="flex-1 bg-transparent text-xs text-primary font-mono outline-none"
                           />
                           <button onClick={() => removeItem('footer', 'quickLinks', link.id)} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all">
                              <Trash2 size={14} />
                           </button>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Services Column */}
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                       <Zap size={18} className="text-primary" /> Footer Column 3: Services
                     </h3>
                     <button 
                        onClick={() => addItem('footer', 'serviceLinks')}
                        className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                     >
                       <Plus size={16} />
                     </button>
                  </div>
                  <div className="space-y-3">
                     {config.footer.serviceLinks.map((link) => (
                        <div key={link.id} className="flex items-center gap-4 group">
                           <span className="text-primary font-bold">›</span>
                           <input 
                              type="text" 
                              value={link.label}
                              onChange={(e) => updateItem('footer', 'serviceLinks', link.id, 'label', e.target.value)}
                              className="w-1/3 bg-transparent text-sm font-bold dark:text-white outline-none"
                           />
                           <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => updateItem('footer', 'serviceLinks', link.id, 'path', e.target.value)}
                              className="flex-1 bg-transparent text-xs text-primary font-mono outline-none"
                           />
                           <button onClick={() => removeItem('footer', 'serviceLinks', link.id)} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all">
                              <Trash2 size={14} />
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Contact Matrix Column */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Mail size={18} className="text-primary" /> Footer Column 4: Contact & Location
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Official Email</label>
                    <div className="relative">
                       <Mail size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="email" 
                        value={config.footer.email}
                        onChange={(e) => setConfig({...config, footer: {...config.footer, email: e.target.value}})}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contact Number</label>
                    <div className="relative">
                       <Phone size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="text" 
                        value={config.footer.phone}
                        onChange={(e) => setConfig({...config, footer: {...config.footer, phone: e.target.value}})}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Headquarters</label>
                    <div className="relative">
                       <MapPin size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="text" 
                        value={config.footer.address}
                        onChange={(e) => setConfig({...config, footer: {...config.footer, address: e.target.value}})}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Operation Window</label>
                    <div className="relative">
                       <Clock size={14} className="absolute left-4 top-3.5 text-slate-400" />
                       <input 
                        type="text" 
                        value={config.footer.officeHours}
                        onChange={(e) => setConfig({...config, footer: {...config.footer, officeHours: e.target.value}})}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold dark:text-white outline-none focus:border-primary" 
                       />
                    </div>
                  </div>
               </div>
            </div>

            {/* Legal & Compliance Matrix */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                   <ShieldCheck size={18} className="text-primary" /> Footer Bottom: Legal & Compliance
                 </h3>
                 <button 
                  onClick={() => addItem('footer', 'legalLinks')}
                  className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                 >
                   <Plus size={16} />
                 </button>
               </div>
               
               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Copyright Statement</label>
                    <input 
                      type="text"
                      value={config.footer.copyright}
                      onChange={(e) => setConfig({...config, footer: {...config.footer, copyright: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {config.footer.legalLinks.map((link) => (
                        <div key={link.id} className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative group">
                           <input 
                              type="text" 
                              value={link.label}
                              onChange={(e) => updateItem('footer', 'legalLinks', link.id, 'label', e.target.value)}
                              placeholder="Title"
                              className="bg-transparent text-xs font-bold text-slate-900 dark:text-white outline-none"
                           />
                           <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => updateItem('footer', 'legalLinks', link.id, 'path', e.target.value)}
                              placeholder="URL"
                              className="bg-transparent text-[10px] text-primary outline-none"
                           />
                           <button 
                              onClick={() => removeItem('footer', 'legalLinks', link.id)} 
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"
                           >
                              <X size={12} />
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

    </div>
  );
};

const X = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
