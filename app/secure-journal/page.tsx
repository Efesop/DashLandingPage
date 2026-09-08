import { Metadata } from 'next';
import SecureJournalContent from './SecureJournalContent';

export const metadata: Metadata = {
  title: 'Private Journal App | Encrypted Diary That Stays Yours - Dash',
  description:
    'Your private thoughts deserve real privacy. AES-256 encrypted journal that stays on your device unless you choose to sync it. No subscription required, no tracking, truly private.',
  keywords: [
    'private journal app',
    'encrypted diary',
    'secure digital journal',
    'private diary app',
    'encrypted journal mac',
    'offline journal app',
    'secure journaling',
    'private thoughts app',
  ],
  openGraph: {
    title: 'Private Journal App | Encrypted Diary That Stays Yours - Dash',
    description:
      'Your private thoughts deserve real privacy. AES-256 encrypted journal that never syncs to the cloud.',
    url: 'https://dashnote.io/secure-journal',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Private Journal App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Journal App - Dash',
    description: 'Your diary, truly private. Encrypted and offline.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/secure-journal',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Private Journal App',
  description: 'AES-256 encrypted journal that never syncs to the cloud. Your diary, truly private.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'Private journaling',
    'AES-256 encryption',
    'Sync optional, end-to-end encrypted',
    'Offline diary',
    'One-time payment',
    'Zero tracking',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is this different from Day One or Journey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day One and Journey are excellent journal apps, but they sync to the cloud and require subscriptions ($35-50/year) for encryption. Dash stores everything locally with built-in encryption for a one-time $14.99, and sync is optional and end-to-end encrypted rather than the default. Nothing leaves your device unless you decide it should.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add photos to my journal entries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Add images inline, or attach photos (JPEG, PNG, GIF, WebP) and PDFs to any entry from the + block menu or by drag-and-drop — up to 10 MB per file, stored on your device alongside the entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I want to journal on multiple devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash Sync is optional: turn it on and your journal stays in step across devices, encrypted on your device before upload so the server only ever holds ciphertext. Or keep it fully offline and export encrypted .dashpack files to transfer between devices. You control exactly when and how your journal moves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my therapist or partner read my journal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you share your encryption password. Without it, encrypted entries are completely unreadable - even to forensic analysis. You have complete control over who sees what.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I forget my encryption password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Encrypted entries cannot be recovered without the password. There is no backdoor - this is by design for true security. We recommend keeping your password in a secure password manager.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is journaling in Dash good for mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research shows journaling benefits mental health by processing emotions, reducing anxiety, and improving self-awareness. The privacy of encrypted journaling lets you be completely honest, which maximizes these benefits.',
      },
    },
  ],
};

export default function SecureJournalPage() {
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
      <SecureJournalContent />
    </>
  );
}
