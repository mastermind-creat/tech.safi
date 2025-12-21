
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Globe, Shield, Zap, Lock, 
  Terminal, Database, Save, RefreshCw,
  Bell, Mail, Eye, EyeOff, LayoutTemplate,
  Sliders, Smartphone, Palette, Info, CheckCircle2
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const GlobalSettings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSync = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSaving(false);
    alert('System settings synchronized site-wide.');
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Settings className="text-primary animate-spin-slow" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Synchronizing Global Settings...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Global Infrastructure</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure site-wide metadata, API gateways, and core system toggles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSync} disabled={isSaving} className="bg-primary text-white font-bold rounded-xl shadow-lg">
             {isSaving ? 'Synchronizing...' : <><Save size={16} className="mr-2" /> Sync Infrastructure</>}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {/* Meta & Identity */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Globe size={18} className="text-primary" /> Core Site Identity</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Site Title</label>
                     <input defaultValue="TechSafi - Innovation Elevated" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Admin Email Notifications</label>
                     <input defaultValue="alerts@techsafi.com" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Site Description (SEO Default)</label>
                  <textarea rows={3} defaultValue="A futuristic, AI-driven tech company website offering custom software and digital solutions." className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary" />
               </div>
            </div>

            {/* API Gateways */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm space-y-6">
               <h3 className="text-lg font-bold dark:text-white flex items-center gap-2"><Zap size={18} className="text-purple-500" /> Intelligence Gateways</h3>
               <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-black text-xs">G</div>
                           <span className="text-sm font-bold dark:text-white">Google Gemini API (Model: gemini-3-pro-preview)</span>
                        </div>
                        <button onClick={() => setShowApiKey(!showApiKey)} className="text-slate-400 hover:text-primary">{showApiKey ? <EyeOff size={16}/> : <Eye size={16}/>}</button>
                     </div>
                     <div className="relative">
                        <input readOnly type={showApiKey ? 'text' : 'password'} value="sk-neural-matrix-xxxxxxxxxxxxxxxxxxxx" className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-[10px] font-mono text-primary outline-none" />
                     </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-xs">S</div>
                        <span className="text-sm font-bold dark:text-white">Stripe Checkout / Payments Gateway</span>
                     </div>
                     <input readOnly type="password" value="live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-[10px] font-mono text-emerald-500 outline-none" />
                  </div>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            {/* Maintenance Mode */}
            <div className={`rounded-3xl p-8 border transition-all duration-500 shadow-xl ${maintenanceMode ? 'bg-amber-500 border-amber-600 text-white' : 'bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/5'}`}>
               <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${maintenanceMode ? 'text-white' : 'dark:text-white'}`}><Shield size={18} /> System Lockdown</h3>
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <div className="font-bold text-sm">Maintenance Mode</div>
                        <p className={`text-[10px] font-medium ${maintenanceMode ? 'text-amber-100' : 'text-slate-500'}`}>Public site restricted to splash page.</p>
                     </div>
                     <button onClick={() => setMaintenanceMode(!maintenanceMode)} className={`w-12 h-6 rounded-full relative transition-all shadow-inner ${maintenanceMode ? 'bg-white/30' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${maintenanceMode ? 'left-7 shadow-lg' : 'left-1 shadow-sm'}`} />
                     </button>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <div className="font-bold text-sm">Strict Security (SSL)</div>
                        <p className={`text-[10px] font-medium ${maintenanceMode ? 'text-amber-100' : 'text-slate-500'}`}>Enforce HTTPS everywhere.</p>
                     </div>
                     <div className="w-12 h-6 rounded-full bg-emerald-500 relative shadow-inner">
                        <div className="absolute top-1 left-7 w-4 h-4 rounded-full bg-white shadow-lg" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-3xl p-8 space-y-4">
               <div className="flex gap-3 text-primary">
                  <Info size={24} className="shrink-0" />
                  <p className="text-xs font-medium leading-relaxed">
                    Infrastructure changes require a site-wide synchronization. Deployed settings will affect the public application immediately after synchronization.
                  </p>
               </div>
               <ul className="space-y-2">
                  {[
                    "Global cache invalidation",
                    "Asset re-indexing",
                    "Security protocol verification"
                  ].map((it, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                       <CheckCircle2 size={12} /> {it}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
};
