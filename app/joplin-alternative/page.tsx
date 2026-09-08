import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Joplin Alternatives in 2026: Nicer Apps, Same Privacy';
const DESCRIPTION =
  'Joplin alternatives in 2026 with the same privacy and a nicer app: Dash, Notesnook, Standard Notes, Obsidian, Logseq and Bear compared, with export steps.';
const PATH = '/joplin-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'joplin alternative',
    'joplin alternatives',
    'apps like joplin',
    'joplin replacement',
    'open source notes app alternative',
    'encrypted notes app',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing page or repository; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A native-feeling notes app for Mac and iPhone with no account, a lock on any note, a lock on the whole app, and sync that is optional and end-to-end encrypted. Open source under MIT.',
    bestFor: 'Joplin’s privacy with a polished Mac and iPhone app',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['Feels native on Mac and iPhone', 'Lock any note, app lock, duress password, self-destructing notes', 'Local AI with Ollama and similar; exports Markdown, PDF, DOCX'],
    cons: ['No Windows or Linux app', 'Notes are not plain Markdown files on disk', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Notesnook',
    tagline: 'Everything encrypted by default, a modern editor, and clients on every platform Joplin runs on.',
    bestFor: 'Encryption you cannot forget to turn on',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default (XChaCha20-Poly1305, Argon2)',
    pros: ['Encrypted without a setting to remember', 'Mac, Windows, Linux, iOS, Android and web', 'GPL-3.0 client and server'],
    cons: ['Account required', 'Not plain files', 'Free tier limits attachments to 50 MB a month'],
  },
  {
    name: 'Standard Notes',
    tagline: 'The conservative choice: end-to-end encrypted since 2016, audited, and now part of Proton.',
    bestFor: 'A long security record',
    price: 'Free (plain text); Productivity $90 a year; Professional $120 a year',
    privacy: 'End-to-end encrypted by default; account required',
    pros: ['Nearly a decade of audits', 'Every platform and the web', 'AGPL-3.0, server code published'],
    cons: ['Free plan is plain text', 'Rich editors cost $90 a year', 'Dated interface'],
  },
  {
    name: 'Obsidian',
    tagline: 'The same plain-Markdown idea as Joplin with a far larger plugin ecosystem and a more refined editor.',
    bestFor: 'Joplin users who want more power in the same files',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files stay local; Sync is end-to-end encrypted',
    pros: ['Opens a folder of Markdown as a vault', 'Backlinks, graph and thousands of plugins', 'Windows, macOS, Linux, iOS, Android'],
    cons: ['Closed source app', 'No encryption at rest built in', 'Set-up before you write'],
  },
  {
    name: 'Logseq',
    tagline: 'An open-source outliner on local Markdown or Org-mode files, with daily journals, backlinks and a graph.',
    bestFor: 'Networked, block-based notes in plain files',
    price: 'Free',
    privacy: 'Files stay on your disk; no encryption built in',
    pros: ['AGPL-3.0 and free', 'Backlinks and block references', 'Desktop, web and iOS'],
    cons: ['No note encryption', 'Real-time sync still in alpha', 'Outliner style is not for everyone'],
  },
  {
    name: 'Bear',
    tagline: 'The prettiest Markdown notes app on Apple devices, with per-note encryption and app lock on Pro.',
    bestFor: 'Markdown with better typography, on Apple only',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock need Pro',
    pros: ['Beautiful editor and themes', 'Encrypt individual notes on Pro', 'Exports to Markdown, PDF, DOCX and more'],
    cons: ['Apple platforms only', 'Sync not end-to-end encrypted by Bear', 'Closed source'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Joplin?',
    answer:
      'Joplin does the important things right: open source, Markdown, end-to-end encrypted sync to storage you choose. People leave for the experience rather than the principles: the interface is plain, the mobile apps feel utilitarian, and encryption is a setting that is easy to leave off. If Joplin’s look does not bother you, there is no reason to move.',
  },
  {
    question: 'What is the best free Joplin alternative?',
    answer:
      'Obsidian keeps the plain-files approach with a nicer editor and is free for personal use. Logseq is free and open source. Notesnook and Standard Notes have free plans that encrypt everything. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Which alternatives are end-to-end encrypted?',
    answer:
      'Notesnook and Standard Notes encrypt everything by default. Dash locks any note with AES-256 on the device and encrypts sync end to end. Obsidian encrypts its sync but not the files on disk. Logseq has no encryption built in. Bear encrypts individual notes on Pro.',
  },
  {
    question: 'Can I import my Joplin notes?',
    answer:
      'Export from Joplin as Markdown (with or without front matter) or as a JEX archive. Obsidian and Logseq open the Markdown folder directly; Bear imports Markdown files; Notesnook and Standard Notes import through their apps. In Dash, paste in what you use and keep the export as an encrypted archive.',
  },
  {
    question: 'Is Joplin still free?',
    answer:
      'Yes. The apps are free and open source under the AGPL-3.0 licence on every platform. Joplin Cloud, the optional hosted sync, starts at €2.99 a month for the Basic plan and €5.99 for Pro; syncing to your own Nextcloud, Dropbox, OneDrive or WebDAV storage costs nothing.',
  },
];

const related = [
  {
    title: 'Open source note taking apps',
    href: '/open-source-notes-app',
    description: 'Six apps whose code you can read, compared on licence and encryption.',
  },
  {
    title: 'Standard Notes vs Notesnook',
    href: '/standard-notes-vs-notesnook',
    description: 'The two encrypted-by-default apps side by side.',
  },
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'How Dash encrypts a note on the device.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Joplin alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function JoplinAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Joplin Alternatives'
        subheadline='Six apps that keep Joplin’s principles, open code and real encryption, in a nicer package, and how to move your notes.'
        updated='September 2026'
        intro={
          <>
            <p>
              Joplin gets the principles right. It is open source, it stores Markdown, and it can sync end-to-end encrypted to
              storage you control. The reasons people look for a Joplin alternative are almost all about the experience: a
              plain interface, utilitarian mobile apps, and encryption that has to be switched on.
            </p>
            <p>
              The six apps below keep the principles and improve the experience in different directions. We build{' '}
              <a href='/'>Dash</a>, so it is listed first and judged by the same rules as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Joplin alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Joplin',
            body: (
              <>
                <ul>
                  <li>
                    <strong>The interface.</strong> Functional and unchanged in feel for years; it does not feel native on the
                    Mac or the iPhone.
                  </li>
                  <li>
                    <strong>Mobile.</strong> The phone apps work but feel like ports.
                  </li>
                  <li>
                    <strong>Encryption is opt-in.</strong> Many Joplin users sync for months before noticing the setting.
                  </li>
                  <li>
                    <strong>Bring-your-own-storage cuts both ways.</strong> Flexible, but another account to manage and one
                    more thing to break.
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
                  Keep the open code; a privacy app you cannot read is a promise, not a guarantee. Keep encryption, but prefer
                  an app where it is on by default or is a deliberate lock rather than a buried setting. Keep an export path
                  in a standard format. Then fix the experience: Dash or Bear for a native feel on Apple devices, Notesnook or
                  Standard Notes for encryption everywhere, Obsidian or Logseq for the same files with more power.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your notes out of Joplin',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export.</strong> In Joplin, export a notebook or everything as Markdown, as Markdown with front
                    matter (keeps dates and tags), or as a JEX archive for a full backup.
                  </li>
                  <li>
                    <strong>Import.</strong> Obsidian and Logseq open the Markdown folder as a vault or graph. Bear imports
                    Markdown files. Notesnook and Standard Notes import through their apps.
                  </li>
                  <li>
                    <strong>Or start fresh.</strong> In Dash, paste in the notes you use and keep the JEX archive, ideally
                    inside an encrypted .dashpack export on a drive you control.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Joplin’s privacy with a native Mac app. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Open source, encrypted, and nice to use.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
