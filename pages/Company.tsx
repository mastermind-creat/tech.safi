import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Compass, Users, Rocket, Shield, Cpu, Network } from 'lucide-react';

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

  return (
    <div className="pt-10 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Building a future where technology amplifies human potential, not replaces it.
          </p>
        </MotionDiv>

        {/* Leadership Principles */}
        <div className="mb-24">
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
                  <div className={`w-14 h-14 rounded-xl ${principle.color} flex items-center justify-center mb-6`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </Card>
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

            {/* Connector Lines (Desktop) */}
            <div className="hidden md:block absolute top-[160px] left-1/2 -translate-x-1/2 w-full h-12 pointer-events-none">
               {/* Vertical line from CEO */}
               <div className="absolute top-[-32px] left-1/2 -translate-x-px w-[2px] h-12 bg-white/10"></div>
               {/* Horizontal connecting line */}
               <div className="absolute top-[14px] left-[16.66%] right-[16.66%] h-[2px] bg-white/10"></div>
               {/* Vertical lines to children */}
               <div className="absolute top-[14px] left-[16.66%] w-[2px] h-8 bg-white/10"></div>
               <div className="absolute top-[14px] left-1/2 -translate-x-px w-[2px] h-8 bg-white/10"></div>
               <div className="absolute top-[14px] right-[16.66%] w-[2px] h-8 bg-white/10"></div>
            </div>

            {/* C-Level Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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
                  <h3 className="text-lg font-bold text-white/70">Pending Appointment</h3>
                  <div className="text-slate-500 text-xs font-bold tracking-wider uppercase mt-1 mb-3">Chief Marketing Officer</div>
                  <p className="text-slate-500 text-sm">Future leader focused on brand growth and demand generation.</p>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </div>

        {/* Strategic Leadership Additions */}
        <div className="mb-24">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">Strategic Leadership Additions</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base">
              Two senior leaders have joined the team to strengthen our platform, integrations and security posture as TechSafi scales its AI-powered platform.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {/* CIO */}
             <MotionDiv 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
               <Card className="h-full p-8 text-center bg-[#0f172a] border-white/10 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                 <h3 className="text-xl font-bold text-white">Keith Keizzah</h3>
                 <div className="text-blue-400 text-xs font-bold tracking-wider uppercase mt-1 mb-4">Chief Integration Officer (CIO)</div>
                 <p className="text-slate-400 text-sm">
                   Strengthens our AI and platform engineering capabilities to deliver dependable, production-ready integrations that accelerate customer value.
                 </p>
               </Card>
             </MotionDiv>

             {/* CSO */}
             <MotionDiv 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
               <Card className="h-full p-8 text-center bg-[#0f172a] border-white/10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-1 h-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors"></div>
                 <h3 className="text-xl font-bold text-white">Vinich Omuga</h3>
                 <div className="text-amber-400 text-xs font-bold tracking-wider uppercase mt-1 mb-4">Chief Security Officer (CSO)</div>
                 <p className="text-slate-400 text-sm">
                   Enhances the security, trust, and reliability of all TechSafi solutions—ensuring data protection and compliance as we scale.
                 </p>
               </Card>
             </MotionDiv>
          </div>
        </div>

        {/* Future Roles */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
           <h3 className="text-xl font-bold text-white mb-2">Future Leadership Roles</h3>
           <p className="text-slate-400 text-sm">
             Next wave of executive hires are planned as the company scales to meet growing market demands and expand our AI capabilities.
           </p>
        </MotionDiv>

      </div>
    </div>
  );
};
