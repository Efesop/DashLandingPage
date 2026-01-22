import { Metadata } from 'next';
import SecureJournalContent from './SecureJournalContent';

export const metadata: Metadata = {
  title: 'Private Journal App | Encrypted Diary That Stays Yours - Dash',
  description:
    'Your private thoughts deserve real privacy. Military-grade encrypted journal that never syncs to the cloud. No subscription, no tracking, truly private.',
  keywords: [
    'private journal app',
    'encrypted diary',
    'secure digital journal',
    'private diary app',
    'encrypted journal mac',
    'offline journal app',
    'secure journaling',
    'private thoughts app',
  ],
  openGraph: {
    title: 'Private Journal App | Encrypted Diary That Stays Yours - Dash',
    description:
      'Your private thoughts deserve real privacy. Military-grade encrypted journal that never syncs to the cloud.',
    url: 'https://dashnote.io/secure-journal',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Private Journal App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Journal App - Dash',
    description: 'Your diary, truly private. Encrypted and offline.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/secure-journal',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Private Journal App',
  description: 'Military-grade encrypted journal that never syncs to the cloud. Your diary, truly private.',
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
    'Private journaling',
    'Military-grade encryption',
    'No cloud sync',
    'Offline diary',
    'One-time payment',
    'Zero tracking',
  ],
};

export default function SecureJournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SecureJournalContent />
    </>
  );
}
