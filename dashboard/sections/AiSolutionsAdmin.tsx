
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Bot, Sparkles, Save, Plus, Trash2, Edit3, 
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  MessageSquare, Globe, Layout, List, Settings, X,
  PlusCircle, MinusCircle, GripVertical, HelpCircle,
  Activity, Factory, GraduationCap, Shield, Zap
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { 
  fetchAiSolutionsData, saveAiSolutionsData, 
  AiSolutionsConfig, AiFeature, AiUseCase, AiFaq 
} from '../services/api';

export const AiSolutionsAdmin: React.FC = () => {
  const [config, setConfig] = useState<AiSolutionsConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'features' | 'use-cases' | 'faq'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAiSolutionsData();
      setConfig(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setIsSaving(true);
    await saveAiSolutionsData(config);
    setIsSaving(false);
    alert("AI Solution Matrix Synchronized.");
  };

  if (loading || !config) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Brain className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing AI Core...</p>
    </div>
  );

  const MotionDiv = motion.div as any;

  // --- MANAGEMENT HELPERS ---

  const addFeature = () => {
    const newFeature: AiFeature = {
      id: Math.random().toString(36).substr(2, 9),
      iconName: 'Sparkles',
      title: 'New AI Feature',
      description: 'Describe the AI capability...',
      subFeatures: ['Capability 1'],
      color: 'blue',
      displayOrder: config.features.length + 1
    };
    setConfig({ ...config, features: [...config.features, newFeature] });
  };

  const removeFeature = (id: string) => {
    setConfig({ ...config, features: config.features.filter(f => f.id !== id) });
  };

  const updateFeature = (id: string, field: keyof AiFeature, value: any) => {
    const updated = config.features.map(f => f.id === id ? { ...f, [field]: value } : f);
    setConfig({ ...config, features: updated });
  };

  const addUseCase = () => {
    const newCase: AiUseCase = {
      id: Math.random().toString(36).substr(2, 9),
      iconName: 'Zap',
      title: 'New Industry',
      description: 'How AI transforms this industry...',
      color: 'emerald'
    };
    setConfig({ ...config, industryUseCases: [...config.industryUseCases, newCase] });
  };

  const addFaq = () => {
    const newFaq: AiFaq = {
      id: Math.random().toString(36).substr(2, 9),
      question: 'New Question?',
      answer: 'The answer goes here...'
    };
    setConfig({ ...config, faqs: [...config.faqs, newFaq] });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             AI Solutions Command
             <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase">Engine</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure the intelligence layer of TechSafi's landing pages.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
             {isSaving ? 'Synchronizing...' : <><Save size={16} className="mr-2" /> Sync Engine</>}
          </Button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {[
           { id: 'hero', label: 'Hero & SEO', icon: Type },
           { id: 'features', label: 'AI Features', icon: Sparkles },
           { id: 'use-cases', label: 'Industry Vertical', icon: Activity },
           { id: 'faq', label: 'Intelligence FAQ', icon: HelpCircle }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             <tab.icon size={18} /> {tab.label}
             {activeTab === tab.id && <motion.div layoutId="ai-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
         {activeTab === 'hero' && (
            <MotionDiv key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <h3 className="text-lg font-bold dark:text-white mb-6">Landing Presentation</h3>
                  <div className="space-y-4">
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Main Headline</label>
                        <input value={config.heroTitle} onChange={e => setConfig({...config, heroTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                     </div>
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Compelling Subtitle</label>
                        <textarea rows={3} value={config.heroSubtitle} onChange={e => setConfig({...config, heroSubtitle: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                     </div>
                  </div>
               </div>

               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <h3 className="text-lg font-bold dark:text-white mb-6">SEO Optimization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Meta Title</label>
                        <input value={config.metaTitle} onChange={e => setConfig({...config, metaTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold dark:text-white outline-none focus:border-primary" />
                     </div>
                     <div>
                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Meta Description</label>
                        <textarea rows={2} value={config.metaDescription} onChange={e => setConfig({...config, metaDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                     </div>
                  </div>
               </div>
            </MotionDiv>
         )}

         {activeTab === 'features' && (
            <MotionDiv key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold dark:text-white">AI Capabilities Matrix</h3>
                  <Button onClick={addFeature} size="sm" variant="outline" className="rounded-xl"><Plus size={16} className="mr-2" /> Add AI Feature</Button>
               </div>

               <div className="grid grid-cols-1 gap-6">
                  {config.features.sort((a,b) => a.displayOrder - b.displayOrder).map(feature => (
                     <div key={feature.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm group">
                        <div className="flex flex-col lg:flex-row gap-8">
                           <div className="lg:w-1/3 space-y-4">
                              <div className="flex items-center justify-between">
                                 <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 border border-${feature.color}-500/20`}>
                                    <ImageIcon size={24} />
                                 </div>
                                 <button onClick={() => removeFeature(feature.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                              </div>
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Feature Title</label>
                                 <input value={feature.title} onChange={e => updateFeature(feature.id, 'title', e.target.value)} className="w-full bg-transparent text-lg font-bold dark:text-white outline-none" />
                              </div>
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Icon & Theme</label>
                                 <div className="flex gap-2">
                                    <input value={feature.iconName} onChange={e => updateFeature(feature.id, 'iconName', e.target.value)} className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono text-primary outline-none" placeholder="Icon" />
                                    <input value={feature.color} onChange={e => updateFeature(feature.id, 'color', e.target.value)} className="w-20 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono text-primary outline-none" placeholder="Color" />
                                 </div>
                              </div>
                           </div>
                           <div className="flex-1 space-y-4">
                              <div>
                                 <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Detailed Description</label>
                                 <textarea rows={2} value={feature.description} onChange={e => updateFeature(feature.id, 'description', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                              </div>
                              <div>
                                 <div className="flex items-center justify-between mb-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Sub-Capabilities</label>
                                    <button onClick={() => updateFeature(feature.id, 'subFeatures', [...feature.subFeatures, 'New capability'])} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"><PlusCircle size={12} /> Add</button>
                                 </div>
                                 <div className="grid grid-cols-2 gap-3">
                                    {feature.subFeatures.map((sub, i) => (
                                       <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-2 rounded-lg group/sub">
                                          <input value={sub} onChange={e => {
                                             const updatedSubs = [...feature.subFeatures];
                                             updatedSubs[i] = e.target.value;
                                             updateFeature(feature.id, 'subFeatures', updatedSubs);
                                          }} className="flex-1 bg-transparent text-xs dark:text-white outline-none" />
                                          <button onClick={() => {
                                             const updatedSubs = feature.subFeatures.filter((_, idx) => idx !== i);
                                             updateFeature(feature.id, 'subFeatures', updatedSubs);
                                          }} className="opacity-0 group-hover/sub:opacity-100 text-slate-400 hover:text-red-500"><X size={12} /></button>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </MotionDiv>
         )}

         {activeTab === 'use-cases' && (
            <MotionDiv key="use-cases" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold dark:text-white">Industry Impact Verticals</h3>
                  <Button onClick={addUseCase} size="sm" className="rounded-xl"><Plus size={16} className="mr-2" /> Add Vertical</Button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {config.industryUseCases.map(uc => (
                     <div key={uc.id} className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm group">
                        <div className="flex items-center justify-between mb-4">
                           <div className={`w-10 h-10 rounded-lg bg-${uc.color}-500/10 flex items-center justify-center text-${uc.color}-500 border border-${uc.color}-500/20`}>
                              <Activity size={20} />
                           </div>
                           <button onClick={() => setConfig({...config, industryUseCases: config.industryUseCases.filter(c => c.id !== uc.id)})} className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                        </div>
                        <input value={uc.title} onChange={e => setConfig({...config, industryUseCases: config.industryUseCases.map(c => c.id === uc.id ? {...c, title: e.target.value} : c)})} className="w-full bg-transparent text-base font-bold dark:text-white outline-none mb-2" placeholder="Industry Name" />
                        <textarea rows={3} value={uc.description} onChange={e => setConfig({...config, industryUseCases: config.industryUseCases.map(c => c.id === uc.id ? {...c, description: e.target.value} : c)})} className="w-full bg-transparent text-xs text-slate-500 outline-none resize-none" placeholder="Description..." />
                        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                           <input value={uc.iconName} onChange={e => setConfig({...config, industryUseCases: config.industryUseCases.map(c => c.id === uc.id ? {...c, iconName: e.target.value} : c)})} className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary outline-none" placeholder="Icon" />
                           <input value={uc.color} onChange={e => setConfig({...config, industryUseCases: config.industryUseCases.map(c => c.id === uc.id ? {...c, color: e.target.value} : c)})} className="w-16 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary outline-none" placeholder="Color" />
                        </div>
                     </div>
                  ))}
               </div>
            </MotionDiv>
         )}

         {activeTab === 'faq' && (
            <MotionDiv key="faq" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold dark:text-white">Technical AI FAQ</h3>
                  <Button onClick={addFaq} size="sm" variant="outline" className="rounded-xl"><Plus size={16} className="mr-2" /> New FAQ Entry</Button>
               </div>

               <div className="space-y-4">
                  {config.faqs.map(faq => (
                     <div key={faq.id} className="bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-white/5 p-6 group">
                        <div className="flex items-start justify-between gap-4 mb-4">
                           <div className="flex-1">
                              <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Question</label>
                              <input value={faq.question} onChange={e => setConfig({...config, faqs: config.faqs.map(f => f.id === faq.id ? {...f, question: e.target.value} : f)})} className="w-full bg-transparent font-bold dark:text-white outline-none" placeholder="Is my data safe?" />
                           </div>
                           <button onClick={() => setConfig({...config, faqs: config.faqs.filter(f => f.id !== faq.id)})} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                        </div>
                        <div>
                           <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Detailed Answer</label>
                           <textarea rows={3} value={faq.answer} onChange={e => setConfig({...config, faqs: config.faqs.map(f => f.id === faq.id ? {...f, answer: e.target.value} : f)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" placeholder="Provide a detailed explanation..." />
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
