'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, Layers, BookOpen } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import { projectsData } from '@/data/projects';

const CATEGORIES = [
  'All',
  'Agentic AI',
  'Inference & Infra',
  'RAG & LLMs',
  'Computer Vision & Multimodal',
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PRODUCTION PORTFOLIO</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          AI/ML Projects &amp; Deep-Dive Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Production systems, autonomous agentic architectures, low-latency GPU serving pipelines, and national hackathon solutions with detailed technical writeups.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-white/10 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-black font-semibold shadow-glow'
                : 'bg-surface/80 text-slate-300 border border-white/10 hover:border-cyan-500/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} showCarousel={true} />
        ))}
      </div>
    </div>
  );
}
