
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, Edit3, Eye, Trash2, Globe, Layout, ChevronRight, CheckCircle2 } from 'lucide-react';
import { fetchPages } from '../services/api';

export const PagesManager: React.FC = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPages();
      setPages(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Pages Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage all structural pages of TechSafi.com</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
          <Plus size={18} /> Add New Page
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search pages by name or path..." 
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm dark:text-white"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-300 flex items-center gap-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
            <Filter size={16} /> Filters
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-300 flex items-center gap-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
             Sort
          </button>
        </div>
      </div>

      {/* Pages List */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-6 py-4">Page Name</th>
                <th className="px-6 py-4">Path</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Edited</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {pages.map((page) => (
                <tr key={page.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <Layout size={20} />
                      </div>
                      <span className="font-bold text-sm dark:text-white">{page.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-xs bg-slate-100 dark:bg-white/5 px-2 py-1 rounded text-primary">{page.path}</code>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                      page.status === 'Published' 
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' 
                        : 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs text-slate-500 dark:text-slate-400">
                    {page.lastEdited}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button title="Edit Content" className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"><Edit3 size={16} /></button>
                      <button title="Preview Page" className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-all"><Eye size={16} /></button>
                      <button title="Delete Page" className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5">
        <span className="text-xs text-slate-500">Showing 1 to 4 of 4 entries</span>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-400 disabled:opacity-50" disabled><ChevronRight size={16} className="rotate-180" /></button>
          <button className="px-3 py-1 rounded-lg bg-primary text-white text-xs font-bold">1</button>
          <button className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-400 disabled:opacity-50" disabled><ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};
