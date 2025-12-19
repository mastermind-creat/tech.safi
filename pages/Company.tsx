import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Compass, Users, Rocket, Crown, User, Cpu, Link as LinkIcon, Linkedin, Twitter, Github, Globe, Youtube, Facebook, Instagram, ShieldCheck, Brain, Palette, TrendingUp, Heart, Lightbulb, Hammer, Diamond, Globe2, Share2, Star, Handshake, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Added social handle interface locally to match updated API
interface SocialHandle {
    platform: 'linkedin' | 'twitter' | 'github' | 'instagram' | 'facebook' | 'web';
    url: string;
}

export const Company: React.FC = () => {
  const MotionDiv = motion.div as any;

  const principles = [
    {
      icon: <Lightbulb size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Innovation",
      description: "We embrace creativity and continuously seek new ways to solve problems and deliver exceptional value to our clients.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Handshake size={32} className="text-emerald-500 dark:text-emerald-400" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and the highest ethical standards in all our interactions.",
      color: "bg-emerald-500/10"
    },
    {
      icon: <Users size={32} className="text-purple-500 dark:text-purple-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success and mutual growth.",
      color: "bg-purple-500/10"
    },
    {
      icon: <Award size={32} className="text-yellow-500 dark:text-yellow-400" />,
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
      desc: "Wambia Kennedy is the visionary co-founder and CEO of TechSafi. With a strong background in web and mobile development, he leads the company's strategic direction.",
      stats: [
        { label: "Years", value: "3+" },
        { label: "Projects", value: "50+" },
        { label: "Dedicated", value: "100%" }
      ],
      socials: [
          { platform: 'linkedin', url: '#' },
          { platform: 'twitter', url: '#' },
          { platform: 'github', url: '#' },
          { platform: 'web', url: '#' }
      ] as SocialHandle[],
      expertise: ["Cloud Arch", "AI Strategy", "Business Dev"],
      color: "from-blue-500 to-purple-600",
      icon: <Crown size={14} className="mr-1" />,
      badgeColor: "bg-blue-600"
    },
    {
      name: "Lewis Mwaura",
      role: "Chief Operating Officer",
      shortRole: "COO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400", 
      desc: "Lewis is the operational heartbeat of TechSafi. As co-founder and COO, he ensures every project moves smoothly from concept to delivery.",
      stats: [
        { label: "Years", value: "4+" },
        { label: "Solutions", value: "100+" },
        { label: "Delivery", value: "24/7" }
      ],
      socials: [
          { platform: 'linkedin', url: '#' },
          { platform: 'instagram', url: '#' }
      ] as SocialHandle[],
      expertise: ["Project MGMT", "Agile", "Optimization"],
      color: "from-pink-500 to-rose-600",
      icon: <User size={14} className="mr-1" />,
      badgeColor: "bg-pink-600"
    },
    {
      name: "Samuel Simiyu",
      role: "Chief Technology Officer",
      shortRole: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400", 
      desc: "Samuel is the engineering visionary steering TechSafi's roadmap. A technologist who architects scalable platforms and leads AI initiatives.",
      stats: [
        { label: "Years", value: "6+" },
        { label: "Deployments", value: "80+" },
        { label: "AI Projects", value: "15" }
      ],
      socials: [
          { platform: 'github', url: '#' },
          { platform: 'linkedin', url: '#' }
      ] as SocialHandle[],
      expertise: ["Systems Arch", "PyTorch", "Rust"],
      color: "from-emerald-500 to-teal-600",
      icon: <Cpu size={14} className="mr-1" />,
      badgeColor: "bg-emerald-600"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Spark 🌌",
      description: "TechSafi was born in 2024 out of a shared vision by Wambia Kennedy, Lewis Mwaura, and Samuel Simiyu — three graduates determined to create opportunities where none existed.",
      icon: <Lightbulb size={24} />,
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-500",
      align: "left"
    },
    {
      year: "2025",
      title: "Expanding Horizons 🚀",
      description: "Our growth accelerated as we dove deeper into emerging technologies such as AI, IoT, and data-driven systems.",
      icon: <Rocket size={24} />,
      color: "text-yellow-500 dark:text-yellow-400",
      bg: "bg-yellow-500",
      align: "right"
    }
  ];

  const SocialIcon: React.FC<{ social: SocialHandle }> = ({ social }) => {
    const className = "w-8 h-8 rounded-full bg-slate-100 dark:bg-[#1e293b] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-primary transition-all cursor-pointer shadow-sm";
    
    const getIcon = () => {
        switch(social.platform) {
            case 'linkedin': return <Linkedin size={14} />;
            case 'twitter': return <Twitter size={14} />;
            case 'github': return <Github size={14} />;
            case 'instagram': return <Instagram size={14} />;
            case 'facebook': return <Facebook size={14} />;
            default: return <Globe size={14} />;
        }
    };

    return (
        <a href={social.url} target="_blank" rel="noopener noreferrer" className={className}>
            {getIcon()}
        </a>
    );
  };

  return (
    <div className="pb-20 overflow-x-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* Custom Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 dark:bg-[#020617]">
         <div className="absolute inset-0 z-0">
            <img src="https://cdn.pixabay.com/animation/2023/02/26/01/05/01-05-36-817_512.gif" alt="Network" className="w-full h-full object-cover opacity-20 dark:opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-[#020617]"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20">
            <MotionDiv
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 shadow-lg"
            >
                <Rocket size={14} className="text-yellow-400" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Established 2024</span>
            </MotionDiv>

            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-2 tracking-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">TechSafi</span>
                </h1>
            </MotionDiv>

            <MotionDiv
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                    Empowering <span className="text-white font-semibold">businesses</span> through <span className="text-yellow-400 font-medium">innovative technology solutions</span>.
                </p>
            </MotionDiv>
         </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-8">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Story</span>
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base text-justify">
                    <p>
                        Founded in 2024, <span className="text-blue-600 dark:text-blue-400 font-semibold">TechSafi</span> was born out of resilience and ambition. Building a software company that could create opportunities not just for us, but for others too.
                    </p>
                    <p>
                        What started as a small group of passionate tech enthusiasts has evolved into a full-fledged technology company providing innovative digital solutions.
                    </p>
                </div>
            </MotionDiv>

            <MotionDiv initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 h-full">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg" alt="Team" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&h=400" className="w-full h-48 md:h-56 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg mt-8" alt="Meeting" />
            </MotionDiv>
         </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100 dark:bg-[#050b1d] rounded-3xl">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-display mb-4">
              Our <span className="text-secondary">Core Values</span>
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <MotionDiv key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full p-8 border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f172a] group shadow-lg dark:shadow-none">
                  <div className={`w-16 h-16 rounded-2xl ${principle.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                      {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">{principle.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm text-center">{principle.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
      </div>

        {/* Meet The Visionaries Section */}
        <div className="mb-24 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200 dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 border border-blue-500/20">
                    <Users size={12} className="mr-2" /> Our Leadership
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                    Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Visionaries</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    The brilliant minds driving innovation and excellence at TechSafi
                </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visionaries.map((leader, idx) => (
                    <MotionDiv key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                        <div className="relative group rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 p-8 h-full overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-xl dark:shadow-none">
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${leader.color}`}></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-xl">
                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full ${leader.badgeColor} text-white text-xs font-bold flex items-center shadow-lg`}>
                                        {leader.icon} {leader.shortRole}
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{leader.name}</h3>
                                <p className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${leader.color} mb-4 uppercase tracking-wide`}>
                                    {leader.role}
                                </p>
                                
                                {/* Expertise Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {leader.expertise?.map((skill, i) => (
                                        <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-bold border border-slate-200 dark:border-white/10 uppercase">{skill}</span>
                                    ))}
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {leader.desc}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 border-t border-slate-100 dark:border-white/5 pt-6 mb-6 w-full">
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
                                <div className="flex gap-3 justify-center flex-wrap">
                                    {leader.socials.map((social, i) => (
                                        <SocialIcon key={i} social={social} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Journey</span> So Far
            </h2>
          </MotionDiv>

          <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-yellow-500 to-pink-500 hidden md:block"></div>

             <div className="space-y-12">
               {milestones.map((milestone, idx) => (
                 <MotionDiv key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`flex flex-col md:flex-row items-center justify-between relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="w-full md:w-[45%]"></div>
                   <div className="z-10 absolute left-1/2 top-8 transform -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full shadow-lg border-4 border-slate-50 dark:border-[#020617] bg-white dark:bg-slate-800 items-center justify-center">
                        {milestone.icon}
                   </div>
                   <div className="w-full md:w-[45%]">
                      <Card className="p-8 border-slate-200 dark:border-white/5">
                          <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${milestone.bg} text-white mb-3`}>{milestone.year}</span>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{milestone.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                      </Card>
                   </div>
                 </MotionDiv>
               ))}
             </div>
          </div>
        </div>
    </div>
  );
};
