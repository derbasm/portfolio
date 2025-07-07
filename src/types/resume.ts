export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface Contact {
  email: string;
  tel: string;
  social: ReadonlyArray<SocialLink>;
}

export interface Header {
  name: string;
  about: string;
  location: string;
  locationLink: string;
  contact: Contact;
  avatar: string;
  summary: string;
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface WorkExperience {
  company: string;
  link?: string;
  badges?: ReadonlyArray<string>;
  title: string;
  logo?: string;
  start: string;
  end: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  organization?: string;
  techStack: ReadonlyArray<string>;
  description: string;
  logo?: string;
  link?: string;
}

export interface Certificate {
  title: string;
  image?: string;
  name?: string;
  date?: string;
  issuer?: string;
  link?: string;
  badge?: string;
}

export interface ResumeData {
  header: Header;
  education: ReadonlyArray<Education>;
  work: ReadonlyArray<WorkExperience>;
  skills: ReadonlyArray<Skill>;
  projects: ReadonlyArray<Project>;
  certificates: ReadonlyArray<Certificate>;
}

export type Language = "de" | "en";
