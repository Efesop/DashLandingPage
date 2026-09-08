import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Encrypted Notes App with AES-256 for Mac & iPhone';
const DESCRIPTION =
  'An encrypted notes app that locks any note or the whole app with AES-256-GCM and PBKDF2. Works offline on Mac, iPhone and the web; no account needed.';
const PATH = '/encrypted-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'encrypted notes app',
    'encrypted notes',
    'end to end encrypted note taking app',
    'encrypted note taking app',
    'AES-256 notes',
    'secure notes app',
    'password protected notes',
    'encrypted notes mac',
    'encrypted notes iphone',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What encryption algorithm does Dash use?',
    answer:
      'Dash uses AES-256-GCM: the Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode, which authenticates the data as well as encrypting it. It is the standard banks and governments rely on.',
  },
  {
    question: 'How are encryption keys generated?',
    answer:
      'When you set a password on a note, Dash derives the key from it with PBKDF2-SHA256 at 600,000 iterations and a unique salt for that note. Stretching the password that many times makes guessing it by brute force impractical.',
  },
  {
    question: 'Can Dash decrypt my notes?',
    answer:
      'No. By default there is no server and no account, so there is nothing for us to hold. If you turn on the optional Dash Sync, notes are encrypted on your device before upload with a key that never leaves your devices; the relay stores ciphertext it cannot read. Only your password opens a locked note.',
  },
  {
    question: 'What happens if I forget my encryption password?',
    answer:
      'There is no way to recover a locked note without its password. That is by design: it means nobody else can recover it either. Use a password manager and keep encrypted backups.',
  },
  {
    question: 'Are all notes encrypted by default?',
    answer:
      'No. Locking is per note, so casual notes stay quick to open and sensitive ones get a password. You can also lock the whole app behind a master password with Touch ID or Face ID.',
  },
  {
    question: 'Can I verify that the encryption is sound?',
    answer:
      'Yes. Dash is open source under the MIT licence. You can read the encryption code on GitHub or have a security professional review it. Transparency is the only honest basis for trust in a security tool.',
  },
];

const related = [
  {
    title: 'How Dash encrypts notes',
    href: '/guides/encryption',
    description: 'AES-256-GCM, key derivation and salts, explained without hand-waving.',
  },
  {
    title: 'Self-destructing notes',
    href: '/guides/self-destructing-notes',
    description: 'Notes that delete themselves when a timer runs out.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Biometric protection on top of encryption, with auto-lock timers.',
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

export default function EncryptedNotesPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='AES-256-GCM'
        headline='An Encrypted Notes App With Real AES-256 Protection'
        subheadline='Lock any note, or the whole app, with encryption that only your password opens. No backdoors, no master keys, no account.'
        updated='September 2026'
        intro={
          <>
            <p>
              Most apps that call themselves encrypted mean something narrow: the connection to their server is encrypted, and
              the disk their server sits on is encrypted. The company still holds the key. An encrypted notes app worth the
              name puts the key in your hands and nowhere else.
            </p>
            <p>
              <a href='/'>Dash</a> does that on the device. Lock a note and it is encrypted with AES-256-GCM using a key
              derived from your password; nothing about that note is readable to anyone without it, including us. Notes stay
              on your Mac or iPhone by default, and when you choose to sync they are encrypted before they leave.
            </p>
          </>
        }
        sections={[
          {
            id: 'why-it-matters',
            heading: 'Why note encryption matters',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Breaches are routine.</strong> Cloud note services are attractive targets because they hold personal
                    information for millions of people in one place. A note that exists only on your device is not in that pile.
                  </li>
                  <li>
                    <strong>Privacy is not suspicious.</strong> A journal, a password hint, a medical detail, a draft you are not
                    ready to share: none of it needs a justification, and none of it should be readable by a company.
                  </li>
                  <li>
                    <strong>Trust should be checkable.</strong> A lock screen is not encryption. Encryption you can audit is.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'how-it-works',
            heading: 'How Dash encrypts your notes',
            body: (
              <>
                <ul>
                  <li>
                    <strong>AES-256-GCM.</strong> Each locked note is encrypted with a 256-bit key in an authenticated mode, so a
                    tampered file is detected rather than silently decrypted.
                  </li>
                  <li>
                    <strong>PBKDF2 key derivation.</strong> Your password is stretched through 600,000 iterations of
                    PBKDF2-SHA256 with a unique salt per note before it becomes a key.
                  </li>
                  <li>
                    <strong>Keys made on your device.</strong> Salts and keys come from the platform’s cryptographically secure
                    random generator and never leave the machine.
                  </li>
                  <li>
                    <strong>No server by default.</strong> Without sync there is no account and nothing is uploaded. With sync,
                    the server only ever sees ciphertext.
                  </li>
                  <li>
                    <strong>Open source.</strong> The entire codebase is public under the MIT licence. Do not trust us; read it.
                  </li>
                  <li>
                    <strong>Encrypted export.</strong> Back up or move notes as an encrypted .dashpack file that only your
                    password opens.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'end-to-end-sync',
            heading: 'An end-to-end encrypted note taking app, when you sync',
            body: (
              <>
                <p>
                  Dash is offline by default, and most people leave it that way. If you want the same notes on your Mac, iPhone,
                  iPad and the web, Dash Sync is an optional subscription that keeps them in step without giving anyone a
                  readable copy.
                </p>
                <p>
                  Each change is encrypted on your device with a vault key before it is uploaded. That key is created on your
                  first device and passed to the others by pairing them with a QR code and a short one-time code; it never
                  touches the relay. The relay stores and forwards encrypted blobs it cannot open, for notes, folders, tags,
                  attachments and version history alike. Deleted notes go to a trash on every device for 30 days, then
                  disappear.
                </p>
                <p>
                  Dash Sync costs $4.99 a month or $47.99 a year with a seven-day free trial. Turn it off and Dash stops talking
                  to the server entirely; your notes stay where they are.
                </p>
              </>
            ),
          },
          {
            id: 'one-click',
            heading: 'Encrypt any note in one click',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Write the note.</strong> A regular note is a file on your device, readable in the app like any
                    other.
                  </li>
                  <li>
                    <strong>Lock it.</strong> Choose Lock, set a password, and the note is encrypted with AES-256-GCM on the
                    spot. Enable Touch ID or Face ID and you will rarely type the password again.
                  </li>
                  <li>
                    <strong>Open it when you need it.</strong> Until then it shows only a title and a lock. Lock the whole app
                    too, and set it to lock itself after 1, 5, 15 or 30 minutes, or instantly with Cmd+Shift+L.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'specifications',
            heading: 'Technical specifications',
            body: (
              <>
                <p>For security researchers and anyone who wants to check the claims above against the code.</p>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Value</th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cipher</td>
                      <td>
                        <code>AES-256-GCM</code>
                      </td>
                      <td>Authenticated encryption with associated data</td>
                    </tr>
                    <tr>
                      <td>Key derivation</td>
                      <td>
                        <code>PBKDF2-SHA256</code>
                      </td>
                      <td>600,000 iterations</td>
                    </tr>
                    <tr>
                      <td>Randomness</td>
                      <td>
                        <code>crypto.getRandomValues</code>
                      </td>
                      <td>Platform CSPRNG</td>
                    </tr>
                    <tr>
                      <td>Salt</td>
                      <td>Unique per note</td>
                      <td>No shared salts, no rainbow tables</td>
                    </tr>
                    <tr>
                      <td>Key storage</td>
                      <td>Device only</td>
                      <td>Keys are never transmitted</td>
                    </tr>
                    <tr>
                      <td>Sync</td>
                      <td>End-to-end encrypted</td>
                      <td>Relay stores ciphertext only</td>
                    </tr>
                    <tr>
                      <td>Source</td>
                      <td>
                        <a href='https://github.com/Efesop/rich-text-editor' target='_blank' rel='noopener noreferrer'>
                          github.com/Efesop/rich-text-editor
                        </a>
                      </td>
                      <td>MIT licence</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Lock a note in one click. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Encrypt your notes today.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
