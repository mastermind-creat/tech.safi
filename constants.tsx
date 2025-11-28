import { 
  Home, Building2, Briefcase, Layers, Cpu, CreditCard, Users, Mail,
  Code, Shield, Brain, Zap, Globe, Smartphone, Server, ShoppingCart, Activity,
  PieChart, Utensils, Newspaper, Clock, Bot, LayoutGrid
} from 'lucide-react';
import { NavItem, Service, Project, TeamMember, JobPosition, PricingPlan, BlogPost } from './types';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <Home size={18} />, category: 'main' },
  { 
    label: 'Company', 
    path: '/company', 
    icon: <Building2 size={18} />, 
    category: 'company',
    children: [
      { label: 'About Us', path: '/company', icon: <Building2 size={16} /> },
      { label: 'Portfolio', path: '/portfolio', icon: <Briefcase size={16} /> },
      { label: 'Careers', path: '/careers', icon: <Users size={16} /> }
    ]
  },
  { 
    label: 'Services', 
    path: '/services', 
    icon: <Layers size={18} />, 
    category: 'services',
    children: [
      { label: 'All Services', path: '/services', icon: <LayoutGrid size={16} /> },
      { label: 'AI Solutions', path: '/ai-solutions', icon: <Brain size={16} /> }
    ]
  },
  { label: 'Pricing', path: '/pricing', icon: <CreditCard size={18} />, category: 'main' },
  { label: 'Blog', path: '/blog', icon: <Newspaper size={18} />, category: 'main' },
  { label: 'Contact', path: '/contact', icon: <Mail size={18} />, category: 'main' },
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
    content: `
      <p>The financial landscape in Africa is undergoing a seismic shift, driven by the rapid adoption of Artificial Intelligence (AI). Fintech companies are no longer just digitalizing transactions; they are leveraging AI to solve deep-rooted infrastructure challenges and drive financial inclusion.</p>
      
      <h3>1. Personalized Banking for the Unbanked</h3>
      <p>Traditional banking models have often failed to reach remote populations due to high operational costs. AI-driven mobile lending platforms use alternative data points—such as mobile usage patterns and transaction history—to build credit scores for individuals who lack formal banking history. This democratization of credit is empowering millions of small business owners and individuals.</p>

      <h3>2. Fraud Detection at Scale</h3>
      <p>With the rise of digital transactions comes the increased risk of cybercrime. African fintechs are deploying sophisticated machine learning models that detect anomalies in real-time. By analyzing millions of transaction patterns, these systems can flag fraudulent activities instantly, protecting both the consumer and the institution.</p>

      <h3>3. The Road Ahead</h3>
      <p>As internet penetration deepens and smartphone adoption grows, the synergy between AI and Fintech will only strengthen. We expect to see more autonomous financial agents, voice-activated banking in local dialects, and hyper-personalized investment advice becoming the norm rather than the exception.</p>
    `,
    category: "AI & Tech",
    author: { name: "Wambia Kennedy", role: "CEO", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100" },
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Fintech", "AI", "Innovation"]
  },
  {
    id: 'b2',
    title: "Migrating Legacy Systems to the Cloud",
    excerpt: "A comprehensive guide for enterprises looking to modernize their infrastructure for scalability and security.",
    content: `
      <p>Legacy systems are the silent anchors holding many enterprises back. Built on outdated architectures, they are expensive to maintain, vulnerable to security breaches, and incapable of scaling to meet modern demands. Migrating to the cloud is not just an IT upgrade; it's a business imperative.</p>

      <h3>The "Lift and Shift" vs. Refactoring</h3>
      <p>One of the first decisions in migration is choosing the strategy. "Lift and Shift" involves moving the application as-is to the cloud. While fast, it rarely exploits cloud-native features like auto-scaling. Refactoring, or re-architecting, involves rewriting parts of the application to be cloud-native. Though more resource-intensive upfront, it offers significantly better long-term ROI.</p>

      <h3>Security by Design</h3>
      <p>Cloud providers like AWS and Azure offer robust security tools, but the shared responsibility model means you are still responsible for your data. Implementing Zero Trust architectures, automated compliance checks, and encryption at rest and in transit are non-negotiable steps in a successful migration.</p>
    `,
    category: "Cloud Computing",
    author: { name: "Samuel Simiyu", role: "CTO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100" },
    date: "Mar 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["AWS", "Cloud", "Migration"]
  },
  {
    id: 'b3',
    title: "Why Your Business Needs a Mobile-First Strategy",
    excerpt: "With mobile usage skyrocketing, optimizing for mobile is no longer optional—it's essential for survival.",
    content: `
      <p>In 2025, mobile devices account for over 60% of all global web traffic. In regions like Africa and Asia, this number is even higher. A "desktop-first" mentality is a fast track to irrelevance. Adopting a mobile-first strategy ensures you meet your customers where they are.</p>

      <h3>Responsive Design is Not Enough</h3>
      <p>Simply shrinking a desktop site to fit a phone screen is no longer sufficient. Mobile-first design involves prioritizing content, optimizing touch interactions, and ensuring lightning-fast load times on cellular networks. Features like offline mode (via PWAs) and push notifications can significantly boost engagement.</p>

      <h3>The SEO Impact</h3>
      <p>Search engines prioritize mobile-friendly websites. If your mobile experience is poor, your search rankings will suffer, directly impacting your visibility and customer acquisition costs. Investing in a stellar mobile experience is investing in your brand's future.</p>
    `,
    category: "Digital Strategy",
    author: { name: "Lewis Mwaura", role: "COO", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=100&h=100" },
    date: "Feb 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "UX", "Growth"]
  },
  {
    id: 'b4',
    title: "Cybersecurity Best Practices for 2025",
    excerpt: "Protecting your digital assets in an era of sophisticated AI-driven cyber threats.",
    content: `
      <p>As AI tools become more accessible, they are being weaponized by bad actors to launch sophisticated phishing attacks, automate vulnerability scanning, and create deepfakes. Defending against these threats requires a proactive, multi-layered approach.</p>

      <h3>AI Fighting AI</h3>
      <p>To combat AI-driven attacks, businesses must leverage AI-driven defense mechanisms. Behavioral analysis tools can establish a baseline of normal network activity and instantly flag anomalies that human analysts might miss. Automated incident response systems can contain threats in milliseconds.</p>

      <h3>The Human Firewall</h3>
      <p>Technology alone is insufficient. Regular security training is vital. Employees must be taught to recognize social engineering tactics and verify requests, especially those involving financial transfers or sensitive data. A security-conscious culture is your strongest defense.</p>
    `,
    category: "Security",
    author: { name: "Vinich Omuga", role: "CSO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" },
    date: "Feb 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    tags: ["Security", "Data", "Privacy"]
  },
  {
    id: 'b5',
    title: "Optimizing Web Performance for Low-Bandwidth",
    excerpt: "Techniques to ensure your web apps fly even on 3G networks.",
    content: `
      <p>Building for the next billion users means building for variable network conditions. While 5G is expanding, a significant portion of the world still relies on 3G or unstable 4G connections. Performance optimization is an accessibility issue.</p>

      <h3>Aggressive Caching & Code Splitting</h3>
      <p>Modern bundlers allow us to split code into small chunks, loading only what is necessary for the current view. Combined with service workers for caching assets locally, this ensures that repeat visits are nearly instantaneous.</p>

      <h3>Image Optimization</h3>
      <p>Images often account for the bulk of a page's weight. Using modern formats like WebP or AVIF, implementing lazy loading, and serving responsive image sizes can reduce payload size by up to 70% without sacrificing visual quality.</p>
    `,
    category: "Web Development",
    author: { name: "Keith Keizzah", role: "CIO", avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?fit=crop&w=100&h=100" },
    date: "Feb 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Performance", "Web", "Coding"]
  },
  {
    id: 'b6',
    title: "The Rise of Superapps in Africa",
    excerpt: "Why bundled services are dominating the digital landscape in emerging markets.",
    content: `
      <p>The Superapp model—where a single application offers a suite of services ranging from messaging and payments to ride-hailing and food delivery—is finding fertile ground in Africa. This trend is driven by the need to conserve smartphone storage and data usage.</p>

      <h3>Convenience is King</h3>
      <p>For users with entry-level smartphones, installing twenty different apps for daily tasks is impractical. A Superapp consolidates these needs into one lightweight interface. This centralization also simplifies the KYC (Know Your Customer) process, as identity verification happens once for the entire ecosystem.</p>

      <h3>The Ecosystem Effect</h3>
      <p>For businesses, the Superapp model creates a powerful ecosystem where data from one service informs another. A user's ride-hailing history might inform their creditworthiness for a micro-loan within the same app. This interconnectedness drives engagement and retention.</p>
    `,
    category: "Digital Strategy",
    author: { name: "Wambia Kennedy", role: "CEO", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100" },
    date: "Feb 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    tags: ["Business", "Trends", "Africa"]
  },
  {
    id: 'b7',
    title: "React Server Components: A Deep Dive",
    excerpt: "Understanding the paradigm shift in how we build React applications.",
    content: `
      <p>React Server Components (RSC) represent the biggest shift in the React ecosystem since Hooks. By allowing components to render exclusively on the server, we can reduce the JavaScript bundle size sent to the client to nearly zero for static content.</p>

      <h3>Zero-Bundle-Size Components</h3>
      <p>Traditionally, using a library for markdown rendering or date formatting meant shipping that library's code to the user's browser. With RSC, these libraries run on the server, render the HTML, and only the result is sent. This dramatically improves First Contentful Paint (FCP) and Time to Interactive (TTI).</p>

      <h3>Direct Backend Access</h3>
      <p>Server components can access the database directly. This removes the need for an API layer for internal data fetching, simplifying the architecture and reducing latency. It blurs the line between backend and frontend, enabling full-stack capabilities within a single component file.</p>
    `,
    category: "Web Development",
    author: { name: "Samuel Simiyu", role: "CTO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100" },
    date: "Feb 05, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Next.js", "Frontend"]
  },
  {
    id: 'b8',
    title: "AI Ethics: Navigating the Grey Areas",
    excerpt: "As AI becomes autonomous, how do we ensure it aligns with human values?",
    content: `
      <p>The capabilities of Large Language Models (LLMs) and autonomous agents are advancing faster than the regulatory frameworks governing them. This creates complex ethical dilemmas regarding bias, privacy, and accountability.</p>

      <h3>The Bias Problem</h3>
      <p>AI models are only as good as the data they are trained on. If historical data contains biases against certain demographics, the AI will inevitably perpetuate—and often amplify—those biases. TechSafi is committed to 'Fairness by Design', rigorously testing our models for disparate impact across different user groups.</p>

      <h3>Transparency and Explainability</h3>
      <p>The 'Black Box' nature of deep learning makes it difficult to understand why an AI made a specific decision. In sectors like healthcare or finance, 'because the AI said so' is not an acceptable justification. We advocate for Explainable AI (XAI) techniques that provide interpretable insights into model reasoning.</p>
    `,
    category: "AI & Tech",
    author: { name: "Wambia Kennedy", role: "CEO", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100" },
    date: "Jan 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&fit=crop&w=800&q=80",
    tags: ["Ethics", "Society", "Future"]
  }
];

export const SERVICES = [];
export const TEAM = [];
export const JOBS = [];
export const PRICING_PLANS = [];