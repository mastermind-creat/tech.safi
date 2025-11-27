
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Bot, Eye, Zap, Database, Mic, FileText, PenTool, 
  Search, ShieldAlert, BarChart, ArrowRight, CheckCircle2, 
  Cpu, MessageSquare, Layers, Code2, Server, Globe,
  Plug, Sparkles, ShoppingCart, Briefcase, Settings, 
  Headphones, Terminal, Atom, LayoutGrid, Flame, Smile, 
  Share2, Box, Anchor, Activity, Factory, Cloud,
  Target, MapPin, Shield, Star, GraduationCap, Truck, Home,
  Plus, Minus, ChevronDown, HelpCircle, Wallet, Users
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AiSolutions: React.FC = () => {
  const MotionDiv = motion.div as any;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    {
      icon: Brain,
      color: "blue",
      title: "Machine Learning",
      description: "We integrate predictive models into your applications that learn from your data to make intelligent decisions and forecasts.",
      subFeatures: ["Sales & Demand Forecasting", "Customer Behavior Prediction", "Fraud Detection Systems", "Smart Recommendation Engines"]
    },
    {
      icon: MessageSquare,
      color: "purple",
      title: "NLP & ChatGPT",
      description: "Enable machines to understand, interpret, and generate human language for intelligent communication.",
      subFeatures: ["AI Chatbots & Virtual Assistants", "GPT Integration & Fine-tuning", "Sentiment Analysis", "Text Classification & Summarization"]
    },
    {
      icon: Eye,
      color: "pink",
      title: "Computer Vision",
      description: "Extract meaningful information from images and videos to automate visual tasks and enhance decision-making.",
      subFeatures: ["Image Recognition & Classification", "Object Detection & Tracking", "Facial Recognition & Analysis", "Video Analytics & Processing"]
    },
    {
      icon: Bot,
      color: "emerald",
      title: "AI Automation",
      description: "Automate repetitive tasks and workflows with intelligent bots and robotic process automation.",
      subFeatures: ["Workflow Automation", "RPA Solutions", "Process Optimization", "Smart Assistants"]
    },
    {
      icon: Layers,
      color: "indigo",
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition and decision-making tasks.",
      subFeatures: ["Neural Networks", "Transfer Learning", "Generative AI", "Custom Models"]
    },
    {
      icon: Database,
      color: "amber",
      title: "Data Science",
      description: "Extract actionable insights from your data with advanced analytics and visualization.",
      subFeatures: ["Data Analytics", "Business Intelligence", "Data Visualization", "Statistical Modeling"]
    },
    {
      icon: Mic,
      color: "red",
      title: "Voice AI & Speech",
      description: "Integrate voice recognition and speech synthesis for hands-free interactions and voice-enabled applications.",
      subFeatures: ["Voice Recognition & Commands", "Text-to-Speech Synthesis", "Voice Assistants", "Audio Transcription"]
    },
    {
      icon: FileText,
      color: "teal",
      title: "Document Processing",
      description: "Automate document extraction, processing, and analysis with advanced OCR and intelligent document understanding.",
      subFeatures: ["OCR & Text Extraction", "Document Classification", "Form Data Extraction", "Invoice & Receipt Processing"]
    },
    {
      icon: PenTool,
      color: "orange",
      title: "AI Content Generation",
      description: "Generate high-quality content automatically using AI writing assistants and content creation tools.",
      subFeatures: ["Blog Posts & Articles", "Product Descriptions", "Social Media Content", "Email Templates"]
    },
    {
      icon: Search,
      color: "cyan",
      title: "AI-Powered Search",
      description: "Implement intelligent search that understands user intent and delivers relevant results with semantic understanding.",
      subFeatures: ["Semantic Search Engine", "Auto-Complete & Suggestions", "Image & Video Search", "Personalized Results"]
    },
    {
      icon: ShieldAlert,
      color: "rose",
      title: "Content Moderation",
      description: "Automatically detect and filter inappropriate content, spam, and harmful material using AI-powered moderation.",
      subFeatures: ["Text Moderation", "Image Moderation", "Spam Detection", "User Safety"]
    },
    {
      icon: BarChart,
      color: "violet",
      title: "Predictive Analytics",
      description: "Forecast future trends, behaviors, and outcomes using advanced predictive models and machine learning algorithms.",
      subFeatures: ["Sales Forecasting", "Churn Prediction", "Risk Assessment", "Trend Analysis"]
    },
    {
      icon: Zap,
      color: "emerald",
      title: "Real-time AI Processing",
      description: "Process data and make decisions in real-time with low-latency AI systems for instant responses and insights.",
      subFeatures: ["Real-time Decision Making", "Stream Processing", "Live Data Analysis", "Instant Notifications"]
    }
  ];

  const faqs = [
    {
      question: "How long does an AI integration project typically take?",
      answer: "The timeline varies based on complexity. Simple integrations like chatbots can take 2-4 weeks, while complex custom ML models may take 3-6 months. We provide a detailed timeline during the discovery phase."
    },
    {
      question: "Do I need to provide my own data for AI training?",
      answer: "Ideally, yes. Your specific data yields the best results. However, we can also use synthetic data or pre-trained models to get started if your data is limited, then refine it as you collect more."
    },
    {
      question: "What kind of ROI can I expect from AI implementation?",
      answer: "ROI comes from efficiency gains, cost reduction, and revenue growth. Our clients typically see 30-60% reduction in operational costs and 20-40% increase in customer engagement within the first year."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including model monitoring, retraining, performance optimization, and bug fixes to ensure your AI solution remains effective over time."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "Security is our top priority. We implement encryption, secure data pipelines, role-based access control, and comply with data protection regulations (like GDPR/local laws) to keep your data safe."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-0 overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 dark:to-transparent z-0 pointer-events-none"></div>
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
             <Brain size={12} className="mr-2" /> Artificial Intelligence
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white font-display mb-6 tracking-tight">
              Custom Software with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">AI Integration</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We build custom websites, software, and systems integrated with AI automation for your business. From chatbots to predictive analytics, we deliver intelligent solutions tailored to your needs.
            </p>
          </MotionDiv>

          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8 py-3 text-white">
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5 w-full sm:w-auto px-8 py-3">
                Explore Solutions
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>

      {/* Main Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
            AI Features We Build Into Your Software
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            Custom AI integrations designed specifically for your business requirements
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-[#1e293b]/40 rounded-2xl border border-slate-200 dark:border-white/5 p-8 hover:border-slate-300 dark:hover:border-white/10 dark:hover:bg-[#1e293b]/60 transition-all duration-300 shadow-lg dark:shadow-none">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-500 mb-6 border border-${feature.color}-200 dark:border-${feature.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 border-b border-slate-100 dark:border-white/5 pb-6">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.subFeatures.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center text-xs text-slate-500 dark:text-slate-300">
                      <CheckCircle2 size={12} className={`text-${feature.color}-500 mr-2`} />
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Add AI to Existing Website Section */}
      <div className="bg-slate-100 dark:bg-[#050b1d] py-24 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
                 Add AI to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Existing Website</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                 Transform your current website or software with AI capabilities without rebuilding from scratch
              </p>
           </MotionDiv>

           {/* Integration Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Plug, title: "Quick Integration", desc: "Seamlessly add AI features to your existing website with minimal downtime. No rebuild required.", color: "blue" },
                { icon: MessageSquare, title: "AI Chatbot Widget", desc: "Add an intelligent chatbot to your existing website. Works with WordPress, Shopify, custom sites, and more.", color: "purple" },
                { icon: Code2, title: "API Integration", desc: "Connect AI services to your existing software through REST APIs. Works with any technology stack.", color: "emerald" },
                { icon: Sparkles, title: "Smart Features", desc: "Add AI-powered search, recommendations, personalization, and content generation to existing pages.", color: "orange" }
              ].map((card, idx) => (
                <MotionDiv
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                >
                   <div className={`h-full bg-white dark:bg-[${card.color === 'blue' ? '#0f172a' : '#1e1b4b'}]/30 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group shadow-md dark:shadow-none`}>
                      <div className={`w-10 h-10 rounded-lg bg-${card.color}-100 dark:bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-500 dark:text-${card.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                         <card.icon size={20} />
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-bold mb-2">{card.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                   </div>
                </MotionDiv>
              ))}
           </div>

           {/* Use Cases Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: ShoppingCart, title: "E-commerce Sites", items: ["Product recommendation engine", "AI-powered search & filters", "Smart chatbot for customer support", "Price optimization & forecasting"] },
                { icon: Briefcase, title: "Business Websites", items: ["Lead qualification chatbot", "Content generation for blogs", "Smart contact forms with validation", "Personalized user experience"] },
                { icon: Settings, title: "Custom Software", items: ["Document processing & OCR", "Predictive analytics dashboards", "Automated workflow optimization", "Real-time data processing"] }
              ].map((card, idx) => (
                <MotionDiv
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + (idx * 0.1) }}
                   className="bg-white dark:bg-[#1e293b]/40 rounded-xl p-6 border border-slate-200 dark:border-white/5 shadow-md dark:shadow-none"
                >
                   <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded bg-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-100 dark:bg-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-500/10 flex items-center justify-center text-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-500 dark:text-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-400 mr-3`}>
                         <card.icon size={16} />
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-bold text-sm">{card.title}</h3>
                   </div>
                   <div className="space-y-2">
                      {card.items.map((item, i) => (
                         <div key={i} className="flex items-start text-xs text-slate-500 dark:text-slate-300">
                            <CheckCircle2 size={12} className="text-blue-500 mr-2 mt-0.5" />
                            {item}
                         </div>
                      ))}
                   </div>
                </MotionDiv>
              ))}
           </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our AI Development <span className="text-purple-500">Process</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
               A structured approach to delivering successful AI solutions that drive real business value
            </p>
         </MotionDiv>

         <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-8 left-20 right-20 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 z-0"></div>
            
            {[
              { step: "Discovery", desc: "We analyze your business needs, data availability, and define AI objectives.", icon: Search, color: "blue" },
              { step: "Data Preparation", desc: "We collect, clean, and prepare your data for model training and validation.", icon: Database, color: "purple" },
              { step: "Model Development", desc: "We design, train, and optimize AI models tailored to your specific use case.", icon: Settings, color: "emerald" },
              { step: "Integration", desc: "We seamlessly integrate the AI solution into your existing systems and workflows.", icon: Plug, color: "orange" },
              { step: "Support & Optimization", desc: "We provide ongoing maintenance, monitoring, and continuous improvement.", icon: Headphones, color: "red" }
            ].map((item, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full md:w-48 text-center relative z-10"
               >
                  <div className={`w-16 h-16 rounded-full bg-${item.color}-100 dark:bg-[#1e293b] border-4 border-white dark:border-[#020617] flex items-center justify-center text-${item.color}-500 mx-auto mb-6 shadow-lg`}>
                     <item.icon size={24} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-2">{item.step}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed px-2">{item.desc}</p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-slate-100 dark:bg-[#050b1d] py-24 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our AI Technology Stack</h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm">We leverage industry-leading technologies to build robust, scalable AI solutions</p>
            </MotionDiv>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
               {[
                 { name: "Python", icon: Terminal, color: "text-blue-500" },
                 { name: "OpenAI", icon: Bot, color: "text-green-500" },
                 { name: "Node.js", icon: Code2, color: "text-yellow-500" },
                 { name: "React", icon: Atom, color: "text-cyan-500" },
                 { name: "AWS AI", icon: Cloud, color: "text-orange-500" },
                 { name: "Azure AI", icon: LayoutGrid, color: "text-blue-600" },
                 { name: "PyTorch", icon: Flame, color: "text-red-500" },
                 { name: "Hugging Face", icon: Smile, color: "text-yellow-400" },
                 { name: "TensorFlow", icon: Share2, color: "text-orange-600" },
                 { name: "Google AI", icon: Globe, color: "text-blue-400" },
                 { name: "Docker", icon: Box, color: "text-blue-500" },
                 { name: "Kubernetes", icon: Anchor, color: "text-blue-700" }
               ].map((tech, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="bg-white dark:bg-[#1e293b] p-4 rounded-xl flex flex-col items-center justify-center hover:bg-slate-50 dark:hover:bg-[#2d3b4e] transition-colors border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none"
                  >
                     <tech.icon size={24} className={`mb-2 ${tech.color}`} />
                     <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{tech.name}</span>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose TechSafi for AI Solutions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Our unique approach sets us apart in delivering successful AI implementations</p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI-First Approach", desc: "We design solutions with AI at the core, not as an afterthought, ensuring maximum impact rather than superficial integration.", icon: Target, color: "blue" },
              { title: "Full-Stack Expertise", desc: "Our team combines AI specialists with software engineers to deliver complete, production-ready solutions.", icon: Users, color: "purple" },
              { title: "Local Understanding", desc: "We understand the unique opportunities in the Kenyan and East African market context.", icon: MapPin, color: "emerald" },
              { title: "Ethical AI Practices", desc: "We prioritize transparency, fairness, and accountability in all our AI implementations.", icon: Shield, color: "red" }
            ].map((item, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 p-8 rounded-2xl text-center hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-lg dark:shadow-none"
               >
                  <div className={`w-14 h-14 mx-auto rounded-full bg-${item.color}-100 dark:bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-500 mb-6`}>
                     <item.icon size={24} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-100 dark:bg-[#050b1d] py-24 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What Our Clients Say</h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Don't just take our word for it - hear from businesses we've transformed with AI</p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "James D.", role: "CTO, RetailTech Solutions", text: "TechSafi's AI recommendation engine transformed our e-commerce platform. Our conversion rates increased by 34% within just three months of implementation.", bg: "blue" },
                 { name: "Sarah M.", role: "Operations Director, HealthPlus", text: "The AI-powered diagnostic system TechSafi developed has significantly improved our patient outcomes while reducing diagnostic time by over 60%.", bg: "purple" },
                 { name: "Robert K.", role: "CEO, Manufacturing Pro", text: "TechSafi's predictive maintenance solution has saved us millions in equipment downtime. Their team's expertise in both AI and manufacturing is impressive.", bg: "emerald" }
               ].map((testimonial, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white dark:bg-[#1e293b]/40 p-8 rounded-2xl border border-slate-200 dark:border-white/5 relative shadow-lg dark:shadow-none"
                  >
                     <div className="flex items-center mb-6">
                        <div className={`w-10 h-10 rounded-full bg-${testimonial.bg}-600 flex items-center justify-center text-white font-bold text-sm mr-3`}>
                           {testimonial.name.charAt(0)}
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm">{testimonial.name}</h4>
                           <span className="text-slate-500 dark:text-slate-400 text-[10px]">{testimonial.role}</span>
                        </div>
                     </div>
                     <p className="text-slate-600 dark:text-slate-300 text-xs italic leading-relaxed">"{testimonial.text}"</p>
                     <div className="flex mt-4 text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                     </div>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Use Cases */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Industry Use Cases</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">AI solutions transforming businesses across industries</p>
         </MotionDiv>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Healthcare", desc: "Medical diagnosis, patient monitoring, drug discovery, and personalized treatment plans.", color: "blue" },
              { icon: ShoppingCart, title: "E-Commerce", desc: "Product recommendations, demand forecasting, dynamic pricing, and customer service automation.", color: "purple" },
              { icon: Factory, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading, and credit scoring.", color: "emerald" },
              { icon: Factory, title: "Manufacturing", desc: "Predictive maintenance, quality control, supply chain optimization, and process automation.", color: "orange" },
              { icon: Truck, title: "Transportation", desc: "Route optimization, autonomous vehicles, traffic prediction, and fleet management.", color: "red" },
              { icon: Megaphone, title: "Marketing", desc: "Customer segmentation, campaign optimization, content generation, and sentiment analysis.", color: "pink" },
              { icon: GraduationCap, title: "Education", desc: "Personalized learning paths, automated grading, student performance prediction, and adaptive content.", color: "indigo" },
              { icon: Truck, title: "Logistics", desc: "Supply chain optimization, demand forecasting, warehouse automation, and delivery route planning.", color: "teal" },
              { icon: Home, title: "Real Estate", desc: "Property valuation, market trend analysis, virtual property tours, and intelligent property matching.", color: "orange" }
            ].map((useCase, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-[#1e293b]/30 p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-[#1e293b]/50 transition-all shadow-sm dark:shadow-none"
               >
                  <div className={`text-${useCase.color}-500 mb-4`}>
                     {useCase.title === 'Marketing' ? <Zap size={24} /> : <useCase.icon size={24} />}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{useCase.desc}</p>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
         >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Get answers to common questions about our AI solutions</p>
         </MotionDiv>

         <div className="space-y-4">
            {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                     <span className="text-slate-900 dark:text-white font-bold text-sm pr-8">{faq.question}</span>
                     <span className="text-slate-400">
                        {openFaqIndex === idx ? <ChevronDown size={20} className="rotate-180 transition-transform" /> : <ChevronDown size={20} className="transition-transform" />}
                     </span>
                  </button>
                  <AnimatePresence>
                     {openFaqIndex === idx && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2">
                              {faq.answer}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>

      {/* Success Stories */}
      <div className="py-24 bg-slate-100 dark:bg-[#050b1d] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">AI Success Stories</h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm">Real-world examples of how our AI solutions have transformed businesses</p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "E-commerce Personalization", desc: "Implemented AI-powered recommendation engine for a retail client, increasing conversion rates by 34% and average order value by 22%.", icon: ShoppingCart, color: "blue" },
                 { title: "Healthcare Diagnostics", desc: "Developed computer vision system for medical imaging analysis, reducing diagnostic time by 65% and improving accuracy by 28%.", icon: Activity, color: "purple" },
                 { title: "Manufacturing Optimization", desc: "Created predictive maintenance system that reduced equipment downtime by 47% and maintenance costs by 32% for industrial client.", icon: Factory, color: "emerald" }
               ].map((story, idx) => (
                  <MotionDiv
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white dark:bg-[#1e293b]/40 rounded-2xl p-8 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-lg dark:shadow-none"
                  >
                     <div className={`w-12 h-12 rounded-full bg-${story.color}-100 dark:bg-${story.color}-500/20 flex items-center justify-center text-${story.color}-600 dark:text-${story.color}-400 mb-6`}>
                        <story.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{story.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">{story.desc}</p>
                     <Link to="/portfolio" className={`text-${story.color}-600 dark:text-${story.color}-400 text-xs font-bold flex items-center hover:underline`}>
                        Read Case Study <ArrowRight size={12} className="ml-1" />
                     </Link>
                  </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-blue-100 text-sm md:text-base mb-10 max-w-2xl mx-auto">
               Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <Link to="/contact">
               <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 shadow-xl">
                  Schedule AI Consultation
               </Button>
            </Link>
         </div>
      </div>

    </div>
  );
};

// Helper component for Marketing Icon
const Megaphone = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
);
