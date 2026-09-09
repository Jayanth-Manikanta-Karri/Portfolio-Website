'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function FounderHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax offsets
  const portraitOffsetX = mousePos.x * 12;
  const portraitOffsetY = mousePos.y * 12;
  const ringOffsetX = mousePos.x * -16;
  const ringOffsetY = mousePos.y * -16;
  const glowOffsetX = mousePos.x * 20;
  const glowOffsetY = mousePos.y * 20;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Subtle Deep Blue / Purple Ambient Glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(109, 40, 217, 0.10) 50%, transparent 75%)',
          transform: `translate(${glowOffsetX}px, ${glowOffsetY}px)`,
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-950/20 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Command Typography & Value Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Badge: AI / ML Engineer */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[11px] font-mono tracking-wider text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="uppercase font-semibold text-white">AI / ML ENGINEER</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">HYDERABAD, IN</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.06]">
                Building Autonomous <span className="text-white">AI Systems</span> &amp; Scalable <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Agentic Architectures</span>.
              </h1>
              <p className="text-base sm:text-lg font-mono text-slate-400 tracking-tight">
                {profileData.name} <span className="text-slate-600">//</span> Agentic AI &amp; Systems Engineering
              </p>
            </div>

            {/* Description: RAG, Fine-tuning, MCP, Quantization */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
              AI/ML Engineer with 2+ years designing, deploying, and scaling production AI systems. Specializing in autonomous multi-agent orchestration, <strong className="text-slate-200 font-medium">Agentic RAG</strong>, LLM <strong className="text-slate-200 font-medium">Fine-tuning</strong> &amp; <strong className="text-slate-200 font-medium">Quantization</strong>, and <strong className="text-slate-200 font-medium">Model Context Protocol (MCP)</strong> integrations to build resilient, high-throughput intelligent workflows.
            </p>

            {/* Action CTA Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
              >
                <span>Selected Deployments</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="/assets/docs/Jayanth_AI_ML_Resume.pdf"
                download="Jayanth_Karri_AI_ML_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.18] text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Curriculum Vitae</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition"
              >
                <span>Direct Inquiry</span>
                <span className="text-blue-400">→</span>
              </Link>
            </div>

            {/* Network Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
              <span className="text-slate-600 uppercase tracking-wider text-[10px]">VERIFIED CHANNELS:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">/</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">/</span>
              <a
                href={profileData.socials.email}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Taller, Centered Transparent Portrait with Orbit Geometry (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] h-[560px] sm:h-[640px] lg:h-[720px] flex items-center justify-center select-none overflow-visible">
              
              {/* 1. Geometric Orbit SVG Elements - Concentric & Centered in Middle */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center transition-transform duration-700 ease-out"
                style={{
                  transform: `translate(${ringOffsetX}px, ${ringOffsetY}px)`,
                }}
              >
                <svg 
                  className="w-full h-full opacity-35" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Orbit Line */}
                  <circle 
                    cx="250" 
                    cy="250" 
                    r="230" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="1" 
                    strokeDasharray="4 8" 
                  />
                  {/* Inner Orbit Line */}
                  <circle 
                    cx="250" 
                    cy="250" 
                    r="170" 
                    stroke="rgba(99, 102, 241, 0.25)" 
                    strokeWidth="1" 
                  />
                  {/* Coordinate crosshairs */}
                  <line x1="240" y1="20" x2="260" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="250" y1="10" x2="250" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="268" y="24" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">
                    ORBIT // SYSTEM_CORE
                  </text>

                  <line x1="20" y1="250" x2="40" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="30" y1="240" x2="30" y2="260" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  {/* Orbital node dots */}
                  <circle cx="250" cy="20" r="3" fill="#60A5FA" />
                  <circle cx="420" cy="250" r="2.5" fill="#A78BFA" />
                </svg>
              </div>

              {/* 2. Soft Rim Light Bloom behind Head - Centered */}
              <div 
                className="absolute top-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/15 blur-[90px] pointer-events-none transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${portraitOffsetX * 0.5}px, ${portraitOffsetY * 0.5}px)`,
                }}
              />

              {/* 3. The Transparent Portrait Image - Centered in Middle & Increased Height */}
              <div 
                className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
                style={{
                  transform: `translate(${portraitOffsetX}px, ${portraitOffsetY}px)`,
                  maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                }}
              >
                <Image
                  src="/assets/images/profileimage.png"
                  alt={profileData.name}
                  fill
                  className="object-contain object-center filter contrast-[1.04] drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] scale-110 sm:scale-115 lg:scale-120"
                  priority
                  unoptimized
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
