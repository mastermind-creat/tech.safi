import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, animate } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Clock, Server, Globe, Smartphone, 
  Code2, Rocket, Bot, Layout, Cloud, ChevronRight, Star, ChevronLeft, Quote,
  Check, Zap, Database, CreditCard, Lock, Monitor, Laptop, Repeat,
  ShoppingCart, MessageSquare, Home as HomeIcon, Search, Terminal,
  Activity, Layers, BarChart3, Wifi, Sparkles, Gift, Snowflake, RefreshCw,
  CheckCircle2, DollarSign, Palette, Plus, MousePointer2, Target, Cpu, Flame, Atom
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Typewriter } from '../components/ui/Typewriter';
import { PROJECTS } from '../constants';
import { fetchHomePageConfig, HomePageConfig } from '../dashboard/services/api';

// --- ICON MAP HELPER ---
const ICON_MAP: Record<string, any> = {
  Brain, Globe, Shield, Activity, Zap, Smartphone, Laptop, Code2, Rocket, Bot, Layout, Cloud, Server, Database, MessageSquare, Palette, Layers, ShoppingCart, Target, Cpu, Flame, Atom, Search
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
          <img src={images[index]} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#020617]/85 dark:bg-[#020617]/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]" />
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

const TiltCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative w-full h-full ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const NeuralNodeCanvas = ({ animationType, color }: { animationType: string, color: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const parent = canvas.parentElement!;
    let width = (canvas.width = parent.offsetWidth);
    let height = (canvas.height = parent.offsetHeight);

    const particles: any[] = [];
    const count = 30;
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)';
      ctx.strokeStyle = color === 'purple' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(6, 182, 212, 0.1)';

      particles.forEach((p, i) => {
        if (animationType === 'orbit') {
          const time = Date.now() * 0.001;
          p.x += Math.cos(time + i) * 0.5;
          p.y += Math.sin(time + i) * 0.5;
        } else if (animationType === 'glitch') {
          if (Math.random() > 0.98) {
             p.x += (Math.random() - 0.5) * 20;
             p.y += (Math.random() - 0.5) * 20;
          }
        } else if (animationType === 'pulse') {
           p.radius = (Math.sin(Date.now() * 0.005 + i) + 2) * 1.5;
        } else {
           p.x += p.vx * 0.5;
           p.y += p.vy * 0.5;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, [animationType, color]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />;
};

const Counter = ({ value, duration = 1.5 }: { value: number, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
      ease: "circOut"
    });
    return controls.stop;
  }, [value, duration]);
  return <>{displayValue.toLocaleString()}</>;
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<HomePageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const MotionDiv = motion.div as any;

  // Multi-color transform for Discovery Pulse: Blue -> Purple -> Emerald
  const pulseColor = useTransform(
    scrollYProgress, 
    [0.4, 0.6, 0.8], 
    ['#06b6d4', '#8b5cf6', '#10b981']
  );

  useEffect(() => {
    const load = async () => {
      const data = await fetchHomePageConfig();
      setConfig(data);
      setLoading(false);
    };
    load();
  }, []);

  if (loading || !config) return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
       <RefreshCw size={64} className="text-primary animate-spin" />
    </div>
  );

  return (
    <div className="bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 selection:bg-primary/30 font-sans overflow-x-hidden">
      
      {/* --- HERO --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
        <BackgroundSlider images={config.hero.images} />
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8 md:space-y-12">
          <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[10px] md:text-xs font-bold text-white tracking-[0.3em] uppercase">
            {config.hero.badge}
          </MotionDiv>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black font-display text-white leading-[0.9] tracking-tighter text-balance">
            Future. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              <Typewriter words={config.hero.typewriterWords} />
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 px-4">
            <Link to="/contact" className="w-full sm:w-auto"><Button size="lg" className="w-full rounded-full px-12 py-5 shadow-2xl hover:scale-105 transition-transform bg-white text-dark font-black text-xl border-0">Initiate Project</Button></Link>
            <Link to="/services" className="w-full sm:w-auto"><Button variant="outline" size="lg" className="w-full border-white/20 text-white rounded-full px-12 py-5 backdrop-blur-xl hover:bg-white/10 font-bold text-xl">The Ecosystem</Button></Link>
          </div>
        </div>
      </section>

      {/* --- PARTNERS MARQUEE --- */}
      <section className="py-12 md:py-20 bg-white dark:bg-[#020617] border-y border-slate-200 dark:border-white/5 relative z-10 overflow-hidden">
        <div className="flex items-center gap-10 md:gap-16 animate-[marquee_infinite_linear] whitespace-nowrap" style={{ animationDuration: `${config.settings.marqueeSpeed}s` }}>
          {[...config.partners, ...config.partners, ...config.partners].map((p, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 md:px-10 group cursor-pointer">
              <div className="relative">
                <img src={p.logoUrl} alt={p.name} className="h-8 md:h-10 object-contain dark:invert opacity-40 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white text-[10px] px-3 py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-normal w-40 text-center shadow-2xl z-50">
                  {p.description}
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black font-display uppercase tracking-tighter dark:text-white/20 group-hover:text-primary transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          .animate-[marquee_infinite_linear] { animation: marquee 20s linear infinite; }
        `}</style>
      </section>

      {/* --- AI EFFICIENCY SHOWCASE --- */}
      <section className="py-24 md:py-40 bg-slate-50 dark:bg-[#020617] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="lg:w-1/2 space-y-8 md:space-y-10">
                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black tracking-widest uppercase">
                    <Zap size={12} className="mr-2" /> Performance Matrix
                 </div>
                 <h2 className="text-4xl md:text-7xl font-bold font-display leading-[0.9] tracking-tighter">
                    Precision <br /> <span className="text-slate-400">Engineering.</span>
                 </h2>
                 <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                    {config.aiSpeedShowcase.subtitle}
                 </p>
                 <div className="space-y-6 md:space-y-8">
                    {config.aiSpeedShowcase.metrics.map((m, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                            <span>{m.label}</span>
                            <span className="text-primary">TechSafi: {m.techsafi} {m.unit}</span>
                         </div>
                         <div className="h-1.5 md:h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden flex">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${(m.techsafi / m.traditional) * 100}%` }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                            <div className="h-full flex-1 bg-slate-200 dark:bg-white/10" />
                         </div>
                         <div className="text-[9px] text-slate-500 italic">Traditional Average: {m.traditional} {m.unit}</div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <MagicCard className="p-8 md:p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px]" />
                    <div className="text-center space-y-6 md:space-y-8 relative z-10">
                       <Activity size={100} className="text-primary animate-pulse mx-auto" />
                       <h3 className="text-3xl md:text-4xl font-bold">Latency: 0ms</h3>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                             <div className="text-2xl font-black text-primary"><Counter value={99} />%</div>
                             <div className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Uptime</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                             <div className="text-2xl font-black text-purple-500"><Counter value={10} />X</div>
                             <div className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Speed Gain</div>
                          </div>
                       </div>
                    </div>
                 </MagicCard>
              </div>
           </div>
        </div>
      </section>

      {/* --- NEURAL INFRASTRUCTURE --- */}
      <section className="py-24 md:py-40 bg-white dark:bg-[#050b1d] border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-32 space-y-6">
            <h2 className="text-4xl md:text-8xl font-black font-display tracking-tighter">Neural <span className="text-primary">Architecture</span></h2>
            <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">Proprietary logic systems driving world-class performance for your products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {config.bento.map((item, i) => (
              <MagicCard key={item.id} className={`p-8 md:p-12 relative ${i === 0 ? 'md:col-span-2' : ''}`}>
                <NeuralNodeCanvas animationType={item.animationType} color={item.color} />
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex-1">
                    <span className={`inline-block px-4 py-1 rounded-full bg-${item.color}-500/10 text-${item.color}-500 text-[10px] font-black uppercase mb-6`}>{item.badge}</span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                  <div className={`flex justify-end opacity-40 text-${item.color}-500 mt-10`}>
                    {React.createElement(ICON_MAP[item.iconName] || Zap, { size: 100, strokeWidth: 0.5 })}
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- DISCOVERY PULSE (COLOR SHIFTING) --- */}
      <section className="relative py-24 md:py-40 bg-white dark:bg-[#050b1d] overflow-hidden">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-32 space-y-6">
              <h2 className="text-4xl md:text-8xl font-black font-display tracking-tighter">
                 Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-pulse">Discovery</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-light">Precision methodology ensuring predictable success.</p>
            </div>

            <div className="relative">
               <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-white/5 -translate-x-1/2">
                  <motion.div 
                    style={{ scaleY: scrollYProgress, transformOrigin: "top", backgroundColor: pulseColor }} 
                    className="w-full h-full shadow-[0_0_40px_rgba(59,130,246,0.8)]" 
                  />
                  <MotionDiv animate={{ top: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-32 bg-gradient-to-b from-transparent via-white to-transparent blur-md opacity-60" />
               </div>

               <div className="space-y-32 md:space-y-48">
                  {config.methodology.map((item, idx) => (
                    <MotionDiv key={idx} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1 }} className={`flex flex-col md:flex-row items-center gap-12 md:gap-32 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} relative`}>
                       <div className="w-full md:w-1/2 pl-12 md:pl-0">
                          <TiltCard>
                             <MagicCard className="p-8 md:p-12 border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-700">
                                <div className="flex items-center gap-6 mb-6 md:mb-8">
                                   <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 border border-${item.color}-500/20`}>
                                      {React.createElement(ICON_MAP[item.iconName] || Search, { size: 36 })}
                                   </div>
                                   <div>
                                      <span className={`text-[10px] font-black text-${item.color}-500 uppercase tracking-widest`}>Phase 0{idx+1}</span>
                                      <h3 className="text-2xl md:text-3xl font-bold dark:text-white mt-1 tracking-tight">{item.title}</h3>
                                   </div>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg font-light leading-relaxed">{item.description}</p>
                             </MagicCard>
                          </TiltCard>
                       </div>
                       <div className="hidden md:block w-1/2"></div>
                    </MotionDiv>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- PARTNER ECHO CAROUSEL --- */}
      <section className="py-24 md:py-40 bg-white dark:bg-[#020617] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-4xl md:text-8xl font-black font-display tracking-tighter">Partner <span className="text-emerald-500">Echo</span></h2>
        </div>
        <div className="flex items-center gap-8 animate-[carousel_40s_linear_infinite] whitespace-nowrap">
          {[...config.testimonials, ...config.testimonials, ...config.testimonials].map((t, idx) => (
            <div key={idx} className="w-[300px] md:w-[450px] flex-shrink-0">
              <MagicCard className="p-8 md:p-12 h-full whitespace-normal">
                <Quote size={40} className={`text-${t.color}-500 opacity-20 mb-8`} />
                <p className="text-base md:text-xl font-light italic text-slate-300 mb-10 line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${t.color}-500/10 flex items-center justify-center font-black text-${t.color}-500`}>{t.name.charAt(0)}</div>
                  <div><div className="font-bold text-sm md:text-base">{t.name}</div><div className="text-[10px] text-slate-500 uppercase">{t.role}</div></div>
                </div>
              </MagicCard>
            </div>
          ))}
        </div>
        <style>{` @keyframes carousel { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } } `}</style>
      </section>

      {/* --- FINAL CTA (REFINE MESH) --- */}
      <section className="py-40 md:py-60 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-purple-950 opacity-100 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse z-0" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-12">
          <h2 className="text-5xl md:text-9xl font-black text-white font-display leading-[0.8] tracking-tighter">Scale Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Business.</span></h2>
          <Link to="/contact"><Button className="bg-white text-dark hover:bg-slate-200 rounded-full px-12 md:px-20 py-6 md:py-8 text-xl md:text-2xl font-black shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all hover:scale-105 border-0">Initiate Ecosystem Access</Button></Link>
        </div>
      </section>

    </div>
  );
};
