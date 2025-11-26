import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Hero } from '../components/ui/Hero';
import { Compass, Users, Rocket, Crown, User, Cpu, Link as LinkIcon, Linkedin, Twitter, Github, Globe, Youtube, Facebook, Instagram, ShieldCheck, Brain, Palette, TrendingUp, Heart } from 'lucide-react';

export const Company: React.FC = () => {
  const MotionDiv = motion.div as any;

  const principles = [
    {
      icon: <Compass size={32} className="text-blue-500" />,
      title: "Vision Before Execution",
      description: "Every roadmap begins with customer insight. We validate problems, design meaningful outcomes, and then obsess over the technical details that deliver delight.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Users size={32} className="text-emerald-500" />,
      title: "People Over Processes",
      description: "We empower teams with autonomy, transparent feedback loops, and shared ownership. When people grow, products improve and partners stay.",
      color: "bg-emerald-500/10"
    },
    {
      icon: <Rocket size={32} className="text-pink-500" />,
      title: "Ship, Learn, Evolve",
      description: "We release iteratively, measure outcomes, and refine quickly. Momentum matters, but learning faster than the market is what keeps us ahead.",
      color: "bg-pink-500/10"
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
      socials: [], 
      color: "from-emerald-500 to-teal-600",
      icon: <Cpu size={14} className="mr-1" />,
      badgeColor: "bg-emerald-600"
    },
    {
      name: "Keith Keizzah",
      role: "Chief Integration Officer",
      shortRole: "CIO",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?fit=crop&w=400&h=400", 
      desc: "Keith is the architectural mastermind behind TechSafi's integrated ecosystem. As Chief Integration Officer, he specializes in API development, system interoperability, and scalable backend architecture. He strengthens our AI and platform engineering capabilities ensuring seamless connections between complex systems and future-ready solutions.",
      stats: [
        { label: "Years", value: "5+" },
        { label: "Systems", value: "200+" },
        { label: "Uptime", value: "99.9%" }
      ],
      socials: [], 
      color: "from-violet-500 to-purple-600",
      icon: <LinkIcon size={14} className="mr-1" />,
      badgeColor: "bg-violet-600"
    },
    {
      name: "Vinich Omuga",
      role: "Chief Security Officer",
      shortRole: "CSO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400", 
      desc: "Enhances the security, trust, and reliability of all TechSafi solutions—ensuring data protection and compliance as we scale.",
      stats: [
        { label: "Years", value: "5+" },
        { label: "Secured", value: "200+" },
        { label: "Safety", value: "100%" }
      ],
      socials: [], 
      color: "from-yellow-500 to-orange-600",
      icon: <ShieldCheck size={14} className="mr-1" />,
      badgeColor: "bg-yellow-600"
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
      {/* Hero */}
      <Hero
        bgImage="https://i.gifer.com/X0XF.gif" // Purple waves abstract
        title="Our Story"
        subtitle="Building a future where technology amplifies human potential, not replaces it. Learn about our journey, our values, and the people behind the code."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Leadership Principles */}
        <div className="mb-24 mt-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Leadership <span className="text-secondary">Principles</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              What guides the TechSafi founders as we scale products, teams, and partnerships.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full p-8 border border-white/5 hover:border-white/10 transition-colors bg-[#0f172a]/40">
                  <div className={`w-14 h-14 rounded-xl ${principle.color} flex items-center justify-center mb-6 mx-auto`}>
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

        {/* Meet The Visionaries Section - Displaying Key Founders */}
        <div className="mb-24">
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
                {visionaries.slice(0, 2).map((leader, idx) => (
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
                                <div className="flex gap-2 justify-center">
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
        <div className="mb-24">
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
        <div className="mb-24">
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

      </div>
    </div>
  );
};