import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Hero } from '../components/ui/Hero';
import { Compass, Users, Rocket, Crown, User, Cpu, Link as LinkIcon, Linkedin, Twitter, Github, Globe, Youtube, Facebook, Instagram, ShieldCheck, Brain, Palette, TrendingUp, Heart, Lightbulb, Hammer, Diamond, Globe2, Share2, Star, Handshake, Award } from 'lucide-react';

export const Company: React.FC = () => {
  const MotionDiv = motion.div as any;

  const principles = [
    {
      icon: <Lightbulb size={32} className="text-blue-400" />,
      title: "Innovation",
      description: "We embrace creativity and continuously seek new ways to solve problems and deliver exceptional value to our clients.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Handshake size={32} className="text-emerald-400" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and the highest ethical standards in all our interactions.",
      color: "bg-emerald-500/10"
    },
    {
      icon: <Users size={32} className="text-purple-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success and mutual growth.",
      color: "bg-purple-500/10"
    },
    {
      icon: <Award size={32} className="text-yellow-400" />,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in everything we do, from strategy to execution and beyond.",
      color: "bg-yellow-500/10"
    }
  ];

  const visionaries = [
    {
      name: "Wambia Kennedy",
      role: "Chief Executive Officer",
      shortRole: "CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400", 
      desc: "Wambia Kennedy is the visionary co-founder and CEO of TechSafi. With a strong background in web and mobile development, he leads the company's strategic direction and business growth. Passionate about innovation and problem-solving, Kennedy believes in using technology as a tool to empower individuals, businesses, and communities.",
      stats: [
        { label: "Years", value: "3+" },
        { label: "Projects", value: "50+" },
        { label: "Dedicated", value: "100%" }
      ],
      socials: ["linkedin", "twitter", "github", "instagram", "youtube", "facebook", "web"],
      color: "from-blue-500 to-purple-600",
      icon: <Crown size={14} className="mr-1" />,
      badgeColor: "bg-blue-600"
    },
    {
      name: "Lewis Mwaura",
      role: "Chief Operating Officer",
      shortRole: "COO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400", 
      desc: "Lewis is the operational heartbeat of TechSafi. As co-founder and COO, he ensures every project moves smoothly from concept to delivery, aligning cross-functional teams, refining processes, and keeping clients delighted. He brings deep technical insight with an obsession for operational excellence.",
      stats: [
        { label: "Years", value: "4+" },
        { label: "Solutions", value: "100+" },
        { label: "Delivery", value: "24/7" }
      ],
      socials: ["linkedin", "twitter", "github", "instagram", "youtube", "web"],
      color: "from-pink-500 to-rose-600",
      icon: <User size={14} className="mr-1" />,
      badgeColor: "bg-pink-600"
    },
    {
      name: "Samuel Simiyu",
      role: "Chief Technology Officer",
      shortRole: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400", 
      desc: "Samuel is the engineering visionary steering TechSafi's product roadmap. A co-founder and hands-on technologist, he architects scalable platforms, mentors the dev team, and leads our push into AI-driven solutions. His passion lies in crafting elegant systems that solve real-world problems.",
      stats: [
        { label: "Years", value: "6+" },
        { label: "Deployments", value: "80+" },
        { label: "AI Projects", value: "15" }
      ],
      socials: ["linkedin", "twitter", "github", "web"], 
      color: "from-emerald-500 to-teal-600",
      icon: <Cpu size={14} className="mr-1" />,
      badgeColor: "bg-emerald-600"
    },
    {
      name: "Keith Keizzah",
      role: "Chief Integration Officer",
      shortRole: "CIO",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?fit=crop&w=400&h=400", 
      desc: "Keith is the architectural mastermind behind TechSafi's integrated ecosystem. As Chief Integration Officer, he specializes in API development, system interoperability, and scalable backend architecture. His expertise strengthens our AI and platform engineering capabilities, ensuring seamless connections between complex systems and future-ready solutions.",
      stats: [
        { label: "Years", value: "5+" },
        { label: "APIs", value: "200+" },
        { label: "Uptime", value: "99.9%" }
      ],
      socials: ["linkedin", "twitter", "github", "instagram", "web"], 
      color: "from-violet-500 to-purple-600",
      icon: <LinkIcon size={14} className="mr-1" />,
      badgeColor: "bg-violet-600"
    },
    {
      name: "Vinich Omuga",
      role: "Chief Security Officer",
      shortRole: "CSO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400", 
      desc: "Vinich is the guardian of TechSafi's digital fortress. As Chief Security Officer, she specializes in cybersecurity, risk analysis, and compliance frameworks. Her expertise enhances the security, trust, and reliability of all TechSafi solutions, ensuring our AI-powered platforms meet the highest standards of data protection and system integrity.",
      stats: [
        { label: "Years", value: "7+" },
        { label: "Breaches", value: "0" },
        { label: "Compliance", value: "100%" }
      ],
      socials: ["linkedin", "twitter", "github", "instagram", "facebook"], 
      color: "from-yellow-500 to-orange-600",
      icon: <ShieldCheck size={14} className="mr-1" />,
      badgeColor: "bg-yellow-600"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Spark 🌌",
      description: "TechSafi was born in 2024 out of a shared vision by Wambia Kennedy, Lewis Mwaura, and Samuel Simiyu — three graduates determined to create opportunities where none existed. With limited resources but boundless creativity, we began building simple, impactful solutions for individuals and small businesses.",
      icon: <Lightbulb size={24} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500",
      align: "left"
    },
    {
      year: "EARLY 2025",
      title: "Building the Foundation 🏗️",
      description: "By early 2025, TechSafi transitioned from a small idea into a professional tech startup. We registered officially, expanded our portfolio, and began offering web development, mobile apps, and business automation solutions that empowered startups and SMEs.",
      icon: <Hammer size={24} />,
      color: "text-blue-400",
      bg: "bg-blue-500",
      align: "right"
    },
    {
      year: "MID 2025",
      title: "Expanding Horizons 🚀",
      description: "Our growth accelerated as we dove deeper into emerging technologies such as AI, IoT, and data-driven systems. With Samuel championing innovation as CTO, Lewis driving operations as COO, and Kennedy leading vision as CEO, we further strengthened our leadership structure. Together, we redefined what young African developers could accomplish through visionary teamwork, relentless learning, and collaborative innovation.",
      icon: <Rocket size={24} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500",
      align: "left"
    },
    {
      year: "LATE 2025",
      title: "Establishing the Brand 💎",
      description: "As our reputation grew, so did our impact. TechSafi became known for delivering modern, sustainable, and client-focused digital solutions. We strengthened partnerships, enhanced our service quality, and turned TechSafi into a symbol of innovation and reliability.",
      icon: <Diamond size={24} />,
      color: "text-purple-400",
      bg: "bg-purple-500",
      align: "right"
    },
    {
      year: "BEYOND 2025",
      title: "The Vision Ahead 🌍",
      description: "Our journey continues with a vision to build TechSafi into a regional innovation hub, empowering developers, businesses, and communities. We're committed to exploring new technologies, forming strong partnerships, and driving Africa's digital transformation.",
      icon: <Globe2 size={24} />,
      color: "text-pink-400",
      bg: "bg-pink-500",
      align: "left"
    }
  ];

  const SocialIcon: React.FC<{ type: string }> = ({ type }) => {
    const className = "w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-colors cursor-pointer";
    switch(type) {
        case 'linkedin': return <div className={className}><Linkedin size={14} /></div>;
        case 'twitter': return <div className={className}><Twitter size={14} /></div>;
        case 'github': return <div className={className}><Github size={14} /></div>;
        case 'instagram': return <div className={className}><Instagram size={14} /></div>;
        case 'youtube': return <div className={className}><Youtube size={14} /></div>;
        case 'facebook': return <div className={className}><Facebook size={14} /></div>;
        case 'web': return <div className={className}><Globe size={14} /></div>;
        default: return null;
    }
  };

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Custom Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#020617]">
         {/* Background */}
         <div className="absolute inset-0 z-0">
            <img src="https://cdn.pixabay.com/animation/2023/02/26/01/05/01-05-36-817_512.gif" alt="Network" className="w-full h-full object-cover opacity-30" />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20">
            {/* Badge */}
            <MotionDiv
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-lg"
            >
                <Rocket size={14} className="text-yellow-400" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Established 2024</span>
            </MotionDiv>

            {/* Title */}
            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-8"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-2 tracking-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">TechSafi</span>
                </h1>
            </MotionDiv>

            {/* Subtitle */}
            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                    Empowering <span className="text-white font-semibold">businesses</span> through <span className="text-yellow-400 font-medium">innovative technology solutions</span> that drive growth, efficiency, and digital transformation.
                </p>
            </MotionDiv>

            {/* Hero Stats */}
            <MotionDiv
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
            >
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl min-w-[200px] hover:bg-white/10 transition-colors cursor-default shadow-xl">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400"><Users size={24} /></div>
                    <div className="text-left">
                        <div className="text-2xl font-bold text-white leading-none mb-1">5+</div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Team Members</div>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl min-w-[200px] hover:bg-white/10 transition-colors cursor-default shadow-xl">
                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400"><Share2 size={24} /></div>
                    <div className="text-left">
                        <div className="text-2xl font-bold text-white leading-none mb-1">50+</div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Projects Done</div>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl min-w-[200px] hover:bg-white/10 transition-colors cursor-default shadow-xl">
                    <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-400"><Star size={24} /></div>
                    <div className="text-left">
                        <div className="text-2xl font-bold text-white leading-none mb-1">98%</div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Satisfaction</div>
                    </div>
                </div>
            </MotionDiv>
         </div>
         
         {/* Decorative Circles */}
         <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-white/5 animate-float hidden md:block"></div>
         <div className="absolute top-40 right-10 w-16 h-16 rounded-full border border-white/5 animate-pulse-slow hidden md:block"></div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#020617] relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <MotionDiv
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-8">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Story</span>
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed text-base text-justify">
                    <p>
                        Founded in 2024, <span className="text-blue-400 font-semibold">TechSafi</span> was born out of resilience and ambition. After finishing college and facing the tough reality of unemployment, we decided to turn our skills into solutions. Building a software company that could create opportunities not just for us, but for others too.
                    </p>
                    <p>
                        What started as a small group of passionate tech enthusiasts has evolved into a full-fledged technology company providing innovative digital solutions for individuals, businesses, and enterprises. From custom web applications to intelligent automation systems, we focus on delivering clean, scalable, and impactful technology that drives real results.
                    </p>
                    <p>
                        Our journey is guided by innovation, integrity, and a deep belief that technology can empower growth. Today, TechSafi continues to help clients transform their operations, enhance their digital presence, and unlock their full potential in an ever-evolving digital world.
                    </p>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
                    <div className="text-center md:text-left">
                        <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Projects Completed</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Team Members</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-4xl font-bold text-blue-500 mb-2">3+</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Countries Served</div>
                    </div>
                </div>
            </MotionDiv>

            {/* Right Images */}
            <MotionDiv
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4 h-full"
            >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300" alt="TechSafi Team Work" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-white/10 shadow-lg mt-8 hover:scale-[1.02] transition-transform duration-300" alt="TechSafi Meeting" />
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-white/10 shadow-lg -mt-8 hover:scale-[1.02] transition-transform duration-300" alt="TechSafi Collaboration" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300" alt="TechSafi Office" />
            </MotionDiv>
         </div>
      </div>

      {/* Core Values / Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#050b1d]">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Our <span className="text-secondary">Core Values</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide everything we do, from client interactions to product development and team collaboration.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full p-8 border border-white/5 hover:border-white/20 transition-all duration-300 bg-[#0f172a] group hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl ${principle.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{principle.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm text-center">
                    {principle.description}
                  </p>
                </Card>
              </MotionDiv>
            ))}
          </div>
      </div>

        {/* Meet The Visionaries Section */}
        <div className="mb-24 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1e293b] text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 border border-blue-500/20">
                    <Users size={12} className="mr-2" /> Our Leadership
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
                    Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Visionaries</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    The brilliant minds driving innovation and excellence at TechSafi
                </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visionaries.map((leader, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="relative group rounded-2xl bg-[#0f172a] border border-white/5 p-8 h-full overflow-hidden hover:border-white/10 transition-all duration-300">
                             {/* Glow Effect */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${leader.color}`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full ${leader.badgeColor} text-white text-xs font-bold flex items-center shadow-lg`}>
                                        {leader.icon} {leader.shortRole}
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                <p className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${leader.color} mb-4 uppercase tracking-wide`}>
                                    {leader.role}
                                </p>
                                <div className="w-12 h-0.5 bg-white/10 mb-4"></div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {leader.desc}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-6 mb-6 w-full">
                                    {leader.stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${leader.color}`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Socials */}
                                <div className="flex gap-2 justify-center flex-wrap">
                                    {leader.socials.map((social, i) => (
                                        <SocialIcon key={i} type={social} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </div>

        {/* Executive Leadership Structure */}
        <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Executive Leadership Structure</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              A clear view of how TechSafi's founding team guides execution today while other strategic seats remain open for future leaders.
            </p>
          </MotionDiv>

          {/* Org Chart Layout */}
          <div className="relative">
            {/* CEO Level */}
            <div className="flex justify-center mb-8 relative z-10">
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-md"
              >
                <Card className="p-8 text-center bg-[#0f172a] border-white/10 shadow-xl shadow-blue-900/5">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-white">Wambia Kennedy</h3>
                    <div className="text-sky-400 text-sm font-bold tracking-wider uppercase mt-1">Chief Executive Officer</div>
                  </div>
                  <p className="text-slate-400 text-sm mt-4">
                    Leads company vision, partnerships, and long-term strategy.
                  </p>
                </Card>
              </MotionDiv>
            </div>

            {/* Connector Lines (Desktop) Level 1 */}
            <div className="hidden md:block absolute top-[160px] left-1/2 -translate-x-1/2 w-full h-12 pointer-events-none">
               <div className="absolute top-[-32px] left-1/2 -translate-x-px w-[2px] h-12 bg-white/10"></div>
               <div className="absolute top-[14px] left-[16.66%] right-[16.66%] h-[2px] bg-white/10"></div>
               <div className="absolute top-[14px] left-[16.66%] w-[2px] h-8 bg-white/10"></div>
               <div className="absolute top-[14px] left-1/2 -translate-x-px w-[2px] h-8 bg-white/10"></div>
               <div className="absolute top-[14px] right-[16.66%] w-[2px] h-8 bg-white/10"></div>
            </div>

            {/* C-Level Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-20">
              {/* COO */}
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
              >
                <Card className="h-full p-6 text-center bg-[#0f172a] border-white/10">
                  <h3 className="text-lg font-bold text-white">Lewis Mwaura</h3>
                  <div className="text-purple-400 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Chief Operating Officer</div>
                  <p className="text-slate-400 text-sm">Oversees delivery, internal processes, and day-to-day execution.</p>
                </Card>
              </MotionDiv>

              {/* CTO */}
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
              >
                <Card className="h-full p-6 text-center bg-[#0f172a] border-white/10">
                  <h3 className="text-lg font-bold text-white">Samuel Simiyu</h3>
                  <div className="text-emerald-400 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Chief Technology Officer</div>
                  <p className="text-slate-400 text-sm">Drives product architecture, technical innovation, and AI initiatives.</p>
                </Card>
              </MotionDiv>

              {/* CMO Pending */}
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
              >
                <Card className="h-full p-6 text-center bg-[#0f172a] border-white/10 border-dashed">
                  <h3 className="text-lg font-bold text-white/70">Chief Marketing Officer</h3>
                  <div className="text-slate-500 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Pending Appointment</div>
                  <p className="text-slate-500 text-sm">Future leader focused on brand growth and demand generation.</p>
                </Card>
              </MotionDiv>
            </div>
            
            {/* Strategic Additions Section */}
            <div className="text-center mb-12">
               <h3 className="text-2xl font-bold text-white mb-2">Strategic Leadership Additions</h3>
               <p className="text-slate-400 text-sm max-w-2xl mx-auto">Two senior leaders have joined the team to strengthen our platform, integrations and security posture as TechSafi scales its AI-powered platform.</p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-4xl mx-auto mb-20">
                {/* CIO */}
                <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="h-full p-8 text-center bg-[#0f172a] border-white/10">
                    <h3 className="text-xl font-bold text-white">Keith Keizzah</h3>
                    <div className="text-violet-400 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Chief Integration Officer (CIO)</div>
                    <p className="text-slate-400 text-sm">Strengthens our AI and platform engineering capabilities to deliver dependable, production-ready integrations that accelerate customer value.</p>
                    </Card>
                </MotionDiv>

                {/* CSO */}
                <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="h-full p-8 text-center bg-[#0f172a] border-white/10">
                    <h3 className="text-xl font-bold text-white">Vinich Omuga</h3>
                    <div className="text-yellow-400 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Chief Security Officer (CSO)</div>
                    <p className="text-slate-400 text-sm">Enhances the security, trust, and reliability of all TechSafi solutions—ensuring data protection and compliance as we scale.</p>
                    </Card>
                </MotionDiv>
             </div>
          </div>
        </div>

        {/* Future Roles */}
        <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
            >
            <h3 className="text-2xl font-bold text-white mb-2">Future Leadership Roles</h3>
            <p className="text-slate-400 text-sm">
                Next wave of executive hires are planned as the company scales to meet growing market demands and expand our AI capabilities.
            </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                    { title: "Chief AI Officer", icon: <Brain size={24} />, desc: "Will lead advanced AI strategy, research initiatives, and machine learning innovation across all product lines." },
                    { title: "Chief Design Officer", icon: <Palette size={24} />, desc: "Will champion UX/UI excellence, brand strategy, and design systems to create intuitive, beautiful user experiences." },
                    { title: "Chief Sales Officer", icon: <TrendingUp size={24} />, desc: "Will steer revenue growth, customer acquisition strategies, and build high-performance sales teams across markets." },
                    { title: "Chief HR Officer", icon: <Heart size={24} />, desc: "Will nurture company culture, talent development, and organizational design to support sustainable growth and innovation." }
                ].map((role, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                         <Card className="h-full p-8 text-center bg-[#0f172a] border-white/10 border-dashed group hover:border-white/20">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 mx-auto mb-4 group-hover:text-white transition-colors">
                                {role.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{role.desc}</p>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-500 text-xs font-bold uppercase tracking-wider">Pending Appointment</span>
                        </Card>
                    </MotionDiv>
                ))}
            </div>
        </div>

        {/* The Journey So Far Section */}
        <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1e293b] text-purple-400 text-xs font-bold tracking-widest uppercase mb-4 border border-purple-500/20">
              <Rocket size={12} className="mr-2" /> Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Journey</span> So Far
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From humble beginnings to ambitious horizons — discover the milestones that shaped TechSafi
            </p>
          </MotionDiv>

          <div className="relative">
             {/* Central Timeline Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-yellow-500 to-pink-500 hidden md:block"></div>

             <div className="space-y-12 md:space-y-0">
               {milestones.map((milestone, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`flex flex-col md:flex-row items-center justify-between relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                 >
                   {/* Empty space for alternating layout */}
                   <div className="w-full md:w-[45%]"></div>
                   
                   {/* Center Icon */}
                   <div className="z-10 absolute left-1/2 top-0 md:top-8 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                     <div className={`w-12 h-12 rounded-full ${milestone.bg} flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] border-4 border-[#020617]`}>
                        {milestone.icon}
                     </div>
                   </div>

                   {/* Card */}
                   <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pl-0' : 'md:pr-0'} relative`}>
                      {/* Mobile Line/Icon */}
                      <div className="md:hidden flex items-center mb-4 pl-4 border-l-2 border-slate-700">
                        <div className={`w-8 h-8 rounded-full ${milestone.bg} flex items-center justify-center text-white mr-3 shadow-lg`}>
                           {React.cloneElement(milestone.icon as React.ReactElement<any>, { size: 16 })}
                        </div>
                        <span className="text-sm font-bold text-white opacity-80">{milestone.year}</span>
                      </div>

                      <Card className={`p-8 relative overflow-hidden bg-[#1e293b]/50 border-white/5 hover:border-white/10 transition-all ${idx % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                          <div className={`absolute top-0 w-full h-1 ${milestone.bg} opacity-50 left-0`}></div>
                          
                          <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                             <div className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3 ${milestone.bg} text-white w-fit hidden md:block`}>
                               {milestone.year}
                             </div>
                             
                             <h3 className={`text-2xl font-bold text-white mb-1 flex items-center gap-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                               {milestone.title}
                             </h3>
                             
                             <div className={`text-slate-400 text-sm leading-relaxed mt-4`}>
                               {milestone.description.split(new RegExp(`(${['Wambia Kennedy', 'Lewis Mwaura', 'Samuel Simiyu', 'Samuel', 'Lewis', 'Kennedy', 'TechSafi'].join('|')})`, 'g')).map((part, i) => (
                                   ['Wambia Kennedy', 'Lewis Mwaura', 'Samuel Simiyu', 'Samuel', 'Lewis', 'Kennedy'].includes(part) ? <span key={i} className={milestone.color + " font-bold"}>{part}</span> :
                                   part === 'TechSafi' ? <span key={i} className="text-white font-bold">TechSafi</span> :
                                   <span key={i}>{part}</span>
                               ))}
                             </div>

                             {['AI', 'IoT'].some(tech => milestone.description.includes(tech)) && idx === 2 && (
                                <div className={`flex gap-2 mt-4 flex-wrap ${idx % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                  {['AI', 'IoT', 'Cloud'].map(t => (
                                    <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300">{t}</span>
                                  ))}
                                </div>
                             )}
                          </div>
                      </Card>
                   </div>
                 </MotionDiv>
               ))}
             </div>

             {/* Bottom Glow */}
             <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 bg-pink-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          </div>
        </div>
    </div>
  );
};