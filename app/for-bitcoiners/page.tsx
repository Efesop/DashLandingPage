import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Private Notes App for Bitcoiners & Seed Phrases';
const DESCRIPTION =
  'A private notes app for bitcoiners: no account, no telemetry, AES-256 on any note, and an honest answer about where a seed phrase should actually live.';
const PATH = '/for-bitcoiners';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'notes app for bitcoiners',
    'private notes app bitcoin',
    'seed phrase storage',
    'crypto seed phrase storage',
    'encrypted notes no account',
    'self custody notes app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Is Dash safe for storing a seed phrase?',
    answer:
      'A seed phrase belongs on metal or paper in a safe place, not on an internet-connected computer. Any hot device can be compromised by malware that reads what you type or what is on screen, and no app-level encryption survives that. Use Dash for what surrounds the seed: which wallet is which, derivation paths, passphrase hints, recovery procedures and the instructions your family would need. Keep the words themselves offline.',
  },
  {
    question: 'Why should I trust this app?',
    answer:
      'Do not trust it, check it. Dash is open source under the MIT licence, so the encryption is on GitHub for you to read. It uses AES-256-GCM with keys derived by PBKDF2-SHA256 at 600,000 iterations, has no account, and makes no network requests for your content unless you deliberately turn on sync.',
  },
  {
    question: 'What if the company disappears?',
    answer:
      'Your notes are files on your device and stay readable in the app you already have. The source is MIT licensed, so anyone can build it. Export to Markdown, PDF, DOCX or an encrypted .dashpack backup at any time. Nothing about Dash depends on us being around next year.',
  },
  {
    question: 'Can I run it air-gapped?',
    answer:
      'Yes. Dash works with no connection and needs no account. On a machine that never goes online, install it once and it functions completely, which is the sensible setup for anything close to key material.',
  },
  {
    question: 'How is the encryption implemented?',
    answer:
      'A locked note is encrypted with AES-256-GCM, an authenticated mode, so tampering is detected rather than silently decrypted. The key is derived from your password with PBKDF2-SHA256 at 600,000 iterations and a unique salt per note. Salts and keys come from the platform’s cryptographically secure random generator and never leave the device.',
  },
  {
    question: 'Is there any telemetry or analytics?',
    answer:
      'None in the app. There is no account, no usage reporting and no crash telemetry tied to your content. With sync off, the app makes no requests carrying your notes at all.',
  },
];

const related = [
  {
    title: 'Seed phrase storage',
    href: '/guides/seed-phrase-storage',
    description: 'How to store a recovery phrase properly, and what not to do.',
  },
  {
    title: 'Duress password',
    href: '/guides/duress-password',
    description: 'A second password that opens a decoy set of notes.',
  },
  {
    title: 'How Dash encrypts notes',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
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

export default function ForBitcoinersPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='KeyRound'
        badgeText='For bitcoiners'
        headline='Notes With the Same Values as Self-Custody'
        subheadline='No account, no telemetry, no server unless you ask. Plus an honest answer about the one thing that should never go in a notes app.'
        updated='September 2026'
        intro={
          <>
            <p>
              If you hold your own keys, you already know the argument. A service that holds something for you is a service
              that can lose it, be compelled to hand it over, or change the terms. The same logic applies to the notes around
              your setup: which wallet is which, what the passphrase scheme is, how someone would recover funds if you were
              not here.
            </p>
            <p>
              <a href='/'>Dash</a> keeps those notes on your own device with no account and real encryption. It also starts by
              telling you what not to put in it.
            </p>
          </>
        }
        sections={[
          {
            id: 'seed-phrases',
            heading: 'Where a seed phrase should actually live',
            body: (
              <>
                <p>
                  <strong>Not on a computer that goes online.</strong> Not in Dash, not in a password manager, not in a photo,
                  not in an email to yourself. A hot device can be compromised by malware that reads the screen or the
                  keyboard, and encryption at the application level does nothing against that. Twelve or twenty-four words on
                  a stamped metal plate, stored somewhere physically secure, is still the right answer, with a second copy in
                  a second location.
                </p>
                <p>
                  We sell a notes app and we are telling you not to use it for the most valuable string you own. That is the
                  same reasoning that made you take custody in the first place. The longer version is in our{' '}
                  <a href='/guides/seed-phrase-storage'>seed phrase storage guide</a>.
                </p>
              </>
            ),
          },
          {
            id: 'what-to-keep',
            heading: 'What does belong in Dash',
            body: (
              <>
                <p>
                  Everything around the keys, which is more than people expect and is usually scattered across a dozen
                  places:
                </p>
                <ul>
                  <li>
                    <strong>Wallet inventory.</strong> Which device holds which wallet, what firmware version, when it was
                    last checked.
                  </li>
                  <li>
                    <strong>Derivation paths and address types,</strong> the details that make recovery in a different wallet
                    possible rather than a weekend of guessing.
                  </li>
                  <li>
                    <strong>Passphrase hints,</strong> never the passphrase. A hint only you could follow.
                  </li>
                  <li>
                    <strong>Where the backups are,</strong> described so that a trusted person could find them without the
                    note itself being a treasure map.
                  </li>
                  <li>
                    <strong>An inheritance procedure:</strong> what someone should do, in order, if you are not able to.
                  </li>
                  <li>
                    <strong>Exchange and account records,</strong> tax lots and cost basis, and the reasoning behind past
                    decisions.
                  </li>
                </ul>
                <p>Lock all of it. A note describing where your metal backup lives deserves the same care as the backup.</p>
              </>
            ),
          },
          {
            id: 'properties',
            heading: 'The properties that matter',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No account.</strong> Nothing to sign into, no email on a list, no profile to correlate with
                    anything else.
                  </li>
                  <li>
                    <strong>Offline by default.</strong> With sync off, Dash makes no requests carrying your content. It runs
                    on an air-gapped machine without complaint.
                  </li>
                  <li>
                    <strong>Verifiable encryption.</strong> AES-256-GCM, PBKDF2-SHA256 at 600,000 iterations, unique salts,
                    keys generated and kept on the device, all of it readable on GitHub under the MIT licence.
                  </li>
                  <li>
                    <strong>A duress password</strong> that opens a decoy set of notes, for the demand you hope never comes.
                  </li>
                  <li>
                    <strong>No lock-in.</strong> Export to Markdown, PDF, DOCX or an encrypted backup whenever you like.
                  </li>
                  <li>
                    <strong>Optional sync, end-to-end encrypted.</strong> Off unless you switch it on; when on, the relay
                    stores ciphertext encrypted with a key that never leaves your devices.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes with the same values as self-custody. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your keys, your coins, your notes.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
