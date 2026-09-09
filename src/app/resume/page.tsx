'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Cpu, 
  Bot,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { profileData, educationData, achievementsData } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { getAssetPath } from '@/lib/assets';

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'text'>('preview');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Resume &amp; Technical Credentials
          </h1>
          <p className="text-sm text-slate-400">
            Official resume of Jayanth Manikanta Karri — AI/ML Engineer (Updated 2026)
          </p>
        </div>

        {/* Download Button */}
        <div className="flex items-center gap-3">
          <a
            href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
            download="Jayanth_Karri_AI_ML_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs transition shadow-glow hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <a
            href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* View Switcher: Interactive PDF vs Clean Text View */}
      <div className="flex items-center justify-center">
        <div className="p-1 rounded-xl bg-surface/90 border border-white/10 flex items-center gap-1">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition ${
              activeTab === 'preview'
                ? 'bg-cyan-500 text-black font-semibold shadow-glow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PDF Document Viewer
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`px-5 py-2 rounded-lg text-xs font-medium transition ${
              activeTab === 'text'
                ? 'bg-cyan-500 text-black font-semibold shadow-glow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ATS / Web Text View
          </button>
        </div>
      </div>

      {/* Tab 1: PDF Viewer Frame */}
      {activeTab === 'preview' && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/15 overflow-hidden bg-[#0F1422] shadow-2xl">
            <div className="p-3 bg-[#141B2D] border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Jayanth_AI_ML_Resume.pdf
              </span>
              <a
                href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
                download="Jayanth_Karri_AI_ML_Resume.pdf"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Direct Link</span>
                <Download className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded PDF iframe */}
            <div className="w-full h-[750px] md:h-[900px] bg-slate-900">
              <iframe
                src={`${getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}#toolbar=1&navpanes=0`}
                title="Jayanth Karri AI/ML Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
          <p className="text-center text-xs text-slate-500">
            Having trouble viewing the PDF? Switch to the &quot;ATS / Web Text View&quot; tab or{' '}
            <a
              href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
              download
              className="text-cyan-400 hover:underline"
            >
              download the file directly
            </a>
            .
          </p>
        </div>
      )}

      {/* Tab 2: ATS Structured Web View */}
      {activeTab === 'text' && (
        <div className="p-6 sm:p-10 rounded-2xl bg-surface/90 border border-white/10 shadow-xl space-y-10 text-slate-300 text-sm">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-heading font-extrabold text-white">
              {profileData.name}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono justify-center sm:justify-start">
              <span>{profileData.phone}</span>
              <span>•</span>
              <span>{profileData.location}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-cyan-400 hover:underline">
                {profileData.email}
              </a>
              <span>•</span>
              <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {profileData.shortBio} Proven outcomes: 35% inference latency reduction, 70% faster content pipelines, and 60% reduction in manual audit effort. Seeking an AI/ML or Agentic AI engineering role focused on building and scaling next-generation intelligent systems.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <strong className="text-white">Agentic AI:</strong> LangGraph, LangChain, LlamaIndex, AutoGen, CrewAI, ReAct, Chain-of-Thought, Tool-Use Agents, MCP (Model Context Protocol), Multi-Agent Orchestration, Agentic RAG.
              </p>
              <p>
                <strong className="text-white">AI / ML:</strong> LLMs (LLaMA 3.1, Qwen, Mistral, GPT-4), Diffusion Models (SDXL, FLUX), Fine-tuning, Quantization (GPTQ / AWQ), Prompt Engineering, Computer Vision (YOLOv8, ViT), PyTorch, Hugging Face, Transformers.
              </p>
              <p>
                <strong className="text-white">Deployment:</strong> Docker, GPU Inference Orchestration, CPU Offloading, Load Balancing, Multi-node Serving, Hybrid Cloud / On-Prem Deployment, FastAPI, Apache, SSL / HTTPS, Linux, REST APIs, Git/GitHub.
              </p>
              <p>
                <strong className="text-white">Languages:</strong> Python, JavaScript, TypeScript, Java, C++.
              </p>
              <p>
                <strong className="text-white">Cloud:</strong> AWS (EC2, S3, SageMaker), Azure (AI Services, VM), GCP (Vertex AI, Cloud Run).
              </p>
              <p>
                <strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, MySQL, FAISS, MongoDB Atlas Vector Search.
              </p>
              <p>
                <strong className="text-white">Frontend:</strong> React.js, Next.js, TailwindCSS, Node.js, Express.js.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experienceData.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-sm text-white">{item.role}</strong>
                      <span className="text-cyan-400 ml-2">— {item.company}</span>
                    </div>
                    <span className="font-mono text-slate-400">{item.period}</span>
                  </div>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
              Education &amp; Certifications
            </h3>
            <div className="space-y-3 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <strong className="text-white">{edu.degree}</strong> ({edu.field})
                    <div className="text-slate-400">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-slate-400">{edu.period} • {edu.grade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
              Achievements &amp; Publications
            </h3>
            <div className="space-y-2 text-xs">
              {achievementsData.map((item, idx) => (
                <div key={idx}>
                  <strong className="text-white">{item.title}</strong> — {item.eventOrPublisher} ({item.year})
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="p-6 rounded-2xl bg-surface/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-white">
            Interested in scheduling an engineering interview or technical discussion?
          </h3>
          <p className="text-xs text-slate-400">
            Open to AI/ML Engineer, Agentic AI, and Machine Learning Infrastructure roles.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition shadow-glow shrink-0 font-mono"
        >
          Contact Jayanth
        </Link>
      </div>
    </div>
  );
}
