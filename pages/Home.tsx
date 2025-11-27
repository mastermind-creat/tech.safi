
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, 
  Clock, Server, Globe, Smartphone, 
  Code2, Rocket, Bot, 
  Layout, Cloud, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Typewriter } from '../components/ui/Typewriter';
import { PROJECTS } from '../constants';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const MotionDiv = motion.div as any;

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
          
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <MotionDiv 
               style={{ y: y1, x: -100 }}
               className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
             />
             <MotionDiv 
               style={{ y: y2, x: 100 }}
               className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
             />
             
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] dark:opacity-[0.03]"></div>
             
             {[...Array(20)].map((_, i) => (
               <MotionDiv
                 key={i}
                 className="absolute w-1 h-1 bg-slate-900/10 dark:bg-white/20 rounded-full"
                 initial={{ 
                   x: Math.random() * 100 + "%", 
                   y: Math.random() * 100 + "%", 
                   scale: Math.random() * 0.5 + 0.5 
                 }}
                 animate={{ 
                   y: [null, Math.random() * -100],
                   opacity: [0, 1, 0]
                 }}
                 transition={{ 
                   duration: Math.random() * 10 + 10, 
                   repeat: Infinity, 
                   ease: "linear" 
                 }}
               />
             ))}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
             {/* Badge */}
             <MotionDiv 
               initial={{ opacity: 0, y: -20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-md dark:shadow-lg dark:shadow-cyan-500/10 group cursor-default"
             >
               <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
               </span>
               <span className="text-xs md:text-sm font-medium tracking-wide text-slate-700 dark:text-cyan-100">
                 Next-Gen AI Software Solutions
               </span>
             </MotionDiv>
             
             {/* Headline */}
             <MotionDiv 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ duration: 0.8, delay: 0.1 }}
             >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  Building Intelligent <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
                    <Typewriter 
                      words={['Digital Solutions', 'AI Systems', 'Future Tech']} 
                      cursorClassName="text-cyan-500"
                      typingSpeed={80}
                      deletingSpeed={50}
                      pauseTime={2500}
                    />
                  </span>
                </h1>
             </MotionDiv>
             
             {/* Subheadline */}
             <MotionDiv 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.8, delay: 0.2 }}
               className="max-w-2xl mx-auto"
             >
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                   Empowering businesses with AI-enhanced software, custom mobile apps, and intelligent automation tailored for the modern digital era.
                </p>
             </MotionDiv>

             {/* CTAs */}
             <MotionDiv 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
             >
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg dark:shadow-[0_0_30px_rgba(6,182,212,0.3)] border-0 text-white font-bold py-4 px-8 text-lg rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 backdrop-blur-md py-4 px-8 text-lg rounded-xl group">
                    Explore Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
             </MotionDiv>
          </div>

          {/* Stats Bar */}
          <MotionDiv 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center"
          >
             <div className="flex divide-x divide-slate-200 dark:divide-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-4 shadow-xl dark:shadow-2xl">
               {[
                 { label: "Projects Delivered", value: "50+" },
                 { label: "Client Satisfaction", value: "98%" },
                 { label: "Years Innovation", value: "5+" },
                 { label: "Countries Served", value: "3+" }
               ].map((stat, i) => (
                 <div key={i} className="px-8 text-center">
                   <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
                   <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                 </div>
               ))}
             </div>
          </MotionDiv>
      </section>

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-24 relative z-10 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <MotionDiv 
             variants={fadeInUp}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
                 Intelligent <span className="text-cyan-500 dark:text-cyan-400">Services</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                 We combine cutting-edge technology with strategic design to build solutions that drive real business growth.
              </p>
           </MotionDiv>

           <MotionDiv 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
           >
              {[
                { icon: Globe, title: "Web Development", desc: "High-performance websites and web apps built with React and Modern Tech.", color: "cyan" },
                { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS and Android applications designed for optimal user experience.", color: "purple" },
                { icon: Bot, title: "AI Integration", desc: "Smart chatbots, predictive models, and automation for your business.", color: "emerald" },
                { icon: Cloud, title: "Cloud Solutions", desc: "Scalable infrastructure setup and migration to AWS, Azure, or Google Cloud.", color: "blue" },
                { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade security audits and protection for your digital assets.", color: "red" },
                { icon: Layout, title: "UI/UX Design", desc: "User-centric interfaces that are beautiful, intuitive, and conversion-focused.", color: "pink" }
              ].map((service, idx) => (
                <MotionDiv 
                  key={idx}
                  variants={fadeInUp}
                  className="group relative p-8 bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-blue-500/30 dark:hover:bg-[#1e293b]/80 dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg dark:shadow-none"
                >
                   <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                   
                   <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 dark:bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-600 dark:text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-${service.color}-200 dark:border-${service.color}-500/20`}>
                      <service.icon size={28} />
                   </div>
                   
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{service.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                      {service.desc}
                   </p>
                   
                   <Link to="/services" className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-500 dark:hover:text-${service.color}-300 relative z-10 group-hover:translate-x-1 transition-transform`}>
                      Learn More <ChevronRight size={14} className="ml-1" />
                   </Link>
                </MotionDiv>
              ))}
           </MotionDiv>
        </div>
      </section>

      {/* --- ABOUT MINI-SECTION --- */}
      <section className="py-24 bg-white dark:bg-[#050b1d] border-y border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <MotionDiv 
                 variants={fadeInRight}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                     About TechSafi
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6 leading-tight">
                     Innovation Driven by <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">Purpose & Passion</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                     <p>
                        TechSafi isn't just a software company; we are a collective of visionaries, engineers, and creatives dedicated to reshaping the digital landscape of Africa.
                     </p>
                     <p>
                        Founded in 2024, our mission is to democratize access to advanced technology. Whether it's helping a startup launch their MVP or enabling an enterprise to leverage AI, we bring the same level of excellence and integrity to every project.
                     </p>
                  </div>
                  <div className="mt-10">
                     <Link to="/company">
                        <Button className="bg-slate-900 dark:bg-white text-white dark:text-purple-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                           Discover Our Story
                        </Button>
                     </Link>
                  </div>
               </MotionDiv>

               <MotionDiv
                 variants={fadeInLeft}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="relative"
               >
                  <div className="relative aspect-square md:aspect-[4/3] bg-slate-50 dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center shadow-2xl dark:shadow-none">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-[0.05] dark:opacity-10"></div>
                     <MotionDiv 
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-100 dark:bg-blue-500/20 rounded-2xl border border-blue-200 dark:border-blue-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
                     >
                        <Code2 size={40} className="text-blue-500 dark:text-blue-400" />
                     </MotionDiv>
                     <MotionDiv 
                        animate={{ y: [15, -15, 15] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-100 dark:bg-purple-500/20 rounded-full border border-purple-200 dark:border-purple-500/30 backdrop-blur-md flex items-center justify-center z-10 shadow-lg"
                     >
                        <Brain size={48} className="text-purple-500 dark:text-purple-400" />
                     </MotionDiv>
                     <MotionDiv 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-200 dark:border-white/5 rounded-full"
                     />
                     <div className="absolute bottom-8 left-8 right-8 bg-white/80 dark:bg-[#020617]/80 backdrop-blur p-4 rounded-xl border border-slate-100 dark:border-white/10 shadow-lg">
                        <div className="flex items-center gap-3">
                           <div className="h-2 flex-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <MotionDiv 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "85%" }}
                                 transition={{ duration: 1.5, delay: 0.5 }}
                                 className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                              />
                           </div>
                           <span className="text-xs font-bold text-slate-900 dark:text-white">System Optimized</span>
                        </div>
                     </div>
                  </div>
               </MotionDiv>
            </div>
         </div>
      </section>

      {/* --- PORTFOLIO PREVIEW --- */}
      <section className="py-24 relative bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <MotionDiv 
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                     Selected <span className="text-blue-500">Works</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                     A glimpse into the digital solutions we've crafted.
                  </p>
               </MotionDiv>
               <MotionDiv
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                 <Link to="/portfolio">
                    <Button variant="ghost" className="text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group">
                       View All Projects <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </Link>
               </MotionDiv>
            </div>

            <MotionDiv 
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               {PROJECTS.slice(0, 3).map((project, idx) => (
                  <MotionDiv
                     key={project.id}
                     variants={scaleIn}
                     className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg dark:shadow-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#020617] dark:via-[#020617]/60 opacity-90 transition-opacity duration-300"></div>
                     
                     <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 mb-3">
                           <span className="px-2 py-1 rounded bg-blue-600/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                              {project.category}
                           </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-200 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                           {project.technologies.slice(0, 3).map(t => (
                              <span key={t} className="text-[10px] text-slate-200 border border-white/20 px-2 py-0.5 rounded-full">{t}</span>
                           ))}
                        </div>
                     </div>
                  </MotionDiv>
               ))}
            </MotionDiv>
         </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-slate-100 dark:bg-[#0f172a]/30 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
               variants={fadeInUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="text-center mb-20"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
                  Why Leading Companies <br /><span className="text-emerald-500 dark:text-emerald-400">Choose TechSafi</span>
               </h2>
            </MotionDiv>

            <MotionDiv 
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
               {[
                 { icon: Rocket, title: "Fast Delivery", desc: "Agile methodologies that ensure rapid deployment without compromising quality." },
                 { icon: Brain, title: "AI-Driven", desc: "We integrate intelligence into every layer of development for smarter solutions." },
                 { icon: Shield, title: "Bank-Grade Security", desc: "Advanced encryption and security protocols to protect your business data." },
                 { icon: Server, title: "Scalable Architecture", desc: "Systems built to grow with your business, handling millions of users effortlessly." },
                 { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical support to ensure your operations never stop." }
               ].slice(0, 4).map((item, idx) => (
                 <MotionDiv
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white dark:bg-[#020617] border border-slate-200 dark:border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group shadow-lg dark:shadow-none hover:-translate-y-1 duration-300"
                 >
                    <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-[#1e293b] flex items-center justify-center text-slate-700 dark:text-white mb-6 group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                       <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       {item.desc}
                    </p>
                 </MotionDiv>
               ))}
            </MotionDiv>
         </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-[#050b1d] transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
               {[
                 { val: "50+", label: "Projects Completed", color: "text-blue-600 dark:text-blue-400" },
                 { val: "90%", label: "Client Retention", color: "text-purple-600 dark:text-purple-400" },
                 { val: "15+", label: "AI Solutions", color: "text-pink-600 dark:text-pink-400" },
                 { val: "24/7", label: "Support Active", color: "text-emerald-600 dark:text-emerald-400" }
               ].map((stat, idx) => (
                 <MotionDiv
                    key={idx}
                    variants={scaleIn}
                 >
                    <div className={`text-4xl md:text-6xl font-bold ${stat.color} font-display mb-2 drop-shadow-lg`}>
                       {stat.val}
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                       {stat.label}
                    </div>
                 </MotionDiv>
               ))}
            </MotionDiv>
         </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-32 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-slate-900 dark:from-blue-900 dark:via-purple-900 dark:to-[#020617]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <MotionDiv
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-8 leading-tight">
                  Let’s Build the Future of <br /> Technology Together
               </h2>
               <p className="text-blue-100 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
                  Ready to transform your ideas into reality? Our team is standing by to help you launch your next big project.
               </p>
               <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-300"
                  >
                     Contact Us Today
                  </motion.button>
               </Link>
            </MotionDiv>
         </div>
      </section>

    </div>
  );
};
