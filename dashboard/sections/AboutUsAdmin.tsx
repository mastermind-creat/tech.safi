
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, Building2, Users, 
  Rocket, Lightbulb, Handshake, Award, Crown, Cpu, 
  ShieldCheck, Linkedin, Twitter, Github, Globe, 
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  MessageSquare, LayoutGrid, List, GripVertical, PlusCircle,
  MinusCircle, Globe2, Share2, Star, Diamond
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchAboutUsData, saveAboutUsData, AboutUsConfig, VisionaryMember, CoreValue, CompanyMilestone } from '../services/api';

export const AboutUsAdmin: React.FC = () => {
  const [config, setConfig] = useState<AboutUsConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'story' | 'values' | 'visionaries' | 'journey'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAboutUsData();
      setConfig(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setIsSaving(true);
    await saveAboutUsData(config);
    setIsSaving(false);
    alert("Corporate About matrix synchronized with production.");
  };

  if (loading || !config) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Building2 className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Corporate Files...</p>
    </div>
  );

  const MotionDiv = motion.div as any;

  // --- VISIONARY HELPERS ---

  const addVisionary = () => {
    const newMember: VisionaryMember = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Leader',
      role: 'Executive',
      shortRole: 'EXEC',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400',
      desc: 'Short bio...',
      stats: [{ label: 'Metric', value: '100%' }],
      socials: ['linkedin', 'twitter'],
      color: 'from-blue-500 to-purple-600',
      badgeColor: 'bg-blue-600',
      iconName: 'Crown',
      displayOrder: config.visionaries.length + 1
    };
    setConfig({ ...config, visionaries: [...config.visionaries, newMember] });
  };

  const updateVisionary = (id: string, field: keyof VisionaryMember, value: any) => {
    const updated = config.visionaries.map(v => v.id === id ? { ...v, [field]: value } : v);
    setConfig({ ...config, visionaries: updated });
  };

  // --- MILESTONE HELPERS ---

  const addMilestone = () => {
    const newStone: CompanyMilestone = {
      id: Math.random().toString(36).substr(2, 9),
      year: '2025',
      title: 'Milestone Title',
      description: 'Event description...',
      iconName: 'Rocket',
      color: 'text-blue-500',
      bg: 'bg-blue-500',
      align: config.milestones.length % 2 === 0 ? 'left' : 'right',
      displayOrder: config.milestones.length + 1
    };
    setConfig({ ...config, milestones: [...config.milestones, newStone] });
  };

  const updateMilestone = (id: string, field: keyof CompanyMilestone, value: any) => {
    const updated = config.milestones.map(m => m.id === id ? { ...m, [field]: value } : m);
    setConfig({ ...config, milestones: updated });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Corporate Command
             <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-tighter">About Us</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage brand narrative, core values, and the leadership directory.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
             {isSaving ? 'Syncing...' : <><Save size={16} className="mr-2" /> Save Corporate Data</>}
          </Button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {[
           { id: 'hero', label: 'Hero & Stats', icon: Type },
           { id: 'story', label: 'Our Story', icon: MessageSquare },
           { id: 'values', label: 'Core Values', icon: Lightbulb },
           { id: 'visionaries', label: 'Leadership', icon: Users },
           { id: 'journey', label: 'Journey', icon: Rocket }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             <tab.icon size={18} /> {tab.label}
             {activeTab === tab.id && <motion.div layoutId="about-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
        {/* --- HERO TAB --- */}
        {activeTab === 'hero' && (
          <MotionDiv key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <h3 className="text-lg font-bold dark:text-white">Hero Presentation</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Established Year</label>
                    <input value={config.hero.establishedYear} onChange={e => setConfig({...config, hero: {...config.hero, establishedYear: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Main Title</label>
                    <input value={config.hero.title} onChange={e => setConfig({...config, hero: {...config.hero, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" />
                  </div>
               </div>
               <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Hero Subtitle</label>
                  <textarea rows={3} value={config.hero.subtitle} onChange={e => setConfig({...config, hero: {...config.hero, subtitle: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 outline-none resize-none" />
               </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-lg font-bold dark:text-white mb-6">Floating Stats</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {config.hero.stats.map((stat, i) => (
                    <div key={i} className="space-y-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                       <input value={stat.label} onChange={e => {
                         const newStats = [...config.hero.stats];
                         newStats[i].label = e.target.value;
                         setConfig({...config, hero: {...config.hero, stats: newStats}});
                       }} className="w-full bg-transparent text-[10px] font-bold uppercase text-slate-400 outline-none" placeholder="Label" />
                       <input value={stat.value} onChange={e => {
                         const newStats = [...config.hero.stats];
                         newStats[i].value = e.target.value;
                         setConfig({...config, hero: {...config.hero, stats: newStats}});
                       }} className="w-full bg-transparent text-2xl font-bold dark:text-white outline-none" placeholder="Value" />
                    </div>
                  ))}
               </div>
            </div>
          </MotionDiv>
        )}

        {/* --- STORY TAB --- */}
        {activeTab === 'story' && (
          <MotionDiv key="story" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold dark:text-white">Narrative Content</h3>
                  <button onClick={() => setConfig({...config, story: {...config.story, paragraphs: [...config.story.paragraphs, 'New paragraph...']}})} className="text-primary text-[10px] font-bold flex items-center gap-1"><PlusCircle size={14} /> Add Paragraph</button>
               </div>
               <div className="space-y-4">
                  {config.story.paragraphs.map((p, i) => (
                    <div key={i} className="relative group">
                       <textarea rows={4} value={p} onChange={e => {
                         const newP = [...config.story.paragraphs];
                         newP[i] = e.target.value;
                         setConfig({...config, story: {...config.story, paragraphs: newP}});
                       }} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 focus:border-primary outline-none" />
                       <button onClick={() => {
                         const newP = config.story.paragraphs.filter((_, idx) => idx !== i);
                         setConfig({...config, story: {...config.story, paragraphs: newP}});
                       }} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                    </div>
                  ))}
               </div>
            </div>
          </MotionDiv>
        )}

        {/* --- VALUES TAB --- */}
        {activeTab === 'values' && (
          <MotionDiv key="values" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold dark:text-white">Core Pillars</h3>
               <Button onClick={() => setConfig({...config, values: [...config.values, { id: Math.random().toString(36).substr(2, 9), iconName: 'Zap', title: 'New Value', description: 'Value description', color: 'bg-blue-500/10' }]})} size="sm" variant="outline">Add Core Value</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {config.values.map(val => (
                 <div key={val.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 shadow-sm group">
                    <div className="flex justify-between items-start">
                       <div className="flex items-center gap-3">
                          <input value={val.iconName} onChange={e => setConfig({...config, values: config.values.map(v => v.id === val.id ? {...v, iconName: e.target.value} : v)})} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary outline-none w-24" placeholder="Icon" />
                          <input value={val.color} onChange={e => setConfig({...config, values: config.values.map(v => v.id === val.id ? {...v, color: e.target.value} : v)})} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary outline-none w-32" placeholder="Tailwind BG Class" />
                       </div>
                       <button onClick={() => setConfig({...config, values: config.values.filter(v => v.id !== val.id)})} className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                    </div>
                    <input value={val.title} onChange={e => setConfig({...config, values: config.values.map(v => v.id === val.id ? {...v, title: e.target.value} : v)})} className="w-full bg-transparent text-xl font-bold dark:text-white outline-none" />
                    <textarea rows={3} value={val.description} onChange={e => setConfig({...config, values: config.values.map(v => v.id === val.id ? {...v, description: e.target.value} : v)})} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" />
                 </div>
               ))}
            </div>
          </MotionDiv>
        )}

        {/* --- LEADERSHIP TAB --- */}
        {activeTab === 'visionaries' && (
          <MotionDiv key="visionaries" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold dark:text-white">Founding Team & Visionaries</h3>
               <Button onClick={addVisionary} className="rounded-xl">Add Leadership Member</Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {config.visionaries.sort((a,b) => a.displayOrder - b.displayOrder).map(member => (
                 <div key={member.id} className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm group relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 dark:border-white/10 flex-shrink-0">
                             <img src={member.image} className="w-full h-full object-cover" />
                          </div>
                          <div>
                             <input value={member.name} onChange={e => updateVisionary(member.id, 'name', e.target.value)} className="w-full bg-transparent text-xl font-bold dark:text-white outline-none" />
                             <input value={member.role} onChange={e => updateVisionary(member.id, 'role', e.target.value)} className="w-full bg-transparent text-xs font-bold text-primary uppercase outline-none" />
                          </div>
                       </div>
                       <div className="flex flex-col gap-2">
                          <button onClick={() => setConfig({...config, visionaries: config.visionaries.filter(v => v.id !== member.id)})} className="p-2 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                          <div className="flex gap-1">
                             <input value={member.displayOrder} type="number" onChange={e => updateVisionary(member.id, 'displayOrder', parseInt(e.target.value))} className="w-10 bg-slate-50 dark:bg-white/5 text-[10px] font-bold text-center rounded px-1 py-1" />
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div>
                          <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Executive Bio</label>
                          <textarea rows={4} value={member.desc} onChange={e => updateVisionary(member.id, 'desc', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Visual Style (Classes)</label>
                             <div className="space-y-2">
                                <input value={member.color} onChange={e => updateVisionary(member.id, 'color', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono" placeholder="Gradient Class" />
                                <input value={member.badgeColor} onChange={e => updateVisionary(member.id, 'badgeColor', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono" placeholder="Badge BG Class" />
                             </div>
                          </div>
                          <div>
                             <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Icon & Short Role</label>
                             <div className="space-y-2">
                                <input value={member.iconName} onChange={e => updateVisionary(member.id, 'iconName', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono" placeholder="Lucide Icon Name" />
                                <input value={member.shortRole} onChange={e => updateVisionary(member.id, 'shortRole', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono" placeholder="Acronym (e.g CEO)" />
                             </div>
                          </div>
                       </div>

                       <div>
                          <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-widest">Key Performance Stats</label>
                          <div className="grid grid-cols-2 gap-4">
                             {member.stats.map((stat, i) => (
                               <div key={i} className="flex gap-2">
                                  <input value={stat.label} onChange={e => {
                                    const newStats = [...member.stats];
                                    newStats[i].label = e.target.value;
                                    updateVisionary(member.id, 'stats', newStats);
                                  }} className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-bold" placeholder="Stat Label" />
                                  <input value={stat.value} onChange={e => {
                                    const newStats = [...member.stats];
                                    newStats[i].value = e.target.value;
                                    updateVisionary(member.id, 'stats', newStats);
                                  }} className="w-16 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-bold text-center" placeholder="Value" />
                               </div>
                             ))}
                             <button onClick={() => updateVisionary(member.id, 'stats', [...member.stats, { label: 'New', value: '0' }])} className="text-[10px] font-bold text-primary flex items-center gap-1"><Plus size={12} /> Add Stat</button>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </MotionDiv>
        )}

        {/* --- JOURNEY TAB --- */}
        {activeTab === 'journey' && (
          <MotionDiv key="journey" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold dark:text-white">Historical Milestones</h3>
               <Button onClick={addMilestone} variant="outline" size="sm">Add Timeline Event</Button>
            </div>

            <div className="space-y-4">
               {config.milestones.sort((a,b) => a.displayOrder - b.displayOrder).map(stone => (
                 <div key={stone.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 group shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6">
                       <div className="md:w-1/4 space-y-4">
                          <div className="flex items-center justify-between">
                             <div className={`w-10 h-10 rounded-lg ${stone.bg} flex items-center justify-center text-white`}>
                                <ImageIcon size={20} />
                             </div>
                             <select value={stone.align} onChange={e => updateMilestone(stone.id, 'align', e.target.value)} className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold rounded px-2 py-1 outline-none">
                                <option value="left">Left Align</option>
                                <option value="right">Right Align</option>
                             </select>
                          </div>
                          <input value={stone.year} onChange={e => updateMilestone(stone.id, 'year', e.target.value)} className="w-full bg-transparent text-xl font-black dark:text-white outline-none" placeholder="Year" />
                       </div>
                       <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                             <input value={stone.title} onChange={e => updateMilestone(stone.id, 'title', e.target.value)} className="w-full bg-transparent text-lg font-bold dark:text-white outline-none" placeholder="Milestone Title" />
                             <button onClick={() => setConfig({...config, milestones: config.milestones.filter(m => m.id !== stone.id)})} className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                          </div>
                          <textarea rows={2} value={stone.description} onChange={e => updateMilestone(stone.id, 'description', e.target.value)} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" placeholder="Description of the era..." />
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                             <input value={stone.iconName} onChange={e => updateMilestone(stone.id, 'iconName', e.target.value)} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono" placeholder="Icon" />
                             <input value={stone.color} onChange={e => updateMilestone(stone.id, 'color', e.target.value)} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono" placeholder="Text Color Class" />
                             <input value={stone.bg} onChange={e => updateMilestone(stone.id, 'bg', e.target.value)} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono" placeholder="BG Color Class" />
                             <input value={stone.displayOrder} type="number" onChange={e => updateMilestone(stone.id, 'displayOrder', parseInt(e.target.value))} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-bold text-center" />
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
