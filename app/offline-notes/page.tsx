import type { Metadata } from 'next';
import OfflineNotesContent from './OfflineNotesContent';

export const metadata: Metadata = {
  title: 'Offline Notes App | Works Without Internet - Dash',
  description:
    'Note-taking app that works 100% offline. No internet required, no servers, no cloud sync. Your notes are always accessible, anywhere.',
  keywords:
    'offline notes, offline note app, no internet notes, works offline, local notes app, notes without wifi, airplane mode notes',
  openGraph: {
    title: 'Offline Notes App | Works Without Internet - Dash',
    description:
      'Note-taking app that works 100% offline. No internet required, no servers, no cloud sync.',
    url: 'https://dashnote.io/offline-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Offline Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline Notes App - Dash',
    description:
      '100% offline note-taking. No internet, no servers, always accessible.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/offline-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Offline Notes App',
  description: 'Note-taking app that works 100% offline with no internet required.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '100',
  },
  featureList: [
    '100% offline functionality',
    'No internet required',
    'Local storage only',
    'Works on flights',
    'Zero network requests',
    'Instant access',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Dash work without internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash stores all your notes locally on your device. The app never makes network requests - no API calls, no sync, no telemetry. Everything happens on your machine, so internet connectivity is simply not needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are my notes stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On macOS, notes are stored in ~/Library/Application Support/Dash/. On the PWA version, notes are stored in your browser IndexedDB. You always have direct access to your data files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sync notes between devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While there is no cloud sync (by design), you can export notes as encrypted .dashpack files and import them on another device. This gives you control over when and how data moves between devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since notes are stored locally, losing your device means losing your notes unless you have exported backups. We recommend regularly exporting encrypted .dashpack backups to external storage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the search feature work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, everything works offline. Search, editing, formatting, themes, encryption, export - all features work without any internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the PWA version also fully offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you install the PWA, it works completely offline. Notes are stored in your browser and the app is cached locally.',
      },
    },
  ],
};

export default function OfflineNotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <OfflineNotesContent />
    </>
  );
}
