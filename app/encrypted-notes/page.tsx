import type { Metadata } from 'next';
import EncryptedNotesContent from './EncryptedNotesContent';

export const metadata: Metadata = {
  title: 'Encrypted Notes App | AES-256 Secure Note Taking - Dash',
  description:
    'AES-256 encrypted notes app. Password-protect sensitive notes with zero-knowledge architecture. No cloud, no backdoors, completely private.',
  keywords:
    'encrypted notes, encrypted note app, AES-256 notes, secure notes, password protected notes, encrypted note taking, private notes encryption',
  openGraph: {
    title: 'Encrypted Notes App | AES-256 Secure Note Taking - Dash',
    description:
      'AES-256 encrypted notes app. Password-protect sensitive notes with zero-knowledge architecture.',
    url: 'https://dashnote.io/encrypted-notes',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Encrypted Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encrypted Notes App - Dash',
    description:
      'AES-256 encrypted notes. Zero-knowledge, no backdoors.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/encrypted-notes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Encrypted Notes App',
  description: 'AES-256 encrypted notes app with zero-knowledge architecture.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'AES-256-GCM encryption',
    'Zero-knowledge architecture',
    'No cloud storage',
    'Password-protected notes',
    'Encrypted export',
    'Open source',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What encryption algorithm does Dash use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash uses AES-256-GCM (Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode). This is the same encryption standard used by the US government for classified information and by banks worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are encryption keys generated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you set a password on a note, Dash uses PBKDF2-SHA256 with 600,000 iterations to derive an encryption key from your password. This process, combined with a unique salt for each note, makes brute-force attacks computationally impractical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dash decrypt my notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dash uses zero-knowledge architecture. We have no servers storing your data and no way to access your encryption keys. Your encrypted notes can only be decrypted with your password, which only you know.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I forget my encryption password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you forget your password, there is no way to recover encrypted notes. This is by design - it means no one else can recover them either. We recommend using a password manager and keeping secure backups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are all notes encrypted by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, encryption is opt-in per note. This lets you keep casual notes quick to access while protecting sensitive information with a password. You choose which notes need encryption.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I verify Dash encryption is secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dash is fully open source. You can audit the encryption implementation on GitHub, or have a security professional review it. We believe transparency is essential for trust in security tools.',
      },
    },
  ],
};

export default function EncryptedNotesPage() {
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
      <EncryptedNotesContent />
    </>
  );
}
