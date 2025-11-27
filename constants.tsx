import { 
  Home, Building2, Briefcase, Layers, Cpu, CreditCard, Users, Mail,
  Code, Shield, Brain, Zap, Globe, Smartphone, Server, ShoppingCart, Activity,
  PieChart, Utensils, Newspaper, Clock, Bot
} from 'lucide-react';
import { NavItem, Service, Project, TeamMember, JobPosition, PricingPlan, BlogPost } from './types';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <Home size={18} />, category: 'main' },
  { label: 'Company', path: '/company', icon: <Building2 size={18} />, category: 'company' },
  { label: 'Portfolio', path: '/portfolio', icon: <Briefcase size={18} />, category: 'main' },
  { label: 'Services', path: '/services', icon: <Layers size={18} />, category: 'services' },
  { label: 'AI Solutions', path: '/ai-solutions', icon: <Brain size={18} />, category: 'services' },
  { label: 'Pricing', path: '/pricing', icon: <CreditCard size={18} />, category: 'main' },
  { label: 'Blog', path: '/blog', icon: <Newspaper size={18} />, category: 'main' },
  { label: 'Careers', path: '/careers', icon: <Users size={18} />, category: 'company' },
  { label: 'Contact Us', path: '/contact', icon: <Mail size={18} />, category: 'main' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'StyleHub Fashion Store',
    category: 'E-Commerce',
    type: 'Web App',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    description: 'AI-powered e-commerce platform with smart recommendations and automated inventory management.',
    technologies: ['React', 'Node.js', 'AI/ML'],
    client: 'StyleHub Inc.',
    year: '2024',
    stats: { label: "Revenue", value: "150%", icon: Zap },
    color: "blue",
    icon: ShoppingCart
  },
  {
    id: 'p2',
    title: 'MediCare Patient Portal',
    category: 'Healthcare',
    type: 'Web App',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'HIPAA-compliant healthcare platform with AI appointment scheduling and telemedicine capabilities.',
    technologies: ['Vue.js', 'Python', 'AI Chatbot'],
    client: 'MediCare Groups',
    year: '2023',
    stats: { label: "Users", value: "10K+", icon: Users },
    color: "emerald",
    icon: Activity
  },
  {
    id: 'p3',
    title: 'FitTrack Fitness App',
    category: 'Mobile App',
    type: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    description: 'Cross-platform fitness tracking app with AI workout recommendations and nutrition planning.',
    technologies: ['React Native', 'Firebase', 'ML Kit'],
    client: 'FitTech',
    year: '2024',
    stats: { label: "Downloads", value: "50K+", icon: Smartphone },
    color: "pink",
    icon: Smartphone
  },
  {
    id: 'p4',
    title: 'FinanceFlow CRM',
    category: 'Finance',
    type: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Enterprise CRM with predictive analytics for financial services and client management.',
    technologies: ['Angular', '.NET', 'Power BI'],
    client: 'Global Finance',
    year: '2023',
    stats: { label: "Cost", value: "↓ 60%", icon: PieChart },
    color: "orange",
    icon: Briefcase
  },
  {
    id: 'p5',
    title: 'FoodieHub Delivery',
    category: 'Food & Beverage',
    type: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-restaurant food delivery platform with real-time tracking and smart routing.',
    technologies: ['Next.js', 'MongoDB', 'Maps API'],
    client: 'FoodieHub',
    year: '2024',
    stats: { label: "Orders/Day", value: "1K+", icon: ShoppingCart },
    color: "red",
    icon: Utensils
  },
  {
    id: 'p6',
    title: 'AutoBot HR Assistant',
    category: 'AI Automation',
    type: 'AI Solutions',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    description: 'AI-powered HR automation system with intelligent resume screening and interview scheduling.',
    technologies: ['Python', 'TensorFlow', 'NLP'],
    client: 'Corp HR',
    year: '2023',
    stats: { label: "Time Saved", value: "80%", icon: Clock },
    color: "indigo",
    icon: Bot
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: "The Future of AI in African Fintech",
    excerpt: "How artificial intelligence is reshaping financial inclusion and banking services across the continent.",
    category: "AI & Tech",
    author: { name: "Wambia Kennedy", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100" },
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Fintech", "AI", "Innovation"]
  },
  {
    id: 'b2',
    title: "Migrating Legacy Systems to the Cloud",
    excerpt: "A comprehensive guide for enterprises looking to modernize their infrastructure for scalability and security.",
    category: "Cloud Computing",
    author: { name: "Samuel Simiyu", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100" },
    date: "Mar 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["AWS", "Cloud", "Migration"]
  },
  {
    id: 'b3',
    title: "Why Your Business Needs a Mobile-First Strategy",
    excerpt: "With mobile usage skyrocketing, optimizing for mobile is no longer optional—it's essential for survival.",
    category: "Digital Strategy",
    author: { name: "Lewis Mwaura", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=100&h=100" },
    date: "Feb 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "UX", "Growth"]
  },
  {
    id: 'b4',
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Protecting your digital assets in an era of sophisticated AI-driven cyber threats.",
    category: "Security",
    author: { name: "Vinich Omuga", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" },
    date: "Feb 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    tags: ["Security", "Data", "Privacy"]
  }
];

// Placeholder for missing exports if any
export const SERVICES = [];
export const TEAM = [];
export const JOBS = [];
export const PRICING_PLANS = [];