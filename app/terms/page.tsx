import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Dash - Private Notes App',
  description:
    'Terms of service for Dash, the privacy-first notes app. One-time purchase, lifetime access, no subscriptions.',
  alternates: {
    canonical: 'https://dashnote.io/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Last updated: March 10, 2026
              </p>
            </div>

            <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* License */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  License
                </h2>
                <p>
                  A $14.99 one-time purchase grants lifetime access to the Dash
                  macOS application, including all future updates. There are no
                  subscriptions, no recurring fees, and no hidden charges. The
                  Web PWA version of Dash is available for free.
                </p>
              </div>

              {/* Open Source */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Open Source
                </h2>
                <p>
                  Dash source code is available on GitHub. Users may build from
                  source at any time. The paid version provides the convenience
                  of a pre-built application, automatic updates, and supports
                  ongoing development of the project.
                </p>
              </div>

              {/* No Warranty */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No Warranty
                </h2>
                <p>
                  The software is provided &ldquo;as is&rdquo; without warranty
                  of any kind, express or implied. There is no guarantee of data
                  preservation. Since all notes are stored locally on your
                  device, you are responsible for maintaining your own backups.
                </p>
              </div>

              {/* Refunds */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Refunds
                </h2>
                <p>
                  Refund requests are handled through Stripe. If you need
                  assistance, contact{' '}
                  <a
                    href="https://twitter.com/efesopoulos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    @efesopoulos
                  </a>{' '}
                  on Twitter/X for support.
                </p>
              </div>

              {/* Data Responsibility */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Responsibility
                </h2>
                <p>
                  Dash stores all data locally and has no cloud backup or
                  password recovery mechanism. You are responsible for
                  remembering your passwords and maintaining backups of your
                  data. Lost passwords cannot be recovered by anyone, including
                  the developers of Dash.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Changes
                </h2>
                <p>
                  We may update these terms from time to time. Any changes will
                  be posted on this page with an updated revision date.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact
                </h2>
                <p>
                  For questions about these terms, contact{' '}
                  <a
                    href="https://twitter.com/efesopoulos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    @efesopoulos
                  </a>{' '}
                  on Twitter/X.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
