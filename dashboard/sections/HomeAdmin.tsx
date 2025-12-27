import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Plus, Edit3, Trash2, Save, X, RefreshCw,
   Settings2, Type, Building2, Layout, Layers,
   Star, DollarSign, Brain, Zap, Clock, Smartphone,
   GripVertical, Image as ImageIcon, Sparkles, Sliders,
   CheckCircle2, Loader2, Gauge, Activity, Rocket
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchHomePageConfig, saveHomePageConfig, HomePageConfig } from '../services/api';

export const HomeAdmin: React.FC = () => {
   const [config, setConfig] = useState<HomePageConfig | null>(null);
   const [loading, setLoading] = useState(true);
   const [activeTab, setActiveTab] = useState<'settings' | 'hero' | 'partners' | 'speed' | 'services' | 'bento' | 'testimonials' | 'estimator'>('settings');
   const [isSaving, setIsSaving] = useState(false);
   const [saveProgress, setSaveProgress] = useState(0);

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
      setSaveProgress(10);

      // Fake progress increments
      const interval = setInterval(() => {
         setSaveProgress(prev => (prev >= 90 ? 90 : prev + 15));
      }, 400);

      try {
         await saveHomePageConfig(config);
         setSaveProgress(100);
         setTimeout(() => {
            setIsSaving(false);
            setSaveProgress(0);
            alert("Global Landing Matrix Synchronized Successfully.");
         }, 500);
      } catch (err) {
         alert("Synchronization Failure. Check Protocol.");
      } finally {
         clearInterval(interval);
      }
   };

   if (loading || !config) return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
         <Loader2 className="text-primary animate-spin" size={48} />
         <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Landing Protocols...</p>
      </div>
   );

   const MotionDiv = motion.div as any;

   return (
      <div className="space-y-8 animate-in fade-in duration-500 pb-20">
         {/* --- SYNC OVERLAY --- */}
         <AnimatePresence>
            {isSaving && (
               <MotionDiv
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-[#020617]/80 backdrop-blur-md flex flex-col items-center justify-center"
               >
                  <div className="w-full max-w-md p-8 text-center space-y-8">
                     <div className="relative inline-block">
                        <RefreshCw className="text-primary animate-spin" size={64} />
                        <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse"></div>
                     </div>
                     <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white">Synchronizing Matrix</h2>
                        <p className="text-slate-400 text-sm">Deploying global configuration to public infrastructure...</p>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                           initial={{ width: 0 }}
                           animate={{ width: `${saveProgress}%` }}
                           className="h-full bg-primary shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        />
                     </div>
                     <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{saveProgress}% Protocol Compliance</div>
                  </div>
               </MotionDiv>
            )}
         </AnimatePresence>

         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
               <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  Landing Command
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest">Live Engine</span>
               </h1>
               <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Dynamically manage all public-facing content and visual systems.</p>
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
               <Save size={18} className="mr-2" /> Sync Global Matrix
            </Button>
         </div>

         <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
            {[
               { id: 'settings', label: 'Engine Settings', icon: Settings2 },
               { id: 'hero', label: 'Hero Core', icon: Type },
               { id: 'partners', label: 'Trust Grid', icon: Building2 },
               { id: 'speed', label: 'AI Efficiency', icon: Gauge },
               { id: 'services', label: 'Service Grid', icon: Layout },
               { id: 'bento', label: 'Neural Infra', icon: Layers },
               { id: 'testimonials', label: 'Echo', icon: Star },
               { id: 'estimator', label: 'Pricing Matrix', icon: DollarSign }
            ].map(tab => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-4 text-xs font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
               >
                  <tab.icon size={16} /> {tab.label}
                  {activeTab === tab.id && <motion.div layoutId="home-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
               </button>
            ))}
         </div>

         <AnimatePresence mode="wait">
            {activeTab === 'settings' && (
               <MotionDiv key="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-6 sm:p-8 shadow-sm space-y-10">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Sliders size={18} className="text-primary" /> Visual Orchestration</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        <div className="space-y-4">
                           <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Global Animation Intensity</label>
                           <div className="flex gap-2">
                              {['low', 'medium', 'high'].map((level) => (
                                 <button
                                    key={level}
                                    onClick={() => setConfig({ ...config, settings: { ...config.settings, animationIntensity: level as any } })}
                                    className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-tighter border transition-all ${config.settings.animationIntensity === level ? 'bg-primary text-white border-primary shadow-lg' : 'bg-slate-50 dark:bg-white/5 border-transparent text-slate-500'}`}
                                 >
                                    {level}
                                 </button>
                              ))}
                           </div>
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Partner Marquee Speed (Velocity)</label>
                           <div className="flex items-center gap-4">
                              <input type="range" min="5" max="60" step="5" value={config.settings.marqueeSpeed} onChange={(e) => setConfig({ ...config, settings: { ...config.settings, marqueeSpeed: parseInt(e.target.value) } })} className="flex-1 h-1.5 bg-slate-100 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" />
                              <span className="text-sm font-mono font-bold text-primary">{config.settings.marqueeSpeed}s</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </MotionDiv>
            )}

            {activeTab === 'hero' && (
               <MotionDiv key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-6 sm:p-8 shadow-sm space-y-8">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Type size={18} className="text-primary" /> Brand Identity Core</h3>
                     <div className="space-y-6">
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Protocol Badge Text</label>
                           <input value={config.hero.badge} onChange={e => setConfig({ ...config, hero: { ...config.hero, badge: e.target.value } })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-primary outline-none" />
                        </div>
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Typewriter Nodes (Cycling Phrases)</label>
                           <div className="flex flex-wrap gap-2">
                              {config.hero.typewriterWords.map((word, idx) => (
                                 <div key={idx} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                                    <input value={word} onChange={e => {
                                       const newWords = [...config.hero.typewriterWords];
                                       newWords[idx] = e.target.value;
                                       setConfig({ ...config, hero: { ...config.hero, typewriterWords: newWords } });
                                    }} className="bg-transparent text-sm font-bold dark:text-white outline-none w-32" />
                                    <button onClick={() => setConfig({ ...config, hero: { ...config.hero, typewriterWords: config.hero.typewriterWords.filter((_, i) => i !== idx) } })} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                                 </div>
                              ))}
                              <button onClick={() => setConfig({ ...config, hero: { ...config.hero, typewriterWords: [...config.hero.typewriterWords, 'New Logic'] } })} className="p-2 border border-dashed border-slate-200 rounded-lg text-primary"><Plus size={14} /></button>
                           </div>
                        </div>
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Executive Subtitle</label>
                           <textarea rows={3} value={config.hero.subtitle} onChange={e => setConfig({ ...config, hero: { ...config.hero, subtitle: e.target.value } })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                        </div>
                     </div>
                  </div>
               </MotionDiv>
            )}

            {activeTab === 'speed' && (
               <MotionDiv key="speed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-6 sm:p-8 shadow-sm space-y-8">
                     <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Gauge size={18} className="text-emerald-500" /> AI ROI Showcase</h3>
                     <div className="space-y-6">
                        {config.aiSpeedShowcase.metrics.map((m, i) => (
                           <div key={i} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black uppercase text-slate-400">Metric Label</label>
                                 <input value={m.label} onChange={e => {
                                    const newMetrics = [...config.aiSpeedShowcase.metrics];
                                    newMetrics[i].label = e.target.value;
                                    setConfig({ ...config, aiSpeedShowcase: { ...config.aiSpeedShowcase, metrics: newMetrics } });
                                 }} className="w-full bg-transparent text-sm font-bold dark:text-white outline-none" />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black uppercase text-slate-400">Traditional Value</label>
                                 <input type="number" value={m.traditional} onChange={e => {
                                    const newMetrics = [...config.aiSpeedShowcase.metrics];
                                    newMetrics[i].traditional = parseInt(e.target.value);
                                    setConfig({ ...config, aiSpeedShowcase: { ...config.aiSpeedShowcase, metrics: newMetrics } });
                                 }} className="w-full bg-transparent text-sm font-bold dark:text-white outline-none" />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black uppercase text-slate-400">TechSafi Value</label>
                                 <input type="number" value={m.techsafi} onChange={e => {
                                    const newMetrics = [...config.aiSpeedShowcase.metrics];
                                    newMetrics[i].techsafi = parseInt(e.target.value);
                                    setConfig({ ...config, aiSpeedShowcase: { ...config.aiSpeedShowcase, metrics: newMetrics } });
                                 }} className="w-full bg-transparent text-sm font-bold text-primary outline-none" />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black uppercase text-slate-400">Unit</label>
                                 <input value={m.unit} onChange={e => {
                                    const newMetrics = [...config.aiSpeedShowcase.metrics];
                                    newMetrics[i].unit = e.target.value;
                                    setConfig({ ...config, aiSpeedShowcase: { ...config.aiSpeedShowcase, metrics: newMetrics } });
                                 }} className="w-full bg-transparent text-xs text-slate-500 outline-none" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </MotionDiv>
            )}

            {activeTab === 'partners' && (
               <MotionDiv key="partners" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex justify-between items-center px-2">
                     <h3 className="text-lg font-bold dark:text-white">Trust Grid Entities</h3>
                     <Button onClick={() => setConfig({ ...config, partners: [...config.partners, { id: Math.random().toString(36).substr(2, 9), name: 'Partner', description: '', logoUrl: '' }] })} size="sm" variant="outline" className="rounded-xl"><Plus size={16} className="mr-1" /> Add Entity</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {config.partners.map(p => (
                        <div key={p.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 group">
                           <div className="flex items-center justify-between">
                              <div className="h-10 w-10 flex items-center justify-center p-1.5 rounded-lg bg-slate-50 dark:bg-white/5">
                                 <ImageIcon className="text-slate-300" />
                              </div>
                              <button onClick={() => setConfig({ ...config, partners: config.partners.filter(x => x.id !== p.id) })} className="text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                           </div>
                           <input value={p.name} onChange={e => setConfig({ ...config, partners: config.partners.map(x => x.id === p.id ? { ...x, name: e.target.value } : x) })} className="w-full bg-transparent font-bold text-sm dark:text-white outline-none" placeholder="Name" />
                           <textarea rows={2} value={p.description} onChange={e => setConfig({ ...config, partners: config.partners.map(x => x.id === p.id ? { ...x, description: e.target.value } : x) })} className="w-full bg-slate-50 dark:bg-white/5 border border-transparent rounded-lg px-3 py-2 text-[10px] text-slate-500 outline-none" placeholder="Tooltip desc..." />
                           <input value={p.logoUrl} onChange={e => setConfig({ ...config, partners: config.partners.map(x => x.id === p.id ? { ...x, logoUrl: e.target.value } : x) })} className="w-full bg-slate-50 dark:bg-white/10 border-0 rounded px-2 py-1 text-[8px] font-mono text-primary outline-none" placeholder="Logo URL" />
                        </div>
                     ))}
                  </div>
               </MotionDiv>
            )}

            {activeTab === 'bento' && (
               <MotionDiv key="bento" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <h3 className="text-lg font-bold dark:text-white px-2">Neural Infrastructure Matrix</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {config.bento.map(item => (
                        <div key={item.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-6 group">
                           <div className="flex items-center justify-between">
                              <input value={item.badge || ''} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, badge: e.target.value } : b) })} className="bg-slate-50 dark:bg-white/5 border-0 text-[10px] font-bold uppercase text-primary rounded px-2 py-1 outline-none" placeholder="Badge" />
                              <select value={item.animationType} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, animationType: e.target.value as any } : b) })} className="bg-slate-100 dark:bg-white/5 border-0 text-[10px] font-bold uppercase rounded px-2 py-1 outline-none text-primary">
                                 <option value="float">Float</option>
                                 <option value="pulse">Pulse</option>
                                 <option value="orbit">Orbit</option>
                                 <option value="glitch">Glitch</option>
                              </select>
                           </div>
                           <input value={item.title} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, title: e.target.value } : b) })} className="w-full bg-transparent font-bold dark:text-white text-xl outline-none" placeholder="Title" />
                           <textarea rows={2} value={item.description} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, description: e.target.value } : b) })} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" />
                           <div className="flex gap-4">
                              <input value={item.iconName} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, iconName: e.target.value } : b) })} className="w-1/2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary" placeholder="Icon" />
                              <input value={item.color} onChange={e => setConfig({ ...config, bento: config.bento.map(b => b.id === item.id ? { ...b, color: e.target.value } : b) })} className="w-1/2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-slate-500" placeholder="Color" />
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
