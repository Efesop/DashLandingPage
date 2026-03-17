import type { Metadata } from 'next';
import DuressPasswordGuideContent from './DuressPasswordGuideContent';

export const metadata: Metadata = {
  title: 'Decoy Password: Silent Protection for Your Notes | Guide',
  description:
    'Learn how Dash\'s decoy password silently hides your data under coercion. A secondary password that provides plausible deniability when you need it most.',
  keywords: [
    'decoy password',
    'duress password',
    'panic password',
    'coercion password',
    'plausible deniability notes',
    'decoy app mode',
    'hidden volume notes',
    'secure notes coercion',
    'panic button notes app',
  ],
  openGraph: {
    title: 'Decoy Password: Silent Protection for Your Notes',
    description:
      'A secondary password that silently hides your data under coercion.',
    url: 'https://dashnote.io/guides/duress-password',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/Dashfeature1.png', width: 1200, height: 630, alt: 'Decoy Password Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoy Password Guide - Dash',
    description: 'Silent protection that hides your notes under coercion.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: { canonical: 'https://dashnote.io/guides/duress-password' },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Decoy Password: Silent Protection for Your Notes',
  description: 'Learn how Dash\'s decoy password provides plausible deniability by opening a decoy empty app.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  mainEntityOfPage: 'https://dashnote.io/guides/duress-password',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a decoy password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A decoy password is a secondary password that triggers a silent action when entered at the lock screen. Instead of unlocking your data, it hides everything and opens a decoy empty app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an attacker tell that a decoy password was used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is zero visual difference between a normal unlock and a decoy unlock. The app opens to an empty state that looks identical to a fresh installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I recover my data after using the decoy password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your data is preserved on disk. Lock the app again and enter your real password to restore all your notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the decoy password work with app lock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The decoy password is part of the app lock system. You set it up after enabling app lock. At the lock screen, entering the decoy password triggers the decoy mode, while your real password unlocks normally.',
      },
    },
  ],
};

export default function DuressPasswordGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <DuressPasswordGuideContent />
    </>
  );
}
