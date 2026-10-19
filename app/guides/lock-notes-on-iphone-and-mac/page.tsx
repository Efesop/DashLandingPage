import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'How to Lock Notes on Mac, MacBook and iPhone (2026)';
const DESCRIPTION =
  "How to lock notes on a Mac or MacBook in Apple Notes, with Touch ID, plus the iPhone steps, why some notes won't lock, and how to lock the whole app.";
const PATH = '/guides/lock-notes-on-iphone-and-mac';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'how to lock notes on mac',
    'how to lock notes on macbook',
    'how to lock a note on mac',
    'how to lock notes on iphone',
    'how to lock notes app on iphone',
    'how to put a lock on notes',
    'lock apple notes',
  ],
});

// steps checked 2026-10-19 against Apple's Notes guide for macOS 26 and 27 (support.apple.com/guide/notes/not28c5f5468),
// the iPhone article (support.apple.com/102537) and "Lock or hide an app on iPhone" (support.apple.com/guide/iphone/iph00f208d05)
const faqs: FAQ[] = [
  {
    question: 'How do I lock a note on a Mac?',
    answer:
      'In Notes, select the note, click the More button next to the search field at the top right, and choose Lock Note. The first time, Notes asks you to set a password: your Mac login password or a separate one. On macOS 15 and earlier, the same Lock Note command is under the Lock button in the toolbar.',
  },
  {
    question: 'How do I lock notes on a MacBook with Touch ID?',
    answer:
      'Choose Notes › Settings, set a password for locked notes, then select Use Touch ID. From then on you lock and unlock notes with your fingerprint on the MacBook’s Touch ID key or a Magic Keyboard with Touch ID, and type the password only as a fallback.',
  },
  {
    question: 'How do I lock a note on iPhone?',
    answer:
      'Open the note, tap the More button (the three dots), then tap Lock. Choose Use iPhone Passcode or Create Password, and turn on Face ID if you want it. The note stays open with a lock icon at the top; tap the icon to hide it, or it locks again when you close Notes or the iPhone sleeps.',
  },
  {
    question: 'Why can’t I lock a note in Apple Notes?',
    answer:
      'Apple Notes will not lock a note that has tags, a video, audio, PDF or document attached, a note you share with other people, a Quick Note, or a note in a Gmail, Yahoo or other IMAP account. Remove the tags or attachment, stop sharing, or move the note to iCloud or On My Mac, and Lock appears.',
  },
  {
    question: 'Can I lock the entire Apple Notes app?',
    answer:
      'On iPhone and iPad, yes: since iOS 18 you can touch and hold the Notes icon and choose Require Face ID, so the app asks for Face ID, Touch ID or your passcode before it opens. On a Mac there is no way to lock the Notes app itself; only individual notes lock.',
  },
  {
    question: 'What does Dash do that Apple Notes does not?',
    answer:
      'Dash locks any note with AES-256-GCM, including notes with attachments, and locks the whole app on Mac as well as iPhone, with Touch ID or Face ID and an auto-lock timer. It adds a duress password that opens decoy notes and self-destructing notes, needs no Apple Account, and syncs only if you choose, end-to-end encrypted. It is $14.99 once on Mac and free on iPhone.',
  },
];

const related = [
  { title: 'Notes app with password protection', href: '/password-protected-notes', description: 'Lock any note or the whole app with real encryption.' },
  { title: 'Is Apple Notes secure?', href: '/is-apple-notes-secure', description: 'What Apple encrypts, what iCloud can read, and what Advanced Data Protection changes.' },
  { title: 'Duress password', href: '/guides/duress-password', description: 'A second password that protects you under coercion.' },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
    dateModified: '2026-10-19',
  }),
  faqJsonLd(faqs),
];

export default function LockNotesGuidePage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="KeyRound"
        badgeText="Guide"
        headline="How to Lock Notes on Mac, MacBook and iPhone"
        subheadline="The current steps for Apple Notes on a Mac and on iPhone, why some notes refuse to lock, how to lock the whole app, and when a dedicated encrypted notes app is the better tool."
        updated="October 2026"
        intro={
          <>
            <p>
              <strong>The short version:</strong> on a Mac, select the note, click the <strong>More</strong> button next to the
              search field and choose <strong>Lock Note</strong>. On iPhone, open the note, tap <strong>More</strong>, then{' '}
              <strong>Lock</strong>. The full steps, including Touch ID on a MacBook, are below.
            </p>
            <h3>How to lock a note on a Mac or MacBook</h3>
            <ol>
              <li>Open the Notes app and select the note you want to protect.</li>
              <li>Click the <strong>More</strong> button (three dots) next to the search field at the top right.</li>
              <li>Choose <strong>Lock Note</strong>.</li>
              <li>The first time, Notes asks for a password. Choose your Mac login password or a separate Notes password, and add a hint if you make a new one.</li>
              <li>To close every open locked note, click the <strong>Lock</strong> button next to the search field. Locked notes also close on their own after a while without use, or when you quit Notes.</li>
            </ol>
            <p>
              On macOS 15 Sequoia and earlier, the command sits under the <strong>Lock</strong> button in the toolbar: click it and
              choose <strong>Lock Note</strong>, and later <strong>Close All Locked Notes</strong>.
            </p>
            <h3>Use Touch ID on a MacBook</h3>
            <ol>
              <li>Choose <strong>Notes › Settings</strong>.</li>
              <li>Next to <strong>Locked notes</strong>, choose <strong>Use Login Password</strong> or set a custom password.</li>
              <li>Select <strong>Use Touch ID</strong>.</li>
            </ol>
            <p>
              Touch ID then unlocks notes with the key on a MacBook or a Magic Keyboard with Touch ID. If you use a custom password
              and forget it, Apple cannot recover the notes it protects.
            </p>
            <h3>How to lock a note on iPhone</h3>
            <ol>
              <li>Open the note you want to protect.</li>
              <li>Tap the <strong>More</strong> button (three dots) at the top right.</li>
              <li>Tap <strong>Lock</strong>.</li>
              <li>The first time, choose <strong>Use iPhone Passcode</strong> or <strong>Create Password</strong>, and turn on Face ID if you want to unlock without typing. You can change this later in Settings › Apps › Notes › Password.</li>
              <li>The note stays open with a lock icon at the top. Tap the icon to hide it straight away; otherwise it locks again when you close Notes or the iPhone goes to sleep.</li>
            </ol>
            <h3>Why a note will not lock</h3>
            <p>Apple Notes leaves out the Lock option for:</p>
            <ul>
              <li>notes that contain tags;</li>
              <li>notes with a video, audio file, PDF or document attached (photos, scans, drawings and tables are fine);</li>
              <li>notes shared with other people, and Quick Notes;</li>
              <li>notes in Gmail, Yahoo and other IMAP accounts, which only iCloud and On My Mac or On My iPhone notes avoid.</li>
            </ul>
          </>
        }
        inlineCTA="Want every note encrypted, with auto-lock? Try Dash"
        sections={[
          {
            id: 'lock-the-app',
            heading: 'Can you lock the whole Notes app?',
            body: (
              <>
                <p>
                  <strong>On iPhone and iPad, yes.</strong> Since iOS 18, touch and hold the Notes icon on the Home Screen, tap{' '}
                  <strong>Require Face ID</strong> (or Touch ID or Passcode), and confirm. Notes then asks for Face ID before it
                  opens. The setting applies only to that device and does not sync through iCloud.
                </p>
                <p>
                  <strong>On a Mac, no.</strong> macOS has no app lock for Notes. Anyone who can use your unlocked Mac can open
                  Notes and read every note that is not locked, and locking each note one by one is the only protection inside
                  the app.
                </p>
              </>
            ),
          },
          {
            id: 'is-apple-notes-secure',
            heading: 'Is Apple Notes secure? Is it encrypted?',
            body: (
              <>
                <p>
                  <strong>Locked notes:</strong> yes. Apple encrypts a locked note on your device with a key derived from your
                  passcode or note password, and that encryption survives the trip through iCloud. Apple cannot read a locked
                  note.
                </p>
                <p>
                  <strong>Everything else:</strong> it depends on a setting. Unlocked notes synced to iCloud are encrypted in
                  transit and at rest, but with keys Apple controls, which is why Apple can restore them and, in principle,
                  hand them over. Turning on <strong>Advanced Data Protection</strong> (Settings › your name › iCloud ›
                  Advanced Data Protection) extends end-to-end encryption to Notes and most other iCloud data. Most people have
                  never enabled it. The full answer is on <a href='/is-apple-notes-secure'>Is Apple Notes secure?</a>
                </p>
                <p>
                  <strong>What Apple Notes cannot do:</strong> lock the app on a Mac, lock a note with a PDF or tags, open a decoy
                  under duress, make a note self-destruct, or exist without an Apple Account outside the local On My Mac folder. If
                  any of those matter, that is where a dedicated encrypted notes app earns its keep.
                </p>
              </>
            ),
          },
          {
            heading: 'How locking works in Dash',
            body: (
              <>
                <p>
                  Dash treats every lock as encryption: a locked note is scrambled with AES-256-GCM and a key derived from its
                  password, attachments included, and App Lock does the same job for the whole library on Mac and iPhone, with a
                  master password, Touch ID or Face ID and an auto-lock timer. Add a duress password that opens decoy notes, or a
                  self-destruct timer, and nothing ever needs an Apple Account or iCloud. If you do want your Mac and iPhone in
                  step, Dash Sync encrypts on the device first so the server only ever holds ciphertext.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Lock everything, not just one note"
        ctaSubheadline="Dash locks notes or the whole app with AES-256, Face ID and Touch ID. $14.99 one-time on Mac, free on iPhone."
      />
    </>
  );
}
