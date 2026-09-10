'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2,
} from 'lucide-react';
import { Project } from '@/types';
import ProjectCarousel from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  showCarousel?: boolean;
}

// Category accent mapping for visual variety
const CATEGORY_ACCENT: Record<string, { dot: string; label: string; bar: string }> = {
  'Agentic AI': { dot: 'bg-blue-400', label: 'text-blue-300', bar: 'from-blue-500/20 to-transparent' },
  'Inference & Infra': { dot: 'bg-indigo-400', label: 'text-indigo-300', bar: 'from-indigo-500/20 to-transparent' },
  'RAG & LLMs': { dot: 'bg-violet-400', label: 'text-violet-300', bar: 'from-violet-500/20 to-transparent' },
  'Computer Vision & Multimodal': { dot: 'bg-purple-400', label: 'text-purple-300', bar: 'from-purple-500/20 to-transparent' },
};

export default function ProjectCard({
  project,
  showCarousel = true,
}: ProjectCardProps) {
  const accent = CATEGORY_ACCENT[project.category] ?? { dot: 'bg-slate-400', label: 'text-slate-300', bar: 'from-slate-500/20 to-transparent' };

  return (
    <article className="group relative rounded-2xl bg-[#080C16] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-400 overflow-hidden flex flex-col hover:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.9)] hover:-translate-y-1">
      
      {/* Subtle top gradient accent bar */}
      <div className={`h-px w-full bg-gradient-to-r ${accent.bar}`} aria-hidden="true" />

      {/* Top Media Frame */}
      {showCarousel && project.carouselImages && project.carouselImages.length > 0 && (
        <div className="p-3 sm:p-4 pb-0">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-[#060A13]">
            {/* Browser-style top bar */}
            <div className="px-3.5 py-2 border-b border-white/[0.05] flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" aria-hidden="true" />
              </div>
              <div className="flex-1 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} shrink-0`} aria-hidden="true" />
                <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${accent.label}`}>
                  {project.category}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-600">SYS_ARCH.v2</span>
            </div>
            <ProjectCarousel slides={project.carouselImages} aspectRatio="video" />
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 sm:p-7 flex-grow flex flex-col gap-5">
        
        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight group-hover:text-blue-200 transition duration-200">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-400 leading-relaxed">
            {project.oneLiner}
          </p>
        </div>

        {/* Problem → Solution panels */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600 font-bold block">
              01 · BOTTLENECK
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">
              {project.problem}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
            <span className={`text-[9px] font-mono uppercase tracking-widest font-bold block ${accent.label}`}>
              02 · ARCHITECTURE
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-2">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600 block">
              VERIFIED OUTCOMES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/[0.07] border border-emerald-500/20 text-emerald-300 text-[11px] font-mono"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer: Tech stack + Links */}
        <div className="pt-4 border-t border-white/[0.06] space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.02] text-slate-500 border border-white/[0.05] hover:text-slate-300 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-400 hover:text-white hover:border-white/20 transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-400 hover:text-white hover:border-white/20 transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>

            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="group/link inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 text-xs font-mono font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3 h-3 text-blue-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
