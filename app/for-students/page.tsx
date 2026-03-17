import { Metadata } from 'next';
import ForStudentsContent from './ForStudentsContent';

export const metadata: Metadata = {
  title: 'Private Notes for Students | No Tracking, No Data Mining - Dash',
  description:
    'Your study notes should not train AI models or feed ads. Private, encrypted notes for students who value their privacy. One-time $14.99, no subscriptions.',
  keywords: [
    'private notes for students',
    'secure study notes',
    'student note taking privacy',
    'no tracking notes app',
    'encrypted notes student',
    'private note taking app',
    'notes app no data collection',
    'student privacy notes',
  ],
  openGraph: {
    title: 'Private Notes for Students | No Tracking, No Data Mining - Dash',
    description:
      'Your study notes should not train AI models. Private, encrypted notes for students.',
    url: 'https://dashnote.io/for-students',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Private Notes for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Notes for Students - Dash',
    description: 'Your study notes should not train AI or feed ads.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-students',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Private Notes for Students',
  description: 'Private, encrypted notes for students who value their privacy. No tracking, no data mining.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Students, University Students, Graduate Students',
  },
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'USD',
  },
  featureList: [
    'Zero data collection',
    'No AI training on your content',
    'AES-256 encryption',
    'Offline functionality',
    'One-time payment',
    'No subscriptions',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why should students pay for a notes app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Free apps monetize you through data collection and ads. The $14.99 one-time payment means you're the customer, not the product. No data mining, no AI training, no privacy compromises. Plus, it's cheaper than one month of most subscriptions - for lifetime access.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this for exam notes and sensitive material?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Password-protect any note with AES-256 encryption - the same standard used by banks. Even if someone accesses your device, encrypted notes are unreadable without your password.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I organize notes for multiple classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create folders for each class or subject. Use tags for cross-cutting topics (like "exam-prep" or "important"). The instant search finds content across all your notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about syncing between my laptop and phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash doesn't have cloud sync because that requires storing your data on servers. You can export encrypted .dashpack files to move notes between devices when needed. This keeps you in control.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is this available on iOS/Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash is available as a Progressive Web App (PWA) that works in mobile browsers. The native Mac app provides the best experience. All versions maintain the same privacy standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why not just use Apple Notes or Google Keep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Apple Notes syncs to iCloud (Apple's servers). Google Keep is deeply integrated with Google's data ecosystem. Both companies have access to your notes. Dash stores everything locally with optional encryption.",
      },
    },
  ],
};

export default function ForStudentsPage() {
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
      <ForStudentsContent />
    </>
  );
}
