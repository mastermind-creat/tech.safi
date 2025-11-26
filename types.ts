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
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  year: string;
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