import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
  icon?: ReactNode;
  category?: 'main' | 'company' | 'services';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string; // e.g., 'E-Commerce', 'Healthcare'
  type: string; // e.g., 'Web App', 'Mobile App'
  image: string; // Keep for modal/details, but we use icon/gradients for main card
  description: string;
  technologies: string[];
  client: string;
  year: string;
  stats: { label: string; value: string; icon: any }; // For the card footer
  color: string; // For the gradient theme
  icon: any; // Lucide icon component
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface JobPosition {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
  department: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}