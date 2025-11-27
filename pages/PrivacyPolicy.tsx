
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <div className="bg-[#020617] min-h-screen pb-20 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
             <Shield size={12} className="mr-2" /> Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: March 15, 2025
          </p>
        </MotionDiv>

        {/* Content */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-8 md:p-12 space-y-10"
        >
          <section>
            <div className="flex items-center mb-4">
              <Eye className="text-blue-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We collect information that you provide directly to us when you use our services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-2 ml-4">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information (Company name, role, project requirements)</li>
              <li>Communications you send to us</li>
              <li>Usage data and cookies via our website analytics</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Server className="text-purple-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-2 ml-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support and project updates</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="text-emerald-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-white">3. Data Security</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We utilize industry-standard SSL encryption and secure server infrastructure.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-pink-500 mr-3" size={24} />
              <h2 className="text-xl font-bold text-white">4. Third-Party Disclosure</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
              <br /><br />
              <span className="text-white font-bold">Email:</span> privacy@techsafi.com<br />
              <span className="text-white font-bold">Address:</span> Nairobi, Kenya
            </p>
          </section>
        </MotionDiv>

      </div>
    </div>
  );
};
