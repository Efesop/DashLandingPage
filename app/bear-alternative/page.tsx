import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Bear Alternatives in 2026: Encrypted, Buy Once';
const DESCRIPTION =
  'Bear alternatives in 2026 for encryption without a subscription, or an app beyond Apple: Dash, Obsidian, Craft, Apple Notes, Notesnook and iA Writer compared.';
const PATH = '/bear-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'bear alternative',
    'bear alternatives',
    'bear notes alternative',
    'apps like bear notes',
    'bear app alternative windows',
    'markdown notes app mac',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A private notes app for Mac and iPhone with a lock on any note and on the whole app included in the one-time price, no account, and sync that is optional and end-to-end encrypted.',
    bestFor: 'Bear’s Apple-native feel with encryption you do not rent',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['Note lock and app lock included, not a Pro feature', 'Duress password, self-destructing notes, Touch ID and Face ID', 'Open source (MIT); exports Markdown, PDF, DOCX'],
    cons: ['No Windows or Linux app', 'A block editor rather than raw Markdown', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Obsidian',
    tagline: 'Markdown files on your disk with a refined editor, backlinks and plugins, on every platform including Windows and Android.',
    bestFor: 'Bear’s Markdown, beyond Apple devices',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files stay local; Sync is end-to-end encrypted; no note lock built in',
    pros: ['Plain files you own', 'Windows, macOS, Linux, iOS, Android', 'Backlinks, graph, thousands of plugins'],
    cons: ['No encryption at rest built in', 'Set-up before you write', 'Closed source app'],
  },
  {
    name: 'Craft',
    tagline: 'Design-led documents with blocks, pages inside pages and beautiful sharing, on Mac, iPhone, iPad and the web.',
    bestFor: 'Structured documents that look good shared',
    price: 'Free (1,500 blocks, 1 GB); Plus subscription for unlimited content',
    privacy: 'Cloud-synced; Craft holds your data; no end-to-end encryption',
    pros: ['Polished native apps', 'Great for long, structured documents', 'Publishing and sharing built in'],
    cons: ['Cloud-first by design', 'No note-level encryption', 'Full use needs the subscription'],
  },
  {
    name: 'Apple Notes',
    tagline: 'Free, preinstalled, and better every year, with locked notes, tags, Smart Folders and, since macOS 26, Markdown export.',
    bestFor: 'The zero-cost option already on your Mac',
    price: 'Free',
    privacy: 'iCloud holds a key unless Advanced Data Protection is on; locked notes are end-to-end encrypted',
    pros: ['Free and everywhere Apple is', 'Locked notes are end-to-end encrypted', 'Handwriting and document scanning'],
    cons: ['No app lock', 'Apple devices only', 'Export drops folder structure'],
  },
  {
    name: 'Notesnook',
    tagline: 'Encrypted by default behind an account, with a rich editor on the free plan and clients everywhere.',
    bestFor: 'Encryption on every platform',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default (XChaCha20-Poly1305, Argon2)',
    pros: ['Everything encrypted, no Pro upgrade needed', 'Mac, Windows, Linux, iOS, Android, web', 'GPL-3.0 client and server'],
    cons: ['Account required', 'Not local files', 'Free tier limits attachments'],
  },
  {
    name: 'iA Writer',
    tagline: 'A focused Markdown writing app in plain text files, bought once per platform.',
    bestFor: 'Writing rather than note management',
    price: '$49.99 once on Mac; bought separately per platform',
    privacy: 'Plain files in the location you choose (iCloud or local); no encryption',
    pros: ['One-time purchase', 'Plain Markdown files', 'Mac, Windows, iOS and iPad'],
    cons: ['No tags-first organisation like Bear', 'No note encryption or lock', 'Each platform is a separate purchase'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Bear?',
    answer:
      'Bear is one of the best-designed notes apps on the Mac. People look elsewhere for three reasons: the useful parts (sync, themes, note encryption, app lock) need Bear Pro at $29.99 a year; Bear runs only on Apple devices; and iCloud sync is not end-to-end encrypted by Bear. If you are all-Apple and happy to subscribe, stay.',
  },
  {
    question: 'What is the best free Bear alternative?',
    answer:
      'Obsidian is free for personal use and keeps Bear’s Markdown idea in files you own. Apple Notes is free and already installed. Notesnook’s free plan includes a rich editor and encryption. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Is there a Bear alternative with encryption?',
    answer:
      'Dash locks any note with AES-256 and locks the whole app, included in the one-time price. Notesnook encrypts everything by default. Apple Notes encrypts locked notes end to end. Obsidian encrypts sync only; Craft and iA Writer have no note encryption.',
  },
  {
    question: 'Can I import my Bear notes?',
    answer:
      'Bear exports notes as Markdown, TextBundle, PDF, HTML or DOCX (some formats need Pro). Obsidian opens a Markdown folder as a vault; iA Writer opens the files directly; Apple Notes imports Markdown since macOS 26; Notesnook imports through its app. In Dash, paste in the notes you use and keep the export as an archive.',
  },
  {
    question: 'Does Bear encrypt notes?',
    answer:
      'Yes, individually and on Bear Pro. You set a password on a note, and Face ID or Touch ID unlocks it on your devices; only the note body is encrypted, and titles stay visible. Bear cannot recover a forgotten password. The rest of your library syncs through iCloud with Apple’s keys.',
  },
];

const related = [
  {
    title: 'Best notes apps for Mac',
    href: '/best-notes-app-for-mac',
    description: 'Eight Mac notes apps compared on privacy, offline use and price.',
  },
  {
    title: 'Notes app with password protection',
    href: '/password-protected-notes',
    description: 'Lock a note, lock the app, and what a lock screen does not do.',
  },
  {
    title: 'Apple Notes alternatives',
    href: '/apple-notes-alternative',
    description: 'Six apps for encryption, export or life beyond Apple devices.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Bear alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function BearAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Bear Alternatives'
        subheadline='Six notes apps for people who want Bear’s polish without the subscription, encryption they do not rent, or an app that runs beyond Apple devices.'
        updated='September 2026'
        intro={
          <>
            <p>
              Bear is the app many Mac users compare everything else to: Markdown underneath, beautiful typography on top,
              tags instead of folders. The reasons people look for a Bear alternative are specific. Sync, themes, note
              encryption and the app lock all sit behind Bear Pro at $29.99 a year; the app runs only on Apple devices; and
              its iCloud sync is not end-to-end encrypted by Bear.
            </p>
            <p>
              The six apps below each answer one of those. We build <a href='/'>Dash</a>, so it is listed first and judged
              by the same rules as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Bear alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Bear',
            body: (
              <>
                <ul>
                  <li>
                    <strong>The subscription.</strong> Bear is free to write in, but syncing between your Mac and iPhone,
                    encrypting a note or locking the app all need Pro at $2.99 a month or $29.99 a year.
                  </li>
                  <li>
                    <strong>Apple only.</strong> No Windows, Linux or Android app, and no web app.
                  </li>
                  <li>
                    <strong>Sync privacy.</strong> Notes travel through iCloud with Apple’s keys unless you have Advanced Data
                    Protection on; only individually encrypted notes are protected end to end.
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
                  Keep the writing experience; Bear set a high bar and a replacement that feels like a spreadsheet is a
                  step back. Keep per-note encryption as the floor. Then fix the thing that made you look: Dash if it was
                  paying yearly for a lock, Obsidian or Notesnook if it was Apple-only, Craft if you want the polish pointed
                  at shareable documents, iA Writer if you mostly write long pieces.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your notes out of Bear',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Decrypt any encrypted notes</strong> you want to keep; exports cannot read them otherwise.
                  </li>
                  <li>
                    <strong>Export.</strong> Select notes, or a tag, and export as Markdown or TextBundle (which keeps images).
                    PDF, HTML and DOCX are there too; some formats need Pro.
                  </li>
                  <li>
                    <strong>Import.</strong> Obsidian and iA Writer open the Markdown folder as it is. Apple Notes imports
                    Markdown since macOS 26. Notesnook imports through its app. In Dash, paste in the notes you use and keep
                    the export as an encrypted .dashpack archive.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A lock on every note, included in the price. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Encryption you buy once, not rent.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
