import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, 
  Facebook, Twitter, Linkedin, Instagram, Github, 
  Search, Plus, Minus, CheckCircle2, FileText, Zap, ShieldCheck,
  ChevronDown, DollarSign, RefreshCw
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { fetchContactPageConfig, ContactPageConfig } from '../dashboard/services/api';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [config, setConfig] = useState<ContactPageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    subject: '', 
    customSubject: '',
    budget: '',
    message: '',
    agreed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchContactPageConfig();
      setConfig(data);
      setLoading(false);

      // Handle incoming state from Estimator or other sources
      if (location.state) {
        const { subject, message, budget } = location.state as any;
        setFormState(prev => ({
          ...prev,
          subject: subject || prev.subject,
          message: message || prev.message,
          budget: budget || prev.budget
        }));
      }
    };
    load();
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.agreed) {
      alert('Please agree to the privacy policy.');
      return;
    }
    setIsSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (loading || !config) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617]">
       <RefreshCw size={48} className="text-primary animate-spin" />
    </div>
  );

  const showBudget = ['Project Inquiry', 'Web Development', 'Mobile Apps', 'AI Solutions'].includes(formState.subject);

  const MotionDiv = motion.div as any;

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 overflow-x-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#020617] to-transparent"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-white/10 dark:border-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-slate-600 dark:text-slate-200">
             <MessageCircle size={12} className="mr-2" /> {config.hero.badge}
          </MotionDiv>
          
          <MotionDiv initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
              {config.hero.title}
            </h1>
          </MotionDiv>
          
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
              {config.hero.subtitle}
            </p>
          </MotionDiv>

          {/* Quick Contact Badges */}
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4 md:gap-6">
            {config.cards.map((card, idx) => (
              <div key={card.id} className="flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 backdrop-blur-md shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                <div className={`bg-${card.color}-100 dark:bg-${card.color}-500/20 p-2 rounded-lg mr-3 text-${card.color}-600 dark:text-${card.color}-400`}>
                   {card.type === 'email' ? <Mail size={18} /> : card.type === 'phone' ? <Phone size={18} /> : <MapPin size={18} />}
                </div>
                <div className="text-left">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{card.title}</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{card.primaryDetail}</div>
                </div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-20">
         {/* Detail Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {config.cards.map((item, idx) => (
               <MotionDiv key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (idx * 0.1) }} className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl p-8 text-center hover:border-slate-300 dark:hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg dark:shadow-xl">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 mx-auto mb-6`}>
                     {item.type === 'email' ? <Mail size={28} /> : item.type === 'phone' ? <Phone size={28} /> : <MapPin size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-6 leading-relaxed px-2">{item.desc}</p>
                  <a href={item.link} className={`text-${item.color}-600 dark:text-${item.color}-400 font-bold text-sm hover:underline block`}>
                     {item.primaryDetail}
                  </a>
                  <div className={`text-${item.color}-600 dark:text-${item.color}-400 font-bold text-sm mt-1`}>{item.secondaryDetail}</div>
               </MotionDiv>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
               <MotionDiv initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-lg dark:shadow-none relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <MotionDiv key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 size={40} className="text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{config.form.success.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8">{config.form.success.message}</p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                      </MotionDiv>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{config.form.title}</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">First Name</label>
                                 <input type="text" required className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500" value={formState.firstName} onChange={e => setFormState({...formState, firstName: e.target.value})} />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Last Name</label>
                                 <input type="text" required className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500" value={formState.lastName} onChange={e => setFormState({...formState, lastName: e.target.value})} />
                              </div>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Email Address</label>
                              <input type="email" required className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Subject</label>
                                <div className="relative">
                                  <select required className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 appearance-none cursor-pointer" value={formState.subject} onChange={e => setFormState({...formState, subject: e.target.value})}>
                                    <option value="" disabled>Select a topic</option>
                                    {config.form.subjects.map((subj, i) => <option key={i} value={subj}>{subj}</option>)}
                                  </select>
                                  <ChevronDown size={16} className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                                </div>
                             </div>
                             {showBudget && (
                               <MotionDiv initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                 <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Estimated Budget</label>
                                 <div className="relative">
                                   <select required className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 appearance-none cursor-pointer" value={formState.budget} onChange={e => setFormState({...formState, budget: e.target.value})}>
                                      <option value="" disabled>Select range</option>
                                      {config.form.budgets.map((bud, i) => <option key={i} value={bud}>{bud}</option>)}
                                   </select>
                                   <ChevronDown size={16} className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                                 </div>
                               </MotionDiv>
                             )}
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Your Message</label>
                              <textarea required rows={5} className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 resize-none" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                           </div>
                           <div className="flex items-start">
                              <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0f172a] text-blue-600 focus:ring-blue-500" checked={formState.agreed} onChange={e => setFormState({...formState, agreed: e.target.checked})} />
                              <label className="ml-3 text-xs text-slate-600 dark:text-slate-400">I agree to the <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link></label>
                           </div>
                           <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 shadow-lg shadow-blue-900/20 text-white">Send Message</Button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </MotionDiv>
            </div>

            {/* Sidebar Details - Also Dynamic */}
            <div className="lg:col-span-1">
               <MotionDiv initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 h-full shadow-lg dark:shadow-none">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Contact Registry</h3>
                  <div className="space-y-8">
                     {config.cards.map((item) => (
                        <div key={item.id} className="flex items-start">
                           <div className={`bg-${item.color}-100 dark:bg-${item.color}-500/10 p-2 rounded-lg mr-4 text-${item.color}-500 dark:text-${item.color}-400 mt-1`}>
                              {item.type === 'email' ? <Mail size={18} /> : item.type === 'phone' ? <Phone size={18} /> : <MapPin size={18} />}
                           </div>
                           <div>
                              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{item.title}</h4>
                              <p className="text-slate-600 dark:text-slate-400 text-xs block mb-1 font-bold">{item.primaryDetail}</p>
                              <span className="text-[10px] text-slate-500">{item.secondaryDetail}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </MotionDiv>
            </div>
         </div>
      </div>

      {/* WhatsApp Section - Dynamic */}
      {config.whatsapp.isActive && (
        <div className="bg-emerald-50 dark:bg-[#020617] relative py-20 border-y border-emerald-200 dark:border-white/5 transition-colors duration-300">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                       <MessageCircle size={12} className="mr-2" /> Instant Support
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{config.whatsapp.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{config.whatsapp.description}</p>
                 </div>
                 <MotionDiv initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                       <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"><MessageCircle size={32} className="text-white" /></div>
                       <a href={`https://wa.me/${config.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                          <button className="w-full bg-white text-emerald-700 font-bold py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                             Chat on WhatsApp <span className="ml-2 text-emerald-500">→</span>
                          </button>
                       </a>
                    </div>
                 </MotionDiv>
              </div>
           </div>
        </div>
      )}

      {/* FAQ Section - Dynamic */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-10">General <span className="text-purple-500">Queries</span></h2>
         <div className="space-y-3">
            {config.faqs.map((faq, idx) => (
               <div key={faq.id} className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-lg overflow-hidden shadow-sm dark:shadow-none">
                  <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                     <span className="text-slate-900 dark:text-white font-bold text-sm">{faq.question}</span>
                     <span className="text-slate-400">{openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}</span>
                  </button>
                  <AnimatePresence>
                     {openFaq === idx && (
                        <MotionDiv initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                           <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-white/5 mt-1">{faq.answer}</div>
                        </MotionDiv>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};
