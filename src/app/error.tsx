'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
        <div className="w-12 h-12 mx-auto rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400" aria-hidden="true">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-rose-400 tracking-wider uppercase">
            Runtime Error
          </div>
          <h1 className="text-2xl font-heading font-extrabold text-white tracking-tight">
            Something went wrong
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            An unexpected error occurred. Please try refreshing the page or return home.
          </p>
          {error.digest && (
            <p className="text-[10px] font-mono text-slate-600">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-medium text-xs transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
