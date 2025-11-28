
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2, User, Sparkles, AlertCircle, WifiOff } from 'lucide-react';
import { Button } from './ui/Button';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isAiActive, setIsAiActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! 👋 I'm the TechSafi AI assistant. Ask me about our web packages, mobile apps, AI solutions, or pricing!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);
  const MotionDiv = motion.div as any;
  const MotionButton = motion.button as any;

  // Fallback Logic: Rule-based responses when AI is down
  const getFallbackResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('how much')) {
      return "**Pricing Overview:**\n\n- **Websites:** Start at KES 35,000 (Portfolio) to KES 150,000 (E-commerce).\n- **Mobile Apps:** Start at KES 250,000.\n- **AI Chatbots:** KES 60,000.\n\nVisit our **Pricing** page for full details.";
    }
    if (lowerQuery.includes('web') || lowerQuery.includes('website')) {
      return "We build Portfolio websites, Business sites, and E-commerce stores. Our packages include SEO, mobile design, and support. Prices range from KES 35,000 to KES 150,000.";
    }
    if (lowerQuery.includes('mobile') || lowerQuery.includes('app') || lowerQuery.includes('android') || lowerQuery.includes('ios')) {
      return "We develop native (iOS/Android) and cross-platform apps using React Native. A basic utility app starts at KES 250,000, while feature-rich apps start at KES 550,000.";
    }
    if (lowerQuery.includes('ai') || lowerQuery.includes('intelligence') || lowerQuery.includes('bot')) {
      return "Our AI solutions include Custom Chatbots (KES 60k), Predictive Analytics, and full AI Software integration. We use tools like OpenAI, TensorFlow, and Gemini.";
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('location')) {
      return "You can reach us at:\n\n- **Email:** info@techsafi.com\n- **Phone:** +254 751 380 948\n- **Location:** Nairobi, Kenya\n\nOr use the Contact form on our site.";
    }
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm here to help with your tech needs. You can ask about our services, pricing, or company info.";
    }
    
    return "I'm currently operating in basic mode and didn't quite catch that. You can ask about **pricing**, **services**, or **contact info**, or email us at info@techsafi.com for complex queries.";
  };

  // Initialize Gemini Chat Session
  useEffect(() => {
    const initAI = async () => {
      try {
        const apiKey = process.env.API_KEY;
        if (!apiKey || apiKey.includes('your_api_key')) {
          console.warn("Gemini API Key missing or invalid. Switching to fallback mode.");
          setIsAiActive(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: `You are the intelligent virtual assistant for TechSafi, a premier AI-driven software company in Nairobi, Kenya.
            
            **Company Profile:**
            - **Name:** TechSafi
            - **Tagline:** Innovation Elevated
            - **Mission:** Empowering businesses with AI, custom software, and digital transformation.
            - **Location:** Nairobi, Kenya.
            - **Contact:** info@techsafi.com | +254 751 380 948 | +254 110 046 523
            - **Support:** Available 24/7.

            **Services & Pricing (KES):**
            *Web Development:*
            - **Portfolio Website:** KES 35,000 (5 pages, Basic SEO)
            - **Business Website:** KES 85,000 (10 pages, CMS, Blog)
            - **E-commerce Store:** KES 150,000 (Shopping cart, M-Pesa Integration)

            *Mobile App Development:*
            - **Basic App:** KES 250,000 (Cross-platform, 5 screens)
            - **Advanced App:** KES 550,000 (Native, User Auth, Payments)

            *AI Integration:*
            - **AI Chatbot:** KES 60,000
            - **Advanced AI Features:** KES 180,000 (GPT Integration, Recommendations)
            - **Enterprise AI Suite:** KES 350,000
            - **AI-Powered Website:** KES 280,000
            - **Custom AI Application:** Starting at KES 700,000+

            *Monthly Services:*
            - **Chatbot Maintenance:** KES 10,000/mo
            - **Website Maintenance:** KES 15,000/mo
            - **SEO Optimization:** KES 25,000/mo
            - **AI Model Training:** KES 30,000/mo

            **Tone & Style:**
            - Professional, enthusiastic, and helpful.
            - Use Markdown formatting for lists and bold text to make responses readable.
            - Keep answers concise but informative.
            - If asked about custom projects not listed, encourage the user to use the Contact form for a custom quote.
            - Always mention prices in KES.
            `
          }
        });
        setIsAiActive(true);
      } catch (error) {
        console.error("Failed to initialize AI:", error);
        setIsAiActive(false);
      }
    };

    initAI();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Check if AI is initialized and active
      if (isAiActive && chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        
        if (result.text) {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: result.text,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botResponse]);
        } else {
          throw new Error("Empty response from AI");
        }
      } else {
        // AI not active, throw to catch block for fallback
        throw new Error("AI not active");
      }
    } catch (error) {
      console.warn("AI service unavailable or failed, using fallback.", error);
      
      // Artificial delay for fallback to feel natural
      setTimeout(() => {
        const fallbackText = getFallbackResponse(userMsg.text);
        const fallbackResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: fallbackText,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, fallbackResponse]);
        setIsTyping(false);
      }, 600);
      
      // Return early since we handled the state update in timeout
      return; 
    } 
    
    setIsTyping(false);
  };

  // Helper to render basic markdown-like formatting
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold text handling (**text**)
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <div key={i} className={`min-h-[1.2em] ${line.trim().startsWith('-') || line.trim().startsWith('•') ? 'ml-4' : ''}`}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <MotionButton
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/30 flex items-center justify-center text-white focus:outline-none"
          >
            <MessageCircle size={28} />
            <span className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-[#020617] ${isAiActive ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
          </MotionButton>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">TechSafi Assistant</h3>
                  <div className="flex items-center text-[10px] text-blue-100">
                    {isAiActive ? (
                      <>
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                        Gemini 3 Pro Online
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-1.5"></span>
                        Automated Support
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#020617]/50 scrollbar-thin">
              {/* Connection Status Notice if Offline */}
              {!isAiActive && (
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs px-3 py-1.5 rounded-full flex items-center border border-amber-200 dark:border-amber-700/50">
                    <WifiOff size={10} className="mr-1.5" /> AI Offline - Using Basic Rules
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <MotionDiv
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-1 ${
                      msg.type === 'user' ? 'ml-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'mr-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    }`}>
                      {msg.type === 'user' ? <User size={12} /> : <Sparkles size={12} />}
                    </div>

                    {/* Bubble */}
                    <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white dark:bg-[#1e293b] text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-bl-none'
                    }`}>
                      {msg.type === 'bot' ? formatMessage(msg.text) : msg.text}
                    </div>
                  </div>
                </MotionDiv>
              ))}

              {isTyping && (
                <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-end max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mb-1 mr-2">
                      <Bot size={12} />
                    </div>
                    <div className="px-4 py-3 bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/5 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </MotionDiv>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/10 shrink-0">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isAiActive ? "Ask about pricing, services..." : "Ask keywords like 'pricing', 'contact'..."}
                  className="flex-1 bg-slate-100 dark:bg-[#1e293b] text-slate-900 dark:text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-transparent focus:bg-white dark:focus:bg-[#0f172a] transition-all placeholder-slate-400"
                />
                <Button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  className={`px-3 rounded-xl ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  <Send size={18} />
                </Button>
              </form>
              <div className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                {isAiActive ? (
                  <>Powered by Gemini 3 Pro <Sparkles size={8} className="text-purple-500" /></>
                ) : (
                  <>Basic Mode Active <AlertCircle size={8} className="text-amber-500" /></>
                )}
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};
