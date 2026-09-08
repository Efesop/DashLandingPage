import type { Metadata } from 'next';
import ShareContent from './ShareContent';

export const metadata: Metadata = {
  title: 'Encrypted Sharing | Dash',
  description:
    'Share notes securely with end-to-end encryption. Zero-knowledge relay, auto-deleted after 30 days.',
  keywords:
    'encrypted sharing, e2e encrypted notes, secure note sharing, zero-knowledge sharing, encrypted note links',
  openGraph: {
    title: 'Encrypted Sharing | Dash',
    description:
      'Share notes securely with end-to-end encryption. Zero-knowledge relay, auto-deleted after 30 days.',
    url: 'https://dashnote.io/share',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Encrypted Sharing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encrypted Sharing - Dash',
    description:
      'E2E encrypted sharing. Zero-knowledge relay, auto-deleted after 30 days.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/share',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Encrypted Sharing',
  description: 'Share notes securely with end-to-end encrypted links that a zero-knowledge relay cannot read.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, iOS, Web',
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'E2E encrypted sharing',
    'Zero-knowledge relay',
    '30-day auto-deletion',
    'Optional password protection',
    'QR code sharing',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does encrypted sharing work in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notes are encrypted client-side with AES-256-GCM before leaving your device. For short notes, the encrypted data is embedded directly in the URL fragment. For larger notes, the encrypted blob is uploaded to a zero-knowledge relay server with a 30-day TTL. The encryption key lives in the URL fragment and is never sent to the server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the relay server read my shared notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The relay server operates on a zero-knowledge basis. Your notes are encrypted before they are uploaded, and the encryption key is stored in the URL fragment which is never sent to the server. The relay only handles encrypted blobs it cannot read.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are shared notes stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shared notes on the relay server are auto-deleted after 30 days. If your note is small enough to fit in the URL fragment, it is never stored on any server at all — the encrypted data travels entirely within the link itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I password-protect a shared note?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can add a separate password for extra security, allowing you to share the link and the password through different channels. You can also share the password via a QR code for convenient in-person exchange.',
      },
    },
  ],
};

export default function SharePage() {
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
      <ShareContent />
    </>
  );
}
