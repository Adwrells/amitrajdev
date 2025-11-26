import { 
  ExperienceItem, 
  EducationItem, 
  SkillCategory, 
  ProjectItem, 
  CertificationItem, 
  TestimonialItem 
} from './types';

export const PERSONAL_INFO = {
  name: "Amit Raj Dev",
  role: "Data Analyst | IT Support Engineer",
  email: "adwrells@gmail.com",
  phone: "0000000000",
  location: "Toronto, Canada",
  linkedin: "https://linkedin.com/in/amitdevraj",
  bio: "Data analytics professional with an Engineering background and proven IT support experience. I specialize in statistical analysis, data visualization, and database management, combined with strong technical problem-solving skills from hands-on IT infrastructure work. I leverage data-driven technical analysis and strategic decision-making to optimize operational efficiency and drive organizational growth.",
  tagline: "Transforming raw data into actionable insights and robust infrastructure.",
  keyFacts: [
    { label: "Experience", value: "4+ Years" },
    { label: "Focus", value: "Analytics & IT" },
    { label: "Location", value: "Toronto" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp1",
    role: "IT Support Engineer",
    company: "A.R.D. Nirman Sewa & IT",
    location: "Remote / Hybrid",
    period: "Dec 2023 - Jan 2025",
    description: [
      "Managed overall IT infrastructure and security protocols, ensuring 99.9% uptime for critical systems.",
      "Performed advanced troubleshooting for networking devices, reducing downtime by 20%.",
      "Implemented strategic updates to system protocols to enhance data security and operational efficiency."
    ]
  },
  {
    id: "exp2",
    role: "IT Support Engineer",
    company: "Dishhome",
    location: "Nepal",
    period: "Nov 2022 - Oct 2023",
    description: [
      "Configured computer networking, basic routers, and switches, optimizing local area network performance.",
      "Managed basic firewall configurations and established system-level policies to secure internal data.",
      "Oversaw CCTV installation, remote monitoring systems, and biometric device setups for enhanced facility security."
    ]
  },
  {
    id: "exp3",
    role: "Product Trainer",
    company: "CG Electronics",
    location: "Nepal",
    period: "Feb 2020 - Jan 2022",
    description: [
      "Created comprehensive LG product training programs and materials.",
      "Improved staff product knowledge resulting in a measurable boost in secondary sales performance.",
      "Analyzed sales data to tailor training modules to underperforming regions."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu1",
    degree: "Master's in Data Analytics",
    institution: "University of Niagara Falls, Canada",
    period: "April 2025 - Current",
    details: "Focusing on advanced statistical methods, big data technologies, and predictive modeling."
  },
  {
    id: "edu2",
    degree: "BTech in Electronics and Communication",
    institution: "Aditya Engineering College",
    period: "Aug 2015 - Oct 2019",
    details: "Foundation in engineering principles, signal processing, and telecommunications."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Data Analysis & Visualization",
    skills: ["SQL", "Python", "Tableau", "Power BI", "R Studio", "Microsoft Excel", "Exploratory Data Analysis"]
  },
  {
    title: "IT Infrastructure",
    skills: ["Windows Server Mgmt", "Network Security", "Cisco Networking", "Firewall Configuration", "Hardware Troubleshooting"]
  },
  {
    title: "Advanced Tech",
    skills: ["Machine Learning", "GenAI Analytics", "Statistical Modeling", "Database Management"]
  },
  {
    title: "Languages",
    skills: ["English", "French", "Hindi", "Nepali", "Maithili", "Bhojpuri"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { name: "Microsoft Office Specialist", issuer: "Microsoft" },
  { name: "Windows Server Management and Security" },
  { name: "Networking Essentials I", issuer: "Cisco" },
  { name: "Google IT Support Professional Certificate", issuer: "Google" },
  { name: "Tata - GenAI Powered Data Analytics Job Simulation", issuer: "Forage" }
];

// Inferred projects from experience to populate the section as requested
export const PROJECTS: ProjectItem[] = [
  {
    id: "proj1",
    title: "Sales Optimization Training Program",
    description: "Designed a data-driven training curriculum for CG Electronics staff. Analyzed sales gaps to create targeted modules, directly contributing to an increase in secondary sales figures.",
    tags: ["Data Analysis", "Curriculum Design", "Sales Optimization"]
  },
  {
    id: "proj2",
    title: "Secure Network Infrastructure Setup",
    description: "Architected the local network and security policies for Dishhome. Implemented firewall rules and biometric access controls, establishing a secure operational environment.",
    tags: ["Networking", "Security", "Hardware Setup"]
  },
  {
    id: "proj3",
    title: "GenAI Powered Analytics Simulation",
    description: "Completed a comprehensive job simulation for Tata, utilizing Generative AI tools to interpret complex datasets and generate strategic business insights.",
    tags: ["GenAI", "Python", "Business Intelligence"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test1",
    name: "Mamtaz Alam",
    role: "Embedded Systems Engineer",
    text: "Amit combines technical engineering expertise with a sharp analytical mind. His ability to troubleshoot complex IT issues while maintaining a strategic view on data is impressive."
  },
  {
    id: "test2",
    name: "Sarah Jenkins",
    role: "Senior Project Manager",
    text: "Amit was instrumental in optimizing our internal workflows. His dedication to data accuracy and infrastructure stability is unmatched."
  }
];