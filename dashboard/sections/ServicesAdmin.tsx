
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Search, Edit3, Trash2, Globe, Layout, 
  ChevronRight, CheckCircle2, Layers, Cpu, 
  Sparkles, List, Settings, Save, X, Eye,
  ArrowUp, ArrowDown, Type, Image as ImageIcon,
  Rocket, CreditCard, ShieldCheck, Terminal,
  PlusCircle, MinusCircle, GripVertical, ExternalLink,
  Hash, Palmtree, Box, Zap
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { 
  fetchServices, fetchCategories, fetchMethodology, fetchTechStack, 
  saveServicesData, ServiceItem, ServiceCategory, MethodologyStep, TechItem 
} from '../services/api';

export const ServicesAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'categories' | 'methodology' | 'tech'>('list');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [methodology, setMethodology] = useState<MethodologyStep[]>([]);
  const [techStack, setTechStack] = useState<TechItem[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [currentService, setCurrentService] = useState<Partial<ServiceItem> | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [s, c, m, t] = await Promise.all([
        fetchServices(),
        fetchCategories(),
        fetchMethodology(),
        fetchTechStack()
      ]);
      setServices(s);
      setCategories(c);
      setMethodology(m);
      setTechStack(t);
      setLoading(false);
    };
    load();
  }, []);

  const handleSaveAll = async () => {
    setLoading(true);
    await saveServicesData({ services, categories, methodology, techStack });
    setLoading(false);
    setIsEditing(null);
  };

  const addService = () => {
    const newService: ServiceItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Service',
      slug: 'new-service',
      shortDescription: 'Basic overview of the service.',
      detailedDescription: '',
      categoryId: categories[0]?.id || '',
      iconName: 'Laptop',
      isAiPowered: false,
      displayOrder: services.length + 1,
      status: 'Draft',
      ctaText: 'Get Started',
      ctaLink: '/contact',
      metaTitle: '',
      metaDescription: '',
      features: ['Feature 1'],
      updatedAt: new Date().toISOString()
    };
    setServices([...services, newService]);
    setCurrentService(newService);
    setIsEditing(newService.id);
  };

  const removeService = (id: string) => {
    if (window.confirm('Delete this service permanently?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const updateServiceInList = () => {
    if (currentService && currentService.id) {
        setServices(services.map(s => s.id === currentService.id ? { ...s, ...currentService } as ServiceItem : s));
        setIsEditing(null);
    }
  };

  // --- RENDERING SUB-SECTIONS ---

  const renderServicesList = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
          <Layers size={20} className="text-primary" /> Active Service Catalog
        </h2>
        <Button onClick={addService} size="sm" className="rounded-xl flex items-center gap-2">
          <Plus size={16} /> New Service
        </Button>
      </div>

      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <tr>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">AI</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {services.sort((a, b) => a.displayOrder - b.displayOrder).map((service) => (
              <tr key={service.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-xs font-mono text-slate-400">#{service.displayOrder}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400">
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm dark:text-white">{service.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">/{service.slug}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-500">
                  {categories.find(c => c.id === service.categoryId)?.name || 'Uncategorized'}
                </td>
                <td className="px-6 py-4">
                  {service.isAiPowered ? (
                    <Sparkles size={16} className="text-purple-500" />
                  ) : (
                    <span className="text-slate-300 dark:text-slate-700">—</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${service.status === 'Published' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                    {service.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => { setCurrentService(service); setIsEditing(service.id); }} className="p-2 text-slate-400 hover:text-primary transition-all"><Edit3 size={16} /></button>
                    <button onClick={() => removeService(service.id)} className="p-2 text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-20 text-center text-slate-400 italic">No services defined. Create your first one to get started.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEditForm = () => {
    if (!currentService) return null;
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 pb-20">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <button onClick={() => setIsEditing(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full"><X size={20} className="text-slate-400" /></button>
             <h2 className="text-xl font-bold dark:text-white">Edit Service: {currentService.title}</h2>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => setIsEditing(null)} className="rounded-xl">Cancel</Button>
            <Button onClick={updateServiceInList} className="flex items-center gap-2 rounded-xl">
                <Save size={18} /> Apply Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Primary Content Config */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 shadow-sm">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Title</label>
                       <input value={currentService.title} onChange={e => setCurrentService({...currentService, title: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">URL Slug</label>
                       <input value={currentService.slug} onChange={e => setCurrentService({...currentService, slug: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-primary outline-none" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Short Description (Cards)</label>
                    <textarea rows={2} value={currentService.shortDescription} onChange={e => setCurrentService({...currentService, shortDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Detailed Description (Landing Page)</label>
                    <textarea rows={6} value={currentService.detailedDescription} onChange={e => setCurrentService({...currentService, detailedDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                 </div>
              </div>

              {/* Features List Section */}
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                 <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Service Capabilities / Features</label>
                    <button onClick={() => setCurrentService({...currentService, features: [...(currentService.features || []), 'New Feature']})} className="text-primary hover:underline text-[10px] font-bold flex items-center gap-1"><PlusCircle size={14} /> Add Capability</button>
                 </div>
                 <div className="space-y-3">
                    {currentService.features?.map((f, i) => (
                       <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-colors">
                          <GripVertical size={16} className="text-slate-400 cursor-move" />
                          <input value={f} onChange={e => {
                             const updated = [...(currentService.features || [])];
                             updated[i] = e.target.value;
                             setCurrentService({...currentService, features: updated});
                          }} className="flex-1 bg-transparent text-sm dark:text-white outline-none" placeholder="e.g. 24/7 Monitoring" />
                          <button onClick={() => {
                             const updated = (currentService.features || []).filter((_, idx) => idx !== i);
                             setCurrentService({...currentService, features: updated});
                          }} className="text-slate-400 hover:text-red-500"><MinusCircle size={16} /></button>
                       </div>
                    ))}
                    {(!currentService.features || currentService.features.length === 0) && (
                        <p className="text-center py-4 text-xs text-slate-500 italic">No features defined. Features appear in the card footer.</p>
                    )}
                 </div>
              </div>

              {/* CTA Customization */}
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><ExternalLink size={14} /> Call-to-Action Controls</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Button Label</label>
                       <input value={currentService.ctaText} onChange={e => setCurrentService({...currentService, ctaText: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" placeholder="e.g. Discuss Your Project" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Destination Link</label>
                       <input value={currentService.ctaLink} onChange={e => setCurrentService({...currentService, ctaLink: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-primary outline-none" placeholder="/contact" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Sidebar Config / Meta */}
           <div className="space-y-6">
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-6 shadow-sm">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category Mapping</label>
                    <select value={currentService.categoryId} onChange={e => setCurrentService({...currentService, categoryId: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none">
                       {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Visual Icon (Lucide)</label>
                    <input value={currentService.iconName} onChange={e => setCurrentService({...currentService, iconName: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" placeholder="e.g. Laptop, Smartphone" />
                 </div>

                 <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-500" />
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">AI Intelligent</span>
                    </div>
                    <button onClick={() => setCurrentService({...currentService, isAiPowered: !currentService.isAiPowered})} className={`w-10 h-5 rounded-full transition-colors relative ${currentService.isAiPowered ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                       <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${currentService.isAiPowered ? 'left-6' : 'left-1'}`} />
                    </button>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Order</label>
                       <input type="number" value={currentService.displayOrder} onChange={e => setCurrentService({...currentService, displayOrder: parseInt(e.target.value)})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</label>
                       <select value={currentService.status} onChange={e => setCurrentService({...currentService, status: e.target.value as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none">
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                       </select>
                    </div>
                 </div>
              </div>

              {/* SEO Data */}
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-4 shadow-sm">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2"><Globe size={14} /> Search Index Metadata</h3>
                 <div className="space-y-2">
                    <label className="text-[8px] font-bold text-slate-500 uppercase">Meta Title</label>
                    <input value={currentService.metaTitle} onChange={e => setCurrentService({...currentService, metaTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs dark:text-white outline-none" placeholder="Service SEO Title" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[8px] font-bold text-slate-500 uppercase">Meta Description</label>
                    <textarea rows={3} value={currentService.metaDescription} onChange={e => setCurrentService({...currentService, metaDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs dark:text-white outline-none resize-none" placeholder="Service SEO Description" />
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    );
  };

  const renderCategories = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold dark:text-white">Classification Systems</h2>
          <p className="text-xs text-slate-500 mt-1">Manage global service categories used for filtering and organization.</p>
        </div>
        <Button onClick={() => setCategories([...categories, { id: Math.random().toString(36).substr(2, 9), name: 'New Category', slug: 'new-cat', displayOrder: categories.length + 1, status: 'Active' }])} size="sm" variant="outline" className="rounded-xl">
           <Plus size={16} className="mr-1" /> Add Category
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.sort((a, b) => a.displayOrder - b.displayOrder).map((cat) => (
           <div key={cat.id} className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm group">
              <div className="flex items-center justify-between mb-4">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary"><List size={18} /></div>
                 <div className="flex gap-2">
                    <select value={cat.status} onChange={e => setCategories(categories.map(c => c.id === cat.id ? {...c, status: e.target.value as any} : c))} className="bg-slate-50 dark:bg-white/5 border-0 text-[10px] font-bold rounded-lg px-2 py-1 outline-none text-slate-500">
                        <option value="Active">Active</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                    <button onClick={() => setCategories(categories.filter(c => c.id !== cat.id))} className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                 </div>
              </div>
              <input value={cat.name} onChange={e => setCategories(categories.map(c => c.id === cat.id ? {...c, name: e.target.value} : c))} className="w-full bg-transparent font-bold dark:text-white text-lg outline-none mb-2" placeholder="Category Name" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Slug:</span>
                   <input value={cat.slug} onChange={e => setCategories(categories.map(c => c.id === cat.id ? {...c, slug: e.target.value} : c))} className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono text-primary outline-none" placeholder="web-apps" />
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Order:</span>
                   <input type="number" value={cat.displayOrder} onChange={e => setCategories(categories.map(c => c.id === cat.id ? {...c, displayOrder: parseInt(e.target.value)} : c))} className="w-10 bg-transparent text-[10px] font-mono text-slate-500 text-right outline-none" />
                </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  );

  const renderMethodology = () => (
    <div className="space-y-8">
      <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
         <h2 className="text-2xl font-bold dark:text-white mb-2 flex items-center gap-3">
            <Rocket size={24} className="text-primary" /> Execution Methodology
         </h2>
         <p className="text-slate-500 text-sm mb-8">Define the step-by-step process of project delivery shown on the services page.</p>
         
         <div className="space-y-6">
            {methodology.sort((a, b) => a.displayOrder - b.displayOrder).map((step, idx) => (
               <div key={step.id} className="flex gap-6 group">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-black text-sm">{idx + 1}</div>
                     <div className="flex-1 w-0.5 bg-slate-100 dark:bg-white/5"></div>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-transparent group-hover:border-primary/20 transition-all space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                            <input value={step.title} onChange={e => setMethodology(methodology.map(m => m.id === step.id ? {...m, title: e.target.value} : m))} className="bg-transparent font-bold dark:text-white outline-none text-lg flex-1" placeholder="Step Title" />
                            <div className="flex items-center gap-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Icon:</span>
                                <input value={step.iconName} onChange={e => setMethodology(methodology.map(m => m.id === step.id ? {...m, iconName: e.target.value} : m))} className="bg-transparent text-[10px] font-mono text-primary outline-none w-20" placeholder="Lucide Icon" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                           <button onClick={() => setMethodology(methodology.filter(m => m.id !== step.id))} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                           <div className="flex flex-col">
                                <button className="text-slate-400 hover:text-primary"><ArrowUp size={14} /></button>
                                <button className="text-slate-400 hover:text-primary"><ArrowDown size={14} /></button>
                           </div>
                        </div>
                     </div>
                     <textarea rows={2} value={step.description} onChange={e => setMethodology(methodology.map(m => m.id === step.id ? {...m, description: e.target.value} : m))} className="w-full bg-transparent text-sm text-slate-500 outline-none resize-none" placeholder="Explain this phase of work..." />
                  </div>
               </div>
            ))}
            <button onClick={() => setMethodology([...methodology, { id: Math.random().toString(36).substr(2, 9), title: 'New Step', description: 'Step description', iconName: 'Zap', displayOrder: methodology.length + 1 }])} className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-2xl text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all font-bold text-sm">
               Add Methodology Phase
            </button>
         </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-3xl border border-emerald-200 dark:border-emerald-500/20 p-8 shadow-sm">
         <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
            <CreditCard size={20} /> Financial Milestone Structure
         </h3>
         <p className="text-[11px] text-emerald-700 dark:text-emerald-400/70 mb-6 uppercase tracking-wider font-bold">Configure default payment splitting for transparency</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
               <label className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Upfront Commitment (%)
               </label>
               <input type="number" defaultValue={40} className="w-full bg-white dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-500/20 rounded-xl px-4 py-3 dark:text-white font-bold text-lg outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
            <div className="space-y-3">
               <label className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Final Delivery (%)
               </label>
               <input type="number" defaultValue={60} className="w-full bg-white dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-500/20 rounded-xl px-4 py-3 dark:text-white font-bold text-lg outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
         </div>
      </div>
    </div>
  );

  const renderTechStack = () => (
    <div className="space-y-8">
       <div className="flex justify-between items-center">
          <div>
             <h2 className="text-xl font-bold dark:text-white">Technology Arsenal</h2>
             <p className="text-slate-500 text-xs mt-1">Manage global visibility and visual style of the TechSafi stack.</p>
          </div>
          <Button onClick={() => setTechStack([...techStack, { id: Math.random().toString(36).substr(2, 9), name: 'New Tech', iconName: 'Atom', color: 'text-cyan-400', category: 'Frontend', isVisible: true, displayOrder: techStack.length + 1 }])} size="sm" className="rounded-xl">Add Tool</Button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Frontend', 'Backend', 'Mobile', 'AI', 'Cloud', 'Database'].map(layer => (
             <div key={layer} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {layer}
                </h3>
                <div className="space-y-4">
                   {techStack.filter(t => t.category === layer).sort((a,b) => a.displayOrder - b.displayOrder).map(tech => (
                      <div key={tech.id} className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group">
                         <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                               <Terminal size={14} className="text-slate-400" />
                               <input value={tech.name} onChange={e => setTechStack(techStack.map(t => t.id === tech.id ? {...t, name: e.target.value} : t))} className="bg-transparent text-sm dark:text-white font-bold outline-none" placeholder="Tool Name" />
                            </div>
                            <div className="flex items-center gap-2">
                               <button onClick={() => setTechStack(techStack.map(t => t.id === tech.id ? {...t, isVisible: !t.isVisible} : t))} className={`p-1.5 rounded-lg transition-colors ${tech.isVisible ? 'text-emerald-500 bg-emerald-500/10' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10'}`}><Eye size={14} /></button>
                               <button onClick={() => setTechStack(techStack.filter(t => t.id !== tech.id))} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 size={14} /></button>
                            </div>
                         </div>
                         <div className="grid grid-cols-2 gap-3 mt-2 pt-3 border-t border-slate-200/50 dark:border-white/5">
                            <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-400 uppercase">Icon</label>
                                <input value={tech.iconName} onChange={e => setTechStack(techStack.map(t => t.id === tech.id ? {...t, iconName: e.target.value} : t))} className="w-full bg-white dark:bg-black/20 text-[10px] font-mono px-2 py-1 rounded outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-400 uppercase">Style / Color</label>
                                <input value={tech.color} onChange={e => setTechStack(techStack.map(t => t.id === tech.id ? {...t, color: e.target.value} : t))} className="w-full bg-white dark:bg-black/20 text-[10px] font-mono px-2 py-1 rounded outline-none" placeholder="text-blue-500" />
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Services Matrix</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Command centre for core business offerings and tech stacks.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="ghost" className="rounded-xl border border-slate-200 dark:border-white/10 px-6">Preview Site</Button>
           <Button onClick={handleSaveAll} className="rounded-xl px-8 bg-primary text-white font-bold shadow-lg shadow-primary/20">
              {loading ? 'Processing...' : 'Synchronize All Data'}
           </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-white/5 overflow-x-auto scrollbar-hide">
         {[
           { id: 'list', label: 'Services', icon: Layers },
           { id: 'categories', label: 'Categories', icon: Layout },
           { id: 'methodology', label: 'Execution', icon: Rocket },
           { id: 'tech', label: 'Tech Stack', icon: Cpu }
         ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => { setActiveTab(tab.id as any); setIsEditing(null); }}
             className={`px-8 py-4 text-sm font-bold flex items-center gap-2 relative whitespace-nowrap transition-all ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
           >
             <tab.icon size={18} /> {tab.label}
             {activeTab === tab.id && <motion.div layoutId="services-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
         {loading ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-32 gap-6">
               <Cpu className="text-primary animate-spin" size={48} />
               <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Data Matrix...</p>
            </motion.div>
         ) : (
            <motion.div key={activeTab + (isEditing ? '-edit' : '')} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
               {isEditing ? renderEditForm() : (
                  <>
                     {activeTab === 'list' && renderServicesList()}
                     {activeTab === 'categories' && renderCategories()}
                     {activeTab === 'methodology' && renderMethodology()}
                     {activeTab === 'tech' && renderTechStack()}
                  </>
               )}
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};
