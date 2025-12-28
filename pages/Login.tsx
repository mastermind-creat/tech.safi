
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Mail, Eye, EyeOff, ArrowRight, AlertCircle, Cpu, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const MotionDiv = motion.div as any;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsTyping(false);
    setIsLoading(true);

    // Hardcoded Executive Credentials (REMOVED)
    // const EXEC_EMAIL = 'executive@techsafi.com';
    // const EXEC_PASS = 'TechSafi';

    // Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Login successful
      localStorage.setItem('techsafi_auth', 'true');
      // Store user info if needed: localStorage.setItem('techsafi_user', JSON.stringify(data.user));
      navigate('/control-centre');

    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
      setIsLoading(false);
    }
  };

  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
              T
            </div>
          </Link>
          <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Executive <span className="text-primary">Portal</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            Secure access to TechSafi Control Centre
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
          {/* Progress loader overlay */}
          <AnimatePresence>
            {isLoading && (
              <MotionDiv
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/60 dark:bg-[#020617]/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center"
              >
                <Loader2 size={40} className="text-primary animate-spin mb-4" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Authorizing...</span>
              </MotionDiv>
            )}
          </AnimatePresence>

          <form onSubmit={handleLogin} className="space-y-6">
            <AnimatePresence mode="wait">
              {error && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-3 rounded-xl flex items-start space-x-3"
                >
                  <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium leading-relaxed">
                    {error}
                  </p>
                </MotionDiv>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Executive Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="executive@techsafi.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none dark:text-white placeholder-slate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none dark:text-white placeholder-slate-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-primary focus:ring-primary/20" />
                <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">Keep me signed in</span>
              </label>
              <button type="button" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Reset key</button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Authorize Access
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Decorative Corner Icon */}
          <div className="absolute -bottom-6 -right-6 opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
            <Cpu size={120} className="text-primary" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="text-xs text-slate-400 hover:text-primary transition-colors">Privacy</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <Link to="/terms-of-service" className="text-xs text-slate-400 hover:text-primary transition-colors">Terms</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <Link to="/contact" className="text-xs text-slate-400 hover:text-primary transition-colors">Help</Link>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Shield size={12} className="text-emerald-500" />
            <span>Encrypted Tunnel Active</span>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};
