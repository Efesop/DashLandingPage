import { Metadata } from 'next';
import ForJournalistsContent from './ForJournalistsContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
  description:
    'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud. No accounts, no tracking, no subpoena risk.',
  keywords: [
    'notes app for journalists',
    'secure notes for reporters',
    'journalist note taking',
    'encrypted notes journalism',
    'source protection notes',
    'investigative journalist tools',
    'secure reporting tools',
    'offline notes for journalists',
  ],
  openGraph: {
    title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
    description:
      'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud.',
    url: 'https://dashnote.io/for-journalists',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Secure Notes for Journalists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Notes for Journalists - Dash',
    description: 'Protect your sources. Military-grade encrypted notes.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-journalists',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Secure Notes for Journalists',
  description: 'Protect your sources with military-grade encrypted notes that never touch the cloud.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Journalists, Reporters, Investigative Journalists',
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
    'Source protection',
    'Military-grade encryption',
    'No cloud storage',
    'No subpoena risk',
    'Offline functionality',
    'Zero tracking',
  ],
};

export default function ForJournalistsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForJournalistsContent />
    </>
  );
}
