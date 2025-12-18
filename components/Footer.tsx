
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Lock, ShieldCheck, Send, Github, Snowflake, Gift } from 'lucide-react';

export const Footer: React.FC = () => {
  const isDecember = new Date().getMonth() === 11;

  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 text-sm transition-colors duration-300 overflow-hidden relative">
      {/* Festive Addon: Subtle animated background elements */}
      {isDecember && (
        <>
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            <Snowflake size={120} className="text-blue-500 animate-spin-slow" />
          </div>
          <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none">
            <Gift size={80} className="text-purple-500 animate-bounce" />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          
          {/* Column 1: Brand & Socials - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
             <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/20">
                   <img src="https://cdn-icons-png.flaticon.com/512/3208/3208728.png" className="w-6 h-6 invert" alt="Logo" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold font-display text-slate-900 dark:text-white leading-none">
                    Tech<span className="text-primary">Safi</span>
                    </span>
                    <span className="text-[10px] text-slate-500 tracking-widest uppercase mt-1">Innovation & Solutions</span>
                </div>
             </div>
             
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm max-w-sm">
               Empowering businesses across Kenya and beyond with innovative technology solutions. We transform ideas into digital reality through cutting-edge development and strategic consulting.
             </p>

             <div>
                <h5 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wide mb-4 flex items-center">
                   <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Connect With Us
                </h5>
                <div className="flex flex-wrap gap-3">
                    {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                        <a key={i} href="#" className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
             </div>
          </div>

          {/* Column 2: Quick Links - 1 column on mobile (side-by-side with Services) */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/company' },
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Pricing', path: '/pricing' }
              ].map((link) => (
                  <li key={link.name}>
                      <NavLink 
                        to={link.path} 
                        className="text-slate-600 dark:text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
                      >
                          <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 mr-2"></span>
                          {link.name}
                      </NavLink>
                  </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services - 1 column on mobile (side-by-side with Quick Links) */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Our Services</h4>
            <ul className="space-y-3">
              {[
                  'Web Apps', 'Mobile Apps', 'UI/UX Design', 'AI Solutions', 
                  'Cloud Tech'
              ].map((service) => (
                  <li key={service}>
                      <NavLink 
                        to="/services" 
                        className="text-slate-600 dark:text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
                      >
                          <span className="w-1.5 h-1.5 text-primary mr-2">›</span>
                          {service}
                      </NavLink>
                  </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch - Full width on mobile for readability */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
             <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Get In Touch</h4>
             <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3 flex-shrink-0">
                         <MapPin size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Location</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">Nairobi, Kenya</span>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 mr-3 flex-shrink-0">
                         <Phone size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Call Us</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">+254 751 380 948</span>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 mr-3 flex-shrink-0">
                         <Mail size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Email Us</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">info@techsafi.com</span>
                     </div>
                 </li>
             </ul>

             <div className="pt-4">
                 <NavLink to="/contact">
                     <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center group">
                         <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                     </button>
                 </NavLink>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center text-slate-500 text-xs text-center md:text-left gap-2">
              <span className="flex items-center">
                <span className="text-blue-500 mr-1 font-bold">© 2025 TechSafi</span> - All rights reserved.
              </span>
              {isDecember && (
                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full font-bold flex items-center border border-emerald-500/20">
                  <Gift size={10} className="mr-1.5" /> Happy Holidays!
                </span>
              )}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
             <NavLink to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</NavLink>
             <NavLink to="/terms-of-service" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</NavLink>
             <NavLink to="/cookie-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</NavLink>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center text-[10px] text-slate-500 font-medium">
                 <ShieldCheck size={14} className="text-green-500 mr-1.5" /> SSL Secure
             </div>
             <div className="flex items-center text-[10px] text-slate-500 font-medium">
                 <Lock size={14} className="text-yellow-500 mr-1.5" /> ISO Certified
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </footer>
  );
};
