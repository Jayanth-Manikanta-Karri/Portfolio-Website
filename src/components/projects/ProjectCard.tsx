'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { Project } from '@/types';
import ProjectCarousel from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  showCarousel?: boolean;
}

export default function ProjectCard({
  project,
  showCarousel = true,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-[#090D17]/90 border border-white/[0.08] hover:border-white/[0.22] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] hover:bg-[#0B101D]">
      
      {/* Top Media Frame with Carousel */}
      {showCarousel && project.carouselImages && project.carouselImages.length > 0 && (
        <div className="p-3 sm:p-4 pb-0">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.06]">
            {/* Visual Top Bar */}
            <div className="px-4 py-2 bg-[#080B14] border-b border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="uppercase text-slate-300 font-semibold">{project.category}</span>
              </span>
              <span className="text-slate-500">SYS_ARCH // V2</span>
            </div>
            <ProjectCarousel slides={project.carouselImages} aspectRatio="video" />
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* Title & Tagline */}
          <div className="space-y-1">
            <h3 className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-blue-300 transition duration-200">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 leading-relaxed">
              {project.oneLiner}
            </p>
          </div>

          {/* Structured Engineering Spec Block (Challenge vs Architecture) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                01 // BOTTLENECK
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">
                {project.problem}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/90 font-bold block">
                02 // ARCHITECTURE
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Outcome Benchmarks */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                VERIFIED OUTCOMES:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Chips & Action Links */}
        <div className="pt-5 border-t border-white/[0.06] space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.05]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition"
                  aria-label="GitHub Repository"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition"
                  aria-label="Live Demo"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="group/link inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-white transition"
              >
                <span>Technical Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
