/**
 * TechSafi Control Centre API Service
 * Centralized logic for data fetching and management.
 */

import { BlogPost } from '../../types';

// --- DATA MODELS ---

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
  hero: {
    typewriterWords: string[];
    subtitle: string;
    images: string[];
    stats: { label: string; value: string }[];
  };
  partners: {
    id: string;
    name: string;
    logoUrl: string;
  }[];
  servicesPreview: {
    id: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
  }[];
  bento: {
    id: string;
    title: string;
    description: string;
    iconName: string;
    color: string;
    badge?: string;
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
  status: 'Published' | 'Draft';
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
}

export interface TechItem {
  id: string;
  name: string;
  iconName: string;
  color: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'AI' | 'Cloud' | 'Database';
  isVisible: boolean;
  displayOrder: number;
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

// --- DASHBOARD MISSING TYPES ---

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
  status: 'success' | 'warning' | 'error';
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

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
  status: 'Published' | 'Draft';
  displayOrder: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  category: 'Web' | 'Mobile' | 'AI Addon' | 'AI Project' | 'Maintenance';
  displayOrder: number;
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

export interface AboutUsConfig {
  hero: {
    title: string;
    subtitle: string;
    establishedYear: string;
    stats: { label: string; value: string }[];
  };
  story: {
    paragraphs: string[];
  };
  values: CoreValue[];
  visionaries: VisionaryMember[];
  milestones: CompanyMilestone[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
  requirements: string[];
  category: 'Regular' | 'Strategic';
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
  color: string;
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
const CONFIG_STORAGE_KEY = 'techsafi_global_config';
const SERVICES_STORAGE_KEY = 'techsafi_services_data';
const HOME_PAGE_STORAGE_KEY = 'techsafi_home_page_config';
const CONTACT_PAGE_STORAGE_KEY = 'techsafi_contact_page_config';
const CONTACT_SUBMISSIONS_STORAGE_KEY = 'techsafi_contact_submissions';
const PROJECTS_STORAGE_KEY = 'techsafi_portfolio_projects';
const PRICING_STORAGE_KEY = 'techsafi_pricing_plans';
const ABOUT_US_STORAGE_KEY = 'techsafi_about_us_config';
const CAREERS_STORAGE_KEY = 'techsafi_careers_config';
const BLOG_STORAGE_KEY = 'techsafi_blog_posts';
const AI_SOLUTIONS_STORAGE_KEY = 'techsafi_ai_solutions_config';

// --- API METHODS ---

export const fetchHomePageConfig = async (): Promise<HomePageConfig> => {
  const stored = localStorage.getItem(HOME_PAGE_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  const defaultConfig: HomePageConfig = {
    hero: {
      typewriterWords: ['Digital Solutions', 'AI Ecosystems', 'Future Tech'],
      subtitle: "Empowering businesses with AI-enhanced software, custom mobile apps, and intelligent automation tailored for the modern digital era.",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      ],
      stats: [
        { label: "Projects Delivered", value: "50+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Years Innovation", value: "5+" },
        { label: "Countries Served", value: "3+" }
      ]
    },
    partners: [
      { id: 'p1', name: 'Vercel', logoUrl: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
      { id: 'p2', name: 'Stripe', logoUrl: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg' },
      { id: 'p3', name: 'Google Cloud', logoUrl: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
      { id: 'p4', name: 'AWS', logoUrl: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
      { id: 'p5', name: 'Nvidia', logoUrl: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' }
    ],
    servicesPreview: [
      { id: 's1', title: 'Web Development', description: 'Modern, high-performance websites and PWAs.', iconName: 'Globe', color: 'blue' },
      { id: 's2', title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions.', iconName: 'Smartphone', color: 'purple' },
      { id: 's3', title: 'AI Integration', description: 'Embedding intelligence into your existing stack.', iconName: 'Brain', color: 'emerald' },
      { id: 's4', title: 'Cloud Infra', description: 'Scalable cloud architecture and DevOps.', iconName: 'Cloud', color: 'sky' },
      { id: 's5', title: 'ERP Systems', description: 'Bespoke enterprise resource planning tools.', iconName: 'Layers', color: 'indigo' },
      { id: 's6', title: 'UI/UX Design', description: 'Bespoke digital experiences with impact.', iconName: 'Palette', color: 'pink' }
    ],
    bento: [
      { id: 'b1', title: 'Neural Processing', description: 'Advanced AI models integrated into business logic.', iconName: 'Brain', color: 'purple', badge: 'AI Integration' },
      { id: 'b2', title: 'Global Scale', description: 'Deploy anywhere with edge-optimized architecture.', iconName: 'Globe', color: 'blue' },
      { id: 'b3', title: 'Bank-Grade Security', description: 'Advanced encryption and security protocols.', iconName: 'Shield', color: 'emerald' },
      { id: 'b4', title: 'Real-time Sync', description: 'Live data processing for instant responses.', iconName: 'Activity', color: 'orange' }
    ],
    testimonials: [
      { id: 't1', name: "James D.", role: "CTO, RetailTech", text: "TechSafi's AI recommendation engine transformed our e-commerce platform.", color: "blue" },
      { id: 't2', name: "Sarah M.", role: "Founder, HealthFirst", text: "The cross-platform app TechSafi built for us is seamless. Our users love it!", color: "purple" },
      { id: 't3', name: "Kevin L.", role: "Director, GlobalLogistics", text: "Exceptional cloud architecture. Our system uptime improved to 99.99%.", color: "emerald" }
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
        { id: 'payments', label: 'Payments', price: 40000 },
        { id: 'cms', label: 'Custom CMS', price: 50000 },
        { id: 'analytics', label: 'Analytics', price: 30000 },
        { id: 'chat', label: 'Live Chat', price: 60000 }
      ]
    }
  };
  return defaultConfig;
};

export const saveHomePageConfig = async (config: HomePageConfig): Promise<void> => {
  localStorage.setItem(HOME_PAGE_STORAGE_KEY, JSON.stringify(config));
};

export const fetchGlobalLayoutConfig = async (): Promise<GlobalLayoutConfig> => {
  const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    navbar: { logoPrimary: "Tech", logoAccent: "Safi", ctaLabel: "Start Project", links: [] },
    footer: { tagline: "Future software.", email: "", phone: "", address: "", socials: [], quickLinks: [], serviceLinks: [], legalLinks: [], copyright: "", officeHours: "" }
  };
};

export const saveGlobalLayoutConfig = async (config: GlobalLayoutConfig): Promise<boolean> => {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  return true;
};

export const fetchServices = async (): Promise<ServiceItem[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).services || [];
  return [];
};

export const fetchCategories = async (): Promise<ServiceCategory[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) return JSON.parse(stored).categories || [];
  return [];
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

export const saveServicesData = async (data: any): Promise<void> => {
  localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(data));
};

// --- NEW API IMPLEMENTATIONS ---

export const fetchContactPageConfig = async (): Promise<ContactPageConfig> => {
  const stored = localStorage.getItem(CONTACT_PAGE_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    hero: { badge: "Contact Us", title: "Let's Connect", subtitle: "We are ready to assist you." },
    cards: [
      { id: '1', type: 'email', title: 'Email Us', desc: 'Direct support.', primaryDetail: 'info@techsafi.com', secondaryDetail: '24/7 Support', link: 'mailto:info@techsafi.com', color: 'blue' },
      { id: '2', type: 'phone', title: 'Call Us', desc: 'Direct line.', primaryDetail: '+254 751 380 948', secondaryDetail: 'Mon-Fri 9-5', link: 'tel:+254751380948', color: 'purple' },
      { id: '3', type: 'address', title: 'Visit Us', desc: 'HQ Office.', primaryDetail: 'Nairobi, Kenya', secondaryDetail: 'Central Business District', link: '#', color: 'emerald' }
    ],
    form: { 
      title: "Send a Message", 
      subjects: ['Project Inquiry', 'Support', 'Careers'], 
      budgets: ['Under KES 50k', 'KES 50k - 150k', 'Over KES 150k'], 
      success: { title: "Message Sent!", message: "We will get back to you shortly." } 
    },
    whatsapp: { title: "WhatsApp Chat", description: "Get instant support.", number: "254751380948", isActive: true },
    faqs: []
  };
};

export const saveContactPageConfig = async (config: ContactPageConfig): Promise<void> => {
  localStorage.setItem(CONTACT_PAGE_STORAGE_KEY, JSON.stringify(config));
};

export const fetchContactSubmissions = async (): Promise<ContactSubmission[]> => {
  const stored = localStorage.getItem(CONTACT_SUBMISSIONS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const saveContactSubmissions = async (submissions: ContactSubmission[]): Promise<void> => {
  localStorage.setItem(CONTACT_SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
};

export const fetchSystemStats = async (): Promise<SystemStats> => ({
  latency: '24ms', uptime: '99.99%', activeLeads: 14, pendingDeploys: 3
});

export const fetchActivityLogs = async (): Promise<ActivityLog[]> => [
  { id: '1', action: 'Config Updated', user: 'Admin', timestamp: '2 mins ago', status: 'success' }
];

export const fetchTrafficData = async (): Promise<ChartDataPoint[]> => [
  { label: 'Mon', value: 400 }, { label: 'Tue', value: 600 }, { label: 'Wed', value: 800 },
  { label: 'Thu', value: 700 }, { label: 'Fri', value: 900 }, { label: 'Sat', value: 500 }, { label: 'Sun', value: 450 }
];

export const fetchServiceEngagement = async (): Promise<ChartDataPoint[]> => [
  { label: 'Web', value: 40 }, { label: 'Mobile', value: 30 }, { label: 'AI', value: 20 }, { label: 'Cloud', value: 10 }
];

export const fetchPages = async (): Promise<any[]> => [
  { id: '1', name: 'Home', path: '/', status: 'Published', lastEdited: 'Mar 15, 2025' },
  { id: '2', name: 'About', path: '/company', status: 'Published', lastEdited: 'Mar 12, 2025' }
];

export const fetchAiSolutionsData = async (): Promise<AiSolutionsConfig> => {
  const stored = localStorage.getItem(AI_SOLUTIONS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    heroTitle: "AI Integrated Software", heroSubtitle: "Harnessing deep intelligence.", metaTitle: "AI Solutions | TechSafi", metaDescription: "Custom AI solutions for business.",
    features: [], industryUseCases: [], faqs: []
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
    hero: { title: "About TechSafi", subtitle: "Innovation Elevated.", establishedYear: "2024", stats: [] },
    story: { paragraphs: ["Founded in 2024..."] },
    values: [], visionaries: [], milestones: []
  };
};

export const saveAboutUsData = async (config: AboutUsConfig): Promise<void> => {
  localStorage.setItem(ABOUT_US_STORAGE_KEY, JSON.stringify(config));
};

export const fetchCareersData = async (): Promise<CareersConfig> => {
  const stored = localStorage.getItem(CAREERS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    hero: { title: "Join Our Team", subtitle: "Build the future." }, 
    notice: { title: "Early Stage", description: "Currently expanding...", commissionDetails: "High rates.", isActive: true },
    culture: [], benefits: [], jobs: [], internship: { title: "Internships", duration: "3-6 Months", features: [] },
    attachment: { title: "Attachments", duration: "3 Months", features: [] }, applicationSteps: []
  };
};

export const saveCareersData = async (config: CareersConfig): Promise<void> => {
  localStorage.setItem(CAREERS_STORAGE_KEY, JSON.stringify(config));
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const stored = localStorage.getItem(BLOG_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const saveBlogPosts = async (posts: BlogPost[]): Promise<void> => {
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
};
