import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Does the Notes App Work Without Wi-Fi? Yes. Here’s How';
const DESCRIPTION =
  'Yes: Apple Notes works without Wi-Fi and syncs when you reconnect. What works offline, what waits for a connection, and an offline notes app with no account.';
const PATH = '/offline-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'does the notes app work without wifi',
    'does notes need wifi',
    'can you use notes without wifi',
    'does apple notes work offline',
    'apple notes offline',
    'offline notes app',
    'offline note taking app',
    'notes app without internet',
    'local first notes app',
    'offline notes app mac',
    'best offline notes app',
  ],
});

// Apple Notes behaviour checked 2026-10-19 against Apple's Notes guides for iPhone and Mac (support.apple.com)
const faqs: FAQ[] = [
  {
    question: 'Does the Notes app work without Wi-Fi?',
    answer:
      'Yes. Apple Notes keeps a copy of your notes on the iPhone, iPad or Mac, so you can open, write, edit and search them with Wi-Fi and mobile data off. Changes to notes stored in iCloud wait on the device and sync to your other devices the next time you connect.',
  },
  {
    question: 'Does Notes need Wi-Fi or mobile data?',
    answer:
      'Only to sync. Without a connection, edits stay on the device you made them on, iCloud.com cannot show your notes in a browser, and a shared note will not show other people’s changes until you are back online. Writing and reading notes needs no connection at all.',
  },
  {
    question: 'Can you use Notes without Wi-Fi on iPhone?',
    answer:
      'Yes, on airplane mode or with no signal. For notes that never touch the internet, turn on the On My iPhone account in Settings › Apps › Notes and keep notes there: they stay on that iPhone and are never uploaded to iCloud. Dash works the same way by default, with no Apple Account involved.',
  },
  {
    question: 'How does Dash work without an internet connection?',
    answer:
      'There is nothing to connect to. Notes are files in Dash’s directory on your Mac or iPhone, and the editor, search, folders, tags and encryption all run locally. The app does not check in with a server on launch and does not need one to open a note.',
  },
  {
    question: 'Where are my notes stored?',
    answer:
      'On the desktop, in Dash’s application directory as JSON files written atomically so a crash cannot leave a half-written note. On iPhone and in the browser, in the device’s own database. Locked notes are stored as ciphertext either way.',
  },
  {
    question: 'Can I sync notes between devices?',
    answer:
      'If you want to. Dash Sync is an optional subscription at $4.99 a month or $47.99 a year with a seven-day trial, and it keeps Mac, iPhone, iPad and the web in step, encrypting everything on your device first so the relay only stores ciphertext. Leave it off and Dash stays entirely local; move notes with an encrypted .dashpack export instead.',
  },
  {
    question: 'What happens if I lose my device?',
    answer:
      'Notes that exist only on that device are gone with it, which is the trade for keeping them off a server. Export encrypted .dashpack backups to storage you control, or turn on sync so an encrypted copy lives on your other devices.',
  },
  {
    question: 'Does search work offline?',
    answer:
      'Yes. Search runs against the notes on the device, so it works with the Wi‑Fi off and returns results instantly. Locked notes are searchable by title; their contents stay encrypted until you unlock them.',
  },
  {
    question: 'Is the web version offline too?',
    answer:
      'Largely. The web app installs as a progressive web app and keeps notes in the browser’s local database, so it keeps working when the connection drops. For a genuinely offline setup, the Mac and iPhone apps are the better choice.',
  },
];

const related = [
  {
    title: 'Is Apple Notes secure?',
    href: '/is-apple-notes-secure',
    description: 'What Apple encrypts, what iCloud can read, and what Advanced Data Protection changes.',
  },
  {
    title: 'Offline-first apps',
    href: '/guides/offline-first',
    description: 'Why an app that works without a server is a different kind of software.',
  },
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2025-11-20',
    dateModified: '2026-10-19',
  }),
  faqJsonLd(faqs),
];

export default function OfflineNotesPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Laptop'
        badgeText='Works offline'
        headline='Does the Notes App Work Without Wi‑Fi?'
        subheadline='Yes. Apple Notes opens, edits and searches your notes offline and syncs when you reconnect. Here is what waits for a connection, and an offline notes app that never needs one.'
        updated='October 2026'
        intro={
          <>
            <p>
              <strong>Short answer: yes.</strong> The Notes app on iPhone, iPad and Mac stores your notes on the device, so you
              can read, write, edit and search them in airplane mode, on a train with no signal or anywhere without Wi‑Fi. What
              a connection adds is sync: notes kept in iCloud catch up across your devices the next time you are online.
            </p>
            <p>
              The rest of this page covers what waits for a connection in Apple Notes, how to keep notes that never go online,
              and how <a href='/'>Dash</a>, an offline notes app for Mac and iPhone, handles the same question with no account
              at all.
            </p>
          </>
        }
        sections={[
          {
            id: 'apple-notes-offline',
            heading: 'What works in Apple Notes without Wi‑Fi, and what waits',
            body: (
              <>
                <p>
                  <strong>Works offline:</strong> opening any note already on the device, writing new notes, editing, checklists,
                  search, folders and tags, and adding photos or scans. Nothing you type is lost when the signal drops.
                </p>
                <p>
                  <strong>Waits for a connection:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Sync.</strong> Edits to iCloud notes stay on the device you made them on until it reconnects, so a
                    note changed on your iPhone in airplane mode will not show the change on your Mac yet.
                  </li>
                  <li>
                    <strong>iCloud.com.</strong> Reading notes in a browser on a Windows PC or someone else’s computer needs the
                    internet.
                  </li>
                  <li>
                    <strong>Shared notes.</strong> Other people’s edits to a note you share arrive only when you are online.
                  </li>
                </ul>
                <p>
                  If you want notes that never go online, Apple Notes has an <strong>On My iPhone</strong> (or On My Mac)
                  account: turn it on in Settings › Apps › Notes and those notes stay on that one device. The catch is that they
                  are then on one device only, with no copy anywhere else.
                </p>
              </>
            ),
          },
          {
            id: 'what-offline-means',
            heading: 'How Dash works offline',
            body: (
              <>
                <p>
                  Many notes apps are websites with an app wrapped around them. They open to a spinner, refuse to load an old
                  note in a tunnel, and lose a paragraph when the connection returns mid-save. That is a strange property for the
                  place you keep your thinking.
                </p>
                <p>
                  Dash is offline in the plain sense: the notes are files on your device and the app never needs a server to read
                  or write one. Sync exists, but as something you switch on, not as the thing holding the app together.
                </p>
                <ul>
                  <li>
                    <strong>Nothing to wait for on launch.</strong> The app opens to your notes, not to a login or a spinner; the Mac
                    app’s update check runs in the background without holding anything up.
                  </li>
                  <li>
                    <strong>Everything local:</strong> editor, search, folders, tags, [[links]], attachments and encryption
                    all run on the device.
                  </li>
                  <li>
                    <strong>No account.</strong> Nothing to sign into, so nothing to fail when you are offline.
                  </li>
                  <li>
                    <strong>Atomic writes.</strong> Notes are saved so that a crash or a flat battery cannot leave a note half
                    written.
                  </li>
                  <li>
                    <strong>Local AI, optionally.</strong> The assistant talks to a model on your own machine, so even that
                    works on a plane.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'why-it-matters',
            heading: 'Why offline and private are the same question',
            body: (
              <>
                <p>
                  An app that works offline is an app that does not need your notes on someone else’s computer. The two
                  properties come from one decision: keep the data where the user is. That is why the offline notes app and
                  the private notes app tend to be the same app, and why cloud-first products struggle to be either.
                </p>
                <p>
                  It also decides what happens when a company changes. A service can raise prices, alter terms, or shut down;
                  a folder of files on your Mac cannot. Dash exports to Markdown, PDF, DOCX and an encrypted backup, so
                  leaving is always available.
                </p>
              </>
            ),
          },
          {
            id: 'sync',
            heading: 'When you do want more than one device',
            body: (
              <>
                <p>
                  Offline should not mean stranded. Dash Sync is optional and end-to-end encrypted: each change is encrypted
                  on the device with a vault key that never leaves your devices, and the relay stores ciphertext it cannot
                  read. Devices pair with a QR code and a short one-time code. Turn it off and Dash stops contacting the server
                  entirely.
                </p>
                <p>
                  If you would rather not subscribe at all, an encrypted .dashpack export moves notes between machines by
                  hand, opening only with your password.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes that open in a tunnel. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='No signal required.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
