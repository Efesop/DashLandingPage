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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '100',
  },
  featureList: [
    'Zero data collection',
    'No AI training on your content',
    'Military-grade encryption',
    'Offline functionality',
    'One-time payment',
    'No subscriptions',
  ],
};

export default function ForStudentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForStudentsContent />
    </>
  );
}
