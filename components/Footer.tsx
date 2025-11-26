import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Cloud } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#01040f] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <span className="text-xl font-bold font-display text-white">
                  Tech<span className="text-primary">Safi</span>
                </span>
             </div>
             <p className="text-slate-400 leading-relaxed">
               Pioneering the future of artificial intelligence and digital transformation. We build the systems that power tomorrow.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Cloud size={20} /></a>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3">
              <li><NavLink to="/company" className="text-slate-400 hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/careers" className="text-slate-400 hover:text-primary transition-colors">Careers</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</NavLink></li>
              <li><NavLink to="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Services</h4>
            <ul className="space-y-3">
              <li><NavLink to="/services" className="text-slate-400 hover:text-primary transition-colors">AI Development</NavLink></li>
              <li><NavLink to="/services" className="text-slate-400 hover:text-primary transition-colors">Cloud Solutions</NavLink></li>
              <li><NavLink to="/services" className="text-slate-400 hover:text-primary transition-colors">Cybersecurity</NavLink></li>
              <li><NavLink to="/services" className="text-slate-400 hover:text-primary transition-colors">Data Analytics</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="text-white font-bold mb-6 font-display">Stay Updated</h4>
             <p className="text-slate-400 mb-4 text-sm">Subscribe to our newsletter for the latest AI trends.</p>
             <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
               />
               <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-colors">
                 Subscribe
               </button>
             </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TechSafi. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
};