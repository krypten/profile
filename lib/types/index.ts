// Core TypeScript interfaces for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  links: {
    github?: string | null;
    demo?: string | null;
    article?: string | null;
    certificate?: string | null;
  };
  company?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  role: string;
  roles: string[];
  bio: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    medium: string;
  };
  resume?: {
    url: string;
    filename: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ExperienceSectionData {
  category: ExperienceCategory;
  id: string;
  title: string;
  description: string;
  icons: {
    primary: string;
    secondary: string;
  };
  highlights: Array<{
    icon: string;
    label: string;
  }>;
  callout: {
    title: string;
    description: string;
    type: 'badges' | 'metrics';
    items: Array<{
      icon?: string;
      label: string;
      value?: string;
    }>;
  };
  alternateBackground: boolean;
  projects: Project[];
}

export interface Certification {
  name: string;
  url: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: ExperienceSectionData[];
  skills: {
    technical: string[];
    leadership: string[];
    domains: string[];
    certifications: Certification[];
  };
  education: Education[];
}

// Utility types for better type safety
export type SkillCategory = Skill['category'];
export type SkillLevel = Skill['level'];
export type ExperienceCategory = 'ai' | 'security' | 'mobile' | 'robotics' | 'vr';

// Type for project links
export type ProjectLinks = Project['links'];

// Type for contact information
export type ContactInfo = PersonalInfo['contact'];

// Union type for all skill categories
export type AllSkills = PortfolioData['skills'];

// Type guards for runtime checking
export function isValidExperienceCategory(category: string): category is ExperienceCategory {
  return ['ai', 'security', 'mobile', 'robotics', 'vr'].indexOf(category) !== -1;
}

export function isValidSkillCategory(category: string): category is SkillCategory {
  return ['technical', 'leadership', 'domain'].indexOf(category) !== -1;
}

export function isValidSkillLevel(level: string): level is SkillLevel {
  return ['expert', 'advanced', 'intermediate'].indexOf(level) !== -1;
}