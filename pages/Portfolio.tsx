
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ExternalLink, X, ChevronRight, Filter, LayoutGrid, List } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All Projects');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const MotionDiv = motion.div as any;

  const categories = ['All Projects', 'Web Apps', 'Mobile Apps', 'AI Solutions', 'Enterprise'];

  const filteredProjects = filter === 'All Projects' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter || (filter === 'Web Apps' && p.type === 'Web App') || (filter === 'Enterprise' && p.type === 'Enterprise'));

  const getGradient = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-indigo-600';
      case 'emerald': return 'from-emerald-500 to-teal-600';
      case 'pink': return 'from-pink-500 to-rose-600';
      case 'orange': return 'from-amber-500 to-orange-600';
      case 'red': return 'from-red-500 to-pink-600';
      case 'indigo': return 'from-indigo-500 to-blue-600';
      default: return 'from-blue-500 to-purple-600';
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20';
      case 'emerald': return 'text-emerald-500 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20';
      case 'pink': return 'text-pink-500 dark:text-pink-400 bg-pink-100 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/20';
      case 'orange': return 'text-amber-500 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20';
      case 'red': return 'text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/20';
      case 'indigo': return 'text-indigo-500 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20';
      default: return 'text-purple-500 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20';
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-slate-50 to-slate-50 dark:from-blue-900/10 dark:via-[#020617] dark:to-[#020617]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-[#1e293b] text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-6 border border-purple-500/20"
          >
             <Briefcase size={12} className="mr-2" /> Our Work
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Portfolio</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
          >
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              Explore our collection of successful projects. From startups to enterprises, we've delivered custom software solutions that drive real business results.
            </p>
          </MotionDiv>

          {/* Filter Buttons & View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                    filter === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                      : 'bg-white dark:bg-[#1e293b] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#283548] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </MotionDiv>

            <div className="flex bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/5 rounded-lg p-1">
               <button 
                 onClick={() => setViewMode('grid')}
                 className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-100 dark:bg-white/10 text-blue-500' : 'text-slate-400'}`}
               >
                 <LayoutGrid size={20} />
               </button>
               <button 
                 onClick={() => setViewMode('list')}
                 className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 dark:bg-white/10 text-blue-500' : 'text-slate-400'}`}
               >
                 <List size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <MotionDiv
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-2 h-full flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'} cursor-pointer shadow-lg dark:shadow-xl`}>
                  {/* Top Gradient Area */}
                  <div className={`${viewMode === 'list' ? 'w-1/3 h-auto' : 'h-40'} bg-gradient-to-br ${getGradient(project.color)} p-6 relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase">
                      {project.category}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <project.icon size={64} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                       {viewMode === 'list' && (
                          <div className={`flex items-center text-xs font-bold uppercase ${project.color === 'pink' ? 'text-pink-500 dark:text-pink-400' : project.color === 'emerald' ? 'text-emerald-500 dark:text-emerald-400' : project.color === 'orange' ? 'text-amber-500 dark:text-amber-400' : project.color === 'red' ? 'text-red-500 dark:text-red-400' : 'text-blue-500 dark:text-blue-400'}`}>
                             {React.createElement(project.stats.icon, { size: 14, className: "mr-1.5" })}
                             {project.stats.value} {project.stats.label}
                          </div>
                       )}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${getColorClass(project.color)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats & Link */}
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <div className={`flex items-center text-xs font-bold uppercase ${project.color === 'pink' ? 'text-pink-500 dark:text-pink-400' : project.color === 'emerald' ? 'text-emerald-500 dark:text-emerald-400' : project.color === 'orange' ? 'text-amber-500 dark:text-amber-400' : project.color === 'red' ? 'text-red-500 dark:text-red-400' : 'text-blue-500 dark:text-blue-400'}`}>
                        {viewMode === 'grid' && (
                           <>
                              {React.createElement(project.stats.icon, { size: 14, className: "mr-1.5" })}
                              {project.stats.value} {project.stats.label}
                           </>
                        )}
                      </div>
                      <span className="text-slate-600 dark:text-white text-xs font-bold flex items-center group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        View Details <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Process/CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-100 dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-sm dark:shadow-none">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Have a project in mind?</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
                 We help businesses of all sizes turn ideas into reality. Let's discuss your requirements and build something amazing together.
              </p>
              <Link to="/contact">
                 <Button className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-900/20 px-8 py-3 text-white">
                    Start Your Project
                 </Button>
              </Link>
           </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <div className={`w-full h-48 bg-gradient-to-r ${getGradient(selectedProject.color)} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                <img src={selectedProject.image} alt="Project Preview" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                <selectedProject.icon size={80} className="text-white relative z-10" />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Project Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6">
                  {selectedProject.description}
                  <br /><br />
                  This project required a deep understanding of the {selectedProject.category} landscape. We implemented a custom solution to ensure scalability, security, and a seamless user experience.
                </p>
                
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Key Features</h4>
                <ul className="space-y-2 mb-6">
                   {['User-centric Design', 'Scalable Architecture', 'Secure Data Handling', 'Real-time Analytics'].map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                         {feat}
                      </li>
                   ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-xl border border-slate-200 dark:border-white/10 h-fit">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-4 tracking-wider">Project Details</h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Client</span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Year</span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">{selectedProject.year}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Category</span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">{selectedProject.category}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                     <Button className="w-full text-xs h-9 bg-white dark:bg-white text-slate-900 border border-slate-200 dark:border-0 hover:bg-slate-100 dark:hover:bg-slate-200 shadow-sm">
                        Visit Live Site <ExternalLink size={12} className="ml-2" />
                     </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
