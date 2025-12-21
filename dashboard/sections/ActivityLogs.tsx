
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  History, Search, Filter, Download, ArrowUpRight, 
  Terminal, ShieldCheck, Zap, AlertCircle, RefreshCw,
  MoreVertical, Clock, User, Globe
} from 'lucide-react';
import { fetchActivityLogs, ActivityLog } from '../services/api';

export const ActivityLogs: React.FC = () => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchActivityLogs();
      setLogs(data);
      setLoading(false);
    };
    load();
  }, []);

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'success': return 'text-emerald-500 bg-emerald-500/10';
      case 'warning': return 'text-amber-500 bg-amber-500/10';
      case 'error': case 'danger': return 'text-red-500 bg-red-500/10';
      default: return 'text-slate-500 bg-slate-500/10';
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <RefreshCw className="text-primary animate-spin" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Audit Trail...</p>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">System Audit Logs</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Traceable trail of every executive action within the Control Centre.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all dark:text-white">
          <Download size={14} /> Export Logs (.CSV)
        </button>
      </div>

      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
         <div className="p-6 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative w-full">
               <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
               <input type="text" placeholder="Search by user or action..." className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm outline-none" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
               <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-lg">
                  {['All', 'Success', 'Warning', 'Danger'].map(t => (
                    <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 text-[10px] font-black uppercase rounded ${filter === t ? 'bg-white dark:bg-[#1e293b] text-primary shadow-sm' : 'text-slate-500'}`}>{t}</button>
                  ))}
               </div>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <tr>
                     <th className="px-6 py-4">Timestamp</th>
                     <th className="px-6 py-4">Operator</th>
                     <th className="px-6 py-4">Action Type</th>
                     <th className="px-6 py-4">Network Node (IP)</th>
                     <th className="px-6 py-4">Status</th>
                     <th className="px-6 py-4 text-right">Insight</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {logs.map(log => (
                    <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                       <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                             <Clock size={12} /> {new Date(log.timestamp).toLocaleString()}
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">{log.user.charAt(0)}</div>
                             <span className="text-sm font-bold dark:text-white">{log.user}</span>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <span className="text-xs font-medium dark:text-slate-300">{log.action}</span>
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                             <Globe size={10} /> {log.ip || '0.0.0.0'}
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${getStatusStyle(log.status)}`}>
                             {log.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors"><ArrowUpRight size={16}/></button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <p className="text-xs text-slate-500">Showing last 24 hours of protocol execution</p>
            <div className="flex gap-2">
               <button className="p-2 border border-slate-200 dark:border-white/10 rounded-lg text-slate-400 disabled:opacity-30" disabled>Prev</button>
               <button className="p-2 border border-slate-200 dark:border-white/10 rounded-lg text-slate-400">Next</button>
            </div>
         </div>
      </div>
    </div>
  );
};
