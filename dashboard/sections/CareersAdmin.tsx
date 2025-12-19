
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, Briefcase, Users, 
  GraduationCap, Lightbulb, TrendingUp, Handshake, 
  Rocket, AlertTriangle, CheckCircle2, Send, 
  PlusCircle, MinusCircle, GripVertical, Image as ImageIcon,
  Type, MessageSquare, HelpCircle, MapPin, Clock, Heart,
  Settings, Zap, ShieldAlert, Target
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchCareersData, saveCareersData, CareersConfig, JobOpening, CareerCultureValue, CareerBenefit } from '../services/api';

export const CareersAdmin: React.FC = () => {
  const [config, setConfig] = useState<CareersConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'culture' | 'jobs' | 'students' | 'apply'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchCareersData();
      setConfig(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setIsSaving(true);
    await saveCareersData(config);
    setIsSaving(false);
    alert("Careers Matrix Synchronized.");
  };

  if (loading || !config) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Briefcase className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Talent Vault...</p>
    </div>
  );

  const MotionDiv = motion.div as any;

  // --- JOB HELPERS ---

  const addJob = () => {
    const newJob: JobOpening = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Position',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full Time',
      desc: 'Short description...',
      requirements: ['Req 1'],
      category: 'Regular',
      status: 'Open'
    };
    setConfig({ ...config, jobs: [...config.jobs, newJob] });
  };

  const removeJob = (id: string) => {
    setConfig({ ...config, jobs: config.jobs.filter(j => j.id !== id) });
  };

  const updateJob = (id: string, field: keyof JobOpening, value: any) => {
    const updated = config.jobs.map(j => j.id === id ? { ...j, [field]: value } : j);
    setConfig({ ...config, jobs: updated });
  };

  // --- CULTURE HELPERS ---

  const addCultureValue = () => {
    const newVal: CareerCultureValue = {
      id: Math.random().toString(36).substr(2, 9),
      iconName: 'Zap',
      title: 'New Value',
      desc: 'Description...',
      color: 'blue'
    };
    setConfig({ ...config, culture: [...config.culture, newVal] });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Careers Command
             <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase">Talent</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage job openings, student programs, and employer branding.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
             {isSaving ? 'Syncing...' : <><Save size={16} className="mr-2" /> Sync Careers Matrix</>}
          </Button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {[
           { id: 'hero', label: 'Hero & Notice', icon: Type },
           { id: 'culture', label: 'Culture & Benefits', icon: Heart },
           { id: 'jobs', label: 'Job Openings', icon: Briefcase },
           { id: 'students', label: 'Student Hub', icon: GraduationCap },
           { id: 'apply', label: 'Application Flow', icon: Send }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             <tab.icon size={18} /> {tab.label}
             {activeTab === tab.id && <motion.div layoutId="careers-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
        {/* --- HERO & NOTICE TAB --- */}
        {activeTab === 'hero' && (
          <MotionDiv key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <h3 className="text-lg font-bold dark:text-white">Hero Presentation</h3>
               <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Main Headline</label>
                    <input value={config.hero.title} onChange={e => setConfig({...config, hero: {...config.hero, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Subtitle</label>
                    <textarea rows={2} value={config.hero.subtitle} onChange={e => setConfig({...config, hero: {...config.hero, subtitle: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 outline-none resize-none" />
                  </div>
               </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-500/20 p-8 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <ShieldAlert size={120} className="text-amber-500" />
               </div>
               <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
                     <AlertTriangle size={20} /> Growth Phase Notification
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold text-amber-600 uppercase">Status: {config.notice.isActive ? 'Active' : 'Hidden'}</span>
                     <button onClick={() => setConfig({...config, notice: {...config.notice, isActive: !config.notice.isActive}})} className={`w-10 h-5 rounded-full transition-colors relative ${config.notice.isActive ? 'bg-amber-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${config.notice.isActive ? 'left-6' : 'left-1'}`} />
                     </button>
                  </div>
               </div>
               <div className="space-y-4 relative z-10">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400 block mb-2">Notice Title</label>
                    <input value={config.notice.title} onChange={e => setConfig({...config, notice: {...config.notice, title: e.target.value}})} className="w-full bg-white dark:bg-black/20 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400 block mb-2">Description / Disclaimer</label>
                    <textarea rows={4} value={config.notice.description} onChange={e => setConfig({...config, notice: {...config.notice, description: e.target.value}})} className="w-full bg-white dark:bg-black/20 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400 block mb-2">Commission Terms Highlights</label>
                    <input value={config.notice.commissionDetails} onChange={e => setConfig({...config, notice: {...config.notice, commissionDetails: e.target.value}})} className="w-full bg-white dark:bg-black/20 border border-amber-200 dark:border-amber-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 outline-none" />
                  </div>
               </div>
            </div>
          </MotionDiv>
        )}

        {/* --- CULTURE TAB --- */}
        {activeTab === 'culture' && (
          <MotionDiv key="culture" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold dark:text-white">Cultural Pillars</h3>
               <Button onClick={addCultureValue} variant="outline" size="sm"><Plus size={16} className="mr-1" /> Add Value</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {config.culture.map(val => (
                 <div key={val.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 group">
                    <div className="flex justify-between items-start">
                       <input value={val.iconName} onChange={e => setConfig({...config, culture: config.culture.map(v => v.id === val.id ? {...v, iconName: e.target.value} : v)})} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded px-2 py-1 text-[10px] font-mono text-primary outline-none w-24" placeholder="Icon" />
                       <button onClick={() => setConfig({...config, culture: config.culture.filter(v => v.id !== val.id)})} className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                    </div>
                    <input value={val.title} onChange={e => setConfig({...config, culture: config.culture.map(v => v.id === val.id ? {...v, title: e.target.value} : v)})} className="w-full bg-transparent text-lg font-bold dark:text-white outline-none" />
                    <textarea rows={3} value={val.desc} onChange={e => setConfig({...config, culture: config.culture.map(v => v.id === val.id ? {...v, desc: e.target.value} : v)})} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" />
                 </div>
               ))}
            </div>
          </MotionDiv>
        )}

        {/* --- JOBS TAB --- */}
        {activeTab === 'jobs' && (
          <MotionDiv key="jobs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold dark:text-white">Active Opportunities</h3>
               <Button onClick={addJob} className="rounded-xl"><Plus size={18} className="mr-1" /> Post New Role</Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {config.jobs.map(job => (
                 <div key={job.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm group">
                    <div className="flex flex-col lg:flex-row gap-8">
                       <div className="lg:w-1/3 space-y-4">
                          <div className="flex items-center justify-between">
                             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Briefcase size={24} />
                             </div>
                             <div className="flex gap-2">
                                <select value={job.status} onChange={e => updateJob(job.id, 'status', e.target.value)} className="bg-slate-50 dark:bg-white/5 border-0 text-[10px] font-bold rounded-lg px-2 py-1 outline-none">
                                   <option value="Open">Open</option>
                                   <option value="Closed">Closed</option>
                                   <option value="Hidden">Hidden</option>
                                </select>
                                <button onClick={() => removeJob(job.id)} className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                             </div>
                          </div>
                          <div>
                             <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Role Title</label>
                             <input value={job.title} onChange={e => updateJob(job.id, 'title', e.target.value)} className="w-full bg-transparent text-xl font-bold dark:text-white outline-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Department</label>
                                <input value={job.department} onChange={e => updateJob(job.id, 'department', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs outline-none" />
                             </div>
                             <div>
                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Location</label>
                                <input value={job.location} onChange={e => updateJob(job.id, 'location', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs outline-none" />
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex-1 space-y-6">
                          <div>
                             <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Role Overview</label>
                             <textarea rows={3} value={job.desc} onChange={e => updateJob(job.id, 'desc', e.target.value)} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                          </div>
                          <div>
                             <div className="flex items-center justify-between mb-3">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Key Requirements</label>
                                <button onClick={() => updateJob(job.id, 'requirements', [...job.requirements, 'New requirement'])} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"><PlusCircle size={12} /> Add</button>
                             </div>
                             <div className="space-y-2">
                                {job.requirements.map((req, i) => (
                                   <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-2.5 rounded-lg group/req">
                                      <CheckCircle2 size={14} className="text-emerald-500" />
                                      <input value={req} onChange={e => {
                                         const updated = [...job.requirements];
                                         updated[i] = e.target.value;
                                         updateJob(job.id, 'requirements', updated);
                                      }} className="flex-1 bg-transparent text-xs dark:text-white outline-none" />
                                      <button onClick={() => {
                                         const updated = job.requirements.filter((_, idx) => idx !== i);
                                         updateJob(job.id, 'requirements', updated);
                                      }} className="opacity-0 group-hover/req:opacity-100 text-slate-400 hover:text-red-500 transition-all"><X size={14} /></button>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
               {config.jobs.length === 0 && <p className="text-center py-20 text-slate-400 italic">No job postings available.</p>}
            </div>
          </MotionDiv>
        )}

        {/* --- STUDENTS TAB --- */}
        {activeTab === 'students' && (
          <MotionDiv key="students" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Internship Config */}
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold dark:text-white flex items-center gap-3"><GraduationCap size={24} className="text-blue-500" /> Internship Matrix</h3>
                  <div>
                     <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Program Title</label>
                     <input value={config.internship.title} onChange={e => setConfig({...config, internship: {...config.internship, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-bold dark:text-white outline-none" />
                  </div>
                  <div>
                     <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Standard Duration</label>
                     <input value={config.internship.duration} onChange={e => setConfig({...config, internship: {...config.internship, duration: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                  </div>
                  <div>
                     <div className="flex items-center justify-between mb-3">
                        <label className="text-[10px] font-bold uppercase text-slate-400">Program Benefits</label>
                        <button onClick={() => setConfig({...config, internship: {...config.internship, features: [...config.internship.features, 'New benefit']}})} className="text-[10px] font-bold text-primary flex items-center gap-1"><Plus size={12} /> Add</button>
                     </div>
                     <div className="space-y-2">
                        {config.internship.features.map((feat, i) => (
                           <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-2 rounded-lg">
                              <input value={feat} onChange={e => {
                                 const updated = [...config.internship.features];
                                 updated[i] = e.target.value;
                                 setConfig({...config, internship: {...config.internship, features: updated}});
                              }} className="flex-1 bg-transparent text-xs dark:text-white outline-none" />
                              <button onClick={() => {
                                 const updated = config.internship.features.filter((_, idx) => idx !== i);
                                 setConfig({...config, internship: {...config.internship, features: updated}});
                              }} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Attachment Config */}
               <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold dark:text-white flex items-center gap-3"><Target size={24} className="text-purple-500" /> Attachment Matrix</h3>
                  <div>
                     <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Program Title</label>
                     <input value={config.attachment.title} onChange={e => setConfig({...config, attachment: {...config.attachment, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-bold dark:text-white outline-none" />
                  </div>
                  <div>
                     <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Standard Duration</label>
                     <input value={config.attachment.duration} onChange={e => setConfig({...config, attachment: {...config.attachment, duration: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none" />
                  </div>
                  <div>
                     <div className="flex items-center justify-between mb-3">
                        <label className="text-[10px] font-bold uppercase text-slate-400">Standard Features</label>
                        <button onClick={() => setConfig({...config, attachment: {...config.attachment, features: [...config.attachment.features, 'New feature']}})} className="text-[10px] font-bold text-primary flex items-center gap-1"><Plus size={12} /> Add</button>
                     </div>
                     <div className="space-y-2">
                        {config.attachment.features.map((feat, i) => (
                           <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-2 rounded-lg">
                              <input value={feat} onChange={e => {
                                 const updated = [...config.attachment.features];
                                 updated[i] = e.target.value;
                                 setConfig({...config, attachment: {...config.attachment, features: updated}});
                              }} className="flex-1 bg-transparent text-xs dark:text-white outline-none" />
                              <button onClick={() => {
                                 const updated = config.attachment.features.filter((_, idx) => idx !== i);
                                 setConfig({...config, attachment: {...config.attachment, features: updated}});
                              }} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </MotionDiv>
        )}

        {/* --- APPLY TAB --- */}
        {activeTab === 'apply' && (
          <MotionDiv key="apply" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
             <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                <h3 className="text-lg font-bold dark:text-white mb-6">Application Methodology Steps</h3>
                <div className="space-y-4">
                   {config.applicationSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-4 rounded-xl group">
                         <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">{i+1}</div>
                         <div className="flex-1 grid grid-cols-2 gap-4">
                            <input value={step.title} onChange={e => {
                               const updated = [...config.applicationSteps];
                               updated[i].title = e.target.value;
                               setConfig({...config, applicationSteps: updated});
                            }} className="bg-transparent text-sm font-bold dark:text-white outline-none" placeholder="Title" />
                            <input value={step.desc} onChange={e => {
                               const updated = [...config.applicationSteps];
                               updated[i].desc = e.target.value;
                               setConfig({...config, applicationSteps: updated});
                            }} className="bg-transparent text-xs text-slate-500 outline-none" placeholder="Short description" />
                         </div>
                         <button onClick={() => {
                            const updated = config.applicationSteps.filter((_, idx) => idx !== i);
                            setConfig({...config, applicationSteps: updated});
                         }} className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                      </div>
                   ))}
                   <button onClick={() => setConfig({...config, applicationSteps: [...config.applicationSteps, { step: (config.applicationSteps.length+1).toString(), title: 'New Step', desc: 'Process detail', color: 'blue' }]})} className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-xl text-slate-400 hover:border-primary hover:text-primary transition-all font-bold text-sm">
                      Add Workflow Step
                   </button>
                </div>
             </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};
