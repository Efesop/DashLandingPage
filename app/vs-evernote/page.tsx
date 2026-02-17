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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I import my Evernote notes directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash does not have a direct ENEX import feature yet. However, you can export your Evernote notes as HTML and copy the content into Dash. We are considering adding direct import in a future update.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash have all the features of Evernote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash focuses on privacy-first note-taking. It includes rich text editing, formatting, folders, tags, search, and export. It does not include features like web clipping, collaboration, or cloud sync - these require servers that would compromise privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about syncing between devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash does not have cloud sync by design. You can export encrypted .dashpack files and import them on another device. This gives you manual control over when and how your notes move between devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash really just $14.99 forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. One payment, lifetime access. No subscription, no renewal fees, no upsells. Major updates are included. Compare that to Evernote at $180/year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if Evernote adds better privacy features?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloud-based apps cannot offer true privacy because your data must exist on their servers for the service to work. Dash is architecturally different - your notes never leave your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I try Dash before buying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash is open source, so you can review the code on GitHub. The PWA version is free to try in your browser. The Mac app is a one-time $14.99 purchase.',
      },
    },
  ],
};

export default function VsEvernotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <VsEvernoteContent />
    </>
  );
}
