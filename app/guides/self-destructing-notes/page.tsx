import type { Metadata } from 'next';
import SelfDestructingNotesGuideContent from './SelfDestructingNotesGuideContent';

export const metadata: Metadata = {
  title: 'Self-Destructing Notes: Ephemeral Notes That Auto-Delete | Guide',
  description:
    'Learn what self-destructing notes are, why they matter for sensitive information, and how Dash implements timed automatic deletion with visual countdowns.',
  keywords: [
    'self-destructing notes',
    'ephemeral notes app',
    'auto-delete notes',
    'temporary notes',
    'disappearing notes',
    'self-destruct timer notes',
    'secure note deletion',
    'timed note destruction',
  ],
  openGraph: {
    title: 'Self-Destructing Notes: Ephemeral Notes That Auto-Delete',
    description:
      'Learn what self-destructing notes are and how Dash implements timed automatic deletion.',
    url: 'https://dashnote.io/guides/self-destructing-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Self-Destructing Notes Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Destructing Notes Guide - Dash',
    description: 'Ephemeral notes that auto-delete after a set time.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides/self-destructing-notes',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Self-Destructing Notes: Ephemeral Notes That Auto-Delete',
  description: 'Learn what self-destructing notes are, why they matter for sensitive information, and how Dash implements timed automatic deletion.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  mainEntityOfPage: 'https://dashnote.io/guides/self-destructing-notes',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are self-destructing notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self-destructing notes are documents that automatically and permanently delete themselves after a set period of time. Once the timer expires, the note is gone \u2014 no recovery, no trash folder, no undo.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dash handle self-destructing notes differently from web-based tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash uses client-side destruction \u2014 the note is stored locally on your device with an expiration timestamp, and the app handles deletion. No server is involved, no third-party trust is required, and it works fully offline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What timer options does Dash offer for self-destructing notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash offers presets of 1 hour, 1 day, 7 days, and 30 days. You can also set custom durations from 1 minute to 1 year, specified in minutes, hours, or days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel a self-destruct timer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Self-destruct timers can be cancelled at any time before they expire through the page action menu. Cancelling removes the timer completely and the page returns to being a normal, permanent page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine self-destructing notes with encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can lock a page with a password (AES-256-GCM encryption) and set a self-destruct timer. The note is encrypted while it exists and automatically destroyed when the timer expires.',
      },
    },
  ],
};

export default function SelfDestructingNotesGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SelfDestructingNotesGuideContent />
    </>
  );
}
