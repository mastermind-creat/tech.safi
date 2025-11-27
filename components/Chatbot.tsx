
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2, User, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! 👋 I'm the TechSafi virtual assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      return "Our pricing is transparent! Web development packages start at KES 35,000. For AI solutions, we offer custom quotes. You can view our full pricing page or request a custom quote via our contact form.";
    }
    if (lowerInput.includes('service') || lowerInput.includes('do you offer') || lowerInput.includes('build')) {
      return "We offer a wide range of services including Web Development, Mobile Apps, AI Integration, Cloud Solutions, and Digital Marketing. Would you like to know more about a specific service?";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('support')) {
      return "You can reach us at info@techsafi.com or call +254 751 380 948. Our support team is available 24/7!";
    }
    if (lowerInput.includes('job') || lowerInput.includes('career') || lowerInput.includes('hiring') || lowerInput.includes('intern')) {
      return "We're always looking for talent! Check out our Careers page for current openings, including internships and commission-based roles.";
    }
    if (lowerInput.includes('location') || lowerInput.includes('office') || lowerInput.includes('where')) {
      return "We are based in Nairobi, Kenya, serving clients across East Africa and globally.";
    }
    if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) {
      return "AI is our specialty! We build chatbots, recommendation engines, predictive analytics models, and integrate OpenAI/GPT into existing apps. Check our AI Solutions page for details.";
    }
    
    return "Thanks for your message! To get a specific answer, you might want to ask about our services, pricing, or how to contact us. Alternatively, you can fill out the contact form for a detailed consultation.";
  };

  const handleSend = (e?: React.FormEvent) => {
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

    // Simulate thinking/typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateResponse(userMsg.text),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/30 flex items-center justify-center text-white focus:outline-none"
          >
            <MessageCircle size={28} />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#020617]"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] max-h-[80vh] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">TechSafi Assistant</h3>
                  <div className="flex items-center text-[10px] text-blue-100">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                    Online
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
              {messages.map((msg) => (
                <motion.div
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
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
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
                </motion.div>
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
                  placeholder="Type a message..."
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
              <div className="text-[10px] text-center text-slate-400 mt-2">
                Powered by TechSafi AI • Responds instantly
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
