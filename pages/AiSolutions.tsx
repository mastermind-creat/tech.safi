import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Bot, Eye, Zap, Database, Mic, FileText, PenTool, 
  Search, ShieldAlert, BarChart, ArrowRight, CheckCircle2, 
  Cpu, MessageSquare, Layers, Code2, Server, Globe,
  Plug, Sparkles, ShoppingCart, Briefcase, Settings, 
  Headphones, Terminal, Atom, LayoutGrid, Flame, Smile, 
  Share2, Box, Anchor, Activity, Factory, Cloud
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AiSolutions: React.FC = () => {
  const MotionDiv = motion.div as any;

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

  return (
    <div className="bg-[#020617] min-h-screen pb-20 overflow-hidden">
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
    </div>
  );
};