import React from 'react';
import { profileData } from '@/data/profile';

export default function MetricsBanner() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="py-8 px-6 sm:px-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.06]">
          {profileData.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-1.5`}
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                PROD BENCHMARK 0{idx + 1}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
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
