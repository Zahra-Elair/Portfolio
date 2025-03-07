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