import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Collaboration',
  description:
    'Reach out to Jayanth Manikanta Karri for AI/ML engineering roles, agentic AI system consulting, or technical collaboration. Available for remote, hybrid, or on-site opportunities.',
  openGraph: {
    title: 'Contact Jayanth Manikanta Karri | AI/ML Engineer',
    description:
      'Connect with Jayanth for AI/ML roles, agentic system architecture consulting, or technical collaboration.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
