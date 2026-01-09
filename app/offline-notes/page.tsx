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

export default function OfflineNotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OfflineNotesContent />
    </>
  );
}
