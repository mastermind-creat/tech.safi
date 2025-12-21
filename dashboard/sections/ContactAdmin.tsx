import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MessageSquare, Clock, Calendar, 
  Trash2, Edit3, CheckCircle2, AlertCircle, 
  Search, Filter, ArrowUpRight, DollarSign,
  User, Building2, MoreVertical, X, Save,
  Send, ShieldCheck, Flag, Inbox, History,
  ChevronRight, RefreshCw, Star, Info, Zap,
  Layout, Settings, HelpCircle, PlusCircle,
  MinusCircle, Globe, Smartphone, MapPin,
  // Fix: Added missing Type, MessageCircle, and Plus icons from lucide-react
  Type, MessageCircle, Plus
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { 
  fetchContactSubmissions, saveContactSubmissions, 
  fetchContactPageConfig, saveContactPageConfig,
  ContactSubmission, ContactPageConfig 
} from '../services/api';

export const ContactAdmin: React.FC = () => {
  const [activeView, setActiveView] = useState<'leads' | 'config'>('leads');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [pageConfig, setPageConfig] = useState<ContactPageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<ContactSubmission['status'] | 'All'>('All');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [leads, config] = await Promise.all([
        fetchContactSubmissions(),
        fetchContactPageConfig()
      ]);
      setSubmissions(leads);
      setPageConfig(config);
      setLoading(false);
    };
    load();
  }, []);

  const handleSaveConfig = async () => {
    if (!pageConfig) return;
    setIsSaving(true);
    await saveContactPageConfig(pageConfig);
    setIsSaving(false);
    alert("Public Contact Page matrix synchronized.");
  };

  const handleSaveAllLeads = async (updatedList: ContactSubmission[]) => {
    setIsSaving(true);
    await saveContactSubmissions(updatedList);
    setSubmissions(updatedList);
    setIsSaving(false);
  };

  // --- RENDERING SUB-COMPONENTS ---

  const renderLeadsManager = () => {
    const filteredLeads = submissions.filter(lead => {
      const matchesStatus = activeTab === 'All' || lead.status === activeTab;
      const matchesSearch = 
        lead.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        lead.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.subject.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });

    const getStatusColor = (s: ContactSubmission['status']) => {
      switch (s) {
        case 'New': return 'text-primary bg-primary/10';
        case 'Contacted': return 'text-purple-500 bg-purple-500/10';
        case 'In Progress': return 'text-blue-500 bg-blue-500/10';
        case 'Closed': return 'text-emerald-500 bg-emerald-500/10';
        default: return 'text-slate-400 bg-slate-400/10';
      }
    };

    const getPriorityColor = (p: ContactSubmission['priority']) => {
      switch (p) {
        case 'Urgent': return 'text-red-500 bg-red-500/10';
        case 'High': return 'text-orange-500 bg-orange-500/10';
        case 'Medium': return 'text-blue-500 bg-blue-500/10';
        default: return 'text-slate-400 bg-slate-400/10';
      }
    };

    return (
      <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-2">
        {/* Inbox List */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex flex-col gap-4">
             <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  type="text" 
                  placeholder="Search leads..." 
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary/20"
                />
             </div>
             <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide pb-2">
                {['All', 'New', 'In Progress', 'Contacted', 'Closed'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
             </div>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-hide">
             {filteredLeads.length > 0 ? filteredLeads.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map(lead => (
               <div 
                 key={lead.id} 
                 onClick={() => setSelectedLead(lead)}
                 className={`p-5 rounded-2xl border transition-all cursor-pointer group relative ${selectedLead?.id === lead.id ? 'bg-primary/10 border-primary' : 'bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/5 hover:border-primary/40'}`}
               >
                 <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xs font-bold text-slate-500">
                          {lead.firstName.charAt(0)}{lead.lastName.charAt(0)}
                       </div>
                       <div className="font-bold text-sm dark:text-white truncate max-w-[120px]">{lead.firstName} {lead.lastName}</div>
                    </div>
                    <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${getStatusColor(lead.status)}`}>
                       {lead.status}
                    </span>
                 </div>
                 <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3 truncate">{lead.subject}</div>
                 <div className="flex items-center justify-between">
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                       <Clock size={10} /> {new Date(lead.timestamp).toLocaleDateString()}
                    </div>
                    <div className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${getPriorityColor(lead.priority)}`}>
                       {lead.priority}
                    </div>
                 </div>
                 {lead.status === 'New' && (
                   <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                 )}
               </div>
             )) : (
               <div className="text-center py-20 text-slate-500 italic">No matching leads found.</div>
             )}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="flex-1">
          {selectedLead ? (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm h-full flex flex-col">
              <div className="flex justify-between items-start mb-8 pb-8 border-b border-slate-100 dark:border-white/5">
                 <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-2xl shadow-xl">
                      {selectedLead.firstName.charAt(0)}
                    </div>
                    <div>
                       <h2 className="text-2xl font-bold dark:text-white mb-1">{selectedLead.firstName} {selectedLead.lastName}</h2>
                       <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-1 hover:text-primary transition-colors"><Mail size={14} /> {selectedLead.email}</a>
                          <span className="flex items-center gap-1"><Building2 size={14} /> {selectedLead.source}</span>
                       </div>
                    </div>
                 </div>
                 <button onClick={() => setSelectedLead(null)} className="p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-full"><X size={20} /></button>
              </div>
              <div className="space-y-6">
                 <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Message</span>
                       {selectedLead.budget && <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">Budget: {selectedLead.budget}</span>}
                    </div>
                    <p className="text-sm dark:text-slate-200 leading-relaxed whitespace-pre-line">{selectedLead.message}</p>
                 </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-slate-50 dark:bg-[#0f172a]/20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-3xl h-full flex flex-col items-center justify-center text-center p-12">
               <div className="w-16 h-16 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-xl"><Inbox size={32} className="text-slate-300" /></div>
               <h2 className="text-xl font-bold dark:text-white mb-2">Lead Standby</h2>
               <p className="text-slate-500 text-sm">Select an inquiry from the inbox to manage the project lead.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderConfigurator = () => {
    if (!pageConfig) return null;
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 pb-20">
         {/* 1. Hero & Badges */}
         <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
            <h3 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2"><Type size={18} className="text-primary" /> Hero Section Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Floating Badge Text</label>
                    <input value={pageConfig.hero.badge} onChange={e => setPageConfig({...pageConfig, hero: {...pageConfig.hero, badge: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Main Headline</label>
                    <input value={pageConfig.hero.title} onChange={e => setPageConfig({...pageConfig, hero: {...pageConfig.hero, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                  </div>
               </div>
               <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Compelling Subtitle</label>
                  <textarea rows={4} value={pageConfig.hero.subtitle} onChange={e => setPageConfig({...pageConfig, hero: {...pageConfig.hero, subtitle: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
               </div>
            </div>
         </div>

         {/* 2. Info Cards (The 3 cards under the hero) */}
         <div className="space-y-6">
            <h3 className="text-lg font-bold dark:text-white flex items-center gap-2 px-2"><Globe size={18} className="text-primary" /> Contact Modalities</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {pageConfig.cards.map((card, idx) => (
                 <div key={card.id} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 shadow-sm group">
                    <div className="flex items-center justify-between mb-2">
                       <div className={`w-10 h-10 rounded-xl bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-500`}>
                          {card.type === 'email' ? <Mail size={20} /> : card.type === 'phone' ? <Phone size={20} /> : <MapPin size={20} />}
                       </div>
                       <select value={card.type} onChange={e => {
                          const updated = [...pageConfig.cards];
                          updated[idx].type = e.target.value as any;
                          setPageConfig({...pageConfig, cards: updated});
                       }} className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold rounded-lg px-2 py-1 outline-none">
                          <option value="email">Email Card</option>
                          <option value="phone">Phone Card</option>
                          <option value="address">Address Card</option>
                       </select>
                    </div>
                    <div className="space-y-3">
                       <input value={card.title} onChange={e => {
                          const updated = [...pageConfig.cards];
                          updated[idx].title = e.target.value;
                          setPageConfig({...pageConfig, cards: updated});
                       }} className="w-full bg-transparent font-bold dark:text-white text-base outline-none" placeholder="Card Title" />
                       <input value={card.primaryDetail} onChange={e => {
                          const updated = [...pageConfig.cards];
                          updated[idx].primaryDetail = e.target.value;
                          setPageConfig({...pageConfig, cards: updated});
                       }} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs text-primary font-bold outline-none" placeholder="Detail 1" />
                       <input value={card.secondaryDetail} onChange={e => {
                          const updated = [...pageConfig.cards];
                          updated[idx].secondaryDetail = e.target.value;
                          setPageConfig({...pageConfig, cards: updated});
                       }} className="w-full bg-transparent text-[10px] text-slate-500 outline-none" placeholder="Detail 2" />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* 3. Form Configuration */}
         <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
            <h3 className="text-lg font-bold dark:text-white mb-8 flex items-center gap-2"><Send size={18} className="text-primary" /> Lead Form Settings</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {/* Subjects List */}
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold uppercase text-slate-400">Project Subjects Dropdown</label>
                    <button onClick={() => setPageConfig({...pageConfig, form: {...pageConfig.form, subjects: [...pageConfig.form.subjects, 'New Subject']}})} className="text-[10px] font-bold text-primary flex items-center gap-1"><PlusCircle size={14} /> Add</button>
                  </div>
                  <div className="space-y-2">
                     {pageConfig.form.subjects.map((subj, i) => (
                       <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-2 rounded-xl group">
                          <input value={subj} onChange={e => {
                             const updated = [...pageConfig.form.subjects];
                             updated[i] = e.target.value;
                             setPageConfig({...pageConfig, form: {...pageConfig.form, subjects: updated}});
                          }} className="flex-1 bg-transparent text-sm dark:text-slate-300 outline-none" />
                          <button onClick={() => {
                             const updated = pageConfig.form.subjects.filter((_, idx) => idx !== i);
                             setPageConfig({...pageConfig, form: {...pageConfig.form, subjects: updated}});
                          }} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Budget List */}
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold uppercase text-slate-400">Budget Range Options</label>
                    <button onClick={() => setPageConfig({...pageConfig, form: {...pageConfig.form, budgets: [...pageConfig.form.budgets, 'KES X - Y']}})} className="text-[10px] font-bold text-primary flex items-center gap-1"><PlusCircle size={14} /> Add</button>
                  </div>
                  <div className="space-y-2">
                     {pageConfig.form.budgets.map((bud, i) => (
                       <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-2 rounded-xl group">
                          <DollarSign size={14} className="text-emerald-500" />
                          <input value={bud} onChange={e => {
                             const updated = [...pageConfig.form.budgets];
                             updated[i] = e.target.value;
                             setPageConfig({...pageConfig, form: {...pageConfig.form, budgets: updated}});
                          }} className="flex-1 bg-transparent text-sm dark:text-slate-300 outline-none" />
                          <button onClick={() => {
                             const updated = pageConfig.form.budgets.filter((_, idx) => idx !== i);
                             setPageConfig({...pageConfig, form: {...pageConfig.form, budgets: updated}});
                          }} className="text-slate-400 hover:text-red-500"><X size={14} /></button>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* 4. WhatsApp & FAQ */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><MessageCircle size={18} className="text-emerald-500" /> Instant Support (WhatsApp)</h3>
                  <button onClick={() => setPageConfig({...pageConfig, whatsapp: {...pageConfig.whatsapp, isActive: !pageConfig.whatsapp.isActive}})} className={`w-10 h-5 rounded-full transition-colors relative ${pageConfig.whatsapp.isActive ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
                     <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${pageConfig.whatsapp.isActive ? 'left-6' : 'left-1'}`} />
                  </button>
               </div>
               <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">WhatsApp Number (Int. Format)</label>
                    <input value={pageConfig.whatsapp.number} onChange={e => setPageConfig({...pageConfig, whatsapp: {...pageConfig.whatsapp, number: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-mono text-emerald-600 outline-none focus:border-emerald-500" placeholder="254..." />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-2">Section Headline</label>
                    <input value={pageConfig.whatsapp.title} onChange={e => setPageConfig({...pageConfig, whatsapp: {...pageConfig.whatsapp, title: e.target.value}})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm dark:text-white outline-none" />
                  </div>
               </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><HelpCircle size={18} className="text-purple-500" /> Contact FAQ List</h3>
                  <button onClick={() => setPageConfig({...pageConfig, faqs: [...pageConfig.faqs, { id: Math.random().toString(36).substr(2, 9), question: 'New Question?', answer: 'Answer...' }]})} className="text-primary text-[10px] font-bold flex items-center gap-1 hover:underline"><Plus size={14} /> Add FAQ</button>
               </div>
               <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                  {pageConfig.faqs.map((faq, i) => (
                    <div key={faq.id} className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group">
                       <div className="flex items-center justify-between mb-3">
                          <input value={faq.question} onChange={e => {
                             const updated = [...pageConfig.faqs];
                             updated[i].question = e.target.value;
                             setPageConfig({...pageConfig, faqs: updated});
                          }} className="flex-1 bg-transparent font-bold text-xs dark:text-white outline-none" placeholder="Question" />
                          <button onClick={() => setPageConfig({...pageConfig, faqs: pageConfig.faqs.filter(f => f.id !== faq.id)})} className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                       </div>
                       <textarea rows={2} value={faq.answer} onChange={e => {
                          const updated = [...pageConfig.faqs];
                          updated[i].answer = e.target.value;
                          setPageConfig({...pageConfig, faqs: updated});
                       }} className="w-full bg-transparent text-[11px] text-slate-500 outline-none resize-none" placeholder="Answer..." />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
    );
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <RefreshCw className="text-primary animate-spin" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Establishing Lead Tunnel...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Client Liaison HQ
             <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase">CRM</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Direct management of client leads and public-facing contact modalities.</p>
        </div>
        <div className="flex items-center gap-3">
          {activeView === 'config' && (
             <Button onClick={handleSaveConfig} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
                {isSaving ? 'Syncing...' : <><Save size={18} className="mr-2" /> Sync Contact Matrix</>}
             </Button>
          )}
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-white/5">
        <button 
          onClick={() => setActiveView('leads')} 
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative transition-all ${activeView === 'leads' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <Inbox size={18} /> Lead Inbox ({submissions.length})
          {activeView === 'leads' && <motion.div layoutId="contact-view" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
        <button 
          onClick={() => setActiveView('config')} 
          className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative transition-all ${activeView === 'config' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <Settings size={18} /> Page Configuration
          {activeView === 'config' && <motion.div layoutId="contact-view" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeView} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
          {activeView === 'leads' ? renderLeadsManager() : renderConfigurator()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Download = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;