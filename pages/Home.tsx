import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Zap, 
  Clock, DollarSign, Server, Laptop, RefreshCw, 
  BarChart3, Code2, ChevronRight, PlayCircle, Star, 
  Smartphone, Database, Cloud, Code, Rocket, CheckCircle2, Award, Bot, Globe, Link as LinkIcon, Settings
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Typewriter } from '../components/ui/Typewriter';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Home: React.FC = () => {
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;
  
  return (
    <div className="overflow-hidden bg-[#020617]">
      {/* Compact & Professional Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-12 sm:pt-32">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-purple-600/10 rounded-full blur-[40px] md:blur-[100px] pointer-events-none"></div>

          {/* Integrated Floating Icons (Background Layer) - Adjusted for Mobile */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Left Side Icons - Hidden on very small screens, visible on sm+ */}
             <MotionDiv 
               animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="hidden sm:flex absolute top-[20%] left-[5%] lg:left-[15%] w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl items-center justify-center text-blue-400 opacity-60"
             >
               <Code size={20} />
             </MotionDiv>
             <MotionDiv 
               animate={{ y: [15, -15, 15] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="hidden sm:flex absolute top-[60%] left-[2%] lg:left-[10%] w-12 h-12 md:w-16 md:h-16 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl items-center justify-center text-purple-400 opacity-60"
             >
               <Brain size={24} className="md:w-7 md:h-7" />
             </MotionDiv>

             {/* Right Side Icons */}
             <MotionDiv 
               animate={{ y: [-12, 12, -12], x: [5, -5, 5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="hidden sm:flex absolute top-[25%] right-[5%] lg:right-[15%] w-12 h-12 md:w-14 md:h-14 bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl items-center justify-center text-pink-400 opacity-60"
             >
               <Smartphone size={20} className="md:w-6 md:h-6" />
             </MotionDiv>
             <MotionDiv 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="hidden sm:flex absolute top-[65%] right-[2%] lg:right-[10%] w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl items-center justify-center text-emerald-400 opacity-60"
             >
               <Database size={18} className="md:w-5 md:h-5" />
             </MotionDiv>
             
             {/* Subtle Mobile Icons - Pushed further out or resized */}
             <MotionDiv 
               animate={{ y: [-8, 8, -8] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-[5%] left-[-5%] sm:left-[10%] w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 opacity-20 sm:opacity-50"
             >
               <Rocket size={14} />
             </MotionDiv>
             <MotionDiv 
               animate={{ y: [8, -8, 8] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
               className="absolute top-[10%] right-[-5%] sm:right-[15%] w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 opacity-20 sm:opacity-50"
             >
               <Cloud size={14} />
             </MotionDiv>
          </div>

          {/* Main Content (Centered) */}
          <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 w-full">
             {/* Badge */}
             <MotionDiv 
               initial={{ opacity: 0, y: -20 }} 
               animate={{ opacity: 1, y: 0 }} 
               className="flex items-center justify-center"
             >
               <div className="px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase">Innovating Since 2024</span>
               </div>
             </MotionDiv>
             
             {/* Headline */}
             <MotionH1 
               initial={{ opacity: 0, scale: 0.95 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ delay: 0.1 }} 
               className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] tracking-tight"
             >
                We Build <br className="block sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm block mt-2 sm:mt-1 min-h-[1.2em]">
                  <Typewriter 
                    words={['E-Commerce Platforms', 'Custom Software', 'AI Solutions', 'Mobile Apps']} 
                    cursorClassName="text-purple-400"
                  />
                </span>
             </MotionH1>
             
             {/* Description */}
             <MotionP 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ delay: 0.2 }} 
               className="text-base sm:text-lg text-slate-400 max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
             >
                Transforming complex challenges into elegant digital solutions with AI-powered automation. Build custom software or add intelligent AI features to your existing website.
             </MotionP>

             {/* Buttons */}
             <MotionDiv 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto"
             >
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-500/20 min-w-[160px] md:min-w-[180px] text-base py-3">
                    Start Your Project <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 bg-[#1e293b]/50 backdrop-blur-md min-w-[160px] md:min-w-[180px] text-base py-3">
                    <PlayCircle size={18} className="mr-2 text-pink-500" /> Watch Demo
                </Button>
             </MotionDiv>

             {/* Stats Bar */}
             <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 md:pt-10 w-full"
             >
               <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:px-10 md:py-6 shadow-2xl w-full max-w-sm sm:max-w-4xl mx-auto">
                  
                  {/* Stat Item 1 */}
                  <div className="flex items-center space-x-3 w-full sm:w-auto justify-start sm:justify-center border-b sm:border-b-0 border-white/5 pb-3 sm:pb-0 last:border-0 last:pb-0 px-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                      <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-xl md:text-2xl leading-none mb-1">50+</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Happy Clients</div>
                    </div>
                  </div>
                  
                  <div className="w-px h-10 bg-white/10 hidden sm:block"></div>

                  {/* Stat Item 2 */}
                  <div className="flex items-center space-x-3 w-full sm:w-auto justify-start sm:justify-center border-b sm:border-b-0 border-white/5 pb-3 sm:pb-0 last:border-0 last:pb-0 px-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 flex-shrink-0">
                      <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-xl md:text-2xl leading-none mb-1">4.9/5</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Rating</div>
                    </div>
                  </div>

                  <div className="w-px h-10 bg-white/10 hidden sm:block"></div>

                  {/* Stat Item 3 */}
                  <div className="flex items-center space-x-3 w-full sm:w-auto justify-start sm:justify-center px-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Award size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-xl md:text-2xl leading-none mb-1">5+</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Years Exp.</div>
                    </div>
                  </div>
               </div>
             </MotionDiv>
          </div>

          {/* Scroll Indicator */}
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-2">Scroll Down</span>
            <ChevronRight size={16} className="text-slate-500 rotate-90" />
          </MotionDiv>
      </section>
      
      {/* Trust Badges */}
      <div className="bg-[#050b1d] py-8 md:py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-6 md:mb-8">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Globe size={20} className="md:w-7 md:h-7 text-white" />
                <Laptop size={20} className="md:w-7 md:h-7 text-white" />
                <Database size={20} className="md:w-7 md:h-7 text-white" />
                <Cloud size={20} className="md:w-7 md:h-7 text-white" />
                <Server size={20} className="md:w-7 md:h-7 text-white" />
            </div>
        </div>
      </div>

      {/* "What We Deliver" Grid */}
      <section className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
          {/* Section Background Decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="text-center mb-12 md:mb-20">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6">
                      <Bot size={12} className="mr-2" /> AI-Powered Services
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6 tracking-tight">
                      We Build Custom Software <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">with AI Integration</span>
                  </h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                      From websites to enterprise systems, we develop custom solutions with intelligent automation. No rebuild required—we seamlessly integrate AI into your existing stack.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left: Feature List */}
                  <div className="space-y-6 md:space-y-8">
                      {[
                        { icon: Globe, color: "blue", title: "Custom Websites & Web Apps", desc: "Responsive, high-performance web apps with smart search and content generation." },
                        { icon: Settings, color: "purple", title: "Enterprise Software Solutions", desc: "Scalable CRMs, ERPs, and management systems with automated workflows." },
                        { icon: Bot, color: "pink", title: "AI-Powered Automation", desc: "Chatbots, NLP, and predictive analytics integrated into your operations." },
                        { icon: LinkIcon, color: "emerald", title: "System Integration", desc: "Seamlessly connect databases and third-party tools with smart APIs." }
                      ].map((item, idx) => (
                        <MotionDiv 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-5 group"
                        >
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 flex-shrink-0 border border-${item.color}-500/20 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300 shadow-lg`}>
                                <item.icon size={24} className="md:w-7 md:h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </MotionDiv>
                      ))}
                  </div>

                  {/* Right: Metrics Dashboard */}
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
                      <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                          <div className="space-y-4 md:space-y-6">
                              {[
                                { val: "85%", label: "Faster Time to Market", icon: Clock, color: "text-blue-400", bg: "bg-blue-500/10" },
                                { val: "60%", label: "Cost Reduction", icon: DollarSign, color: "text-purple-400", bg: "bg-purple-500/10" },
                                { val: "99.9%", label: "Uptime Guarantee", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/10" }
                              ].map((stat, i) => (
                                <div key={i} className="bg-[#1e293b]/50 rounded-2xl p-5 md:p-6 border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
                                    <div>
                                        <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.val}</div>
                                        <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                                        <stat.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                </div>
                              ))}
                          </div>
                      </div>
                  </MotionDiv>
              </div>

               {/* Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
                   {[
                     { icon: Laptop, title: "Custom Development", desc: "Tailored solutions built from scratch" },
                     { icon: Bot, title: "AI Integration", desc: "Chatbots, ML models, & computer vision" },
                     { icon: BarChart3, title: "Predictive Analytics", desc: "Data-driven business insights" },
                     { icon: RefreshCw, title: "Process Automation", desc: "Streamline workflows & reduce tasks" }
                   ].map((card, i) => (
                     <Card key={i} className="text-center p-6 md:p-8 bg-[#1e293b]/20 hover:bg-[#1e293b]/40 border-white/5 hover:border-blue-500/30 transition-all group">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-white mx-auto mb-4 md:mb-5 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                            <card.icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <h4 className="font-bold text-white mb-2">{card.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                     </Card>
                   ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center mt-12 md:mt-16 gap-4">
                 <Link to="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 border-none shadow-lg shadow-blue-900/20 px-8">
                        Get Your Custom Solution <ArrowRight size={16} className="ml-2" />
                    </Button>
                 </Link>
                 <Link to="/ai-solutions" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5">
                        <Bot size={16} className="mr-2" /> Explore AI Solutions
                    </Button>
                 </Link>
              </div>
          </div>
      </section>

      {/* Gradient CTA Banner */}
      <section className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/20 blur-[80px] rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 relative z-10">
              <div className="text-center md:text-left max-w-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 font-display">Already Have a Website?</h2>
                  <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">Add AI features like chatbots, recommendations, and automation in days—no rebuild needed!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Link to="/services">
                      <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white text-fuchsia-700 font-bold rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all flex items-center justify-center text-sm md:text-base">
                          <Bot size={20} className="mr-2" /> View AI Services
                      </button>
                  </Link>
                  <Link to="/pricing">
                      <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-black/20 text-white font-bold rounded-xl border border-white/20 hover:bg-black/30 hover:scale-105 transition-all flex items-center justify-center backdrop-blur-md text-sm md:text-base">
                          <Code2 size={20} className="mr-2" /> See Pricing
                      </button>
                  </Link>
              </div>
          </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-[#050b1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
            </h2>
             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We deliver end-to-end digital solutions that help businesses innovate, scale, and succeed in today's competitive landscape.</p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:border-blue-500/50 transition-colors group p-6 md:p-8 bg-[#0f172a]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 md:mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Brain size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">AI & Machine Learning</h3>
              <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">Custom algorithms that predict trends, automate tasks, and unlock insights from your data.</p>
              <Link to="/ai-solutions" className="text-blue-500 group-hover:text-white flex items-center text-sm font-bold transition-colors uppercase tracking-wide">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>

            <Card className="hover:border-purple-500/50 transition-colors group p-6 md:p-8 bg-[#0f172a]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 md:mb-8 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Shield size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cybersecurity</h3>
              <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">Proactive threat hunting and robust defense architectures to keep your business secure.</p>
              <Link to="/services" className="text-purple-500 group-hover:text-white flex items-center text-sm font-bold transition-colors uppercase tracking-wide">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>

            <Card className="hover:border-pink-500/50 transition-colors group p-6 md:p-8 bg-[#0f172a]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 md:mb-8 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Zap size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Digital Transformation</h3>
              <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">Modernize your legacy systems and streamline operations for the digital age.</p>
              <Link to="/services" className="text-pink-500 group-hover:text-white flex items-center text-sm font-bold transition-colors uppercase tracking-wide">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>
          </div>
          
           <div className="text-center mt-12 md:mt-16">
               <Link to="/services">
                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-3">
                    View All Services
                 </Button>
               </Link>
           </div>
        </div>
      </section>
    </div>
  );
};