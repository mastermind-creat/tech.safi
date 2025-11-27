import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Globe, Heart, Rocket, Briefcase, GraduationCap, 
  Lightbulb, TrendingUp, Handshake, Trophy, Sprout, 
  ArrowRight, CheckCircle2, Send, Sparkles,
  Wallet, Palmtree, Home, Dumbbell, Baby, Utensils,
  Info, Bell, Laptop, FileText, MessageCircle, Phone, 
  ChevronDown, Plus, Minus, Star, Award
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Careers: React.FC = () => {
  const MotionDiv = motion.div as any;
  const [agreedToNotice, setAgreedToNotice] = useState(false);
  const [openCompFaq, setOpenCompFaq] = useState<number | null>(null);

  const toggleCompFaq = (index: number) => {
    setOpenCompFaq(openCompFaq === index ? null : index);
  };

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

  const employeeBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      desc: "Comprehensive medical, dental, and vision insurance for you and your family.",
      color: "blue"
    },
    {
      icon: Wallet,
      title: "Financial Security",
      desc: "401(k) with company matching and financial planning resources.",
      color: "yellow"
    },
    {
      icon: Palmtree,
      title: "Time Off",
      desc: "Generous paid time off, holidays, and flexible work arrangements.",
      color: "green"
    },
    {
      icon: Home,
      title: "Remote Work",
      desc: "Flexible work-from-home options and co-working space allowances.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      desc: "Annual learning budget and access to online courses and conferences.",
      color: "blue"
    },
    {
      icon: Dumbbell,
      title: "Wellness Programs",
      desc: "Gym memberships, wellness challenges, and mental health support.",
      color: "red"
    },
    {
      icon: Baby,
      title: "Family Benefits",
      desc: "Parental leave, childcare assistance, and family planning support.",
      color: "pink"
    },
    {
      icon: Utensils,
      title: "Food & Snacks",
      desc: "Catered lunches, stocked kitchens, and team dinners.",
      color: "indigo"
    }
  ];

  const compFaqs = [
    {
      question: "How does the commission structure work?",
      answer: "Our commission structure is transparent and generous. You earn a percentage of the revenue from every client project you secure. This applies to both one-time projects and recurring contracts, providing you with potential for steady income as you build your client portfolio."
    },
    {
      question: "When will fixed salaries be introduced?",
      answer: "We plan to introduce base salaries once the company reaches specific revenue milestones. Early team members who have demonstrated commitment and results will be prioritized for these salaried positions."
    },
    {
      question: "What other benefits do I get besides commissions?",
      answer: "Beyond financial rewards, you get invaluable hands-on experience building a startup, mentorship from founders, networking opportunities, and a flexible remote working environment. You also get first dibs on leadership roles as we scale."
    },
    {
      question: "Is this suitable for someone currently unemployed?",
      answer: "Yes, this role is ideal for skilled individuals who are currently looking for work and want to stay active, build their portfolio, and earn money based on performance while looking for or building towards a permanent role with us."
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
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

      {/* Employee Benefits Section */}
      <div className="bg-[#0f172a] py-24 mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
             >
                <h2 className="text-3xl font-bold text-white mb-2">Employee <span className="text-indigo-400">Benefits</span></h2>
                <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-6"></div>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                   We offer competitive benefits to support you and your family's health, wealth, and well-being.
                </p>
             </MotionDiv>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {employeeBenefits.map((benefit, idx) => (
                    <MotionDiv
                       key={idx}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.05 }}
                       className="bg-[#1e293b]/40 rounded-2xl p-6 border border-white/5 hover:bg-[#1e293b]/60 transition-all duration-300"
                    >
                        <div className={`w-10 h-10 rounded-lg bg-${benefit.color}-500 flex items-center justify-center text-white mb-4 shadow-lg`}>
                           <benefit.icon size={20} />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-sm">{benefit.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{benefit.desc}</p>
                    </MotionDiv>
                 ))}
             </div>
         </div>
      </div>

      {/* Current Openings Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-white mb-2">Current <span className="text-blue-500">Openings</span></h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 text-sm">
               We're always looking for talented individuals to join our team. Check back regularly for new opportunities.
            </p>
         </MotionDiv>

         {/* Limited Opening Alert */}
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/50 border border-white/10 rounded-2xl p-8 md:p-12 text-center mb-12 relative overflow-hidden"
         >
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                   <Info size={32} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Limited Openings — Marketing Role Available</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-8">
                   While we don't have broad hiring across every team right now, we are actively recruiting for a Marketing Specialist focused on growth. If you're a marketer interested in supporting our expansion, please <span className="text-blue-400 underline cursor-pointer">go to the Marketing Specialist card below</span> and click Apply — you will need to confirm the Growth Phase Notification before submitting. For general resumes or future consideration, you can still send us your details.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <Button className="bg-blue-600 hover:bg-blue-700">
                      <Briefcase size={16} className="mr-2" /> Go to Marketing Role
                   </Button>
                   <Link to="/contact">
                     <Button variant="outline" className="border-white/10 bg-white text-slate-900 hover:bg-slate-200">
                        <Send size={16} className="mr-2" /> Send General Resume
                     </Button>
                   </Link>
                </div>
             </div>
         </MotionDiv>

         {/* Job Details & Subscription Split */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Marketing Role Card */}
             <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8"
             >
                <h3 className="text-lg font-bold text-white mb-4">Marketing Specialist — Growth</h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                   We're inviting experienced growth marketers to support our expansion. Due to our ongoing growth phase, you must read and comply with the <span className="text-blue-400 underline cursor-pointer">Growth Phase Notification</span> before applying.
                </p>
                <div className="space-y-3 mb-6">
                   {[
                     "3+ years in growth or performance marketing",
                     "Hands-on experience with acquisition funnels and analytics",
                     "Comfortable in fast-moving, startup-like environments"
                   ].map((req, i) => (
                      <div key={i} className="flex items-start">
                         <CheckCircle2 size={14} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                         <span className="text-slate-300 text-xs">{req}</span>
                      </div>
                   ))}
                </div>
                
                <div className="bg-[#0f172a] rounded-lg p-3 mb-6 flex items-start cursor-pointer" onClick={() => setAgreedToNotice(!agreedToNotice)}>
                   <div className={`w-4 h-4 rounded border mt-0.5 mr-3 flex items-center justify-center transition-colors ${agreedToNotice ? 'bg-blue-500 border-blue-500' : 'border-slate-500'}`}>
                      {agreedToNotice && <CheckCircle2 size={12} className="text-white" />}
                   </div>
                   <span className="text-xs text-slate-400 select-none">
                      I confirm I've read and accept the <span className="text-blue-400 underline">Growth Phase Notification</span>.
                   </span>
                </div>

                <Button 
                   className={`w-full ${agreedToNotice ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 cursor-not-allowed opacity-50'}`}
                   disabled={!agreedToNotice}
                >
                   <Send size={16} className="mr-2" /> Apply via Contact Form
                </Button>
                <p className="text-[10px] text-slate-500 mt-3 text-center">Only apply if you're genuinely interested and meet the Growth Phase requirements.</p>
             </MotionDiv>

             {/* Stay Updated Card */}
             <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center"
             >
                <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-slate-400 text-xs mb-6">
                   Want to be the first to know about new openings or share general interest?
                </p>
                
                <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all mb-4"
                />
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                   Notify Me About New Jobs
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                   Or <Link to="/contact" className="text-blue-400 underline">send us a message</Link> describing your skills.
                </p>
             </MotionDiv>
         </div>
      </div>

      {/* Internship & Industrial Attachment Section */}
      <div className="bg-[#0f172a] py-24 mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
                  <GraduationCap size={12} className="mr-2" /> For Students
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Internship & Industrial <span className="text-blue-500">Attachment</span>
               </h2>
               <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  Launch your tech career with TechSafi! We offer comprehensive internship and industrial attachment programs designed to give students real-world experience in cutting-edge technology projects.
               </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {[
                 { title: "Hands-On Experience", icon: Laptop, desc: "Work on real projects alongside experienced developers. Gain practical skills in web development, mobile apps, AI solutions, and cloud technologies.", color: "blue" },
                 { title: "Mentorship Program", icon: Users, desc: "Get paired with experienced mentors who will guide you through your learning journey and help you develop both technical and professional skills.", color: "purple" },
                 { title: "Career Development", icon: Award, desc: "Receive certificates, recommendation letters, and potential job offers for outstanding performers. Build your portfolio with real-world projects.", color: "pink" }
               ].map((item, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#1e293b]/40 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all"
                 >
                    <div className={`w-12 h-12 rounded-lg bg-${item.color}-500 flex items-center justify-center text-white mb-6 shadow-lg`}>
                       <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                 </MotionDiv>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Internship Program Card */}
                <MotionDiv
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="bg-[#1e293b]/40 border border-blue-500/30 rounded-2xl overflow-hidden"
                >
                   <div className="bg-blue-600 p-4 flex items-center">
                      <GraduationCap size={20} className="text-white mr-3" />
                      <div>
                         <h3 className="text-white font-bold">Internship Program</h3>
                         <span className="text-blue-100 text-xs">3-6 Months Duration</span>
                      </div>
                   </div>
                   <div className="p-8">
                      <h4 className="text-green-400 text-xs font-bold uppercase mb-4 flex items-center">
                         <CheckCircle2 size={12} className="mr-2" /> What You'll Get:
                      </h4>
                      <ul className="space-y-3 mb-8">
                         {[
                           "Monthly stipend for your contributions",
                           "Flexible working hours (part-time/full-time)",
                           "Remote or hybrid work options",
                           "Access to learning resources and tools",
                           "Certificate of completion",
                           "Potential for full-time employment"
                         ].map((item, i) => (
                            <li key={i} className="text-slate-300 text-xs flex items-start">
                               <span className="text-blue-500 mr-2">›</span> {item}
                            </li>
                         ))}
                      </ul>
                      <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 text-[10px] text-blue-200">
                         <span className="font-bold">Requirements:</span> Currently enrolled in university/college pursuing IT, Computer Science, Software Engineering, or related field.
                      </div>
                   </div>
                </MotionDiv>

                {/* Industrial Attachment Card */}
                <MotionDiv
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="bg-[#1e293b]/40 border border-purple-500/30 rounded-2xl overflow-hidden"
                >
                   <div className="bg-purple-600 p-4 flex items-center">
                      <Briefcase size={20} className="text-white mr-3" />
                      <div>
                         <h3 className="text-white font-bold">Industrial Attachment</h3>
                         <span className="text-purple-100 text-xs">3-6 Months Duration</span>
                      </div>
                   </div>
                   <div className="p-8">
                      <h4 className="text-green-400 text-xs font-bold uppercase mb-4 flex items-center">
                         <CheckCircle2 size={12} className="mr-2" /> What You'll Get:
                      </h4>
                      <ul className="space-y-3 mb-8">
                         {[
                           "Structured training program",
                           "Dedicated supervisor and mentor",
                           "Weekly progress reviews and feedback",
                           "Official attachment letter for your institution",
                           "Final assessment report and recommendation",
                           "Portfolio-worthy project experience"
                         ].map((item, i) => (
                            <li key={i} className="text-slate-300 text-xs flex items-start">
                               <span className="text-purple-500 mr-2">›</span> {item}
                            </li>
                         ))}
                      </ul>
                      <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 text-[10px] text-purple-200">
                         <span className="font-bold">Requirements:</span> Students required to complete industrial attachment as part of their academic program.
                      </div>
                   </div>
                </MotionDiv>
            </div>

            {/* How to Apply */}
            <div className="mt-16 bg-[#1e293b]/30 rounded-3xl p-8 md:p-12 border border-white/5">
                <h3 className="text-2xl font-bold text-white text-center mb-12">How to <span className="text-blue-500">Apply</span></h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                   <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30"></div>
                   
                   {[
                     { step: 1, title: "Prepare Documents", desc: "CV, cover letter, transcripts, and recommendation letter", icon: FileText, color: "blue" },
                     { step: 2, title: "Submit Application", desc: "Send via email or contact form with subject \"Internship/Attachment\"", icon: Send, color: "purple" },
                     { step: 3, title: "Interview", desc: "Virtual or in-person interview with our team", icon: MessageCircle, color: "pink" },
                     { step: 4, title: "Start Learning", desc: "Begin your journey with onboarding and orientation", icon: Rocket, color: "green" }
                   ].map((item, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                         <div className={`w-16 h-16 rounded-full bg-${item.color}-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-${item.color}-500/20`}>
                            {item.step}
                         </div>
                         <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                         <p className="text-slate-400 text-[10px] leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                   <Link to="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                         <Send size={16} className="mr-2" /> Apply for Internship
                      </Button>
                   </Link>
                   <Link to="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                         <Briefcase size={16} className="mr-2" /> Apply for Attachment
                      </Button>
                   </Link>
                </div>
                
                <div className="text-center mt-8 pt-8 border-t border-white/5">
                   <p className="text-xs text-slate-400">
                      <span className="text-blue-400 font-bold mr-1">For Inquiries:</span> internships@techsafi.com
                   </p>
                   <p className="text-xs text-slate-400 mt-2">
                      <span className="text-blue-400 font-bold mr-1">Call us:</span> +254 751 380 948 | +254 110 046 523
                   </p>
                </div>
            </div>
         </div>
      </div>

      {/* Compensation FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-white mb-2">Compensation <span className="text-blue-500">FAQ</span></h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 text-sm">
               Common questions about our compensation model and growth opportunities
            </p>
         </MotionDiv>

         <div className="space-y-4 mb-12">
            {compFaqs.map((faq, idx) => (
               <div key={idx} className="bg-[#1e293b]/30 border border-white/5 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleCompFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-white/5 transition-colors"
                  >
                     <span className="text-white font-bold text-sm pr-8">{faq.question}</span>
                     <span className="text-slate-400">
                        {openCompFaq === idx ? <ChevronDown size={20} className="rotate-180 transition-transform" /> : <ChevronDown size={20} className="transition-transform" />}
                     </span>
                  </button>
                  <AnimatePresence>
                     {openCompFaq === idx && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <div className="p-5 pt-0 text-slate-400 text-xs leading-relaxed border-t border-white/5 mt-2">
                              {faq.answer}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>

         <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-start">
               <Lightbulb size={20} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
               <div>
                  <h4 className="text-white font-bold text-sm mb-2">What makes this opportunity special?</h4>
                  <p className="text-blue-100/70 text-xs leading-relaxed">
                     You're not just joining a company—you're helping build one. Early team members will have a significant impact on TechSafi's culture, processes, and success. When we reach profitability, those who were here from the beginning will be rewarded accordingly.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Growth Roadmap */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-white mb-2">Our Growth <span className="text-purple-500">Roadmap</span></h2>
            <p className="text-slate-400 text-sm">
               See where we're heading and how you can be part of our journey
            </p>
         </MotionDiv>

         <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
               {/* Phase 1 */}
               <div className="flex flex-col md:flex-row items-center relative">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#020617] z-10">
                     <Sprout size={24} className="text-white" />
                  </div>
                  
                  <div className="ml-24 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                     <div className="bg-[#1e293b]/40 border border-blue-500/30 p-6 rounded-xl relative">
                        <div className="absolute top-6 -right-3 w-6 h-6 bg-[#1e293b] border-l border-t border-blue-500/30 transform rotate-45 hidden md:block"></div>
                        <div className="absolute top-6 -left-3 w-6 h-6 bg-[#1e293b] border-r border-b border-blue-500/30 transform rotate-45 md:hidden"></div>
                        
                        <div className="flex items-center md:justify-end mb-2">
                           <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded mr-2 md:mr-0 md:ml-2">Current Phase</span>
                           <h3 className="text-white font-bold">Foundation Building</h3>
                        </div>
                        <p className="text-slate-400 text-xs mb-4">We're currently here!</p>
                        <ul className="space-y-2">
                           {[
                             "Building client base and brand recognition",
                             "Commission-based compensation model",
                             "Establishing core team and culture",
                             "Developing MVP products and services"
                           ].map((item, i) => (
                              <li key={i} className="text-slate-300 text-xs flex items-center md:justify-end">
                                 <span className="md:order-2">{item}</span>
                                 <CheckCircle2 size={12} className="text-blue-500 mr-2 md:mr-0 md:ml-2 flex-shrink-0" />
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="md:w-1/2"></div>
               </div>
            </div>
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