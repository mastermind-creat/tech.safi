import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Cpu, Zap, Activity, ShieldCheck, ArrowUpRight, MoreVertical, RefreshCw, Search, FileText, Image as ImageIcon } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { fetchSystemStats, fetchActivityLogs, SystemStats, ActivityLog } from '../services/api';

export const Overview: React.FC = () => {
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [s, l] = await Promise.all([fetchSystemStats(), fetchActivityLogs()]);
        setStats(s);
        setLogs(l);
      } catch (error) {
        console.error("Dashboard Load Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <RefreshCw className="text-primary animate-spin" size={32} />
      <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Hydrating Control Centre...</span>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* --- HERO HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">System Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Welcome back, Kennedy. Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
            <Zap size={14} /> Clear Cache
          </button>
          <button className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold dark:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
            Export Report
          </button>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard label="Total Visitors" value={stats?.visitors.toLocaleString() || 0} change={stats?.visitorsChange || 0} icon={Globe} color="blue" />
        <StatsCard label="Active Now" value={stats?.activeUsers || 0} change={5} icon={Users} color="emerald" />
        <StatsCard label="Server Load" value={`${stats?.serverLoad}%`} change={-8} icon={Cpu} color="purple" />
        <StatsCard label="System Uptime" value={stats?.uptime || '0%'} change={0.01} icon={ShieldCheck} color="orange" />
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Activity Logs */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
            <h3 className="font-bold dark:text-white flex items-center gap-2"><Activity size={18} className="text-primary" /> Recent Activity</h3>
            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white"><MoreVertical size={18} /></button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {logs.map((log) => (
              <div key={log.id} className="p-4 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    log.status === 'success' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
                    log.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <div className="text-sm font-bold dark:text-white">{log.action}</div>
                    <div className="text-[10px] text-slate-500">{log.user} • {log.timestamp}</div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-primary flex items-center gap-1 transition-opacity">
                  DETAILS <ArrowUpRight size={12} />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-xs font-bold text-slate-500 hover:text-primary transition-colors border-t border-slate-100 dark:divide-white/5 uppercase tracking-widest">
            View All Logs
          </button>
        </div>

        {/* Quick Actions Panel */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <h3 className="font-bold dark:text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'New Post', icon: FileText, color: 'text-blue-500 bg-blue-500/10' },
                { label: 'Upload Media', icon: ImageIcon, color: 'text-purple-500 bg-purple-500/10' },
                { label: 'View Site', icon: Globe, color: 'text-emerald-500 bg-emerald-500/10' },
                { label: 'Manage SEO', icon: Search, color: 'text-orange-500 bg-orange-500/10' },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:border-primary transition-all gap-2 group">
                  <div className={`p-2 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon size={18} />
                  </div>
                  <span className="text-[10px] font-bold dark:text-slate-300 uppercase tracking-wider">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 p-6 rounded-2xl border border-primary/20 dark:border-white/5 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform"><Cpu size={100} /></div>
            <h3 className="font-bold dark:text-white text-sm mb-2 flex items-center gap-2"><ShieldCheck size={16} /> Security Status</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-4">All systems operational. Last security audit 2h ago.</p>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 w-[94%]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
