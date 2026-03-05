import type { Metadata } from 'next';
import EncryptionGuideContent from './EncryptionGuideContent';

export const metadata: Metadata = {
  title: 'What Is AES-256 Encryption? How Dash Encrypts Your Notes | Guide',
  description:
    'Learn how AES-256-GCM encryption works, what PBKDF2 key derivation does, and how Dash uses zero-knowledge client-side encryption to protect your notes.',
  keywords: [
    'aes-256 encryption',
    'aes-256-gcm encryption explained',
    'client-side encryption',
    'zero-knowledge encryption',
    'encrypt notes app',
    'encrypted note taking',
    'pbkdf2 key derivation',
    'end-to-end encrypted notes',
  ],
  openGraph: {
    title: 'What Is AES-256 Encryption? How Dash Encrypts Your Notes',
    description:
      'Learn how AES-256-GCM encryption works and how Dash uses zero-knowledge client-side encryption.',
    url: 'https://dashnote.io/guides/encryption',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash Encryption Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AES-256 Encryption Explained - Dash Guide',
    description: 'How AES-256-GCM encryption works and how Dash protects your notes.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides/encryption',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is AES-256 Encryption? How Dash Encrypts Your Notes',
  description: 'Learn how AES-256-GCM encryption works, what PBKDF2 key derivation does, and how Dash uses zero-knowledge client-side encryption.',
  author: {
    '@type': 'Organization',
    name: 'Dash',
    url: 'https://dashnote.io',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dash',
    url: 'https://dashnote.io',
  },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  mainEntityOfPage: 'https://dashnote.io/guides/encryption',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AES-256-GCM encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AES-256-GCM is a symmetric encryption algorithm that uses 256-bit keys with Galois/Counter Mode. It provides both confidentiality (data is unreadable) and authentication (data hasn\'t been tampered with). It\'s used by governments, banks, and security-critical applications worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PBKDF2 key derivation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PBKDF2 (Password-Based Key Derivation Function 2) transforms a password into a cryptographically strong encryption key by running it through a hash function hundreds of thousands of times. This key stretching makes brute-force attacks computationally impractical.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does zero-knowledge encryption mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero-knowledge encryption means the service provider cannot access your data. In Dash, encryption happens entirely on your device, your password never leaves your device, and no server ever sees your plaintext data. Even the app developer cannot read your encrypted notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I recover my notes if I forget the password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Since Dash uses zero-knowledge encryption, there is no password recovery mechanism. Your password never leaves your device and is never stored. This is a feature, not a limitation \u2014 it means nobody can reset or bypass your encryption.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AES-256 encryption secure enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AES-256 provides 2^256 possible key combinations, making brute-force attacks impossible with current or foreseeable technology. It has decades of cryptanalysis with no practical attacks found and is recommended by NIST and the NSA for TOP SECRET classified information.',
      },
    },
  ],
};

export default function EncryptionGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <EncryptionGuideContent />
    </>
  );
}
