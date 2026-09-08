import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Private Notes App: Notes That Stay on Your Device';
const DESCRIPTION =
  'A private notes app for Mac, iPhone and the web: notes stay on your device, encrypted with AES-256, no account, no tracking. Sync is optional and end-to-end encrypted.';
const PATH = '/private-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'private notes app',
    'privacy notes',
    'private notes',
    'private note taking app',
    'notes app no account',
    'notes app no tracking',
    'notes app without cloud',
    'privacy notes app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What makes Dash more private than other notes apps?',
    answer:
      'Where the notes live. Cloud apps such as Notion and Evernote keep your notes on their servers, behind an account, encrypted with keys they hold. Dash keeps notes on your device with no account and no connection required. Sync is off unless you turn it on, and when it is on, notes are encrypted before they leave.',
  },
  {
    question: 'How does the encryption work?',
    answer:
      'Lock a note and Dash encrypts it with AES-256-GCM, using a key derived from your password with PBKDF2-SHA256 at 600,000 iterations and a unique salt. Open it with the password, or with Touch ID on the Mac and Face ID on iPhone.',
  },
  {
    question: 'Can Dash read my notes?',
    answer:
      'No. By default there is no server and no account, so there is nothing for us to read. With optional Dash Sync on, every change is encrypted on your device with a key that never leaves your devices; the relay stores ciphertext it cannot open.',
  },
  {
    question: 'What happens if I lose my device?',
    answer:
      'Notes that exist only on that device are gone with it, which is the price of keeping them off a server. Export encrypted .dashpack backups to storage you control, or turn on Dash Sync to keep an encrypted copy in step across your own devices.',
  },
  {
    question: 'Is Dash open source?',
    answer:
      'Yes, under the MIT licence. The code is on GitHub, so the privacy claims on this page can be checked rather than taken on trust.',
  },
];

const related = [
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, and how the optional sync stays end-to-end encrypted.',
  },
  {
    title: 'Offline notes app',
    href: '/offline-notes',
    description: 'Why notes that work with the Wi‑Fi off are the private ones.',
  },
  {
    title: 'Privacy-first note taking',
    href: '/guides/privacy-first-note-taking',
    description: 'What zero-knowledge design means in practice.',
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

export default function PrivateNotesPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Private by design'
        headline='A Private Notes App That Keeps Notes on Your Device'
        subheadline='No account, no tracking, no server unless you ask for one. Notes live on your Mac or iPhone, and the sensitive ones get a lock.'
        updated='September 2026'
        intro={
          <>
            <p>
              Most notes apps are private the way a hotel room is private: the door locks, and the management has a key.
              Your notes travel to the company’s servers, sit there encrypted with the company’s keys, and are tied to an
              account with your name on it. A private notes app should not have a management.
            </p>
            <p>
              <a href='/'>Dash</a> keeps notes on your device. There is no account to create and nothing is uploaded unless
              you decide it should be. Lock a note and it is encrypted with AES-256; lock the app and it locks itself when you
              step away. The Mac app costs $14.99 once; the iPhone app and the web app are free. The code is open, so all of
              this can be checked.
            </p>
          </>
        }
        comparison={{
          heading: 'How Dash compares',
          subheading: 'Where the notes live decides who can read them.',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'apple', label: 'Apple Notes' },
            { key: 'notion', label: 'Notion' },
            { key: 'evernote', label: 'Evernote' },
          ],
          rows: [
            { feature: 'Works without an account', values: { dash: true, apple: 'Local folder', notion: false, evernote: false } },
            { feature: 'Notes stay on the device by default', values: { dash: true, apple: false, notion: false, evernote: false } },
            { feature: 'Vendor cannot read your notes', values: { dash: true, apple: 'Locked notes', notion: false, evernote: false } },
            { feature: 'Lock individual notes', values: { dash: true, apple: true, notion: false, evernote: false } },
            { feature: 'Lock the whole app', values: { dash: true, apple: false, notion: false, evernote: true } },
            { feature: 'Buy once, no subscription needed', values: { dash: true, apple: 'Free', notion: 'Free tier', evernote: false } },
            { feature: 'Open source', values: { dash: true, apple: false, notion: false, evernote: false } },
          ],
        }}
        sections={[
          {
            id: 'cloud-problem',
            heading: 'The problem with cloud notes',
            body: (
              <>
                <p>
                  When you write in a cloud notes app, three things happen that you did not ask for. The note is copied to a
                  server you do not control. It is filed under an account that identifies you. And it becomes part of a
                  database that is a target: for attackers, for legal demands, and increasingly for AI features that read it
                  to be useful. Encryption “at rest” does not change this, because the company holds the key.
                </p>
                <p>
                  None of that is sinister; it is how a service works. It is just the wrong shape for a diary, a password
                  hint, a medical note, a draft you are not ready to show, or anything else you would rather not see in a
                  breach notification.
                </p>
              </>
            ),
          },
          {
            id: 'what-private-means',
            heading: 'What private means in Dash',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Offline by default.</strong> Dash works with no connection and no account. Notes are files on
                    your device, and nothing leaves it unless you share or sync on purpose.
                  </li>
                  <li>
                    <strong>AES-256 on the notes you lock.</strong> A locked note is unreadable without its password, even to
                    someone holding your unlocked Mac.
                  </li>
                  <li>
                    <strong>No copy anywhere else.</strong> No server and no account by default; with optional sync on, the
                    relay only ever holds ciphertext.
                  </li>
                  <li>
                    <strong>Keys made and kept on your device.</strong> Salts and keys come from the platform’s secure random
                    generator and are never transmitted.
                  </li>
                  <li>
                    <strong>Lock the app, not just a note.</strong> A master password with Touch ID or Face ID, auto-lock
                    after 1, 5, 15 or 30 minutes, instant lock with Cmd+Shift+L.
                  </li>
                  <li>
                    <strong>For the worst day:</strong> a duress password that opens a decoy set of notes, and
                    self-destructing notes that delete themselves on a timer.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'what-we-do-not-do',
            heading: 'What Dash does not do',
            body: (
              <>
                <p>
                  There is no analytics in the app and no tracking on this site’s behalf inside it. There is no account, so
                  there is no profile of you to sell or leak. Nothing you write trains a model: if you want AI help, Dash
                  talks to a model running on your own machine through Ollama, LM Studio or similar, and never to a cloud.
                </p>
              </>
            ),
          },
          {
            id: 'platforms',
            heading: 'Mac, iPhone and the web',
            body: (
              <>
                <p>
                  The Mac app is a one-time $14.99 purchase. The iPhone app is free on the App Store, and the web app is free
                  and runs on anything with a browser, Android included. To keep them in step, Dash Sync is an optional
                  subscription at $4.99 a month or $47.99 a year with a seven-day trial: devices pair with a QR code and a
                  short code, the vault key never leaves them, and the relay stores only encrypted blobs. Without sync, move
                  notes with an encrypted .dashpack export.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes with no management. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your notes. Your device. Nobody else’s server.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
