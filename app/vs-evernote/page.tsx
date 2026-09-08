import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Evernote Alternative: Private Notes, No Subscription';
const DESCRIPTION =
  'An Evernote alternative that keeps notes on your device: AES-256 encryption, offline by default, a one-time price on Mac. Dash vs Evernote, feature by feature.';
const PATH = '/vs-evernote';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'evernote alternative',
    'dash vs evernote',
    'evernote alternative free',
    'private evernote alternative',
    'evernote replacement',
    'switch from evernote',
    'notes app no subscription',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Can I import my Evernote notes directly?',
    answer:
      'Not from an ENEX file yet. Export your notebooks from Evernote as ENEX or HTML, then bring the notes you use into Dash by pasting them, and keep the export as an archive. Direct ENEX import is on the list.',
  },
  {
    question: 'Does Dash have all the features of Evernote?',
    answer:
      'No. There is no web clipper, no shared notebooks and no server-side search across a team. Dash has a rich editor, folders, tags, wiki-style [[links]], search, attachments, export and a local AI assistant, plus the things Evernote lacks: a lock on any note, a lock on the app, a duress password and self-destructing notes.',
  },
  {
    question: 'What about syncing between devices?',
    answer:
      'Dash Sync is optional, at $4.99 a month or $47.99 a year with a seven-day trial. Notes, folders, tags, attachments and version history stay in step across Mac, iPhone, iPad and the web, encrypted on your device first so the relay only holds ciphertext. Without it, move notes with an encrypted .dashpack export.',
  },
  {
    question: 'Is Dash really $14.99 once?',
    answer:
      'Yes, for the Mac app, including updates. The iPhone and web apps are free. The only recurring charge in Dash is the optional sync subscription, and note-taking, encryption and everything else work without it.',
  },
  {
    question: 'What if Evernote improves its privacy?',
    answer:
      'It would still hold your notes on its servers with its own keys, because that is what makes web clipping, sharing and server-side search work. The difference here is architectural rather than a feature Evernote could add.',
  },
  {
    question: 'Can I try Dash before buying?',
    answer:
      'Yes. The web app and the iPhone app are free, and the whole codebase is on GitHub under the MIT licence if you would rather build it yourself.',
  },
];

const related = [
  {
    title: 'Evernote alternatives',
    href: '/evernote-alternatives',
    description: 'Notes apps without a subscription, compared.',
  },
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
  },
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, and how the optional sync stays end-to-end encrypted.',
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

export default function VsEvernotePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Dash vs Evernote'
        headline='An Evernote Alternative You Buy Once'
        subheadline='Evernote’s free plan now stops at 50 notes and its paid plans start at $99 a year. Dash is $14.99 once, keeps notes on your device, and locks the ones that matter.'
        updated='September 2026'
        intro={
          <>
            <p>
              Evernote was the notes app for a decade. Since its acquisition by Bending Spoons the free plan has been cut to
              50 notes in one notebook on a single device, and the paid plans have moved up: Starter at $99 a year, Advanced
              at $249.99. For many long-time users the question is no longer whether Evernote is good, but whether it is worth
              that.
            </p>
            <p>
              <a href='/'>Dash</a> answers a narrower question: where should private notes live? On your own device, locked,
              with no account and no renewal. We make Dash, so check the table against the sources rather than taking our word.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash vs Evernote',
          subheading: 'Evernote plans checked on 8 September 2026.',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'evernote', label: 'Evernote' },
          ],
          rows: [
            { feature: 'Works fully offline', values: { dash: true, evernote: 'Paid plans' } },
            { feature: 'Works without an account', values: { dash: true, evernote: false } },
            { feature: 'Provider cannot read your notes', values: { dash: true, evernote: false } },
            { feature: 'Unlimited notes without paying', values: { dash: true, evernote: false } },
            { feature: 'Lock individual notes', values: { dash: true, evernote: false } },
            { feature: 'Biometric app lock', values: { dash: true, evernote: true } },
            { feature: 'Self-destructing notes', values: { dash: true, evernote: false } },
            { feature: 'Web clipper', values: { dash: false, evernote: true } },
            { feature: 'Open source', values: { dash: true, evernote: false } },
            { feature: 'Price', values: { dash: '$14.99 once', evernote: 'From $99 a year' } },
          ],
        }}
        sections={[
          {
            id: 'what-changed',
            heading: 'What changed at Evernote',
            body: (
              <>
                <p>
                  The free plan is now capped at 50 notes and one notebook, syncing on a single device. Starter costs $99 a
                  year, or $14.99 a month billed monthly. Advanced is $249.99 a year. The old Personal and Professional tiers
                  are gone. Whatever you make of the prices, the pattern is clear: the notes you wrote for free now sit behind
                  a recurring charge.
                </p>
              </>
            ),
          },
          {
            id: 'privacy',
            heading: 'Who can read your notes',
            body: (
              <>
                <p>
                  Evernote stores notes on its servers, encrypted with keys it holds, tied to an account. That is what makes
                  the web clipper, sharing and search across devices work, and it means the company can in principle read your
                  notes and must respond to legal demands about them.
                </p>
                <p>
                  Dash keeps notes on the device with no account. Lock a note and it is encrypted with AES-256-GCM; the key is
                  derived from your password and never leaves the machine. Turn on the optional Dash Sync and everything is
                  encrypted before upload, so the relay holds ciphertext only.
                </p>
              </>
            ),
          },
          {
            id: 'features',
            heading: 'What you give up, and what you gain',
            body: (
              <>
                <p>
                  <strong>Evernote keeps:</strong> the web clipper, document scanning and OCR, shared notebooks, integrations,
                  and a search that reaches inside images and PDFs on its servers.
                </p>
                <p>
                  <strong>Dash adds:</strong> a lock on any note and on the app, opened with Touch ID or Face ID, auto-lock
                  timers, a duress password that opens decoy notes, notes that delete themselves on a timer, wiki-style
                  [[links]], a local AI assistant that runs on your own machine, four themes, and export to Markdown, PDF,
                  DOCX or an encrypted backup.
                </p>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving from Evernote to Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export from Evernote</strong> as ENEX per notebook, or as HTML, while your account still allows it.
                  </li>
                  <li>
                    <strong>Keep the archive.</strong> Store the export somewhere you control; an encrypted .dashpack file is a
                    good home for it.
                  </li>
                  <li>
                    <strong>Bring across what you use</strong> and lock anything sensitive. Most people find the working set is
                    far smaller than the archive.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes you buy once, not rent. Dash is $14.99 on Mac, free on iPhone.'
        ctaHeadline='Your notes. Bought once. Kept on your device.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
