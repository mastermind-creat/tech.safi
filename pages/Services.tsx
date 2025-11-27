
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Laptop, Smartphone, Palette, Cloud, BarChart3, Headphones, 
  Layers, CreditCard, Banknote, Wrench, Sliders, Users, 
  CheckCircle2, ArrowRight, Code2, Database, ShieldCheck,
  Search, ClipboardList, Rocket, Calendar, DollarSign,
  Server, Globe, Cpu, Terminal, Shield
} from 'lucide-react';
import { Button } from '../components/ui/Button';

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

const processSteps = [
  {
    step: "1",
    icon: Search,
    title: "Discover",
    desc: "We begin by understanding your business, goals, and challenges through in-depth discussions and research to define project requirements.",
    color: "bg-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    step: "2",
    icon: ClipboardList,
    title: "Plan",
    desc: "We create a detailed project plan with clear milestones, deliverables, timelines, and success metrics to ensure alignment.",
    color: "bg-purple-600",
    shadow: "shadow-purple-500/20"
  },
  {
    step: "3",
    icon: Code2,
    title: "Execute",
    desc: "Our team works diligently to bring your project to life with agile development, regular updates, and continuous feedback loops.",
    color: "bg-emerald-600",
    shadow: "shadow-emerald-500/20"
  },
  {
    step: "4",
    icon: Rocket,
    title: "Deliver",
    desc: "We launch your project successfully and provide ongoing support, maintenance, and optimization to ensure long-term success.",
    color: "bg-yellow-600",
    shadow: "shadow-yellow-500/20"
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: Globe,
    color: "text-blue-500 dark:text-blue-400",
    techs: ["React.js", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-emerald-500 dark:text-emerald-400",
    techs: ["Node.js", "Python/Django", "PHP", "Laravel", "Java/Spring", ".NET Core", "Ruby on Rails"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "text-purple-500 dark:text-purple-400",
    techs: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin", "Ionic", "Xamarin"]
  },
  {
    category: "Database",
    icon: Database,
    color: "text-yellow-500 dark:text-yellow-400",
    techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL Server"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-500 dark:text-cyan-400",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  {
    category: "AI & ML",
    icon: Cpu,
    color: "text-pink-500 dark:text-pink-400",
    techs: ["TensorFlow", "PyTorch", "OpenAI/GPT", "Scikit-learn", "Keras", "Hugging Face"]
  }
];

export const Services: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-0 overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        {/* Background Gradient & Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 via-slate-50 to-transparent dark:from-purple-900/20 dark:via-[#020617] dark:to-[#020617] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 blur-[100px] pointer-events-none"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-[10%] w-24 h-24 border border-slate-200 dark:border-white/5 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-[15%] w-16 h-16 bg-blue-500/5 dark:bg-blue-500/10 rounded-lg animate-pulse-slow rotate-12"></div>
        <div className="absolute bottom-10 left-[20%] w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-white/10 dark:border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-purple-600 dark:text-slate-300">
               <Layers size={14} className="mr-2 text-purple-500 dark:text-purple-400" /> Comprehensive Solutions
            </div>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white font-display mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Services</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              End-to-end technology solutions designed to <span className="text-orange-500 dark:text-orange-400 font-semibold">transform your business</span> and drive digital innovation.
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
              <div key={i} className="flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300">
                <tag.icon size={14} className="mr-2 text-purple-500 dark:text-purple-400" /> {tag.text}
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24 mt-16">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What We <span className="text-blue-500">Offer</span></h2>
           <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">From concept to deployment, we provide comprehensive technology solutions that help businesses thrive in the digital age.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <MotionDiv
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-blue-900/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 dark:bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-600 dark:text-${service.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-${service.color}-200 dark:border-${service.color}-500/20`}>
                  <service.icon size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                   {service.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-start">
                        <CheckCircle2 size={16} className={`text-${service.color}-500 mt-0.5 mr-3 flex-shrink-0`} />
                        <span className="text-xs md:text-sm text-slate-500 dark:text-slate-300">{feature}</span>
                     </div>
                   ))}
                </div>

                {/* Action Link */}
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-500 dark:hover:text-${service.color}-300 transition-colors mt-auto group-hover:translate-x-1 duration-300`}
                >
                  {service.linkText} <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="relative py-24 bg-slate-100 dark:bg-[#050b1d] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 border border-blue-500/20">
                 <ClipboardList size={12} className="mr-2" /> Our Methodology
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                 Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Process</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                 We follow a proven methodology to deliver exceptional results and ensure your project's success from start to finish.
              </p>

              {/* Payment Terms Card */}
              <div className="mt-8 inline-block">
                 <div className="bg-white dark:bg-[#0f172a] border border-blue-500/20 rounded-xl p-4 flex flex-col items-center shadow-lg shadow-blue-900/5">
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold mb-2">
                       <DollarSign size={16} className="mr-1" /> Payment Terms
                    </div>
                    <div className="flex gap-4 text-xs">
                       <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={12} className="text-green-500 mr-1.5" /> 
                          <span className="font-bold text-slate-900 dark:text-white mr-1">40% upfront fee</span> after agreement
                       </div>
                       <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={12} className="text-green-500 mr-1.5" />
                          <span className="font-bold text-slate-900 dark:text-white mr-1">Remaining 60%</span> on project delivery
                       </div>
                    </div>
                 </div>
              </div>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-500/20 z-0"></div>

               {processSteps.map((step, idx) => (
                  <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative z-10"
                  >
                     <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/5 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-slate-300 dark:hover:border-white/10 transition-all hover:-translate-y-1 group shadow-lg dark:shadow-none">
                        <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white text-xl font-bold mb-6 ${step.shadow} group-hover:scale-110 transition-transform`}>
                           {idx + 1}
                        </div>
                        <div className="mb-4">
                           <step.icon size={24} className="text-slate-400 mx-auto mb-2" />
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                           {step.desc}
                        </p>
                     </div>
                  </MotionDiv>
               ))}
            </div>

            <div className="text-center mt-12">
               <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-900/20 text-white">
                     <Rocket size={16} className="mr-2" /> Start Your Project Today <ArrowRight size={16} className="ml-2" />
                  </Button>
               </Link>
            </div>
         </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-24 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Technology Stack</span>
               </h2>
               <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  We work with modern technologies and frameworks to build robust, scalable, and future-proof solutions.
               </p>
            </MotionDiv>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
               {techStack.map((stack, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="flex flex-col items-center"
                  >
                     <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#1e293b] flex items-center justify-center mb-4 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                        <stack.icon size={24} className={stack.color} />
                     </div>
                     <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-3">{stack.category}</h3>
                     <ul className="space-y-1.5 text-center">
                        {stack.techs.map((tech, tIdx) => (
                           <li key={tIdx} className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
                              {tech}
                           </li>
                        ))}
                     </ul>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative py-20 bg-blue-600 overflow-hidden">
         {/* Decorative Circles/Background */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <MotionDiv
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
                  Ready to Transform Your Business?
               </h2>
               <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can help you achieve your business goals and drive growth.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                     <Button className="bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold px-8 py-4 h-auto text-base shadow-xl">
                        <Calendar size={18} className="mr-2" /> Schedule a Consultation
                     </Button>
                  </Link>
                  <Link to="/pricing">
                     <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 h-auto text-base">
                        <DollarSign size={18} className="mr-2" /> View Pricing
                     </Button>
                  </Link>
               </div>
            </MotionDiv>
         </div>
      </div>
    </div>
  );
};
