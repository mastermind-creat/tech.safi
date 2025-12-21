
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PanelTop, PanelBottom, Save, RefreshCw, 
  Plus, Trash2, Link as LinkIcon, 
  Globe, Mail, Phone, MapPin, Share2,
  ChevronRight, ArrowRight, Type,
  Zap, Building2, Clock, Scale, ShieldCheck, Loader2,
  ChevronDown, Layers, CornerDownRight, X, LayoutTemplate
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchGlobalLayoutConfig, saveGlobalLayoutConfig, GlobalLayoutConfig, NavLinkConfig } from '../services/api';
import { useConfig } from '../../context/ConfigContext';

interface GlobalLayoutManagerProps {
  activeTab: 'navbar' | 'footer';
}

export const GlobalLayoutManager: React.FC<GlobalLayoutManagerProps> = ({ activeTab: initialTab }) => {
  const [currentTab, setCurrentTab] = useState<'navbar' | 'footer'>(initialTab);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { refreshConfig } = useConfig();
  
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
      await refreshConfig();
      alert("Executive change applied successfully and synchronized site-wide.");
    } catch (err) {
      alert("Failed to synchronize with production.");
    } finally {
      setIsSaving(false);
    }
  };

  // --- NAVBAR MANAGEMENT HELPERS ---

  const addNavLink = () => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    const newItem: NavLinkConfig = { id: newId, label: 'New Link', path: '#' };
    setConfig({ ...config, navbar: { ...config.navbar, links: [...config.navbar.links, newItem] } });
  };

  const addSubLink = (parentId: string) => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    const newSub: NavLinkConfig = { id: newId, label: 'Sub-item', path: '#' };
    const updatedLinks = config.navbar.links.map(link => 
      link.id === parentId ? { ...link, children: [...(link.children || []), newSub] } : link
    );
    setConfig({ ...config, navbar: { ...config.navbar, links: updatedLinks } });
  };

  const removeNavLink = (id: string) => {
    if (!config) return;
    setConfig({ ...config, navbar: { ...config.navbar, links: config.navbar.links.filter(link => link.id !== id) } });
  };

  const removeSubLink = (parentId: string, subId: string) => {
    if (!config) return;
    const updatedLinks = config.navbar.links.map(link => {
      if (link.id === parentId) {
        return { ...link, children: link.children?.filter(c => c.id !== subId) };
      }
      return link;
    });
    setConfig({ ...config, navbar: { ...config.navbar, links: updatedLinks } });
  };

  const updateNavLink = (id: string, field: string, value: string) => {
    if (!config) return;
    const updatedLinks = config.navbar.links.map(link => 
      link.id === id ? { ...link, [field as keyof NavLinkConfig]: value } : link
    );
    setConfig({ ...config, navbar: { ...config.navbar, links: updatedLinks } });
  };

  const updateSubLink = (parentId: string, subId: string, field: string, value: string) => {
    if (!config) return;
    const updatedLinks = config.navbar.links.map(link => {
      if (link.id === parentId) {
        const updatedSubs = link.children?.map(c => 
          c.id === subId ? { ...c, [field as keyof NavLinkConfig]: value } : c
        );
        return { ...link, children: updatedSubs };
      }
      return link;
    });
    setConfig({ ...config, navbar: { ...config.navbar, links: updatedLinks } });
  };

  // --- FOOTER MANAGEMENT HELPERS ---
  
  const addFooterListItem = (listKey: 'quickLinks' | 'serviceLinks' | 'legalLinks') => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    const newItem = { id: newId, label: 'New Link', path: '#' };
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        [listKey]: [...config.footer[listKey], newItem]
      }
    });
  };

  const removeFooterListItem = (listKey: 'quickLinks' | 'serviceLinks' | 'legalLinks', id: string) => {
    if (!config) return;
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        [listKey]: config.footer[listKey].filter(item => item.id !== id)
      }
    });
  };

  const updateFooterListItem = (listKey: 'quickLinks' | 'serviceLinks' | 'legalLinks', id: string, field: 'label' | 'path', value: string) => {
    if (!config) return;
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        [listKey]: config.footer[listKey].map(item => item.id === id ? { ...item, [field]: value } : item)
      }
    });
  };

  const addSocialLink = () => {
    if (!config) return;
    const newId = Math.random().toString(36).substr(2, 9);
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        socials: [...config.footer.socials, { id: newId, platform: 'Platform', url: '#' }]
      }
    });
  };

  const removeSocialLink = (id: string) => {
    if (!config) return;
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        socials: config.footer.socials.filter(s => s.id !== id)
      }
    });
  };

  const updateSocialLink = (id: string, field: 'platform' | 'url', value: string) => {
    if (!config) return;
    setConfig({
      ...config,
      footer: {
        ...config.footer,
        socials: config.footer.socials.map(s => s.id === id ? { ...s, [field]: value } : s)
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Global UI Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure site-wide navigation and the corporate footer architecture.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => window.location.reload()} variant="ghost" className="border border-slate-200 dark:border-white/10 rounded-xl">
             <RefreshCw size={16} className="mr-2" /> Discard
          </Button>
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
             {isSaving ? <Loader2 size={16} className="mr-2 animate-spin" /> : <Save size={16} className="mr-2" />}
             Sync Changes
          </Button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
        <button onClick={() => setCurrentTab('navbar')} className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap ${currentTab === 'navbar' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}>
          <PanelTop size={18} /> Navbar Configuration
          {currentTab === 'navbar' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
        <button onClick={() => setCurrentTab('footer')} className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap ${currentTab === 'footer' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}>
          <PanelBottom size={18} /> Footer Architecture
          {currentTab === 'footer' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentTab === 'navbar' ? (
          <MotionDiv key="navbar" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            
            {/* Branding & CTA Section */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2"><Type size={18} className="text-primary" /> Identity & Action</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Brand Prefix</label>
                    <input 
                      value={config.navbar.logoPrimary} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, logoPrimary: e.target.value}})} 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" 
                      placeholder="e.g. Tech"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Brand Accent</label>
                    <input 
                      value={config.navbar.logoAccent} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, logoAccent: e.target.value}})} 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold text-primary focus:border-primary outline-none" 
                      placeholder="e.g. Safi"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Navbar CTA Label</label>
                    <input 
                      value={config.navbar.ctaLabel} 
                      onChange={(e) => setConfig({...config, navbar: {...config.navbar, ctaLabel: e.target.value}})} 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" 
                      placeholder="e.g. Get Started"
                    />
                  </div>
               </div>
            </div>

            {/* Menu Links with Dropdown Support */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
               <div className="p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><LinkIcon size={18} className="text-primary" /> Navigation Hierarchy</h3>
                  <button onClick={addNavLink} className="px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-1">
                    <Plus size={14} /> Add Top Level Link
                  </button>
               </div>
               <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {config.navbar.links.map((link) => (
                    <div key={link.id} className="p-6 space-y-4">
                       <div className="flex flex-col md:flex-row items-center gap-4 group">
                          <div className="flex-1 flex gap-4 w-full">
                             <input 
                                value={link.label} 
                                onChange={(e) => updateNavLink(link.id, 'label', e.target.value)} 
                                className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" 
                                placeholder="Label" 
                             />
                             <input 
                                value={link.path} 
                                onChange={(e) => updateNavLink(link.id, 'path', e.target.value)} 
                                className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-primary outline-none" 
                                placeholder="Path" 
                             />
                          </div>
                          <div className="flex items-center gap-2">
                             <button 
                                onClick={() => addSubLink(link.id)} 
                                className="p-2.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all" 
                                title="Add Dropdown Item"
                             >
                                <Layers size={16} />
                             </button>
                             <button 
                                onClick={() => removeNavLink(link.id)} 
                                className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                             >
                                <Trash2 size={16} />
                             </button>
                          </div>
                       </div>
                       
                       {/* Sub-links (Dropdown items) */}
                       {link.children && link.children.length > 0 && (
                          <div className="pl-12 space-y-3 border-l-2 border-slate-100 dark:border-white/5 ml-4">
                             <div className="flex items-center gap-2 mb-2">
                                <ChevronDown size={12} className="text-slate-400" />
                                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Dropdown Elements</span>
                             </div>
                             {link.children.map(child => (
                               <div key={child.id} className="flex items-center gap-4 group">
                                  <CornerDownRight size={14} className="text-slate-400" />
                                  <input 
                                     value={child.label} 
                                     onChange={(e) => updateSubLink(link.id, child.id, 'label', e.target.value)} 
                                     className="flex-1 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs dark:text-slate-300 outline-none focus:border-primary" 
                                     placeholder="Sub-label" 
                                  />
                                  <input 
                                     value={child.path} 
                                     onChange={(e) => updateSubLink(link.id, child.id, 'path', e.target.value)} 
                                     className="flex-1 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono text-primary outline-none" 
                                     placeholder="Sub-path" 
                                  />
                                  <button 
                                     onClick={() => removeSubLink(link.id, child.id)} 
                                     className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                                  >
                                     <X size={14} />
                                  </button>
                               </div>
                             ))}
                          </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>
          </MotionDiv>
        ) : (
          <MotionDiv key="footer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            {/* 1. Brand Profile & Socials */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2"><Building2 size={18} className="text-primary" /> Column 1: Brand & Social Matrix</h3>
               <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Corporate Tagline</label>
                    <textarea rows={3} value={config.footer.tagline} onChange={(e) => setConfig({...config, footer: {...config.footer, tagline: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 focus:border-primary outline-none resize-none" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-[10px] font-bold uppercase text-slate-400">Social Connections</label>
                      <button onClick={addSocialLink} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"><Plus size={12} /> Add Network</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {config.footer.socials.map((social) => (
                        <div key={social.id} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 group">
                          <input value={social.platform} onChange={(e) => updateSocialLink(social.id, 'platform', e.target.value)} className="w-24 bg-transparent text-[10px] font-bold uppercase text-slate-900 dark:text-white outline-none" placeholder="Platform" />
                          <input value={social.url} onChange={(e) => updateSocialLink(social.id, 'url', e.target.value)} className="flex-1 bg-transparent text-xs text-primary outline-none" placeholder="URL" />
                          <button onClick={() => removeSocialLink(social.id)} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"><X size={14} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* 2. Quick Links & Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><ArrowRight size={18} className="text-primary" /> Column 2: Quick Links</h3>
                     <button onClick={() => addFooterListItem('quickLinks')} className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"><Plus size={16} /></button>
                  </div>
                  <div className="space-y-3">
                     {config.footer.quickLinks.map((link) => (
                        <div key={link.id} className="flex items-center gap-4 group">
                           <input value={link.label} onChange={(e) => updateFooterListItem('quickLinks', link.id, 'label', e.target.value)} className="w-1/3 bg-transparent text-sm font-bold dark:text-white outline-none" />
                           <input value={link.path} onChange={(e) => updateFooterListItem('quickLinks', link.id, 'path', e.target.value)} className="flex-1 bg-transparent text-xs text-primary font-mono outline-none" />
                           <button onClick={() => removeFooterListItem('quickLinks', link.id)} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Zap size={18} className="text-primary" /> Column 3: Our Services</h3>
                     <button onClick={() => addFooterListItem('serviceLinks')} className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"><Plus size={16} /></button>
                  </div>
                  <div className="space-y-3">
                     {config.footer.serviceLinks.map((link) => (
                        <div key={link.id} className="flex items-center gap-4 group">
                           <input value={link.label} onChange={(e) => updateFooterListItem('serviceLinks', link.id, 'label', e.target.value)} className="w-1/3 bg-transparent text-sm font-bold dark:text-white outline-none" />
                           <input value={link.path} onChange={(e) => updateFooterListItem('serviceLinks', link.id, 'path', e.target.value)} className="flex-1 bg-transparent text-xs text-primary font-mono outline-none" />
                           <button onClick={() => removeFooterListItem('serviceLinks', link.id)} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 3. Contact Matrix */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2"><Mail size={18} className="text-primary" /> Column 4: Contact Matrix</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Support Email</label>
                    <input value={config.footer.email} onChange={(e) => setConfig({...config, footer: {...config.footer, email: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Office Phone</label>
                    <input value={config.footer.phone} onChange={(e) => setConfig({...config, footer: {...config.footer, phone: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Primary Address</label>
                    <input value={config.footer.address} onChange={(e) => setConfig({...config, footer: {...config.footer, address: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Office Hours</label>
                    <input value={config.footer.officeHours} onChange={(e) => setConfig({...config, footer: {...config.footer, officeHours: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" />
                  </div>
               </div>
            </div>

            {/* 4. Legal & Bottom Bar */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Scale size={18} className="text-primary" /> Footer Bottom: Legal & Copyright</h3>
                 <button onClick={() => addFooterListItem('legalLinks')} className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"><Plus size={16} /></button>
               </div>
               <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Copyright Text</label>
                    <input value={config.footer.copyright} onChange={(e) => setConfig({...config, footer: {...config.footer, copyright: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white focus:border-primary outline-none" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {config.footer.legalLinks.map((link) => (
                        <div key={link.id} className="flex flex-col gap-2 p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl group relative">
                           <input value={link.label} onChange={(e) => updateFooterListItem('legalLinks', link.id, 'label', e.target.value)} className="bg-transparent text-xs font-bold dark:text-white outline-none" placeholder="Policy Name" />
                           <input value={link.path} onChange={(e) => updateFooterListItem('legalLinks', link.id, 'path', e.target.value)} className="bg-transparent text-[10px] text-primary outline-none font-mono" placeholder="URL" />
                           <button onClick={() => removeFooterListItem('legalLinks', link.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500"><X size={12} /></button>
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
