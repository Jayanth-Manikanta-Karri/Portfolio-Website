import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">
            Error 404 // Node Not Found
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-white tracking-tight">
            Vector Missing
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The requested trajectory or resource does not exist in this architecture or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition shadow-lg shadow-blue-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Orbit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
