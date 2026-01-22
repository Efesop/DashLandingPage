import { Metadata } from 'next';
import ForBitcoinersContent from './ForBitcoinersContent';

export const metadata: Metadata = {
  title: 'Notes App for Bitcoiners | Privacy-First Encrypted Notes - Dash',
  description:
    'Privacy-first notes for the Bitcoin community. Store notes offline with military-grade encryption. Your seed phrase hints and crypto notes stay private.',
  keywords: [
    'bitcoin notes app',
    'crypto privacy notes',
    'seed phrase storage',
    'bitcoin wallet notes',
    'encrypted crypto notes',
    'private notes bitcoin',
    'offline notes crypto',
    'secure notes bitcoiners',
  ],
  openGraph: {
    title: 'Notes App for Bitcoiners | Privacy-First Encrypted Notes - Dash',
    description:
      'Privacy-first notes for the Bitcoin community. Store notes offline and encrypted.',
    url: 'https://dashnote.io/for-bitcoiners',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Notes for Bitcoiners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes for Bitcoiners - Privacy First',
    description: 'Privacy-first notes. Encrypted. Offline. No tracking.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-bitcoiners',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Notes for Bitcoiners',
  description: 'Privacy-first notes app for the Bitcoin community. No tracking, no cloud, fully encrypted.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Bitcoiners, Cryptocurrency Users, Privacy Advocates',
  },
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
    'Military-grade encryption',
    'Offline storage',
    'Zero tracking',
    'No account required',
    'Open source',
    'Local-only storage',
  ],
};

export default function ForBitcoinersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForBitcoinersContent />
    </>
  );
}
