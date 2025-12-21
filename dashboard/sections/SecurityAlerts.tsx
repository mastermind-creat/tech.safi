
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, ShieldCheck, Shield, AlertTriangle, Zap,
  Globe, Clock, Trash2, MoreVertical, Info, 
  Terminal, Lock, Search, RefreshCw, BarChart
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchSecurityAlerts, SecurityThreat } from '../services/api';

export const SecurityAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<SecurityThreat[]>([]);
  const [loading, setLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchSecurityAlerts();
      setAlerts(data);
      setLoading(false);
    };
    load();
  }, []);

  const runVulnerabilityScan = async () => {
    setIsScanning(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsScanning(false);
    alert('Security scan complete. 0 vulnerabilities found.');
  };

  const getSeverityStyle = (s: string) => {
    switch(s) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-amber-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const MotionDiv = motion.div as any;

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Shield className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Securing Matrix Connection...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Sentinel Core
             <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[10px] font-black uppercase">Firewall Active</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Real-time threat detection and security integrity dashboard.</p>
        </div>
        <Button onClick={runVulnerabilityScan} disabled={isScanning} className="rounded-xl bg-primary text-white font-bold flex items-center gap-2">
           {isScanning ? <RefreshCw size={18} className="animate-spin" /> : <ShieldCheck size={18} />}
           Deep Integrity Scan
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
               <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <h3 className="font-bold dark:text-white flex items-center gap-2"><ShieldAlert size={18} className="text-red-500" /> Active Threat Feed</h3>
                  <div className="flex gap-2">
                     <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[9px] font-black uppercase">3 Detected</span>
                     <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase">219,304 Blocked</span>
                  </div>
               </div>
               <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {alerts.map(alert => (
                    <div key={alert.id} className="p-6 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${alert.severity === 'Critical' ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'}`}>
                          <Zap size={20} />
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                             <h4 className="font-bold text-sm dark:text-white">{alert.type}</h4>
                             <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${getSeverityStyle(alert.severity)}`}>{alert.severity}</span>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">Originating Node: <span className="text-slate-700 dark:text-slate-300 font-mono">{alert.origin}</span></p>
                          <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold">
                             <span className="flex items-center gap-1"><Clock size={10} /> {new Date(alert.timestamp).toLocaleTimeString()}</span>
                             <span className={`flex items-center gap-1 ${alert.status === 'Blocked' ? 'text-emerald-500' : 'text-primary'}`}><ShieldCheck size={10}/> {alert.status}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-500 hover:text-primary"><Info size={14}/></button>
                          <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-500 hover:text-red-500"><Trash2 size={14}/></button>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 text-[10px] font-black text-slate-400 hover:text-primary transition-colors border-t border-slate-100 dark:border-white/5 uppercase tracking-widest">
                  View Full Threat History
               </button>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <ShieldCheck size={160} className="text-emerald-500" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Lock size={18} className="text-emerald-400" /> SSL Status</h3>
                  <div className="space-y-6">
                     <div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Integrity Score</div>
                        <div className="flex items-end gap-2">
                           <span className="text-4xl font-black">99.8</span>
                           <span className="text-xs font-bold text-emerald-400 mb-1 flex items-center"><Zap size={10}/> Optimal</span>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                           <span className="opacity-50">Certificate</span>
                           <span className="text-emerald-400">Valid</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                           <span className="opacity-50">Key Strength</span>
                           <span className="text-emerald-400">RSA 4096</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                           <span className="opacity-50">Encrypted Nodes</span>
                           <span className="text-emerald-400">14/14</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
               <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><BarChart size={16}/> Protocol Stats</h3>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-500">API Throttling</span>
                        <span className="dark:text-white">Active</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[30%]" />
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-500">Load Balance</span>
                        <span className="dark:text-white">Normal</span>
                     </div>
                     <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[65%]" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
