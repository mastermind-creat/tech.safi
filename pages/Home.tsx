import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Zap, Users, Globe, Settings, Bot, 
  Link as LinkIcon, Clock, DollarSign, Server, Laptop, RefreshCw, 
  BarChart3, Code2, ChevronRight 
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Home: React.FC = () => {
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;
  
  return (
    <div className="overflow-hidden bg-[#020617]">
      {/* Custom Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          </div>

          {/* Trusted By (Mock) */}
          <MotionDiv 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.5 }} 
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 mb-6 uppercase">Trusted by Industry Leaders</p>
              <div className="flex justify-center gap-8 md:gap-16 grayscale opacity-70">
                  {/* Icons representing logos */}
                  <Globe className="w-6 h-6 text-slate-400" />
                  <Server className="w-6 h-6 text-slate-400" /> 
                  <Zap className="w-6 h-6 text-slate-400" /> 
                  <Shield className="w-6 h-6 text-slate-400" /> 
                  <Brain className="w-6 h-6 text-slate-400" />
              </div>
          </MotionDiv>

          {/* Main Hero Content */}
          <div className="text-center mb-16 relative z-10">
               <MotionDiv 
                 initial={{ opacity: 0, y: -20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1e293b]/80 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-900/20"
               >
                  <Bot size={14} className="mr-2" /> AI-Powered Development Services
               </MotionDiv>
               <MotionH1 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.1 }} 
                 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight"
               >
                  We Build Custom Software <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse-slow">with AI Integration</span>
               </MotionH1>
               <MotionP 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.2 }} 
                 className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
               >
                  From websites to enterprise systems, we develop custom software solutions with intelligent AI automation. We can also add AI features like chatbots, recommendations, and automation to your existing website or software—no rebuild required.
               </MotionP>
          </div>

          {/* Split Section: Features List & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 relative z-10">
              {/* Left: Features */}
              <div className="space-y-8">
                   {/* Item 1 */}
                   <MotionDiv 
                     initial={{ opacity: 0, x: -30 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: 0.1 }} 
                     className="flex gap-5 group"
                   >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                          <Globe size={24} />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Custom Websites & Web Apps</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">Beautiful, responsive websites and web applications with AI-powered features like chatbots, recommendations, smart search, content generation, voice AI, and document processing. We can also add these features to your existing website.</p>
                      </div>
                   </MotionDiv>
                   
                   {/* Item 2 */}
                   <MotionDiv 
                     initial={{ opacity: 0, x: -30 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: 0.2 }} 
                     className="flex gap-5 group"
                   >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                          <Settings size={24} />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Enterprise Software Solutions</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">Scalable business management systems, CRMs, ERPs, and custom applications with intelligent automation workflows.</p>
                      </div>
                   </MotionDiv>
                   
                   {/* Item 3 */}
                   <MotionDiv 
                     initial={{ opacity: 0, x: -30 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: 0.3 }} 
                     className="flex gap-5 group"
                   >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform duration-300">
                          <Bot size={24} />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">AI-Powered Automation</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">Integrate AI chatbots, machine learning, NLP, computer vision, voice AI, document processing, and predictive analytics into your existing or new systems.</p>
                      </div>
                   </MotionDiv>
                   
                   {/* Item 4 */}
                   <MotionDiv 
                     initial={{ opacity: 0, x: -30 }} 
                     whileInView={{ opacity: 1, x: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: 0.4 }} 
                     className="flex gap-5 group"
                   >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                          <LinkIcon size={24} />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">System Integration</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">Seamlessly connect your tools, databases, and third-party services with smart APIs and automated data synchronization.</p>
                      </div>
                   </MotionDiv>
              </div>

              {/* Right: Metrics Cards */}
              <div className="relative">
                   {/* Background Glow */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                   
                   <div className="relative space-y-6">
                      <MotionDiv 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.2 }} 
                        className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-2xl hover:border-blue-500/30 transition-colors"
                      >
                          <div>
                              <div className="text-4xl font-bold text-blue-400 mb-1">85%</div>
                              <div className="text-sm font-medium text-slate-300">Faster Time to Market</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                              <Clock size={24} />
                          </div>
                      </MotionDiv>

                      <MotionDiv 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.3 }} 
                        className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-2xl ml-0 lg:ml-12 hover:border-purple-500/30 transition-colors"
                      >
                          <div>
                              <div className="text-4xl font-bold text-purple-400 mb-1">60%</div>
                              <div className="text-sm font-medium text-slate-300">Cost Reduction</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                              <DollarSign size={24} />
                          </div>
                      </MotionDiv>

                      <MotionDiv 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.4 }} 
                        className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-2xl hover:border-emerald-500/30 transition-colors"
                      >
                          <div>
                              <div className="text-4xl font-bold text-emerald-400 mb-1">99.9%</div>
                              <div className="text-sm font-medium text-slate-300">Uptime Guarantee</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                              <Server size={24} />
                          </div>
                      </MotionDiv>
                   </div>
              </div>
          </div>

          {/* "What We Deliver" Grid */}
          <MotionDiv 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-[#0f172a] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative z-10"
          >
              <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">What We Deliver for Your Business</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Grid Items */}
                   <div className="bg-[#1e293b]/40 p-6 rounded-xl border border-white/5 hover:bg-[#1e293b] transition-all duration-300 text-center group hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                          <Laptop size={24} />
                      </div>
                      <h3 className="font-bold text-white mb-2">Custom Development</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">Tailored solutions built from scratch for your needs</p>
                   </div>

                   <div className="bg-[#1e293b]/40 p-6 rounded-xl border border-white/5 hover:bg-[#1e293b] transition-all duration-300 text-center group hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                          <Bot size={24} />
                      </div>
                      <h3 className="font-bold text-white mb-2">AI Integration</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">Chatbots, ML models, NLP, computer vision & more</p>
                   </div>

                   <div className="bg-[#1e293b]/40 p-6 rounded-xl border border-white/5 hover:bg-[#1e293b] transition-all duration-300 text-center group hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
                          <BarChart3 size={24} />
                      </div>
                      <h3 className="font-bold text-white mb-2">Predictive Analytics</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">Business Intelligence & data-driven insights</p>
                   </div>

                   <div className="bg-[#1e293b]/40 p-6 rounded-xl border border-white/5 hover:bg-[#1e293b] transition-all duration-300 text-center group hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                          <RefreshCw size={24} />
                      </div>
                      <h3 className="font-bold text-white mb-2">Process Automation</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">Streamline workflows & reduce manual tasks</p>
                   </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                   <Link to="/contact">
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 border-none shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40">
                          Get Your Custom Solution <ArrowRight size={16} className="ml-2" />
                      </Button>
                   </Link>
                   <Link to="/ai-solutions">
                      <Button variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5">
                          <Bot size={16} className="mr-2" /> Explore AI Solutions
                      </Button>
                   </Link>
              </div>
          </MotionDiv>
      </section>

      {/* Gradient CTA Banner */}
      <section className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">Already Have a Website?</h2>
                  <p className="text-white/90 text-sm md:text-lg max-w-2xl">Add AI features like chatbots, recommendations, and automation in days—no rebuild needed!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                      <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-xl hover:bg-gray-50 transition-colors flex items-center justify-center w-full sm:w-auto">
                          <Bot size={18} className="mr-2" /> View AI Services
                      </button>
                  </Link>
                  <Link to="/pricing">
                      <button className="px-6 py-3 bg-black/20 text-white font-bold rounded-lg border border-white/20 hover:bg-black/30 transition-colors flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                          <Code2 size={18} className="mr-2" /> See Pricing
                      </button>
                  </Link>
              </div>
          </div>
      </section>

      {/* Services Overview (Continued) */}
      <section className="py-24 bg-[#050b1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
            </h2>
             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">We deliver end-to-end digital solutions that help businesses innovate, scale, and succeed in today's competitive landscape.</p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-slate-400 mb-6">Custom algorithms that predict trends, automate tasks, and unlock insights from your data.</p>
              <Link to="/ai-solutions" className="text-blue-500 group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-slate-400 mb-6">Proactive threat hunting and robust defense architectures to keep your business secure.</p>
              <Link to="/services" className="text-purple-500 group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:border-pink-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
              <p className="text-slate-400 mb-6">Modernize your legacy systems and streamline operations for the digital age.</p>
              <Link to="/services" className="text-pink-500 group-hover:text-white flex items-center text-sm font-medium transition-colors">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>
          </div>
          
           <div className="text-center mt-12">
               <Link to="/services">
                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    View All Services
                 </Button>
               </Link>
           </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 relative bg-[#020617]">
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 line-clamp-2 mb-4 text-sm">{project.description}</p>
                    <div className="flex items-center text-white font-medium text-sm">
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
      <section className="py-24 bg-gradient-to-b from-[#050b1d] to-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <MotionDiv {...fadeInUp}>
               <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">Why TechSafi?</h2>
               <div className="space-y-8">
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500">
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
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 text-purple-500">
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
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/10 text-pink-500">
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
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
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
