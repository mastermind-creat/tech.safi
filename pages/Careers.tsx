
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Globe, Heart, Rocket, Briefcase, GraduationCap, 
  Lightbulb, TrendingUp, Handshake, Trophy, Sprout, 
  ArrowRight, CheckCircle2, Send, Sparkles,
  Wallet, Palmtree, Home, Dumbbell, Baby, Utensils,
  Info, Bell, Laptop, FileText, MessageCircle, Phone, 
  ChevronDown, Plus, Minus, Star, Award, Calendar, MapPin, Clock,
  Brain, Palette, Lock, AlertTriangle, Zap, Target,
  Factory, Building2, Mail
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
      desc: "We encourage creative thinking and reward innovative solutions to complex problems. Every team member has a voice.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      desc: "Teamwork is at the heart of everything we do. We believe in working together to achieve greatness and celebrate success.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      desc: "We invest in your growth with training, conferences, and learning opportunities. Stay at the forefront of technology.",
      color: "green"
    }
  ];

  const benefits = [
    { icon: Rocket, title: "Build Your Legacy", desc: "Shape TechSafi's culture and future direction as a founding member.", color: "blue" },
    { icon: TrendingUp, title: "Unlimited Growth", desc: "Rapidly expand your skills and career opportunities as we scale.", color: "purple" },
    { icon: Handshake, title: "Direct Rewards", desc: "Earn commissions on clients you bring in, controlling your financial growth.", color: "emerald" },
    { icon: Users, title: "Collaborative Team", desc: "Work with passionate individuals who support each other's success.", color: "pink" },
    { icon: Trophy, title: "Priority Benefits", desc: "First in line for permanent roles and equity when we reach profitability.", color: "orange" },
    { icon: Briefcase, title: "Real Experience", desc: "Build a robust portfolio with real-world projects that matter.", color: "indigo" }
  ];

  const employeeBenefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Medical, dental, and vision insurance." },
    { icon: Wallet, title: "Financial Security", desc: "401(k) matching & planning." },
    { icon: Palmtree, title: "Time Off", desc: "Generous PTO & holidays." },
    { icon: Home, title: "Remote Work", desc: "Work from anywhere flexibility." },
    { icon: GraduationCap, title: "Learning", desc: "Annual budget for courses." },
    { icon: Dumbbell, title: "Wellness", desc: "Gym & mental health support." },
    { icon: Baby, title: "Family", desc: "Parental leave & support." },
    { icon: Utensils, title: "Food", desc: "Catered lunches & snacks." }
  ];

  const futureRoles = [
    { 
      title: "Chief AI Officer", 
      icon: Brain, 
      department: "Engineering",
      desc: "Will lead advanced AI strategy, research initiatives, and machine learning innovation across all product lines." 
    },
    { 
      title: "Chief Design Officer", 
      icon: Palette, 
      department: "Design",
      desc: "Will champion UX/UI excellence, brand strategy, and design systems to create intuitive, beautiful user experiences." 
    },
    { 
      title: "Chief Sales Officer", 
      icon: TrendingUp, 
      department: "Sales",
      desc: "Will steer revenue growth, customer acquisition strategies, and build high-performance sales teams across markets." 
    },
    { 
      title: "Chief HR Officer", 
      icon: Heart, 
      department: "Operations",
      desc: "Will nurture company culture, talent development, and organizational design to support sustainable growth and innovation." 
    }
  ];

  const compFaqs = [
    {
      question: "How does the commission structure work?",
      answer: "Our commission structure is transparent and generous. You earn a percentage of the revenue from every client project you secure. This applies to both one-time projects and recurring contracts."
    },
    {
      question: "When will fixed salaries be introduced?",
      answer: "We plan to introduce base salaries once the company reaches specific revenue milestones. Early team members will be prioritized for these salaried positions."
    },
    {
      question: "What other benefits do I get besides commissions?",
      answer: "You get invaluable hands-on experience building a startup, mentorship, networking opportunities, and a flexible remote working environment."
    },
    {
      question: "Is this suitable for someone currently unemployed?",
      answer: "Yes, this role is ideal for skilled individuals who want to stay active, build their portfolio, and earn money based on performance while building towards a permanent role."
    }
  ];

  const roadmapSteps = [
    {
      id: 1,
      title: "Foundation Building",
      status: "We're currently here!",
      features: [
        "Building client base and brand recognition",
        "Commission-based compensation model",
        "Assembling passionate founding team"
      ],
      icon: Sprout,
      color: "blue"
    },
    {
      id: 2,
      title: "Revenue Growth",
      status: "Next Phase",
      features: [
        "Consistent monthly revenue streams",
        "Introduction of base salaries + commissions",
        "Expanded team and project portfolio"
      ],
      icon: TrendingUp,
      color: "purple"
    },
    {
      id: 3,
      title: "Stable Operations",
      status: "Future Goal",
      features: [
        "Full-time positions with competitive salaries",
        "Comprehensive benefits package",
        "Early team members prioritized for permanent roles"
      ],
      icon: Trophy,
      color: "emerald"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-0 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-slate-50 to-blue-100/40 dark:from-purple-900/20 dark:via-[#020617] dark:to-blue-900/20"></div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-[10%] w-32 h-32 border border-slate-200 dark:border-white/5 rounded-lg rotate-12 animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-[5%] w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-purple-600 dark:text-purple-300 shadow-sm"
          >
             <Users size={12} className="mr-2" /> Join Our Team
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
              Build the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">With Us</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Work with a <span className="text-slate-900 dark:text-white font-semibold">passionate team</span> that values innovation, creativity, and making a real impact.
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
               { icon: Users, label: "5+ Team Members" },
               { icon: MapPin, label: "Remote / Hybrid" },
               { icon: Heart, label: "Great Culture" }
             ].map((badge, idx) => (
                <div key={idx} className="flex items-center px-4 py-2 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                   <badge.icon size={14} className="mr-2 text-purple-500" /> {badge.label}
                </div>
             ))}
          </MotionDiv>

          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-slate-900 dark:bg-white text-white dark:text-purple-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-8 py-3 rounded-lg shadow-lg">
              <CheckCircle2 size={18} className="mr-2" /> Explore Our Culture
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 px-8 py-3 rounded-lg bg-white/50 dark:bg-transparent">
              <Briefcase size={18} className="mr-2" /> View Open Positions
            </Button>
          </MotionDiv>
        </div>
      </div>

      {/* --- GROWTH PHASE NOTIFICATION CARD --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-20">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-8 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
             <Rocket size={120} className="text-amber-500" />
          </div>
          
          <div className="relative z-10">
             <div className="inline-flex items-center px-3 py-1 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-500/20">
                <AlertTriangle size={12} className="mr-2" /> Early Stage
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                Building Together, Growing Together
             </h3>
             
             <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                   Right now, <span className="font-bold">TechSafi</span> is still in its early growth phase, so we're not offering fixed salaries yet. We're building our client base and growing the brand so that we can eventually create stable, well-paying positions for the team.
                </p>
                <p>
                   At this stage, I'm bringing together passionate and skilled individuals who are currently unemployed but want to grow with the agency. We'll be working collaboratively to build something solid and long-term.
                </p>
             </div>

             <div className="mt-6 bg-white dark:bg-[#0f172a] border border-amber-200 dark:border-amber-500/20 rounded-xl p-4 flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400 mr-4 flex-shrink-0">
                   <Handshake size={20} />
                </div>
                <div>
                   <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Commission-Based Opportunities</h4>
                   <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      We offer commissions based on the clients you bring in — meaning you still earn as we grow together. And once we start generating consistent revenue, those who helped build the foundation will be the first to benefit from permanent roles and higher rewards.
                   </p>
                </div>
             </div>

             <div className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                   If you're someone who's ready to learn, contribute, and grow in a forward-thinking team, I'd really love to have you on board.
                </p>
                <Link to="/contact">
                   <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white border-0 shadow-lg shadow-amber-900/10 whitespace-nowrap">
                      Join Our Journey
                   </Button>
                </Link>
             </div>
          </div>
        </MotionDiv>
      </div>

      {/* --- OUR CULTURE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our <span className="text-purple-500">Culture</span></h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
               At TechSafi, we believe our people are our greatest asset. We've built a culture that fosters innovation, collaboration, and continuous learning.
            </p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((val, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg dark:shadow-none"
               >
                  <div className={`w-16 h-16 rounded-2xl bg-${val.color}-100 dark:bg-${val.color}-500/10 flex items-center justify-center text-${val.color}-500 mx-auto mb-6`}>
                     <val.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{val.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     {val.desc}
                  </p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* --- JOB OPENINGS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Marketing Role Card */}
             <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-lg dark:shadow-none relative overflow-hidden group hover:border-blue-500/30 transition-all"
             >
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded">Growth</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Marketing Specialist</h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
                    <span className="flex items-center"><MapPin size={12} className="mr-1"/> Remote</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1"/> Full Time</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                   We're inviting experienced growth marketers to support our expansion. Due to our ongoing growth phase, you must read and comply with the Growth Phase Notification before applying.
                </p>
                
                <div className="space-y-3 mb-6">
                   {[
                     "3+ years in growth or performance marketing",
                     "Hands-on experience with acquisition funnels and analytics",
                     "Comfortable in fast-moving, startup-like environments"
                   ].map((req, i) => (
                      <div key={i} className="flex items-start">
                         <CheckCircle2 size={14} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                         <span className="text-slate-600 dark:text-slate-300 text-xs">{req}</span>
                      </div>
                   ))}
                </div>
                
                <div className="bg-slate-50 dark:bg-[#0f172a] rounded-lg p-3 mb-6 flex items-start cursor-pointer border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-[#1e293b] transition-colors" onClick={() => setAgreedToNotice(!agreedToNotice)}>
                   <div className={`w-4 h-4 rounded border mt-0.5 mr-3 flex items-center justify-center transition-colors ${agreedToNotice ? 'bg-blue-500 border-blue-500' : 'border-slate-400 dark:border-slate-500'}`}>
                      {agreedToNotice && <CheckCircle2 size={12} className="text-white" />}
                   </div>
                   <span className="text-xs text-slate-500 dark:text-slate-400 select-none">
                      I confirm I've read and accept the <span className="text-blue-500 dark:text-blue-400 font-bold">Growth Phase Notification</span>.
                   </span>
                </div>

                <Link to="/contact">
                   <Button 
                      className={`w-full ${agreedToNotice ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50 text-white'}`}
                      disabled={!agreedToNotice}
                   >
                      <Send size={16} className="mr-2" /> Apply via Contact Form
                   </Button>
                </Link>
             </MotionDiv>

             {/* Strategic Roles Grid (Right Side) */}
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-purple-500 pl-3">Upcoming Strategic Roles</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {futureRoles.map((role, idx) => (
                         <div key={idx} className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                            <div className="flex justify-between items-start mb-2">
                               <role.icon size={18} className="text-slate-400" />
                               <span className="text-[10px] bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded text-slate-500 dark:text-slate-300">Pending</span>
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{role.title}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{role.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
         </div>
      </div>

      {/* --- DREAM JOB --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-[#1e293b]/30 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 overflow-hidden"
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Don't see your dream job?</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                     We're always looking for talented individuals to join our team. Even if you don't see a position that matches your skills, we'd love to hear from you and keep your profile for future opportunities.
                  </p>
                  <Link to="/contact">
                     <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg">
                        <Send size={18} className="mr-2" /> Send Us Your Resume
                     </Button>
                  </Link>
               </div>
               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                     alt="Team Collaboration" 
                     className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
            </div>
         </MotionDiv>
      </div>

      {/* --- INTERNSHIP & ATTACHMENT SECTION --- */}
      <div className="bg-slate-50 dark:bg-[#0a0f1d] py-24 relative overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
         {/* Background */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-20"></div>
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-200 dark:border-blue-500/30">
                  <GraduationCap size={12} className="mr-2" /> For Students
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Internship & Industrial <span className="text-blue-500">Attachment</span></h2>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm">
                  Launch your tech career with TechSafi! We offer comprehensive internship and industrial attachment programs designed to give students real-world experience in cutting-edge technology projects.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               {[
                 { title: "Hands-On Experience", desc: "Work on real projects alongside experienced developers. Gain practical skills in web, mobile, and AI.", icon: Laptop, color: "blue" },
                 { title: "Mentorship Program", desc: "Get paired with experienced mentors who will guide you through your learning journey and professional skills.", icon: Users, color: "purple" },
                 { title: "Career Development", desc: "Receive certificates, recommendation letters, and potential job offers for outstanding performers.", icon: Award, color: "pink" }
               ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                     <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 mb-4`}>
                        <item.icon size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Internship Card */}
               <div className="bg-blue-600 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                     <Briefcase size={100} className="text-white" />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold text-white mb-2 flex items-center"><GraduationCap className="mr-3" /> Internship Program</h3>
                     <p className="text-blue-100 text-xs mb-6">3-6 Months Duration</p>
                     
                     <div className="space-y-3 mb-8">
                        <h4 className="text-sm font-bold text-white flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-300" /> What You'll Get:</h4>
                        <ul className="text-sm text-blue-50 space-y-2 pl-6">
                           <li>Monthly stipend for your contributions</li>
                           <li>Flexible working hours (part-time/full-time)</li>
                           <li>Remote or hybrid work options</li>
                           <li>Certificate of completion</li>
                           <li>Potential for full-time employment</li>
                        </ul>
                     </div>
                     
                     <div className="bg-blue-800/50 p-4 rounded-xl border border-blue-400/30">
                        <p className="text-xs text-blue-100"><strong>Requirements:</strong> Currently enrolled in university/college pursuing IT, Computer Science, Software Engineering, or related field.</p>
                     </div>
                  </div>
               </div>

               {/* Attachment Card */}
               <div className="bg-purple-600 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                     <Factory size={100} className="text-white" />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold text-white mb-2 flex items-center"><Building2 size={24} className="mr-3" /> Industrial Attachment</h3>
                     <p className="text-purple-100 text-xs mb-6">3 Months Duration</p>
                     
                     <div className="space-y-3 mb-8">
                        <h4 className="text-sm font-bold text-white flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-300" /> What You'll Get:</h4>
                        <ul className="text-sm text-purple-50 space-y-2 pl-6">
                           <li>Structured training program</li>
                           <li>Dedicated supervisor and mentor</li>
                           <li>Weekly progress reviews and feedback</li>
                           <li>Official attachment letter for your institution</li>
                           <li>Final assessment report and recommendation</li>
                        </ul>
                     </div>
                     
                     <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-400/30">
                        <p className="text-xs text-purple-100"><strong>Requirements:</strong> Students required to complete industrial attachment as part of their academic program.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* --- HOW TO APPLY SECTION --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="bg-white dark:bg-[#1e293b]/30 rounded-3xl p-10 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">How to <span className="text-blue-500">Apply</span></h3>
            
            <div className="flex flex-wrap justify-center gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-white/10 z-0"></div>

               {[
                 { step: "1", title: "Prepare Documents", desc: "CV, cover letter, transcripts, and recommendation letter", color: "blue" },
                 { step: "2", title: "Submit Application", desc: "Send via email with subject 'Internship/Attachment'", color: "purple" },
                 { step: "3", title: "Interview", desc: "Virtual or in-person interview with our team", color: "pink" },
                 { step: "4", title: "Start Learning", desc: "Begin your journey with onboarding and orientation", color: "green" }
               ].map((item, idx) => (
                  <div key={idx} className="w-48 text-center relative z-10">
                     <div className={`w-12 h-12 rounded-full bg-${item.color}-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-white dark:border-[#1e293b]`}>
                        {item.step}
                     </div>
                     <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{item.title}</h4>
                     <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="mt-12 flex justify-center gap-4">
               <a href="mailto:internships@techsafi.com">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                     Apply for Internship
                  </Button>
               </a>
               <a href="mailto:internships@techsafi.com">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                     Apply for Attachment
                  </Button>
               </a>
            </div>
            
            <div className="text-center mt-6 text-xs text-slate-500">
               <p className="mb-1"><Mail size={12} className="inline mr-1" /> For inquiries: <span className="text-blue-500">internships@techsafi.com</span></p>
               <p><Phone size={12} className="inline mr-1" /> Call us: <span className="text-blue-500">+254 751 380 948</span></p>
            </div>
         </div>
      </div>

      {/* --- WHY JOIN TECHSAFI --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-200 dark:border-white/5">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Why Join <span className="text-blue-500">TechSafi</span>?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Be part of building something meaningful from the ground up</p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:border-slate-300 dark:hover:border-white/10 transition-colors group shadow-lg dark:shadow-none"
               >
                  <div className={`w-10 h-10 rounded-lg bg-${benefit.color}-100 dark:bg-${benefit.color}-500/10 flex items-center justify-center text-${benefit.color}-500 mb-4 group-hover:scale-110 transition-transform`}>
                     <benefit.icon size={20} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                     {benefit.desc}
                  </p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Employee Benefits Grid */}
      <div className="py-24 bg-slate-100 dark:bg-[#0f172a]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-4">Employee <span className="text-purple-500">Benefits</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-center text-sm mb-16 max-w-2xl mx-auto">We offer competitive benefits to support you and your family's health, wealth, and well-being.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {employeeBenefits.map((benefit, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="bg-white dark:bg-[#1e293b]/40 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all text-center shadow-sm dark:shadow-none"
                  >
                     <div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                        <benefit.icon size={18} />
                     </div>
                     <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{benefit.title}</h4>
                     <p className="text-slate-500 dark:text-slate-400 text-[10px]">{benefit.desc}</p>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* --- GROWTH ROADMAP SECTION --- */}
      <div className="py-24 bg-slate-50 dark:bg-[#0a0f1d] border-y border-slate-200 dark:border-white/5 overflow-hidden relative transition-colors duration-300">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-20"></div>
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px]"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-20"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                  Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Roadmap</span>
               </h2>
               <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-6"></div>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  See where we're heading and how you can be part of our journey
               </p>
            </MotionDiv>

            <div className="relative">
               <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden md:block"></div>

               <div className="space-y-16">
                  {roadmapSteps.map((step, idx) => (
                     <MotionDiv
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: idx * 0.2 }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                     >
                        <div className="hidden md:block w-1/2"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                           <div className={`w-16 h-16 rounded-full bg-${step.color}-600 border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center text-white shadow-lg shadow-${step.color}-500/30`}>
                              <step.icon size={28} />
                           </div>
                        </div>
                        <div className="w-full md:w-1/2">
                           <div className={`bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-${step.color}-500/50 transition-colors group relative overflow-hidden shadow-lg dark:shadow-none ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                              <div className={`absolute top-0 w-full h-1 bg-${step.color}-500 opacity-50 left-0`}></div>
                              <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className={`md:hidden w-10 h-10 rounded-full bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-600 dark:text-${step.color}-400`}>
                                    <step.icon size={18} />
                                 </div>
                                 <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-${step.color}-500/10 text-${step.color}-600 dark:text-${step.color}-400 border border-${step.color}-500/20`}>
                                    {step.id}
                                 </span>
                                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                              </div>
                              <p className={`text-slate-500 dark:text-slate-400 text-xs italic mb-4 ${step.color === 'blue' ? 'text-blue-600 dark:text-blue-300' : ''}`}>
                                 {step.status}
                              </p>
                              <ul className={`space-y-2 inline-block text-left`}>
                                 {step.features.map((feat, i) => (
                                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                                       <CheckCircle2 size={14} className={`mt-1 mr-3 flex-shrink-0 text-${step.color}-500`} />
                                       {feat}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </MotionDiv>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Compensation FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Compensation <span className="text-blue-500">FAQ</span></h2>
         <p className="text-slate-600 dark:text-slate-400 text-center text-sm mb-10">Common questions about our compensation model and growth opportunities</p>
         
         <div className="space-y-4">
            {compFaqs.map((faq, idx) => (
               <div key={idx} className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                  <button 
                    onClick={() => toggleCompFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                     <span className="text-slate-900 dark:text-white font-bold text-sm pr-8">{faq.question}</span>
                     <span className="text-slate-400">
                        {openCompFaq === idx ? <ChevronDown size={20} className="rotate-180 transition-transform" /> : <ChevronDown size={20} className="transition-transform" />}
                     </span>
                  </button>
                  <AnimatePresence>
                     {openCompFaq === idx && (
                        <MotionDiv
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2">
                              {faq.answer}
                           </div>
                        </MotionDiv>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-cyan-100 text-sm md:text-base mb-10 max-w-2xl mx-auto">
               Even without current openings, we're always interested in connecting with talented individuals who are passionate about technology and innovation.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 shadow-xl">
                     <Send size={18} className="mr-2" /> Send Us Your Resume
                  </Button>
               </Link>
               <Link to="/company">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-3">
                     <Users size={18} className="mr-2" /> Learn About Our Team
                  </Button>
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
};
