
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Save, X, Image as ImageIcon, 
  ExternalLink, Hash, LayoutGrid, List, Briefcase,
  Layers, Star, Zap, Users, Search, Target, Code2,
  Calendar, Building2, GripVertical, PlusCircle, MinusCircle, 
  MoreHorizontal, Eye, Globe, CheckCircle2
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchProjects, saveProjectsData, ProjectItem } from '../services/api';

export const PortfolioAdmin: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState<Partial<ProjectItem> | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSaveAll = async () => {
    setLoading(true);
    await saveProjectsData(projects);
    setLoading(false);
    setIsEditing(null);
    alert("Portfolio synchronized successfully.");
  };

  const addProject = () => {
    const newProject: ProjectItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Project',
      category: 'E-Commerce',
      type: 'Web App',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Project description goes here.',
      technologies: ['React', 'Tailwind'],
      client: 'Client Name',
      year: '2025',
      stats: { label: "Performance", value: "100%", iconName: "Zap" },
      color: "blue",
      iconName: "Globe",
      status: 'Draft',
      displayOrder: projects.length + 1
    };
    setProjects([...projects, newProject]);
    setCurrentProject(newProject);
    setIsEditing(newProject.id);
  };

  const removeProject = (id: string) => {
    if (window.confirm("Permanent removal of this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const applyChanges = () => {
    if (currentProject && currentProject.id) {
      setProjects(projects.map(p => p.id === currentProject.id ? { ...p, ...currentProject } as ProjectItem : p));
      setIsEditing(null);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <Briefcase className="text-primary animate-pulse" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Project Vault...</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Portfolio Manager</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Curate and showcase TechSafi's most impactful projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 dark:bg-white/5 rounded-xl p-1 mr-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-white/10 text-primary shadow-sm' : 'text-slate-500'}`}><LayoutGrid size={18} /></button>
            <button onClick={() => setViewMode('table')} className={`p-2 rounded-lg transition-all ${viewMode === 'table' ? 'bg-white dark:bg-white/10 text-primary shadow-sm' : 'text-slate-500'}`}><List size={18} /></button>
          </div>
          <Button onClick={addProject} className="rounded-xl flex items-center gap-2">
            <Plus size={18} /> Add Project
          </Button>
          <Button onClick={handleSaveAll} className="rounded-xl bg-primary text-white font-bold">
            Sync All
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div key="edit" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsEditing(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400"><X size={20} /></button>
                <h2 className="text-xl font-bold dark:text-white">Editing: {currentProject?.title}</h2>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setIsEditing(null)} className="rounded-xl">Cancel</Button>
                {/* Added fix: CheckCircle2 icon is now correctly imported from lucide-react */}
                <Button onClick={applyChanges} className="rounded-xl flex items-center gap-2"><CheckCircle2 size={18} /> Apply Changes</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Settings */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 space-y-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Title</label>
                      <input value={currentProject?.title} onChange={e => setCurrentProject({...currentProject, title: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold dark:text-white outline-none focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Thumbnail Image URL</label>
                      <input value={currentProject?.image} onChange={e => setCurrentProject({...currentProject, image: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-primary outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Deep Description</label>
                    <textarea rows={6} value={currentProject?.description} onChange={e => setCurrentProject({...currentProject, description: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" />
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Technology Stack</label>
                    <button onClick={() => setCurrentProject({...currentProject, technologies: [...(currentProject?.technologies || []), 'New Tech']})} className="text-primary hover:underline text-[10px] font-bold flex items-center gap-1"><PlusCircle size={14} /> Add Tech</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {currentProject?.technologies?.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full group">
                        <input value={tech} onChange={e => {
                          const updated = [...(currentProject?.technologies || [])];
                          updated[i] = e.target.value;
                          setCurrentProject({...currentProject, technologies: updated});
                        }} className="bg-transparent text-xs font-bold dark:text-white outline-none w-24" />
                        <button onClick={() => setCurrentProject({...currentProject, technologies: currentProject?.technologies?.filter((_, idx) => idx !== i)})} className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all"><X size={12} /></button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><Target size={14} /> Impact Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Stat Label</label>
                      <input value={currentProject?.stats?.label} onChange={e => setCurrentProject({...currentProject, stats: {...currentProject?.stats, label: e.target.value} as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs dark:text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Stat Value</label>
                      <input value={currentProject?.stats?.value} onChange={e => setCurrentProject({...currentProject, stats: {...currentProject?.stats, value: e.target.value} as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs dark:text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500">Icon Key</label>
                      <input value={currentProject?.stats?.iconName} onChange={e => setCurrentProject({...currentProject, stats: {...currentProject?.stats, iconName: e.target.value} as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-mono text-primary outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Settings */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</label>
                    <select value={currentProject?.category} onChange={e => setCurrentProject({...currentProject, category: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none">
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Enterprise">Enterprise</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Type</label>
                    <input value={currentProject?.type} onChange={e => setCurrentProject({...currentProject, type: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none" placeholder="Web App, iOS, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client</label>
                    <input value={currentProject?.client} onChange={e => setCurrentProject({...currentProject, client: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Year</label>
                      <input value={currentProject?.year} onChange={e => setCurrentProject({...currentProject, year: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Theme Color</label>
                      <input value={currentProject?.color} onChange={e => setCurrentProject({...currentProject, color: e.target.value})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm dark:text-white outline-none" placeholder="blue, emerald..." />
                    </div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Visibility Status</label>
                    <select value={currentProject?.status} onChange={e => setCurrentProject({...currentProject, status: e.target.value as any})} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none">
                      <option value="Draft">Draft (Hidden)</option>
                      <option value="Published">Published (Live)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2"><ImageIcon size={14} /> Preview Frame</h3>
                  <div className="aspect-video rounded-xl bg-slate-100 dark:bg-black/20 overflow-hidden border border-slate-200 dark:border-white/10">
                    {currentProject?.image ? (
                      <img src={currentProject.image} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400"><ImageIcon size={32} /></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.sort((a,b) => a.displayOrder - b.displayOrder).map(project => (
                  <div key={project.id} className="group relative bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">{project.category}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${project.status === 'Published' ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'}`}>{project.status}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold dark:text-white mb-2">{project.title}</h3>
                      <p className="text-slate-500 text-xs line-clamp-2 mb-6">{project.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                        <div className="flex gap-2">
                           <button onClick={() => {setCurrentProject(project); setIsEditing(project.id);}} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"><Edit3 size={16} /></button>
                           <button onClick={() => removeProject(project.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"><Trash2 size={16} /></button>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">Order: {project.displayOrder}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={addProject} className="h-full min-h-[300px] border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all group">
                   <Plus size={40} className="mb-4 group-hover:scale-110 transition-transform" />
                   <span className="font-bold">Add New Project</span>
                </button>
              </div>
            ) : (
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <tr>
                      <th className="px-6 py-4">Project</th>
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Year</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {projects.map(project => (
                      <tr key={project.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 flex-shrink-0">
                               <img src={project.image} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-bold dark:text-white">{project.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs dark:text-slate-400">{project.client}</td>
                        <td className="px-6 py-4 text-xs dark:text-slate-400">{project.category}</td>
                        <td className="px-6 py-4 text-xs dark:text-slate-400">{project.year}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${project.status === 'Published' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <button onClick={() => {setCurrentProject(project); setIsEditing(project.id);}} className="p-2 text-slate-400 hover:text-primary"><Edit3 size={16} /></button>
                             <button onClick={() => removeProject(project.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
