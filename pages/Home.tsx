
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, animate, useMotionValue } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, 
  Clock, Server, Globe, Smartphone, 
  Code2, Rocket, Bot, 
  Layout, Cloud, ChevronRight, Star, ChevronLeft, Quote,
  Check, Zap, Database, CreditCard, Lock, Monitor, Laptop, Repeat,
  ShoppingCart, MessageSquare, Home as HomeIcon
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

// Counter Component for Price
const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
      ease: "circOut"
    });
    return controls.stop;
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
};

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const [greeting, setGreeting] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Estimator State
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [features, setFeatures] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'standard' | 'fast' | 'rush'>('standard');

  const MotionDiv = motion.div as any;
  const MotionButton = motion.button as any;

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const testimonials = [
    { name: "James D.", role: "CTO, RetailTech", text: "TechSafi's AI recommendation engine transformed our e-commerce platform. Conversion rates increased by 34% in three months.", bg: "blue" },
    { name: "Sarah M.", role: "Ops Director, HealthPlus", text: "The diagnostic system TechSafi developed has significantly improved patient outcomes while reducing diagnostic time by over 60%.", bg: "purple" },
    { name: "Robert K.", role: "CEO, Manufacturing Pro", text: "Predictive maintenance saved us millions. Their expertise in both AI and manufacturing infrastructure is unmatched.", bg: "emerald" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Estimator Logic
  const calculateEstimate = () => {
    let base = 0;
    if (platform === 'web') base = 50000;
    if (platform === 'mobile') base = 250000;
    if (platform === 'both') base = 450000;

    const featureCosts:Record<string, number> = {
      'ai': 100000,
      'auth': 30000,
      'payments': 40000,
      'cms': 50000,
      'analytics': 30000,
      'chat': 60000
    };

    let extras = features.reduce((acc, feat) => acc + (featureCosts[feat] || 0), 0);
    
    let multiplier = 1;
    if (urgency === 'fast') multiplier = 1.25;
    if (urgency === 'rush') multiplier = 1.5;

    return Math.round((base + extras) * multiplier);
  };

  const toggleFeature = (feat: string) => {
    setFeatures(prev => prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]);
  };

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
          
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse-slow"></div>
             <MotionDiv 
               style={{ y: y1, x: -100 }}
               className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
             />
             <MotionDiv 
               style={{ y: y2, x: 100 }}
               className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
             />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] dark:opacity-[0.03]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
             {/* Dynamic Greeting Badge */}
             <MotionDiv 
               initial={{ opacity: 0, y: -20 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.6 }}
               className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-lg group cursor-default"
             >
               <span className="mr-2 text-lg">👋</span>
               <span className="text-sm font-medium tracking-wide text-slate-700 dark:text-cyan-100">
                 {greeting}, welcome to TechSafi
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
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-500/20 border-0 text-white font-bold py-4 px-8 text-lg rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
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

          {/* Floating Elements / Stats */}
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

      {/* --- INFINITE CLIENT MARQUEE (NEW) --- */}
      <section className="py-10 bg-white dark:bg-[#050b1d] border-b border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
           <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Trusted By Industry Leaders</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
           <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
              {[...Array(2)].map((_, i) => (
                 <React.Fragment key={i}>
                    {[
                      { name: "Google", icon: Globe },
                      { name: "Amazon", icon: ShoppingCart },
                      { name: "Microsoft", icon: Monitor },
                      { name: "Spotify", icon: Zap },
                      { name: "Slack", icon: MessageSquare },
                      { name: "Airbnb", icon: HomeIcon },
                      { name: "Uber", icon: Smartphone },
                      { name: "Netflix", icon: Repeat }
                    ].map((brand, idx) => (
                       <div key={idx} className="flex items-center space-x-2 text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer mx-8">
                          <brand.icon size={28} />
                          <span className="text-xl font-bold font-display">{brand.name}</span>
                       </div>
                    ))}
                 </React.Fragment>
              ))}
           </div>
           
           {/* Clone for seamless loop */}
           <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16">
              {[...Array(2)].map((_, i) => (
                 <React.Fragment key={i}>
                    {[
                      { name: "Google", icon: Globe },
                      { name: "Amazon", icon: ShoppingCart },
                      { name: "Microsoft", icon: Monitor },
                      { name: "Spotify", icon: Zap },
                      { name: "Slack", icon: MessageSquare },
                      { name: "Airbnb", icon: HomeIcon },
                      { name: "Uber", icon: Smartphone },
                      { name: "Netflix", icon: Repeat }
                    ].map((brand, idx) => (
                       <div key={idx} className="flex items-center space-x-2 text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer mx-8">
                          <brand.icon size={28} />
                          <span className="text-xl font-bold font-display">{brand.name}</span>
                       </div>
                    ))}
                 </React.Fragment>
              ))}
           </div>
           
           {/* Fade Masks */}
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050b1d] to-transparent pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050b1d] to-transparent pointer-events-none"></div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 40s linear infinite;
          }
        `}</style>
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
                      <MotionDiv
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        <service.icon size={28} />
                      </MotionDiv>
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
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
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
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative"
               >
                  <div className="relative aspect-square md:aspect-[4/3] bg-slate-50 dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center shadow-2xl dark:shadow-none group">
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
                     {/* Hover Interaction Overlay */}
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <Link to="/company" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                           Meet The Team
                        </Link>
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

      {/* --- TESTIMONIALS CAROUSEL --- */}
      <section className="py-24 bg-white dark:bg-[#050b1d] border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                  Success <span className="text-emerald-500">Stories</span>
               </h2>
            </MotionDiv>

            <div className="relative max-w-4xl mx-auto">
               <div className="overflow-hidden relative min-h-[300px]">
                  <AnimatePresence mode="wait">
                     <MotionDiv
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 md:p-12 text-center"
                     >
                        <Quote size={40} className={`text-${testimonials[currentTestimonial].bg}-500 mx-auto mb-6 opacity-50`} />
                        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light italic mb-8 leading-relaxed">
                           "{testimonials[currentTestimonial].text}"
                        </p>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">{testimonials[currentTestimonial].name}</h4>
                           <p className={`text-sm text-${testimonials[currentTestimonial].bg}-600 dark:text-${testimonials[currentTestimonial].bg}-400 font-medium`}>
                              {testimonials[currentTestimonial].role}
                           </p>
                        </div>
                     </MotionDiv>
                  </AnimatePresence>
               </div>

               {/* Controls */}
               <div className="flex justify-center gap-4 mt-8">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                     <ChevronLeft size={24} className="text-slate-600 dark:text-slate-400" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                     <ChevronRight size={24} className="text-slate-600 dark:text-slate-400" />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
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
                    className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group shadow-lg dark:shadow-none hover:-translate-y-1 duration-300"
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

      {/* --- INTERACTIVE PROJECT ESTIMATOR (NEW) --- */}
      <section className="py-24 bg-slate-100 dark:bg-[#050b1d] border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                  Estimate Your <span className="text-blue-600 dark:text-blue-500">Project</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg">Build your custom package and get an instant ballpark figure.</p>
            </MotionDiv>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Controls */}
               <div className="lg:col-span-2 space-y-8">
                  {/* Platform Selector */}
                  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-sm">
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center"><Globe size={20} className="mr-2 text-blue-500" /> Platform</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { id: 'web', label: 'Web Only', icon: Laptop, price: '50k+' },
                          { id: 'mobile', label: 'Mobile App', icon: Smartphone, price: '250k+' },
                          { id: 'both', label: 'Web & Mobile', icon: Layout, price: '450k+' }
                        ].map((opt) => (
                           <div 
                             key={opt.id}
                             onClick={() => setPlatform(opt.id as any)}
                             className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${platform === opt.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-white/20'}`}
                           >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${platform === opt.id ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
                                 <opt.icon size={20} />
                              </div>
                              <div className="font-bold text-slate-900 dark:text-white">{opt.label}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Starts at {opt.price}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Feature Toggles */}
                  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-sm">
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center"><Code2 size={20} className="mr-2 text-purple-500" /> Add-on Features</h3>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[
                          { id: 'ai', label: 'AI Integration', icon: Brain },
                          { id: 'auth', label: 'User Auth', icon: Lock },
                          { id: 'payments', label: 'Payments', icon: CreditCard },
                          { id: 'cms', label: 'Custom CMS', icon: Database },
                          { id: 'analytics', label: 'Analytics', icon: Star },
                          { id: 'chat', label: 'Live Chat', icon: MessageSquare }
                        ].map((feat) => (
                           <div 
                             key={feat.id}
                             onClick={() => toggleFeature(feat.id)}
                             className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${features.includes(feat.id) ? 'border-purple-500 bg-purple-50 dark:bg-purple-500/10' : 'border-slate-200 dark:border-white/10 hover:border-purple-300'}`}
                           >
                              <div className={`mr-3 ${features.includes(feat.id) ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400'}`}>
                                 <feat.icon size={18} />
                              </div>
                              <span className={`text-sm font-medium ${features.includes(feat.id) ? 'text-purple-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>{feat.label}</span>
                              {features.includes(feat.id) && <Check size={16} className="ml-auto text-purple-500" />}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Urgency Slider */}
                  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-sm">
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center"><Clock size={20} className="mr-2 text-orange-500" /> Timeline Urgency</h3>
                     <div className="flex justify-between mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <span className={urgency === 'standard' ? 'text-orange-500 font-bold' : ''}>Standard</span>
                        <span className={urgency === 'fast' ? 'text-orange-500 font-bold' : ''}>Fast Track (+25%)</span>
                        <span className={urgency === 'rush' ? 'text-orange-500 font-bold' : ''}>Rush (+50%)</span>
                     </div>
                     <input 
                       type="range" 
                       min="0" 
                       max="2" 
                       step="1" 
                       className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                       onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setUrgency(val === 0 ? 'standard' : val === 1 ? 'fast' : 'rush');
                       }}
                     />
                  </div>
               </div>

               {/* Total Estimate Card */}
               <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-slate-900 dark:bg-[#0f172a] rounded-3xl p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                     <div className="relative z-10">
                        <h3 className="text-lg font-bold text-slate-300 mb-6 uppercase tracking-wider">Estimated Investment</h3>
                        
                        <div className="flex items-start mb-8">
                           <span className="text-2xl mt-1 text-slate-400 mr-2">KES</span>
                           <div className="text-5xl font-display font-bold text-white">
                              <Counter value={calculateEstimate()} />
                           </div>
                        </div>

                        <div className="space-y-4 mb-8">
                           <div className="flex justify-between text-sm text-slate-400 border-b border-white/10 pb-2">
                              <span>Platform</span>
                              <span className="text-white capitalize">{platform === 'both' ? 'Web & Mobile' : platform}</span>
                           </div>
                           <div className="flex justify-between text-sm text-slate-400 border-b border-white/10 pb-2">
                              <span>Features</span>
                              <span className="text-white">{features.length} selected</span>
                           </div>
                           <div className="flex justify-between text-sm text-slate-400 border-b border-white/10 pb-2">
                              <span>Timeline</span>
                              <span className="text-white capitalize">{urgency}</span>
                           </div>
                        </div>

                        <Link to="/contact" className="block">
                           <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 py-4 font-bold text-lg shadow-lg shadow-blue-500/25">
                              Book This Project
                           </Button>
                        </Link>
                        <p className="text-[10px] text-center text-slate-500 mt-4">
                           *Estimate is indicative. Final quote provided after consultation.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
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
                  <MotionButton 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-300"
                  >
                     Contact Us Today
                  </MotionButton>
               </Link>
            </MotionDiv>
         </div>
      </section>

    </div>
  );
};
