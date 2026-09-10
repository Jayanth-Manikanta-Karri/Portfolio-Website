import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Production AI systems, autonomous agentic architectures, low-latency GPU serving pipelines, and national hackathon solutions with detailed technical writeups by Jayanth Manikanta Karri.',
  openGraph: {
    title: 'AI/ML Projects & Case Studies | Jayanth Manikanta Karri',
    description:
      'Production AI systems, agentic pipelines, LLM quantization, and RAG deployments by Jayanth Manikanta Karri.',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
