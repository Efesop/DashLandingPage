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
  featureList: [
    'Research data protection',
    'IRB compliance friendly',
    'Military-grade encryption',
    'Local-only storage',
    'No cloud transmission',
    'Open source auditable',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Dash suitable for IRB-regulated research?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash's local-only storage and strong encryption can help meet many IRB data security requirements. Since data never leaves your device and can be encrypted, it provides a high level of protection. However, always consult your IRB and institution's specific requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this for HIPAA-related research?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dash's encryption and local storage align with many HIPAA security principles, but we cannot provide a formal HIPAA compliance certification. For healthcare research, work with your institution's compliance office to determine if Dash meets your specific requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I share research notes with collaborators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Export notes to Word, PDF, or Markdown for sharing. For sensitive data, export as encrypted .dashpack files - collaborators need Dash and your password to decrypt. This keeps you in control of how data is shared.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I verify the security claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dash is fully open source on GitHub. The encryption implementation uses standard cryptographic libraries (AES-256-GCM, PBKDF2). Security researchers can audit the code directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about backing up research notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notes are stored in your local application data folder. Include this in your regular backup routine. You can also export encrypted .dashpack bundles as additional backups. With proper backups, you maintain data integrity without cloud dependency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my institution need to approve this software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "That depends on your institution's policies. Dash's local-only, encrypted storage typically satisfies institutional security requirements more easily than cloud-based alternatives. Check with your IT department or data governance office.",
      },
    },
  ],
};

export default function ForResearchersPage() {
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
      <ForResearchersContent />
    </>
  );
}
