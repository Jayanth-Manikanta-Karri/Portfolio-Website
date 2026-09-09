import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jayanth Manikanta Karri | AI/ML Engineer — Agentic AI & GPU Infrastructure',
  description:
    'AI/ML Engineer specializing in Agentic AI pipelines (LangGraph, AutoGen, CrewAI), Model Context Protocol (MCP), LLM fine-tuning & quantization (AWQ/GPTQ), and hybrid cloud / on-prem GPU inference.',
  keywords: [
    'Jayanth Manikanta Karri',
    'AI Engineer',
    'Machine Learning Engineer',
    'Agentic AI',
    'LangGraph',
    'Model Context Protocol',
    'MCP',
    'GPU Inference',
    'Ada RTX 6000',
    'Quantization',
    'FastAPI',
    'Hyderabad',
  ],
  authors: [{ name: 'Jayanth Manikanta Karri' }],
  creator: 'Jayanth Manikanta Karri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jayanth-karri.dev',
    title: 'Jayanth Manikanta Karri | AI/ML Engineer',
    description:
      'Designing and deploying Agentic AI pipelines, LLM quantization, and hybrid cloud / on-premise GPU inference systems.',
    siteName: 'Jayanth Manikanta Karri Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayanth Manikanta Karri | AI/ML Engineer',
    description:
      'Designing and deploying Agentic AI pipelines, LLM quantization, and hybrid cloud / on-premise GPU inference systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#0A0D14] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Ambient Glows */}
        <div className="ambient-glow glow-cyan" />
        <div className="ambient-glow glow-violet" />
        <div className="ambient-glow glow-emerald" />

        {/* Global Grid pattern */}
        <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
