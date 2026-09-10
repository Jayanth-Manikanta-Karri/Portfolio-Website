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
  AlertCircle
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function ContactClient() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Jayanth,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
      );
      const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
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
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Direct Copy Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                Direct Email
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label={copiedEmail ? 'Email copied' : 'Copy email address'}
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${profileData.email}`}
              className="text-base sm:text-lg font-mono font-semibold text-white hover:text-blue-400 transition block truncate focus:outline-none focus:underline"
            >
              {profileData.email}
            </a>
            <p className="text-xs text-slate-400">
              Typical response time: within 24 hours.
            </p>
          </div>

          {/* Location & Details Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-white block font-heading">Location</strong>
                <span className="text-slate-400 text-xs">
                  {profileData.location} (Open to Remote / Hybrid / Relocation)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-2 border-t border-white/[0.06]">
              <Clock className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-white block font-heading">Timezone</strong>
                <span className="text-slate-400 text-xs">
                  IST (UTC +5:30) • Flexible for global team alignment
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-2 border-t border-white/[0.06]">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-white block font-heading">Phone</strong>
                <span className="text-slate-400 text-xs font-mono">
                  {profileData.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Professional Profiles
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/40 text-slate-300 hover:text-white transition group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="View LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium">
                  <Linkedin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-xs font-mono text-blue-400 group-hover:translate-x-0.5 transition" aria-hidden="true">↗</span>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/40 text-slate-300 hover:text-white transition group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="View GitHub Repositories (opens in new tab)"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium">
                  <Github className="w-4 h-4 text-slate-300" aria-hidden="true" />
                  <span>GitHub Repositories</span>
                </div>
                <span className="text-xs font-mono text-blue-400 group-hover:translate-x-0.5 transition" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-heading font-bold text-white">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-400">
                Fill out the details below and I will get back to you as soon as possible.
              </p>
            </div>

            {status === 'success' && (
              <div
                role="alert"
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>
                  Opening your default email client with your message drafted. You can also send directly to {profileData.email}.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5"
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" aria-hidden="true" />
                <span>
                  Something went wrong. Please email me directly at {profileData.email}.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                    Your Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                    Your Email <span aria-label="required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                  Subject / Role / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI/ML Engineering Opportunity or Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                  Message <span aria-label="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your team, project requirements, or discussion points..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm transition hover:bg-slate-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Send Message</span>
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
