import { Metadata } from 'next';
import VsNotionContent from './VsNotionContent';

export const metadata: Metadata = {
  title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
  description:
    'Compare Dash to Notion. Get the same note-taking power without cloud dependency, data collection, or monthly subscriptions. One-time $14.99.',
  keywords: [
    'Notion alternative',
    'Notion privacy',
    'private Notion alternative',
    'Notion without cloud',
    'offline Notion alternative',
    'Notion competitor',
    'notes app vs Notion',
    'secure Notion alternative',
  ],
  openGraph: {
    title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
    description:
      'Compare Dash to Notion. Get the same note-taking power without cloud dependency or data collection.',
    url: 'https://dashnote.io/vs-notion',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Notion Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Notion - Private Alternative',
    description: 'Same note-taking power without cloud dependency.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-notion',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Notion Comparison',
  description: 'Compare Dash to Notion. No cloud, no tracking, no subscription.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first offline notes app - alternative to Notion',
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

export default function VsNotionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VsNotionContent />
    </>
  );
}
