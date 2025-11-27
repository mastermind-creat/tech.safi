
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ChevronRight, Home, Building2, Layers, CreditCard, Users, Mail, Newspaper, FileText } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const MotionDiv = motion.div as any;

  const sections = [
    {
      title: "Main",
      icon: Home,
      color: "blue",
      links: [
        { name: "Home", path: "/" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact Us", path: "/contact" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Company",
      icon: Building2,
      color: "purple",
      links: [
        { name: "About Us", path: "/company" },
        { name: "Our Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Services",
      icon: Layers,
      color: "emerald",
      links: [
        { name: "All Services", path: "/services" },
        { name: "AI Solutions", path: "/ai-solutions" },
        { name: "Web Development", path: "/services" },
        { name: "Mobile Apps", path: "/services" }
      ]
    },
    {
      title: "Legal & Support",
      icon: FileText,
      color: "orange",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
             <Map size={12} className="mr-2" /> Navigation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Site <span className="text-cyan-500">Map</span>
          </h1>
          <p className="text-slate-400 text-sm">
            An overview of the content available on our website.
          </p>
        </MotionDiv>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl bg-${section.color}-500/10 flex items-center justify-center text-${section.color}-500 mb-6 border border-${section.color}-500/20`}>
                <section.icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-white mb-6">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.path}
                      className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm group"
                    >
                      <ChevronRight size={14} className={`mr-2 text-${section.color}-500 group-hover:text-white transition-colors`} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>

      </div>
    </div>
  );
};
