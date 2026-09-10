import type { Metadata, Viewport } from 'next';
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

const BASE_URL = 'https://jayanth-manikanta-karri.github.io/Portfolio-Website';

export const viewport: Viewport = {
  themeColor: '#05070A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Jayanth Manikanta Karri | AI/ML Engineer',
    template: '%s | Jayanth Manikanta Karri',
  },
  description:
    'AI/ML Engineer specializing in Agentic AI pipelines (LangGraph, AutoGen, CrewAI), Model Context Protocol (MCP), LLM fine-tuning & quantization (AWQ/GPTQ), and hybrid cloud / on-prem GPU inference. Smart India Hackathon 2023 Winner.',
  keywords: [
    'Jayanth Manikanta Karri',
    'AI Engineer',
    'Machine Learning Engineer',
    'Agentic AI',
    'LangGraph',
    'AutoGen',
    'CrewAI',
    'Model Context Protocol',
    'MCP',
    'RAG',
    'LLM Fine-tuning',
    'Quantization',
    'AWQ',
    'GPTQ',
    'FastAPI',
    'GPU Inference',
    'Hyderabad',
    'Smart India Hackathon Winner',
  ],
  authors: [{ name: 'Jayanth Manikanta Karri', url: BASE_URL }],
  creator: 'Jayanth Manikanta Karri',
  publisher: 'Jayanth Manikanta Karri',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Jayanth Manikanta Karri | AI/ML Engineer',
    description:
      'Designing and deploying Agentic AI pipelines, LLM quantization, RAG systems, and hybrid cloud / on-premise GPU inference. Smart India Hackathon 2023 National Winner.',
    siteName: 'Jayanth Manikanta Karri Portfolio',
    images: [
      {
        url: `${BASE_URL}/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Jayanth Manikanta Karri — AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayanth Manikanta Karri | AI/ML Engineer',
    description:
      'Designing and deploying Agentic AI pipelines, LLM quantization, RAG systems, and hybrid cloud / on-premise GPU inference.',
    creator: '@jayanthkarri',
    images: [`${BASE_URL}/assets/images/og-image.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  verification: {
    google: '',
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
      <body className="bg-[#05070A] text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Ambient Glows — kept very subtle */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-950/20 blur-[180px] pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-950/15 blur-[160px] pointer-events-none z-0" />

        {/* Global Grid pattern */}
        <div className="fixed inset-0 bg-grid-minimal pointer-events-none opacity-50 z-0" aria-hidden="true" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
