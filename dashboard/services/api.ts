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

export interface SystemStats {
  visitors: number;
  visitorsChange: number;
  activeUsers: number;
  serverLoad: number;
  uptime: string;
  latency: string;
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

// --- PORTFOLIO MODELS ---

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

// --- PRICING MODELS ---

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

// --- ABOUT US MODELS ---

export interface CoreValue {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
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
    establishedYear: string;
    title: string;
    subtitle: string;
    stats: { label: string; value: string; iconName: string }[];
  };
  story: {
    title: string;
    paragraphs: string[];
    stats: { label: string; value: string }[];
  };
  values: CoreValue[];
  visionaries: VisionaryMember[];
  milestones: CompanyMilestone[];
  metaTitle: string;
  metaDescription: string;
}

// --- CAREERS MODELS ---

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

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
  requirements: string[];
  category: string;
  status: 'Open' | 'Closed' | 'Hidden';
}

export interface InternshipProgram {
  title: string;
  duration: string;
  features: string[];
  requirements: string;
}

export interface CareersConfig {
  hero: {
    title: string;
    subtitle: string;
    stats: { label: string; iconName: string }[];
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
  internship: InternshipProgram;
  attachment: InternshipProgram;
  applicationSteps: { step: string; title: string; desc: string; color: string }[];
  faqs: { id: string; question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

// --- AI SOLUTIONS MODELS ---

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
  features: AiFeature[];
  industryUseCases: AiUseCase[];
  faqs: AiFaq[];
  metaTitle: string;
  metaDescription: string;
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

const CONFIG_STORAGE_KEY = 'techsafi_global_config';
const SERVICES_STORAGE_KEY = 'techsafi_services_data';
const AI_SOLUTIONS_STORAGE_KEY = 'techsafi_ai_solutions_data';
const PORTFOLIO_STORAGE_KEY = 'techsafi_portfolio_data';
const PRICING_STORAGE_KEY = 'techsafi_pricing_data';
const ABOUT_US_STORAGE_KEY = 'techsafi_about_us_data';
const CAREERS_STORAGE_KEY = 'techsafi_careers_data';
const BLOG_STORAGE_KEY = 'techsafi_blog_data';
const CONTACT_STORAGE_KEY = 'techsafi_contact_leads';
const CONTACT_PAGE_STORAGE_KEY = 'techsafi_contact_page_config';

// --- API METHODS ---

export const fetchGlobalLayoutConfig = async (): Promise<GlobalLayoutConfig> => {
  const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return DEFAULT_CONFIG;
};

export const saveGlobalLayoutConfig = async (config: GlobalLayoutConfig): Promise<boolean> => {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  window.dispatchEvent(new Event('techsafi_config_updated'));
  return true;
};

export const fetchSystemStats = async (): Promise<SystemStats> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    visitors: 12450,
    visitorsChange: 12.5,
    activeUsers: 42,
    serverLoad: 24,
    uptime: "99.98%",
    latency: "45ms"
  };
};

export const fetchActivityLogs = async (): Promise<ActivityLog[]> => {
  return [
    { id: '1', action: 'Published Homepage Update', user: 'Kennedy (CEO)', timestamp: '2 mins ago', status: 'success' },
    { id: '2', action: 'Failed login attempt', user: 'Unknown IP', timestamp: '15 mins ago', status: 'warning' },
    { id: '3', action: 'New Portfolio Item: MediCare', user: 'Lewis (COO)', timestamp: '1 hour ago', status: 'success' },
  ];
};

export const fetchTrafficData = async (): Promise<ChartDataPoint[]> => {
  return [
    { label: 'Mon', value: 3200 },
    { label: 'Tue', value: 4100 },
    { label: 'Wed', value: 3800 },
    { label: 'Thu', value: 5400 },
    { label: 'Fri', value: 4900 },
    { label: 'Sat', value: 6200 },
    { label: 'Sun', value: 5800 },
  ];
};

export const fetchServiceEngagement = async (): Promise<ChartDataPoint[]> => {
  return [
    { label: 'AI Solutions', value: 45 },
    { label: 'Web Apps', value: 30 },
    { label: 'Mobile Apps', value: 15 },
    { label: 'Cloud Tech', value: 10 },
  ];
};

export const fetchPages = async () => {
  return [
    { id: 'h1', name: 'Home Page', path: '/', lastEdited: '2025-03-10', status: 'Published' },
    { id: 'a1', name: 'About Us', path: '/company', lastEdited: '2025-03-08', status: 'Published' },
    { id: 's1', name: 'Services', path: '/services', lastEdited: '2025-03-12', status: 'Draft' },
    { id: 'p1', name: 'Portfolio', path: '/portfolio', lastEdited: '2025-03-01', status: 'Published' },
  ];
};

// --- ABOUT US DATA ---

export const fetchAboutUsData = async (): Promise<AboutUsConfig> => {
  const stored = localStorage.getItem(ABOUT_US_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  return {
    hero: {
      establishedYear: "2024",
      title: "About TechSafi",
      subtitle: "Empowering businesses through innovative technology solutions.",
      stats: [
        { label: "Team Members", value: "5+", iconName: "Users" },
        { label: "Projects Done", value: "50+", iconName: "Share2" },
        { label: "Satisfaction", value: "98%", iconName: "Star" }
      ]
    },
    story: {
      title: "Our Story",
      paragraphs: ["Founded in 2024..."],
      stats: [{ label: "Projects Completed", value: "50+" }]
    },
    values: [],
    visionaries: [],
    milestones: [],
    metaTitle: "About Us | TechSafi",
    metaDescription: "Learn about TechSafi's journey."
  };
};

export const saveAboutUsData = async (data: AboutUsConfig): Promise<void> => {
  localStorage.setItem(ABOUT_US_STORAGE_KEY, JSON.stringify(data));
};

// --- CAREERS DATA ---

export const fetchCareersData = async (): Promise<CareersConfig> => {
  const stored = localStorage.getItem(CAREERS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  return {
    hero: { title: "Build Future", subtitle: "Passion", stats: [] },
    notice: { title: "Early Stage", description: "...", commissionDetails: "...", isActive: true },
    culture: [],
    benefits: [],
    jobs: [],
    internship: { title: "Internship", duration: "3-6M", features: [], requirements: "" },
    attachment: { title: "Attachment", duration: "3M", features: [], requirements: "" },
    applicationSteps: [],
    faqs: [],
    metaTitle: "Careers | TechSafi",
    metaDescription: "Join the team."
  };
};

export const saveCareersData = async (data: CareersConfig): Promise<void> => {
  localStorage.setItem(CAREERS_STORAGE_KEY, JSON.stringify(data));
};

// --- BLOG DATA ---

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const stored = localStorage.getItem(BLOG_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return []; 
};

export const saveBlogPosts = async (posts: BlogPost[]): Promise<void> => {
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
};

// --- CONTACT CRM DATA ---

export const fetchContactSubmissions = async (): Promise<ContactSubmission[]> => {
  const stored = localStorage.getItem(CONTACT_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  const mock: ContactSubmission[] = [
    {
      id: 'L1',
      firstName: 'Sarah',
      lastName: 'Jenkins',
      email: 'sarah.j@innovate.com',
      subject: 'AI Integration Solution',
      budget: '150k - 500k',
      message: 'We are looking to implement a custom AI recommendation engine for our retail platform.',
      status: 'New',
      priority: 'High',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      source: 'Web Form'
    }
  ];
  return mock;
};

export const saveContactSubmissions = async (submissions: ContactSubmission[]): Promise<void> => {
  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(submissions));
};

export const fetchContactPageConfig = async (): Promise<ContactPageConfig> => {
  const stored = localStorage.getItem(CONTACT_PAGE_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  const defaultConfig: ContactPageConfig = {
    hero: {
      badge: "We're Here to Help",
      title: "Get in Touch",
      subtitle: "Have a question or need assistance? Our dedicated team is ready to help you succeed."
    },
    cards: [
      { id: 'c1', type: 'email', title: 'Email Us', desc: 'Our support team is here to help you.', primaryDetail: 'info@techsafi.com', secondaryDetail: 'We respond within 24 hours', link: 'mailto:info@techsafi.com', color: 'blue' },
      { id: 'c2', type: 'phone', title: 'Call Us', desc: 'Speak directly with our team.', primaryDetail: '+254 751 380 948', secondaryDetail: '+254 110 046 523', link: 'tel:+254751380948', color: 'purple' },
      { id: 'c3', type: 'address', title: 'Visit Us', desc: 'Stop by our office.', primaryDetail: 'Nairobi, Kenya', secondaryDetail: 'East Africa', link: '#', color: 'green' }
    ],
    form: {
      title: "Send Us a Message",
      subjects: ["General Inquiry", "Project Inquiry", "Web Development", "Mobile Apps", "AI Solutions", "Other"],
      budgets: ["< KES 50k", "50k - 150k", "150k - 500k", "500k+"],
      success: {
        title: "Message Sent!",
        message: "Thank you for reaching out. We will get back to you within 24 hours."
      }
    },
    whatsapp: {
      title: "Reach Us Directly on WhatsApp",
      description: "Get instant responses to your queries. Chat with our team anytime!",
      number: "254751380948",
      isActive: true
    },
    faqs: [
      { id: 'f1', question: 'What services does TechSafi offer?', answer: 'We offer Custom Web Development, Mobile App Development, AI Integration, and more.' }
    ]
  };
  return defaultConfig;
};

export const saveContactPageConfig = async (config: ContactPageConfig): Promise<void> => {
  localStorage.setItem(CONTACT_PAGE_STORAGE_KEY, JSON.stringify(config));
};

// --- PORTFOLIO DATA ---

export const fetchProjects = async (): Promise<ProjectItem[]> => {
  const stored = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const saveProjectsData = async (projects: ProjectItem[]): Promise<void> => {
  localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(projects));
};

// --- PRICING DATA ---

export const fetchPricingPlans = async (): Promise<PricingPlan[]> => {
  const stored = localStorage.getItem(PRICING_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return [];
};

export const savePricingData = async (plans: PricingPlan[]): Promise<void> => {
  localStorage.setItem(PRICING_STORAGE_KEY, JSON.stringify(plans));
};

// --- SERVICES DATA ---

export const fetchServices = async (): Promise<ServiceItem[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    return data.services || [];
  }
  return [];
};

export const fetchCategories = async (): Promise<ServiceCategory[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    return data.categories || [];
  }
  return [
    { id: 'cat1', name: 'Web Apps', slug: 'web-apps', displayOrder: 1, status: 'Active' },
    { id: 'cat2', name: 'Mobile Apps', slug: 'mobile-apps', displayOrder: 2, status: 'Active' },
    { id: 'cat3', name: 'AI Solutions', slug: 'ai-solutions', displayOrder: 3, status: 'Active' },
  ];
};

export const fetchMethodology = async (): Promise<MethodologyStep[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    return data.methodology || [];
  }
  return [];
};

export const fetchTechStack = async (): Promise<TechItem[]> => {
  const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    return data.techStack || [];
  }
  return [];
};

export const saveServicesData = async (data: { services?: ServiceItem[], categories?: ServiceCategory[], methodology?: MethodologyStep[], techStack?: TechItem[] }): Promise<void> => {
  const existing = localStorage.getItem(SERVICES_STORAGE_KEY);
  const parsed = existing ? JSON.parse(existing) : {};
  const updated = { ...parsed, ...data };
  localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(updated));
};

// --- AI SOLUTIONS DATA ---

export const fetchAiSolutionsData = async (): Promise<AiSolutionsConfig> => {
  const stored = localStorage.getItem(AI_SOLUTIONS_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  return {
    heroTitle: "Custom Software with AI Integration",
    heroSubtitle: "We build custom websites, software, and systems integrated with AI automation for your business.",
    features: [],
    industryUseCases: [],
    faqs: [],
    metaTitle: "AI Solutions | TechSafi",
    metaDescription: "Next-gen AI integration for modern businesses."
  };
};

export const saveAiSolutionsData = async (data: AiSolutionsConfig): Promise<void> => {
  localStorage.setItem(AI_SOLUTIONS_STORAGE_KEY, JSON.stringify(data));
};

const DEFAULT_CONFIG: GlobalLayoutConfig = {
  navbar: {
    logoPrimary: "Tech",
    logoAccent: "Safi",
    ctaLabel: "Get Started",
    links: [
      { id: '1', label: 'Home', path: '/' },
      { 
        id: '2', 
        label: 'Company', 
        path: '/company',
        children: [
          { id: '2-1', label: 'About Us', path: '/company' },
          { id: '2-2', label: 'Portfolio', path: '/portfolio' },
          { id: '2-3', label: 'Careers', path: '/careers' }
        ]
      },
      { 
        id: '3', 
        label: 'Services', 
        path: '/services',
        children: [
          { id: '3-1', label: 'All Services', path: '/services' },
          { id: '3-2', label: 'AI Solutions', path: '/ai-solutions' }
        ]
      },
      { id: '4', label: 'Pricing', path: '/pricing' },
      { id: '5', label: 'Blog', path: '/blog' },
      { id: '6', label: 'Contact', path: '/contact' },
    ]
  },
  footer: {
    tagline: "Empowering businesses across Kenya and beyond with innovative technology solutions.",
    email: "info@techsafi.com",
    phone: "+254 751 380 948",
    address: "Nairobi, Kenya",
    officeHours: "Mon-Fri, 8am-6pm EAT",
    copyright: "© 2025 TechSafi - All rights reserved.",
    socials: [
      { id: 's1', platform: 'Facebook', url: '#' },
      { id: 's2', platform: 'Twitter', url: '#' },
      { id: 's3', platform: 'LinkedIn', url: '#' },
      { id: 's4', platform: 'Instagram', url: '#' },
      { id: 's5', platform: 'GitHub', url: '#' }
    ],
    quickLinks: [
      { id: 'ql1', label: 'Home', path: '/' },
      { id: 'ql2', label: 'About Us', path: '/company' },
      { id: 'ql3', label: 'Services', path: '/services' },
      { id: 'ql4', label: 'Portfolio', path: '/portfolio' },
      { id: 'ql5', label: 'Pricing', path: '/pricing' }
    ],
    serviceLinks: [
      { id: 'sl1', label: 'Web Apps', path: '/services' },
      { id: 'sl2', label: 'Mobile Apps', path: '/services' },
      { id: 'sl3', label: 'UI/UX Design', path: '/services' },
      { id: 'sl4', label: 'AI Solutions', path: '/services' },
      { id: 'sl5', label: 'Cloud Tech', path: '/services' }
    ],
    legalLinks: [
      { id: 'l1', label: 'Privacy Policy', path: '/privacy-policy' },
      { id: 'l2', label: 'Terms of Service', path: '/terms-of-service' },
      { id: 'l3', label: 'Cookie Policy', path: '/cookie-policy' }
    ]
  }
};
