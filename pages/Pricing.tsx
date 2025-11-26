import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../constants';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const MotionDiv = motion.div as any;

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400 mb-8">Choose the plan that fits your ambition.</p>
          
          <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'annual' ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual <span className="ml-1 text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <MotionDiv
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative ${plan.recommended ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`h-full flex flex-col ${plan.recommended ? 'border-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : ''}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-slate-500 mb-1 ml-1">/mo</span>}
                  </div>
                  <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex items-start">
                      <Check size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};