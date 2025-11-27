
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, ShieldCheck, List } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
             <Cookie size={12} className="mr-2" /> Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            Cookie <span className="text-orange-500">Policy</span>
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
              <Cookie className="text-orange-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. What Are Cookies</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <List className="text-blue-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Cookies</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
            </p>
            <div className="bg-slate-100 dark:bg-[#0f172a] p-6 rounded-xl border border-slate-200 dark:border-white/5">
                <h3 className="text-slate-900 dark:text-white font-bold mb-3 text-sm">Types of Cookies We Use:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-3 flex-shrink-0"></div>
                        <span><strong>Essential Cookies:</strong> Necessary for the website to function properly. Examples include login sessions and security tokens.</span>
                    </li>
                    <li className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 flex-shrink-0"></div>
                        <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website by collecting and reporting information anonymously (e.g., Google Analytics).</span>
                    </li>
                    <li className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-3 flex-shrink-0"></div>
                        <span><strong>Functionality Cookies:</strong> Allow the website to remember choices you make (such as your user name, language, or the region you are in).</span>
                    </li>
                </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Settings className="text-slate-400 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Disabling Cookies</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <ShieldCheck className="text-green-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. More Information</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Hopefully, that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              <br /><br />
              For more information, you can contact us at: <span className="text-slate-900 dark:text-white font-bold">info@techsafi.com</span>
            </p>
          </section>
        </MotionDiv>

      </div>
    </div>
  );
};
