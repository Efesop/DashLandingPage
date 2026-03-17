import { Metadata } from 'next';
import VsObsidianContent from './VsObsidianContent';

export const metadata: Metadata = {
  title: 'Dash vs Obsidian: Encrypted Notes Alternative | Built-in Security',
  description:
    'Compare Dash to Obsidian. Get true encryption built-in, not as an add-on. No sync subscription, no plugins needed. One-time $14.99 for AES-256 security.',
  keywords: [
    'Obsidian alternative',
    'Obsidian encryption',
    'Obsidian privacy',
    'secure Obsidian alternative',
    'Obsidian vs encrypted notes',
    'offline notes app',
    'encrypted markdown notes',
    'Obsidian competitor',
  ],
  openGraph: {
    title: 'Dash vs Obsidian: Encrypted Notes Alternative | Built-in Security',
    description:
      'Compare Dash to Obsidian. True encryption built-in, not as an add-on. No sync subscription needed.',
    url: 'https://dashnote.io/vs-obsidian',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Obsidian Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Obsidian - Encrypted Alternative',
    description: 'True encryption built-in. No plugins, no subscriptions.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-obsidian',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Obsidian Comparison',
  description: 'Compare Dash to Obsidian. Built-in encryption, no subscriptions, no plugins.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first encrypted notes app - alternative to Obsidian',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'macOS, Web',
    offers: {
      '@type': 'Offer',
      price: '14.99',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Dash as powerful as Obsidian?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Obsidian is designed for knowledge management with backlinks, graphs, and hundreds of plugins. Dash is designed for private note-taking with built-in encryption. If you need a second brain with complex linking, Obsidian may be better. If you need secure, private notes that just work, Dash is the answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I migrate my Obsidian notes to Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your Obsidian vault contains Markdown files. Simply import those .md files into Dash. Basic formatting will be preserved. You can then add encryption to any notes containing sensitive information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Obsidian not have built-in encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Obsidian stores notes as plain .md files so they work with any text editor. This is great for portability but means your notes are readable by anyone with access to your computer. Dash uses a different approach - your notes are always protected.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about Obsidian Sync end-to-end encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Obsidian Sync ($8/month) does offer E2E encryption for synced notes. However, your local vault files remain unencrypted plain text. Dash encrypts notes on your device, so even local files are protected without any subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash open source like Obsidian plugins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Obsidian itself is closed source, though many plugins are open source. Dash is fully open source - the complete app code is on GitHub for anyone to audit. This is essential for verifying security claims.',
      },
    },
  ],
};

export default function VsObsidianPage() {
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
      <VsObsidianContent />
    </>
  );
}
