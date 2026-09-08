import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Standard Notes Alternatives (2026): Rich Text, Encrypted';
const DESCRIPTION =
  'Standard Notes alternatives in 2026 for rich text without a $90-a-year plan or an account: Dash, Notesnook, Joplin, Obsidian, Anytype and Cryptee compared.';
const PATH = '/standard-notes-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'standard notes alternative',
    'standard notes alternatives',
    'apps like standard notes',
    'encrypted notes app free rich text',
    'standard notes vs notesnook',
    'encrypted notes app no account',
  ],
});

// facts checked 2026-09-08 against each project's pricing page or repository; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A rich editor with no account: notes stay on your Mac or iPhone, any note can be locked with AES-256, and the Mac app is bought once. Sync is optional and end-to-end encrypted.',
    bestFor: 'Encryption without an account or a yearly plan',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['No account, nothing uploaded by default', 'Rich editor, [[links]], tags, attachments, local AI', 'Duress password, self-destructing notes, app lock; MIT licensed'],
    cons: ['Encryption is per note you lock, not everything automatically', 'No Windows or Linux app', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Notesnook',
    tagline:
      'The closest like-for-like replacement: encrypted by default behind an account, with a rich editor on the free plan and cheaper paid tiers than Standard Notes.',
    bestFor: 'Standard Notes’ model with a better free tier',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default (XChaCha20-Poly1305, Argon2)',
    pros: ['Rich text without paying', 'Mac, Windows, Linux, iOS, Android and web', 'GPL-3.0 client and server'],
    cons: ['Account required', 'Free tier limits attachments to 50 MB a month', 'Younger project'],
  },
  {
    name: 'Joplin',
    tagline: 'Markdown notes and notebooks with end-to-end encrypted sync to the storage of your choice. Free, open source and everywhere.',
    bestFor: 'Bringing your own storage',
    price: 'Free; Joplin Cloud from €2.99 a month',
    privacy: 'End-to-end encryption for sync, switched on by you',
    pros: ['Sync to Nextcloud, Dropbox, OneDrive, WebDAV or Joplin Cloud', 'Windows, macOS, Linux, Android, iOS', 'AGPL-3.0, huge plugin ecosystem'],
    cons: ['Encryption is opt-in', 'Utilitarian interface', 'No lock on individual notes'],
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files on your disk with a rich, extensible editor. Free for personal use; the end-to-end encrypted sync is the paid part.',
    bestFor: 'Notes as files you own outright',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files stay local; Sync is end-to-end encrypted; no built-in note lock',
    pros: ['Plain files, no lock-in', 'Backlinks, graph, thousands of plugins', 'End-to-end encrypted sync'],
    cons: ['No encryption at rest without plugins or full-disk encryption', 'Set-up before you write', 'Closed source app'],
  },
  {
    name: 'Anytype',
    tagline:
      'A local-first, end-to-end encrypted workspace with objects, relations and shared spaces. Source-available rather than open source, with a generous free tier.',
    bestFor: 'A Notion-like workspace that stays encrypted',
    price: 'Explorer free (1 GB network space); Builder $99 a year; Co-Creator $299 for three years',
    privacy: 'Local-first with end-to-end encrypted peer-to-peer sync',
    pros: ['Encrypted collaboration, not just encrypted notes', 'Mac, Windows, Linux, iOS and Android', 'Free tier covers most personal use'],
    cons: ['Its own source-available licence, not an OSI licence', 'Heavier than a notes app', 'Sync depends on Anytype’s network for the free space'],
  },
  {
    name: 'Cryptee',
    tagline: 'An end-to-end encrypted document and photo vault from Estonia with a Markdown editor, ghost folders and a web-first design.',
    bestFor: 'Encrypted documents and photos in one place',
    price: 'Free up to 100 MB; paid plans from €3 a month for 10 GB',
    privacy: 'End-to-end encrypted (AES-256), metadata included; based in Estonia',
    pros: ['Documents, files and photos under one encrypted roof', 'Ghost folders that only open by name', 'Web app runs anywhere'],
    cons: ['Web-first; no native Mac app', 'Only the web client is open source', 'Storage-based pricing'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Standard Notes?',
    answer:
      'Usually one of three reasons: the free plan is plain text only and the rich editors cost $90 a year; everything sits behind an account, which some people would rather avoid; or the interface feels dated next to newer apps. Standard Notes remains an excellent, well-audited choice if none of those bother you.',
  },
  {
    question: 'What is the best free Standard Notes alternative?',
    answer:
      'Notesnook, if you want the same encrypted-by-default model with a rich editor for free. Obsidian and Joplin are free and keep notes in files you control. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Which alternatives are end-to-end encrypted?',
    answer:
      'Notesnook, Anytype and Cryptee encrypt everything by default. Joplin and Obsidian encrypt their sync end to end but keep files in the clear on your disk. Dash locks the notes you choose with AES-256 on the device and encrypts sync end to end.',
  },
  {
    question: 'Can I import my Standard Notes notes?',
    answer:
      'Export a decrypted backup from Standard Notes; it produces plain text and JSON. Obsidian and Joplin read plain text or Markdown directly, Notesnook imports from other apps through its app, and Dash accepts pasted text while you keep the backup as an archive.',
  },
  {
    question: 'Is Standard Notes still free?',
    answer:
      'Yes. Unlimited encrypted plain-text notes on every platform cost nothing. The Productivity plan at $90 a year and the Professional plan at $120 a year add rich editors, revision history and file storage. Standard Notes has been part of Proton since April 2024.',
  },
];

const related = [
  {
    title: 'Standard Notes vs Notesnook',
    href: '/standard-notes-vs-notesnook',
    description: 'The two encrypted-by-default apps side by side, with Dash as the third option.',
  },
  {
    title: 'Open source note taking apps',
    href: '/open-source-notes-app',
    description: 'Six apps whose code you can read, compared on licence and encryption.',
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
  itemListJsonLd('Standard Notes alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function StandardNotesAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Standard Notes Alternatives'
        subheadline='Six encrypted or local-first apps for people who want rich text without the yearly plan, or notes without an account at all.'
        updated='September 2026'
        intro={
          <>
            <p>
              Standard Notes is one of the most trustworthy notes apps there is: end-to-end encrypted since 2016, audited,
              open source, and now backed by Proton. People look for a Standard Notes alternative for a narrow set of reasons.
              The free editor is plain text and the rich ones cost $90 a year; everything lives behind an account; and the app
              looks its age. None of those is about security.
            </p>
            <p>
              The six apps below each fix one of them without giving the security back. We build <a href='/'>Dash</a>, so it
              is listed first and judged by the same rules as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Standard Notes alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Standard Notes',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Plain text on the free plan.</strong> Headings, lists, tables and images need Productivity at $90
                    a year, which is more than most notes apps charge for everything.
                  </li>
                  <li>
                    <strong>An account at the centre.</strong> The encryption is real, but every note still passes through a
                    service under a login, and some people would rather have neither.
                  </li>
                  <li>
                    <strong>The interface.</strong> Deliberately plain, which reads as dated next to Notesnook or Bear.
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
                  Keep encryption as the floor: whatever you move to should be end-to-end encrypted, or should keep notes on
                  your device so there is nothing to encrypt in transit. Keep the open code, so the claim can be checked. Then
                  fix the thing that made you look: Notesnook if it was the free editor, Dash if it was the account, Obsidian
                  or Joplin if you want files you can open with anything.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your notes out of Standard Notes',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export a decrypted backup</strong> from Standard Notes. You get plain text files and a JSON archive.
                  </li>
                  <li>
                    <strong>Import where it is supported.</strong> Obsidian opens a folder of text files as a vault. Joplin
                    imports Markdown. Notesnook imports from other apps inside the app; check its help pages for the current
                    list.
                  </li>
                  <li>
                    <strong>Or start fresh.</strong> In Dash, paste the notes you use and keep the backup as an archive,
                    ideally inside an encrypted .dashpack export on a drive you control.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Encrypted notes with no account to make. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Rich text, real encryption, no account.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
