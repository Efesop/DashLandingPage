import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Apple Notes Alternatives in 2026: Encrypted, Exportable';
const DESCRIPTION =
  'Apple Notes alternatives in 2026 for people who want encryption, export or Windows: Dash, Bear, Obsidian, Notesnook, UpNote and Joplin compared.';
const PATH = '/apple-notes-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'apple notes alternative',
    'apple notes alternatives',
    'best apple notes alternative',
    'apps like apple notes',
    'apple notes replacement mac',
    'export apple notes',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A private notes app for Mac and iPhone that keeps notes on the device with no account, locks any note with AES-256, locks the whole app, and exports to Markdown, PDF and DOCX.',
    bestFor: 'Apple Notes users who want a lock on the app and no iCloud in the loop',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted, optional',
    pros: ['No Apple Account or iCloud required', 'Lock any note, lock the app, duress password, self-destructing notes', 'Exports to Markdown, PDF, DOCX and an encrypted backup; open source'],
    cons: ['No Windows or Linux app', 'No handwriting or document scanning', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Bear',
    tagline: 'The closest feel to Apple Notes with a Markdown heart: tags instead of folders, beautiful typography, and per-note encryption on Pro.',
    bestFor: 'A prettier Apple Notes on Apple devices',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock need Pro',
    pros: ['Nested tags and cross-note links', 'Encrypt individual notes on Pro', 'Exports to Markdown, PDF, DOCX and more'],
    cons: ['Apple platforms only, like Apple Notes', 'Sync and encryption are paid', 'iCloud sync is not end-to-end encrypted by Bear'],
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files on your disk with a huge plugin ecosystem. Runs on Windows and Linux as well as Apple devices.',
    bestFor: 'Owning your notes as files, on any platform',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files stay local; Sync is end-to-end encrypted; no note lock built in',
    pros: ['Your notes are files any editor can open', 'Windows, macOS, Linux, iOS, Android', 'Backlinks, graph, thousands of plugins'],
    cons: ['No encryption at rest without plugins or FileVault', 'Set-up before you write', 'Closed source app'],
  },
  {
    name: 'Notesnook',
    tagline: 'Encrypted by default behind an account, with a rich editor on the free plan and clients for every platform.',
    bestFor: 'End-to-end encryption everywhere, including Windows and Android',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default (XChaCha20-Poly1305, Argon2)',
    pros: ['Everything encrypted without thinking about it', 'Web, desktop and mobile', 'GPL-3.0 client and server'],
    cons: ['Account required', 'Free tier limits attachments to 50 MB a month', 'Notes are not local files'],
  },
  {
    name: 'UpNote',
    tagline: 'A tidy, fast notes app across Mac, Windows, Linux, iOS and Android, with a rare lifetime price.',
    bestFor: 'Apple Notes simplicity on every platform, bought once',
    price: 'Free; Premium $1.99 a month or $39.99 for life',
    privacy: 'Cloud-synced through UpNote’s service; notes can be locked in the app',
    pros: ['Lifetime purchase option', 'Every desktop and mobile platform', 'Clean, quick, familiar'],
    cons: ['Cloud-first with an account', 'Not end-to-end encrypted', 'Closed source'],
  },
  {
    name: 'Joplin',
    tagline: 'Open-source Markdown notes with end-to-end encrypted sync to the cloud you already have.',
    bestFor: 'Open source with your own storage',
    price: 'Free; Joplin Cloud from €2.99 a month',
    privacy: 'End-to-end encryption for sync, switched on by you',
    pros: ['Sync to Nextcloud, Dropbox, OneDrive, WebDAV or Joplin Cloud', 'Windows, macOS, Linux, Android, iOS', 'AGPL-3.0, web clipper, plugins'],
    cons: ['Encryption is opt-in', 'Plainer interface', 'No lock on individual notes'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Apple Notes?',
    answer:
      'Apple Notes is excellent, and free. People leave for four reasons: they want notes on Windows or Android; they want an app lock or encryption for every note rather than a lock on a few; they want to stay out of iCloud and an Apple Account; or they want notes as files they can move anywhere. If none of those apply, stay.',
  },
  {
    question: 'What is the best free Apple Notes alternative?',
    answer:
      'Obsidian, if you want plain files and cross-platform apps. Notesnook, if you want everything encrypted on a free plan. Joplin, if you want open source with your own cloud. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Is there an Apple Notes alternative with encryption?',
    answer:
      'Notesnook encrypts everything by default. Dash locks any note with AES-256 on the device and encrypts sync end to end. Bear encrypts individual notes on Pro. Obsidian and Joplin encrypt sync but keep files in the clear on disk.',
  },
  {
    question: 'How do I export all Apple Notes?',
    answer:
      'Since macOS 26 and iOS 26, Apple Notes exports a note, or a selection of notes, as Markdown or PDF from File > Export as; folder structure is not preserved. For a whole library with folders and attachments intact, the Exporter app on the Mac App Store writes every note to Markdown or HTML in folders named after your notebooks. Locked notes must be unlocked first.',
  },
  {
    question: 'Can I import Apple Notes into these apps?',
    answer:
      'Obsidian opens an exported Markdown folder as a vault. Joplin and Bear import Markdown files. Notesnook imports through its app. Dash accepts pasted text; keep the export as an archive alongside.',
  },
];

const related = [
  {
    title: 'Best notes apps for Mac',
    href: '/best-notes-app-for-mac',
    description: 'Eight Mac notes apps compared on privacy, offline use and price.',
  },
  {
    title: 'Is Apple Notes secure?',
    href: '/is-apple-notes-secure',
    description: 'What Apple encrypts, what iCloud can read, and what Advanced Data Protection changes.',
  },
  {
    title: 'How to lock notes on iPhone and Mac',
    href: '/guides/lock-notes-on-iphone-and-mac',
    description: 'The steps in Apple Notes, and what a locked note protects.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Apple Notes alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function AppleNotesAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Apple Notes Alternatives'
        subheadline='Six notes apps for people who want encryption, export, an app lock, or a notes app that runs beyond Apple devices, and how to get your notes out.'
        updated='September 2026'
        intro={
          <>
            <p>
              Apple Notes is the default for a reason: it is free, fast, already installed, and better every year. An Apple
              Notes alternative earns its place by doing one of the things Notes cannot: run on Windows or Android, lock the
              whole app, encrypt every note, keep out of iCloud, or store notes as files you can open anywhere.
            </p>
            <p>
              The six apps below each do at least one. We build <a href='/'>Dash</a>, so it is listed first and judged by
              the same rules as the others.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Apple Notes alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Apple Notes',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Platforms.</strong> Notes lives on Apple devices and, awkwardly, iCloud.com. A Windows laptop at
                    work or an Android phone ends the arrangement.
                  </li>
                  <li>
                    <strong>Locking.</strong> You can lock individual notes, but not the app, and locked notes cannot be
                    searched or shared. There is no auto-lock and no duress option.
                  </li>
                  <li>
                    <strong>iCloud.</strong> Unlocked notes are readable by Apple unless you turn on Advanced Data Protection
                    for the whole account, and everything depends on an Apple Account.
                  </li>
                  <li>
                    <strong>Export.</strong> Markdown export only arrived with macOS 26, works per note, and drops your folder
                    structure.
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
                  Keep the speed and the zero-setup feel; any replacement that needs a course before you write is a
                  regression. Keep locked notes as the floor: whatever you move to should let you lock or encrypt what matters.
                  Then fix the specific thing: Obsidian or UpNote for platforms, Dash or Bear for a proper lock and encryption
                  on Apple devices, Notesnook for encryption everywhere, Joplin for open source with your own storage.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your notes out of Apple Notes',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Unlock any locked notes</strong> you want to take with you; export skips content it cannot read.
                  </li>
                  <li>
                    <strong>Export.</strong> On macOS 26, select the notes and choose File, Export as, Markdown (or PDF). For a
                    whole library with folders and attachments, use the Exporter app from the Mac App Store, which writes every
                    note to Markdown or HTML in folders named after your notebooks and keeps the dates.
                  </li>
                  <li>
                    <strong>Import.</strong> Obsidian opens the folder as a vault; Bear and Joplin import Markdown files;
                    Notesnook imports through its app. In Dash, paste in the notes you use and keep the export as an encrypted
                    .dashpack archive.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Lock the whole app, not just a note. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Notes that are private from everyone, Apple included.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
