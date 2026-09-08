import type { Metadata } from 'next';
import OfflineFirstGuideContent from './OfflineFirstGuideContent';

export const metadata: Metadata = {
  title: 'Offline-First Apps: Why Your Notes Should Live Locally',
  description:
    'Learn what offline-first architecture means, how it compares to cloud-based apps, and how Dash stores everything on your device without requiring an internet connection.',
  keywords: [
    'offline-first app',
    'offline note taking app',
    'local-first software',
    'no internet notes app',
    'offline notes',
    'local storage notes',
    'works without internet',
    'no cloud note app',
  ],
  openGraph: {
    title: 'Offline-First Apps: Why Your Notes Should Live Locally | Dash Notes',
    description:
      'Learn what offline-first architecture means and how Dash stores everything on your device.',
    url: 'https://dashnote.io/guides/offline-first',
    siteName: 'Dash Notes',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Offline-First Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline-First Apps: Why Your Notes Should Live Locally',
    description: 'How offline-first apps keep your data local and always accessible.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides/offline-first',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Offline-First? How Dash Keeps Your Data Local',
  description: 'Learn what offline-first architecture means, how it compares to cloud-based apps, and how Dash stores everything locally.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  mainEntityOfPage: 'https://dashnote.io/guides/offline-first',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does offline-first mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offline-first is a software design approach where the application works fully without an internet connection as the default state, not as a fallback. Data is stored locally on your device and the app functions identically whether connected or not.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is offline-first different from offline-capable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offline-capable apps store data on a remote server but cache it locally \u2014 sync requires internet and conflicts can occur. Offline-first apps store data locally as the primary copy with no server, no sync, and no conflicts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dash store data on different platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desktop (Electron): JSON files on your local filesystem. Mobile PWA: IndexedDB with automatic persistent storage. Web browser: localStorage as a fallback. Dash automatically detects the platform and selects the right storage backend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash sync between devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you turn it on. Dash Sync is an optional subscription that encrypts everything on your device before upload, so the relay never sees plaintext and there is nothing readable in transit. Leave it off and Dash never touches a server; move data between devices with encrypted export and import instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since Dash stores data only on your device, losing the device means losing the data unless you have exported backups. We recommend regular exports. Encrypted pages remain protected even if someone accesses your device.',
      },
    },
  ],
};

export default function OfflineFirstGuidePage() {
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
      <OfflineFirstGuideContent />
    </>
  );
}
