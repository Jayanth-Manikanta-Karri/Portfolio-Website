'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Sparkles,
  Bot,
  Cpu,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function EditorialHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
      {/* Subtle Ethereal Ambient Glows (Vercel-style) */}
      <div className="hero-spotlight top-[-100px] left-1/2 -translate-x-1/2 md:translate-x-[10%] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-[-150px] w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-slate-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.availability}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Hyderabad, IN</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.08]">
                Architecting <span className="text-gradient-silver">Agentic AI</span> &amp; High-Throughput <span className="text-gradient-cyan">GPU Serving</span>.
              </h1>
              <p className="text-base sm:text-lg font-mono text-cyan-400/90 font-medium tracking-tight">
                {profileData.name} — AI / ML Systems Engineer
              </p>
            </div>

            {/* Editorial Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
              2+ years designing, deploying, and scaling production AI systems at <strong className="text-slate-200 font-medium">Quantum AI Global</strong>. Specializing in autonomous multi-agent orchestration (<span className="text-slate-200">LangGraph, AutoGen, CrewAI</span>), <span className="text-slate-200">Model Context Protocol (MCP)</span>, and hybrid cloud / on-premise GPU inference clusters with AWQ/GPTQ quantization.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-slate-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                <span>Explore Flagship Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="/assets/docs/Jayanth_AI_ML_Resume.pdf"
                download="Jayanth_Karri_AI_ML_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume PDF</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-cyan-400 transition"
              >
                <span>Get in Touch</span>
                <span className="text-cyan-400">→</span>
              </Link>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
              <span className="text-slate-600 uppercase tracking-wider">Networks:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">/</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">/</span>
              <a
                href={profileData.socials.email}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Seamless Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Ethereal Backlight Halo */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-violet-500/10 blur-[90px] scale-95 pointer-events-none" />
              
              {/* Seamless Editorial Portrait Container */}
              <div className="relative w-full h-full overflow-hidden portrait-vignette portrait-bottom-fade flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/assets/images/profile.jpg"
                    alt={profileData.name}
                    fill
                    className="object-cover object-top scale-105 transition-transform duration-700 hover:scale-100 filter contrast-[1.05]"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B0F19] via-[#0E1527] to-[#070A12] flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                      <Bot className="w-12 h-12 text-cyan-400" />
                    </div>
                    <span className="text-lg font-heading font-bold text-white">
                      Jayanth Manikanta Karri
                    </span>
                    <span className="text-xs font-mono text-cyan-400 mt-1">
                      AI/ML Systems Engineer
                    </span>
                  </div>
                )}

                {/* Subtle Grain Overlay for Film Photography Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>

              {/* Floating Architectural Data Card (Linear / Luxury Glass) */}
              <div className="absolute -bottom-2 -left-4 sm:-left-8 p-3.5 sm:p-4 rounded-2xl bg-[#090D17]/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 space-y-2 max-w-[260px]">
                <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    SPECIALIZATION
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <div className="space-y-1 text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ada RTX 6000 48GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-violet-400" />
                    <span>LangGraph &amp; MCP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AWQ / GPTQ 35% Cut</span>
                  </div>
                </div>
              </div>

              {/* Top Accent Pill */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-full bg-[#090D17]/85 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-slate-300 z-20 flex items-center gap-1.5 shadow-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quantum AI Global</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
