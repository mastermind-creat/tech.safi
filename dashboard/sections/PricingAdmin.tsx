
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, CreditCard, 
  CheckCircle2, DollarSign, Zap, Globe, Smartphone,
  Brain, Bot, Settings, Rocket, PlusCircle, MinusCircle,
  GripVertical, Award, Info
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchPricingPlans, savePricingData, PricingPlan } from '../services/api';

export const PricingAdmin: React.FC = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<PricingPlan['category']>('Web');
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [currentPlan, setCurrentPlan] = useState<Partial<PricingPlan> | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchPricingPlans();
      setPlans(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    await savePricingData(plans);
    setLoading(false);
    alert("Pricing matrix synchronized with production.");
  };

  const addPlan = () => {
    const newPlan: PricingPlan = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Package',
      price: '0',
      description: 'Package description...',
      features: ['Core Feature'],
      recommended: false,
      category: activeCategory,
      displayOrder: plans.filter(p => p.category === activeCategory).length + 1
    };
    setPlans([...plans, newPlan]);
    setCurrentPlan(newPlan);
    setIsEditing(newPlan.id);
  };

  const removePlan = (id: string) => {
    if (window.confirm("Remove this pricing package permanently?")) {
      setPlans(plans.filter(p => p.id !== id));
    }
  };

  const applyPlanChanges = () => {
    if (currentPlan && currentPlan.id) {
      setPlans(plans.map(p => p.id === currentPlan.id ? { ...p, ...currentPlan } as PricingPlan : p));
      setIsEditing(null);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <CreditCard className="text-primary animate-bounce" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Financial Matrix...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Pricing Engine</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage all service packages, AI tiers, and retainer rates.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={addPlan} variant="outline" className="rounded-xl flex items-center gap-2">
            <Plus size={18} /> Add Plan
          </Button>
          <Button onClick={handleSave} className="rounded-xl bg-primary text-white font-bold shadow-lg">
            Sync Pricing
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {['Web', 'Mobile', 'AI Addon', 'AI Project', 'Maintenance'].map((cat) => (
           <button 
             key={cat}
             onClick={() => {setActiveCategory(cat as any); setIsEditing(null);}}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeCategory === cat ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             {cat} Packages
             {activeCategory === cat && <motion.div layoutId="pricing-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div key="edit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
               <h2 className="text-xl font-bold dark:text-white">Configure Package: {currentPlan?.name}</h2>
               <div className="flex gap-3">
                 <Button variant="ghost" onClick={() => setIsEditing(null)}>Cancel</Button>
                 <Button onClick={applyPlanChanges} className="rounded-xl bg-primary text-white">Apply Updates</Button>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 space-y-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Package Name</label>
                      <input value={currentPlan?.name} onChange={e => setCurrentPlan({...currentPlan, name: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Base Price (KES String)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                           <DollarSign size={14} />
                        </div>
                        <input value={currentPlan?.price} onChange={e => setCurrentPlan({...currentPlan, price: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Short Pitch / Description</label>
                    <textarea rows={3} value={currentPlan?.description} onChange={e => setCurrentPlan({...currentPlan, description: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                   <div className="flex items-center justify-between mb-6">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Plan Deliverables</label>
                      <button onClick={() => setCurrentPlan({...currentPlan, features: [...(currentPlan?.features || []), 'New Feature']})} className="text-primary text-[10px] font-bold flex items-center gap-1 hover:underline"><PlusCircle size={14} /> Add Feature</button>
                   </div>
                   <div className="space-y-3">
                      {currentPlan?.features?.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                           <GripVertical size={16} className="text-slate-400" />
                           <input value={feat} onChange={e => {
                             const updated = [...(currentPlan?.features || [])];
                             updated[i] = e.target.value;
                             setCurrentPlan({...currentPlan, features: updated});
                           }} className="flex-1 bg-transparent text-sm dark:text-white outline-none" />
                           <button onClick={() => setCurrentPlan({...currentPlan, features: currentPlan?.features?.filter((_, idx) => idx !== i)})} className="text-slate-400 hover:text-red-500"><MinusCircle size={16} /></button>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 space-y-6 shadow-sm">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Organization Category</label>
                      <select value={currentPlan?.category} onChange={e => setCurrentPlan({...currentPlan, category: e.target.value as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none">
                        <option value="Web">Web</option>
                        <option value="Mobile">Mobile</option>
                        <option value="AI Addon">AI Addon</option>
                        <option value="AI Project">AI Project</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-2">
                         <Award size={18} className="text-amber-500" />
                         <span className="text-xs font-bold dark:text-white">Recommended</span>
                      </div>
                      <button onClick={() => setCurrentPlan({...currentPlan, recommended: !currentPlan?.recommended})} className={`w-12 h-6 rounded-full transition-colors relative ${currentPlan?.recommended ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                         <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${currentPlan?.recommended ? 'left-7' : 'left-1'}`} />
                      </button>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Order Priority</label>
                      <input type="number" value={currentPlan?.displayOrder} onChange={e => setCurrentPlan({...currentPlan, displayOrder: parseInt(e.target.value)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none" />
                   </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                   <div className="flex gap-3 text-primary mb-4">
                      <Info size={20} className="shrink-0" />
                      <p className="text-xs font-medium leading-relaxed">
                        Prices are handled as formatted strings (e.g. "85,000" or "700,000+"). Annual discount calculations are applied dynamically on the frontend.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.filter(p => p.category === activeCategory).sort((a,b) => a.displayOrder - b.displayOrder).map(plan => (
              <div key={plan.id} className={`group bg-white dark:bg-[#0f172a] rounded-3xl border ${plan.recommended ? 'border-primary shadow-xl shadow-primary/10' : 'border-slate-200 dark:border-white/5'} p-8 flex flex-col hover:border-primary/50 transition-all duration-300`}>
                 <div className="flex justify-between items-start mb-6">
                    <div>
                       <h3 className="text-xl font-bold dark:text-white mb-1">{plan.name}</h3>
                       <p className="text-xs text-slate-500 line-clamp-1">{plan.description}</p>
                    </div>
                    {plan.recommended && <span className="bg-primary text-white text-[8px] font-black uppercase px-2 py-1 rounded">Popular</span>}
                 </div>
                 <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-xs text-slate-400">KES</span>
                    <span className="text-3xl font-black dark:text-white">{plan.price}</span>
                 </div>
                 <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-500">
                         <CheckCircle2 size={14} className="text-emerald-500" /> {f}
                      </div>
                    ))}
                    {plan.features.length > 4 && <div className="text-[10px] text-slate-400 pl-6">+{plan.features.length - 4} more features</div>}
                 </div>
                 <div className="flex gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                    <button onClick={() => {setCurrentPlan(plan); setIsEditing(plan.id);}} className="flex-1 py-2 bg-slate-50 dark:bg-white/5 hover:bg-primary hover:text-white transition-all rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                       <Edit3 size={14} /> Edit
                    </button>
                    <button onClick={() => removePlan(plan.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                       <Trash2 size={16} />
                    </button>
                 </div>
              </div>
            ))}
            <button onClick={addPlan} className="min-h-[250px] border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all group">
               <Plus size={32} className="mb-3 group-hover:scale-110 transition-transform" />
               <span className="font-bold">Add {activeCategory} Plan</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
