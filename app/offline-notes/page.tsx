import type { Metadata } from 'next';
import OfflineNotesContent from './OfflineNotesContent';

export const metadata: Metadata = {
  title: 'Offline Notes App That Works Without Internet',
  description: 'Dash is an offline notes app: every note lives on your device, works with no internet and no account, and syncs only if you turn on end-to-end encrypted Dash Sync.',
  keywords:
    'offline notes, offline note app, no internet notes, works offline, local notes app, notes without wifi, airplane mode notes',
  openGraph: {
    title: 'Offline Notes App That Works Without Internet | Dash Notes',
    description: 'Dash is an offline notes app: every note lives on your device, works with no internet and no account, and syncs only if you turn on end-to-end encrypted Dash Sync.',
    url: 'https://dashnote.io/offline-notes',
    siteName: 'Dash Notes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Offline Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline Notes App That Works Without Internet',
    description:
      '100% offline note-taking. No internet, no servers, always accessible.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/offline-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Offline Notes App',
  description: 'Note-taking app that works 100% offline with no internet required.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    '100% offline functionality',
    'No internet required',
    'Local storage only',
    'Works on flights',
    'Notes stay on your device by default',
    'Instant access',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Dash work without internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash stores all your notes locally on your device. There is no telemetry and no analytics, and nothing syncs unless you turn on Dash Sync. Your notes never leave your device unless you choose to share or sync them; both are opt-in, end-to-end encrypted, and routed through a zero-knowledge relay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are my notes stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On macOS, notes are stored in ~/Library/Application Support/Dash/. On the PWA version, notes are stored in your browser IndexedDB. You always have direct access to your data files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sync notes between devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you want to. Dash Sync is an optional subscription that keeps notes in step across Mac, iPhone, iPad and the web, encrypted on your device before upload. Without it, export notes as encrypted .dashpack files and import them on another device. Either way you control when and how data moves.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since notes are stored locally, losing your device means losing your notes unless you have exported backups. We recommend regularly exporting encrypted .dashpack backups to external storage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the search feature work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, everything works offline. Search, editing, formatting, themes, encryption, export - all features work without any internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the PWA version also fully offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you install the PWA, it works completely offline. Notes are stored in your browser and the app is cached locally.',
      },
    },
  ],
};

export default function OfflineNotesPage() {
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
      <OfflineNotesContent />
    </>
  );
}
