// Backend Schemas for Content Management

// Logo Schema
export interface Logo {
  id: string;
  text: string;
  imageUrl?: string;
  link: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Menu Item Schema
export interface MenuItem {
  id: string;
  name: string;
  href: string;
  order: number;
  isActive: boolean;
  isExternal: boolean;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

// Service Schema
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Team Member Schema
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Project Schema
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Blog Post Schema
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  content?: string;
  author?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Client Logo Schema
export interface ClientLogo {
  id: string;
  name: string;
  imageUrl?: string;
  link?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Contact Info Schema
export interface ContactInfo {
  id: string;
  type: "email" | "phone" | "address";
  value: string;
  label: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Hero Section Schema
export interface HeroSection {
  id: string;
  headline: string;
  subheadline: string;
  backgroundImageUrl: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// About Section Schema
export interface AboutSection {
  id: string;
  title: string;
  description: string;
  features: string[];
  ceoName: string;
  ceoRole: string;
  ceoImageUrl: string;
  ceoPhone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Statistics Schema
export interface Statistic {
  id: string;
  number: string;
  label: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Footer Schema
export interface Footer {
  id: string;
  description: string;
  services: string[];
  officeAddress: string;
  officePhone: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  copyright: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}


