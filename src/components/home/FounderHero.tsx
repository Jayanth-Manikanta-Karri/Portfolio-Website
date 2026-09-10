'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail,
  Zap
} from 'lucide-react';
import { profileData } from '@/data/profile';
import { getAssetPath } from '@/lib/assets';

const TYPED_PHRASES = [
  'Agentic AI Pipelines',
  'LLM Fine-tuning & Quantization',
  'Model Context Protocol',
  'Hybrid GPU Inference',
  'Multi-Agent Orchestration',
];

function useTypingEffect(phrases: string[], speed = 60, pause = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < current.length) {
          setDisplayText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIdx > 0) {
          setDisplayText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setIsDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx, phrases, speed, pause]);

  return displayText;
}

export default function FounderHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);
  const typedText = useTypingEffect(TYPED_PHRASES);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portraitOffsetX = mousePos.x * 10;
  const portraitOffsetY = mousePos.y * 10;
  const ringOffsetX = mousePos.x * -14;
  const ringOffsetY = mousePos.y * -14;
  const glowOffsetX = mousePos.x * 18;
  const glowOffsetY = mousePos.y * 18;

  return (
    <section 
      ref={heroRef}
      aria-label="Introduction"
      className="relative min-h-[88vh] flex items-center justify-center pt-4 sm:pt-6 lg:pt-2 pb-8 lg:pb-16 overflow-hidden"
    >
      {/* Subtle blue/purple ambient glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[650px] h-[650px] rounded-full blur-[200px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(109,40,217,0.07) 50%, transparent 75%)',
          transform: `translate(${glowOffsetX}px, ${glowOffsetY}px)`,
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-950/15 blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Column — Typography & CTA */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-5 sm:space-y-7 text-left">
            
            {/* Status badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[11px] font-mono tracking-wider text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="uppercase font-semibold text-white">AI / ML ENGINEER</span>
                <span className="text-slate-600" aria-hidden="true">•</span>
                <span className="text-slate-400">HYDERABAD, IN</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.06]">
                Building Autonomous{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  AI Systems
                </span>{' '}
                &amp; Scalable{' '}
                <span className="text-white">
                  Agentic Architectures
                </span>
              </h1>

              {/* Typing effect subtitle */}
              <div className="h-6 flex items-center gap-2" aria-live="polite" aria-label={`Specializing in: ${typedText}`}>
                <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span className="text-sm font-mono text-blue-300">
                  {typedText}
                  <span className="ml-0.5 inline-block w-0.5 h-4 bg-blue-400 animate-pulse align-middle" aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              2+ years designing, deploying, and scaling production AI systems. 
              Specializing in autonomous multi-agent orchestration,{' '}
              <strong className="text-slate-200 font-medium">Agentic RAG</strong>,{' '}
              LLM <strong className="text-slate-200 font-medium">Fine-tuning</strong> &amp;{' '}
              <strong className="text-slate-200 font-medium">Quantization</strong>, and{' '}
              <strong className="text-slate-200 font-medium">Model Context Protocol (MCP)</strong>{' '}
              integrations.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-slate-200 shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>Selected Deployments</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
              <a
                href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
                download="Jayanth_Karri_AI_ML_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.18] text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <FileText className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <span>Curriculum Vitae</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
              >
                <span>Direct Inquiry</span>
                <span className="text-blue-400" aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
              <span className="text-slate-600 uppercase tracking-wider text-[10px]">CHANNELS:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 focus:outline-none focus:text-white"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700" aria-hidden="true">/</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5 focus:outline-none focus:text-white"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700" aria-hidden="true">/</span>
              <a
                href={profileData.socials.email}
                className="hover:text-white transition flex items-center gap-1.5 focus:outline-none focus:text-white"
                aria-label="Send email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portrait with Orbit Geometry */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[520px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[540px] flex items-center justify-center select-none">
              
              {/* Orbit geometry SVG — counter-parallax */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
                aria-hidden="true"
                style={{
                  transform: `translate(${ringOffsetX}px, ${ringOffsetY}px)`,
                  transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <svg 
                  className="w-full h-full opacity-30" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer dashed orbit */}
                  <circle cx="250" cy="250" r="228" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3 9" />
                  {/* Inner solid orbit */}
                  <circle cx="250" cy="250" r="168" stroke="rgba(99,102,241,0.22)" strokeWidth="1" />
                  {/* Small inner ring */}
                  <circle cx="250" cy="250" r="110" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  {/* Crosshair top */}
                  <line x1="242" y1="18" x2="258" y2="18" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                  <line x1="250" y1="10" x2="250" y2="26" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                  {/* Crosshair left */}
                  <line x1="18" y1="242" x2="34" y2="242" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <line x1="26" y1="234" x2="26" y2="250" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  {/* Node dots */}
                  <circle cx="250" cy="22" r="3" fill="#60A5FA" opacity="0.8" />
                  <circle cx="478" cy="250" r="2.5" fill="#818CF8" opacity="0.6" />
                  <circle cx="250" cy="478" r="2" fill="#60A5FA" opacity="0.4" />
                  {/* Label */}
                  <text x="266" y="26" fill="rgba(255,255,255,0.25)" fontSize="7.5" fontFamily="monospace" letterSpacing="1">
                    ORBIT // JK.v2
                  </text>
                </svg>
              </div>

              {/* Soft rim glow behind portrait */}
              <div 
                className="absolute inset-0 m-auto w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full pointer-events-none"
                aria-hidden="true"
                style={{
                  background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(99,102,241,0.18) 45%, transparent 70%)',
                  filter: 'blur(50px)',
                  transform: `translate(${portraitOffsetX * 0.4}px, ${portraitOffsetY * 0.4}px)`,
                  transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                }}
              />

              {/* Portrait image */}
              <div 
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  transform: `translate(${portraitOffsetX}px, ${portraitOffsetY}px)`,
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Loading skeleton */}
                {!imgLoaded && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="w-32 h-48 sm:w-48 sm:h-64 rounded-2xl bg-white/[0.03] animate-pulse" />
                  </div>
                )}
                <Image
                  src={getAssetPath('/assets/images/profileimage.png')}
                  alt={`${profileData.name} — AI/ML Engineer based in Hyderabad`}
                  fill
                  className={`object-contain object-center filter contrast-[1.04] drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] scale-[1.04] transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  priority
                  unoptimized
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
