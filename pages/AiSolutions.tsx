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
  Plus, Minus, ChevronDown, HelpCircle, Wallet
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
    <div className="bg-[#020617] min-h-screen pb-0 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-[#020617] z-0 pointer-events-none"></div>
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
             <Brain size={12} className="mr-2" /> Artificial Intelligence
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6 tracking-tight">
              Custom Software with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI Integration</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
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
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 w-full sm:w-auto px-8 py-3">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
            AI Features We Build Into Your Software
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
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
              <div className="h-full bg-[#1e293b]/40 rounded-2xl border border-white/5 p-8 hover:border-white/10 hover:bg-[#1e293b]/60 transition-all duration-300">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-6 border border-${feature.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.subFeatures.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center text-xs text-slate-300">
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
      <div className="bg-[#050b1d] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                 Add AI to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Existing Website</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                   <div className={`h-full bg-[${card.color === 'blue' ? '#0f172a' : '#1e1b4b'}]/30 border border-white/5 rounded-xl p-6 hover:bg-white/5 transition-colors group`}>
                      <div className={`w-10 h-10 rounded-lg bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                         <card.icon size={20} />
                      </div>
                      <h3 className="text-white font-bold mb-2">{card.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
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
                   className="bg-[#1e293b]/40 rounded-xl p-6 border border-white/5"
                >
                   <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded bg-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-500/10 flex items-center justify-center text-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-400 mr-3`}>
                         <card.icon size={16} />
                      </div>
                      <h3 className="text-white font-bold">{card.title}</h3>
                   </div>
                   <div className="space-y-2">
                      {card.items.map((item, i) => (
                         <div key={i} className="flex items-center text-xs text-slate-400">
                            <CheckCircle2 size={12} className="text-green-500 mr-2" />
                            {item}
                         </div>
                      ))}
                   </div>
                </MotionDiv>
              ))}
           </div>
        </div>
      </div>

      {/* AI Development Process */}
      <div className="py-24 bg-[#020617]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                  Our AI Development Process
               </h2>
               <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                  A structured approach to delivering successful AI solutions that drive real business value
               </p>
            </MotionDiv>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
               {/* Process Steps */}
               {[
                 { icon: Search, title: "Discovery", desc: "We analyze your business needs, data availability, and define AI objectives." },
                 { icon: Database, title: "Data Preparation", desc: "We collect, clean, and prepare your data for model training and validation." },
                 { icon: Cpu, title: "Model Development", desc: "We design, train, and optimize AI models tailored to your specific use case." },
                 { icon: Plug, title: "Integration", desc: "We seamlessly integrate the AI solution into your existing systems and workflows." },
                 { icon: Headphones, title: "Support & Optimization", desc: "We provide ongoing maintenance, monitoring, and continuous improvement." }
               ].map((step, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative z-10 flex flex-col items-center"
                 >
                    <div className={`w-16 h-16 rounded-full bg-[#1e293b] flex items-center justify-center text-white mb-6 border-2 border-white/5 hover:border-blue-500 transition-colors shadow-lg shadow-blue-900/10`}>
                       <step.icon size={24} className={`text-${['blue','purple','emerald','orange','red'][idx]}-400`} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                 </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* AI Technology Stack */}
      <div className="py-20 bg-[#1e293b]/20 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                  Our AI Technology Stack
               </h2>
               <p className="text-slate-400 text-sm">
                  We leverage industry-leading technologies to build robust, scalable AI solutions
               </p>
            </MotionDiv>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
               {[
                 { name: "Python", icon: Terminal, color: "text-blue-400" },
                 { name: "OpenAI", icon: Bot, color: "text-green-400" },
                 { name: "Node.js", icon: Globe, color: "text-yellow-400" },
                 { name: "React", icon: Atom, color: "text-cyan-400" },
                 { name: "AWS AI", icon: Cloud, color: "text-orange-400" },
                 { name: "Azure AI", icon: LayoutGrid, color: "text-blue-500" },
                 { name: "PyTorch", icon: Flame, color: "text-red-400" },
                 { name: "Hugging Face", icon: Smile, color: "text-yellow-500" },
                 { name: "TensorFlow", icon: Share2, color: "text-orange-500" },
                 { name: "Google AI", icon: Search, color: "text-blue-400" },
                 { name: "Docker", icon: Box, color: "text-blue-500" },
                 { name: "Kubernetes", icon: Anchor, color: "text-blue-600" }
               ].map((tech, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-[#0f172a] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all hover:-translate-y-1"
                 >
                    <tech.icon size={28} className={`${tech.color} mb-3`} />
                    <span className="text-white text-xs font-bold">{tech.name}</span>
                 </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* AI Success Stories */}
      <div className="py-24 bg-[#020617]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                  AI Success Stories
               </h2>
               <p className="text-slate-400 text-sm">
                  Real-world examples of how our AI solutions have transformed businesses
               </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: ShoppingCart, title: "E-commerce Personalization", desc: "Implemented AI-powered recommendation engine for a retail client, increasing conversion rates by 34% and average order value by 22%.", color: "blue" },
                 { icon: Activity, title: "Healthcare Diagnostics", desc: "Developed computer vision system for medical imaging analysis, reducing diagnostic time by 65% and improving accuracy by 28%.", color: "purple" },
                 { icon: Factory, title: "Manufacturing Optimization", desc: "Created predictive maintenance system that reduced equipment downtime by 47% and maintenance costs by 32% for industrial client.", color: "emerald" }
               ].map((story, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`bg-[#0f172a] rounded-2xl border border-white/5 p-8 relative overflow-hidden group hover:border-${story.color}-500/30 transition-all`}
                 >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-${story.color}-500`}></div>
                    <div className={`w-12 h-12 rounded-full bg-${story.color}-500/10 flex items-center justify-center text-${story.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                       <story.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                       {story.desc}
                    </p>
                    <Link to="/portfolio" className={`flex items-center text-xs font-bold text-${story.color}-400 hover:text-white transition-colors`}>
                       Read Case Study <ArrowRight size={14} className="ml-1" />
                    </Link>
                 </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Why Choose TechSafi Section */}
      <div className="py-24 bg-[#050b1d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                 Why Choose TechSafi for AI Solutions
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                 Our unique approach sets us apart in delivering successful AI implementations
              </p>
           </MotionDiv>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "AI-First Approach", desc: "We design solutions with AI at the core, ensuring maximum impact rather than superficial integration.", color: "blue" },
                { icon: Layers, title: "Full-Stack Expertise", desc: "Our team combines AI specialists with software engineers to deliver complete, production-ready solutions.", color: "purple" },
                { icon: MapPin, title: "Local Understanding", desc: "We understand the unique challenges and opportunities in the Kenyan and East African market context.", color: "emerald" },
                { icon: Shield, title: "Ethical AI Practices", desc: "We prioritize transparency, fairness, and accountability in all our AI implementations.", color: "red" }
              ].map((card, idx) => (
                <MotionDiv
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-[#0f172a] rounded-2xl p-8 border border-white/5 text-center hover:border-white/10 transition-all hover:-translate-y-1"
                >
                   <div className={`w-14 h-14 rounded-full bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-400 mx-auto mb-6`}>
                      <card.icon size={24} />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                   <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                </MotionDiv>
              ))}
           </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                 What Our Clients Say
              </h2>
              <p className="text-slate-400 text-sm">
                 Don't just take our word for it - hear from businesses we've transformed with AI
              </p>
           </MotionDiv>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "James D.", role: "CTO, RetailTech Solutions", quote: "TechSafi's AI recommendation engine transformed our e-commerce platform. Our conversion rates increased by 34% within just three months of implementation.", initial: "JD", color: "blue" },
                { name: "Sarah M.", role: "Operations Director, HealthPlus", quote: "The AI-powered diagnostic system TechSafi developed has significantly improved our patient outcomes while reducing diagnostic time by over 60%.", initial: "SM", color: "purple" },
                { name: "Robert K.", role: "CEO, Manufacturing Pro", quote: "TechSafi's predictive maintenance solution has saved us millions in equipment downtime. Their team's expertise in both AI and manufacturing is impressive.", initial: "RK", color: "emerald" }
              ].map((testimonial, idx) => (
                <MotionDiv
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-[#1e293b]/40 rounded-2xl p-8 border border-white/5 relative"
                >
                   {/* Quote Icon */}
                   <div className="absolute top-6 right-6 text-white/5">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M14.017 21L14.017 18C14.017 16.0547 14.5469 14.3789 15.6074 12.9727C16.668 11.5664 18.2324 10.8633 20.3008 10.8633V6C16.8906 6 14.2812 7.73438 12.4727 11.2031L13.7148 11.9766C13.4336 12.5625 13.293 13.2422 13.293 14.0156C13.293 14.8594 13.5352 15.6328 14.0176 16.3359V21H14.017ZM8.00391 21L8.00391 18C8.00391 16.0547 8.5332 14.3789 9.59375 12.9727C10.6543 11.5664 12.2188 10.8633 14.2871 10.8633V6C10.877 6 8.26758 7.73438 6.45898 11.2031L7.70117 11.9766C7.41992 12.5625 7.2793 13.2422 7.2793 14.0156C7.2793 14.8594 7.52148 15.6328 8.00391 16.3359V21H8.00391ZM3.70703 21L3.70703 18C3.70703 16.0547 4.23633 14.3789 5.29688 12.9727C6.35742 11.5664 7.92188 10.8633 9.99023 10.8633V6C6.58008 6 3.9707 7.73438 2.16211 11.2031L3.4043 11.9766C3.12305 12.5625 2.98242 13.2422 2.98242 14.0156C2.98242 14.8594 3.22461 15.6328 3.70703 16.3359V21H3.70703Z" />
                      </svg>
                   </div>
                   
                   <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full bg-${testimonial.color}-500 flex items-center justify-center text-white font-bold text-lg mr-4`}>
                         {testimonial.initial}
                      </div>
                      <div>
                         <div className="text-white font-bold">{testimonial.name}</div>
                         <div className="text-slate-400 text-xs">{testimonial.role}</div>
                      </div>
                   </div>
                   <p className="text-slate-300 text-sm italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                   <div className="flex text-yellow-500 gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                </MotionDiv>
              ))}
           </div>
        </div>
      </div>

      {/* Industry Use Cases Section */}
      <div className="py-24 bg-[#0f172a]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                  Industry Use Cases
               </h2>
               <p className="text-slate-400 text-sm">
                  AI solutions transforming businesses across industries
               </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { icon: Activity, title: "Healthcare", desc: "Medical diagnosis, patient monitoring, drug discovery, and personalized treatment plans.", color: "blue" },
                 { icon: ShoppingCart, title: "E-Commerce", desc: "Product recommendations, demand forecasting, dynamic pricing, and customer service automation.", color: "purple" },
                 { icon: Wallet, title: "Finance", desc: "Fraud detection, risk assessment, algorithmic trading, and credit scoring.", color: "emerald" },
                 { icon: Factory, title: "Manufacturing", desc: "Predictive maintenance, quality control, supply chain optimization, and process automation.", color: "orange" },
                 { icon: Truck, title: "Transportation", desc: "Route optimization, autonomous vehicles, traffic prediction, and fleet management.", color: "red" },
                 { icon: Search, title: "Marketing", desc: "Customer segmentation, campaign optimization, content generation, and sentiment analysis.", color: "pink" },
                 { icon: GraduationCap, title: "Education", desc: "Personalized learning paths, automated grading, student performance prediction, and adaptive content.", color: "indigo" },
                 { icon: Truck, title: "Logistics", desc: "Supply chain optimization, demand forecasting, warehouse automation, and delivery route planning.", color: "teal" },
                 { icon: Home, title: "Real Estate", desc: "Property valuation, market trend analysis, virtual property tours, and intelligent property matching.", color: "orange" }
               ].map((useCase, idx) => (
                 <MotionDiv
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-[#020617] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                 >
                    <div className={`w-10 h-10 rounded-lg bg-${useCase.color}-500/10 flex items-center justify-center text-${useCase.color}-400 mb-4`}>
                       <useCase.icon size={20} />
                    </div>
                    <h3 className="text-white font-bold mb-2">{useCase.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{useCase.desc}</p>
                 </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-[#020617]">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                  Frequently Asked Questions
               </h2>
               <p className="text-slate-400 text-sm">
                  Get answers to common questions about our AI solutions
               </p>
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
                    <div className="bg-[#1e293b]/30 border border-white/5 rounded-xl overflow-hidden">
                       <button 
                         onClick={() => toggleFaq(idx)}
                         className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
                       >
                          <span className="text-white font-bold text-sm md:text-base pr-8">{faq.question}</span>
                          <span className="text-slate-400">
                             {openFaqIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
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
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                   {faq.answer}
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 </MotionDiv>
               ))}
            </div>
         </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <MotionDiv
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
                  Ready to Transform Your Business with AI?
               </h2>
               <p className="text-blue-100 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
                  Let's discuss how our AI solutions can drive innovation and growth for your organization.
               </p>
               
               <Link to="/contact">
                  <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all text-base md:text-lg">
                     Start Your AI Journey
                  </button>
               </Link>
            </MotionDiv>
         </div>
         
         <div className="absolute bottom-4 right-4">
             <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                <ArrowRight size={16} className="-rotate-90" />
             </a>
         </div>
      </div>
    </div>
  );
};