
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Minimize2, User, Sparkles, AlertCircle, WifiOff, ChevronRight, RefreshCw, Send, Bot } from 'lucide-react';
import { Button } from './ui/Button';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  suggestions?: string[]; // Contextual suggestions
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isAiActive, setIsAiActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! 👋 Welcome to TechSafi. I'm your virtual assistant.\n\nHow can I help you today?",
      timestamp: new Date(),
      suggestions: ["Our Services", "Pricing Plans", "Careers & Internships", "Contact Support"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);
  const MotionDiv = motion.div as any;
  const MotionButton = motion.button as any;

  // --- ADVANCED FALLBACK ENGINE ---

  const knowledgeBase = [
    {
      keywords: ['price', 'cost', 'quote', 'how much', 'rates', 'pricing', 'expensive'],
      response: "💰 **Transparent Pricing Overview:**\n\n- **Websites:** KES 35k (Portfolio) - 150k (E-commerce)\n- **Mobile Apps:** Start at KES 250k\n- **AI Integration:** Starts at KES 60k\n\nWe also offer monthly maintenance packages starting at KES 10k.",
      suggestions: ["View Full Pricing", "Get a Custom Quote", "Web Packages"]
    },
    {
      keywords: ['web', 'website', 'design', 'development', 'ecommerce', 'e-commerce', 'shop'],
      response: "🌐 **Web Development Services:**\n\nWe build responsive, SEO-optimized websites using React, Next.js, and modern CMS solutions.\n\n- **Portfolio Sites:** Perfect for personal brands.\n- **Business Sites:** For SMEs looking to grow.\n- **E-commerce:** Complete stores with M-Pesa integration.",
      suggestions: ["Web Pricing", "View Portfolio", "Contact Sales"]
    },
    {
      keywords: ['mobile', 'app', 'android', 'ios', 'flutter', 'react native'],
      response: "📱 **Mobile App Development:**\n\nWe develop high-performance native and cross-platform mobile applications.\n\n- **Basic App:** Utility apps (KES 250k)\n- **Advanced App:** Complex Logic, Auth, Payments (KES 550k)\n\nSupported platforms: iOS & Android.",
      suggestions: ["Mobile Pricing", "See Case Studies", "Start App Project"]
    },
    {
      keywords: ['ai', 'intelligence', 'bot', 'gpt', 'chatgpt', 'ml', 'machine learning', 'automation'],
      response: "🤖 **AI & Automation Solutions:**\n\nTransform your business with our AI services:\n\n- **Custom Chatbots:** KES 60,000\n- **Predictive Analytics:** Forecast trends.\n- **Process Automation:** Reduce manual work.\n\nWe use OpenAI, Gemini, and TensorFlow.",
      suggestions: ["AI Pricing", "Book AI Consultation", "View AI Features"]
    },
    {
      keywords: ['career', 'job', 'work', 'hiring', 'vacancy', 'apply', 'intern', 'attachment'],
      response: "🚀 **Careers at TechSafi:**\n\nWe are always looking for talent! \n\n- **Current Roles:** Marketing Specialist (Growth), C-Level Roles (Pending).\n- **Students:** We offer Internships & Industrial Attachment.\n\nCheck our Careers page for the roadmap and culture.",
      suggestions: ["View Openings", "Internship Details", "Our Culture"]
    },
    {
      keywords: ['contact', 'email', 'phone', 'call', 'location', 'address', 'office', 'reach'],
      response: "📞 **Get in Touch:**\n\n- **Email:** info@techsafi.com\n- **Phone:** +254 751 380 948\n- **WhatsApp:** +254 751 380 948\n- **Location:** Nairobi, Kenya\n\nSupport is available 24/7.",
      suggestions: ["Open WhatsApp", "Send Email", "Request Call"]
    },
    {
      keywords: ['tech', 'stack', 'technologies', 'tools', 'language'],
      response: "💻 **Our Tech Stack:**\n\n- **Frontend:** React, Next.js, Tailwind CSS, TypeScript\n- **Backend:** Node.js, Python, Django, Go\n- **Mobile:** React Native, Flutter\n- **AI:** Python, PyTorch, TensorFlow, Google GenAI",
      suggestions: ["Web Services", "AI Solutions"]
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening'],
      response: (msg: string) => {
        const hour = new Date().getHours();
        const timeGreeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
        return `${timeGreeting}! 👋 I'm here to help you navigate TechSafi's services. What are you looking for today?`;
      },
      suggestions: ["Our Services", "Pricing", "About TechSafi"]
    }
  ];

  const handleBasicModeQuery = (query: string): { text: string, suggestions: string[] } => {
    const lowerQuery = query.toLowerCase();
    
    // Find best match based on keyword density
    let bestMatch = null;
    let maxScore = 0;

    for (const entry of knowledgeBase) {
      let score = 0;
      entry.keywords.forEach(k => {
        if (lowerQuery.includes(k)) score++;
      });

      if (score > maxScore) {
        maxScore = score;
        bestMatch = entry;
      }
    }

    if (bestMatch) {
      const responseText = typeof bestMatch.response === 'function' ? bestMatch.response(lowerQuery) : bestMatch.response;
      return { text: responseText, suggestions: bestMatch.suggestions };
    }

    // Default Fallback
    return { 
      text: "I didn't quite catch that. I'm currently in **Basic Mode** and best at answering specific questions about our services.\n\nTry asking about:", 
      suggestions: ["Web Development", "Mobile Apps", "Pricing Info", "Contact Us"] 
    };
  };

  // --- END FALLBACK ENGINE ---

  // Initialize Gemini Chat Session
  useEffect(() => {
    const initAI = async () => {
      try {
        const apiKey = process.env.API_KEY;
        if (!apiKey || apiKey.includes('your_api_key')) {
          console.warn("Gemini API Key missing or invalid. Switching to Basic Mode.");
          setIsAiActive(false);
          return;
        }

        // Initialize GoogleGenAI client with API key from environment
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

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Streaming Response
    if (isAiActive && chatSessionRef.current) {
        const botMsgId = (Date.now() + 1).toString();
        // Add placeholder for streaming
        setMessages(prev => [...prev, {
            id: botMsgId,
            type: 'bot',
            text: '',
            timestamp: new Date()
        }]);

        try {
            const resultStream = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
            
            let fullText = '';
            for await (const chunk of resultStream) {
                // Correctly handle chunk from sendMessageStream as GenerateContentResponse
                const response = chunk as GenerateContentResponse;
                const chunkText = response.text;
                if (chunkText) {
                    fullText += chunkText;
                    setMessages(prev => prev.map(m => 
                        m.id === botMsgId ? { ...m, text: fullText } : m
                    ));
                }
            }
        } catch (error) {
            console.warn("AI service interrupted, using fallback.", error);
            // Revert the empty bubble to a fallback message if AI completely fails mid-stream or start
            setMessages(prev => prev.filter(m => m.id !== botMsgId));
            const { text: fallbackText, suggestions } = handleBasicModeQuery(userMsg.text);
            const fallbackResponse: Message = {
                id: (Date.now() + 2).toString(),
                type: 'bot',
                text: fallbackText,
                timestamp: new Date(),
                suggestions: suggestions
            };
            setMessages(prev => [...prev, fallbackResponse]);
        }
        setIsTyping(false);
        return;
    }

    // Basic Mode Fallback (Simulated Delay)
    setTimeout(() => {
      const { text: fallbackText, suggestions } = handleBasicModeQuery(userMsg.text);
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: fallbackText,
        timestamp: new Date(),
        suggestions: suggestions
      };
      setMessages(prev => [...prev, fallbackResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        type: 'bot',
        text: "Chat cleared. How can I help you now?",
        timestamp: new Date(),
        suggestions: ["Our Services", "Pricing Plans", "Contact Support"]
      }
    ]);
  };

  // Helper to render markdown-like formatting (Bold, Lists)
  const formatMessage = (text: string) => {
    // Split by newlines to handle paragraphs and lists
    return text.split('\n').map((line, i) => {
      // Check for bullet points
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ') || line.trim().startsWith('• ');
      const cleanLine = isBullet ? line.trim().replace(/^[-*•]\s+/, '') : line;
      
      // Parse Bold (**text**)
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      
      return (
        <div key={i} className={`text-sm leading-relaxed ${isBullet ? 'flex items-start ml-2 mb-1.5' : 'mb-2 min-h-[1.2em]'}`}>
          {isBullet && <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0 opacity-60"></span>}
          <span>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </span>
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
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[600px] max-h-[85vh] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between shrink-0 shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner relative">
                  <Bot size={20} />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-purple-600 rounded-full ${isAiActive ? 'bg-green-400' : 'bg-amber-400'}`}></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">TechSafi Assistant</h3>
                  <div className="flex items-center text-[10px] text-blue-100 opacity-90">
                    {isAiActive ? 'Gemini 3 Pro Active' : 'Automated Support'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Clear Chat"
                >
                  <RefreshCw size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#020617]/95 scrollbar-thin">
              {/* Connection Status Notice if Offline */}
              {!isAiActive && (
                <div className="flex justify-center mb-2">
                  <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[10px] px-3 py-1 rounded-full flex items-center border border-amber-200 dark:border-amber-700/30">
                    <WifiOff size={10} className="mr-1.5" /> Basic Mode (AI Offline)
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-1 shadow-sm ${
                        msg.type === 'user' ? 'ml-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'mr-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                      }`}>
                        {msg.type === 'user' ? <User size={12} /> : <Sparkles size={12} />}
                      </div>

                      {/* Bubble */}
                      <div className={`px-4 py-2.5 rounded-2xl shadow-sm ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-white dark:bg-[#1e293b] text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-bl-none'
                      }`}>
                        {msg.type === 'bot' ? formatMessage(msg.text) : <div className="text-sm">{msg.text}</div>}
                      </div>
                    </div>
                  </MotionDiv>
                  
                  {/* Suggestions Chips (Only for last message of type bot) */}
                  {msg.type === 'bot' && msg.suggestions && msg.id === messages[messages.length - 1].id && !isTyping && (
                    <MotionDiv 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-wrap gap-2 pl-9"
                    >
                      {msg.suggestions.map((sugg, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(sugg)}
                          className="text-xs px-3 py-1.5 bg-white dark:bg-[#1e293b] border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm flex items-center group"
                        >
                          {sugg} <ChevronRight size={10} className="ml-1 opacity-50 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </MotionDiv>
                  )}
                </div>
              ))}

              {isTyping && (
                <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-end max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center flex-shrink-0 mb-1 mr-2 shadow-sm">
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
            <div className="p-3 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/10 shrink-0 relative z-20">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isAiActive ? "Type your question..." : "Ask keywords like 'pricing', 'contact'..."}
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
              <div className="text-[9px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1 opacity-70">
                {isAiActive ? (
                  <>Powered by Gemini 3 Pro <Sparkles size={8} className="text-purple-500" /></>
                ) : (
                  <>Running in Basic Support Mode <AlertCircle size={8} className="text-amber-500" /></>
                )}
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};
