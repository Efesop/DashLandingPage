import type { Metadata } from 'next';
import VsEvernoteContent from './VsEvernoteContent';

export const metadata: Metadata = {
  title: 'Dash vs Evernote | Private Alternative to Evernote - Dash',
  description:
    'Compare Dash to Evernote. No subscription, 100% offline, military-grade encryption. Switch from Evernote monthly fees to $14.99 one-time privacy.',
  keywords:
    'dash vs evernote, evernote alternative, private evernote alternative, offline note app, evernote replacement, switch from evernote',
  openGraph: {
    title: 'Dash vs Evernote | Private Alternative to Evernote',
    description:
      'Compare Dash to Evernote. No subscription, 100% offline, military-grade encryption.',
    url: 'https://dashnote.io/vs-evernote',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Evernote Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Evernote - Private Alternative',
    description:
      'No subscription, 100% offline, military-grade encryption.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-evernote',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Evernote Comparison',
  description: 'Compare Dash to Evernote. No subscription, 100% offline, military-grade encryption.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first offline notes app - alternative to Evernote',
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

export default function VsEvernotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VsEvernoteContent />
    </>
  );
}
