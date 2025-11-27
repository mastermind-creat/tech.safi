
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
  Brain, Palette, Lock, AlertTriangle, Zap
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
      desc: "We encourage creative thinking and reward innovative solutions to complex problems.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      desc: "Teamwork is at the heart of everything we do. We believe in working together to achieve greatness.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      desc: "We invest in your growth with training, conferences, and learning opportunities.",
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
              Work with a <span className="text-slate-900 dark:text-white font-semibold">passionate team</span> that values innovation and impact.
            </p>
          </MotionDiv>

          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button className="bg-slate-900 dark:bg-white text-white dark:text-purple-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold px-8 py-3 rounded-full shadow-lg">
              <CheckCircle2 size={18} className="mr-2" /> Explore Our Culture
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 px-8 py-3 rounded-full bg-white/50 dark:bg-transparent">
              <Briefcase size={18} className="mr-2" /> View Open Positions
            </Button>
          </MotionDiv>
        </div>
      </div>

      {/* --- GROWTH PHASE NOTIFICATION CARD (Restored) --- */}
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

      {/* Modernized Job Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-[10px] text-slate-400 mt-2 text-center">Only apply if you're genuinely interested and meet the Growth Phase requirements.</p>
             </MotionDiv>

             {/* Talent Pool / General Interest */}
             <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-100 to-white dark:from-[#1e293b]/40 dark:to-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-center shadow-lg dark:shadow-none"
             >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                    <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Future Opportunities</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                   Don't see a perfect match? We're always looking for talented developers and designers. Join our talent pool to be notified first.
                </p>
                
                <input 
                   type="email" 
                   placeholder="Enter your email address" 
                   className="w-full bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-all mb-4"
                />
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                   Notify Me About New Jobs
                </Button>
                <div className="text-center">
                   <Link to="/contact" className="text-xs text-slate-500 hover:text-purple-500 hover:underline">Or send us a message describing your skills.</Link>
                </div>
             </MotionDiv>
         </div>

         {/* Upcoming Strategic Roles Grid */}
         <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-slate-300 dark:border-slate-700 pl-4">Upcoming Strategic Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {futureRoles.map((role, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white dark:bg-[#1e293b]/20 border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-[#1e293b]/40 transition-all group"
                  >
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                              <role.icon size={20} />
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-900 dark:text-white">{role.title}</h4>
                              <span className="text-xs text-slate-500 uppercase tracking-wide">{role.department}</span>
                           </div>
                        </div>
                        <span className="bg-slate-100 dark:bg-white/5 text-slate-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Pending</span>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[40px]">
                        {role.desc}
                     </p>
                     <Button 
                        disabled 
                        className="w-full bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/5 cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/5 py-2 text-xs"
                     >
                        <Lock size={12} className="mr-2" /> Opening Soon
                     </Button>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* --- GROWTH ROADMAP SECTION (Added) --- */}
      <div className="py-24 bg-slate-900 dark:bg-[#0a0f1d] border-y border-white/5 overflow-hidden relative">
         {/* Background Effects */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-20"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                  Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Roadmap</span>
               </h2>
               <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-6"></div>
               <p className="text-slate-400 max-w-2xl mx-auto">
                  See where we're heading and how you can be part of our journey
               </p>
            </MotionDiv>

            <div className="relative">
               {/* Vertical Line */}
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
                        {/* Empty Side */}
                        <div className="hidden md:block w-1/2"></div>

                        {/* Center Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                           <div className={`w-16 h-16 rounded-full bg-${step.color}-600 border-4 border-slate-900 flex items-center justify-center text-white shadow-lg shadow-${step.color}-500/30`}>
                              <step.icon size={28} />
                           </div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2">
                           <div className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-${step.color}-500/50 transition-colors group relative overflow-hidden ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                              <div className={`absolute top-0 w-full h-1 bg-${step.color}-500 opacity-50 left-0`}></div>
                              
                              <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className={`md:hidden w-10 h-10 rounded-full bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-400`}>
                                    <step.icon size={18} />
                                 </div>
                                 <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-${step.color}-500/10 text-${step.color}-400 border border-${step.color}-500/20`}>
                                    {step.id}
                                 </span>
                                 <h3 className="text-xl font-bold text-white">{step.title}</h3>
                              </div>

                              <p className={`text-slate-400 text-xs italic mb-4 ${step.color === 'blue' ? 'text-blue-300' : ''}`}>
                                 {step.status}
                              </p>

                              <ul className={`space-y-2 inline-block text-left`}>
                                 {step.features.map((feat, i) => (
                                    <li key={i} className="flex items-start text-slate-300 text-sm">
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

      {/* Why Join TechSafi Section (Refined) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                     className="bg-white dark:bg-[#1e293b]/40 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all text-center"
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

      {/* FAQ Accordion */}
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
