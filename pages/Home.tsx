import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, animate } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, 
  Clock, Server, Globe, Smartphone, 
  Code2, Rocket, Bot, 
  Layout, Cloud, ChevronRight, Star, ChevronLeft, Quote,
  Check, Zap, Database, CreditCard, Lock, Monitor, Laptop, Repeat,
  ShoppingCart, MessageSquare, Home as HomeIcon, Search, Terminal,
  Activity, Layers, BarChart3, Wifi, Sparkles, Gift, Snowflake, RefreshCw,
  // Add missing CheckCircle2 and DollarSign imports
  CheckCircle2, DollarSign
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Typewriter } from '../components/ui/Typewriter';
import { PROJECTS } from '../constants';
import { fetchHomePageConfig, HomePageConfig } from '../dashboard/services/api';

// --- ICON MAP HELPER ---
const ICON_MAP: Record<string, any> = {
  Brain, Globe, Shield, Activity, Zap, Smartphone, Laptop, Code2, Rocket, Bot, Layout, Cloud, Server, Database, MessageSquare
};

// --- ANIMATED COMPONENTS ---

const BackgroundSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const MotionDiv = motion.div as any;

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return <div className="absolute inset-0 bg-[#020617]" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        <MotionDiv
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ y }}
          className="absolute inset-0"
        >
          <img 
            src={images[index]} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#020617]/70 dark:bg-[#020617]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 mix-blend-overlay" />
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            y: [null, (Math.random() * -100 - 50) + "px"],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0.5]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const FestiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { 
      x: number; 
      y: number; 
      z: number; 
      size: number; 
      speedX: number; 
      speedY: number;
      opacity: number;
      isFestive: boolean;
    }[] = [];
    
    const numParticles = 150;
    const isDecember = new Date().getMonth() === 11;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
        size: Math.random() * (isDecember ? 3 : 1.5),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: isDecember ? Math.random() * 1.5 + 0.5 : (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        isFestive: isDecember && Math.random() > 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.isFestive) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'white';
        } else {
          ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity})`;
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-40 pointer-events-none" />;
};

const MagicCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={`group relative border border-slate-200 dark:border-white/10 overflow-hidden rounded-xl bg-white dark:bg-[#0f172a] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.8,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
      ease: "circOut"
    });
    return controls.stop;
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
};

const TiltCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = event.clientX - rect.left;
    const mouseYVal = event.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const sheenX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const MotionDiv = motion.div as any;

  return (
    <MotionDiv
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-1000 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 mix-blend-overlay"
           style={{
             background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
           }}
      />
      {children}
    </MotionDiv>
  );
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<HomePageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Estimator State
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [features, setFeatures] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'standard' | 'fast' | 'rush'>('standard');

  const { scrollY } = useScroll();
  const MotionDiv = motion.div as any;

  useEffect(() => {
    const load = async () => {
      const data = await fetchHomePageConfig();
      setConfig(data);
      setLoading(false);
    };
    load();

    const hour = new Date().getHours();
    const isFestive = new Date().getMonth() === 11;
    if (isFestive) {
      setGreeting('Happy Holidays');
    } else {
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    }
  }, []);

  const nextTestimonial = () => {
    if (!config) return;
    setCurrentTestimonial((prev) => (prev + 1) % config.testimonials.length);
  };

  const prevTestimonial = () => {
    if (!config) return;
    setCurrentTestimonial((prev) => (prev - 1 + config.testimonials.length) % config.testimonials.length);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const calculateEstimate = () => {
    if (!config) return 0;
    let base = 0;
    if (platform === 'web') base = config.estimator.baseWeb;
    if (platform === 'mobile') base = config.estimator.baseMobile;
    if (platform === 'both') base = config.estimator.baseBoth;

    const extras = features.reduce((acc, featId) => {
      const f = config.estimator.features.find(x => x.id === featId);
      return acc + (f?.price || 0);
    }, 0);
    
    let multiplier = 1;
    if (urgency === 'fast') multiplier = config.estimator.fastMultiplier;
    if (urgency === 'rush') multiplier = config.estimator.rushMultiplier;

    return Math.round((base + extras) * multiplier);
  };

  const toggleFeature = (feat: string) => {
    setFeatures(prev => prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]);
  };

  const handleBookProject = () => {
    const total = calculateEstimate();
    const featureLabels = features.map(fid => config?.estimator.features.find(f => f.id === fid)?.label).join(', ');
    const message = `Hi TechSafi, I used your project estimator.
    
Platform: ${platform === 'both' ? 'Web & Mobile' : platform}
Features: ${featureLabels || 'None'}
Timeline: ${urgency}
Estimated Budget: ~KES ${total.toLocaleString()}`;

    navigate('/contact', { state: { 
      subject: 'Project Inquiry', 
      message: message,
      budget: total > 500000 ? '500k+' : total > 150000 ? '150k - 500k' : '50k - 150k'
    }});
  };

  if (loading || !config) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617]">
       <RefreshCw size={48} className="text-primary animate-spin" />
    </div>
  );

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
          <BackgroundSlider images={config.hero.images} />
          <FloatingParticles />
          <FestiveBackground />
          <div className="absolute inset-0 pointer-events-none z-10">
             <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          </div>
          <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
             <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md">
               <span className="mr-2 text-lg animate-wave">{new Date().getMonth() === 11 ? '🎄' : '👋'}</span>
               <span className="text-sm font-medium text-white">{greeting}, welcome to TechSafi</span>
             </MotionDiv>
             <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display text-white mb-6">
                Building Intelligent <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                   <Typewriter words={config.hero.typewriterWords} cursorClassName="text-cyan-400" />
                </span>
             </h1>
             <p className="text-lg md:text-2xl text-slate-100 dark:text-slate-300 font-light max-w-2xl mx-auto drop-shadow-md">
                {config.hero.subtitle}
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Link to="/contact"><Button size="lg" className="bg-white text-slate-900 rounded-full font-bold px-10 py-4 shadow-2xl transition-transform hover:scale-105 border-0">Start Your Project</Button></Link>
                <Link to="/services"><Button variant="outline" size="lg" className="border-white/20 text-white rounded-full px-10 py-4 backdrop-blur-md">Explore Services <ArrowRight className="ml-2" /></Button></Link>
             </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center z-20">
             <div className="flex divide-x divide-white/10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-10 py-5">
               {config.hero.stats.map((stat, i) => (
                 <div key={i} className="px-10 text-center">
                   <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                   <div className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
                 </div>
               ))}
             </div>
          </div>
      </section>

      {/* Innovation Bento Grid */}
      <section className="py-32 bg-white dark:bg-[#050b1d] transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">Innovation at the <span className="text-purple-600">Core</span></h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg">Precision engineered intelligence across your entire infrastructure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {config.bento.map((card, i) => {
                  const Icon = ICON_MAP[card.iconName] || Globe;
                  return (
                    <MagicCard key={card.id} className={`p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                       <div className="flex flex-col h-full justify-between">
                          <div className="z-10">
                             {card.badge && <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${card.color}-100 dark:bg-${card.color}-500/20 text-${card.color}-600 dark:text-${card.color}-300 text-[10px] font-bold uppercase mb-4`}><Icon size={12} className="mr-2" /> {card.badge}</div>}
                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                             <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">{card.description}</p>
                          </div>
                          <div className={`mt-8 flex justify-end text-${card.color}-500 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`}><Icon size={120} /></div>
                       </div>
                    </MagicCard>
                  );
               })}
            </div>
         </div>
      </section>

      {/* Selected Works - Static Reference to Constant Works */}
      <section className="py-24 bg-slate-50 dark:bg-[#020617] border-y border-slate-200 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display">Selected <span className="text-blue-600">Works</span></h2>
               <Link to="/portfolio" className="text-blue-500 font-bold hover:underline flex items-center gap-2">View Full Portfolio <ArrowRight size={16} /></Link>
            </div>
            <div ref={scrollRef} onScroll={handleScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:mx-0">
               {PROJECTS.map(project => (
                  <div key={project.id} className="flex-shrink-0 w-[85vw] md:w-[420px] snap-center">
                    <MagicCard className="aspect-[4/5] cursor-pointer group relative">
                       <img src={project.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                       <div className="absolute bottom-0 p-8">
                          <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{project.category}</span>
                          <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                          <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center mt-6 group-hover:translate-x-2 transition-transform"><ArrowRight size={20} /></div>
                       </div>
                    </MagicCard>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Project Estimator */}
      <section className="py-24 bg-slate-100 dark:bg-[#050b1d] transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display">Project <span className="text-blue-600">Estimator</span></h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg mt-4">Ballpark figures based on your custom requirements.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white dark:bg-[#0f172a] p-8 rounded-3xl border border-slate-200 dark:border-white/5">
                     <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Monitor size={20} className="text-blue-500" /> Choose Platform</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { id: 'web', label: 'Web Only', icon: Laptop },
                          { id: 'mobile', label: 'Mobile App', icon: Smartphone },
                          { id: 'both', label: 'Web & Mobile', icon: Layers }
                        ].map(opt => (
                           <div key={opt.id} onClick={() => setPlatform(opt.id as any)} className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${platform === opt.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-white/5'}`}>
                              <opt.icon size={24} className={platform === opt.id ? 'text-blue-500' : 'text-slate-400'} />
                              <div className="font-bold mt-2 text-sm">{opt.label}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white dark:bg-[#0f172a] p-8 rounded-3xl border border-slate-200 dark:border-white/5">
                     <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Zap size={20} className="text-purple-500" /> Integration Features</h3>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {config.estimator.features.map(feat => (
                           <div key={feat.id} onClick={() => toggleFeature(feat.id)} className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${features.includes(feat.id) ? 'border-purple-500 bg-purple-50 dark:bg-purple-500/10 text-purple-600' : 'border-slate-200 dark:border-white/5 text-slate-500'}`}>
                              {features.includes(feat.id) ? <CheckCircle2 size={16} /> : <div className="w-4 h-4 rounded-full border border-slate-300" />}
                              <span className="text-xs font-bold uppercase">{feat.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-1 sticky top-24 h-fit">
                  <div className="bg-[#0f172a] text-white p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10"><DollarSign size={100} /></div>
                     <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-slate-400">Estimate</h3>
                     <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-xl text-slate-500">KES</span>
                        <div className="text-5xl font-black"><Counter value={calculateEstimate()} /></div>
                     </div>
                     <Button onClick={handleBookProject} className="w-full bg-blue-600 hover:bg-blue-700 py-4 font-bold rounded-xl border-0 shadow-lg shadow-blue-500/20 text-white">Send Quote Request</Button>
                     <p className="text-[10px] text-center text-slate-500 mt-4 italic">Indicative figure. Final quote subject to discovery call.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#020617] opacity-90" />
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-8">Let's Build the Future</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto">Our team is standing by to help you launch your next iconic digital ecosystem.</p>
            <Link to="/contact"><Button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-transform hover:scale-105 border-0">Contact Us Today</Button></Link>
         </div>
      </section>
    </div>
  );
};