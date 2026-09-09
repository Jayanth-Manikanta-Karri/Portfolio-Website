import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'autonomous-ai-marketing-agent',
    title: 'Autonomous AI Marketing Agent',
    oneLiner: 'Multi-agent crew autonomously handling brief analysis, visual synthesis, copywriting, and campaign scheduling.',
    problem:
      'Digital marketing teams spent hours per campaign manually translating client briefs into copy variants, prompt-crafting for images, cross-checking branding constraints, and scheduling multi-channel posts.',
    solution:
      'Engineered an autonomous multi-agent system using CrewAI with specialized role-based agents (Brief Analyst, Visual Director, Copywriter, Compliance Auditor, and Campaign Scheduler) coordinating asynchronously.',
    category: 'Agentic AI',
    techStack: [
      'CrewAI',
      'SDXL & FLUX',
      'LLaMA 3.1',
      'GPT-4',
      'Next.js',
      'FastAPI',
      'MongoDB',
      'AWS EC2',
      'Ada RTX 6000',
    ],
    metrics: [
      '80% reduction in manual touchpoints',
      '70% faster content creation turnaround',
      'Seamless burst-to-cloud inference routing',
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    caseStudyUrl: '/projects/autonomous-ai-marketing-agent',
    featured: true,
    hasCaseStudy: true,
    carouselImages: [
      {
        src: '/assets/images/projects/marketing-agent-flow.svg',
        alt: 'Multi-Agent Autonomous Marketing Architecture',
        caption: 'Autonomous orchestration pipeline linking CrewAI agents, diffusion image synthesis, and multi-channel scheduling.',
      },
      {
        src: '/assets/images/projects/marketing-agent-dashboard.svg',
        alt: 'Campaign Dashboard Interface',
        caption: 'Next.js real-time campaign dashboard showing active agent status, visual draft generations, and approval telemetry.',
      },
      {
        src: '/assets/images/projects/marketing-agent-metrics.svg',
        alt: 'Latency & Throughput Benchmarks',
        caption: 'Inference benchmarks comparing local on-prem GPU steady-state serving vs AWS burst compute.',
      },
    ],
  },
  {
    slug: 'iparrs-compliance-analyzer',
    title: 'Intelligent Policy Analyzer & Risk Reporting (IPARRS)',
    oneLiner: 'Enterprise compliance engine with agentic RAG, multi-hop clause retrieval, and automated risk scoring.',
    problem:
      'Enterprise legal and compliance teams struggled with manually reviewing 500+ page contracts and regulatory documents, leading to high human audit overhead and subtle clause omission risks.',
    solution:
      'Architected an agentic RAG pipeline using LangChain, FAISS vector indexes, and PostgreSQL. Autonomous agents parse hierarchical clauses, cross-reference external regulatory frameworks, and compute audit risk scores.',
    category: 'RAG & LLMs',
    techStack: [
      'LangChain',
      'FAISS',
      'PostgreSQL',
      'React.js',
      'FastAPI',
      'Python',
      'Docker',
    ],
    metrics: [
      '60% reduction in manual audit effort',
      '20% higher precision with dense-sparse re-ranking',
      'Sub-second clause lookup across 500+ page docs',
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    caseStudyUrl: '/projects/iparrs-compliance-analyzer',
    featured: true,
    hasCaseStudy: true,
    carouselImages: [
      {
        src: '/assets/images/projects/iparrs-arch.svg',
        alt: 'IPARRS Agentic RAG System Architecture',
        caption: 'Multi-hop retrieval loop with self-reflection and dense-sparse hybrid vector scoring.',
      },
      {
        src: '/assets/images/projects/iparrs-audit-view.svg',
        alt: 'Interactive Risk Report Dashboard',
        caption: 'Compliance auditor view highlighting flagged clauses, regulatory severity scores, and citation links.',
      },
    ],
  },
  {
    slug: 'hybrid-gpu-inference-engine',
    title: 'Hybrid Cloud / On-Prem GPU Serving Engine',
    oneLiner: 'Zero-cold-start inference engine serving LLaMA 3.1, Qwen, Mistral, and FLUX across hybrid GPU topologies.',
    problem:
      'Running production LLMs and large diffusion models simultaneously on restricted enterprise GPU budgets caused severe memory contention, high cloud egress bills, and cold-start latency spikes.',
    solution:
      'Engineered a high-performance FastAPI serving engine with multi-threaded GPU scheduling and CPU offloading on an Ada RTX 6000 (48GB VRAM) paired with cost-adaptive AWS EC2 burst routing and AWQ/GPTQ quantization.',
    category: 'Inference & Infra',
    techStack: [
      'FastAPI',
      'Ada RTX 6000 (48GB)',
      'Docker',
      'AWQ & GPTQ',
      'PyTorch',
      'AWS EC2 GPU',
      'Azure AI',
      'VPC Peering',
    ],
    metrics: [
      '35% reduction in GPU inference latency',
      'Zero cold-start downtime across 5 active models',
      'Cost-adaptive cloud failover within 400ms',
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    caseStudyUrl: '/projects/hybrid-gpu-inference-engine',
    featured: true,
    hasCaseStudy: true,
    carouselImages: [
      {
        src: '/assets/images/projects/gpu-engine-topology.svg',
        alt: 'Hybrid GPU Infrastructure Topology',
        caption: 'Dual-tier routing engine balancing steady-state on-prem workloads with cloud elastic burst nodes.',
      },
      {
        src: '/assets/images/projects/gpu-engine-vram.svg',
        alt: 'VRAM Allocation & Quantization Comparison',
        caption: 'Memory footprint profiles comparing unquantized FP16 vs AWQ/GPTQ 4-bit with CPU offload layers.',
      },
    ],
  },
  {
    slug: 'sih-multilingual-video-dubbing',
    title: 'AI Multilingual Video Dubbing Platform (SIH 2023 Winner)',
    oneLiner: 'Automated video localization pipeline converting educational videos into Indian languages with synchronized audio.',
    problem:
      'Millions of students in India face language barriers accessing top-tier technical educational videos that are predominantly in English, while manual localization is slow and cost-prohibitive.',
    solution:
      'Built an end-to-end multimodal pipeline combining speech recognition (Whisper), neural machine translation for regional dialects, generative text-to-speech (TTS), and audio-video time alignment.',
    category: 'Computer Vision & Multimodal',
    techStack: [
      'Python',
      'Whisper',
      'FastAPI',
      'PyTorch',
      'React.js',
      'FFmpeg',
      'Transformers',
    ],
    metrics: [
      '1st Place Winner at Smart India Hackathon 2023',
      'Automated dubbing across 6+ Indian languages',
      'Preserved emotional cadence and lip-sync markers',
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    caseStudyUrl: '/projects/sih-multilingual-video-dubbing',
    featured: true,
    hasCaseStudy: true,
    carouselImages: [
      {
        src: '/assets/images/projects/sih-pipeline.svg',
        alt: 'SIH Multilingual AI Dubbing Workflow',
        caption: 'Audio extraction, neural transcription, dialect translation, synthetic vocal generation, and video remuxing.',
      },
    ],
  },
];
