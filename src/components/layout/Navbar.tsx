'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070A]/85 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2.5 text-sm font-heading font-bold tracking-tight text-white transition"
        >
          <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition">
            <Terminal className="w-3.5 h-3.5 text-slate-300 group-hover:text-cyan-400 transition" />
          </div>
          <span className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase">
            Jayanth Karri <span className="text-slate-600">//</span> <span className="text-cyan-400">AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </span>
        </Link>

        {/* Floating Capsule Nav (Vercel / Linear style) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-2.5 py-1 backdrop-blur-xl shadow-lg shadow-black/20">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
            download="Jayanth_Karri_AI_ML_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-lg transition"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>CV</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-black bg-white hover:bg-slate-200 rounded-lg transition shadow-sm hover:scale-[1.02]"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05070A]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 mt-3 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-mono transition ${
                  isActive
                    ? 'bg-white/[0.08] text-white font-semibold'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-slate-600">→</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/[0.08] flex gap-2">
            <a
              href={getAssetPath('/assets/docs/Jayanth_AI_ML_Resume.pdf')}
              download="Jayanth_Karri_AI_ML_Resume.pdf"
              className="flex-1 text-center py-2 text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="flex-1 text-center py-2 text-xs font-mono text-black font-semibold bg-white rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
