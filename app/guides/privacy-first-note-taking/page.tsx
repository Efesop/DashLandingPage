import type { Metadata } from 'next';
import PrivacyFirstGuideContent from './PrivacyFirstGuideContent';

export const metadata: Metadata = {
  title: 'Privacy-First Note Taking: Zero-Knowledge Design Explained | Guide',
  description:
    'Explore what privacy-first design means compared to traditional cloud note apps, zero-knowledge architecture, and how Dash ensures your data never leaves your device.',
  keywords: [
    'privacy-first note taking',
    'private notes app',
    'zero-knowledge notes',
    'no tracking note app',
    'secure notes app',
    'private journal app',
    'no cloud notes',
    'no telemetry notes app',
  ],
  openGraph: {
    title: 'Privacy-First Note Taking: Zero-Knowledge Design Explained',
    description:
      'Explore what privacy-first design means and how Dash ensures your data never leaves your device.',
    url: 'https://dashnote.io/guides/privacy-first-note-taking',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Privacy-First Note Taking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy-First Note Taking Guide - Dash',
    description: 'What zero-knowledge design means and why it matters.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides/privacy-first-note-taking',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Privacy-First Note Taking: Zero-Knowledge Design Explained',
  description: 'Explore what privacy-first design means, zero-knowledge architecture, and how Dash ensures your data never leaves your device.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  mainEntityOfPage: 'https://dashnote.io/guides/privacy-first-note-taking',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does privacy-first mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Privacy-first is a design philosophy where user privacy is the primary constraint shaping every decision. The app is built so the developer cannot access user data even if they wanted to \u2014 no accounts, no servers processing data, no telemetry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is privacy-first different from privacy-focused?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Privacy-focused apps take privacy seriously but may still involve servers, accounts, and some data processing. Privacy-first (zero-knowledge) apps are architectured so privacy is guaranteed by design, not by policy or promises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash collect any analytics or telemetry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dash has zero analytics \u2014 no Segment, Amplitude, Google Analytics, Mixpanel, Sentry, or any telemetry service. The app makes zero network requests during normal operation. This is verifiable in the open-source code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data does Dash store about me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None. Dash has no server, no accounts, no sign-up process, and no way to identify you. Your notes exist only on your device. There is no cloud copy, no backup service, and no server-side record of your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Dash comply with GDPR and other privacy regulations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash\u2019s architecture naturally aligns with privacy regulations by not collecting any data. When you don\u2019t collect data, regulations like GDPR, CCPA, and data residency requirements become irrelevant. This is compliance through architecture, not legal effort.',
      },
    },
  ],
};

export default function PrivacyFirstGuidePage() {
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
      <PrivacyFirstGuideContent />
    </>
  );
}
