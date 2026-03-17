import type { Metadata } from 'next';
import Link from 'next/link';
import { GitBranch, ExternalLink, Code, History } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Changelog | Dash - Version History & Updates',
  description:
    'Track every update to Dash. Full release history, new features, bug fixes, and improvements. Dash is open source and actively maintained.',
  keywords: [
    'Dash changelog',
    'Dash updates',
    'Dash release history',
    'Dash version history',
    'Dash new features',
    'open source notes app updates',
  ],
  openGraph: {
    title: 'Changelog | Dash - Version History & Updates',
    description:
      'Track every update to Dash. Full release history, new features, bug fixes, and improvements.',
    url: 'https://dashnote.io/changelog',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Dash Changelog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog - Dash',
    description: 'Track every update to Dash. Full release history and version notes.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/changelog',
  },
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 border bg-white dark:bg-gray-900 border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 shadow-lg shadow-blue-500/5 mb-6">
              <History className="mr-2 h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Version History</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Changelog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Track every update to Dash. Full release history available on GitHub.
            </p>
          </div>

          {/* GitHub Releases Link */}
          <div className="max-w-2xl mx-auto mb-16">
            <Link
              href="https://github.com/Efesop/rich-text-editor/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                View All Releases on GitHub
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                Every release includes detailed notes on new features, improvements, and bug fixes. Browse the full history on our GitHub repository.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                Go to GitHub Releases
                <ExternalLink className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Open Source Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Open Source & Actively Maintained
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Dash is fully open source. Every line of code is available for review on GitHub. We believe transparency is essential for a privacy-first app — you should never have to trust a black box with your notes.
                  </p>
                  <Link
                    href="https://github.com/Efesop/rich-text-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    View source on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
