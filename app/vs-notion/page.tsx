import { Metadata } from 'next';
import VsNotionContent from './VsNotionContent';

export const metadata: Metadata = {
  title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
  description:
    'Compare Dash to Notion. Get the same note-taking power without cloud dependency, data collection, or monthly subscriptions. One-time $14.99.',
  keywords: [
    'Notion alternative',
    'Notion privacy',
    'private Notion alternative',
    'Notion without cloud',
    'offline Notion alternative',
    'Notion competitor',
    'notes app vs Notion',
    'secure Notion alternative',
  ],
  openGraph: {
    title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
    description:
      'Compare Dash to Notion. Get the same note-taking power without cloud dependency or data collection.',
    url: 'https://dashnote.io/vs-notion',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash vs Notion Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash vs Notion - Private Alternative',
    description: 'Same note-taking power without cloud dependency.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/vs-notion',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dash vs Notion Comparison',
  description: 'Compare Dash to Notion. No cloud, no tracking, no subscription.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Dash',
    description: 'Privacy-first offline notes app - alternative to Notion',
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
      name: 'Can I really replace Notion with Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For personal note-taking, absolutely. Dash has rich text editing, organization with folders and tags, search, and multiple export formats. If you need team collaboration or databases, Notion may still be better - but for private, personal notes, Dash is the more secure choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I migrate my notes from Notion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notion lets you export your workspace as Markdown files. Simply export from Notion, then import those Markdown files into Dash. Your formatting will be preserved, and you can then organize and encrypt as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash as feature-rich as Notion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash focuses on doing one thing exceptionally well: private, encrypted note-taking. It has rich text editing, folders, tags, search, and export options. It does not have databases or team features because those require cloud infrastructure that compromises privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about syncing between devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash does not offer cloud sync because that would require storing your data on servers. Instead, you can export encrypted .dashpack files and import them on other devices. This keeps you in control of your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Dash a one-time payment when Notion is subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Notion needs ongoing revenue to maintain servers that store everyone's data. Dash runs entirely on your device with no server costs, so we can offer lifetime access for a single payment.",
      },
    },
  ],
};

export default function VsNotionPage() {
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
      <VsNotionContent />
    </>
  );
}
