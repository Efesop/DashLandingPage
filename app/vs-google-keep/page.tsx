import { Metadata } from 'next';
import VsGoogleKeepContent from './VsGoogleKeepContent';

export const metadata: Metadata = {
  title: 'Dash vs Google Keep: Private Notes Without Google Tracking - Dash',
  description:
    'Take notes without Google watching. No ads, no tracking, no data mining. Private, encrypted notes that stay on your device. One-time $14.99.',
  keywords: [
    'Google Keep alternative',
    'Google Keep privacy',
    'notes without Google',
    'private Google Keep alternative',
    'no tracking notes app',
    'encrypted notes app',
    'Google Keep replacement',
    'notes without data collection',
  ],
  openGraph: {
    title: 'Dash vs Google Keep: Private Notes Without Google Tracking',
    description:
      'Take notes without Google watching. No ads, no tracking, no data mining.',
    url: 'https://dashnote.io/vs-google-keep',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Google Keep Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Google Keep - Private Alternative',
    description: 'Notes without Google tracking. Private and encrypted.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-google-keep',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Google Keep Comparison',
  description: 'Compare Dash to Google Keep. Private notes without tracking or data collection.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first notes app - alternative to Google Keep',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'macOS, Web',
    offers: {
      '@type': 'Offer',
      price: '14.99',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '100',
    },
  },
};

export default function VsGoogleKeepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VsGoogleKeepContent />
    </>
  );
}
