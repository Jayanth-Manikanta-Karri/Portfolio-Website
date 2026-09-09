import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0D14]/90 backdrop-blur-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span>
                Jayanth <span className="text-cyan-400">Karri</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI/ML Engineer specializing in Agentic AI pipelines, LLM fine-tuning & quantization, and hybrid cloud / on-prem GPU inference systems. Focused on building autonomous, high-throughput intelligent systems.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.availability}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-300 tracking-wider mb-4 font-heading">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-slate-400 hover:text-cyan-400 transition">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-cyan-400 transition">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-cyan-400 transition">
                  Experience & Leadership
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate-400 hover:text-cyan-400 transition">
                  Resume & Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info & Socials */}
          <div>
            <h3 className="text-xs uppercase font-semibold text-slate-300 tracking-wider mb-4 font-heading">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profileData.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-cyan-400 transition truncate">
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profileData.phone}</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.email}
                className="w-9 h-9 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition"
                aria-label="Email Jayanth"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Jayanth Manikanta Karri. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Built with Next.js 14, TypeScript & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
