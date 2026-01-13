export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
  metrics: string;
  domains: string[];
}