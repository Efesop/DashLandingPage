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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Google Keep is free. Why pay for Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If a product is free, you're the product. Google Keep is free because your notes contribute to Google's advertising business. Dash costs $14.99 once because we make money from the product, not from your data. No ads, no tracking, no data mining - just a notes app that respects your privacy.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate my notes from Google Keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Export your Google Keep notes using Google Takeout, which provides them as a .zip file with HTML or JSON format. These can then be converted to text or Markdown and imported into Dash.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash sync like Google Keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No - and that's by design. Syncing requires storing your data on servers, which creates privacy risks. Dash keeps notes only on your device. For moving notes between devices, export encrypted .dashpack files.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash really more private than Google Keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Google Keep stores your notes on Google's servers where they can be accessed, analyzed, and used for advertising. Dash stores notes only on your device with optional AES-256 encryption. There are no servers, no cloud, no way for anyone to access your notes without your device and password.",
      },
    },
    {
      '@type': 'Question',
      name: "What about Google Keep's collaboration features?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Google Keep allows sharing lists with others through Google's servers. Dash is designed for private, personal notes. If you need to share, export to PDF or Word and send via your preferred secure method.",
      },
    },
  ],
};

export default function VsGoogleKeepPage() {
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
      <VsGoogleKeepContent />
    </>
  );
}
