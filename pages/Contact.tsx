import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/ui/Hero';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a demo form.');
  };

  const MotionDiv = motion.div as any;

  return (
    <div className="pb-20">
      <Hero
        bgImage="https://i.gifer.com/AcM.gif" // Global connections/Map
        overlayOpacity={0.85}
        title="Let's Talk"
        subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-slate-400">
                Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-start p-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email Us</h3>
                  <p className="text-slate-400">hello@techsafi.com</p>
                  <p className="text-slate-400">support@techsafi.com</p>
                </div>
              </Card>

              <Card className="flex items-start p-6">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4 text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-slate-400">Mon-Fri from 9am to 6pm EST</p>
                </div>
              </Card>

              <Card className="flex items-start p-6">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Visit Us</h3>
                  <p className="text-slate-400">101 Innovation Blvd, Suite 400</p>
                  <p className="text-slate-400">San Francisco, CA 94107</p>
                </div>
              </Card>
            </div>
          </MotionDiv>

          {/* Form */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
            
             {/* Map Placeholder */}
             <div className="mt-8 h-48 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0641151606553!2d-122.39967268468196!3d37.78794897975704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4c3e80b9%3A0x629555c42171120!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="TechSafi HQ"
                ></iframe>
             </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};