
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Globe, Heart, Rocket, Briefcase, GraduationCap, 
  Lightbulb, TrendingUp, Handshake, Trophy, Sprout, 
  ArrowRight, CheckCircle2, Send, Sparkles,
  Wallet, Palmtree, Home, Dumbbell, Baby, Utensils,
  Info, Bell, Laptop, FileText, MessageCircle, Phone, 
  ChevronDown, Plus, Minus, Star, Award, Calendar, MapPin, Clock
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

      {/* Modernized Job Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Marketing Role Card - Upgraded Visuals */}
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
                   We're inviting experienced growth marketers to support our expansion. Due to our ongoing growth phase, you must read and comply with the Growth Phase Notification.
                </p>
                
                <div className="space-y-3 mb-6">
                   {[
                     "3+ years in growth marketing",
                     "Experience with acquisition funnels",
                     "Comfortable in startup environments"
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
                      I accept the <span className="text-blue-500 dark:text-blue-400 font-bold">Growth Phase Terms</span>.
                   </span>
                </div>

                <Button 
                   className={`w-full ${agreedToNotice ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50 text-white'}`}
                   disabled={!agreedToNotice}
                >
                   <Send size={16} className="mr-2" /> Apply Now
                </Button>
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
                   Join Talent Network
                </Button>
             </MotionDiv>
         </div>
      </div>

      {/* Why Join TechSafi Section (Refined) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
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

      {/* FAQ Accordion (Clean) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">Compensation FAQ</h2>
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

    </div>
  );
};
