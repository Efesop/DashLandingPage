import type { Metadata } from 'next';
import EncryptedNotesContent from './EncryptedNotesContent';

export const metadata: Metadata = {
  title: 'Encrypted Notes App | AES-256 Secure Note Taking - Dash',
  description:
    'Military-grade AES-256 encrypted notes app. Password-protect sensitive notes with zero-knowledge architecture. No cloud, no backdoors, completely private.',
  keywords:
    'encrypted notes, encrypted note app, AES-256 notes, secure notes, password protected notes, encrypted note taking, private notes encryption',
  openGraph: {
    title: 'Encrypted Notes App | AES-256 Secure Note Taking - Dash',
    description:
      'Military-grade AES-256 encrypted notes app. Password-protect sensitive notes with zero-knowledge architecture.',
    url: 'https://dashnote.io/encrypted-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Encrypted Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encrypted Notes App - Dash',
    description:
      'Military-grade AES-256 encrypted notes. Zero-knowledge, no backdoors.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/encrypted-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Encrypted Notes App',
  description: 'Military-grade AES-256 encrypted notes app with zero-knowledge architecture.',
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
    'AES-256-GCM encryption',
    'Zero-knowledge architecture',
    'No cloud storage',
    'Password-protected notes',
    'Encrypted export',
    'Open source',
  ],
};

export default function EncryptedNotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EncryptedNotesContent />
    </>
  );
}
