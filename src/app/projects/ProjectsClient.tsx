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

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
          <span>PRODUCTION PORTFOLIO</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          AI/ML Projects &amp; Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Production systems, autonomous agentic architectures, low-latency GPU serving pipelines, and national hackathon solutions with detailed technical writeups.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        className="flex flex-wrap gap-2 pt-2 border-b border-white/10 pb-4"
        role="group"
        aria-label="Filter projects by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              selectedCategory === cat
                ? 'bg-blue-500 text-white font-semibold'
                : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:border-blue-500/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        aria-label={`Showing ${filteredProjects.length} projects`}
      >
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-16 text-slate-400 text-sm">
            No projects found in this category.
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} showCarousel={true} />
          ))
        )}
      </div>
    </div>
  );
}
