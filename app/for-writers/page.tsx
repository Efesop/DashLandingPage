import { Metadata } from 'next';
import ForWritersContent from './ForWritersContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Writers | Protect Your Manuscripts - Dash',
  description:
    'Keep your unpublished manuscripts truly private. AES-256 encrypted notes that never touch the cloud. No leaks, no theft, no compromises.',
  keywords: [
    'notes app for writers',
    'secure writing app',
    'manuscript protection',
    'private writing app',
    'encrypted notes for authors',
    'writer privacy',
    'secure note taking for writers',
    'protect unpublished work',
  ],
  openGraph: {
    title: 'Secure Notes for Writers | Protect Your Manuscripts - Dash',
    description:
      'Keep your unpublished manuscripts truly private. AES-256 encrypted notes that never touch the cloud.',
    url: 'https://dashnote.io/for-writers',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Secure Notes for Writers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Notes for Writers - Dash',
    description: 'Your unpublished work deserves AES-256 protection.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-writers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Secure Notes for Writers',
  description: 'Protect your manuscripts with AES-256 encrypted notes that never touch the cloud.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Writers, Authors, Novelists, Screenwriters',
  },
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'Manuscript protection',
    'AES-256 encryption',
    'No cloud storage',
    'Distraction-free writing',
    'Offline functionality',
    'Zero tracking',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I organize a novel in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use folders for each project, with subfolders for chapters, characters, and research. Tag notes for easy filtering. You can keep your entire novel organized in one place, all encrypted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export to Word for my editor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dash exports to Word (.docx), PDF, and Markdown formats. Export when you need to share, keep the encrypted originals in Dash.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I write on multiple devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash doesn't have cloud sync because that would require storing your data on servers. Instead, export encrypted .dashpack files to move between devices. You control the transfer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is this better than Scrivener for privacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scrivener is excellent for novel organization but stores files unencrypted. Dash offers built-in AES-256 encryption for any note. If privacy is your priority, Dash provides security Scrivener lacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my writing train AI models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely not. Dash is 100% offline - your writing never leaves your device. There are no servers to send data to, no AI features that process your content, no way for your manuscripts to train any models.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I forget my encryption password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Encrypted notes are truly encrypted - there's no backdoor, no recovery option, no way for us to help. This is by design for true security. We recommend keeping a secure backup of your password.",
      },
    },
  ],
};

export default function ForWritersPage() {
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
      <ForWritersContent />
    </>
  );
}
