
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Globe, Zap, Users, ArrowUpRight, 
  ArrowDownRight, RefreshCw, Filter, Download,
  Activity, MousePointer2, Clock, Brain, Target,
  ShieldCheck, AlertCircle, Share2, Info, Maximize2,
  Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { 
  fetchGeoData, fetchFunnelData, fetchAiAnalytics, 
  fetchTrafficData, GeoDataPoint, FunnelStep, 
  AiPerformanceStats, ChartDataPoint 
} from '../services/api';

// --- CUSTOM ANALYTICS COMPONENTS ---

const GeoHeatmap = ({ data }: { data: GeoDataPoint[] }) => {
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={i} className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="font-bold dark:text-white">{item.country}</span>
            <span className="text-slate-400 font-mono">{item.percentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: `${item.percentage}%` }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="h-full bg-primary"
             />
          </div>
        </div>
      ))}
    </div>
  );
};

const ConversionFunnel = ({ data }: { data: FunnelStep[] }) => {
  return (
    <div className="space-y-4 py-4">
      {data.map((step, i) => (
        <div key={i} className="relative">
           <div className="flex items-center gap-4 relative z-10">
              <div className="w-24 text-[10px] font-black uppercase text-slate-400 text-right">{step.label}</div>
              <div className="flex-1 h-10 bg-slate-50 dark:bg-white/5 rounded-lg border border-transparent hover:border-primary/30 transition-all flex items-center px-4">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${step.conversion}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                 />
                 <span className="ml-auto text-xs font-bold dark:text-white">{step.value.toLocaleString()}</span>
              </div>
           </div>
           {i < data.length - 1 && (
             <div className="ml-[116px] h-4 border-l border-dashed border-slate-200 dark:border-white/10" />
           )}
        </div>
      ))}
    </div>
  );
};

const AiHealthShield = ({ stats }: { stats: AiPerformanceStats }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
       {[
         { label: 'Accuracy', val: stats.accuracy + '%', icon: Brain, color: 'blue' },
         { label: 'Latency', val: stats.latency + 's', icon: Zap, color: 'purple' },
         { label: 'Satisfaction', val: stats.satisfaction + '%', icon: Target, color: 'emerald' },
         { label: 'Tokens', val: (stats.tokenUsage / 1000).toFixed(1) + 'k', icon: Activity, color: 'pink' }
       ].map((s, i) => (
         <div key={i} className="bg-slate-50 dark:bg-white/2 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-2 mb-2">
               <s.icon size={14} className={`text-${s.color}-500`} />
               <span className="text-[8px] font-black uppercase text-slate-400">{s.label}</span>
            </div>
            <div className="text-xl font-black dark:text-white">{s.val}</div>
         </div>
       ))}
    </div>
  );
};

export const LiveAnalytics: React.FC = () => {
  const [geoData, setGeoData] = useState<GeoDataPoint[]>([]);
  const [funnelData, setFunnelData] = useState<FunnelStep[]>([]);
  const [aiStats, setAiStats] = useState<AiPerformanceStats | null>(null);
  const [traffic, setTraffic] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadAllData = async () => {
    setRefreshing(true);
    const [geo, funnel, ai, tr] = await Promise.all([
      fetchGeoData(),
      fetchFunnelData(),
      fetchAiAnalytics(),
      fetchTrafficData()
    ]);
    setGeoData(geo);
    setFunnelData(funnel);
    setAiStats(ai);
    setTraffic(tr);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadAllData();
    const interval = setInterval(loadAllData, 30000); // Live refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <RefreshCw className="text-primary animate-spin" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Indexing Live Telemetry...</p>
    </div>
  );

  const MotionDiv = motion.div as any;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
             Telemetry Core
             <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest animate-pulse">Live Stream</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Real-time user behavior monitoring and intelligence performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={loadAllData} variant="ghost" className="rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-2">
             <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} /> Refresh Buffer
          </Button>
          <Button className="bg-primary text-white font-bold rounded-xl shadow-lg">
             <Download size={16} className="mr-2" /> Export Global Report
          </Button>
        </div>
      </div>

      {/* --- REAL-TIME PULSE HUD --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Active Sessions', val: '219', change: '+12%', icon: Users, color: 'blue' },
           { label: 'Avg. Load Time', val: '1.4s', change: '-0.3s', icon: Zap, color: 'emerald' },
           { label: 'Error Rate', val: '0.02%', change: 'Optimal', icon: ShieldCheck, color: 'purple' },
           { label: 'Exit Rate', val: '24%', change: '+2%', icon: ArrowUpRight, color: 'pink' }
         ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm relative overflow-hidden group">
               <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon size={64} className={`text-${stat.color}-500`} />
               </div>
               <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">{stat.label}</div>
               <div className="flex items-end justify-between">
                  <div className="text-3xl font-black dark:text-white">{stat.val}</div>
                  <div className={`text-[10px] font-bold ${stat.change.includes('-') || stat.change === 'Optimal' ? 'text-emerald-500' : 'text-primary'}`}>
                     {stat.change}
                  </div>
               </div>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* 1. GEOGRAPHIC CONCENTRATION */}
         <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                  <Globe size={18} className="text-primary" /> Traffic Origins
               </h3>
               <button className="text-slate-400 hover:text-white"><Maximize2 size={16} /></button>
            </div>
            <div className="flex-1 flex flex-col justify-center">
               <GeoHeatmap data={geoData} />
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
               <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Top Node: Nairobi</span>
                  <span className="text-emerald-500">Peak Activity</span>
               </div>
               <div className="flex gap-1">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="flex-1 h-3 bg-slate-100 dark:bg-white/5 rounded-sm overflow-hidden">
                       <div className="h-full bg-primary/40" style={{ height: `${Math.random() * 100}%` }} />
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* 2. CONVERSION FUNNEL */}
         <div className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                     <Target size={18} className="text-primary" /> Acquisition Funnel
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Lifecycle transition rates from landing to lead.</p>
               </div>
               <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase text-slate-500">Weekly</button>
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-[10px] font-bold uppercase text-white shadow-lg">Monthly</button>
               </div>
            </div>
            <ConversionFunnel data={funnelData} />
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* 3. AI PERFORMANCE ENGINE (ADDON) */}
         <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Brain size={240} className="text-primary" />
            </div>
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Intelligence Matrix</h3>
                    <p className="text-indigo-200 text-sm">Real-time monitoring of TechSafi's AI nodes.</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                     {/* Fix: Added missing Sparkles import from lucide-react */}
                     <Sparkles size={24} className="text-primary" />
                  </div>
               </div>
               
               {aiStats && <AiHealthShield stats={aiStats} />}
               
               <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-black uppercase text-indigo-300">Neural Network Load</span>
                     <span className="text-xs font-mono">68.2 Gflops</span>
                  </div>
                  <div className="h-12 flex items-end gap-1.5">
                     {[...Array(30)].map((_, i) => (
                        <motion.div 
                           key={i} 
                           initial={{ height: 0 }}
                           animate={{ height: `${Math.random() * 100}%` }}
                           transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                           className="flex-1 bg-primary/40 rounded-full"
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* 4. REAL-TIME EVENT STREAM */}
         <div className="bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col shadow-sm">
            <div className="p-8 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
               <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                  <Activity size={18} className="text-primary" /> Live Event Stream
               </h3>
               <span className="text-[9px] font-black uppercase bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded tracking-tighter">Socket Active</span>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[440px] p-6 space-y-4 font-mono scrollbar-hide">
               {[
                 { time: '14:20:11', event: 'New Lead: John D. (Web Inquiry)', color: 'text-primary' },
                 { time: '14:19:45', event: 'Bot Session Initiated: Anonymous-842', color: 'text-slate-400' },
                 { time: '14:18:20', event: 'Cache Purged: Global CSS Bundle', color: 'text-amber-500' },
                 { time: '14:15:02', event: 'Security: Blocked XSS Attempt (IP: 45.x)', color: 'text-red-500' },
                 { time: '14:12:33', event: 'System: Scaling Cluster 2-A -> 2-B', color: 'text-emerald-500' },
                 { time: '14:10:00', event: 'Newsletter: +1 New Subscriber', color: 'text-primary' },
                 { time: '14:08:45', event: 'Chat: User rated response 5/5', color: 'text-emerald-500' }
               ].map((ev, i) => (
                 <div key={i} className="flex gap-4 text-[10px] animate-in fade-in slide-in-from-left-2">
                    <span className="text-slate-400 opacity-50 shrink-0">{ev.time}</span>
                    <span className={ev.color}>{ev.event}</span>
                 </div>
               ))}
            </div>
            <button className="w-full py-4 text-[10px] font-black text-slate-400 hover:text-primary transition-colors border-t border-slate-100 dark:border-white/5 uppercase tracking-widest">
               Open Debug Terminal
            </button>
         </div>
      </div>
    </div>
  );
};
