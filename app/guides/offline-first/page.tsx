import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Offline-First Apps: Why Your Notes Should Live Locally';
const DESCRIPTION =
  'Offline-first means the device holds the truth and the network is optional. What that changes about speed, privacy and what happens when a company shuts down.';
const PATH = '/guides/offline-first';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'offline first',
    'offline first apps',
    'local first software',
    'offline capable vs offline first',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What does offline-first mean?',
    answer:
      'That the copy on your device is the real one. The app reads and writes locally, and any network activity is an optional extra that syncs changes afterwards. The opposite arrangement, where the server holds the truth and your device shows a cached view, is what most cloud apps do.',
  },
  {
    question: 'How is that different from offline-capable?',
    answer:
      'Offline-capable apps degrade when the connection drops: some features stop, edits queue, and reconnecting can produce conflicts or lost changes. Offline-first apps do not have a degraded mode, because they were never depending on the network to function.',
  },
  {
    question: 'How does Dash store data on each platform?',
    answer:
      'On the desktop, as JSON files in Dash’s application directory, written atomically so a crash cannot leave a half-written note. On iPhone and in the browser, in the device’s own database. Locked notes are stored as ciphertext on every platform.',
  },
  {
    question: 'Does Dash sync between devices?',
    answer:
      'Optionally. Dash Sync is a subscription at $4.99 a month or $47.99 a year with a seven-day trial, and it encrypts every change on your device before upload so the relay stores only ciphertext. It is off by default, and the app is complete without it.',
  },
  {
    question: 'What happens if I lose my device?',
    answer:
      'That is the honest trade-off of local storage: notes that existed only there are gone. Export encrypted .dashpack backups on a schedule, or turn on sync so an encrypted copy lives on your other devices.',
  },
];

const related = [
  {
    title: 'Offline notes app',
    href: '/offline-notes',
    description: 'What working without a connection looks like in practice.',
  },
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
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

export default function OfflineFirstGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Laptop'
        badgeText='Guide'
        headline='What Offline-First Actually Means'
        subheadline='Not “works on a plane”. It means the copy on your device is the real one, and the network is a convenience layered on top.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Software spent fifteen years moving into the browser, and notes went with it. The result is normal now: an app
              that shows a spinner before your own writing, refuses to open an old note in a tunnel, and belongs to a company
              that could change the terms next quarter.
            </p>
            <p>
              Offline-first is the alternative arrangement. This guide covers what it means technically, what it changes for
              you, and where <a href='/'>Dash</a> sits.
            </p>
          </>
        }
        sections={[
          {
            id: 'definition',
            heading: 'Where the truth lives',
            body: (
              <>
                <p>
                  The whole distinction is one question: if your device and the server disagree, which one is right?
                </p>
                <p>
                  In a cloud app, the server is right. Your device holds a cache, edits are requests, and being offline means
                  operating on a stale copy while hoping the reconciliation goes well. In an offline-first app, your device is
                  right. Edits are simply writes to local storage, and sync, if it exists, propagates them afterwards.
                </p>
                <p>
                  That is why the two feel so different in ordinary use. Offline-first apps open instantly, never lose a
                  keystroke to a network hiccup, and have no concept of being degraded.
                </p>
              </>
            ),
          },
          {
            id: 'consequences',
            heading: 'What follows from it',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Speed.</strong> Local reads and writes are microseconds. No round trip can compete, and no amount
                    of optimistic UI hides one perfectly.
                  </li>
                  <li>
                    <strong>Privacy.</strong> If the app does not need your notes on a server to work, they do not have to be
                    on one. Offline-first and private are the same decision seen from two angles.
                  </li>
                  <li>
                    <strong>Longevity.</strong> A service can shut down, change hands or reprice. A folder of files on your
                    machine keeps working.
                  </li>
                  <li>
                    <strong>Ownership.</strong> Export stops being a feature request and becomes a file operation.
                  </li>
                  <li>
                    <strong>The trade-off:</strong> backups are your responsibility, and multi-device sync becomes something
                    to design rather than something you get for free.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'in-dash',
            heading: 'How Dash does it',
            body: (
              <>
                <p>
                  Notes are files in Dash’s directory on the desktop, written atomically: the app writes a complete new file
                  and swaps it in, so a crash or a flat battery cannot produce a half-saved note. On iPhone and in the browser
                  they live in the device’s own database. Search, folders, tags, [[links]] and encryption all run locally, and
                  the local AI assistant talks to a model on your own machine, so even that works with no connection.
                </p>
                <p>
                  Sync is layered on top rather than built in underneath. When you turn it on, changes are encrypted on the
                  device before they are sent, so the relay stores ciphertext it cannot read; when it is off, the app makes no
                  requests carrying your content. Turning it off does not remove your notes, because they were never the
                  server’s in the first place.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Your notes, on your machine, at your speed.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
