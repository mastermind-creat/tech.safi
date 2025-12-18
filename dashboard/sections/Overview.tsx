
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Add CheckCircle2 and Terminal to the imports from lucide-react
import { 
  Users, Globe, Cpu, Zap, Activity, ShieldCheck, 
  ArrowUpRight, MoreVertical, RefreshCw, Search, 
  FileText, Image as ImageIcon, TrendingUp, 
  Database, Server, Gauge, MousePointer2,
  CheckCircle2, Terminal
} from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { 
  fetchSystemStats, fetchActivityLogs, fetchTrafficData, 
  fetchServiceEngagement, SystemStats, ActivityLog, ChartDataPoint 
} from '../services/api';

// --- CUSTOM CHART COMPONENTS ---

const TrafficLineChart = ({ data }: { data: ChartDataPoint[] }) => {
  const max = Math.max(...data.map(d => d.value));
  const height = 140;
  const width = 400;
  const padding = 20;
  
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * (width - padding * 2) + padding,
    y: height - ((d.value / max) * (height - padding * 2)) - padding
  }));

  const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const areaData = `${pathData} L ${points[points.length-1].x},${height} L ${points[0].x},${height} Z`;

  return (
    <div className="relative w-full h-[180px] mt-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0" x1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        {[0, 0.5, 1].map((p, i) => (
          <line 
            key={i} 
            x1={padding} y1={height * p || padding} 
            x2={width - padding} y2={height * p || padding} 
            stroke="currentColor" 
            className="text-slate-100 dark:text-white/5" 
            strokeWidth="1" 
          />
        ))}

        {/* Area Fill */}
        <motion.path 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          d={areaData} 
          fill="url(#lineGradient)" 
        />
        
        {/* Line */}
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={pathData} 
          fill="none" 
          stroke="#06b6d4" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Data Points */}
        {points.map((p, i) => (
          <motion.circle 
            key={i} 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            cx={p.x} cy={p.y} r="4" 
            fill="white" 
            stroke="#06b6d4" 
            strokeWidth="2" 
            className="drop-shadow-md"
          />
        ))}
      </svg>
      <div className="flex justify-between mt-2 px-2">
        {data.map((d, i) => (
          <span key={i} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{d.label}</span>
        ))}
      </div>
    </div>
  );
};

const ServiceDonutChart = ({ data }: { data: ChartDataPoint[] }) => {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  let cumulativePercent = 0;
  const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'];

  return (
    <div className="flex items-center gap-8 py-4">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
          {data.map((d, i) => {
            const percent = d.value / total;
            const strokeDasharray = `${percent * 100} ${100 - (percent * 100)}`;
            const strokeDashoffset = -cumulativePercent * 100;
            cumulativePercent += percent;

            return (
              <motion.circle
                key={i}
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray }}
                transition={{ duration: 1, delay: i * 0.2 }}
                cx="16" cy="16" r="12"
                fill="transparent"
                stroke={colors[i % colors.length]}
                strokeWidth="6"
                strokeDashoffset={strokeDashoffset}
                className="transition-all"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold dark:text-white">76%</span>
          <span className="text-[8px] uppercase font-bold text-slate-400">Target</span>
        </div>
      </div>
      <div className="flex-1 space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i % colors.length] }} />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{d.label}</span>
            </div>
            <span className="text-xs font-bold dark:text-white">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Overview: React.FC = () => {
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [traffic, setTraffic] = useState<ChartDataPoint[]>([]);
  const [engagement, setEngagement] = useState<ChartDataPoint[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [s, l, t, e] = await Promise.all([
          fetchSystemStats(), 
          fetchActivityLogs(),
          fetchTrafficData(),
          fetchServiceEngagement()
        ]);
        setStats(s);
        setLogs(l);
        setTraffic(t);
        setEngagement(e);
      } catch (error) {
        console.error("Dashboard Load Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <div className="relative">
        <RefreshCw className="text-primary animate-spin" size={48} />
        <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold dark:text-white">Establishing Secure Tunnel...</h3>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Hydrating command interface</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* --- COMMAND HUD HEADER --- */}
      <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Gauge size={180} className="text-primary" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="relative">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                  <Activity size={32} className="animate-pulse" />
               </div>
               <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-[#0f172a] animate-ping"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold dark:text-white tracking-tight">TechSafi Command</h1>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-tighter border border-emerald-500/20">Live</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center gap-2">
                <Database size={14} /> Main Cluster Optimized <span className="opacity-30">|</span> <Server size={14} /> Latency: {stats?.latency}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:border-l border-slate-100 dark:border-white/5 lg:pl-10">
             <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Uptime</div>
                <div className="text-xl font-bold dark:text-white flex items-center gap-2">
                   {stats?.uptime} <ShieldCheck size={16} className="text-emerald-500" />
                </div>
             </div>
             <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Leads</div>
                <div className="text-xl font-bold dark:text-white flex items-center gap-2">
                   14 <TrendingUp size={16} className="text-primary" />
                </div>
             </div>
             <div className="hidden sm:block">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pending Deploy</div>
                <div className="text-xl font-bold dark:text-white">03</div>
             </div>
          </div>
        </div>
      </div>

      {/* --- SMART CHARTS GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Traffic Trajectory Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                <MousePointer2 size={18} className="text-primary" /> Traffic Trajectory
              </h3>
              <p className="text-xs text-slate-500 mt-1">Website engagement over the last 7 cycles</p>
            </div>
            <select className="bg-slate-50 dark:bg-white/5 border-0 text-xs font-bold dark:text-slate-300 rounded-lg px-3 py-2 outline-none cursor-pointer">
               <option>Last 7 Days</option>
               <option>Last 30 Days</option>
            </select>
          </div>
          <TrafficLineChart data={traffic} />
        </div>

        {/* Engagement Distribution */}
        <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
          <h3 className="text-lg font-bold dark:text-white mb-2">Engagement</h3>
          <p className="text-xs text-slate-500 mb-8">Distribution by service interest</p>
          <ServiceDonutChart data={engagement} />
          
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Project Velocity</span>
                <span className="text-xs font-bold text-emerald-500">+18%</span>
             </div>
             <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-primary" 
                />
             </div>
          </div>
        </div>

      </div>

      {/* --- SECONDARY METRICS & LOGS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
            <h3 className="font-bold dark:text-white flex items-center gap-2"><Activity size={18} className="text-primary" /> Command Logs</h3>
            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all"><MoreVertical size={18} /></button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {logs.map((log) => (
              <div key={log.id} className="p-5 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                    log.status === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
                    log.status === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {log.status === 'success' ? <CheckCircle2 size={18} /> : log.status === 'warning' ? <Zap size={18} /> : <AlertCircle size={18} />}
                  </div>
                  <div>
                    <div className="text-sm font-bold dark:text-white">{log.action}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{log.user} • <span className="opacity-70">{log.timestamp}</span></div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 px-3 py-1.5 rounded-lg text-[10px] font-black text-primary bg-primary/10 flex items-center gap-1 transition-all hover:bg-primary hover:text-white">
                  INSPECT <ArrowUpRight size={12} />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-[10px] font-black text-slate-400 hover:text-primary transition-colors border-t border-slate-100 dark:border-white/5 uppercase tracking-[0.2em]">
            Access Deep Logs
          </button>
        </div>

        {/* System Health Infographic */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
               <ShieldCheck size={200} />
            </div>
            <div className="relative z-10">
               <h3 className="text-lg font-bold mb-6">Security Integrity</h3>
               <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-black">99.4</span>
                  <span className="text-xs font-bold opacity-60 mb-2">SCORE</span>
               </div>
               <div className="space-y-4">
                  {[
                    { label: 'SSL Encrypt', status: 'Active' },
                    { label: 'Firewall', status: 'Optimal' },
                    { label: 'DDoS Protect', status: 'Standby' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-bold border-b border-white/10 pb-2">
                       <span className="opacity-70">{s.label}</span>
                       <span className="text-emerald-300">{s.status}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
            <h3 className="text-sm font-bold dark:text-white mb-6 uppercase tracking-widest text-slate-400">Quick Portal</h3>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Terminal', icon: Terminal, color: 'blue' },
                 { label: 'SEO Audit', icon: Search, color: 'purple' },
                 { label: 'Media', icon: ImageIcon, color: 'pink' },
                 { label: 'Backup', icon: Database, color: 'emerald' }
               ].map((item, i) => (
                 <button key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all group">
                    <item.icon size={20} className={`text-${item.color}-500 group-hover:scale-110 transition-transform`} />
                    <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">{item.label}</span>
                 </button>
               ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AlertCircle = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
