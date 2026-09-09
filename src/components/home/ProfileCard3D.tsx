'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Zap, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function ProfileCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-15 to 15 deg)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto perspective-container select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Transform Container */}
      <div
        ref={cardRef}
        className="relative rounded-2xl p-6 md:p-8 transition-transform duration-200 ease-out transform-3d border border-white/10 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-[#121826]/90 via-[#0F1420]/80 to-[#161F33]/90"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Dynamic Holographic Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(34, 211, 238, ${glarePosition.opacity}), transparent 60%)`,
          }}
        />

        {/* Ambient Neon Edge Glow */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-blue-500/30 blur-xl opacity-60 pointer-events-none -z-10" />

        {/* Top Header Layer */}
        <div className="flex items-center justify-between mb-6 translate-z-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>AI / ML ARCHITECT</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium">Online</span>
          </div>
        </div>

        {/* 3D Avatar Frame */}
        <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.25)] translate-z-30 group">
          {/* Fallback Neural Cyberpunk Portrait */}
          {!imgError ? (
            <Image
              src="/assets/images/profile.jpg"
              alt={profileData.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0D1527] via-[#101A33] to-[#0A1020] flex flex-col items-center justify-center relative p-4 text-center">
              {/* Abstract Neural Nodes Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22D3EE_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-cyan-400/30 border border-cyan-400/40 flex items-center justify-center mb-2 shadow-glow">
                <Bot className="w-10 h-10 text-cyan-300" />
              </div>
              <p className="text-white font-heading font-bold text-sm tracking-wide">
                Jayanth Karri
              </p>
              <span className="text-[11px] font-mono text-cyan-400/80">
                Agentic Systems
              </span>
            </div>
          )}

          {/* Holographic scanner line animation */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-24 -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Floating Spec Tags */}
        <div className="mt-6 space-y-3 translate-z-20">
          <div className="text-center">
            <h2 className="text-lg font-bold text-white font-heading tracking-wide">
              {profileData.name}
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Hyderabad, IN • Hybrid GPU & Agents
            </p>
          </div>

          {/* Floating Pill Badges */}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/80 border border-white/5 text-slate-300">
              <Bot className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">LangGraph / AutoGen</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/80 border border-white/5 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span className="truncate">Ada RTX 6000 48GB</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/80 border border-white/5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">AWQ / GPTQ 35%</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface/80 border border-white/5 text-slate-300">
              <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">MCP Integration</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Chip */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 translate-z-10">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Verified AI Engineer</span>
          </span>
          <span className="text-cyan-400/80 font-mono text-[11px]">
            Quantum AI Global
          </span>
        </div>
      </div>
    </div>
  );
}
