
/**
 * TechSafi Control Centre API Service
 * Centralized logic for data fetching. 
 */

export interface NavLinkConfig {
  id: string;
  label: string;
  path: string;
  children?: NavLinkConfig[];
}

export interface SystemStats {
  visitors: number;
  visitorsChange: number;
  activeUsers: number;
  serverLoad: number;
  uptime: string;
  latency: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
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
    tagline: "Empowering businesses across Kenya and beyond with innovative technology solutions. We transform ideas into digital reality through cutting-edge development and strategic consulting.",
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

export const fetchSystemStats = async (): Promise<SystemStats> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return {
    visitors: 12450,
    visitorsChange: 12.5,
    activeUsers: 42,
    serverLoad: 24,
    uptime: "99.98%",
    latency: "45ms"
  };
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

export const fetchActivityLogs = async (): Promise<ActivityLog[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return [
    { id: '1', action: 'Published Homepage Update', user: 'Kennedy (CEO)', timestamp: '2 mins ago', status: 'success' },
    { id: '2', action: 'Failed login attempt', user: 'Unknown IP (192.168.1.1)', timestamp: '15 mins ago', status: 'warning' },
    { id: '3', action: 'New Portfolio Item: MediCare', user: 'Lewis (COO)', timestamp: '1 hour ago', status: 'success' },
    { id: '4', action: 'Database backup failed', user: 'System', timestamp: '3 hours ago', status: 'error' },
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

export const fetchGlobalLayoutConfig = async (): Promise<GlobalLayoutConfig> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return DEFAULT_CONFIG;
    }
  }
  return DEFAULT_CONFIG;
};

export const saveGlobalLayoutConfig = async (config: GlobalLayoutConfig): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  window.dispatchEvent(new Event('techsafi_config_updated'));
  return true;
};
