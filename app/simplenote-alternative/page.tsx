import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Simplenote Alternatives in 2026: Simple, Private, Offline';
const DESCRIPTION =
  'Simplenote alternatives in 2026 now that development has ended: Dash, Apple Notes, Bear, Notesnook, Joplin and UpNote compared on privacy, price and platforms.';
const PATH = '/simplenote-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'simplenote alternative',
    'simplenote alternatives',
    'apps like simplenote',
    'simplenote replacement',
    'simple notes app private',
    'plain text notes app mac',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; Simplenote status per Automattic's March 2026 announcement
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'Simple on the surface, private underneath: notes on your Mac or iPhone with no account, a lock on any note, and sync that is optional and end-to-end encrypted.',
    bestFor: 'Simplenote’s ease with real privacy',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['No account and nothing uploaded by default', 'Lock any note, lock the app, duress password', 'Tags, folders, [[links]], search; open source (MIT)'],
    cons: ['No Windows or Linux app', 'A block editor rather than raw Markdown', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Apple Notes',
    tagline: 'Free, preinstalled, and the closest to Simplenote’s zero-friction feel on Apple devices, with locked notes and Markdown export since macOS 26.',
    bestFor: 'The free default on Apple devices',
    price: 'Free',
    privacy: 'iCloud holds a key unless Advanced Data Protection is on; locked notes are end-to-end encrypted',
    pros: ['Free and already installed', 'Locked notes are end-to-end encrypted', 'Imports and exports Markdown since macOS 26'],
    cons: ['Apple devices only', 'No app lock', 'Needs an Apple Account to sync'],
  },
  {
    name: 'Bear',
    tagline: 'Markdown notes with tags, like Simplenote, wrapped in the best typography on the Mac.',
    bestFor: 'Simplenote’s tags-and-Markdown model, prettier',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock need Pro',
    pros: ['Tags and Markdown, as in Simplenote', 'Encrypt individual notes on Pro', 'Exports to Markdown, PDF, DOCX'],
    cons: ['Apple platforms only', 'Sync needs Pro', 'Closed source'],
  },
  {
    name: 'Notesnook',
    tagline: 'Simplenote’s everywhere-sync with the encryption Simplenote never had, on a free plan.',
    bestFor: 'The same platforms, encrypted',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default',
    pros: ['Mac, Windows, Linux, iOS, Android, web', 'Everything encrypted, free', 'GPL-3.0 client and server'],
    cons: ['Account required', 'Heavier than Simplenote', 'Free tier limits attachments'],
  },
  {
    name: 'Joplin',
    tagline: 'Open-source Markdown notes on every platform, with end-to-end encrypted sync to the storage you choose.',
    bestFor: 'Open source with your own storage',
    price: 'Free; Joplin Cloud from €2.99 a month',
    privacy: 'End-to-end encryption for sync, switched on by you',
    pros: ['Every desktop and mobile platform', 'Sync to Nextcloud, Dropbox, OneDrive, WebDAV or Joplin Cloud', 'AGPL-3.0'],
    cons: ['Encryption is opt-in', 'Plainer than Simplenote in places', 'No note lock'],
  },
  {
    name: 'UpNote',
    tagline: 'The nearest thing to a maintained Simplenote: fast, tidy, on every platform, with a lifetime price.',
    bestFor: 'Simplenote’s feel with active development',
    price: 'Free; Premium $1.99 a month or $39.99 for life',
    privacy: 'Cloud-synced through UpNote’s service; notes can be locked in the app',
    pros: ['Lifetime purchase option', 'Mac, Windows, Linux, iOS, Android', 'Actively developed'],
    cons: ['Cloud-first with an account', 'Not end-to-end encrypted', 'Closed source'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Simplenote?',
    answer:
      'Two reasons, one new. Simplenote has never been end-to-end encrypted: notes are encrypted in transit and on Automattic’s servers, but the company holds the keys, and an account is required. And in March 2026 Automattic said active development has ended, with only maintenance from here. It still works, and it is still free, but it is no longer moving.',
  },
  {
    question: 'What is the best free Simplenote alternative?',
    answer:
      'Apple Notes on Apple devices, Notesnook if you want the same cross-platform sync with encryption on a free plan, Joplin if you want open source with your own storage. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Is there a Simplenote alternative with encryption?',
    answer:
      'Notesnook encrypts everything by default. Dash locks any note with AES-256 on the device and encrypts sync end to end. Apple Notes encrypts locked notes end to end. Bear encrypts individual notes on Pro. Joplin encrypts sync when you turn it on.',
  },
  {
    question: 'Can I import my Simplenote notes?',
    answer:
      'Simplenote exports everything as a JSON file or as one text file per note from its settings. Bear and Joplin import text and Markdown files; Apple Notes imports Markdown since macOS 26; Notesnook and UpNote import through their apps. In Dash, paste in the notes you use and keep the export as an archive.',
  },
  {
    question: 'Is Simplenote encrypted?',
    answer:
      'Not end to end. Notes travel over HTTPS and sit encrypted on Automattic’s servers, but Automattic holds the keys, so it can read them. The client apps are open source under the GPL; the server is not.',
  },
];

const related = [
  {
    title: 'Apple Notes alternatives',
    href: '/apple-notes-alternative',
    description: 'Six apps for encryption, export or life beyond Apple devices.',
  },
  {
    title: 'Best notes apps for Mac',
    href: '/best-notes-app-for-mac',
    description: 'Eight Mac notes apps compared on privacy, offline use and price.',
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
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Simplenote alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function SimplenoteAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Simplenote Alternatives'
        subheadline='Six notes apps that keep Simplenote’s simplicity, add the privacy it never had, and are still being developed.'
        updated='September 2026'
        intro={
          <>
            <p>
              Simplenote earned its place by doing almost nothing: plain notes, tags, instant sync, free on every platform. Two
              things send people looking for a Simplenote alternative. It was never private from Automattic, which holds the
              keys to every note. And in March 2026 Automattic said active development has ended, leaving the app in
              maintenance.
            </p>
            <p>
              The six apps below keep the simplicity and fix one or both problems. We build <a href='/'>Dash</a>, so it is
              listed first and judged by the same rules as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Simplenote alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Simplenote',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No end-to-end encryption.</strong> Notes are encrypted in transit and at rest, but with
                    Automattic’s keys. A private note in Simplenote is private from strangers, not from the company.
                  </li>
                  <li>
                    <strong>Development has ended.</strong> Since March 2026 the app receives bug fixes only. It works today;
                    it will not improve.
                  </li>
                  <li>
                    <strong>An account, always.</strong> There is no way to use Simplenote without one.
                  </li>
                  <li>
                    <strong>Plain text only.</strong> Fine by design, until you want an image, a table or a lock.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'what-to-keep',
            heading: 'What to keep and what to fix',
            body: (
              <>
                <p>
                  Keep the speed: a notes app that opens instantly and gets out of the way is the whole appeal. Keep tags and
                  search. Then fix what Simplenote could not: choose an app that encrypts, ideally without an account, and one
                  that someone is still working on. UpNote is the closest like-for-like; Notesnook adds encryption on the same
                  platforms; Dash removes the account altogether.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your notes out of Simplenote',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export.</strong> In Simplenote’s settings, export all notes as a JSON file or as individual text
                    files. The text files carry your Markdown as written.
                  </li>
                  <li>
                    <strong>Import.</strong> Bear and Joplin import text and Markdown files, Apple Notes imports Markdown since
                    macOS 26, Notesnook and UpNote import through their apps.
                  </li>
                  <li>
                    <strong>Or start fresh.</strong> In Dash, paste in the notes you use and keep the export as an encrypted
                    .dashpack archive on a drive you control.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Simple, private, still being built. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Simple notes that are actually private.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
