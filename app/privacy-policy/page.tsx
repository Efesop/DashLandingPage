import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dash - Private Notes App',
  description:
    'Dash privacy policy. We collect zero user data. No accounts, no analytics, no telemetry. Your notes stay on your device.',
  alternates: {
    canonical: 'https://dashnote.io/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Last updated: March 10, 2026
              </p>
            </div>

            <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* Our Approach */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Approach
                </h2>
                <p>
                  Dash is a privacy-first, offline note-taking app. We collect
                  zero user data. This isn&apos;t just policy &mdash;
                  it&apos;s architecture. Dash is designed from the ground up so
                  that your notes never leave your device unless you explicitly
                  choose to share them.
                </p>
              </div>

              {/* Data We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data We Collect
                </h2>
                <p className="mb-4">
                  <strong className="text-gray-900 dark:text-white">
                    None.
                  </strong>
                </p>
                <p>
                  No accounts. No email addresses. No usage analytics. No
                  telemetry. No crash reports. No cookies. No tracking pixels.
                  Dash does not collect, transmit, or store any personal data
                  whatsoever.
                </p>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Storage
                </h2>
                <p className="mb-4">
                  All notes are stored locally on your device. Dash never syncs
                  your data to any cloud server.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      Desktop (macOS):
                    </strong>{' '}
                    JSON files stored in{' '}
                    <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                      ~/Library/Application Support/Dash/
                    </code>
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      PWA (Web):
                    </strong>{' '}
                    IndexedDB in your browser
                  </li>
                </ul>
              </div>

              {/* Optional Network Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Optional Network Features
                </h2>
                <p className="mb-6">
                  Two features use a zero-knowledge relay server when you
                  explicitly choose to use them:
                </p>

                <div className="space-y-6">
                  <div className="pl-4 border-l-2 border-blue-500/30">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Encrypted Sharing
                    </h3>
                    <p>
                      Content is encrypted client-side with AES-256-GCM before
                      upload. The relay stores only encrypted blobs it cannot
                      read. Shared notes are auto-deleted after 30 days. No
                      accounts, no logs.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-blue-500/30">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Live Collaboration
                    </h3>
                    <p>
                      The WebSocket relay forwards encrypted binary messages
                      between participants. The relay never sees plaintext
                      content.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-blue-500/30">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Auto-Updates (Desktop Only)
                    </h3>
                    <p>
                      The Mac app checks for updates in the background via
                      GitHub. No personal data is transmitted during this
                      process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Third-Party Services
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      Stripe
                    </strong>{' '}
                    &mdash; Payment processing only, at time of purchase
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      GitHub
                    </strong>{' '}
                    &mdash; Open source code hosting and app update checks
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      Deno Deploy
                    </strong>{' '}
                    &mdash; Relay server hosting for sharing and collaboration
                  </li>
                </ul>
              </div>

              {/* Open Source */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Open Source
                </h2>
                <p>
                  The full source code for Dash is available on GitHub for
                  anyone to audit. Our privacy claims are verifiable, not
                  trust-based. You can inspect exactly how your data is handled
                  at every step.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact
                </h2>
                <p>
                  For questions about this privacy policy, contact{' '}
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
