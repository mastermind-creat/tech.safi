import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { Hero } from '../components/ui/Hero';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const MotionDiv = motion.div as any;

  return (
    <div className="pb-20">
      <Hero
        bgImage="https://i.gifer.com/Start/7kRE.gif" // Matrix/Code rain
        overlayOpacity={0.8}
        title="Our Portfolio"
        subtitle="A showcase of our most impactful work across industries. Explore how we turn complex challenges into elegant solutions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <Card className="h-full p-0 overflow-hidden bg-transparent border-0 relative">
                 <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium">View Details</span>
                    </div>
                 </div>
                 <div className="mt-6 px-2">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-primary text-sm font-semibold tracking-wide uppercase">{project.category}</span>
                     <span className="text-slate-500 text-sm">{project.year}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-slate-400 line-clamp-2">{project.description}</p>
                 </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-6 border border-white/10"
            />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold text-white mb-2">Overview</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {selectedProject.description} 
                  <br/><br/>
                  This project aimed to solve critical infrastructure challenges using advanced algorithmic solutions. By leveraging our proprietary AI models, we were able to increase efficiency by over 40% for the client.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 h-fit">
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">Project Info</h4>
                <div className="space-y-3">
                  <div>
                    <span className="block text-xs text-slate-500">Client</span>
                    <span className="text-white font-medium">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Year</span>
                    <span className="text-white font-medium">{selectedProject.year}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Category</span>
                    <span className="text-white font-medium">{selectedProject.category}</span>
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