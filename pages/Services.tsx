import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Card } from '../components/ui/Card';
import { Brain, Server, Shield, Zap, Smartphone, Globe, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={32} />,
  Server: <Server size={32} />,
  Shield: <Shield size={32} />,
  Zap: <Zap size={32} />,
  Smartphone: <Smartphone size={32} />,
  Globe: <Globe size={32} />,
};

export const Services: React.FC = () => {
  const MotionDiv = motion.div as any;
  return (
    <div className="pt-10 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Services & Solutions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive technology services tailored to accelerate your growth.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/40 transition-colors">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 text-primary border border-white/5 shadow-inner">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
                <div className="space-y-2 mt-auto">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* AI Spotlight Section */}
        <div className="mt-32 relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/20 p-8 md:p-16">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
                Specialized AI Integration
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Unlock the power of Generative AI. We help enterprises integrate Large Language Models (LLMs) into their existing workflows to automate support, content generation, and data analysis securely.
              </p>
              <button className="px-6 py-3 bg-white text-dark font-bold rounded-lg hover:bg-slate-200 transition-colors">
                Explore AI Solutions
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary mb-2">10x</div>
                  <div className="text-sm text-slate-400">Faster Data Processing</div>
                </div>
                <div className="bg-dark/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm mt-8">
                  <div className="text-3xl font-bold text-secondary mb-2">60%</div>
                  <div className="text-sm text-slate-400">Cost Reduction</div>
                </div>
                <div className="bg-dark/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm -mt-8">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-slate-400">Automated Operations</div>
                </div>
                <div className="bg-dark/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-sm text-slate-400">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};