import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, Home as HomeIcon,
  Zap, Brain, Shield, Globe, Type, Image as ImageIcon,
  PlusCircle, MinusCircle, GripVertical, ChevronDown,
  Activity, Star, DollarSign, Clock, RefreshCw, Layers,
  // Add missing Smartphone import
  Smartphone
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchHomePageConfig, saveHomePageConfig, HomePageConfig } from '../services/api';

export const HomeAdmin: React.FC = () => {
  const [config, setConfig] = useState<HomePageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'bento' | 'testimonials' | 'estimator'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchHomePageConfig();
      setConfig(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setIsSaving(true);
    await saveHomePageConfig(config);
    setIsSaving(false);
    alert("Public Homepage matrix synchronized.");
  };

  if (loading || !config) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <HomeIcon className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Retrieving Landing Protocols...</p>
    </div>
  );

  const MotionDiv = motion.div as any;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Landing Command
             <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase">Homepage</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure the first impression, core messaging, and automated project logic.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
           {isSaving ? 'Syncing...' : <><Save size={18} className="mr-2" /> Sync Landing Data</>}
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {[
           { id: 'hero', label: 'Hero & Typewriter', icon: Type },
           { id: 'bento', label: 'Innovation Grid', icon: Layers },
           { id: 'testimonials', label: 'Testimonials', icon: Star },
           { id: 'estimator', label: 'Estimator Logic', icon: DollarSign }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             <tab.icon size={18} /> {tab.label}
             {activeTab === tab.id && <motion.div layoutId="home-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
         {activeTab === 'hero' && (
            <MotionDiv key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Type size={18} className="text-primary" /> Visual Identity</h3>
                  <div className="space-y-6">
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Typewriter Words (Rotating Titles)</label>
                           <button onClick={() => setConfig({...config, hero: {...config.hero, typewriterWords: [...config.hero.typewriterWords, 'New Solution']}})} className="text-primary text-[10px] font-bold flex items-center gap-1 hover:underline"><PlusCircle size={14} /> Add Word</button>
                        </div>
                        <div className="flex flex-wrap gap-3">
                           {config.hero.typewriterWords.map((word, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10">
                                 <input value={word} onChange={e => {
                                    const newWords = [...config.hero.typewriterWords];
                                    newWords[idx] = e.target.value;
                                    setConfig({...config, hero: {...config.hero, typewriterWords: newWords}});
                                 }} className="bg-transparent text-sm font-bold dark:text-white outline-none" />
                                 <button onClick={() => setConfig({...config, hero: {...config.hero, typewriterWords: config.hero.typewriterWords.filter((_, i) => i !== idx)}})} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Compelling Subtitle</label>
                        <textarea rows={3} value={config.hero.subtitle} onChange={e => setConfig({...config, hero: {...config.hero, subtitle: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary" />
                     </div>
                  </div>
               </div>

               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2"><ImageIcon size={18} className="text-primary" /> Cinematic Backgrounds</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {config.hero.images.map((img, i) => (
                        <div key={i} className="space-y-3 group">
                           <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/10">
                              <img src={img} className="w-full h-full object-cover" />
                           </div>
                           <input value={img} onChange={e => {
                              const newImgs = [...config.hero.images];
                              newImgs[i] = e.target.value;
                              setConfig({...config, hero: {...config.hero, images: newImgs}});
                           }} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1.5 text-[10px] font-mono text-primary outline-none" />
                        </div>
                     ))}
                  </div>
               </div>
            </MotionDiv>
         )}

         {activeTab === 'bento' && (
            <MotionDiv key="bento" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <h3 className="text-lg font-bold dark:text-white px-2">Innovation Bento Content</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {config.bento.map(card => (
                     <div key={card.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 group">
                        <div className="flex items-center justify-between">
                           <div className={`p-2 rounded-lg bg-${card.color}-500/10 text-${card.color}-500`}><Globe size={18} /></div>
                           <input value={card.badge || ''} onChange={e => setConfig({...config, bento: config.bento.map(b => b.id === card.id ? {...b, badge: e.target.value} : b)})} className="bg-slate-50 dark:bg-white/5 border-0 text-[10px] font-bold uppercase text-slate-500 rounded px-2 outline-none" placeholder="OPTIONAL BADGE" />
                        </div>
                        <input value={card.title} onChange={e => setConfig({...config, bento: config.bento.map(b => b.id === card.id ? {...b, title: e.target.value} : b)})} className="w-full bg-transparent font-bold dark:text-white text-lg outline-none" />
                        <textarea rows={2} value={card.description} onChange={e => setConfig({...config, bento: config.bento.map(b => b.id === card.id ? {...b, description: e.target.value} : b)})} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" />
                        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
                           <div className="flex-1 space-y-1">
                              <label className="text-[8px] font-bold uppercase text-slate-400">Icon</label>
                              <input value={card.iconName} onChange={e => setConfig({...config, bento: config.bento.map(b => b.id === card.id ? {...b, iconName: e.target.value} : b)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary" />
                           </div>
                           <div className="flex-1 space-y-1">
                              <label className="text-[8px] font-bold uppercase text-slate-400">Theme Color</label>
                              <input value={card.color} onChange={e => setConfig({...config, bento: config.bento.map(b => b.id === card.id ? {...b, color: e.target.value} : b)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </MotionDiv>
         )}

         {activeTab === 'estimator' && (
            <MotionDiv key="estimator" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-2">
                     <label className="text-[10px] font-bold uppercase text-slate-400">Base Web Price (KES)</label>
                     <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-blue-500" />
                        <input type="number" value={config.estimator.baseWeb} onChange={e => setConfig({...config, estimator: {...config.estimator, baseWeb: parseInt(e.target.value)}})} className="bg-transparent text-2xl font-black dark:text-white outline-none w-full" />
                     </div>
                  </div>
                  <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-2">
                     <label className="text-[10px] font-bold uppercase text-slate-400">Base Mobile Price (KES)</label>
                     <div className="flex items-center gap-2">
                        <Smartphone size={18} className="text-purple-500" />
                        <input type="number" value={config.estimator.baseMobile} onChange={e => setConfig({...config, estimator: {...config.estimator, baseMobile: parseInt(e.target.value)}})} className="bg-transparent text-2xl font-black dark:text-white outline-none w-full" />
                     </div>
                  </div>
                  <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-2">
                     <label className="text-[10px] font-bold uppercase text-slate-400">Timeline Rush Multiplier</label>
                     <div className="flex items-center gap-2">
                        <Clock size={18} className="text-orange-500" />
                        <input type="number" step="0.1" value={config.estimator.rushMultiplier} onChange={e => setConfig({...config, estimator: {...config.estimator, rushMultiplier: parseFloat(e.target.value)}})} className="bg-transparent text-2xl font-black dark:text-white outline-none w-full" />
                     </div>
                  </div>
               </div>

               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-lg font-bold dark:text-white">Feature Costing Matrix</h3>
                     <button onClick={() => setConfig({...config, estimator: {...config.estimator, features: [...config.estimator.features, { id: Math.random().toString(36).substr(2, 9), label: 'New Feature', price: 50000 }]}})} className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-white transition-all">+ Add Feature</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {config.estimator.features.map((feat, i) => (
                        <div key={feat.id} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/10 group">
                           <GripVertical size={16} className="text-slate-400 cursor-move" />
                           <input value={feat.label} onChange={e => {
                              const newFeats = [...config.estimator.features];
                              newFeats[i].label = e.target.value;
                              setConfig({...config, estimator: {...config.estimator, features: newFeats}});
                           }} className="flex-1 bg-transparent text-sm font-bold dark:text-white outline-none" />
                           <div className="flex items-center gap-2 bg-white dark:bg-[#0f172a] rounded-lg px-3 py-1.5 border border-slate-200 dark:border-white/10">
                              <span className="text-[10px] font-black text-slate-400">KES</span>
                              <input type="number" value={feat.price} onChange={e => {
                                 const newFeats = [...config.estimator.features];
                                 newFeats[i].price = parseInt(e.target.value);
                                 setConfig({...config, estimator: {...config.estimator, features: newFeats}});
                              }} className="w-20 bg-transparent text-xs font-bold text-primary outline-none text-right" />
                           </div>
                           <button onClick={() => setConfig({...config, estimator: {...config.estimator, features: config.estimator.features.filter(f => f.id !== feat.id)}})} className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                        </div>
                     ))}
                  </div>
               </div>
            </MotionDiv>
         )}

         {activeTab === 'testimonials' && (
            <MotionDiv key="testimonials" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="flex justify-between items-center px-2">
                  <h3 className="text-lg font-bold dark:text-white">Client Success Stories</h3>
                  <Button onClick={() => setConfig({...config, testimonials: [...config.testimonials, { id: Math.random().toString(36).substr(2, 9), name: 'New Client', role: 'Role', text: 'Success story...', color: 'blue' }]})} variant="outline" size="sm" className="rounded-xl"><Plus size={16} /> Add Story</Button>
               </div>
               <div className="grid grid-cols-1 gap-6">
                  {config.testimonials.map(t => (
                     <div key={t.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm group">
                        <div className="flex flex-col lg:flex-row gap-8">
                           <div className="lg:w-1/4 space-y-4">
                              <div className={`w-12 h-12 rounded-full bg-${t.color}-500/10 flex items-center justify-center text-${t.color}-500 border border-${t.color}-500/20`}><Star size={24} /></div>
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Full Name</label>
                                 <input value={t.name} onChange={e => setConfig({...config, testimonials: config.testimonials.map(item => item.id === t.id ? {...item, name: e.target.value} : item)})} className="w-full bg-transparent font-bold dark:text-white outline-none" />
                              </div>
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Corporate Role</label>
                                 <input value={t.role} onChange={e => setConfig({...config, testimonials: config.testimonials.map(item => item.id === t.id ? {...item, role: e.target.value} : item)})} className="w-full bg-transparent text-sm text-slate-500 outline-none" />
                              </div>
                              <select value={t.color} onChange={e => setConfig({...config, testimonials: config.testimonials.map(item => item.id === t.id ? {...item, color: e.target.value} : item)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 text-[10px] font-bold uppercase text-slate-400 outline-none">
                                 <option value="blue">Blue Theme</option>
                                 <option value="purple">Purple Theme</option>
                                 <option value="emerald">Emerald Theme</option>
                                 <option value="pink">Pink Theme</option>
                              </select>
                           </div>
                           <div className="flex-1 space-y-4">
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Success Story Text</label>
                                 <textarea rows={4} value={t.text} onChange={e => setConfig({...config, testimonials: config.testimonials.map(item => item.id === t.id ? {...item, text: e.target.value} : item)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 text-lg italic text-slate-600 dark:text-slate-300 outline-none resize-none" />
                              </div>
                              <div className="flex justify-end">
                                 <button onClick={() => setConfig({...config, testimonials: config.testimonials.filter(item => item.id !== t.id)})} className="p-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={18} /></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </MotionDiv>
         )}
      </AnimatePresence>
    </div>
  );
};