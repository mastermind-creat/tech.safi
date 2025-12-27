
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, animate } from 'framer-motion';
import {
   ArrowRight, Brain, Shield,
   Clock, Server, Globe, Smartphone,
   Code2, Rocket, Bot,
   Layout, Cloud, ChevronRight, Star, ChevronLeft, Quote,
   Check, Zap, Database, CreditCard, Lock, Monitor, Laptop, Repeat,
   ShoppingCart, MessageSquare, Home as HomeIcon, Search, Terminal,
   Activity, Layers, BarChart3, Wifi, Sparkles, Gift, Snowflake
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Typewriter } from '../components/ui/Typewriter';
import { PROJECTS } from '../constants';

// --- NEW ENHANCEMENT COMPONENTS ---

const HERO_IMAGES = [
   "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80", // AI / Neural
   "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80", // Cyber / Tech
   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80", // Innovation / Network
   "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"  // Hardware / Code
];

const BackgroundSlider = () => {
   const [index, setIndex] = useState(0);
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 800], [0, 200]);
   const MotionDiv = motion.div as any;

   useEffect(() => {
      const timer = setInterval(() => {
         setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      }, 7000);
      return () => clearInterval(timer);
   }, []);

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
                  src={HERO_IMAGES[index]}
                  alt="Hero Background"
                  className="w-full h-full object-cover"
               />
               {/* Layered Overlays for depth and readability */}
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

// --- ANIMATION COMPONENTS ---

// 1. Futuristic Star & Snowfall Field
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
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

            // Crystalline festive look
            if (p.isFestive) {
               ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
               ctx.shadowBlur = 4;
               ctx.shadowColor = 'white';
            } else {
               ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity})`;
               ctx.shadowBlur = 0;
            }

            ctx.fill();

            // Move particle
            p.x += p.speedX;
            p.y += p.speedY;

            // Reset if off-screen
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

// 2. Magic Card (Spotlight Effect)
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

// 3. Counter
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

// 4. Tilt Card
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
         style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
         }}
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
   const { scrollY } = useScroll();
   const [greeting, setGreeting] = useState('');
   const [currentTestimonial, setCurrentTestimonial] = useState(0);
   const scrollRef = useRef<HTMLDivElement>(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(true);

   // Estimator State
   const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
   const [features, setFeatures] = useState<string[]>([]);
   const [urgency, setUrgency] = useState<'standard' | 'fast' | 'rush'>('standard');

   const MotionDiv = motion.div as any;

   useEffect(() => {
      const hour = new Date().getHours();
      const month = new Date().getMonth();
      const isFestive = month === 11; // December

      if (isFestive) {
         const holidayGreetings = ['Merry Christmas', 'Happy Holidays', 'Season\'s Greetings'];
         setGreeting(holidayGreetings[Math.floor(Math.random() * holidayGreetings.length)]);
      } else {
         if (hour < 12) setGreeting('Good Morning');
         else if (hour < 18) setGreeting('Good Afternoon');
         else setGreeting('Good Evening');
      }
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

   // Works Carousel Logic
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

   // Estimator Logic
   const calculateEstimate = () => {
      let base = 0;
      if (platform === 'web') base = 50000;
      if (platform === 'mobile') base = 250000;
      if (platform === 'both') base = 450000;

      const featureCosts: Record<string, number> = {
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

   const handleBookProject = () => {
      const total = calculateEstimate();
      const message = `Hi TechSafi, I used your project estimator.
    
Platform: ${platform === 'both' ? 'Web & Mobile' : platform}
Features: ${features.join(', ') || 'None'}
Timeline: ${urgency}
Estimated Budget: ~KES ${total.toLocaleString()}

I'd like to discuss this project further.`;

      navigate('/contact', {
         state: {
            subject: 'Project Inquiry',
            message: message,
            budget: total > 500000 ? '500k+' : total > 150000 ? '150k - 500k' : '50k - 150k'
         }
      });
   };

   return (
      <div className="overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 transition-colors duration-300">

         {/* --- HERO SECTION --- */}
         <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">

            <BackgroundSlider />
            <FloatingParticles />
            <FestiveBackground />

            {/* Dynamic Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
               <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
               <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
               {/* Subtle Festive Gold Blob */}
               {new Date().getMonth() === 11 && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
               )}
            </div>

            <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
               {/* Dynamic Greeting Badge */}
               <MotionDiv
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-lg group cursor-default hover:border-cyan-500/30 transition-colors"
               >
                  <span className="mr-2 text-base sm:text-lg animate-wave">
                     {new Date().getMonth() === 11 ? '🎄' : '👋'}
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-white dark:text-cyan-100">
                     {greeting}, welcome to TechSafi
                  </span>
               </MotionDiv>

               {/* Headline */}
               <MotionDiv
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
               >
                  <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold font-display text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                     Building Intelligent <br className="hidden md:block" />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                        <Typewriter
                           words={
                              new Date().getMonth() === 11
                                 ? ['Digital Solutions', 'AI Ecosystems', 'Future Tech', 'Holiday Magic']
                                 : ['Digital Solutions', 'AI Ecosystems', 'Future Tech']
                           }
                           cursorClassName="text-cyan-400"
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
                  <p className="text-base sm:text-lg md:text-2xl text-slate-100 dark:text-slate-300 font-light leading-relaxed drop-shadow-md px-4 sm:px-0">
                     Empowering businesses with AI-enhanced software, custom mobile apps, and intelligent automation tailored for the modern digital era.
                  </p>
               </MotionDiv>

               {/* CTAs */}
               <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 px-4"
               >
                  <Link to="/contact" className="w-full sm:w-auto">
                     <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-0 font-bold py-4 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 active:scale-95">
                        Start Your Project
                     </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                     <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold py-4 px-10 text-lg rounded-full backdrop-blur-md active:scale-95">
                        Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                  </Link>
               </MotionDiv>
            </div>

            {/* Floating Stats */}
            <MotionDiv
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="absolute bottom-10 left-0 right-0 z-20 px-4"
            >
               <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-5 shadow-2xl">
                  {[
                     { label: "Projects Delivered", value: "50+" },
                     { label: "Client Satisfaction", value: "98%" },
                     { label: "Years Innovation", value: "5+" },
                     { label: "Countries Served", value: "3+" }
                  ].map((stat, i) => (
                     <div key={i} className="px-4 md:px-10 text-center">
                        <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </MotionDiv>
         </section>

         {/* --- INFINITE CLIENT MARQUEE --- */}
         <section className="py-12 bg-white dark:bg-[#050b1d] border-b border-slate-200 dark:border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
               <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Trusted By Industry Leaders</p>
            </div>
            <div className="relative flex overflow-x-hidden group">
               <div className="animate-marquee whitespace-nowrap flex items-center space-x-20">
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
                           <div key={idx} className="flex items-center space-x-3 text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
                              <brand.icon size={24} />
                              <span className="text-xl font-bold font-display">{brand.name}</span>
                           </div>
                        ))}
                     </React.Fragment>
                  ))}
               </div>

               <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-20">
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
                           <div key={idx} className="flex items-center space-x-3 text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
                              <brand.icon size={24} />
                              <span className="text-xl font-bold font-display">{brand.name}</span>
                           </div>
                        ))}
                     </React.Fragment>
                  ))}
               </div>

               <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#050b1d] to-transparent pointer-events-none"></div>
               <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#050b1d] to-transparent pointer-events-none"></div>
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
            animation: marquee 60s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 60s linear infinite;
          }
        `}</style>
         </section>

         {/* --- SERVICES PREVIEW --- */}
         <section className="py-24 relative z-10 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
               >
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
                     Intelligent <span className="text-cyan-500 dark:text-cyan-400">Services</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                     We combine cutting-edge technology with strategic design to build solutions that drive real business growth.
                  </p>
               </MotionDiv>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                     >
                        <div className="group relative h-full p-8 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-3xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg dark:shadow-none overflow-hidden">
                           <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                           <div className={`w-14 h-14 rounded-2xl bg-${service.color}-50 dark:bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-600 dark:text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-${service.color}-100 dark:border-${service.color}-500/20`}>
                              <service.icon size={28} />
                           </div>

                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{service.title}</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                              {service.desc}
                           </p>

                           <Link to="/services" className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-700 dark:hover:text-${service.color}-300 relative z-10 group-hover:translate-x-1 transition-transform`}>
                              Learn More <ChevronRight size={14} className="ml-1" />
                           </Link>
                        </div>
                     </MotionDiv>
                  ))}
               </div>
            </div>
         </section>

         {/* --- WORKFLOW PULSE --- */}
         <section className="py-16 bg-slate-100 dark:bg-[#0a0f1d] border-y border-slate-200 dark:border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 dark:bg-white/10 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-y-1/2 animate-[pulseMove_4s_linear_infinite]"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative z-10">
                     {[
                        { step: "01", title: "Discovery", icon: Search },
                        { step: "02", title: "Development", icon: Code2 },
                        { step: "03", title: "Launch", icon: Rocket }
                     ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                           <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-[#0f172a] border-4 border-slate-200 dark:border-[#1e293b] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-500 z-10 shadow-lg">
                              <s.icon size={24} />
                           </div>
                           <div className="mt-4 md:mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{s.step}</div>
                              <div className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{s.title}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <style>{`
            @keyframes pulseMove {
               0% { left: -10%; opacity: 0; }
               20% { opacity: 1; }
               80% { opacity: 1; }
               100% { left: 110%; opacity: 0; }
            }
         `}</style>
         </section>

         {/* --- INNOVATION BENTO GRID --- */}
         <section className="py-32 bg-white dark:bg-[#050b1d] overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
               >
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                     Innovation at the <span className="text-purple-600 dark:text-purple-500">Core</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                     Our ecosystem is built on pillars of speed, security, intelligence, and scalability.
                  </p>
               </MotionDiv>

               <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                  {/* 1. AI Integration */}
                  <MagicCard className="md:col-span-2 md:row-span-1 p-8 flex flex-col md:flex-row items-center justify-between group">
                     <div className="md:w-1/2 z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                           <Brain size={12} className="mr-2" /> Artificial Intelligence
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Neural Processing</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Our solutions embed advanced AI models to predict, automate, and optimize your business logic in real-time.</p>
                     </div>
                     <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0 relative">
                        <div className="relative w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
                           <Brain size={48} className="text-white" />
                           <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping"></div>
                        </div>
                     </div>
                  </MagicCard>

                  {/* 2. Global Scale */}
                  <MagicCard className="md:col-span-1 md:row-span-2 p-8 flex flex-col relative overflow-hidden">
                     <div className="z-10">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                           <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Global Scale</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">Deploy anywhere with our edge-optimized architecture. Low latency, high availability.</p>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-10 dark:opacity-20 bg-center"></div>
                     <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                     <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700"></div>
                     <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-300"></div>
                  </MagicCard>

                  {/* 3. Security */}
                  <MagicCard className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                           <Shield size={24} />
                        </div>
                        <div className="text-emerald-500 text-xs font-bold uppercase animate-pulse">Secure</div>
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bank-Grade Security</h3>
                     <div className="mt-4 h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-50 w-[90%] animate-[width_2s_ease-in-out_infinite]"></div>
                     </div>
                  </MagicCard>

                  {/* 4. Real-time Sync */}
                  <MagicCard className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-center">
                     <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                           <Activity size={24} />
                        </div>
                        <Wifi size={16} className="text-orange-500" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white">Real-time Sync</h3>
                     <div className="mt-4 flex gap-1">
                        <div className="w-2 h-8 bg-orange-500/40 rounded-sm animate-pulse"></div>
                        <div className="w-2 h-5 bg-orange-500/60 rounded-sm animate-pulse delay-75"></div>
                        <div className="w-2 h-10 bg-orange-500 rounded-sm animate-pulse delay-150"></div>
                        <div className="w-2 h-6 bg-orange-500/50 rounded-sm animate-pulse delay-300"></div>
                     </div>
                  </MagicCard>
               </div>
            </div>
         </section>

         {/* --- HORIZONTAL SELECTED WORKS --- */}
         <section className="py-24 relative bg-slate-50 dark:bg-[#020617] transition-colors duration-300 border-y border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <MotionDiv
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                     <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                        <Zap size={12} className="mr-2" /> Showcase
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display">
                        Selected <span className="text-blue-600 dark:text-blue-500">Works</span>
                     </h2>
                  </MotionDiv>

                  <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
                     <div className="flex gap-2 mr-4 md:mr-0">
                        <button
                           onClick={() => scroll('left')}
                           disabled={!canScrollLeft}
                           className={`p-3 rounded-full border transition-all active:scale-90 ${canScrollLeft ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-lg shadow-blue-500/20' : 'border-slate-200 text-slate-300 dark:border-white/5 cursor-not-allowed opacity-50'}`}
                           aria-label="Scroll Left"
                        >
                           <ChevronLeft size={20} />
                        </button>
                        <button
                           onClick={() => scroll('right')}
                           disabled={!canScrollRight}
                           className={`p-3 rounded-full border transition-all active:scale-90 ${canScrollRight ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-lg shadow-blue-500/20' : 'border-slate-200 text-slate-300 dark:border-white/5 cursor-not-allowed opacity-50'}`}
                           aria-label="Scroll Right"
                        >
                           <ChevronRight size={20} />
                        </button>
                     </div>
                     <Link to="/portfolio">
                        <Button variant="ghost" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group border border-slate-200 dark:border-white/10 rounded-full px-6">
                           View All <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                     </Link>
                  </div>
               </div>

               <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 md:mx-0 md:px-0"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                  {PROJECTS.map((project, idx) => (
                     <div key={project.id} className="flex-shrink-0 w-[85vw] md:w-[420px] snap-center">
                        <MagicCard className="aspect-[4/5] cursor-pointer group">
                           <div className="absolute inset-0">
                              <img
                                 src={project.image}
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                           </div>

                           <div className="absolute top-6 left-6 z-10">
                              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                                 {project.category}
                              </span>
                           </div>

                           <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                              <p className="text-slate-200 text-xs sm:text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                 {project.description}
                              </p>

                              <div className="flex items-center justify-between border-t border-white/10 pt-4 sm:pt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                                 <div className="flex items-center text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                    {React.createElement(project.stats.icon, { size: 14, className: "mr-2" })}
                                    {project.stats.value} {project.stats.label}
                                 </div>
                                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <ArrowRight size={18} />
                                 </div>
                              </div>
                           </div>
                        </MagicCard>
                     </div>
                  ))}
               </div>

               {/* Scroll Progress Indicator */}
               <div className="mt-8 h-1 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                     className="h-full bg-blue-600"
                     initial={{ width: "0%" }}
                     animate={{
                        width: scrollRef.current
                           ? `${(scrollRef.current.scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100}%`
                           : "0%"
                     }}
                  />
               </div>
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
                           <Quote size={32} className={`text-${testimonials[currentTestimonial].bg}-500 mx-auto mb-6 opacity-50 md:size-10`} />
                           <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light italic mb-8 leading-relaxed">
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
         <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 perspective-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
               >
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">
                     Why Leading Companies <br /><span className="text-emerald-500 dark:text-emerald-400">Choose TechSafi</span>
                  </h2>
               </MotionDiv>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: Rocket, title: "Fast Delivery", desc: "Agile methodologies that ensure rapid deployment without compromising quality." },
                     { icon: Brain, title: "AI-Driven", desc: "We integrate intelligence into every layer of development for smarter solutions." },
                     { icon: Shield, title: "Bank-Grade Security", desc: "Advanced encryption and security protocols to protect your business data." },
                     { icon: Server, title: "Scalable Architecture", desc: "Systems built to grow with your business, handling millions of users effortlessly." }
                  ].map((item, idx) => (
                     <TiltCard key={idx} className="h-full">
                        <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-8 h-full shadow-lg dark:shadow-2xl">
                           <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-[#1e293b] flex items-center justify-center text-slate-700 dark:text-white mb-6 group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                              <item.icon size={28} />
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {item.desc}
                           </p>
                        </div>
                     </TiltCard>
                  ))}
               </div>
            </div>
         </section>

         {/* --- INTERACTIVE PROJECT ESTIMATOR --- */}
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
                        <div className="flex justify-between mb-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                           <span className={urgency === 'standard' ? 'text-orange-500 font-bold' : ''}>Standard</span>
                           <span className={urgency === 'fast' ? 'text-orange-500 font-bold' : ''}>Fast Track (+25%)</span>
                           <span className={urgency === 'rush' ? 'text-orange-500 font-bold' : ''}>Rush (+50%)</span>
                        </div>
                        <div className="px-1">
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
                  </div>

                  {/* Total Estimate Card */}
                  <div className="lg:col-span-1">
                     <div className="sticky top-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-[#0f172a] dark:to-[#0f172a] text-white rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-100 dark:opacity-0 transition-opacity duration-300 z-0"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"></div>

                        <div className="relative z-10">
                           <h3 className="text-lg font-bold text-slate-200 mb-6 uppercase tracking-wider">Estimated Investment</h3>

                           <div className="flex items-start mb-8">
                              <span className="text-2xl mt-1 text-slate-400 mr-2">KES</span>
                              <div className="text-5xl font-display font-bold text-white">
                                 <Counter value={calculateEstimate()} />
                              </div>
                           </div>

                           <div className="space-y-4 mb-8">
                              <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                                 <span>Platform</span>
                                 <span className="text-white capitalize">{platform === 'both' ? 'Web & Mobile' : platform}</span>
                              </div>
                              <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                                 <span>Features</span>
                                 <span className="text-white">{features.length} selected</span>
                              </div>
                              <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                                 <span>Timeline</span>
                                 <span className="text-white capitalize">{urgency}</span>
                              </div>
                           </div>

                           <Button
                              onClick={handleBookProject}
                              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 py-4 font-bold text-lg shadow-lg shadow-blue-500/25 border-0 text-white"
                           >
                              Send Quote Request
                           </Button>
                           <p className="text-[10px] text-center text-slate-400 mt-4">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
               >
                  {[
                     { val: "50+", label: "Projects Completed", color: "text-blue-600 dark:text-blue-400" },
                     { val: "90%", label: "Client Retention", color: "text-purple-600 dark:text-purple-400" },
                     { val: "15+", label: "AI Solutions", color: "text-pink-600 dark:text-pink-400" },
                     { val: "24/7", label: "Support Active", color: "text-emerald-600 dark:text-emerald-400" }
                  ].map((stat, idx) => (
                     <div key={idx}>
                        <div className={`text-3xl sm:text-4xl md:text-6xl font-bold ${stat.color} font-display mb-2 drop-shadow-lg`}>
                           {stat.val}
                        </div>
                        <div className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                           {stat.label}
                        </div>
                     </div>
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
                  <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-bold text-white font-display mb-8 leading-[1.1]">
                     Let’s Build the Future of <br /> Technology Together
                  </h2>
                  <p className="text-blue-100 text-base md:text-xl mb-12 font-light max-w-2xl mx-auto px-4">
                     Ready to transform your ideas into reality? Our team is standing by to help you launch your next big project.
                  </p>
                  <Link to="/contact">
                     <Button
                        className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
                     >
                        Contact Us Today
                     </Button>
                  </Link>
               </MotionDiv>
            </div>
         </section>

      </div>
   );
};