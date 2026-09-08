import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Dash privacy policy. No analytics, no telemetry, no account for local use. Your notes stay on your device unless you choose end-to-end encrypted sharing or sync.',
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
                Last updated: September 8, 2026
              </p>
            </div>

            <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* Our Approach */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Approach
                </h2>
                <p>
                  Dash is a privacy-first, offline note-taking app. The app
                  itself collects no data about you. This isn&apos;t just
                  policy &mdash; it&apos;s architecture. Dash is designed from
                  the ground up so that your notes never leave your device
                  unless you explicitly choose to share or sync them, and then
                  only in encrypted form.
                </p>
              </div>

              {/* Data We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data We Collect
                </h2>
                <p className="mb-4">
                  <strong className="text-gray-900 dark:text-white">
                    For local note-taking: none.
                  </strong>
                </p>
                <p className="mb-4">
                  No account. No usage analytics. No telemetry. No crash
                  reports. No cookies. No tracking pixels. The app does not
                  collect, transmit, or store any personal data on its own.
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    If you subscribe to Dash Sync:
                  </strong>{' '}
                  your email address (used for the passwordless sign-in code
                  and to check your subscription), your subscription status,
                  and end-to-end encrypted vault data that our relay cannot
                  read. Details are in the Optional Network Features and
                  Third-Party Services sections below.
                </p>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Storage
                </h2>
                <p className="mb-4">
                  All notes are stored locally on your device. Dash never syncs
                  your data to any server unless you turn on Dash Sync, and
                  then only as ciphertext encrypted on your device.
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
                      iOS app:
                    </strong>{' '}
                    On-device app storage (if you enable Dash Sync, the vault
                    key is kept in the iOS Keychain)
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
                  Two optional features use a zero-knowledge relay server when
                  you explicitly choose to use them:
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
                      Dash Sync (optional subscription)
                    </h3>
                    <p>
                      Notes, folders, tags, attachments and version history
                      are encrypted on your device with a vault key that never
                      leaves your devices. The relay stores only ciphertext,
                      plus the sign-in email and subscription status needed to
                      verify your entitlement. Deleted notes sync as encrypted
                      tombstones and are purged after 30 days.
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
                    &mdash; Payment processing for the Mac desktop app
                    one-time purchase and the Dash Sync subscription. Stripe
                    receives your email, billing address, and card. We never
                    see your card details. For active sync subscribers, our
                    server stores your email, your Stripe customer/subscription
                    IDs, and your subscription status so we can verify the
                    sync entitlement on each device.
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      RevenueCat
                    </strong>{' '}
                    &mdash; Used only on the iOS app to process Dash Sync
                    subscriptions via Apple In-App Purchase. RevenueCat
                    receives an anonymous device-generated ID and your
                    Apple-provided subscription receipt. They do not receive
                    your email or any note content.
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      Resend
                    </strong>{' '}
                    &mdash; Sends sign-in codes (6-digit, one per session)
                    and one-time transactional notices. We never use Resend
                    for marketing. Resend sees only your email address and
                    the short code body.
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      GitHub
                    </strong>{' '}
                    &mdash; Open source code hosting and Mac app update
                    checks.
                  </li>
                  <li>
                    <strong className="text-gray-900 dark:text-white">
                      Deno Deploy
                    </strong>{' '}
                    &mdash; Hosts the relay server. The relay stores
                    end-to-end encrypted vault blobs (ciphertext only), per-
                    request timestamps + IPs for abuse prevention, and (for
                    sync subscribers) the entitlement records described
                    above. The relay never has access to your vault key or
                    note plaintext.
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
