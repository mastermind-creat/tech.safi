import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Globe, Heart, Rocket, Briefcase, GraduationCap, 
  Lightbulb, TrendingUp, Handshake, Trophy, Sprout, 
  ArrowRight, CheckCircle2, Send, Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Careers: React.FC = () => {
  const MotionDiv = motion.div as any;

  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      desc: "We encourage creative thinking and reward innovative solutions to complex problems. Every team member has a voice in shaping our products.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      desc: "Teamwork is at the heart of everything we do. We believe in working together to achieve greatness and celebrate our collective successes.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      desc: "We invest in your growth with training, conferences, and learning opportunities. Stay at the forefront of technology with our development programs.",
      color: "green"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Build Your Legacy",
      desc: "As a founding team member, you'll have a direct impact on TechSafi's success. Your contributions will shape our culture, processes, and future direction.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Unlimited Growth",
      desc: "Learn cutting-edge technologies, work on diverse projects, and grow your skills rapidly. As we expand, so do your opportunities for advancement.",
      color: "purple"
    },
    {
      icon: Handshake,
      title: "Direct Rewards",
      desc: "Earn commissions on clients you bring in. Your efforts directly translate to your earnings, giving you control over your financial growth.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      desc: "Work alongside passionate individuals who share your drive to succeed. We support each other, learn together, and celebrate wins as a team.",
      color: "pink"
    },
    {
      icon: Trophy,
      title: "Priority Benefits",
      desc: "Early team members will be first in line for permanent roles, competitive salaries, and comprehensive benefits when we reach profitability.",
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "Real Experience",
      desc: "Build a portfolio with real-world projects. Gain experience that makes you more valuable in the job market, whether you stay with us or move on.",
      color: "indigo"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#020617] to-blue-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-600/10 via-transparent to-transparent blur-[100px] pointer-events-none"></div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-[10%] w-32 h-32 border border-white/5 rounded-lg rotate-12 animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-[5%] w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-purple-300"
          >
             <Users size={12} className="mr-2" /> Join Our Team
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 tracking-tight">
              Build the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">With Us</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Work with a <span className="text-white font-semibold">passionate team</span> that values <span className="text-pink-400">innovation</span>, <span className="text-purple-400">creativity</span>, and making a real impact in the tech world.
            </p>
          </MotionDiv>

          {/* Stats Badges */}
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: Users, text: "5+ Team Members", color: "bg-white/5" },
              { icon: Globe, text: "Remote Work Anywhere", color: "bg-white/5" },
              { icon: Heart, text: "Great Culture", color: "bg-white/5" }
            ].map((badge, idx) => (
              <div key={idx} className={`${badge.color} backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium text-slate-300`}>
                <badge.icon size={16} className="text-purple-400" />
                <span>{badge.text}</span>
              </div>
            ))}
            <div className="bg-purple-500/20 backdrop-blur-md border border-purple-500/30 px-3 py-2 rounded-full flex items-center justify-center">
               <Rocket size={14} className="text-purple-400 animate-pulse" />
            </div>
          </MotionDiv>

          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-white text-purple-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-full">
              <CheckCircle2 size={18} className="mr-2" /> Explore Our Culture
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-full">
              <Briefcase size={18} className="mr-2" /> View Open Positions
            </Button>
          </MotionDiv>
        </div>
      </div>

      {/* Early Stage Notice Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#0f172a] border border-orange-500/20 rounded-2xl p-1 overflow-hidden shadow-2xl shadow-orange-900/10"
         >
            <div className="bg-[#1e293b]/50 rounded-xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

               <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 flex-shrink-0">
                     <Sprout size={24} />
                  </div>
                  <div>
                     <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Building Together, Growing Together</h3>
                        <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-wide">Early Stage</span>
                     </div>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        Right now, TechSafi is still in its early growth phase, so we're not offering fixed salaries yet. We're building our client base and growing the brand so that we can eventually create stable, well-paying positions for the team.
                     </p>
                     <p className="text-slate-400 text-sm leading-relaxed mt-4">
                        At this stage, I'm bringing together passionate and skilled individuals who are currently unemployed but want to grow with the agency. We'll be working collaboratively to build something solid and long-term.
                     </p>
                  </div>
               </div>

               {/* Commission Box */}
               <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 md:p-6 mb-8 flex gap-4">
                  <Handshake size={24} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                     <h4 className="text-emerald-400 font-bold text-sm mb-1">Commission-Based Opportunities</h4>
                     <p className="text-emerald-100/70 text-xs leading-relaxed">
                        We offer commissions based on the clients you bring in — meaning you still earn as we grow together. And once we start generating consistent revenue, those who helped build the foundation will be the first to benefit from permanent roles and higher rewards.
                     </p>
                  </div>
               </div>

               <p className="text-slate-300 text-sm font-medium mb-8">
                  If you're someone who's ready to learn, contribute, and grow in a forward-thinking team, I'd really love to have you on board.
               </p>

               <div className="flex flex-wrap gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white border-0 font-bold shadow-lg shadow-orange-900/20">
                     <Sparkles size={16} className="mr-2" /> Join Our Journey
                  </Button>
                  <Button variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white">
                     <div className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-[10px] font-bold text-white mr-2">?</div> Learn More
                  </Button>
               </div>
            </div>
         </MotionDiv>
      </div>

      {/* Our Culture Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-white mb-2">Our <span className="text-purple-500">Culture</span></h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
               At TechSafi, we believe our people are our greatest asset. We've built a culture that fosters innovation, collaboration, and continuous learning.
            </p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultureValues.map((item, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all text-center group hover:-translate-y-1"
               >
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                     <item.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                     {item.desc}
                  </p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Talent Pool CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Don't see your dream job?</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                     We're always looking for talented individuals to join our team. Even if you don't see a position that matches your skills, we'd love to hear from you and keep your profile for future opportunities.
                  </p>
                  <Link to="/contact">
                     <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                        Send Us Your Resume <Send size={16} className="ml-2" />
                     </Button>
                  </Link>
               </div>
               
               <div className="relative h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
            </div>
         </MotionDiv>
      </div>

      {/* Why Join TechSafi Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-white mb-2">Why Join <span className="text-blue-500">TechSafi</span>?</h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 text-sm">
               Be part of building something meaningful from the ground up
            </p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#0f172a] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors group"
               >
                  <div className={`w-10 h-10 rounded-lg bg-${benefit.color}-500/10 flex items-center justify-center text-${benefit.color}-500 mb-4 group-hover:scale-110 transition-transform`}>
                     <benefit.icon size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                     {benefit.desc}
                  </p>
               </MotionDiv>
            ))}
         </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
         <Button className="bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 rounded-full px-6">
            <Briefcase size={16} className="mr-2" /> Install App
         </Button>
      </div>

    </div>
  );
};
