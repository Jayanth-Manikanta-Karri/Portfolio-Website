'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>CONTACT &amp; COLLABORATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Let&apos;s Build Something Intelligent Together
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Whether you have an inquiry about full-time AI/ML engineering roles, agentic system architecture consulting, or technical collaboration, I&apos;d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Direct Copy Card */}
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Direct Email
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10 transition"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${profileData.email}`}
              className="text-base sm:text-lg font-mono font-semibold text-white hover:text-cyan-400 transition block truncate"
            >
              {profileData.email}
            </a>
            <p className="text-xs text-slate-400">
              Typical response time: within 24 hours.
            </p>
          </div>

          {/* Location & Details Card */}
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading">Location</strong>
                <span className="text-slate-400 text-xs">
                  {profileData.location} (Open to Remote / Hybrid / Relocation)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-2 border-t border-white/5">
              <Clock className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading">Timezone</strong>
                <span className="text-slate-400 text-xs">
                  IST (UTC +5:30) • Flexible for global team alignment
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-2 border-t border-white/5">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading">Phone</strong>
                <span className="text-slate-400 text-xs font-mono">
                  {profileData.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Professional Profiles
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0F1A] border border-white/5 hover:border-cyan-500/40 text-slate-300 hover:text-white transition group"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition">
                  ↗
                </span>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0F1A] border border-white/5 hover:border-cyan-500/40 text-slate-300 hover:text-white transition group"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Repositories</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-0.5 transition">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface/85 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-heading font-bold text-white">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-400">
                Fill out the details below and I will get back to you as soon as possible.
              </p>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Thank you! Your message has been sent successfully. I look forward to speaking with you.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>
                  Something went wrong while sending your message. Please feel free to email me directly at {profileData.email}.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                  Subject / Role / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI/ML Engineering Opportunity or Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your team, project requirements, or discussion points..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090D17] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs transition shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span>Sending Transmission...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
