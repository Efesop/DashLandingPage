import { Metadata } from 'next';
import ForBitcoinersContent from './ForBitcoinersContent';

export const metadata: Metadata = {
  title: 'Notes App for Bitcoiners | Privacy-First Encrypted Notes - Dash',
  description:
    'Privacy-first notes for the Bitcoin community. Store notes offline with AES-256 encryption. Your seed phrase hints and crypto notes stay private.',
  keywords: [
    'bitcoin notes app',
    'crypto privacy notes',
    'seed phrase storage',
    'bitcoin wallet notes',
    'encrypted crypto notes',
    'private notes bitcoin',
    'offline notes crypto',
    'secure notes bitcoiners',
  ],
  openGraph: {
    title: 'Notes App for Bitcoiners | Privacy-First Encrypted Notes - Dash',
    description:
      'Privacy-first notes for the Bitcoin community. Store notes offline and encrypted.',
    url: 'https://dashnote.io/for-bitcoiners',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Notes for Bitcoiners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes for Bitcoiners - Privacy First',
    description: 'Privacy-first notes. Encrypted. Offline. No tracking.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-bitcoiners',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Notes for Bitcoiners',
  description: 'Privacy-first notes app for the Bitcoin community. No tracking, no cloud, fully encrypted.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Bitcoiners, Cryptocurrency Users, Privacy Advocates',
  },
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'AES-256 encryption',
    'Offline storage',
    'Zero tracking',
    'No account required',
    'Open source',
    'Local-only storage',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this safe for storing seed phrases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We recommend never storing your actual seed phrase digitally. However, Dash is excellent for storing hints, partial information, or instructions that could help you remember - encrypted with AES-256. The encryption is the same standard used by governments.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I trust this app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Don't trust - verify. Dash is fully open source on GitHub. The encryption uses standard AES-256-GCM with PBKDF2 key derivation. Your note data is never transmitted anywhere. The code is auditable.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if the company disappears?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your notes are stored locally on your device as encrypted files. They don't depend on any server or service. Even if Dash disappeared tomorrow, your files would still exist on your machine. The code is open source if you ever need to build it yourself.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run this air-gapped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once installed, Dash never needs internet access. You can use it on a completely air-gapped machine. Notes are stored locally and encrypted locally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the encryption implemented?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash uses AES-256-GCM encryption with PBKDF2 key derivation (600,000 iterations). Each note can have its own password. The encryption happens entirely on your device - no keys are ever transmitted anywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any telemetry or analytics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero analytics or telemetry. Dash collects no data - no analytics, no crash reporting, no tracking. The Mac app checks for updates only, but your notes data is never transmitted. You can verify this by monitoring network traffic or reviewing the open source code.',
      },
    },
  ],
};

export default function ForBitcoinersPage() {
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
      <ForBitcoinersContent />
    </>
  );
}
