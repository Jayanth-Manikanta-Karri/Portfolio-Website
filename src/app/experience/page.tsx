import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Users, 
  Sparkles,
  Layers
} from 'lucide-react';
import { experienceData } from '@/data/experience';

export const metadata = {
  title: 'Experience & Leadership | Jayanth Manikanta Karri',
  description:
    'Professional experience and technical leadership of Jayanth Manikanta Karri at Quantum AI Global, building agentic AI and GPU inference infrastructure.',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Work Experience &amp; Technical Leadership
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Track record of engineering production-grade agentic architectures, optimizing GPU compute economics, and mentoring engineering teams at Quantum AI Global.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
        {experienceData.map((item, idx) => {
          const isLeadership = item.type === 'Leadership';

          return (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                  item.isCurrent
                    ? 'bg-cyan-500 border-cyan-300 shadow-glow'
                    : isLeadership
                    ? 'bg-violet-600 border-violet-400'
                    : 'bg-surface border-slate-600 group-hover:border-cyan-400'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 space-y-5 ${
                  item.isCurrent
                    ? 'bg-gradient-to-br from-[#121B2F] via-surface to-[#101728] border-cyan-500/40 shadow-xl'
                    : isLeadership
                    ? 'bg-gradient-to-br from-[#18152B] via-surface to-[#151228] border-violet-500/30 shadow-xl'
                    : 'bg-surface/75 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                        item.isCurrent
                          ? 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30'
                          : isLeadership
                          ? 'text-violet-300 bg-violet-500/15 border-violet-500/30'
                          : 'text-slate-400 bg-white/5 border-white/10'
                      }`}
                    >
                      {item.type}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1.5">
                      {item.role}
                    </h2>
                    <p className="text-sm font-medium text-cyan-400">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Overview Paragraph */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.overview}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2.5">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Key Engineering Contributions:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Impact Metrics Chips */}
                {item.impactMetrics && item.impactMetrics.length > 0 && (
                  <div className="pt-2">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-2">
                      Quantified Production Outcomes:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
