import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, Building2, Users, 
  Rocket, Lightbulb, Handshake, Award, Crown, Cpu, 
  ShieldCheck, Linkedin, Twitter, Github, Globe, 
  ChevronRight, ArrowRight, Type, Image as ImageIcon,
  MessageSquare, LayoutGrid, List, GripVertical, PlusCircle,
  MinusCircle, Globe2, Share2, Star, Diamond, ChevronDown,
  Layout, Shield, ArrowUp, ArrowDown, Eye, EyeOff, Hash,
  RefreshCw
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchAboutUsData, saveAboutUsData, AboutUsConfig, VisionaryMember, CoreValue, CompanyMilestone, VisionarySocial } from '../services/api';

export const AboutUsAdmin: React.FC = () => {
  const [config, setConfig] = useState<AboutUsConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'story' | 'values' | 'visionaries' | 'journey'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAboutUsData();
      // Ensure all members have the correct new properties
      const visionaries = data.visionaries.map(v => ({
        ...v,
        tier: v.tier || 'executive',
        expertise: v.expertise || [],
        socials: v.socials || [],
        status: v.status || 'Active'
      }));
      setConfig({ ...data, visionaries });
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

  const addVisionary = (tier: VisionaryMember['tier'] = 'executive') => {
    const newMember: VisionaryMember = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Leader',
      role: 'Executive',
      shortRole: 'EXEC',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400',
      desc: 'Short bio...',
      stats: [{ label: 'Impact', value: '100%' }],
      socials: [],
      expertise: [],
      color: 'from-blue-500 to-purple-600',
      badgeColor: 'bg-blue-600',
      iconName: 'Crown',
      displayOrder: config.visionaries.filter(v => v.tier === tier).length + 1,
      tier: tier,
      status: 'Active'
    };
    setConfig({ ...config, visionaries: [...config.visionaries, newMember] });
  };

  const removeVisionary = (id: string) => {
    if (window.confirm("Remove this leader from the hierarchy?")) {
      setConfig({ ...config, visionaries: config.visionaries.filter(v => v.id !== id) });
    }
  };

  const updateVisionary = (id: string, field: keyof VisionaryMember, value: any) => {
    const updated = config.visionaries.map(v => v.id === id ? { ...v, [field]: value } : v);
    setConfig({ ...config, visionaries: updated });
  };

  const moveVisionary = (id: string, direction: 'up' | 'down') => {
    const member = config.visionaries.find(v => v.id === id);
    if (!member) return;
    
    const tierMembers = config.visionaries
      .filter(v => v.tier === member.tier)
      .sort((a, b) => a.displayOrder - b.displayOrder);
    
    const currentIndex = tierMembers.findIndex(v => v.id === id);
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    if (targetIndex < 0 || targetIndex >= tierMembers.length) return;
    
    const updatedTierMembers = [...tierMembers];
    const temp = updatedTierMembers[currentIndex].displayOrder;
    updatedTierMembers[currentIndex].displayOrder = updatedTierMembers[targetIndex].displayOrder;
    updatedTierMembers[targetIndex].displayOrder = temp;
    
    const otherMembers = config.visionaries.filter(v => v.tier !== member.tier);
    setConfig({ ...config, visionaries: [...otherMembers, ...updatedTierMembers] });
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

  const renderMemberCard = (member: VisionaryMember) => (
    <div key={member.id} className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-6 shadow-sm group relative flex flex-col h-full">
       <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
             <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 dark:border-white/10 flex-shrink-0 group/img shadow-md bg-slate-100 dark:bg-slate-800">
                    <img src={member.image} className="w-full h-full object-cover transition-transform group-hover/img:scale-110" alt={member.name} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <ImageIcon size={18} className="text-white" />
                    </div>
                </div>
                <button 
                   onClick={() => updateVisionary(member.id, 'status', member.status === 'Active' ? 'Hidden' : 'Active')}
                   className={`absolute -top-1 -right-1 p-1.5 rounded-full border border-white dark:border-[#0f172a] shadow-sm z-10 ${member.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-slate-400 text-white'}`}
                   title={member.status === 'Active' ? 'Currently Visible' : 'Hidden from Public'}
                >
                    {member.status === 'Active' ? <Eye size={10} /> : <EyeOff size={10} />}
                </button>
             </div>
             <div>
                <input value={member.name} onChange={e => updateVisionary(member.id, 'name', e.target.value)} className="w-full bg-transparent text-xl font-bold dark:text-white outline-none" placeholder="Executive Name" />
                <div className="flex items-center gap-2 mt-1">
                   <select value={member.tier} onChange={e => updateVisionary(member.id, 'tier', e.target.value)} className="bg-slate-100 dark:bg-white/5 text-[9px] font-bold text-primary uppercase rounded px-2 py-0.5 border-0 outline-none hover:bg-primary/10 transition-colors">
                      <option value="ceo">Tier 1: CEO</option>
                      <option value="executive">Tier 2: EXEC</option>
                      <option value="strategic">Tier 3: STRAT</option>
                      <option value="future">Tier 4: FUTURE</option>
                   </select>
                   <input value={member.shortRole} onChange={e => updateVisionary(member.id, 'shortRole', e.target.value)} className="bg-transparent text-[9px] font-bold text-slate-400 uppercase outline-none w-10" placeholder="CEO" />
                </div>
             </div>
          </div>
          <div className="flex flex-col gap-2">
             <button onClick={() => removeVisionary(member.id)} className="p-2 text-slate-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
             <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={() => moveVisionary(member.id, 'up')} className="p-1 text-slate-400 hover:text-primary"><ArrowUp size={14} /></button>
                 <button onClick={() => moveVisionary(member.id, 'down')} className="p-1 text-slate-400 hover:text-primary"><ArrowDown size={14} /></button>
             </div>
          </div>
       </div>

       <div className="space-y-5 flex-1">
          {/* Profile Picture & Role */}
          <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                 <label className="text-[10px] font-bold uppercase text-slate-400">Profile Image URL</label>
                 <RefreshCw size={10} className="text-slate-300 animate-spin-slow" />
              </div>
              <input value={member.image} onChange={e => updateVisionary(member.id, 'image', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-[10px] font-mono text-primary outline-none focus:border-primary" placeholder="https://..." />
              
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Full Corporate Role</label>
                <input value={member.role} onChange={e => updateVisionary(member.id, 'role', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs font-bold dark:text-slate-300 outline-none" placeholder="Chief Executive Officer" />
              </div>
          </div>

          {/* Social Handles */}
          <div className="pt-2 border-t border-slate-100 dark:border-white/5">
             <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><Share2 size={12}/> Social Channels</label>
                <button 
                    onClick={() => updateVisionary(member.id, 'socials', [...member.socials, { id: Math.random().toString(36).substr(2, 9), platform: 'linkedin', url: '' }])}
                    className="text-primary text-[10px] font-bold flex items-center gap-0.5 hover:underline"
                >
                    <Plus size={12} /> Add
                </button>
             </div>
             <div className="space-y-2">
                {member.socials.map((social, sIdx) => (
                    <div key={social.id} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-1.5 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-white/10">
                        <select 
                            value={social.platform} 
                            onChange={e => {
                                const newSocials = [...member.socials];
                                newSocials[sIdx].platform = e.target.value as any;
                                updateVisionary(member.id, 'socials', newSocials);
                            }}
                            className="bg-transparent text-[10px] font-bold uppercase text-slate-500 outline-none border-0"
                        >
                            <option value="linkedin">LI</option>
                            <option value="twitter">TW</option>
                            <option value="github">GH</option>
                            <option value="instagram">IG</option>
                            <option value="facebook">FB</option>
                            <option value="web">WEB</option>
                        </select>
                        <input 
                            value={social.url} 
                            onChange={e => {
                                const newSocials = [...member.socials];
                                newSocials[sIdx].url = e.target.value;
                                updateVisionary(member.id, 'socials', newSocials);
                            }}
                            className="flex-1 bg-transparent text-[10px] font-mono text-primary outline-none" 
                            placeholder="URL" 
                        />
                        <button 
                            onClick={() => updateVisionary(member.id, 'socials', member.socials.filter(s => s.id !== social.id))}
                            className="text-slate-300 hover:text-red-500"
                        >
                            <MinusCircle size={12} />
                        </button>
                    </div>
                ))}
                {member.socials.length === 0 && <p className="text-[9px] text-slate-400 italic text-center py-1">No socials linked.</p>}
             </div>
          </div>

          {/* Bio & Expertise */}
          <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-white/5">
             <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Executive Summary</label>
                <textarea rows={2} value={member.desc} onChange={e => updateVisionary(member.id, 'desc', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-600 dark:text-slate-300 outline-none resize-none" placeholder="Bio..." />
             </div>
             
             <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1"><Hash size={12}/> Expertise Tags</label>
                    <button 
                        onClick={() => updateVisionary(member.id, 'expertise', [...member.expertise, 'New Skill'])}
                        className="text-primary text-[10px] font-bold flex items-center gap-0.5 hover:underline"
                    >
                        <Plus size={12} />
                    </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill, i) => (
                        <div key={i} className="flex items-center gap-1 bg-primary/5 border border-primary/20 rounded px-2 py-0.5 group/skill">
                            <input 
                                value={skill} 
                                onChange={e => {
                                    const newExp = [...member.expertise];
                                    newExp[i] = e.target.value;
                                    updateVisionary(member.id, 'expertise', newExp);
                                }}
                                className="bg-transparent text-[9px] font-bold text-primary outline-none w-16" 
                            />
                            <button onClick={() => updateVisionary(member.id, 'expertise', member.expertise.filter((_, idx) => idx !== i))} className="opacity-0 group-hover/skill:opacity-100 text-primary/50 hover:text-red-500"><X size={8} /></button>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Icon Key & Order */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
             <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Card Icon</label>
                <input value={member.iconName} onChange={e => updateVisionary(member.id, 'iconName', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 text-[10px] font-mono text-primary" placeholder="Crown, User..." />
             </div>
             <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Card Gradient</label>
                <input value={member.color} onChange={e => updateVisionary(member.id, 'color', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 text-[10px] font-mono text-slate-400" placeholder="from-blue-500..." />
             </div>
          </div>
       </div>
    </div>
  );

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
           { id: 'visionaries', label: 'Leadership Hierarchy', icon: Users },
           { id: 'journey', label: 'The Journey', icon: Rocket }
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

        {/* --- LEADERSHIP TAB (TIERED HIERARCHY) --- */}
        {activeTab === 'visionaries' && (
          <MotionDiv key="visionaries" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12">
            
            {/* CEO TIER */}
            <div className="space-y-6">
               <div className="flex items-center justify-between border-l-4 border-primary pl-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Tier 1: Strategic Vision (CEO)</h3>
                    <p className="text-xs text-slate-500">The primary founding vision steering the company roadmap.</p>
                  </div>
                  <Button onClick={() => addVisionary('ceo')} size="sm" className="rounded-xl"><Plus size={16} /> Add CEO</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {config.visionaries.filter(v => v.tier === 'ceo').sort((a,b) => a.displayOrder - b.displayOrder).map(member => renderMemberCard(member))}
               </div>
            </div>

            {/* EXECUTIVE TIER */}
            <div className="space-y-6">
               <div className="flex items-center justify-between border-l-4 border-purple-500 pl-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Tier 2: Core Executive Suite</h3>
                    <p className="text-xs text-slate-500">Leaders driving product architecture and operational excellence.</p>
                  </div>
                  <Button onClick={() => addVisionary('executive')} size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-xl"><Plus size={16} /> Add Executive</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {config.visionaries.filter(v => v.tier === 'executive').sort((a,b) => a.displayOrder - b.displayOrder).map(member => renderMemberCard(member))}
               </div>
            </div>

            {/* STRATEGIC TIER */}
            <div className="space-y-6">
               <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Tier 3: Specialized Intelligence</h3>
                    <p className="text-xs text-slate-500">Specialists focused on security, infrastructure, and ecosystem integrity.</p>
                  </div>
                  <Button onClick={() => addVisionary('strategic')} size="sm" className="bg-emerald-600 hover:bg-emerald-700 rounded-xl"><Plus size={16} /> Add Strategic</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {config.visionaries.filter(v => v.tier === 'strategic').sort((a,b) => a.displayOrder - b.displayOrder).map(member => renderMemberCard(member))}
               </div>
            </div>

            {/* FUTURE TIER */}
            <div className="space-y-6">
               <div className="flex items-center justify-between border-l-4 border-slate-400 pl-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Tier 4: Future Roadmap</h3>
                    <p className="text-xs text-slate-500">Growth roles planned for scaling the organization.</p>
                  </div>
                  <Button onClick={() => addVisionary('future')} size="sm" variant="outline" className="rounded-xl"><Plus size={16} /> Add Future Role</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {config.visionaries.filter(v => v.tier === 'future').sort((a,b) => a.displayOrder - b.displayOrder).map(member => renderMemberCard(member))}
               </div>
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
