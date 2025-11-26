import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Brain, Shield, Code, Zap, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import * as RouterDOM from 'react-router-dom';
import { PROJECTS } from '../constants';

const { Link } = RouterDOM as any;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Home: React.FC = () => {
  const MotionDiv = motion.div as any;
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Leading the AI Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
              Innovation <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400">
                Elevated
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              TechSafi is a next-generation technology partner delivering enterprise-grade AI solutions, 
              robust cybersecurity, and transformative digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <Button size="lg">Start Project <ChevronRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">View Portfolio</Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
        
        {/* Floating tech elements */}
        <MotionDiv 
           className="absolute top-20 right-[10%] opacity-20 hidden lg:block"
           animate={{ y: [0, -20, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain size={64} className="text-primary" />
        </MotionDiv>
        <MotionDiv 
           className="absolute bottom-40 left-[10%] opacity-20 hidden lg:block"
           animate={{ y: [0, 20, 0] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Code size={64} className="text-secondary" />
        </MotionDiv>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#050b1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We blend creativity with cutting-edge technology to solve complex problems.</p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-slate-400 mb-6">Custom algorithms that predict trends, automate tasks, and unlock insights from your data.</p>
              <Link to="/ai-solutions" className="text-primary group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:border-secondary/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-slate-400 mb-6">Proactive threat hunting and robust defense architectures to keep your business secure.</p>
              <Link to="/services" className="text-secondary group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:border-accent/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
              <p className="text-slate-400 mb-6">Modernize your legacy systems and streamline operations for the digital age.</p>
              <Link to="/services" className="text-accent group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <MotionDiv {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">Featured Work</h2>
              <p className="text-slate-400">See how we've helped leading brands innovate.</p>
            </MotionDiv>
            <Link to="/portfolio" className="hidden md:block">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, index) => (
              <MotionDiv 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex items-center text-white font-medium">
                      View Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
          
           <div className="mt-8 md:hidden text-center">
              <Link to="/portfolio">
                <Button variant="outline" className="w-full">View All Projects</Button>
              </Link>
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-[#050b1d] to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <MotionDiv {...fadeInUp}>
               <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">Why TechSafi?</h2>
               <div className="space-y-8">
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                       <Zap size={24} />
                     </div>
                   </div>
                   <div className="ml-6">
                     <h4 className="text-lg font-bold text-white mb-2">Speed to Market</h4>
                     <p className="text-slate-400">Our agile methodologies ensures your product launches faster without compromising quality.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary">
                       <Brain size={24} />
                     </div>
                   </div>
                   <div className="ml-6">
                     <h4 className="text-lg font-bold text-white mb-2">AI-First Approach</h4>
                     <p className="text-slate-400">We don't just add AI; we build around it, creating truly intelligent ecosystems.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                       <Users size={24} />
                     </div>
                   </div>
                   <div className="ml-6">
                     <h4 className="text-lg font-bold text-white mb-2">Dedicated Partnership</h4>
                     <p className="text-slate-400">We work as an extension of your team, aligned with your long-term success metrics.</p>
                   </div>
                 </div>
               </div>
             </MotionDiv>
             
             <MotionDiv 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-2xl blur-2xl"></div>
               <img 
                 src="https://picsum.photos/600/600?random=20" 
                 alt="TechSafi Team" 
                 className="relative rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" 
               />
             </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};