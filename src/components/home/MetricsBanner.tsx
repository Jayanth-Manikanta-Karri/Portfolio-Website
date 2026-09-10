import React from 'react';
import { profileData } from '@/data/profile';

const ACCENT_COLORS = ['text-blue-400', 'text-emerald-400', 'text-violet-400', 'text-indigo-400'];

export default function MetricsBanner() {
  return (
    <section
      aria-label="Key metrics and achievements"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="py-7 px-6 sm:px-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {profileData.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`space-y-1 ${idx >= 2 ? 'pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.05]' : ''} ${idx > 0 && idx % 2 !== 0 ? 'border-l border-white/[0.05] pl-4 sm:pl-0 sm:border-l-0' : ''} ${idx > 0 && idx % 2 === 0 ? 'lg:border-l lg:border-white/[0.05] lg:pl-8' : ''} ${idx === 1 || idx === 3 ? 'lg:border-l lg:border-white/[0.05] lg:pl-8' : ''}`}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
                METRIC 0{idx + 1}
              </div>
              <div className={`text-3xl sm:text-4xl xl:text-5xl font-heading font-extrabold tracking-tight ${ACCENT_COLORS[idx] || 'text-white'}`}>
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs hidden sm:block">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
