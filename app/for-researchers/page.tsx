import { Metadata } from 'next';
import ForResearchersContent from './ForResearchersContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Researchers | Data Privacy & Protection - Dash',
  description:
    'Meet institutional data security requirements. Keep research notes encrypted and offline. Perfect for IRB compliance, sensitive data, and academic privacy.',
  keywords: [
    'secure notes researchers',
    'research data privacy',
    'academic notes private',
    'encrypted research notes',
    'IRB compliant notes',
    'sensitive research data',
    'researcher privacy',
    'academic data protection',
  ],
  openGraph: {
    title: 'Secure Notes for Researchers | Data Privacy & Protection - Dash',
    description:
      'Meet institutional data security requirements. Keep research notes encrypted and offline.',
    url: 'https://dashnote.io/for-researchers',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash - Secure Notes for Researchers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Notes for Researchers - Dash',
    description: 'Research data privacy with military-grade encryption.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/for-researchers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dash - Secure Notes for Researchers',
  description: 'Keep research notes encrypted and offline. Perfect for IRB compliance and sensitive data.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'macOS, Web',
  audience: {
    '@type': 'Audience',
    audienceType: 'Researchers, Academics, Scientists, PhD Students',
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
    'Research data protection',
    'IRB compliance friendly',
    'Military-grade encryption',
    'Local-only storage',
    'No cloud transmission',
    'Open source auditable',
  ],
};

export default function ForResearchersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForResearchersContent />
    </>
  );
}
