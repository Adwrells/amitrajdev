export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  year?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
}