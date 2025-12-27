
import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Laptop, Smartphone, Palette, Cloud, BarChart3, Headphones,
  Layers, CreditCard, Banknote, Wrench, Sliders, Users,
  CheckCircle2, ArrowRight, Code2, Database, ShieldCheck,
  Search, ClipboardList, Rocket, Calendar, DollarSign,
  Server, Globe, Cpu, Terminal, Shield, Zap, MousePointer2, Brain,
  Anchor, Box, Flame, LayoutGrid, Share2, Smile, Bot, Atom, Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useRef } from 'react';

// --- ANIMATED COMPONENTS ---

const PerspectiveGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-[#020617] dark:via-transparent dark:to-transparent z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] animate-[grid-move_20s_linear_infinite]"
      >
      </motion.div>
      <style>{`
        @keyframes grid-move {
          0% { transform: rotateX(60deg) translateY(0); }
          100% { transform: rotateX(60deg) translateY(40px); }
        }
      `}</style>
    </div>
  );
};

const HeroBackgroundLoop = () => {
  const keywords = ["WEB DEVELOPMENT", "MOBILE APPS", "AI SOLUTIONS", "CLOUD INFRA", "UI/UX DESIGN", "CYBERSECURITY", "BLOCKCHAIN", "IOT", "BIG DATA", "DEVOPS", "API INTEGRATION", "SAAS"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.04]">
      <div className="absolute top-1/4 left-[-10%] w-[120%] rotate-[-5deg]">
        <div className="flex whitespace-nowrap animate-marquee-infinite text-[6rem] md:text-[10rem] font-black font-display text-slate-900 dark:text-white leading-none">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {keywords.map((word, wIdx) => (
                <span key={`${i}-${wIdx}`} className="mx-8">{word}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[-10%] w-[120%] rotate-[-5deg]">
        <div className="flex whitespace-nowrap animate-marquee-infinite-reverse text-[6rem] md:text-[10rem] font-black font-display text-slate-900 dark:text-white leading-none">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {keywords.reverse().map((word, wIdx) => (
                <span key={`${i}-${wIdx}`} className="mx-8 text-stroke">{word}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-infinite-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 80s linear infinite;
        }
        .animate-marquee-infinite-reverse {
          animation: marquee-infinite-reverse 80s linear infinite;
        }
        .text-stroke {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

const HoloCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`group relative bg-white/50 dark:bg-[#0f172a]/40 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 ${className}`}>
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[-50%] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-[35deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
      </div>

      {/* Inner Glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const servicesList = [
  {
    icon: Laptop,
    color: "blue",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. We create fast, secure, and scalable solutions that deliver exceptional user experiences.",
    features: ["Responsive & Mobile-First Design", "E-commerce Solutions", "CMS Integration", "Progressive Web Apps", "API Development"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Brain,
    color: "purple",
    title: "AI Solutions",
    description: "Intelligent automation and advanced machine learning models integrated directly into your business software and workflows.",
    features: ["Custom ChatGPT Models", "Predictive Analytics", "Computer Vision", "Process Automation"],
    linkText: "Explore AI Solutions",
    link: "/ai-solutions"
  },
  {
    icon: Smartphone,
    color: "purple",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth. We build intuitive, high-performance apps for iOS and Android.",
    features: ["iOS & Android Native Apps", "React Native & Flutter", "App Store Optimization", "Push Notifications", "In-App Purchases"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Palette,
    color: "pink",
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed to enhance user experience and drive engagement. We combine aesthetics with functionality for seamless digital experiences.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Interaction Design", "Design Systems", "Brand Identity"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Cloud,
    color: "sky",
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure solutions. We help businesses migrate to the cloud and optimize operations with AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security"],
    linkText: "Discuss Your Project"
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "SEO & Digital Marketing",
    description: "Data-driven digital marketing strategies to increase online visibility, drive traffic, and generate leads. We help you reach your target audience effectively.",
    features: ["Search Engine Optimization", "Content Marketing", "Social Media Management", "PPC Advertising", "Analytics & Reporting"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Headphones,
    color: "orange",
    title: "IT Consulting",
    description: "Expert technology consulting to help you make informed decisions about IT infrastructure, software development, and digital transformation initiatives.",
    features: ["Technology Strategy", "Digital Transformation", "IT Infrastructure", "Security Audits", "Technical Due Diligence"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Layers,
    color: "indigo",
    title: "ERP Systems",
    description: "Comprehensive ERP solutions including Odoo, ERPNext, and custom ERP development to streamline your business operations and boost productivity.",
    features: ["Odoo Implementation", "ERPNext Deployment", "Custom ERP Development", "ERP Integration", "Module Customization"],
    linkText: "Get Started"
  },
  {
    icon: CreditCard,
    color: "teal",
    title: "POS & HR Systems",
    description: "Modern Point of Sale and Human Resource Management systems tailored to your business needs with seamless integration and user-friendly interfaces.",
    features: ["Custom POS Solutions", "HR Management Systems", "Inventory Management", "Payroll Processing", "Employee Self-Service"],
    linkText: "Learn More"
  },
  {
    icon: Banknote,
    color: "green",
    title: "M-Pesa Integration",
    description: "Automated M-Pesa payment integration for your applications, enabling seamless mobile money transactions with real-time processing and notifications.",
    features: ["STK Push Integration", "Payment Callbacks", "Transaction Tracking", "Automated Reconciliation", "Multi-Channel Support"],
    linkText: "Integrate Now"
  },
  {
    icon: Wrench,
    color: "amber",
    title: "System Maintenance",
    description: "Keep your systems running smoothly with our comprehensive maintenance, upgrade, and advancement services for existing software solutions.",
    features: ["Software Maintenance", "System Upgrades", "Performance Optimization", "Bug Fixes & Updates", "Feature Enhancement"],
    linkText: "Request Service"
  },
  {
    icon: Sliders,
    color: "rose",
    title: "Feature Customization",
    description: "Tailor existing systems to your specific needs with custom features, workflows, and integrations that enhance functionality and user experience.",
    features: ["Custom Feature Development", "Workflow Automation", "Third-Party Integrations", "UI/UX Improvements", "API Development"],
    linkText: "Customize Now"
  },
  {
    icon: Users,
    color: "cyan",
    title: "User Training",
    description: "Comprehensive training programs to ensure your team can effectively use and maximize the potential of your software systems and applications.",
    features: ["On-Site Training", "Remote Sessions", "Custom Training Materials", "Hands-On Workshops", "Ongoing Support"],
    linkText: "Book Training"
  }
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We dive deep into your business goals, challenges, and user needs through workshops and research.", icon: Search, color: "blue" },
  { step: "02", title: "Strategy", desc: "We architect a roadmap, selecting the right tech stack and designing the user journey.", icon: MousePointer2, color: "purple" },
  { step: "03", title: "Design", desc: "We craft high-fidelity prototypes and UI systems that align with your brand identity.", icon: Palette, color: "pink" },
  { step: "04", title: "Develop", desc: "Our engineers build robust, scalable code using agile methodologies and best practices.", icon: Code2, color: "indigo" },
  { step: "05", title: "Test", desc: " rigorous QA testing ensures your product is bug-free, secure, and performant.", icon: ShieldCheck, color: "emerald" },
  { step: "06", title: "Launch", desc: "We handle the deployment and provide post-launch support to ensure a smooth takeoff.", icon: Rocket, color: "orange" },
];

const techStack = [
  // Frontend
  { name: "React", icon: Atom, color: "text-cyan-400", category: "Frontend" },
  { name: "Next.js", icon: Globe, color: "text-white", category: "Frontend" },
  { name: "Tailwind", icon: Palette, color: "text-sky-400", category: "Frontend" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: Server, color: "text-green-500", category: "Backend" },
  { name: "Python", icon: Terminal, color: "text-yellow-400", category: "Backend" },
  { name: "Go", icon: Code2, color: "text-blue-400", category: "Backend" },
  { name: "Django", icon: Box, color: "text-green-700", category: "Backend" },
  // Mobile
  { name: "Flutter", icon: Smartphone, color: "text-cyan-500", category: "Mobile" },
  { name: "React Native", icon: Atom, color: "text-blue-500", category: "Mobile" },
  { name: "Kotlin", icon: Smartphone, color: "text-purple-500", category: "Mobile" },
  { name: "Swift", icon: Smartphone, color: "text-orange-500", category: "Mobile" },
  // AI
  { name: "TensorFlow", icon: Brain, color: "text-orange-600", category: "AI" },
  { name: "PyTorch", icon: Flame, color: "text-red-500", category: "AI" },
  { name: "OpenAI", icon: Bot, color: "text-green-400", category: "AI" },
  { name: "Gemini", icon: Sparkles, color: "text-blue-400", category: "AI" },
  // Cloud
  { name: "AWS", icon: Cloud, color: "text-orange-500", category: "Cloud" },
  { name: "Docker", icon: Box, color: "text-blue-500", category: "Cloud" },
  { name: "Kubernetes", icon: Anchor, color: "text-blue-700", category: "Cloud" },
  { name: "Azure", icon: LayoutGrid, color: "text-blue-600", category: "Cloud" },
  // Database
  { name: "PostgreSQL", icon: Database, color: "text-blue-300", category: "Database" },
  { name: "MongoDB", icon: Database, color: "text-green-500", category: "Database" },
  { name: "Redis", icon: Layers, color: "text-red-600", category: "Database" },
  { name: "Firebase", icon: Flame, color: "text-yellow-500", category: "Database" }
];

export const Services: React.FC = () => {
  const MotionDiv = motion.div as any;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-0 transition-colors duration-300 overflow-hidden">

      {/* --- CINEMATIC HERO --- */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <PerspectiveGrid />

        {/* Animated Background Loop Text */}
        <HeroBackgroundLoop />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase mb-8 text-slate-600 dark:text-slate-300 shadow-xl"
          >
            <Layers size={14} className="mr-2 text-purple-500" /> Premium Solutions
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient-x">
                Digital Future
              </span>
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              We fuse <span className="font-semibold text-slate-900 dark:text-white">creative strategy</span> with <span className="font-semibold text-slate-900 dark:text-white">engineering excellence</span> to build software that defines industries.
            </p>
          </MotionDiv>

          {/* Floating Tags */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Web', 'Mobile', 'AI', 'Cloud', 'Design', 'Strategy'].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
                {tag}
              </span>
            ))}
          </MotionDiv>
        </div>
      </div>

      {/* --- SERVICE CARDS (HOLOGRAPHIC GRID) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
            >
              <HoloCard className="h-full p-8 flex flex-col">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className={`w-16 h-16 rounded-2xl bg-${service.color}-50 dark:bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-600 dark:text-${service.color}-400 mb-8 border border-${service.color}-100 dark:border-${service.color}-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8 border-t border-slate-100 dark:border-white/5 pt-6">
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500 mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={service.link || "/contact"}
                  className="mt-auto w-full group/btn"
                >
                  <Button variant="outline" className="w-full justify-between group-hover/btn:bg-slate-900 group-hover/btn:text-white dark:group-hover/btn:bg-white dark:group-hover/btn:text-slate-900 border-slate-200 dark:border-white/10">
                    {service.linkText}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </HoloCard>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* --- LIVE CIRCUIT PROCESS --- */}
      <div className="relative py-32 bg-slate-100 dark:bg-[#050b1d] border-y border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
        {/* Center Line Container */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/5 -translate-x-1/2">
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 pl-8 md:pl-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
              Our Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Methodology</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Precision-engineered workflow ensuring predictable success.
            </p>
          </MotionDiv>

          <div className="space-y-20">
            {/* Payment Terms Card Inserted Here */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto mb-16 relative z-20"
            >
              <div className="bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-md border border-indigo-200 dark:border-indigo-500/20 p-6 rounded-2xl text-center shadow-2xl shadow-indigo-500/10 relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                  <CreditCard size={14} className="text-indigo-500" /> Payment Structure
                </h3>
                <div className="flex justify-center gap-8 mb-4">
                  <div>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Upfront</span>
                  </div>
                  <div className="h-10 w-px bg-slate-200 dark:bg-white/10"></div>
                  <div>
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">60%</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Delivery</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Secure milestone-based payments ensuring mutual commitment and project momentum.
                </p>
              </div>
            </MotionDiv>

            {processSteps.map((step, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} relative`}
              >
                {/* Mobile Dot */}
                <div className="absolute left-[20px] top-0 md:hidden -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 dark:bg-white border-4 border-slate-100 dark:border-slate-900 z-20"></div>

                {/* Center Dot Desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-8 h-8 rounded-full bg-slate-50 dark:bg-[#050b1d] border-4 border-slate-200 dark:border-white/10 items-center justify-center z-20 shadow-xl group-hover:border-blue-500 transition-colors">
                  <div className={`w-2 h-2 rounded-full bg-${step.color}-500`}></div>
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0"></div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-white dark:bg-[#1e293b]/50 border border-slate-200 dark:border-white/5 p-8 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300 shadow-lg dark:shadow-none hover:shadow-xl hover:border-${step.color}-500/30`}>
                    <div className={`absolute top-0 left-0 w-1 h-full bg-${step.color}-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${step.color}-100 dark:bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-600 dark:text-${step.color}-400`}>
                        <step.icon size={24} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold text-${step.color}-600 dark:text-${step.color}-400 uppercase tracking-wider`}>Step {step.step}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* --- TECH CONSTELLATION --- */}
      <div className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Powered by <span className="text-slate-400">World-Class Tech</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our ecosystem thrives on the most advanced, scalable, and secure technologies available today.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["Frontend", "Backend", "Mobile", "AI", "Cloud", "Database"].map((category, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-white/10 pb-2 mb-4">{category}</h3>
                <div className="grid gap-3">
                  {techStack.filter(t => t.category === category).map((tech, idx) => (
                    <MotionDiv
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group"
                    >
                      <div className="px-4 py-3 bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none flex items-center space-x-3 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-[#1e293b] transition-all">
                        <tech.icon size={18} className={tech.color} />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{tech.name}</span>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA PORTAL --- */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-display mb-8">
            Ready to Launch?
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto font-light">
            Partner with a team that treats your product with the same passion as you do. Let's build something iconic.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-slate-900 hover:bg-blue-50 font-bold px-10 py-4 h-auto text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-105">
                Start Project
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-10 py-4 h-auto text-lg rounded-full backdrop-blur-md">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
