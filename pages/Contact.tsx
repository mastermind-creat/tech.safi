
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, 
  Facebook, Twitter, Linkedin, Instagram, Github, 
  Search, Plus, Minus, CheckCircle2, FileText, Zap, ShieldCheck
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    subject: '', 
    message: '',
    agreed: false
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.agreed) {
      alert('Please agree to the privacy policy.');
      return;
    }
    alert('Thank you for reaching out! This is a demo form.');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const MotionDiv = motion.div as any;

  const faqs = [
    {
      question: "What services does TechSafi offer?",
      answer: "We offer a wide range of technology solutions including Custom Web Development, Mobile App Development, AI Integration, Cloud Solutions, and IT Consulting tailored to your business needs."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can get a quote by filling out the contact form on this page with details about your project, or by emailing us directly at info@techsafi.com. We usually respond within 24 hours."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and performs optimally."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 overflow-x-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#020617] to-transparent"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <MotionDiv
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 dark:bg-white/10 dark:border-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 text-slate-600 dark:text-slate-200"
          >
             <MessageCircle size={12} className="mr-2" /> We're Here to Help
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
              Have a question or need assistance? Our <span className="text-slate-900 dark:text-white font-bold">dedicated team</span> is ready to <span className="text-pink-600 dark:text-pink-400">help you succeed.</span>
            </p>
          </MotionDiv>

          {/* Quick Contact Badges */}
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <div className="flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 backdrop-blur-md shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
               <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg mr-3 text-blue-600 dark:text-blue-400"><Mail size={18} /></div>
               <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Email Us</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">support@techsafi.com</div>
               </div>
            </div>
            <div className="flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 backdrop-blur-md shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
               <div className="bg-purple-100 dark:bg-purple-500/20 p-2 rounded-lg mr-3 text-purple-600 dark:text-purple-400"><Phone size={18} /></div>
               <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Call Us</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">+254 751 380 948</div>
               </div>
            </div>
            <div className="flex items-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 backdrop-blur-md shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
               <div className="bg-pink-100 dark:bg-pink-500/20 p-2 rounded-lg mr-3 text-pink-600 dark:text-pink-400"><Clock size={18} /></div>
               <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Available</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">24/7 Support</div>
               </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-20">
         {/* Contact Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: "Email Us", desc: "Our support team is here to help you with any questions or concerns.", detail: "info@techsafi.com", link: "mailto:info@techsafi.com", color: "blue" },
              { icon: Phone, title: "Call Us", desc: "Speak directly with our support team during business hours.", detail: "+254 751 380 948", subDetail: "+254 110 046 523", link: "tel:+254751380948", color: "purple" },
              { icon: MapPin, title: "Visit Us", desc: "Stop by our office for a face-to-face conversation.", detail: "Nairobi, Kenya", subDetail: "East Africa", link: "#", color: "green" }
            ].map((item, idx) => (
               <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-2xl p-8 text-center hover:border-slate-300 dark:hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg dark:shadow-xl"
               >
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 mx-auto mb-6`}>
                     <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-6 leading-relaxed px-2">{item.desc}</p>
                  <a href={item.link} className={`text-${item.color}-600 dark:text-${item.color}-400 font-bold text-sm hover:underline block`}>
                     {item.detail}
                  </a>
                  {item.subDetail && (
                     <div className={`text-${item.color}-600 dark:text-${item.color}-400 font-bold text-sm mt-1`}>{item.subDetail}</div>
                  )}
                  {idx === 1 && <div className="text-[10px] text-slate-500 mt-2">Mon-Fri, 8am-6pm EAT</div>}
               </MotionDiv>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
               <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-lg dark:shadow-none"
               >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">First Name</label>
                           <input 
                              type="text" 
                              id="firstName"
                              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                              value={formState.firstName}
                              onChange={e => setFormState({...formState, firstName: e.target.value})}
                           />
                        </div>
                        <div>
                           <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Last Name</label>
                           <input 
                              type="text" 
                              id="lastName"
                              className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                              value={formState.lastName}
                              onChange={e => setFormState({...formState, lastName: e.target.value})}
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Email Address</label>
                        <input 
                           type="email" 
                           id="email"
                           className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                           value={formState.email}
                           onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                     </div>

                     <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Subject</label>
                        <input 
                           type="text" 
                           id="subject"
                           className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-600"
                           value={formState.subject}
                           onChange={e => setFormState({...formState, subject: e.target.value})}
                        />
                     </div>

                     <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">Your Message</label>
                        <textarea 
                           id="message"
                           rows={5}
                           className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                           value={formState.message}
                           onChange={e => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                     </div>

                     <div className="flex items-start">
                        <input 
                           type="checkbox" 
                           id="privacy" 
                           className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0f172a] text-blue-600 focus:ring-blue-500"
                           checked={formState.agreed}
                           onChange={e => setFormState({...formState, agreed: e.target.checked})}
                        />
                        <label htmlFor="privacy" className="ml-3 text-xs text-slate-600 dark:text-slate-400">
                           I agree to the <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                        </label>
                     </div>

                     <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 shadow-lg shadow-blue-900/20 text-white">
                        Send Message
                     </Button>
                  </form>
               </MotionDiv>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
               <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 h-full shadow-lg dark:shadow-none"
               >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Get in Touch</h3>
                  
                  <div className="space-y-8">
                     <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-500/10 p-2 rounded-lg mr-4 text-blue-500 dark:text-blue-400 mt-1">
                           <MapPin size={18} />
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Our Office</h4>
                           <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Nairobi, Kenya, East Africa</p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="bg-purple-100 dark:bg-purple-500/10 p-2 rounded-lg mr-4 text-purple-500 dark:text-purple-400 mt-1">
                           <Phone size={18} />
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Phone</h4>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block mb-1">+254 751 380 948</p>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block">+254 110 046 523</p>
                           <span className="text-[10px] text-slate-500">Mon-Fri, 8am-6pm EAT</span>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="bg-pink-100 dark:bg-pink-500/10 p-2 rounded-lg mr-4 text-pink-500 dark:text-pink-400 mt-1">
                           <Mail size={18} />
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Email</h4>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block mb-1">info@techsafi.com</p>
                           <span className="text-[10px] text-slate-500">We respond within 24 hours</span>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="bg-emerald-100 dark:bg-emerald-500/10 p-2 rounded-lg mr-4 text-emerald-500 dark:text-emerald-400 mt-1">
                           <Clock size={18} />
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Business Hours</h4>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                           <p className="text-slate-600 dark:text-slate-400 text-xs block">Sunday: Closed</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5">
                     <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-4">Follow Us</h4>
                     <div className="flex gap-3">
                        {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                           <a key={i} href="#" className="w-8 h-8 rounded bg-slate-100 dark:bg-[#0f172a] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                              <Icon size={14} />
                           </a>
                        ))}
                     </div>
                  </div>
               </MotionDiv>
            </div>
         </div>
      </div>

      {/* WhatsApp Section */}
      <div className="bg-emerald-50 dark:bg-[#020617] relative py-20 border-y border-emerald-200 dark:border-white/5 transition-colors duration-300">
         <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/20 via-transparent to-transparent dark:from-emerald-500/10 dark:via-[#020617]/0 dark:to-[#020617]/0 pointer-events-none"></div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
            >
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <MessageCircle size={12} className="mr-2" /> Instant Support
               </div>
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Reach Us Directly on <span className="text-emerald-600 dark:text-emerald-500">WhatsApp</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Get instant responses to your queries. Chat with our team anytime, anywhere!
               </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               {/* Features List */}
               <div className="space-y-4">
                  {[
                    { icon: Zap, title: "Instant Responses", desc: "Get quick answers to your questions without waiting for email replies." },
                    { icon: Clock, title: "24/7 Availability", desc: "Our WhatsApp support is available round the clock for your convenience." },
                    { icon: FileText, title: "Share Files Easily", desc: "Send documents, images, and project details directly through chat." }
                  ].map((item, idx) => (
                     <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-start shadow-sm dark:shadow-none"
                     >
                        <div className="bg-emerald-100 dark:bg-emerald-500/10 p-2 rounded-lg mr-4 text-emerald-600 dark:text-emerald-400 mt-1">
                           <item.icon size={16} />
                        </div>
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{item.title}</h4>
                           <p className="text-slate-600 dark:text-slate-400 text-[10px] leading-relaxed">{item.desc}</p>
                        </div>
                     </MotionDiv>
                  ))}
               </div>

               {/* Chat Card */}
               <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 rounded-2xl p-8 text-center shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-900/20 relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
                  <div className="relative z-10">
                     <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <MessageCircle size={32} className="text-white" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Start a Conversation</h3>
                     <p className="text-emerald-50 text-xs mb-8 max-w-xs mx-auto">
                        Click the button below to chat with us on WhatsApp. We're here to help!
                     </p>
                     <a 
                        href="https://wa.me/254751380948" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full"
                     >
                        <button className="w-full bg-white text-emerald-700 font-bold py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                           <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp <span className="ml-2 text-emerald-500">→</span>
                        </button>
                     </a>
                     <div className="flex items-center justify-center mt-6 text-[10px] text-emerald-100/90">
                        <Phone size={10} className="mr-1" /> +254 751 380 948
                     </div>
                     <div className="flex items-center justify-center mt-2 text-[10px] text-emerald-100/70">
                        <ShieldCheck size={10} className="mr-1" /> Your privacy is protected. We never share your information.
                     </div>
                  </div>
               </MotionDiv>
            </div>
         </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
         >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Frequently Asked <span className="text-purple-500">Questions</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs">Can't find what you're looking for? <Link to="/contact" className="text-blue-500 hover:underline">Contact our support team.</Link></p>
         </MotionDiv>

         {/* Search Bar Mockup */}
         <div className="relative max-w-md mx-auto mb-10">
            <input 
               type="text" 
               placeholder="Search FAQs..." 
               className="w-full bg-white dark:bg-[#1e293b]/50 border border-slate-200 dark:border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Search size={16} className="absolute right-3 top-3 text-slate-400" />
         </div>

         <div className="space-y-3">
            {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white dark:bg-[#1e293b]/30 border border-slate-200 dark:border-white/5 rounded-lg overflow-hidden shadow-sm dark:shadow-none">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                     <span className="text-slate-900 dark:text-white font-bold text-sm">{faq.question}</span>
                     <span className="text-slate-400">
                        {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                     </span>
                  </button>
                  <AnimatePresence>
                     {openFaq === idx && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-white/5 mt-1">
                              {faq.answer}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};
