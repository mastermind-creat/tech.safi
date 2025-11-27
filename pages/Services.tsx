import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Laptop, Smartphone, Palette, Cloud, BarChart3, Headphones, 
  Layers, CreditCard, Banknote, Wrench, Sliders, Users, 
  CheckCircle2, ArrowRight, Code2, Database, ShieldCheck
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const servicesList = [
  {
    icon: Laptop,
    color: "blue",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. We create fast, secure, and scalable solutions that deliver exceptional user experiences.",
    features: ["Responsive & Mobile-First Design", "E-commerce Solutions", "CMS Integration", "Progressive Web Apps", "API Development"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Smartphone,
    color: "purple",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth. We build intuitive, high-performance apps for iOS and Android.",
    features: ["iOS & Android Native Apps", "React Native & Flutter", "App Store Optimization", "Push Notifications", "In-App Purchases"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Palette,
    color: "pink",
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed to enhance user experience and drive engagement. We combine aesthetics with functionality for seamless digital experiences.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Interaction Design", "Design Systems", "Brand Identity"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Cloud,
    color: "sky",
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure solutions. We help businesses migrate to the cloud and optimize operations with AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security"],
    linkText: "Discuss Your Project"
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "SEO & Digital Marketing",
    description: "Data-driven digital marketing strategies to increase online visibility, drive traffic, and generate leads. We help you reach your target audience effectively.",
    features: ["Search Engine Optimization", "Content Marketing", "Social Media Management", "PPC Advertising", "Analytics & Reporting"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Headphones,
    color: "orange",
    title: "IT Consulting",
    description: "Expert technology consulting to help you make informed decisions about IT infrastructure, software development, and digital transformation initiatives.",
    features: ["Technology Strategy", "Digital Transformation", "IT Infrastructure", "Security Audits", "Technical Due Diligence"],
    linkText: "Discuss Your Project"
  },
  {
    icon: Layers,
    color: "indigo",
    title: "ERP Systems",
    description: "Comprehensive ERP solutions including Odoo, ERPNext, and custom ERP development to streamline your business operations and boost productivity.",
    features: ["Odoo Implementation", "ERPNext Deployment", "Custom ERP Development", "ERP Integration", "Module Customization"],
    linkText: "Get Started"
  },
  {
    icon: CreditCard,
    color: "teal",
    title: "POS & HR Systems",
    description: "Modern Point of Sale and Human Resource Management systems tailored to your business needs with seamless integration and user-friendly interfaces.",
    features: ["Custom POS Solutions", "HR Management Systems", "Inventory Management", "Payroll Processing", "Employee Self-Service"],
    linkText: "Learn More"
  },
  {
    icon: Banknote,
    color: "green",
    title: "M-Pesa Integration",
    description: "Automated M-Pesa payment integration for your applications, enabling seamless mobile money transactions with real-time processing and notifications.",
    features: ["STK Push Integration", "Payment Callbacks", "Transaction Tracking", "Automated Reconciliation", "Multi-Channel Support"],
    linkText: "Integrate Now"
  },
  {
    icon: Wrench,
    color: "amber",
    title: "System Maintenance & Upgrades",
    description: "Keep your systems running smoothly with our comprehensive maintenance, upgrade, and advancement services for existing software solutions.",
    features: ["Software Maintenance", "System Upgrades", "Performance Optimization", "Bug Fixes & Updates", "Feature Enhancement"],
    linkText: "Request Service"
  },
  {
    icon: Sliders,
    color: "rose",
    title: "Feature Customization",
    description: "Tailor existing systems to your specific needs with custom features, workflows, and integrations that enhance functionality and user experience.",
    features: ["Custom Feature Development", "Workflow Automation", "Third-Party Integrations", "UI/UX Improvements", "API Development"],
    linkText: "Customize Now"
  },
  {
    icon: Users,
    color: "cyan",
    title: "User Training",
    description: "Comprehensive training programs to ensure your team can effectively use and maximize the potential of your software systems and applications.",
    features: ["On-Site Training", "Remote Sessions", "Custom Training Materials", "Hands-On Workshops", "Ongoing Support"],
    linkText: "Book Training"
  }
];

export const Services: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <div className="bg-[#020617] min-h-screen pb-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient & Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#020617] to-[#020617] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[100px] pointer-events-none"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-[10%] w-24 h-24 border border-white/5 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-[15%] w-16 h-16 bg-blue-500/10 rounded-lg animate-pulse-slow rotate-12"></div>
        <div className="absolute bottom-10 left-[20%] w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-slate-300">
               <Layers size={14} className="mr-2 text-purple-400" /> Comprehensive Solutions
            </div>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white font-display mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Services</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              End-to-end technology solutions designed to <span className="text-orange-400 font-semibold">transform your business</span> and drive digital innovation.
            </p>
          </MotionDiv>

          {/* Tags */}
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {[
              { icon: Laptop, text: "Web Development" },
              { icon: Smartphone, text: "Mobile Apps" },
              { icon: Code2, text: "AI Solutions" },
              { icon: Cloud, text: "Cloud Services" },
              { icon: Palette, text: "UI/UX Design" }
            ].map((tag, i) => (
              <div key={i} className="flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs md:text-sm font-medium text-slate-300">
                <tag.icon size={14} className="mr-2 text-purple-400" /> {tag.text}
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white mb-4">What We <span className="text-blue-500">Offer</span></h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">From concept to deployment, we provide comprehensive technology solutions that help businesses thrive in the digital age.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <MotionDiv
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="h-full bg-[#0f172a] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-${service.color}-500/20`}>
                  <service.icon size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                   {service.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-start">
                        <CheckCircle2 size={16} className={`text-${service.color}-500 mt-0.5 mr-3 flex-shrink-0`} />
                        <span className="text-xs md:text-sm text-slate-300">{feature}</span>
                     </div>
                   ))}
                </div>

                {/* Action Link */}
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-${service.color}-400 hover:text-${service.color}-300 transition-colors mt-auto group-hover:translate-x-1 duration-300`}
                >
                  {service.linkText} <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};
