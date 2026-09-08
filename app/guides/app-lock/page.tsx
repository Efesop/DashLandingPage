import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'App Lock: Real Encryption Behind Your Lock Screen';
const DESCRIPTION =
  'Most app locks are a screen you can walk around. Here is the difference between a lock screen and encryption, and how app lock works in Dash.';
const PATH = '/guides/app-lock';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'app lock notes',
    'lock notes app touch id',
    'notes app face id',
    'auto lock notes app',
    'password protect app',
    'biometric lock notes',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How is Dash’s app lock different from other apps?',
    answer:
      'Most app locks draw a screen over content that is still sitting unencrypted on disk; copy the files out and the lock is irrelevant. In Dash, turning on app lock encrypts your notes with a key derived from your master password, so the data itself is unreadable, not just hidden.',
  },
  {
    question: 'Does Touch ID actually decrypt my notes?',
    answer:
      'Indirectly. The key material is held by the platform’s secure enclave, and Touch ID or Face ID authorises its release so Dash can derive the key. Your fingerprint is never the key and never leaves the secure hardware. The master password remains the fallback.',
  },
  {
    question: 'What happens if I forget the app lock password?',
    answer:
      'There is no reset. The password is the key, so without it the notes cannot be decrypted by us or by anyone else. Store it in a password manager, and keep encrypted backups.',
  },
  {
    question: 'Can I use app lock and per-note locks together?',
    answer:
      'Yes, and it is a sensible setup. App lock protects everything behind one password. A separate password on individual notes means that even someone who gets past the app lock, or watches you open it, still cannot read those notes.',
  },
  {
    question: 'What does auto-lock do?',
    answer:
      'It re-locks the app after 1, 5, 15 or 30 minutes of inactivity, so walking away from a desk does not leave your notes open. Cmd+Shift+L locks instantly when someone comes into the room, and Dash also locks when the machine sleeps.',
  },
];

const related = [
  {
    title: 'What is AES-256 encryption?',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
  },
  {
    title: 'Duress password',
    href: '/guides/duress-password',
    description: 'A second password that opens a decoy set of notes.',
  },
  {
    title: 'Notes app with password protection',
    href: '/password-protected-notes',
    description: 'Lock a note, lock the app, and what a lock screen does not do.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2025-11-20',
    dateModified: '2026-09-08',
  }),
  faqJsonLd(faqs),
];

export default function AppLockGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='Guide'
        headline='App Lock, and Why Most of Them Are Theatre'
        subheadline='A lock screen keeps out someone who respects the lock screen. Encryption keeps out everyone else.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Plenty of apps offer to lock themselves with a passcode or Face ID. In most, the lock is exactly what it looks
              like: a screen drawn over the top. The notes underneath are ordinary files. Anyone who copies them off the disk,
              restores them from a backup, or opens the app’s folder reads everything without meeting the lock at all.
            </p>
            <p>
              This guide covers the difference, and what app lock does in <a href='/'>Dash</a>.
            </p>
          </>
        }
        sections={[
          {
            id: 'screen-vs-encryption',
            heading: 'A lock screen is not encryption',
            body: (
              <>
                <p>
                  A lock screen is a check in the app’s own code: it asks for a passcode and decides whether to render your
                  content. Everything about that decision happens inside a program that is running on hardware someone else
                  is now holding. The data on disk never changed.
                </p>
                <p>
                  Encryption changes the data. Without the key, the file is noise. There is no code path to bypass, because
                  the protection is not a decision the app makes; it is a property of the bytes.
                </p>
                <p>
                  The practical test: if someone copied the app’s folder to a USB stick, could they read your notes? With a
                  lock screen, yes. With encryption, no.
                </p>
              </>
            ),
          },
          {
            id: 'how-dash-does-it',
            heading: 'How app lock works in Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>You set a master password.</strong> Dash derives a key from it with PBKDF2-SHA256 at 600,000
                    iterations and a unique salt.
                  </li>
                  <li>
                    <strong>Your notes are encrypted</strong> with AES-256-GCM under that key. What is on disk from then on is
                    ciphertext.
                  </li>
                  <li>
                    <strong>Unlocking derives the key again</strong> from the password you type, or from the secret released
                    by the secure enclave when Touch ID or Face ID succeeds.
                  </li>
                  <li>
                    <strong>Locking discards the key from memory,</strong> so the plaintext is gone until you unlock again.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'auto-lock',
            heading: 'Auto-lock, and locking on purpose',
            body: (
              <>
                <p>
                  A lock you have to remember to use is a lock you will forget. Dash re-locks itself after 1, 5, 15 or 30
                  minutes of inactivity, and when the machine sleeps. Cmd+Shift+L locks it instantly, which is the shortcut
                  worth learning: it is for the moment someone walks in, not for the end of the day.
                </p>
                <p>
                  On a laptop that leaves the house, one or five minutes is the right setting. The cost of a short timer is a
                  fingerprint; the cost of a long one is everything.
                </p>
              </>
            ),
          },
          {
            id: 'layers',
            heading: 'Layering app lock with note locks',
            body: (
              <>
                <p>
                  App lock is one password protecting everything. Per-note locks give individual notes their own password, so
                  the most sensitive material stays encrypted even after the app is open. Somebody who watches you unlock
                  Dash over your shoulder still cannot read a locked note.
                </p>
                <p>
                  For coercion rather than curiosity, the <a href='/guides/duress-password'>duress password</a> opens a decoy
                  set of notes instead of the real ones.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='A lock that changes the bytes, not just the screen.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
