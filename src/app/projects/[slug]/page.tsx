import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ShieldAlert, 
  Server, 
  Activity, 
  FileCode2, 
  GitBranch, 
  Scale 
} from 'lucide-react';
import { caseStudiesData } from '@/data/case-studies';
import ProjectCarousel from '@/components/projects/ProjectCarousel';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const caseStudy = caseStudiesData[params.slug];
  if (!caseStudy) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${caseStudy.title} | Case Study — Jayanth Manikanta Karri`,
    description: caseStudy.oneLiner,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = caseStudiesData[params.slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Back Button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {caseStudy.category}
          </span>
          <span className="px-3 py-1 rounded-md text-xs font-mono text-slate-400 bg-white/5 border border-white/5">
            Production Case Study
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
          {caseStudy.title}
        </h1>
        <p className="text-lg sm:text-xl text-cyan-300 font-mono">
          {caseStudy.subtitle}
        </p>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          {caseStudy.oneLiner}
        </p>

        {/* Action Buttons & Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {caseStudy.githubUrl && (
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-white/15 hover:border-cyan-500/40 text-slate-200 text-xs font-medium transition shadow-sm"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Source on GitHub</span>
            </a>
          )}
          {caseStudy.demoUrl && (
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium transition shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration / Link</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual Image / Diagram Carousel */}
      {caseStudy.carouselImages && caseStudy.carouselImages.length > 0 && (
        <div className="space-y-2">
          <ProjectCarousel slides={caseStudy.carouselImages} aspectRatio="video" autoPlay={false} />
          <p className="text-[11px] font-mono text-slate-500 text-center">
            Interactive Architecture &amp; Telemetry Slides • Use arrows to explore
          </p>
        </div>
      )}

      {/* Results & Key Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudy.results.map((res, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface/80 border border-emerald-500/20 backdrop-blur-md space-y-1.5"
          >
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">
              {res.metric}
            </div>
            <div className="text-sm font-semibold text-white">
              {res.label}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {res.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Section: The Problem */}
      <section className="p-6 md:p-8 rounded-2xl bg-surface/80 border border-white/10 space-y-4">
        <div className="flex items-center gap-2.5 text-rose-400 font-heading text-lg font-bold">
          <ShieldAlert className="w-5 h-5" />
          <h2>The Problem &amp; Operational Friction</h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {caseStudy.problem}
        </p>
      </section>

      {/* Section: The Solution & System Architecture */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM DESIGN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Architecture &amp; Component Breakdown
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            {caseStudy.architectureOverview}
          </p>
        </div>

        {/* Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudy.architectureComponents.map((comp, cIdx) => (
            <div
              key={cIdx}
              className="p-5 rounded-xl bg-surface/60 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-heading font-bold text-white">
                  {comp.title}
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  Component {cIdx + 1}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {comp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Technical Decisions & Tradeoffs */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>ENGINEERING TRADEOFFS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Technical Decisions &amp; Trade-off Analysis
          </h2>
        </div>

        <div className="space-y-4">
          {caseStudy.technicalDecisions.map((item, tIdx) => (
            <div
              key={tIdx}
              className="p-6 rounded-2xl bg-surface/75 border border-white/10 space-y-4"
            >
              <h3 className="text-base font-heading font-bold text-cyan-300">
                Decision: {item.decision}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-[#0B0F1A] border border-white/5 space-y-1">
                  <span className="text-slate-400 font-mono text-[10px] uppercase block">
                    Rationale
                  </span>
                  <p>{item.rationale}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0F1A] border border-white/5 space-y-1">
                  <span className="text-slate-400 font-mono text-[10px] uppercase block">
                    Alternative Considered
                  </span>
                  <p>{item.alternativeConsidered}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0F1A] border border-white/5 space-y-1">
                  <span className="text-emerald-400 font-mono text-[10px] uppercase block">
                    Trade-off Outcome
                  </span>
                  <p>{item.tradeoffOutcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Model Selection & Quantization */}
      <section className="p-6 md:p-8 rounded-2xl bg-surface/80 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-heading text-lg font-bold">
          <Cpu className="w-5 h-5" />
          <h2>Model Selection &amp; Optimization Strategy</h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div>
            <span className="text-slate-400 font-mono text-xs block mb-1">
              Deployed Models:
            </span>
            <ul className="space-y-1 pl-4 list-disc text-slate-200">
              {caseStudy.modelSelection.models.map((m, mIdx) => (
                <li key={mIdx}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <span className="text-slate-400 font-mono text-xs block mb-1">
              Selection Justification:
            </span>
            <p className="text-slate-300 leading-relaxed">
              {caseStudy.modelSelection.justification}
            </p>
          </div>
          <div className="pt-2">
            <span className="text-emerald-400 font-mono text-xs block mb-1">
              Quantization &amp; Hardware Optimization:
            </span>
            <p className="text-slate-300 leading-relaxed">
              {caseStudy.modelSelection.quantizationOrOptimization}
            </p>
          </div>
        </div>
      </section>

      {/* Grid: Data Pipeline & Deployment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-violet-400 font-heading font-bold text-base">
            <GitBranch className="w-4 h-4" />
            <h3>Data &amp; Ingestion Pipeline</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.dataPipeline}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-heading font-bold text-base">
            <Server className="w-4 h-4" />
            <h3>Deployment &amp; Infrastructure</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.deploymentAndInfra}
          </p>
        </div>
      </div>

      {/* Grid: Testing & Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-heading font-bold text-base">
            <CheckCircle2 className="w-4 h-4" />
            <h3>Testing, Validation &amp; Guardrails</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.testingAndGuardrails}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-heading font-bold text-base">
            <Activity className="w-4 h-4" />
            <h3>Monitoring &amp; Hardware Telemetry</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.monitoringAndProfiling}
          </p>
        </div>
      </div>

      {/* Bottom Tech Tags */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs font-mono text-cyan-400"
            >
              #{t}
            </span>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg transition font-mono"
        >
          <span>Explore Other Case Studies</span>
          <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
