import { Metadata } from 'next';
import PrivateNotesContent from './PrivateNotesContent';

export const metadata: Metadata = {
  title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
  description:
    'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required. Your notes never leave your device.',
  keywords: [
    'private notes app',
    'private note taking',
    'notes app without cloud',
    'secure notes',
    'encrypted notes',
    'offline notes app',
    'no cloud notes',
    'privacy notes app',
  ],
  openGraph: {
    title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
    description:
      'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required.',
    url: 'https://dashnote.io/private-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Private Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Notes App - Dash',
    description: 'Take truly private notes. 100% offline, AES-256 encrypted.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/private-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Private Notes App',
  description: 'Take truly private notes with 100% offline, AES-256 encrypted storage.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'Private notes storage',
    'No cloud required',
    'AES-256 encryption',
    'No account needed',
    'Local storage only',
    'Zero tracking',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Dash more private than other note apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike cloud-based apps like Notion or Evernote, Dash stores everything locally on your device. There are no servers, no accounts, and no internet connection required. Your notes physically cannot be accessed by anyone but you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the encryption work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash uses AES-256-GCM encryption, the same standard used by banks and governments. When you password-protect a note, it's encrypted with a key derived using PBKDF2-SHA256 with 600,000 iterations, making brute-force attacks impractical.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dash read my notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dash is designed with zero-knowledge architecture. Your notes never leave your device, and encrypted notes can only be decrypted with your password. We have no servers, no accounts, and no way to access your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Since notes are stored locally, losing your device means losing your notes unless you've exported backups. We recommend regularly exporting encrypted .dashpack files to external storage.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash open source?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Dash is open source. You can audit the code yourself on GitHub to verify our privacy claims. We believe transparency is essential for trust.',
      },
    },
  ],
};

export default function PrivateNotesPage() {
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
      <PrivateNotesContent />
    </>
  );
}
