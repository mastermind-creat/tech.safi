
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, CheckCircle2, HelpCircle, ChevronDown, Plus, Minus, 
  Smartphone, Globe, ShoppingCart, Zap, Server, Shield, 
  CreditCard, Clock, Award, Bot, Brain, Cpu, MessageSquare, 
  Sparkles, BarChart, Settings, Repeat, Code2, Wrench
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const MotionDiv = motion.div as any;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Helper to calculate discount
  const getDisplayPrice = (priceStr: string) => {
    if (priceStr === 'Custom') return priceStr;
    
    // Remove commas and '+' for parsing
    const cleanStr = priceStr.replace(/,/g, '').replace(/\+/g, '');
    const numericValue = parseInt(cleanStr, 10);
    
    if (isNaN(numericValue)) return priceStr;

    if (billingCycle === 'annual') {
      // Apply 20% discount for Retainer/Annual
      const discounted = Math.round(numericValue * 0.8);
      return discounted.toLocaleString() + (priceStr.includes('+') ? '+' : '');
    }
    
    // Return original if Monthly/One-time
    return priceStr;
  };

  const webPackages = [
    {
      name: "Portfolio Website",
      desc: "Perfect for freelancers & creatives",
      price: "35,000",
      features: [
        "Custom designed portfolio website",
        "Up to 5 pages",
        "Mobile-responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "1 month free support",
        "2 rounds of revisions"
      ],
      recommended: false
    },
    {
      name: "Business Website",
      desc: "Ideal for small businesses",
      price: "85,000",
      features: [
        "Up to 10 custom pages",
        "CMS integration (WordPress/Strapi)",
        "Blog setup & migration",
        "Advanced contact forms",
        "Google Analytics setup",
        "3 months free support",
        "Social media integration",
        "Basic e-commerce functionality"
      ],
      recommended: true
    },
    {
      name: "E-commerce Store",
      desc: "Complete online store solution",
      price: "150,000",
      features: [
        "Full e-commerce functionality",
        "Product catalog setup (up to 50)",
        "Shopping cart & checkout",
        "M-Pesa & Card Payment Integration",
        "Inventory management",
        "6 months free support",
        "Order tracking system",
        "Customer account management"
      ],
      recommended: false
    }
  ];

  const mobilePackages = [
    {
      name: "Basic Mobile App",
      desc: "Simple utility or content apps",
      price: "250,000",
      features: [
        "Cross-platform development (iOS & Android)",
        "Up to 5 main screens",
        "Basic UI/UX design",
        "Simple backend integration",
        "App store submission assistance",
        "2 months free support"
      ]
    },
    {
      name: "Advanced Mobile App",
      desc: "Feature-rich applications",
      price: "550,000",
      features: [
        "Native iOS & Android development",
        "Complex UI/UX with animations",
        "Custom backend development",
        "Third-party API integrations",
        "Push notifications & User Auth",
        "In-app purchases & Payments",
        "6 months free support",
        "Advanced analytics dashboard"
      ]
    }
  ];

  const aiAddons = [
    {
      icon: Bot,
      name: "AI Chatbot",
      desc: "Basic conversational bot",
      price: "60,000",
      features: [
        "Custom AI chatbot integration",
        "Basic Q&A training (up to 50 questions)",
        "Website widget installation",
        "Multi-language support",
        "Basic analytics dashboard",
        "1 month free support",
        "Mobile-responsive design"
      ],
      color: "blue"
    },
    {
      icon: Brain,
      name: "Advanced AI Features",
      desc: "Multiple AI capabilities",
      price: "180,000",
      features: [
        "Advanced AI chatbot with GPT Integration",
        "Product recommendation engine",
        "Sentiment analysis for reviews",
        "Content personalization",
        "Predictive analytics dashboard",
        "3 months free support",
        "Custom AI model training",
        "API integration for existing systems"
      ],
      recommended: true,
      color: "purple"
    },
    {
      icon: Cpu,
      name: "Enterprise AI Suite",
      desc: "Complete AI transformation",
      price: "350,000",
      features: [
        "Full AI automation suite",
        "Custom machine learning models",
        "Computer vision integration",
        "Natural language processing",
        "Advanced data analytics",
        "6 months free support",
        "Dedicated AI specialist",
        "Scalable cloud infrastructure"
      ],
      color: "indigo"
    }
  ];

  const aiProjects = [
    {
      icon: Globe,
      name: "AI-Powered Website",
      desc: "Website with AI built-in",
      price: "280,000",
      features: [
        "Custom website development",
        "AI chatbot integration",
        "Smart content recommendations",
        "Personalized user experience",
        "AI-powered search functionality",
        "3 months free support",
        "Basic analytics & insights"
      ],
      color: "emerald"
    },
    {
      icon: Settings,
      name: "Custom AI Application",
      desc: "Tailored AI solution",
      price: "700,000+",
      sub: "starting at",
      features: [
        "Custom AI application development",
        "Machine learning model development",
        "Advanced data processing",
        "Custom algorithm development",
        "Scalable infrastructure setup",
        "6 months free support",
        "Dedicated AI development team",
        "Complete documentation & training"
      ],
      color: "pink"
    }
  ];

  const monthlyServices = [
    {
      icon: Bot,
      name: "AI Chatbot Maintenance",
      price: "10,000",
      features: [
        "Chatbot performance monitoring",
        "Regular training data updates",
        "Response optimization",
        "Monthly analytics reports",
        "Technical support & updates"
      ],
      color: "blue"
    },
    {
      icon: Brain,
      name: "AI Model Training",
      price: "30,000",
      features: [
        "Continuous model improvement",
        "New data integration",
        "Model performance optimization",
        "A/B testing & validation",
        "Monthly model updates",
        "Expert AI consultation"
      ],
      color: "purple"
    },
    {
      icon: Wrench,
      name: "Website Maintenance",
      price: "15,000",
      features: [
        "Weekly backups & security scans",
        "Plugin & core software updates",
        "Uptime monitoring (24/7)",
        "Speed performance optimization",
        "Content updates (2 hrs/mo)"
      ],
      color: "emerald"
    },
    {
      icon: BarChart,
      name: "SEO Optimization",
      price: "25,000",
      features: [
        "Keyword research & strategy",
        "On-page SEO optimization",
        "Technical SEO audits",
        "Content recommendations",
        "Monthly performance reports"
      ],
      color: "orange"
    },
    {
      icon: Settings,
      name: "Custom Services",
      price: "Custom",
      features: [
        "Dedicated development hours",
        "Priority support SLA",
        "Strategic consulting",
        "Custom feature development",
        "Quarterly business reviews"
      ],
      color: "slate"
    }
  ];

  const faqs = [
    {
      question: "Are there any hidden fees?",
      answer: "No, our pricing is transparent. The quoted price includes design, development, and deployment. The only recurring costs are domain and hosting, which we can help you set up."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, for projects over KES 100,000, we offer a 40% upfront, 30% milestone, and 30% completion payment structure. We can also discuss custom milestones for larger projects."
    },
    {
      question: "What happens after the project is completed?",
      answer: "We provide a free support period (varying by package) to fix any bugs. After that, you can subscribe to our maintenance packages for ongoing updates, backups, and security monitoring."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. Our solutions are scalable. You can start with a basic website and upgrade to add e-commerce or custom features as your business grows."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-0 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 via-slate-50 to-transparent dark:from-purple-900/20 dark:via-[#020617] dark:to-[#020617] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 blur-[100px] pointer-events-none"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-5 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-white/10 border border-purple-200 dark:border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-purple-600 dark:text-purple-300"
          >
             <CreditCard size={12} className="mr-2" /> Transparent Pricing
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Affordable</span> Pricing
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Perfect for <span className="text-slate-900 dark:text-white font-semibold">startups</span>, portfolios, and growing businesses. No hidden fees, cancel anytime.
            </p>
          </MotionDiv>

          {/* Feature Badges */}
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: Shield, text: "Money-back guarantee" },
              { icon: CreditCard, text: "Flexible payment plans" },
              { icon: Clock, text: "24/7 support included" }
            ].map((badge, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm dark:shadow-none">
                <badge.icon size={14} className="text-purple-500 dark:text-purple-400" />
                <span>{badge.text}</span>
              </div>
            ))}
          </MotionDiv>

          {/* Toggle */}
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="inline-flex items-center p-1 bg-slate-200 dark:bg-white/5 rounded-full border border-slate-300 dark:border-white/10 backdrop-blur-md"
          >
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-white dark:bg-purple-600 text-slate-900 dark:text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              One-Time
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'annual' ? 'bg-white dark:bg-purple-600 text-slate-900 dark:text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Retainer <span className="ml-1 text-[10px] bg-pink-500 text-white px-1.5 py-0.5 rounded-full">Save 20%</span>
            </button>
          </MotionDiv>
        </div>
      </div>

      {/* Web Development Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-16">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Web Development <span className="text-purple-500">Packages</span></h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
               From simple portfolios to complex web applications, we have the perfect solution for your needs.
            </p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {webPackages.map((pkg, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative ${pkg.recommended ? 'md:-mt-8 md:mb-8 z-10' : ''}`}
               >
                  <div className={`h-full bg-white dark:bg-[#0f172a] rounded-2xl border ${pkg.recommended ? 'border-purple-500 shadow-2xl shadow-purple-500/10 dark:shadow-purple-900/20' : 'border-slate-200 dark:border-white/10'} p-8 flex flex-col relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-300 shadow-lg`}>
                     {pkg.recommended && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg shadow-lg">
                           Most Popular
                        </div>
                     )}
                     
                     <div className="text-center mb-8 pt-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">{pkg.desc}</p>
                        <div className="flex items-end justify-center gap-1">
                           <span className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">KES</span>
                           <span className="text-4xl font-bold text-slate-900 dark:text-white">{getDisplayPrice(pkg.price)}</span>
                           <span className="text-[10px] text-slate-500 dark:text-slate-500 mb-1.5">{billingCycle === 'annual' ? 'discounted' : 'one-time'}</span>
                        </div>
                     </div>

                     <div className="mb-8">
                        <Link to="/contact">
                           <Button className={`w-full ${pkg.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border-0 text-slate-900 dark:text-white'}`}>
                              Get Started
                           </Button>
                        </Link>
                     </div>

                     <div className="space-y-4 flex-grow">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">What's Included</p>
                        {pkg.features.map((feature, i) => (
                           <div key={i} className="flex items-start">
                              <CheckCircle2 size={14} className={`mt-0.5 mr-3 flex-shrink-0 ${pkg.recommended ? 'text-blue-500 dark:text-blue-400' : 'text-emerald-500'}`} />
                              <span className="text-slate-600 dark:text-slate-300 text-xs">{feature}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Mobile App Development Section */}
      <div className="bg-slate-100 dark:bg-[#0f172a] py-24 mb-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Mobile App <span className="text-blue-500">Development</span></h2>
               <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto mb-6"></div>
               <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Native and cross-platform mobile applications for iOS and Android.
               </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {mobilePackages.map((pkg, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white dark:bg-[#020617] border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group shadow-lg"
                  >
                     <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">{pkg.desc}</p>
                        <div className="flex items-end justify-center gap-1">
                           <span className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">KES</span>
                           <span className="text-4xl font-bold text-slate-900 dark:text-white">{getDisplayPrice(pkg.price)}</span>
                           <span className="text-[10px] text-slate-500 mb-1.5">{billingCycle === 'annual' ? 'discounted' : 'one-time'}</span>
                        </div>
                     </div>

                     <div className="mb-8">
                        <Link to="/contact">
                           <Button className={`w-full ${idx === 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border-0 text-slate-900 dark:text-white'}`}>
                              Get Quote
                           </Button>
                        </Link>
                     </div>

                     <div className="space-y-4">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Features</p>
                        {pkg.features.map((feature, i) => (
                           <div key={i} className="flex items-start">
                              <Check size={14} className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-300 text-xs">{feature}</span>
                           </div>
                        ))}
                     </div>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* AI Integration Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">AI Integration <span className="text-indigo-500">Services</span></h2>
            <div className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
               Add intelligent features to your existing website or build AI-powered applications from scratch.
            </p>
         </MotionDiv>

         <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">Add AI to Your Existing Website</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
               {aiAddons.map((pkg, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className={`relative ${pkg.recommended ? 'md:-mt-4 md:mb-4 z-10' : ''}`}
                  >
                     <div className={`h-full bg-white dark:bg-[#0f172a] rounded-2xl border ${pkg.recommended ? 'border-purple-500 shadow-xl shadow-purple-500/10 dark:shadow-purple-900/10' : 'border-slate-200 dark:border-white/10'} p-8 flex flex-col relative overflow-hidden group hover:border-${pkg.color}-500/50 transition-colors duration-300 shadow-lg dark:shadow-none`}>
                        {pkg.recommended && (
                           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg shadow-lg">
                              Popular
                           </div>
                        )}
                        
                        <div className="text-center mb-8 pt-4">
                           <div className={`w-12 h-12 rounded-xl bg-${pkg.color}-100 dark:bg-${pkg.color}-500/10 flex items-center justify-center text-${pkg.color}-500 mx-auto mb-4 border border-${pkg.color}-200 dark:border-${pkg.color}-500/20`}>
                              <pkg.icon size={24} />
                           </div>
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{pkg.name}</h3>
                           <p className="text-slate-500 dark:text-slate-400 text-[10px] mb-4">{pkg.desc}</p>
                           <div className="flex items-end justify-center gap-1">
                              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">KES</span>
                              <span className="text-3xl font-bold text-slate-900 dark:text-white">{getDisplayPrice(pkg.price)}</span>
                              <span className="text-[10px] text-slate-500 mb-1.5">{billingCycle === 'annual' ? 'discounted' : 'one-time'}</span>
                           </div>
                        </div>

                        <div className="mb-6">
                           <Link to="/contact">
                              <Button className={`w-full ${pkg.recommended ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border-0 text-slate-900 dark:text-white'}`}>
                                 Get Started
                              </Button>
                           </Link>
                        </div>

                        <div className="space-y-3 flex-grow">
                           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">What's Included</p>
                           {pkg.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                 <Check size={12} className={`mt-0.5 mr-2 flex-shrink-0 text-${pkg.color}-500 dark:text-${pkg.color}-400`} />
                                 <span className="text-slate-600 dark:text-slate-300 text-[11px]">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </MotionDiv>
               ))}
            </div>
         </div>

         <div className="mb-12 pt-12 border-t border-slate-200 dark:border-white/5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">Full AI Integration Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {aiProjects.map((pkg, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-lg dark:shadow-none"
                  >
                     <div className="text-center mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-${pkg.color}-100 dark:bg-${pkg.color}-500/10 flex items-center justify-center text-${pkg.color}-500 mx-auto mb-4 border border-${pkg.color}-200 dark:border-${pkg.color}-500/20`}>
                           <pkg.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{pkg.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] mb-4">{pkg.desc}</p>
                        <div className="flex items-end justify-center gap-1">
                           <span className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">KES</span>
                           <span className="text-3xl font-bold text-slate-900 dark:text-white">{getDisplayPrice(pkg.price)}</span>
                           <span className="text-[10px] text-slate-500 mb-1.5">{pkg.sub || (billingCycle === 'annual' ? 'discounted' : 'one-time')}</span>
                        </div>
                     </div>

                     <div className="mb-6">
                        <Link to="/contact">
                           <Button className={`w-full bg-${pkg.color === 'emerald' ? 'green' : 'pink'}-600 hover:bg-${pkg.color === 'emerald' ? 'green' : 'pink'}-700 text-white`}>
                              Get Quote
                           </Button>
                        </Link>
                     </div>

                     <div className="space-y-3">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Features</p>
                        {pkg.features.map((feature, i) => (
                           <div key={i} className="flex items-start">
                              <Check size={12} className={`mt-0.5 mr-2 flex-shrink-0 text-${pkg.color === 'emerald' ? 'green' : 'pink'}-500 dark:text-${pkg.color === 'emerald' ? 'green' : 'pink'}-400`} />
                              <span className="text-slate-600 dark:text-slate-300 text-[11px]">{feature}</span>
                           </div>
                        ))}
                     </div>
                  </MotionDiv>
               ))}
            </div>
         </div>

         <div className="pt-12 border-t border-slate-200 dark:border-white/5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">Monthly Services & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {monthlyServices.map((svc, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all flex flex-col items-center text-center group hover:-translate-y-1 shadow-lg dark:shadow-none"
                  >
                     <div className={`w-10 h-10 rounded-lg bg-${svc.color}-100 dark:bg-${svc.color}-500/10 flex items-center justify-center text-${svc.color}-500 mb-3 group-hover:scale-110 transition-transform`}>
                        <svc.icon size={20} />
                     </div>
                     <h3 className="text-slate-900 dark:text-white font-bold mb-1">{svc.name}</h3>
                     <div className="flex items-end gap-1 mb-4">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">KES</span>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">{getDisplayPrice(svc.price)}</span>
                        <span className="text-[10px] text-slate-500 mb-1">{svc.price !== 'Custom' ? '/month' : ''}</span>
                     </div>
                     
                     <ul className="space-y-2 mb-6 w-full text-left pl-4 flex-grow">
                        {svc.features.map((feat, i) => (
                           <li key={i} className="flex items-start text-[11px] text-slate-600 dark:text-slate-300">
                              <CheckCircle2 size={12} className={`text-${svc.color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                              {feat}
                           </li>
                        ))}
                     </ul>

                     <Link to="/contact" className="w-full">
                        <Button className={`w-full bg-${svc.color}-600 hover:bg-${svc.color}-700 py-2 h-auto text-xs text-white`}>
                           {svc.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                        </Button>
                     </Link>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
         >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Have questions about our pricing? We have answers.</p>
         </MotionDiv>

         <div className="space-y-4">
            {faqs.map((faq, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
               >
                  <div className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                     <button 
                       onClick={() => toggleFaq(idx)}
                       className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                     >
                        <span className="text-slate-900 dark:text-white font-bold text-sm pr-8">{faq.question}</span>
                        <span className="text-slate-400">
                           {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                     </button>
                     {openFaq === idx && (
                        <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2">
                           {faq.answer}
                        </div>
                     )}
                  </div>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* CTA */}
      <div className="relative py-20 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900"></div>
         {/* Decorative elements */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <MotionDiv
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                   Don't see a package that fits your needs? We offer tailored solutions for enterprises and complex projects.
                </p>
                <Link to="/contact">
                   <Button className="bg-white text-purple-600 dark:text-purple-900 hover:bg-gray-100 font-bold px-8 py-3 shadow-xl">
                      Contact Sales Team
                   </Button>
                </Link>
            </MotionDiv>
         </div>
      </div>

    </div>
  );
};
