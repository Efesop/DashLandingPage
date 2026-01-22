import { Metadata } from 'next';
import ForWritersContent from './ForWritersContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Writers | Protect Your Manuscripts - Dash',
  description:
    'Keep your unpublished manuscripts truly private. Military-grade encrypted notes that never touch the cloud. No leaks, no theft, no compromises.',
  keywords: [
    'notes app for writers',
    'secure writing app',
    'manuscript protection',
    'private writing app',
    'encrypted notes for authors',
    'writer privacy',
    'secure note taking for writers',
    'protect unpublished work',
  ],
  openGraph: {
    title: 'Secure Notes for Writers | Protect Your Manuscripts - Dash',
    description:
      'Keep your unpublished manuscripts truly private. Military-grade encrypted notes that never touch the cloud.',
    url: 'https://dashnote.io/for-writers',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Secure Notes for Writers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Notes for Writers - Dash',
    description: 'Your unpublished work deserves military-grade protection.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-writers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Secure Notes for Writers',
  description: 'Protect your manuscripts with military-grade encrypted notes that never touch the cloud.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Writers, Authors, Novelists, Screenwriters',
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
    'Manuscript protection',
    'Military-grade encryption',
    'No cloud storage',
    'Distraction-free writing',
    'Offline functionality',
    'Zero tracking',
  ],
};

export default function ForWritersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForWritersContent />
    </>
  );
}
