import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, animate } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Clock, Server, Globe, Smartphone, 
  Code2, Rocket, Bot, Layout, Cloud, ChevronRight, Star, ChevronLeft, Quote,
  Check, Zap, Database, CreditCard, Lock, Monitor, Laptop, Repeat,
  ShoppingCart, MessageSquare, Home as HomeIcon, Search, Terminal,
  Activity, Layers, BarChart3, Wifi, Sparkles, Gift, Snowflake, RefreshCw,
  CheckCircle2, DollarSign, Palette, Plus
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Typewriter } from '../components/ui/Typewriter';
import { PROJECTS } from '../constants';
import { fetchHomePageConfig, HomePageConfig } from '../dashboard/services/api';

// --- ICON MAP HELPER ---
const ICON_MAP: Record<string, any> = {
  Brain, Globe, Shield, Activity, Zap, Smartphone, Laptop, Code2, Rocket, Bot, Layout, Cloud, Server, Database, MessageSquare, Palette, Layers, ShoppingCart
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
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
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
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
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
  const MotionDiv = motion.div as any;

  return (
    <MotionDiv
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-1000 ${className}`}
    >
      {children}
    </MotionDiv>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
      ease: "circOut"
    });
    return controls.stop;
  }, [value]);
  return <>{displayValue.toLocaleString()}</>;
};

const FestiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particles: any[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 1.5 + 0.5,
        size: Math.random() * 2 + 1
      });
    }
    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > height) p.y = -10;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-[5] pointer-events-none opacity-20" />;
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<HomePageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [features, setFeatures] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const MotionDiv = motion.div as any;

  useEffect(() => {
    const load = async () => {
      const data = await fetchHomePageConfig();
      setConfig(data);
      setLoading(false);
    };
    load();
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const calculateEstimate = () => {
    if (!config) return 0;
    let base = platform === 'web' ? config.estimator.baseWeb : platform === 'mobile' ? config.estimator.baseMobile : config.estimator.baseBoth;
    const extras = features.reduce((acc, fId) => acc + (config.estimator.features.find(x => x.id === fId)?.price || 0), 0);
    return base + extras;
  };

  if (loading || !config) return <div className="min-h-screen flex items-center justify-center bg-dark"><RefreshCw size={48} className="text-primary animate-spin" /></div>;

  return (
    <div className="bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200">
      
      {/* --- HERO --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
        <BackgroundSlider images={config.hero.images} />
        <FestiveBackground />
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md">
            <span className="text-sm font-medium text-white tracking-wide uppercase">{greeting}, welcome to TechSafi</span>
          </MotionDiv>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display text-white leading-tight">
            Next-Gen <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              <Typewriter words={config.hero.typewriterWords} />
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-100 dark:text-slate-300 font-light max-w-3xl mx-auto drop-shadow-md">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link to="/contact"><Button size="lg" className="rounded-full px-10 py-4 shadow-2xl hover:scale-105 transition-transform">Get Started Today</Button></Link>
            <Link to="/services"><Button variant="outline" size="lg" className="border-white/20 text-white rounded-full px-10 py-4 backdrop-blur-md hover:bg-white/10">The Ecosystem</Button></Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center z-10">
          <div className="flex divide-x divide-white/10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4">
            {config.hero.stats.map((stat, i) => (
              <div key={i} className="px-8 text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS MARQUEE --- */}
      <section className="py-12 bg-white dark:bg-[#020617] border-y border-slate-200 dark:border-white/5 relative z-10 overflow-hidden">
        <div className="flex items-center gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...config.partners, ...config.partners, ...config.partners].map((p, idx) => (
            <div key={idx} className="flex items-center gap-4 px-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
              <img src={p.logoUrl} alt={p.name} className="h-8 object-contain dark:invert" />
              <span className="text-xl font-bold font-display uppercase tracking-tight dark:text-white">{p.name}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }`}</style>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 bg-slate-50 dark:bg-[#020617] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Core <span className="text-primary">Ecosystem</span></h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Full-cycle software engineering from rapid prototyping to enterprise scale.</p>
            </div>
            <Link to="/services"><Button variant="outline" className="rounded-full">All Solutions <ArrowRight size={16} className="ml-2" /></Button></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.servicesPreview.map((svc) => {
              const Icon = ICON_MAP[svc.iconName] || Globe;
              return (
                <TiltCard key={svc.id}>
                  <MagicCard className="p-10 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-${svc.color}-500/10 flex items-center justify-center text-${svc.color}-500 mb-8`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">{svc.description}</p>
                    <Link to="/services" className="text-xs font-black text-primary flex items-center gap-2 uppercase tracking-widest group">
                      Explore Technicals <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagicCard>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- INNOVATION BENTO --- */}
      <section className="py-32 bg-white dark:bg-[#050b1d] border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Neural <span className="text-secondary">Infrastructure</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Proprietary logic systems driving next-generation performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.bento.map((item, i) => {
              const Icon = ICON_MAP[item.iconName] || Zap;
              return (
                <MagicCard key={item.id} className={`p-10 ${i === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      {item.badge && <span className={`inline-block px-3 py-1 rounded-full bg-${item.color}-500/10 text-${item.color}-500 text-[10px] font-black uppercase mb-6`}>{item.badge}</span>}
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className={`flex justify-end opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 text-${item.color}-500`}>
                      <Icon size={120} strokeWidth={1} />
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- ESTIMATOR --- */}
      <section className="py-32 bg-slate-100 dark:bg-[#020617] relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold font-display mb-4">Project <span className="text-primary">Estimator</span></h2>
            <p className="text-slate-500">Live logic-based ballpark calculation.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-[#0f172a] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Monitor size={24} className="text-primary" /> Target Platform</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {['web', 'mobile', 'both'].map((type) => (
                    <div key={type} onClick={() => setPlatform(type as any)} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${platform === type ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                      <div className={`mb-4 inline-flex items-center justify-center ${platform === type ? 'text-primary' : 'text-slate-400'}`}>
                        {type === 'web' ? <Laptop size={32} /> : type === 'mobile' ? <Smartphone size={32} /> : <Layers size={32} />}
                      </div>
                      <div className="font-bold uppercase text-xs tracking-widest">{type === 'both' ? 'Web + App' : type}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-[#0f172a] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Zap size={24} className="text-secondary" /> Functional Modules</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {config.estimator.features.map((f) => (
                    <button key={f.id} onClick={() => setFeatures(prev => prev.includes(f.id) ? prev.filter(id => id !== f.id) : [...prev, f.id])} className={`p-4 rounded-xl border text-left transition-all ${features.includes(f.id) ? 'bg-secondary text-white border-secondary shadow-lg' : 'bg-slate-50 dark:bg-white/5 border-transparent text-slate-500'}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-tighter">{f.label}</span>
                        {features.includes(f.id) ? <Check size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-10 rounded-[2.5rem] bg-[#020617] dark:bg-primary/5 border border-primary/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><DollarSign size={120} /></div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Estimate Matrix</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-2xl text-slate-500">KES</span>
                  <div className="text-6xl font-black text-white"><Counter value={calculateEstimate()} /></div>
                </div>
                <Button onClick={() => navigate('/contact', { state: { subject: 'Project Inquiry' } })} className="w-full h-14 rounded-2xl font-bold text-lg">Send Quote Request</Button>
                <p className="text-[10px] text-center text-slate-500 mt-6 italic">Subject to final technical discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-32 bg-white dark:bg-[#020617] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Executive <span className="text-emerald-500">Success</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <MagicCard key={t.id} className="p-10">
                <Quote size={40} className={`text-${t.color}-500 opacity-20 mb-8`} />
                <p className="text-xl italic font-light leading-relaxed mb-10 text-slate-600 dark:text-slate-300">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${t.color}-500/10 flex items-center justify-center font-black text-${t.color}-500`}>{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-7xl font-bold text-white font-display mb-10 leading-tight">Ready to Engineer <br /> the Future?</h2>
          <Link to="/contact"><Button className="bg-white text-dark hover:bg-slate-200 rounded-full px-12 py-5 text-xl font-bold shadow-2xl">Contact Us Today</Button></Link>
        </div>
      </section>

    </div>
  );
};