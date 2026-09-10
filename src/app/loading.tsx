export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-2xl border border-blue-500/30 animate-ping opacity-30" />
          <div className="relative w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
            <span className="text-sm font-heading font-bold text-blue-400 tracking-tight">JK</span>
          </div>
        </div>
        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ width: '60%' }} />
        </div>
        <p className="text-xs font-mono text-slate-600 tracking-wider uppercase">Loading</p>
      </div>
    </div>
  );
}
