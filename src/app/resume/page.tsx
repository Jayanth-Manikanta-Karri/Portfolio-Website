import type { Metadata } from 'next';
import ResumeClient from './ResumeClient';

export const metadata: Metadata = {
  title: 'Resume & Credentials',
  description:
    'Curriculum vitae of Jayanth Manikanta Karri — AI/ML Engineer. Includes work experience at Quantum AI Global, education, technical skills, and achievements including Smart India Hackathon 2023 winner.',
  openGraph: {
    title: 'Resume & Credentials | Jayanth Manikanta Karri',
    description:
      'Full CV of Jayanth Manikanta Karri, AI/ML Engineer — experience, education, publications, and hackathon wins.',
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
