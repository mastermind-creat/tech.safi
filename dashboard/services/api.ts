
/**
 * TechSafi Control Centre API Service
 * Centralized logic for data fetching and management.
 */

import { BlogPost } from '../../types';

// --- DATA MODELS ---

export interface GeoDataPoint {
  country: string;
  count: number;
  percentage: number;
}

export interface FunnelStep {
  label: string;
  value: number;
  conversion: number;
}

export interface SessionData {
  hour: number;
  day: string;
  intensity: number; // 0 to 1
}

export interface AiPerformanceStats {
  accuracy: number;
  latency: number;
  tokenUsage: number;
  satisfaction: number;
}

// ... existing interfaces ...
export interface AiFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
  subFeatures: string[];
  color: string;
  displayOrder: number;
}

export interface AiUseCase {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
}

export interface AiFaq {
  id: string;
  question: string;
  answer: string;
}

export interface VisionarySocial {
  id: string;
  platform: 'linkedin' | 'twitter' | 'github' | 'instagram' | 'facebook' | 'web';
  url: string;
}

export interface VisionaryMember {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  image: string;
  desc: string;
  stats: { label: string; value: string }[];
  socials: VisionarySocial[];
  expertise: string[];
  color: string;
  badgeColor: string;
  iconName: string;
  displayOrder: number;
  tier: 'ceo' | 'executive' | 'strategic' | 'future';
  status: 'Active' | 'Hidden';
}

export interface CoreValue {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
}

export interface CompanyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  bg: string;
  align: 'left' | 'right';
  displayOrder: number;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
  requirements: string[];
  category: 'Regular' | 'Management' | 'Strategic';
  status: 'Open' | 'Closed' | 'Hidden';
}

export interface CareerCultureValue {
  id: string;
  iconName: string;
  title: string;
  desc: string;
  color: string;
}

export interface CareerBenefit {
  id: string;
  iconName: string;
  title: string;
  desc: string;
}

export interface SystemStats {
  latency: string;
  uptime: string;
  activeLeads: number;
  pendingDeploys: number;
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'danger';
  details?: string;
  ip?: string;
}

export interface SecurityThreat {
  id: string;
  type: 'Brute Force' | 'SQL Injection' | 'DDoS' | 'Unauthorized Access';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Blocked' | 'Mitigated' | 'Investigating';
  timestamp: string;
  origin: string;
}

export interface MediaItem {
  id: string;
  url: string;
  name: string;
  size: string;
  type: string;
  dimensions?: string;
  createdAt: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  status: 'New' | 'In Progress' | 'Contacted' | 'Closed' | 'Archived';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  timestamp: string;
  internalNotes?: string;
  source: 'Web Form' | 'Estimator' | 'Direct';
}

export interface ContactPageConfig {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cards: {
    id: string;
    type: 'email' | 'phone' | 'address';
    title: string;
    desc: string;
    primaryDetail: string;
    secondaryDetail: string;
    link: string;
    color: string;
  }[];
  form: {
    title: string;
    subjects: string[];
    budgets: string[];
    success: {
      title: string;
      message: string;
    };
  };
  whatsapp: {
    title: string;
    description: string;
    number: string;
    isActive: boolean;
  };
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export interface HomePageConfig {
  settings: {
    animationIntensity: 'low' | 'medium' | 'high';
    marqueeSpeed: number;
    showGrid: boolean;
  };
  hero: {
    badge: string;
    typewriterWords: string[];
    subtitle: string;
    images: string[];
    stats: { label: string; value: string }[];
  };
  partners: {
    id: string;
    name: string;
    logoUrl: string;
    description: string;
  }[];
  servicesPreview: {
    id: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
  }[];
  aiSpeedShowcase: {
    title: string;
    subtitle: string;
    metrics: { label: string; traditional: number; techsafi: number; unit: string }[];
  };
  methodology: {
    id: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
  }[];
  aiPreview: {
    badge: string;
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
  };
  bento: {
    id: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
    badge?: string;
    animationType: 'float' | 'pulse' | 'orbit' | 'glitch';
  }[];
  testimonials: {
    id: string;
    name: string;
    role: string;
    text: string;
    color: string;
  }[];
  estimator: {
    baseWeb: number;
    baseMobile: number;
    baseBoth: number;
    rushMultiplier: number;
    fastMultiplier: number;
    features: { id: string; label: string; price: number }[];
  };
}

export interface NavLinkConfig {
  id: string;
  label: string;
  path: string;
  children?: NavLinkConfig[];
}

export interface GlobalLayoutConfig {
  navbar: {
    logoPrimary: string;
    logoAccent: string;
    ctaLabel: string;
    links: NavLinkConfig[];
  };
  footer: {
    tagline: string;
    email: string;
    phone: string;
    address: string;
    officeHours: string;
    copyright: string;
    socials: { id: string; platform: string; url: string }[];
    quickLinks: { id: string; label: string; path: string }[];
    serviceLinks: { id: string; label: string; path: string }[];
    legalLinks: { id: string; label: string; path: string }[];
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription: string;
  categoryId: string;
  iconName: string;
  isAiPowered: boolean;
  displayOrder: number;
  status: 'Draft' | 'Published';
  ctaText: string;
  ctaLink: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  updatedAt: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  displayOrder: number;
  status: 'Active' | 'Disabled';
}

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  iconName: string;
  displayOrder: number;
  color?: string;
}

export interface TechItem {
  id: string;
  name: string;
  iconName: string;
  color: string;
  category: string;
  isVisible: boolean;
  displayOrder: number;
}

export interface AiSolutionsConfig {
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  features: AiFeature[];
  industryUseCases: AiUseCase[];
  faqs: AiFaq[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  year: string;
  stats: { label: string; value: string; iconName: string };
  color: string;
  iconName: string;
  status: 'Draft' | 'Published';
  displayOrder: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
  category: 'Web' | 'Mobile' | 'AI Addon' | 'AI Project' | 'Maintenance';
  displayOrder: number;
}

export interface AboutUsConfig {
  hero: {
    establishedYear: string;
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
  };
  story: {
    paragraphs: string[];
  };
  values: CoreValue[];
  visionaries: VisionaryMember[];
  milestones: CompanyMilestone[];
}

export interface CareersConfig {
  hero: {
    title: string;
    subtitle: string;
  };
  notice: {
    title: string;
    description: string;
    commissionDetails: string;
    isActive: boolean;
  };
  culture: CareerCultureValue[];
  benefits: CareerBenefit[];
  jobs: JobOpening[];
  internship: {
    title: string;
    duration: string;
    features: string[];
  };
  attachment: {
    title: string;
    duration: string;
    features: string[];
  };
  applicationSteps: {
    step: string;
    title: string;
    desc: string;
    color: string;
  }[];
}

// --- STORAGE KEYS ---
const HOME_PAGE_STORAGE_KEY = 'techsafi_home_page_config';
const CONFIG_STORAGE_KEY = 'techsafi_global_config';
const CONTACT_PAGE_STORAGE_KEY = 'techsafi_contact_page_config';
const CONTACT_SUBMISSIONS_STORAGE_KEY = 'techsafi_contact_submissions';
const PAGES_STORAGE_KEY = 'techsafi_pages';
const SERVICES_STORAGE_KEY = 'techsafi_services_data';
const AI_SOLUTIONS_STORAGE_KEY = 'techsafi_ai_solutions_config';
const PROJECTS_STORAGE_KEY = 'techsafi_portfolio_projects';
const PRICING_STORAGE_KEY = 'techsafi_pricing_plans';
const ABOUT_US_STORAGE_KEY = 'techsafi_about_us_config';
const CAREERS_STORAGE_KEY = 'techsafi_careers_config';
const BLOG_POSTS_STORAGE_KEY = 'techsafi_blog_posts';
const MEDIA_LIBRARY_STORAGE_KEY = 'techsafi_media_library';

// --- API METHODS ---

export const fetchGeoData = async (): Promise<GeoDataPoint[]> => [
  { country: 'Kenya', count: 4200, percentage: 65 },
  { country: 'Nigeria', count: 1200, percentage: 18 },
  { country: 'USA', count: 850, percentage: 12 },
  { country: 'United Kingdom', count: 320, percentage: 5 }
];

export const fetchFunnelData = async (): Promise<FunnelStep[]> => [
  { label: 'Visits', value: 12500, conversion: 100 },
  { label: 'Services View', value: 8400, conversion: 67 },
  { label: 'Pricing View', value: 3200, conversion: 38 },
  { label: 'Contact Initiation', value: 450, conversion: 14 }
];

export const fetchAiAnalytics = async (): Promise<AiPerformanceStats> => ({
  accuracy: 98.4,
  latency: 1.2,
  tokenUsage: 452000,
  satisfaction: 94
});

export const fetchMedia = async (): Promise<MediaItem[]> => {
  const stored = localStorage.getItem(MEDIA_LIBRARY_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [
    { id: '1', name: 'Hero Banner', url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400', size: '2.4MB', type: 'image/webp', dimensions: '1920x1080', createdAt: '2025-03-10' },
    { id: '2', name: 'CEO Profile', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', size: '450KB', type: 'image/jpeg', dimensions: '800x800', createdAt: '2025-03-11' },
    { id: '3', name: 'Mobile App Mockup', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', size: '1.1MB', type: 'image/png', dimensions: '1200x900', createdAt: '2025-03-12' }
  ];
};

export const saveMedia = async (items: MediaItem[]): Promise<void> => {
  localStorage.setItem(MEDIA_LIBRARY_STORAGE_KEY, JSON.stringify(items));
};

export const fetchSecurityAlerts = async (): Promise<SecurityThreat[]> => [
  { id: '1', type: 'Brute Force', severity: 'High', status: 'Blocked', timestamp: '2025-03-15T10:30:00', origin: '192.168.1.45 (Nairobi)' },
  { id: '2', type: 'SQL Injection', severity: 'Critical', status: 'Mitigated', timestamp: '2025-03-14T22:15:00', origin: '45.12.14.8 (Ukraine)' },
  { id: '3', type: 'Unauthorized Access', severity: 'Medium', status: 'Investigating', timestamp: '2025-03-15T08:45:00', origin: 'Internal Cluster' }
];

export const fetchPages = async (): Promise<any[]> => {
  const stored = localStorage.getItem(PAGES_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [
    { id: '1', name: 'Home', path: '/', status: 'Published', lastEdited: '2025-03-15' },
    { id: '2', name: 'Company', path: '/company', status: 'Published', lastEdited: '2025-03-14' },
    { id: '3', name: 'Services', path: '/services', status: 'Published', lastEdited: '2025-03-12' },
    { id: '4', name: 'Contact', path: '/contact', status: 'Published', lastEdited: '2025-03-15' }
  ];
};

export const fetchServices = async (): Promise<ServiceItem[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).services || [];
  return [];
};

export const fetchCategories = async (): Promise<ServiceCategory[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).categories || [];
  return [
    { id: 'c1', name: 'Web Development', slug: 'web-development', displayOrder: 1, status: 'Active' },
    { id: 'c2', name: 'AI Integration', slug: 'ai-integration', displayOrder: 2, status: 'Active' }
  ];
};

export const fetchMethodology = async (): Promise<MethodologyStep[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).methodology || [];
  return [];
};

export const fetchTechStack = async (): Promise<TechItem[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).techStack || [];
  return [];
};

export const saveServicesData = async (data: { services: ServiceItem[], categories: ServiceCategory[], methodology: MethodologyStep[], techStack: TechItem[] }): Promise<void> => {
  localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(data));
};

export const fetchAiSolutionsData = async (): Promise<AiSolutionsConfig> => {
  const stored = localStorage.getItem(AI_SOLUTIONS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    heroTitle: 'Custom Software with AI Integration',
    heroSubtitle: 'We build custom websites, software, and systems integrated with AI automation for your business.',
    metaTitle: 'AI Solutions | TechSafi',
    metaDescription: 'Custom AI integrations designed specifically for your business requirements',
    features: [],
    industryUseCases: [],
    faqs: []
  };
};

export const saveAiSolutionsData = async (config: AiSolutionsConfig): Promise<void> => {
  localStorage.setItem(AI_SOLUTIONS_STORAGE_KEY, JSON.stringify(config));
};

export const fetchProjects = async (): Promise<ProjectItem[]> => {
  const stored = localStorage.getItem(PROJECTS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const saveProjectsData = async (projects: ProjectItem[]): Promise<void> => {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
};

export const fetchPricingPlans = async (): Promise<PricingPlan[]> => {
  const stored = localStorage.getItem(PRICING_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const savePricingData = async (plans: PricingPlan[]): Promise<void> => {
  localStorage.setItem(PRICING_STORAGE_KEY, JSON.stringify(plans));
};

export const fetchAboutUsData = async (): Promise<AboutUsConfig> => {
  const stored = localStorage.getItem(ABOUT_US_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    hero: { establishedYear: '2024', title: 'About TechSafi', subtitle: 'Empowering businesses through innovative technology solutions.', stats: [] },
    story: { paragraphs: ['Founded in 2024...'] },
    values: [],
    visionaries: [],
    milestones: []
  };
};

export const saveAboutUsData = async (config: AboutUsConfig): Promise<void> => {
  localStorage.setItem(ABOUT_US_STORAGE_KEY, JSON.stringify(config));
};

export const fetchCareersData = async (): Promise<CareersConfig> => {
  const stored = localStorage.getItem(CAREERS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    hero: { title: 'Build the Future With Us', subtitle: 'Work with a passionate team...' },
    notice: { title: 'Building Together', description: '', commissionDetails: '', isActive: true },
    culture: [],
    benefits: [],
    jobs: [],
    internship: { title: 'Internship Program', duration: '3-6 Months', features: [] },
    attachment: { title: 'Industrial Attachment', duration: '3 Months', features: [] },
    applicationSteps: []
  };
};

export const saveCareersData = async (config: CareersConfig): Promise<void> => {
  localStorage.setItem(CAREERS_STORAGE_KEY, JSON.stringify(config));
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const stored = localStorage.getItem(BLOG_POSTS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const saveBlogPosts = async (posts: BlogPost[]): Promise<void> => {
  localStorage.setItem(BLOG_POSTS_STORAGE_KEY, JSON.stringify(posts));
};

export const fetchHomePageConfig = async (): Promise<HomePageConfig> => {
  const stored = localStorage.getItem(HOME_PAGE_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  const defaultConfig: HomePageConfig = {
    settings: { animationIntensity: 'medium', marqueeSpeed: 20, showGrid: true },
    hero: {
      badge: 'TechSafi Intelligence Protocol v1.4',
      typewriterWords: ['Digital Ecosystems', 'AI Integration', 'Modern Logic'],
      subtitle: "Empowering businesses with AI-enhanced software, tailored automation, and scalable architectures designed for the next era of digital dominance.",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      ],
      stats: [
        { label: "Projects Delivered", value: "50+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Years Innovation", value: "5+" }
      ]
    },
    partners: [
      { id: 'p1', name: 'Vercel', description: 'Next-gen deployment infrastructure.', logoUrl: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
      { id: 'p2', name: 'Stripe', description: 'Financial infrastructure for global business.', logoUrl: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg' },
      { id: 'p3', name: 'Google Cloud', description: 'AI and computing backbone.', logoUrl: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' }
    ],
    servicesPreview: [
      { id: 's1', title: 'Web Development', description: 'High-performance applications.', iconName: 'Globe', color: 'blue' },
      { id: 's2', title: 'AI Integration', description: 'Neural business logic.', iconName: 'Brain', color: 'purple' },
      { id: 's3', title: 'Mobile Ecosystems', description: 'Native performance everywhere.', iconName: 'Smartphone', color: 'emerald' }
    ],
    aiSpeedShowcase: {
      title: 'The Velocity Advantage',
      subtitle: 'Quantifying the impact of TechSafi autonomous engineering on your product lifecycle.',
      metrics: [
        { label: 'Technical Discovery', traditional: 14, techsafi: 2, unit: 'Days' },
        { label: 'Core Architecture', traditional: 21, techsafi: 5, unit: 'Days' },
        { label: 'Global Deployment', traditional: 12, techsafi: 1, unit: 'Hours' }
      ]
    },
    methodology: [
      { id: 'm1', title: 'Discovery', description: 'Deep-dive into infrastructure and user needs.', iconName: 'Search', color: 'blue' },
      { id: 'm2', title: 'Intelligence', description: 'Integrating core AI models and systems.', iconName: 'Brain', color: 'purple' },
      { id: 'm3', title: 'Deployment', description: 'Bank-grade security protocol rollout.', iconName: 'Rocket', color: 'emerald' }
    ],
    aiPreview: {
      badge: 'Neural Core',
      title: 'Engineering Autonomous Futures',
      subtitle: 'Harness the power of machine learning to eliminate manual bottlenecks.',
      stats: [
        { label: 'Training Cycles', value: 'Optimized' },
        { label: 'Latency Rate', value: 'Sub-ms' }
      ]
    },
    bento: [
      { id: 'b1', title: 'Neural Logic', description: 'Custom models for your domain.', iconName: 'Brain', color: 'purple', animationType: 'orbit', badge: 'Intelligence' },
      { id: 'b2', title: 'Global Sync', description: 'Real-time data parity.', iconName: 'Zap', color: 'blue', animationType: 'glitch', badge: 'Latency' },
      { id: 'b3', title: 'Deep Edge', description: 'Computing at the source.', iconName: 'Cpu', color: 'emerald', animationType: 'pulse', badge: 'Edge' }
    ],
    testimonials: [
      { id: 't1', name: "James D.", role: "CTO", text: "TechSafi is the standard for AI implementation in the region.", color: "blue" },
      { id: 't2', name: "Sarah M.", role: "Founder", text: "Our systems have never been faster or more reliable.", color: "purple" }
    ],
    estimator: {
      baseWeb: 50000,
      baseMobile: 250000,
      baseBoth: 450000,
      rushMultiplier: 1.5,
      fastMultiplier: 1.25,
      features: [
        { id: 'ai', label: 'AI Integration', price: 100000 },
        { id: 'auth', label: 'User Auth', price: 30000 },
        { id: 'payments', label: 'Payments', price: 40000 }
      ]
    }
  };
  return defaultConfig;
};

export const saveHomePageConfig = async (config: HomePageConfig): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  localStorage.setItem(HOME_PAGE_STORAGE_KEY, JSON.stringify(config));
};

export const fetchGlobalLayoutConfig = async (): Promise<GlobalLayoutConfig> => {
  const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    navbar: { 
      logoPrimary: "Tech", 
      logoAccent: "Safi", 
      ctaLabel: "Initiate", 
      links: [
        { id: '1', label: 'Home', path: '/' },
        { id: '2', label: 'Company', path: '/company' },
        { id: '3', label: 'Services', path: '/services' },
        { id: '4', label: 'Pricing', path: '/pricing' },
        { id: '5', label: 'Blog', path: '/blog' },
        { id: '6', label: 'Contact', path: '/contact' }
      ] 
    },
    footer: { 
      tagline: "Building the next generation of intelligent software.", 
      email: "info@techsafi.com", 
      phone: "+254 751 380 948", 
      address: "Nairobi, Kenya", 
      socials: [
        { id: 's1', platform: 'Linkedin', url: '#' },
        { id: 's2', platform: 'Github', url: '#' }
      ], 
      quickLinks: [
        { id: 'q1', label: 'Home', path: '/' },
        { id: 'q2', label: 'Portfolio', path: '/portfolio' }
      ], 
      serviceLinks: [
        { id: 'sv1', label: 'Web Dev', path: '/services' },
        { id: 'sv2', label: 'AI Integration', path: '/ai-solutions' }
      ], 
      legalLinks: [
        { id: 'l1', label: 'Privacy Policy', path: '/privacy-policy' },
        { id: 'l2', label: 'Terms of Service', path: '/terms-of-service' }
      ], 
      copyright: "TechSafi - 2025 Innovation Elevated", 
      officeHours: "Mon-Fri 9AM-6PM" 
    }
  };
};

export const saveGlobalLayoutConfig = async (config: GlobalLayoutConfig): Promise<boolean> => {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  return true;
};

export const fetchContactPageConfig = async (): Promise<ContactPageConfig> => {
  const stored = localStorage.getItem(CONTACT_PAGE_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    hero: { badge: "Contact Us", title: "Let's Connect", subtitle: "We are ready to build your next project." },
    cards: [
      { id: 'c1', type: 'email', title: 'Email Us', desc: 'Direct support', primaryDetail: 'info@techsafi.com', secondaryDetail: '24/7 Response', link: 'mailto:info@techsafi.com', color: 'blue' },
      { id: 'c2', type: 'phone', title: 'Call Us', desc: 'Direct line', primaryDetail: '+254 751 380 948', secondaryDetail: 'Mon-Fri 9-5', link: 'tel:+254751380948', color: 'purple' },
      { id: 'c3', type: 'address', title: 'Visit Us', desc: 'Our HQ', primaryDetail: 'Nairobi, Kenya', secondaryDetail: 'CBD Office', link: '#', color: 'emerald' }
    ],
    form: { 
      title: "Send a Message", 
      subjects: ['General Inquiry', 'Project Proposal', 'AI Integration', 'Career Opportunity'], 
      budgets: ['Under KES 50k', 'KES 50k - 150k', 'KES 150k - 500k', 'Over KES 500k'], 
      success: { title: "Message Received", message: "Our team will contact you within 24 hours." } 
    },
    whatsapp: { title: "WhatsApp Support", description: "Get instant responses via chat.", number: "254751380948", isActive: true },
    faqs: [
      { id: 'f1', question: 'How long to start?', answer: 'Most projects start within 7 days of contract signing.' }
    ]
  };
};

export const saveContactPageConfig = async (config: ContactPageConfig): Promise<void> => {
  localStorage.setItem(CONTACT_PAGE_STORAGE_KEY, JSON.stringify(config));
};

export const fetchContactSubmissions = async (): Promise<ContactSubmission[]> => {
  const stored = localStorage.getItem(CONTACT_SUBMISSIONS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', subject: 'Project Proposal', budget: 'KES 150k - 500k', message: 'Hello, looking for a mobile app.', status: 'New', priority: 'High', timestamp: '2025-03-15T12:00:00', source: 'Web Form' }
  ];
};

export const saveContactSubmissions = async (submissions: ContactSubmission[]): Promise<void> => {
  localStorage.setItem(CONTACT_SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
};

export const fetchSystemStats = async (): Promise<SystemStats> => ({
  latency: '14ms', uptime: '99.99%', activeLeads: 14, pendingDeploys: 1
});

export const fetchActivityLogs = async (): Promise<ActivityLog[]> => [
  { id: '1', action: 'Matrix Sync', user: 'System', timestamp: '2025-03-15T14:20:00', status: 'success', ip: '127.0.0.1' },
  { id: '2', action: 'Auth Success', user: 'Wambia K.', timestamp: '2025-03-15T10:15:00', status: 'success', ip: '192.168.1.1' },
  { id: '3', action: 'Resource Deleted', user: 'Admin', timestamp: '2025-03-15T09:45:00', status: 'warning', ip: '10.0.0.5' }
];

export const fetchTrafficData = async (): Promise<ChartDataPoint[]> => [
  { label: 'Mon', value: 400 }, { label: 'Tue', value: 600 }, { label: 'Wed', value: 800 },
  { label: 'Thu', value: 700 }, { label: 'Fri', value: 900 }, { label: 'Sat', value: 500 }, { label: 'Sun', value: 450 }
];

export const fetchServiceEngagement = async (): Promise<ChartDataPoint[]> => [
  { label: 'Web', value: 40 }, { label: 'Mobile', value: 30 }, { label: 'AI', value: 20 }, { label: 'Cloud', value: 10 }
];
