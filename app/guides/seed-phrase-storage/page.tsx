import type { Metadata } from 'next';
import SeedPhraseStorageGuideContent from './SeedPhraseStorageGuideContent';

export const metadata: Metadata = {
  title: 'Seed Phrase Storage: Secure Crypto Recovery Phrase Backup | Guide',
  description:
    'Store cryptocurrency seed phrases securely in Dash with BIP-39 validation, AES-256 encryption, and fully offline local storage. No cloud, no risk.',
  keywords: [
    'seed phrase storage',
    'crypto seed phrase backup',
    'BIP-39 wallet backup',
    'secure seed phrase app',
    'recovery phrase storage',
    'mnemonic phrase backup',
    'encrypted seed phrase',
    'offline seed phrase storage',
  ],
  openGraph: {
    title: 'Seed Phrase Storage: Secure Crypto Recovery Phrase Backup',
    description: 'Store seed phrases with BIP-39 validation and AES-256 encryption. Fully offline.',
    url: 'https://dashnote.io/guides/seed-phrase-storage',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/Dashfeature1.png', width: 1200, height: 630, alt: 'Seed Phrase Storage Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seed Phrase Storage Guide - Dash',
    description: 'Secure crypto recovery phrase storage with BIP-39 validation.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: { canonical: 'https://dashnote.io/guides/seed-phrase-storage' },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Seed Phrase Storage: Secure Crypto Recovery Phrase Backup',
  description: 'How to store cryptocurrency seed phrases securely with BIP-39 validation and AES-256 encryption.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  mainEntityOfPage: 'https://dashnote.io/guides/seed-phrase-storage',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to store seed phrases digitally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Dash, yes. Your seed phrase is stored locally on your device with no cloud sync or network requests. When combined with page encryption (AES-256-GCM), the data on disk is unreadable without your password.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is BIP-39 validation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BIP-39 is the Bitcoin standard that defines 2048 valid mnemonic words. Dash validates each word you enter against this list, showing green checkmarks for valid words and red indicators for possible typos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I store both 12-word and 24-word seed phrases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The seed phrase block supports both 12 and 24-word formats. Toggle between them using the button in the block header.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I protect my seed phrase in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lock the page with a password to encrypt it with AES-256-GCM. Enable app lock for full-device encryption. Consider setting up a decoy password for additional protection under coercion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my seed phrase from Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Seed phrases are included in all 8 export formats (PDF, Markdown, Plain Text, RTF, DOCX, CSV, JSON, XML). They render as numbered lists in document formats.',
      },
    },
  ],
};

export default function SeedPhraseStorageGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SeedPhraseStorageGuideContent />
    </>
  );
}
