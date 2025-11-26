import { 
  Home, Building2, Briefcase, Layers, Cpu, CreditCard, Users, Mail,
  Code, Shield, Brain, Zap, Globe, Smartphone, Server
} from 'lucide-react';
import { NavItem, Service, Project, TeamMember, JobPosition, PricingPlan } from './types';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <Home size={18} />, category: 'main' },
  { label: 'Company', path: '/company', icon: <Building2 size={18} />, category: 'company' },
  { label: 'Portfolio', path: '/portfolio', icon: <Briefcase size={18} />, category: 'main' },
  { label: 'All Services', path: '/services', icon: <Layers size={18} />, category: 'services' },
  { label: 'AI Solutions', path: '/ai-solutions', icon: <Brain size={18} />, category: 'services' },
  { label: 'Pricing', path: '/pricing', icon: <CreditCard size={18} />, category: 'main' },
  { label: 'Careers', path: '/careers', icon: <Users size={18} />, category: 'company' },
  { label: 'Contact Us', path: '/contact', icon: <Mail size={18} />, category: 'main' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Custom AI Development',
    description: 'Tailored artificial intelligence models designed to solve your specific business challenges, from predictive analytics to NLP.',
    iconName: 'Brain',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 's2',
    title: 'Enterprise Software',
    description: 'Scalable, robust, and secure software solutions that streamline operations and enhance productivity across your organization.',
    iconName: 'Server',
    features: ['ERP Systems', 'CRM Integration', 'Cloud Migration']
  },
  {
    id: 's3',
    title: 'Cybersecurity',
    description: 'Advanced threat detection and prevention systems to safeguard your digital assets against evolving cyber risks.',
    iconName: 'Shield',
    features: ['Penetration Testing', 'Security Audits', 'Zero Trust Architecture']
  },
  {
    id: 's4',
    title: 'Digital Transformation',
    description: 'Comprehensive strategies to digitize your workflows, legacy systems, and customer interactions for the modern era.',
    iconName: 'Zap',
    features: ['Workflow Automation', 'Legacy Modernization', 'Data Analytics']
  },
  {
    id: 's5',
    title: 'Mobile & Web Apps',
    description: 'High-performance applications built with React Native and modern web technologies for seamless cross-platform experiences.',
    iconName: 'Smartphone',
    features: ['iOS & Android', 'Progressive Web Apps', 'UI/UX Design']
  },
  {
    id: 's6',
    title: 'IoT Solutions',
    description: 'Connecting physical devices to the digital world to gather data, automate processes, and improve efficiency.',
    iconName: 'Globe',
    features: ['Smart Sensors', 'Industrial IoT', 'Real-time Monitoring']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'FinTech AI Analyst',
    category: 'AI & Finance',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'An autonomous financial analysis tool capable of processing millions of transaction records to detect fraud in real-time.',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    client: 'GlobalBank Corp',
    year: '2023'
  },
  {
    id: 'p2',
    title: 'SmartCity Grid',
    category: 'IoT',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A centralized dashboard for managing municipal energy consumption, traffic lights, and waste management sensors.',
    technologies: ['Node.js', 'MQTT', 'Vue.js', 'PostgreSQL'],
    client: 'Metro City Council',
    year: '2024'
  },
  {
    id: 'p3',
    title: 'MediScan Pro',
    category: 'Healthcare',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'AI-assisted diagnostic imaging software helping radiologists identify early signs of anomalies with 99% accuracy.',
    technologies: ['PyTorch', 'C++', 'DICOM', 'Azure'],
    client: 'HealthPlus Clinics',
    year: '2023'
  },
    {
    id: 'p4',
    title: 'EcoTrack Supply Chain',
    category: 'Sustainability',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Blockchain-based tracking system ensuring transparency and carbon footprint monitoring across global supply chains.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Go'],
    client: 'GreenLogistics',
    year: '2022'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Engineering at TechGiant, Sarah leads TechSafi with a vision for ethical AI and sustainable tech.',
    image: 'https://picsum.photos/400/400?random=10',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'CTO',
    bio: 'A pioneer in neural network architectures, Marcus oversees the R&D division driving our core AI innovations.',
    image: 'https://picsum.photos/400/400?random=11',
    socials: { linkedin: '#' }
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Head of Product',
    bio: 'Elena bridges the gap between complex technology and user-centric design, ensuring our solutions are intuitive.',
    image: 'https://picsum.photos/400/400?random=12',
    socials: { linkedin: '#', twitter: '#' }
  }
];

export const JOBS: JobPosition[] = [
  {
    id: 'j1',
    title: 'Senior ML Engineer',
    type: 'Full-time',
    location: 'Remote / San Francisco',
    department: 'Engineering',
    description: 'Lead the development of our next-gen NLP models. Experience with Transformers and large-scale data pipelines required.'
  },
  {
    id: 'j2',
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'New York, NY',
    department: 'Product',
    description: 'Build responsive, accessible, and performant web interfaces using React, TypeScript, and Tailwind CSS.'
  },
  {
    id: 'j3',
    title: 'DevOps Specialist',
    type: 'Contract',
    location: 'Remote',
    department: 'Operations',
    description: 'Maintain and optimize our CI/CD pipelines and cloud infrastructure on AWS and Google Cloud.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small startups looking to integrate basic AI features.',
    features: ['API Access (Limited)', 'Basic Support', '1 Custom Model', 'Weekly Reports']
  },
  {
    id: 'standard',
    name: 'Growth',
    price: '$7,500',
    description: 'Ideal for scaling businesses requiring robust support and flexibility.',
    features: ['Full API Access', 'Priority Support', '5 Custom Models', 'Real-time Analytics', 'Dedicated Account Manager'],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Comprehensive solutions for large organizations with complex needs.',
    features: ['Unlimited API Access', '24/7 Dedicated Support', 'Unlimited Custom Models', 'On-premise Deployment', 'Custom SLA']
  }
];