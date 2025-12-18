
/**
 * TechSafi Control Centre API Service
 * Centralized logic for data fetching. 
 * Placeholder implementations to be swapped with Laravel endpoints.
 */

export interface SystemStats {
  visitors: number;
  visitorsChange: number;
  activeUsers: number;
  serverLoad: number;
  uptime: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
}

export const fetchSystemStats = async (): Promise<SystemStats> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return {
    visitors: 12450,
    visitorsChange: 12.5,
    activeUsers: 42,
    serverLoad: 24,
    uptime: "99.98%"
  };
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
