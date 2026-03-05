import type { Metadata } from 'next';
import AppLockGuideContent from './AppLockGuideContent';

export const metadata: Metadata = {
  title: 'App Lock: Real Encryption, Not Just a Lock Screen | Guide',
  description:
    'Learn how Dash\'s app lock uses AES-256-GCM to encrypt all your notes on disk — not just a UI gate. Includes Touch ID integration, auto-lock, and per-page encryption layers.',
  keywords: [
    'app lock notes',
    'lock notes app',
    'password protect notes',
    'encrypt all notes at once',
    'biometric notes app',
    'touch id notes app',
    'full disk encryption notes',
    'password lock note app',
    'secure notes with fingerprint',
    'auto-lock notes app',
  ],
  openGraph: {
    title: 'App Lock: Real Encryption, Not Just a Lock Screen',
    description:
      'Learn how Dash\'s app lock encrypts all your notes with AES-256-GCM — not just a UI gate.',
    url: 'https://dashnote.io/guides/app-lock',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'App Lock Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Lock Guide - Dash',
    description: 'Real encryption for all your notes, not just a lock screen.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides/app-lock',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'App Lock: Real Encryption, Not Just a Lock Screen',
  description: 'Learn how Dash\'s app lock uses AES-256-GCM to encrypt all your notes on disk, with Touch ID integration and auto-lock.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  mainEntityOfPage: 'https://dashnote.io/guides/app-lock',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Dash\'s app lock different from other note apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most app locks just show a password screen over the app while data stays as plaintext on disk. Dash\u2019s app lock actually encrypts all your notes using AES-256-GCM. The data on disk is unreadable without your password.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Touch ID actually decrypt my notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When you enable Touch ID, your password is stored in the operating system\u2019s secure keychain. Touch ID unlocks the keychain, retrieves your password, and Dash uses it to derive the encryption key and decrypt your notes. It\u2019s real decryption, not just a UI bypass.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I forget my app lock password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because Dash uses real encryption, there is no password recovery. If you forget your password and don\u2019t have Touch ID enabled, your encrypted notes are permanently inaccessible. This is the trade-off of real encryption \u2014 only you can access your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use both app lock and individual page locks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. App lock encrypts all pages that don\u2019t have their own individual lock. Pages with their own password keep their independent encryption. The two layers work together without double-encrypting anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does auto-lock do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Auto-lock encrypts all your notes after a period of inactivity (1 min, 5 min, 15 min, 30 min, or custom). When triggered, Dash encrypts everything in memory and writes ciphertext to disk before showing the lock screen. Your data is protected even if you forget to lock manually.',
      },
    },
  ],
};

export default function AppLockGuidePage() {
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
      <AppLockGuideContent />
    </>
  );
}
