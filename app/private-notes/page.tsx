import { Metadata } from 'next';
import PrivateNotesContent from './PrivateNotesContent';

export const metadata: Metadata = {
  title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
  description:
    'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required. Your notes never leave your device.',
  keywords: [
    'private notes app',
    'private note taking',
    'notes app without cloud',
    'secure notes',
    'encrypted notes',
    'offline notes app',
    'no cloud notes',
    'privacy notes app',
  ],
  openGraph: {
    title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
    description:
      'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required.',
    url: 'https://dashnote.io/private-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Private Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Notes App - Dash',
    description: 'Take truly private notes. 100% offline, AES-256 encrypted.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/private-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Private Notes App',
  description: 'Take truly private notes with 100% offline, AES-256 encrypted storage.',
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
    'Private notes storage',
    'No cloud required',
    'AES-256 encryption',
    'No account needed',
    'Local storage only',
    'Zero tracking',
  ],
};

export default function PrivateNotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivateNotesContent />
    </>
  );
}
