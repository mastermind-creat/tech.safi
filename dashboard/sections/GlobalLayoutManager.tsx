
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PanelTop, PanelBottom, Save, RefreshCw, 
  Plus, Trash2, Edit2, Link as LinkIcon, 
  Globe, Mail, Phone, MapPin, Share2,
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  Zap, Building2, Clock, Scale, ShieldCheck, Loader2
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
  
  // Dynamic State for Configuration
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
      // Optional: Add a success toast/notification
    } catch (err) {
      alert("Failed to save configuration.");
    } finally {
      setIsSaving(false);
    }
  };

  const addNavLink = () => {
    if (!config) return;
    const newId = Date.now().toString();
    const updatedLinks = [...config.navbar.links, { id: newId, label: 'New Link', path: '/new-route' }];
    setConfig({
      ...config,
      navbar: { ...config.navbar, links: updatedLinks }
    });
  };

  const removeNavLink = (id: string) => {
    if (!config) return;
    const updatedLinks = config.navbar.links.filter(link => link.id !== id);
    setConfig({
      ...config,
      navbar: { ...config.navbar, links: updatedLinks }
    });
  };

  const updateNavLink = (id: string, field: 'label' | 'path', value: string) => {
    if (!config) return;
    const updatedLinks = config.navbar.links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    );
    setConfig({
      ...config,
      navbar: { ...config.navbar, links: updatedLinks }
    });
  };

  const addLegalLink = () => {
    if (!config) return;
    const updatedLegal = [...config.footer.legalLinks, { label: 'New Policy', path: '#' }];
    setConfig({ ...config, footer: { ...config.footer, legalLinks: updatedLegal } });
  };

  const removeLegalLink = (idx: number) => {
    if (!config) return;
    const updatedLegal = config.footer.legalLinks.filter((_, i) => i !== idx);
    setConfig({ ...config, footer: { ...config.footer, legalLinks: updatedLegal } });
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
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Synchronize structural branding and navigation elements.</p>
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
             {isSaving ? "Synchronizing..." : "Apply Changes"}
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
          <PanelTop size={18} /> Navbar Controls
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
                 <Type size={18} className="text-primary" /> Global Identity
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Brand Name (Prefix)</label>
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
                    onClick={addNavLink}
                    className="px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Menu Item
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
                            onChange={(e) => updateNavLink(link.id, 'label', e.target.value)}
                            className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                          />
                       </div>
                       <div className="w-full md:flex-1 space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Endpoint Path</label>
                          <div className="relative">
                            <Globe size={14} className="absolute left-4 top-3.5 text-slate-400" />
                            <input 
                              type="text" 
                              value={link.path}
                              onChange={(e) => updateNavLink(link.id, 'path', e.target.value)}
                              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl text-xs font-mono text-primary outline-none focus:border-primary" 
                            />
                          </div>
                       </div>
                       <div className="flex items-center gap-2 pt-6 md:pt-0">
                          <button 
                            onClick={() => removeNavLink(link.id)}
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
                 <Zap size={18} className="text-primary" /> Conversion Portal
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Action Button Text</label>
                    <input 
                      type="text" 
                      value={config.navbar.ctaLabel} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, ctaLabel: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" 
                    />
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 text-center flex flex-col items-center justify-center">
                     <p className="text-[10px] font-bold uppercase text-slate-400 mb-4">UI Blueprint Preview</p>
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
            {/* Company Info */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Building2 size={18} className="text-primary" /> Corporate Mission
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
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Copyright Notice</label>
                    <input 
                      type="text"
                      value={config.footer.copyright}
                      onChange={(e) => setConfig({...config, footer: {...config.footer, copyright: e.target.value}})}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium dark:text-white outline-none focus:border-primary" 
                    />
                  </div>
               </div>
            </div>

            {/* Communication Grid */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Mail size={18} className="text-primary" /> Contact Matrix
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Support Email</label>
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
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct Line</label>
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
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Physical Address</label>
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
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Operations Window</label>
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

            {/* Legal Matrix */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                   <Scale size={18} className="text-primary" /> Compliance Links
                 </h3>
                 <button 
                  onClick={addLegalLink}
                  className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                 >
                   <Plus size={16} />
                 </button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {config.footer.legalLinks.map((link, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                       <div className="flex-1 space-y-1">
                          <input 
                            type="text" 
                            value={link.label}
                            onChange={(e) => {
                              const updated = [...config.footer.legalLinks];
                              updated[i].label = e.target.value;
                              setConfig({...config, footer: {...config.footer, legalLinks: updated}});
                            }}
                            placeholder="Link Title"
                            className="w-full bg-transparent text-xs font-bold text-slate-900 dark:text-white outline-none"
                          />
                          <input 
                            type="text" 
                            value={link.path}
                            onChange={(e) => {
                              const updated = [...config.footer.legalLinks];
                              updated[i].path = e.target.value;
                              setConfig({...config, footer: {...config.footer, legalLinks: updated}});
                            }}
                            placeholder="URL Path"
                            className="w-full bg-transparent text-[10px] text-primary outline-none"
                          />
                       </div>
                       <button onClick={() => removeLegalLink(i)} className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                         <X size={14} />
                       </button>
                    </div>
                  ))}
               </div>
            </div>

            {/* Social Matrix */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
                 <Share2 size={18} className="text-primary" /> Social Presence
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.footer.socials.map((social, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                       <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#0f172a] flex items-center justify-center text-slate-400 border border-slate-200 dark:border-white/10">
                          <LinkIcon size={14} />
                       </div>
                       <div className="flex-1 space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">{social.platform} Platform URL</span>
                          <input 
                            type="text" 
                            value={social.url}
                            onChange={(e) => {
                              const updatedSocials = [...config.footer.socials];
                              updatedSocials[idx].url = e.target.value;
                              setConfig({...config, footer: {...config.footer, socials: updatedSocials}});
                            }}
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

// Helper Icon for Delete
const X = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
