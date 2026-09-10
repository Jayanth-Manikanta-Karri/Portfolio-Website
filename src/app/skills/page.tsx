import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: 'Skills & Technical Stack',
  description:
    'Comprehensive technical skills matrix covering Agentic AI frameworks, LLM quantization, GPU inference infrastructure, RAG architectures, and full-stack development by Jayanth Manikanta Karri.',
  openGraph: {
    title: 'Skills & Technical Stack | Jayanth Manikanta Karri',
    description:
      'AI/ML skills: LangGraph, AutoGen, MCP, RAG, GPTQ/AWQ, FastAPI, CUDA, and more.',
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
