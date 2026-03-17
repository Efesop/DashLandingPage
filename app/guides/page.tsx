import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Timer, WifiOff, ShieldCheck, Fingerprint, ShieldAlert, Link as LinkIcon, Coins } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Guides | Learn About Privacy, Encryption & Security - Dash',
  description:
    'In-depth guides on encryption, self-destructing notes, offline-first architecture, and privacy-first design. Learn how Dash protects your data.',
  keywords: [
    'encryption guide',
    'self-destructing notes',
    'offline-first apps',
    'privacy-first design',
    'AES-256 encryption',
    'note taking security',
    'app lock notes',
    'biometric notes app',
  ],
  openGraph: {
    title: 'Guides | Learn About Privacy, Encryption & Security - Dash',
    description:
      'In-depth guides on encryption, self-destructing notes, offline-first architecture, and privacy-first design.',
    url: 'https://dashnote.io/guides',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides - Dash',
    description: 'Learn about encryption, privacy, and security in note-taking.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/guides',
  },
};

const guides = [
  {
    slug: 'encryption',
    title: 'Encryption',
    subtitle: 'AES-256 Encryption & How Dash Protects Your Notes',
    description:
      'Learn how AES-256-GCM encryption works, what PBKDF2 key derivation is, and how Dash encrypts your pages with zero-knowledge client-side encryption.',
    icon: Lock,
    color: 'blue',
  },
  {
    slug: 'self-destructing-notes',
    title: 'Self-Destructing Notes',
    subtitle: 'Ephemeral Notes That Delete Themselves',
    description:
      'Understand what self-destructing notes are, why they\u2019re useful for sensitive information, and how Dash implements timed automatic deletion.',
    icon: Timer,
    color: 'orange',
  },
  {
    slug: 'offline-first',
    title: 'Offline-First Apps',
    subtitle: 'How Offline-First Architecture Keeps Your Data Local',
    description:
      'Learn what offline-first architecture means, how it compares to cloud-based apps, and how Dash stores everything on your device.',
    icon: WifiOff,
    color: 'green',
  },
  {
    slug: 'privacy-first-note-taking',
    title: 'Privacy-First Note Taking',
    subtitle: 'What Privacy-First Means & Why It Matters',
    description:
      'Explore what privacy-first design means, zero-knowledge architecture, and how Dash ensures your data never leaves your device.',
    icon: ShieldCheck,
    color: 'purple',
  },
  {
    slug: 'app-lock',
    title: 'App Lock',
    subtitle: 'Real Encryption, Not Just a Lock Screen',
    description:
      'Learn how Dash\u2019s app lock uses AES-256-GCM to encrypt all your notes on disk, with Touch ID integration and auto-lock timers.',
    icon: Fingerprint,
    color: 'indigo',
  },
  {
    slug: 'duress-password',
    title: 'Decoy Password',
    subtitle: 'Silent Protection Under Coercion',
    description:
      'Learn how Dash\u2019s decoy password silently hides your data behind convincing decoy notes when you\u2019re forced to unlock. Plausible deniability, built in.',
    icon: ShieldAlert,
    color: 'red',
  },
  {
    slug: 'page-linking',
    title: 'Page Linking',
    subtitle: 'Wiki-Style Links Between Your Notes',
    description:
      'Connect your notes with [[ wiki links, build a personal knowledge base, and navigate between pages instantly.',
    icon: LinkIcon,
    color: 'cyan',
  },
  {
    slug: 'seed-phrase-storage',
    title: 'Seed Phrase Storage',
    subtitle: 'Secure Crypto Recovery Phrase Backup',
    description:
      'Store crypto wallet seed phrases in a secure numbered grid with BIP-39 validation and AES-256 encryption.',
    icon: Coins,
    color: 'amber',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    icon: 'text-blue-600 dark:text-blue-400',
    border: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    icon: 'text-orange-600 dark:text-orange-400',
    border: 'group-hover:border-orange-300 dark:group-hover:border-orange-700',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    icon: 'text-green-600 dark:text-green-400',
    border: 'group-hover:border-green-300 dark:group-hover:border-green-700',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    icon: 'text-purple-600 dark:text-purple-400',
    border: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    icon: 'text-indigo-600 dark:text-indigo-400',
    border: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-700',
  },
  red: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    icon: 'text-red-600 dark:text-red-400',
    border: 'group-hover:border-red-300 dark:group-hover:border-red-700',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    icon: 'text-cyan-600 dark:text-cyan-400',
    border: 'group-hover:border-cyan-300 dark:group-hover:border-cyan-700',
  },
  amber: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    icon: 'text-amber-600 dark:text-amber-400',
    border: 'group-hover:border-amber-300 dark:group-hover:border-amber-700',
  },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Guides
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              In-depth explanations of the concepts behind Dash and how they protect your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => {
              const colors = colorClasses[guide.color];
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className={`group block bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg ${colors.border}`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <guide.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {guide.title}
                  </h2>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {guide.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
