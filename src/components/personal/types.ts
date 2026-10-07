export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  resume: string;
  availability: { short: string; long: string };
  contact: ContactInfo;
  summary: string;
}

export interface ProjectDetails {
  overview: string;
  examplePrompts?: string[];
  highlights: { title: string; description: string }[];
  stack: string[];
}

export interface Project {
  slug?: string;
  details?: ProjectDetails;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  video?: string;
  writeups?: { label: string; href: string }[];
  github: string;
  metrics: string;
  domains: string[];
  featured?: boolean;
}