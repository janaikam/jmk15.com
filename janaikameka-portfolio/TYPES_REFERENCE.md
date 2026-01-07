/**
 * Type Definitions Reference
 * 
 * This file documents the TypeScript types used in the portfolio.
 * You don't need to edit this file - it's just for reference.
 */

// From src/data/profile.ts
export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    articles: string;
  };
  interests: string[];
}

// From src/data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: 'internship' | 'fulltime' | 'leadership';
  bullets: string[];
}

// From src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string; // Optional
}

// From src/data/skills.ts
export interface SkillGroup {
  category: string;
  skills: string[];
}
