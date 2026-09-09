import { ProfileInfo, EducationItem, AchievementItem } from '@/types';

export const profileData: ProfileInfo = {
  name: 'Jayanth Manikanta Karri',
  title: 'AI / ML Engineer',
  tagline: 'Architecting Agentic AI Pipelines, LLM Quantization & Hybrid GPU Inference Infrastructure',
  shortBio:
    'AI/ML Engineer with 2+ years designing, deploying, and scaling production AI systems. Specializing in multi-agent orchestration (LangGraph, AutoGen, CrewAI), Model Context Protocol (MCP), LLM fine-tuning & quantization (GPTQ/AWQ), and high-throughput hybrid cloud / on-prem GPU serving.',
  location: 'Hyderabad, India',
  email: 'jayanth.karri2004@gmail.com',
  phone: '+91 9493801776',
  availability: 'Available for AI/ML & Agentic AI Roles',
  socials: {
    github: 'https://github.com/Jayanth-Manikanta-Karri',
    linkedin: 'https://linkedin.com/in/jayanthmani',
    email: 'mailto:jayanth.karri2004@gmail.com',
  },
  metrics: [
    {
      value: '2+ Yrs',
      label: 'Production AI',
      description: 'Designing, deploying, and scaling agentic systems & GPU backends',
      accent: 'cyan',
    },
    {
      value: '35%',
      label: 'Latency Reduction',
      description: 'Via GPTQ / AWQ quantization on Ada RTX 6000 & cloud GPUs',
      accent: 'emerald',
    },
    {
      value: '70%',
      label: 'Faster Pipelines',
      description: 'Autonomous multi-agent generation cut content creation time',
      accent: 'violet',
    },
    {
      value: '60%',
      label: 'Audit Effort Cut',
      description: 'Enterprise compliance analysis with agentic RAG and re-ranking',
      accent: 'emerald',
    },
  ],
};

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    field: 'Specialization in Artificial Intelligence & Machine Learning',
    institution: 'Gayatri Vidya Parishad College of Engineering (Autonomous)',
    period: '2021 – 2025',
    grade: 'CGPA: 8.8 / 10',
    details: [
      'Core focus on Deep Learning, Statistical Machine Learning, Distributed Systems, and Natural Language Processing.',
      'Led university AI research projects and hackathon teams.',
    ],
  },
  {
    degree: 'Full-Stack & MERN Development Certification',
    field: 'Genius Track Certification',
    institution: 'NxtWave (IIT Alumni-backed)',
    period: 'Intensive Track',
    grade: 'Excellence',
    details: [
      'Comprehensive hands-on engineering with MongoDB, Express.js, React.js, and Node.js.',
      'Engineered production-grade web applications and RESTful API microservices.',
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Winner — Smart India Hackathon (SIH) 2023',
    eventOrPublisher: 'Ministry of Education & AICTE, Government of India',
    year: '2023',
    description:
      'Won first place in the national-level hackathon by designing an AI-driven multilingual video dubbing platform for educational content, integrating NLP, automated speech-to-text, neural translation, and synthesized text-to-speech synchronization (team of 6).',
    badgeText: 'National Winner',
    linkUrl: 'https://linkedin.com/in/jayanthmani',
    linkLabel: 'View Post',
  },
  {
    title: 'Research Publication: Remote Healthcare Diabetic Retinopathy Detection',
    eventOrPublisher: 'STM Journals — Journal of Deep Learning & Medical Imaging',
    year: '2023',
    description:
      'Authored peer-reviewed paper on automated early-stage diabetic retinopathy diagnosis using fine-tuned Convolutional Neural Networks and transfer learning for remote healthcare deployment.',
    badgeText: 'Peer-Reviewed Paper',
    linkUrl: 'https://linkedin.com/in/jayanthmani',
    linkLabel: 'Read Publication',
  },
];
