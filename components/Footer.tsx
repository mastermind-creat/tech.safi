
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail,
  Clock, Lock, ShieldCheck, Send, Github, Snowflake, Gift
} from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

const SOCIAL_ICONS: Record<string, any> = {
  // Fix: changed LinkedIn to Linkedin and GitHub to Github to match lucide-react imports
  Facebook, Twitter, Linkedin, Instagram, Github
};

export const Footer: React.FC = () => {
  const { config } = useConfig();
  const isDecember = new Date().getMonth() === 11;

  if (!config) return null;

  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 text-sm transition-colors duration-300 overflow-hidden relative">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/logo/logo1.png" alt="TechSafi Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-slate-900 dark:text-white leading-none">
                  {config.navbar.logoPrimary}<span className="text-primary">{config.navbar.logoAccent}</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase mt-1">Innovation & Solutions</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm max-w-sm">
              {config.footer.tagline}
            </p>

            <div>
              <h5 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wide mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Connect With Us
              </h5>
              <div className="flex flex-wrap gap-3">
                {config.footer.socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.platform] || social.platform.charAt(0);
                  return (
                    <a key={social.id} href={social.url} className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-[#1e293b] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                      {typeof Icon === 'string' ? Icon : <Icon size={16} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Quick Links</h4>
            <ul className="space-y-3">
              {config.footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 mr-2"></span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Our Services</h4>
            <ul className="space-y-3">
              {config.footer.serviceLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 text-primary mr-2">›</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 pl-3 border-l-2 border-primary">Get In Touch</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">Location</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{config.footer.address}</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 mr-3 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">Call Us</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{config.footer.phone}</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 mr-3 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">Email Us</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{config.footer.email}</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 max-w-sm">
              <NavLink to="/contact">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center group active:scale-95">
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" /> Send Message
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center text-slate-500 text-xs text-center md:text-left gap-2">
            <span className="flex items-center">
              <span className="text-blue-500 mr-1 font-bold">{config.footer.copyright.split(' - ')[0]}</span> - {config.footer.copyright.split(' - ')[1]}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
            {config.footer.legalLinks.map((link) => (
              <NavLink key={link.id} to={link.path} className="hover:text-slate-900 dark:hover:text-white transition-colors">{link.label.split(' ')[0]}</NavLink>
            ))}
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
