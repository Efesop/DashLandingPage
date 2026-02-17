import { Metadata } from 'next';
import ForJournalistsContent from './ForJournalistsContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
  description:
    'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud. No accounts, no tracking, no subpoena risk.',
  keywords: [
    'notes app for journalists',
    'secure notes for reporters',
    'journalist note taking',
    'encrypted notes journalism',
    'source protection notes',
    'investigative journalist tools',
    'secure reporting tools',
    'offline notes for journalists',
  ],
  openGraph: {
    title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
    description:
      'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud.',
    url: 'https://dashnote.io/for-journalists',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Secure Notes for Journalists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Notes for Journalists - Dash',
    description: 'Protect your sources. Military-grade encrypted notes.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-journalists',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Secure Notes for Journalists',
  description: 'Protect your sources with military-grade encrypted notes that never touch the cloud.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Journalists, Reporters, Investigative Journalists',
  },
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '100',
  },
  featureList: [
    'Source protection',
    'Military-grade encryption',
    'No cloud storage',
    'No subpoena risk',
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
      name: 'Can my notes be subpoenaed if they are in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash stores notes only on your local device with optional AES-256 encryption. Unlike cloud-based apps where a third party holds your data, there is no company server to subpoena. Your encrypted notes can only be accessed with your password, which you are not obligated to provide in many jurisdictions (consult legal counsel for your specific situation).",
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from using encrypted cloud storage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Encrypted cloud storage still sends your data to external servers, creating metadata trails and potential access points. Dash never transmits data anywhere - your notes exist only on your device. There is no network traffic to intercept, no server to hack, no company that can be compelled to hand over data.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Password-protected notes remain encrypted. Without your password, they are unreadable - even to forensic analysis. We recommend keeping encrypted backups (.dashpack files) in a secure location. Non-encrypted notes would be accessible, so we recommend encrypting sensitive material.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I share notes securely with colleagues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Export notes as encrypted .dashpack files that can only be opened with Dash and your chosen password. Share via secure channels of your choice. The recipient needs Dash and the password to decrypt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dash open source? Can I verify the security claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Dash is fully open source. The complete source code is available on GitHub for security researchers, journalists, or anyone to audit. We believe transparency is essential for trust in security tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash work on mobile for field reporting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash is available as a Progressive Web App (PWA) that works on iOS and Android browsers. The native Mac app provides the best experience with automatic updates. All versions maintain the same security standards.',
      },
    },
  ],
};

export default function ForJournalistsPage() {
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
      <ForJournalistsContent />
    </>
  );
}
