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

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="space-y-24 pb-28">
      {/* 1. Technology-Founder Hero with Integrated Transparent Portrait & Orbit Geometry */}
      <FounderHero />

      {/* 2. Editorial Metrics Strip */}
      <MetricsBanner />

      {/* 3. Core Architectural Engineering Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              CORE INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Systems Designed for Real-World Autonomous Scale
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Bridging cognitive multi-agent reasoning with hardware-accelerated, cost-adaptive GPU serving infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-white">
              Multi-Agent Orchestration
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              LangGraph stateful graphs, AutoGen multi-actor loops, and Model Context Protocol (MCP) for tool and data interoperability.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-400">
              80% Less Human Touchpoints
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-white">
              Hybrid GPU Serving
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              FastAPI multi-threaded CUDA scheduling on Ada RTX 6000 (48GB VRAM) paired with cost-adaptive cloud elastic burst failover.
            </p>
            <div className="pt-2 text-[11px] font-mono text-indigo-400">
              Zero Cold-Start Serving
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-white">
              Quantization &amp; Latency
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AWQ and GPTQ 4-bit activation-aware weight compression with pinned CPU offloading for concurrent foundation models.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-400">
              35% Production Latency Drop
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-white">
              Enterprise Agentic RAG
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hybrid dense-sparse vector indexing (FAISS + BM25), cross-encoder re-ranking, and self-reflection loops for document compliance.
            </p>
            <div className="pt-2 text-[11px] font-mono text-purple-400">
              60% Manual Audit Overhead Cut
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flagship Case Studies Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">
              FLAGSHIP CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Selected Production Deployments
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white transition"
          >
            <span>View All Projects &amp; Case Studies</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} showCarousel={true} />
          ))}
        </div>
      </section>

      {/* 5. Minimalist Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Let&apos;s build the future of autonomous systems together.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Open to AI/ML Engineer and Agentic AI systems roles, advisory discussions, and technical deep-dives.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm transition hover:bg-slate-200 hover:scale-[1.02]"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-medium text-sm transition"
            >
              <span>View Full Credentials</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
