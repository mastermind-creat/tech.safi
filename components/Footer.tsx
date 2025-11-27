
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Lock, ShieldCheck, Send, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
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
             
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
               Empowering businesses across Kenya and beyond with innovative technology solutions. We transform ideas into digital reality through cutting-edge development and strategic consulting.
             </p>

             <div>
                <h5 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wide mb-4 flex items-center">
                   <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Connect With Us
                </h5>
                <div className="flex space-x-3">
                    {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                        <a key={i} href="#" className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
             </div>

             <div className="flex gap-4 pt-4">
                 <div className="flex items-center text-[10px] text-slate-500 font-medium">
                     <ShieldCheck size={14} className="text-green-500 mr-1.5" /> SSL Secured
                 </div>
                 <div className="flex items-center text-[10px] text-slate-500 font-medium">
                     <Lock size={14} className="text-yellow-500 mr-1.5" /> ISO Certified
                 </div>
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/company' },
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Pricing', path: '/pricing' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Contact', path: '/contact' }
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

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Our Services</h4>
            <ul className="space-y-3">
              {[
                  'Web Development', 'Mobile Apps', 'UI/UX Design', 'AI Solutions', 
                  'Cloud Solutions', 'Digital Marketing', 'IT Consulting'
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

          {/* Column 4: Get In Touch */}
          <div>
             <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Get In Touch</h4>
             <ul className="space-y-5">
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3 mt-1 flex-shrink-0">
                         <MapPin size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Location</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">Nairobi, Kenya</span>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 mr-3 mt-1 flex-shrink-0">
                         <Phone size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Call Us</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium block">+254 751 380 948</span>
                         <span className="text-slate-500 dark:text-slate-400 text-xs">+254 110 046 523</span>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 mr-3 mt-1 flex-shrink-0">
                         <Mail size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Email Us</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium">info@techsafi.com</span>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="w-8 h-8 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500 mr-3 mt-1 flex-shrink-0">
                         <Clock size={16} />
                     </div>
                     <div>
                         <span className="block text-xs text-slate-500 mb-0.5">Working Hours</span>
                         <span className="text-slate-700 dark:text-slate-300 font-medium block">Mon - Fri: 8AM - 6PM</span>
                         <span className="text-slate-500 dark:text-slate-400 text-xs">Sat: 9AM - 2PM</span>
                     </div>
                 </li>
             </ul>

             <div className="mt-8">
                 <NavLink to="/contact">
                     <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center">
                         <Send size={16} className="mr-2" /> Send Message
                     </button>
                 </NavLink>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-slate-500 text-xs">
              <span className="text-blue-500 mr-1">© 2025 TechSafi</span> - All rights reserved. Crafted with <span className="text-red-500 mx-1">❤</span> in Kenya
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500">
             <NavLink to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</NavLink>
             <span className="text-slate-300 dark:text-slate-700">|</span>
             <NavLink to="/terms-of-service" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</NavLink>
             <span className="text-slate-300 dark:text-slate-700">|</span>
             <NavLink to="/cookie-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</NavLink>
             <span className="text-slate-300 dark:text-slate-700">|</span>
             <NavLink to="/sitemap" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</NavLink>
          </div>
          <div className="text-[10px] text-slate-600 uppercase tracking-widest hidden md:block">
              Powered by Innovation • Driven by Excellence • Built for the Future
          </div>
        </div>
      </div>
    </footer>
  );
};
