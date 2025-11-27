
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, AlertTriangle, FileText, Globe } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 pt-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
             <Scale size={12} className="mr-2" /> Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Terms of <span className="text-purple-500">Service</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Last updated: March 15, 2025
          </p>
        </MotionDiv>

        {/* Content */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-2xl p-8 md:p-12 space-y-10 shadow-lg dark:shadow-none"
        >
          <section>
            <div className="flex items-center mb-4">
              <Globe className="text-blue-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              By accessing and using the website and services of TechSafi ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <CheckCircle2 className="text-emerald-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Provision of Services</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              TechSafi provides software development, AI integration, and consulting services. We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-2 ml-4">
              <li>Modify or withdraw, temporarily or permanently, the website (or any part of it) with or without notice.</li>
              <li>Change these Conditions from time to time, and your continued use of the website (or any part of it) following such change shall be deemed to be your acceptance of such change.</li>
              <li>Refuse service to anyone for any reason at any time.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-yellow-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The Site and its original content, features, and functionality are owned by TechSafi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Client projects and deliverables will be transferred to the client upon full payment as defined in individual service contracts.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Limitation of Liability</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              In no event shall TechSafi, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Governing Law</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
            </p>
          </section>
        </MotionDiv>

      </div>
    </div>
  );
};
