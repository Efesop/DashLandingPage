import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Self-Destructing Notes: Notes That Auto-Delete';
const DESCRIPTION =
  'Self-destructing notes delete themselves after a timer you set. How they work in Dash, how they differ from burn-after-reading links, and when to use each.';
const PATH = '/guides/self-destructing-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'self destructing notes',
    'self destructing note',
    'notes that auto delete',
    'temporary notes app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What are self-destructing notes?',
    answer:
      'Notes with an expiry. You set a timer when you create one, and when it runs out the note deletes itself without you having to remember. It suits anything with a natural shelf life: a door code, a one-time password, a courier’s number, an address you need for a weekend.',
  },
  {
    question: 'How is this different from a burn-after-reading link?',
    answer:
      'Services like Privnote destroy a note after someone opens it, on their server. Dash’s self-destruct runs on your own device against your own note, so nothing is uploaded and the timer is not a promise from a third party. If you want the send-someone-a-link behaviour, Dash does that separately with encrypted share links.',
  },
  {
    question: 'What timers can I set?',
    answer:
      'One hour, twelve hours, one day, seven days or thirty days, plus a custom duration. The sidebar shows a countdown badge that shifts from green to orange to red as the deadline gets close, so nothing disappears as a surprise.',
  },
  {
    question: 'Can I cancel a timer?',
    answer:
      'Yes, at any time before it fires, from the page’s context menu. A note that turned out to matter can be kept with two clicks.',
  },
  {
    question: 'Can I combine self-destruct with encryption?',
    answer:
      'Yes, and for anything sensitive you should. Lock the note so it is encrypted with AES-256 while it exists, and set a timer so it does not exist for longer than necessary. The two features are independent and work together.',
  },
];

const related = [
  {
    title: 'Encrypted note sharing',
    href: '/share',
    description: 'Send a note as an encrypted link, with the key in the URL fragment.',
  },
  {
    title: 'Privnote alternatives',
    href: '/privnote-alternatives',
    description: 'Encrypted, self-destructing note links compared.',
  },
  {
    title: 'What is AES-256 encryption?',
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

export default function SelfDestructingNotesGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Flame'
        badgeText='Guide'
        headline='Notes That Delete Themselves'
        subheadline='The safest note is the one that no longer exists. Set a timer when you write it and stop relying on remembering.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Most of the sensitive things people write down have a natural expiry: the code for a building you are visiting
              once, a temporary password, a courier’s phone number, the address of a flat you are viewing on Saturday. They
              are needed for hours or days, and then they sit in a notes app for years.
            </p>
            <p>
              Self-destructing notes fix that by moving the deletion from your memory to a timer. Here is how they work in{' '}
              <a href='/'>Dash</a>, and how they differ from the burn-after-reading links people often mean by the phrase.
            </p>
          </>
        }
        sections={[
          {
            id: 'how-it-works',
            heading: 'How they work in Dash',
            body: (
              <>
                <p>
                  When you create a note, set a self-destruct timer from the toolbar: one hour, twelve hours, a day, a week, a
                  month, or a custom duration. The note behaves like any other while it lives, with a countdown badge in the
                  sidebar that turns from green to orange to red as the deadline approaches. When the timer runs out, the note
                  is deleted from the device.
                </p>
                <p>
                  It is all local. There is no server deciding when your note expires and no upload involved, so the timer
                  works with the Wi‑Fi off and does not depend on anyone else’s uptime. You can cancel it from the page’s
                  context menu at any point before it fires.
                </p>
              </>
            ),
          },
          {
            id: 'vs-links',
            heading: 'Two different things called self-destructing',
            body: (
              <>
                <p>
                  <strong>Burn-after-reading links</strong> (Privnote and similar) are about sending: you paste text, get a
                  link, and the service deletes the content once the recipient opens it. The content sits on someone else’s
                  server until then, and you are trusting them to actually delete it.
                </p>
                <p>
                  <strong>Self-destructing notes</strong> are about keeping: the note is yours, on your device, and it removes
                  itself on schedule. Nobody else is involved at any point.
                </p>
                <p>
                  Dash does both, separately. For sending, <a href='/share'>encrypted share links</a> encrypt the note on your
                  device and put the key in the URL fragment, with an optional 30-day expiry on the stored blob.
                </p>
              </>
            ),
          },
          {
            id: 'when-to-use',
            heading: 'What to put a timer on',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Access details:</strong> door codes, lockbox combinations, guest Wi‑Fi passwords.
                  </li>
                  <li>
                    <strong>One-time credentials</strong> handed to you by someone else, which should never become permanent
                    records.
                  </li>
                  <li>
                    <strong>Trip logistics:</strong> addresses, booking references, the name of the person meeting you.
                  </li>
                  <li>
                    <strong>Anything you would not want found later</strong> that has no reason to be kept: a vent, a draft
                    you needed to write but not to keep, a number you were given in confidence.
                  </li>
                </ul>
                <p>
                  For anything in that last group, lock the note as well. Encryption protects it while it exists; the timer
                  limits how long that is.
                </p>
              </>
            ),
          },
          {
            id: 'limits',
            heading: 'What deletion does not cover',
            body: (
              <>
                <p>
                  A deleted note is removed from Dash, but copies you made elsewhere are still copies: a screenshot, a
                  paste into a message, a device backup taken while the note existed. If sync was on, the deletion propagates
                  as a tombstone to your other devices and the note goes to a trash for 30 days before it is purged. Plan the
                  timer around the whole picture, not just the app.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Write it down, and let it expire.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
