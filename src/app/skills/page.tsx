'use client';

import React, { useState, useMemo } from 'react';
import { 
  Bot, 
  Cpu, 
  Server, 
  Cloud, 
  Database, 
  Layout, 
  Code, 
  Search, 
  Sparkles, 
  Check, 
  Layers 
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { SkillDomain } from '@/types';

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  Server,
  Cloud,
  Database,
  Layout,
  Code,
};

export default function SkillsPage() {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedDomain === 'all' || cat.id === selectedDomain)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const query = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(query) ||
            s.note?.toLowerCase().includes(query)
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedDomain, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Skills &amp; Systems Architecture Matrix
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Comprehensive breakdown of my production capabilities across agentic workflows, model quantization, distributed GPU inference, cloud backends, and full-stack integration.
        </p>
      </div>

      {/* Interactive Controls: Search & Category Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill or framework (e.g. LangGraph, AWQ, FAISS)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="text-xs font-mono text-slate-400 self-center">
            Showing {filteredCategories.reduce((acc, c) => acc + c.skills.length, 0)} skills
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
              selectedDomain === 'all'
                ? 'bg-cyan-500 text-black font-semibold shadow-glow'
                : 'bg-surface/80 text-slate-300 border border-white/10 hover:border-cyan-500/40'
            }`}
          >
            All Domains
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedDomain(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedDomain === cat.id
                  ? 'bg-cyan-500 text-black font-semibold shadow-glow'
                  : 'bg-surface/80 text-slate-300 border border-white/10 hover:border-cyan-500/40'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid by Category */}
      <div className="space-y-10">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-surface/40 rounded-2xl border border-white/5 space-y-3">
            <p className="text-slate-400 text-sm">No skills found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('all');
              }}
              className="text-xs text-cyan-400 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => {
            const IconComponent = DOMAIN_ICONS[category.icon] || Cpu;

            return (
              <div
                key={category.id}
                className="p-6 md:p-8 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold text-white">
                        {category.title}
                      </h2>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400/80 self-start sm:self-auto">
                    {category.skills.length} Capabilities
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-gradient-to-br from-[#121E36] to-[#0E1526] border-cyan-500/40 shadow-sm'
                          : 'bg-[#0A0E1A] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-white tracking-wide">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              skill.level === 'Expert'
                                ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30'
                                : skill.level === 'Advanced'
                                ? 'text-violet-300 bg-violet-500/10 border-violet-500/30'
                                : 'text-slate-400 bg-white/5 border-white/10'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.note && (
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
