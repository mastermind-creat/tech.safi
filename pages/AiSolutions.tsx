import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Bot, Eye, Zap, Database, Mic, FileText, PenTool, 
  Search, ShieldAlert, BarChart, ArrowRight, CheckCircle2, 
  Cpu, MessageSquare, Layers, Code2, Server, Globe
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

      {/* Approach & Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Approach Text */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                Our Approach to AI Integration
              </h2>
              <p className="text-slate-400 leading-relaxed">
                At TechSafi, we don't just implement AI—we build intelligent systems that become integral to your business operations. Our methodology combines cutting-edge technologies with proven development practices.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Brain, title: "AI-First Strategy", desc: "We design solutions with AI at the core, not as an afterthought, ensuring maximum impact and seamless integration." },
                { icon: Code2, title: "Custom Model Development", desc: "We build tailored AI models specific to your data and business requirements, not one-size-fits-all solutions." },
                { icon: Layers, title: "Continuous Learning", desc: "Our systems evolve with your business, continuously improving through feedback loops and new data." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Right: Tech Stack Card */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-600/10 to-purple-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Technologies We Work With</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Python & TensorFlow", icon: Cpu },
                  { name: "OpenAI & GPT", icon: Bot },
                  { name: "Node.js & React", icon: Globe },
                  { name: "AWS & Azure AI", icon: Server },
                  { name: "PyTorch & Keras", icon: Database },
                  { name: "Data Analytics", icon: BarChart },
                  { name: "Hugging Face", icon: Brain },
                  { name: "Speech APIs", icon: Mic }
                ].map((tech, i) => (
                  <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <tech.icon size={16} className="text-white mr-2.5" />
                    <span className="text-xs font-medium text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
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
    </div>
  );
};