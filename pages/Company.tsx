import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Card } from '../components/ui/Card';
import { Linkedin, Twitter } from 'lucide-react';

export const Company: React.FC = () => {
  const MotionDiv = motion.div as any;
  return (
    <div className="pt-10 pb-20">
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

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <Card className="p-10 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold text-white font-display mb-4">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
              To be the global catalyst for ethical, sustainable, and high-impact artificial intelligence, making advanced technology accessible and beneficial for enterprises of all sizes.
            </p>
          </Card>
          <Card className="p-10 border-l-4 border-l-secondary">
            <h2 className="text-2xl font-bold text-white font-display mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              We empower organizations to navigate the digital frontier through custom-built AI solutions, rigorous security protocols, and intuitive software design that solves real-world problems.
            </p>
          </Card>
        </div>

        {/* Culture */}
        <div className="mb-24">
          <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-16 text-center">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
             <div className="relative z-10">
               <h2 className="text-3xl font-bold text-white font-display mb-6">Culture & Values</h2>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                 <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Innovation First</h3>
                   <p className="text-slate-400">We challenge the status quo daily.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Transparency</h3>
                   <p className="text-slate-400">Open communication in code and conduct.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
                   <p className="text-slate-400">Good enough is never enough.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-white font-display mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <MotionDiv
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col items-center text-center p-6 group">
                   <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-white/5 group-hover:ring-primary/50 transition-all">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   </div>
                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
                   <p className="text-primary font-medium mb-4">{member.role}</p>
                   <p className="text-slate-400 text-sm mb-6 flex-grow">{member.bio}</p>
                   <div className="flex space-x-4">
                     {member.socials.linkedin && (
                       <a href={member.socials.linkedin} className="text-slate-500 hover:text-white transition-colors">
                         <Linkedin size={18} />
                       </a>
                     )}
                     {member.socials.twitter && (
                       <a href={member.socials.twitter} className="text-slate-500 hover:text-white transition-colors">
                         <Twitter size={18} />
                       </a>
                     )}
                   </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};