import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Bot, 
  Cpu, 
  Layers, 
  Network 
} from 'lucide-react';
import FounderHero from '@/components/home/FounderHero';
import MetricsBanner from '@/components/home/MetricsBanner';
import ProjectCard from '@/components/projects/ProjectCard';
import { projectsData } from '@/data/projects';

const PILLARS = [
  {
    icon: Bot,
    color: 'text-blue-400',
    bg: 'bg-blue-500/[0.07]',
    border: 'border-blue-500/20',
    title: 'Multi-Agent Orchestration',
    description: 'LangGraph stateful graphs, AutoGen multi-actor loops, and Model Context Protocol (MCP) for tool and data interoperability.',
    metric: '80% Fewer Human Touchpoints',
    metricColor: 'text-blue-400',
  },
  {
    icon: Cpu,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/[0.07]',
    border: 'border-indigo-500/20',
    title: 'Hybrid GPU Serving',
    description: 'FastAPI multi-threaded CUDA scheduling on Ada RTX 6000 paired with cost-adaptive cloud elastic burst failover.',
    metric: 'Zero Cold-Start Serving',
    metricColor: 'text-indigo-400',
  },
  {
    icon: Layers,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/[0.07]',
    border: 'border-emerald-500/20',
    title: 'Quantization & Latency',
    description: 'AWQ and GPTQ 4-bit activation-aware weight compression with pinned CPU offloading for concurrent foundation models.',
    metric: '35% Production Latency Drop',
    metricColor: 'text-emerald-400',
  },
  {
    icon: Network,
    color: 'text-violet-400',
    bg: 'bg-violet-500/[0.07]',
    border: 'border-violet-500/20',
    title: 'Enterprise Agentic RAG',
    description: 'Hybrid dense-sparse vector indexing (FAISS + BM25), cross-encoder re-ranking, and self-reflection loops for compliance.',
    metric: '60% Audit Overhead Cut',
    metricColor: 'text-violet-400',
  },
];

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Hero */}
      <FounderHero />

      {/* 2. Metrics Strip */}
      <MetricsBanner />

      {/* 3. Engineering Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="pillars-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              CORE INFRASTRUCTURE
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Systems Designed for Autonomous Scale
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
            Bridging cognitive multi-agent reasoning with hardware-accelerated, cost-adaptive GPU serving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 space-y-3 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]"
            >
              <div className={`w-9 h-9 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color}`} aria-hidden="true">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-heading font-bold text-white leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              <div className={`pt-1 text-[10px] font-mono font-semibold ${pillar.metricColor}`}>
                {pillar.metric}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              FLAGSHIP CASE STUDIES
            </span>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Selected Production Deployments
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} showCarousel={true} />
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="relative overflow-hidden p-10 sm:p-14 rounded-3xl border border-white/[0.08] text-center space-y-6">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-indigo-950/10 pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10 space-y-6">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Let&apos;s build the future of autonomous AI together.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Open to AI/ML Engineer and Agentic AI roles, technical advisory discussions, and architecture deep-dives.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm transition hover:bg-slate-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 text-slate-200 font-medium text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <span>View Full Credentials</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
