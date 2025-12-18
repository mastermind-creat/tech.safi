
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  change: number;
  color: 'blue' | 'purple' | 'emerald' | 'orange';
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon, change, color }) => {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    purple: 'text-purple-600 bg-purple-500/10 border-purple-500/20',
    emerald: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    orange: 'text-orange-600 bg-orange-500/10 border-orange-500/20',
  };

  return (
    <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
          {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{label}</h4>
        <div className="text-2xl font-bold dark:text-white tracking-tight">{value}</div>
      </div>
    </div>
  );
};
