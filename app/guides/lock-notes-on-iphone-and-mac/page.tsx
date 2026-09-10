import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'How to Lock Notes on iPhone and Mac: Apple Notes and Beyond';
const DESCRIPTION =
  'How to lock notes on iPhone and Mac in Apple Notes, what a locked note protects, and what to use when you need to lock the whole app or every note.';
const PATH = '/guides/lock-notes-on-iphone-and-mac';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['how to lock notes on iphone', 'how to lock notes app on iphone', 'how to lock notes on mac', 'how to put a lock on notes', 'lock apple notes'],
});

const faqs: FAQ[] = [
  {
    question: 'How do I lock a note on iPhone?',
    answer:
      'Open the note, tap the More button (three dots), then tap Lock. Choose whether to use your iPhone passcode or a separate Notes password, and allow Face ID if you want. To lock it afterwards, tap the lock icon at the top of the note or swipe down on the notes list and tap Lock Now.',
  },
  {
    question: 'How do I lock a note on Mac?',
    answer:
      'In the Notes app, select the note and choose File, then Lock Note, or click the lock icon in the toolbar. The first time, set a password or choose to use your Mac login password, and enable Touch ID if your Mac has it.',
  },
  {
    question: 'Can I lock the entire Apple Notes app?',
    answer:
      'No. Apple Notes locks individual notes, not the app, and it cannot lock automatically after a period of inactivity. If you want the whole app to lock on a timer, or a decoy password for coercion, you need a dedicated app such as Dash.',
  },
  {
    question: 'What does Dash do that Apple Notes does not?',
    answer:
      'Dash can lock every note at once with App Lock and an auto-lock timer, offers a duress password that opens decoy notes, lets notes self-destruct on a timer, works with no Apple ID or iCloud at all, and syncs only if you choose, end-to-end encrypted. It is $14.99 one-time on Mac and free on iPhone.',
  },
];

const related = [
  { title: 'Notes app with password protection', href: '/password-protected-notes', description: 'Lock any note or the whole app with real encryption.' },
  { title: 'Is Apple Notes secure?', href: '/is-apple-notes-secure', description: 'What Apple encrypts, what iCloud can read, and what Advanced Data Protection changes.' },
  { title: 'Duress password', href: '/guides/duress-password', description: 'A second password that protects you under coercion.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
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
        headline="How to Lock Notes on iPhone and Mac"
        subheadline="The steps for Apple Notes, what a locked note actually protects, whether Apple Notes is really encrypted, and when a dedicated encrypted notes app is the better tool."
        updated="September 2026"
        intro={
          <>
            <p>
              Locking a note is the simplest privacy habit you can build. Here is how to do it in Apple Notes on both
              devices, followed by an honest answer to the question people ask next: is Apple Notes secure?
            </p>
            <h3>How to lock a note on iPhone (Apple Notes)</h3>
            <ol>
              <li>Open the note you want to protect.</li>
              <li>Tap the <strong>More</strong> button (three dots in a circle) at the top right.</li>
              <li>Tap <strong>Lock</strong>.</li>
              <li>The first time, choose <strong>Use iPhone Passcode</strong> or create a separate Notes password. Turn on Face ID if you want to unlock without typing.</li>
              <li>The note is now locked. Tap the lock icon at the top of the note to lock it again after viewing, or pull down on the notes list and tap <strong>Lock Now</strong> to lock all locked notes at once.</li>
            </ol>
            <h3>How to lock a note on Mac (Apple Notes)</h3>
            <ol>
              <li>Open the Notes app and select the note.</li>
              <li>Choose <strong>File › Lock Note</strong>, or click the lock icon in the toolbar.</li>
              <li>The first time, set a password or choose to use your Mac login password, and enable Touch ID if available.</li>
              <li>Click the lock icon again, or choose <strong>File › Close All Locked Notes</strong>, to lock it.</li>
            </ol>
            <p>
              A few limits to know: you cannot lock a note that contains certain attachments such as audio or video, notes shared
              with other people cannot be locked, and there is no way to lock the whole app or make it lock automatically after
              a few minutes.
            </p>
          </>
        }
        inlineCTA="Want every note encrypted, with auto-lock? Try Dash"
        sections={[
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
                  never enabled it.
                </p>
                <p>
                  <strong>What Apple Notes cannot do:</strong> lock the entire app, auto-lock on a timer, show a decoy under
                  duress, make a note self-destruct, or exist without an Apple ID. If any of those matter, that is where a
                  dedicated encrypted notes app earns its keep.
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
                  password, and App Lock does the same for the whole library with a master password, Touch ID or Face ID and an
                  auto-lock timer. Add a duress password that opens decoy notes, or a self-destruct timer, and nothing ever
                  needs an Apple ID or iCloud. If you do want your Mac and iPhone in step, Dash Sync encrypts on the device first
                  so the server only ever holds ciphertext.
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
