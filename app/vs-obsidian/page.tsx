import { Metadata } from 'next';
import VsObsidianContent from './VsObsidianContent';

export const metadata: Metadata = {
  title: 'Dash vs Obsidian: Encrypted Notes Alternative | Built-in Security',
  description:
    'Compare Dash to Obsidian. Get true encryption built-in, not as an add-on. No sync subscription, no plugins needed. One-time $14.99 for military-grade security.',
  keywords: [
    'Obsidian alternative',
    'Obsidian encryption',
    'Obsidian privacy',
    'secure Obsidian alternative',
    'Obsidian vs encrypted notes',
    'offline notes app',
    'encrypted markdown notes',
    'Obsidian competitor',
  ],
  openGraph: {
    title: 'Dash vs Obsidian: Encrypted Notes Alternative | Built-in Security',
    description:
      'Compare Dash to Obsidian. True encryption built-in, not as an add-on. No sync subscription needed.',
    url: 'https://dashnote.io/vs-obsidian',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Obsidian Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Obsidian - Encrypted Alternative',
    description: 'True encryption built-in. No plugins, no subscriptions.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-obsidian',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Obsidian Comparison',
  description: 'Compare Dash to Obsidian. Built-in encryption, no subscriptions, no plugins.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first encrypted notes app - alternative to Obsidian',
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

export default function VsObsidianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VsObsidianContent />
    </>
  );
}
