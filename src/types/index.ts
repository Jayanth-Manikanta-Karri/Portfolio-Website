export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
  accent?: 'cyan' | 'violet' | 'emerald';
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  metrics: MetricItem[];
}

export type SkillDomain =
  | 'agentic'
  | 'models'
  | 'infra'
  | 'cloud'
  | 'databases'
  | 'fullstack'
  | 'languages';

export interface SkillItem {
  name: string;
  level?: 'Expert' | 'Advanced' | 'Proficient';
  highlight?: boolean;
  icon?: string;
  note?: string;
}

export interface SkillCategory {
  id: SkillDomain;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ArchitectureComponent {
  title: string;
  description: string;
  technologies: string[];
}

export interface CaseStudyTradeoff {
  decision: string;
  rationale: string;
  alternativeConsidered: string;
  tradeoffOutcome: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  category: string;
  oneLiner: string;
  problem: string;
  solution: string;
  architectureOverview: string;
  architectureComponents: ArchitectureComponent[];
  technicalDecisions: CaseStudyTradeoff[];
  modelSelection: {
    models: string[];
    justification: string;
    quantizationOrOptimization: string;
  };
  dataPipeline: string;
  deploymentAndInfra: string;
  testingAndGuardrails: string;
  monitoringAndProfiling: string;
  results: {
    metric: string;
    label: string;
    detail: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  carouselImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
  tags: string[];
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  solution: string;
  category: 'Agentic AI' | 'Inference & Infra' | 'RAG & LLMs' | 'Computer Vision & Multimodal';
  techStack: string[];
  metrics: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  hasCaseStudy: boolean;
  carouselImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Leadership';
  isCurrent?: boolean;
  overview: string;
  highlights: string[];
  skills: string[];
  impactMetrics?: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string[];
}

export interface AchievementItem {
  title: string;
  eventOrPublisher: string;
  year: string;
  description: string;
  badgeText?: string;
  linkUrl?: string;
  linkLabel?: string;
}
