import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, 
  Target, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Users, 
  Terminal, 
  ArrowRight,
  Code2,
  Cpu,
  Bot
} from 'lucide-react';
import { profileData, educationData, achievementsData } from '@/data/profile';
import { getAssetPath } from '@/lib/assets';

export const metadata = {
  title: 'About Jayanth Manikanta Karri | AI/ML Engineer',
  description:
    'Learn about Jayanth Manikanta Karri, an AI/ML Engineer specializing in Agentic AI pipelines, LLM quantization, and hybrid cloud / on-premise GPU inference systems.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Header Section */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Engineering Autonomous AI Pipelines &amp; Scalable GPU Backends
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          I am an AI/ML Engineer based in Hyderabad, India, dedicated to transforming foundational models into resilient, autonomous, and cost-efficient production software systems.
        </p>
      </div>

      {/* Narrative & Engineering Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-4">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>The Journey &amp; Engineering Focus</span>
            </h2>
            <p>
              My journey in Artificial Intelligence began with deep curiosity around neural representations and distributed computation during my B.Tech in Computer Science &amp; Engineering (Specialization in AI &amp; ML) at Gayatri Vidya Parishad College of Engineering, where I graduated with an 8.8 / 10 CGPA.
            </p>
            <p>
              At <strong className="text-white font-semibold">Quantum AI Global</strong>, I stepped directly into building and operating production-grade AI systems. Over the past 2+ years, my responsibilities expanded from developing hybrid vector RAG pipelines to architecting full multi-agent orchestration frameworks (<span className="text-cyan-400 font-mono text-sm">LangGraph</span>, <span className="text-cyan-400 font-mono text-sm">AutoGen</span>, <span className="text-cyan-400 font-mono text-sm">CrewAI</span>) and integrating the <strong className="text-white font-semibold">Model Context Protocol (MCP)</strong> for dynamic tool interoperability.
            </p>
            <p>
              Beyond cognitive architectures, I am deeply focused on hardware efficiency: deploying concurrent open-source LLMs (<span className="text-slate-200">LLaMA 3.1, Qwen, Mistral</span>) and Diffusion models (<span className="text-slate-200">SDXL, FLUX</span>) across hybrid on-premise GPU clusters (Ada RTX 6000 48GB VRAM) and cloud nodes (AWS EC2 GPU). By applying activation-aware quantization (<span className="text-emerald-400 font-mono text-sm">AWQ</span> and <span className="text-emerald-400 font-mono text-sm">GPTQ</span>) and memory-pinned CPU offloading, I cut production inference latency by <strong className="text-emerald-400">35%</strong> with zero cold-start downtime.
            </p>
          </div>

          {/* Core Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-surface/60 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-heading">
                Systems Over Raw Prompts
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reliable AI requires deterministic schema contracts, self-correcting feedback loops, and verifiable tool invocation rather than brittle prompt chaining.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/60 border border-white/5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-heading">
                Cost-Adaptive Compute
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Maximal performance is achieved by balancing predictable on-premise baseline compute with elastic cloud bursting for unexpected traffic spikes.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Portrait & Leadership */}
        <div className="lg:col-span-5 space-y-6">
          {/* Transparent Portrait Showcase */}
          <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 mb-3">
              <Image
                src={getAssetPath('/assets/images/profileimage.png')}
                alt={profileData.name}
                fill
                className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                unoptimized
              />
            </div>
            <h3 className="text-base font-heading font-bold text-white tracking-wide">
              {profileData.name}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-0.5">
              AI / ML Engineer • Quantum AI Global
            </p>
          </div>

          {/* Leadership Highlight */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-surface via-surface to-violet-950/30 border border-violet-500/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Leadership Experience</span>
            </div>
            <h2 className="text-xl font-heading font-bold text-white">
              Product Lead — Quantum AI Global
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Spearheaded the development and deployment of two AI-driven entertainment products from scratch. Managed an engineering unit of 5 full-time developers and 3 interns across sprint execution, agentic architecture planning, and deployment.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold">•</span>
                <span>Mentored engineers in LLM orchestration, structured tool calling, and FastAPI microservice architecture.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold">•</span>
                <span>Established rigorous code-review practices and automated CI checks that improved PR turnaround throughput by <strong className="text-violet-300">40%</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Career Goals */}
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Career Vision</span>
            </div>
            <h2 className="text-lg font-heading font-bold text-white">
              Scaling Next-Generation Agentic Systems
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              I am seeking impactful AI/ML and Agentic AI engineering roles where I can architect multi-modal agent workflows, integrate complex tool ecosystems via open protocols (MCP), and optimize high-throughput distributed inference infrastructure.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Discuss an Opportunity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Academic Foundation */}
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Education &amp; Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface/80 border border-white/10 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition duration-300"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{edu.period}</span>
                  {edu.grade && (
                    <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {edu.grade}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-cyan-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400">
                  {edu.field}
                </p>
              </div>

              {edu.details && (
                <ul className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-slate-400">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Publications */}
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>HONORS &amp; RESEARCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Key Achievements &amp; Publications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface/80 border border-white/10 flex flex-col justify-between space-y-4 hover:border-violet-500/40 transition duration-300"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{item.year}</span>
                  {item.badgeText && (
                    <span className="text-violet-400 font-bold px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                      {item.badgeText}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {item.eventOrPublisher}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {item.linkUrl && (
                <div className="pt-3 border-t border-white/5">
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition"
                  >
                    <span>{item.linkLabel || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
