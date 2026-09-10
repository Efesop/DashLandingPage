import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = '8 Obsidian Alternatives in 2026 (Simpler, Encrypted or Free)';
const DESCRIPTION =
  'The best Obsidian alternatives in 2026 if you want less setup, built-in encryption or a friendlier mobile app: Dash, Logseq, Joplin, Notesnook, Bear, Craft, Anytype and Apple Notes.';
const PATH = '/obsidian-alternatives';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['obsidian alternative', 'obsidian alternatives', 'best obsidian alternative', 'obsidian alternative free', 'obsidian alternative mac', 'apps like obsidian'],
});

const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'Wiki-style [[links]], folders and tags like Obsidian, but with encryption, Touch ID and Face ID built in. Works offline on Mac and iPhone with no plugins to configure.',
    bestFor: 'Obsidian users who want privacy without the tinkering',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Encrypted on-device; optional end-to-end encrypted sync',
    pros: ['Lock any note or the whole app with AES-256', 'Page links, focus mode, local AI, self-destructing notes', 'Open source (MIT); exports to Markdown, PDF, DOCX'],
    cons: ['Not plain Markdown files on disk', 'No graph view', 'No Windows or Linux app yet'],
    isDash: true,
  },
  {
    name: 'Logseq',
    tagline: 'An open-source outliner with block references, daily journals and a graph. The closest thing to Obsidian in spirit.',
    bestFor: 'Outliners and daily-journal thinkers',
    price: 'Free and open source',
    privacy: 'Local files; sync is optional',
    pros: ['Block-level references', 'Local Markdown or Org files', 'Active community'],
    cons: ['Outliner style is not for everyone', 'Mobile apps lag the desktop', 'Sync has been in flux'],
  },
  {
    name: 'Joplin',
    tagline: 'Open-source notebooks and Markdown with end-to-end encrypted sync to a cloud you choose.',
    bestFor: 'Bring-your-own-storage sync',
    price: 'Free; optional Joplin Cloud',
    privacy: 'End-to-end encryption available',
    pros: ['Sync via Dropbox, OneDrive, Nextcloud, WebDAV', 'Web clipper', 'Cross-platform'],
    cons: ['Plain interface', 'Encryption is opt-in', 'Fewer linking features than Obsidian'],
  },
  {
    name: 'Notesnook',
    tagline: 'Zero-knowledge encrypted notes with a gentle learning curve and a genuinely usable free tier.',
    bestFor: 'Encrypted sync across many devices',
    price: 'Free tier; Notesnook Pro for attachments and extras',
    privacy: 'End-to-end encrypted',
    pros: ['Encryption on by default', 'Open source', 'Good importers'],
    cons: ['No wiki links or graph', 'Account required', 'Attachments need Pro'],
  },
  {
    name: 'Bear',
    tagline: 'The prettiest Markdown editor on Apple platforms, with nested tags instead of folders.',
    bestFor: 'Writers on Mac and iPhone',
    price: 'Free; Bear Pro subscription for sync',
    privacy: 'iCloud sync; no note-level encryption',
    pros: ['Beautiful themes and typography', 'Cross-note links', 'Fast'],
    cons: ['Apple only', 'Sync needs the subscription', 'No encryption'],
  },
  {
    name: 'Craft',
    tagline: 'Block-based documents with pages inside pages and lovely sharing.',
    bestFor: 'Structured documents you present or share',
    price: 'Free tier; paid plans',
    privacy: 'Cloud-synced; provider holds data',
    pros: ['Native and polished', 'Great for long docs', 'Publishing built in'],
    cons: ['Cloud-first', 'No encryption', 'Less of a knowledge graph'],
  },
  {
    name: 'Anytype',
    tagline: 'Local-first objects and relations with peer-to-peer encrypted sync. Ambitious and improving fast.',
    bestFor: 'People who want Notion-style objects without the cloud',
    price: 'Free for personal use',
    privacy: 'Encrypted, local-first',
    pros: ['Objects, relations and sets', 'Encrypted sync without a central server', 'Cross-platform'],
    cons: ['Still maturing', 'Concepts take time to learn', 'Export is improving but not effortless'],
  },
  {
    name: 'Apple Notes',
    tagline: 'Free, fast and already installed. With tags, Smart Folders and locked notes it covers more than people expect.',
    bestFor: 'Simplicity inside the Apple ecosystem',
    price: 'Free',
    privacy: 'iCloud key unless Advanced Data Protection is on',
    pros: ['Zero setup', 'Handwriting and scanning', 'Locked notes are end-to-end encrypted'],
    cons: ['No wiki links', 'Weak export', 'Apple platforms only'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why do people look for an Obsidian alternative?',
    answer:
      'Three reasons come up most: the setup burden (plugins, themes and vault configuration), paid sync for multi-device use, and the lack of built-in encryption or note locking. Alternatives like Dash, Notesnook and Standard Notes make encryption the default; Logseq and Joplin keep the open, local-files philosophy.',
  },
  {
    question: 'What is the best free Obsidian alternative?',
    answer:
      'Logseq is the closest free, open-source alternative, with block references and a graph. Joplin and Notesnook are also free, and Apple Notes is free on Apple devices. Dash is free on iPhone and the web, with a one-time $14.99 Mac app.',
  },
  {
    question: 'Is there an Obsidian alternative with encryption built in?',
    answer:
      'Yes. Dash locks individual notes or the whole app with AES-256 and unlocks with Touch ID or Face ID, with no plugin required. Notesnook and Standard Notes encrypt everything end-to-end by default. Obsidian itself only encrypts through its paid Sync service.',
  },
  {
    question: 'Can I keep wiki-style links if I leave Obsidian?',
    answer:
      'Dash, Logseq and Bear all support [[double-bracket]] links between notes. Dash also shows an autocomplete list of pages as you type the brackets, and links work across all four of its themes.',
  },
  {
    question: 'Can I import my Obsidian vault?',
    answer:
      'Most of the apps above import Markdown files, since Obsidian stores notes as plain .md files. Dash imports Markdown, plain text, DOCX, CSV and JSON, and links written as [[Page Name]] resolve to pages with matching titles.',
  },
];

const related = [
  { title: 'Best notes apps for Mac', href: '/best-notes-app-for-mac', description: 'Eight Mac note-taking apps compared on privacy, offline use and price.' },
  { title: 'Dash vs Obsidian', href: '/obsidian-alternatives', description: 'A head-to-head on encryption, linking and mobile.' },
  { title: 'Page linking in Dash', href: '/guides/page-linking', description: 'How wiki-style [[links]] work in Dash.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  itemListJsonLd('Obsidian alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function ObsidianAlternativesPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="Search"
        badgeText="Alternatives"
        headline="8 Obsidian Alternatives Worth Switching To"
        subheadline="Obsidian is brilliant if you enjoy building your tools. If you would rather write than configure, need encryption without plugins, or want a mobile app that just works, one of these fits better."
        updated="September 2026"
        intro={
          <>
            <p>
              Obsidian earned its following by treating your notes as plain Markdown files and letting a plugin ecosystem
              grow around them. That freedom is also why people leave: a fresh vault needs hours of setup, multi-device sync
              costs extra, and locking a sensitive note means trusting a third-party plugin.
            </p>
            <p>
              Below are eight alternatives, each chosen for a specific reason someone gives up on Obsidian. We make{' '}
              <strong>Dash</strong>, so it is listed first, and we have tried to describe every app on the same terms.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash and Obsidian at a glance',
          subheading: 'Obsidian pricing checked on 8 September 2026.',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'obsidian', label: 'Obsidian' },
          ],
          rows: [
            { feature: 'Works fully offline', values: { dash: true, obsidian: true } },
            { feature: 'Works without an account', values: { dash: true, obsidian: true } },
            { feature: 'Notes encrypted at rest on your disk', values: { dash: 'Locked notes', obsidian: false } },
            { feature: 'End-to-end encrypted sync', values: { dash: true, obsidian: true } },
            { feature: 'Lock the whole app with Touch ID', values: { dash: true, obsidian: false } },
            { feature: 'Wiki-style [[links]]', values: { dash: true, obsidian: true } },
            { feature: 'Graph view and plugins', values: { dash: false, obsidian: true } },
            { feature: 'Notes as plain files you own', values: { dash: 'Export', obsidian: true } },
            { feature: 'Open source app', values: { dash: true, obsidian: false } },
            { feature: 'Price', values: { dash: '$14.99 once', obsidian: 'Free; Sync $4/mo' } },
          ],
        }}
        apps={apps}
        appsHeading="The best Obsidian alternatives in 2026"
        inlineCTA="Links, folders and encryption without plugins — try Dash"
        sections={[
          {
            id: 'encryption-nuance',
            heading: 'The encryption question, precisely',
            body: (
              <>
                <p>
                  Obsidian Sync is genuinely end-to-end encrypted: notes are encrypted before they reach Obsidian&rsquo;s
                  servers, so the company cannot read them, for $4 a month billed yearly. That part is well built, and often
                  misdescribed elsewhere.
                </p>
                <p>
                  What stays unprotected is the vault itself. Your Markdown files sit in the clear on your disk, in your
                  backups, and in any folder you happen to sync with something else. Full-disk encryption helps when the
                  machine is off and does nothing while you are logged in. That gap is what an app with per-note encryption
                  closes, and it is why people who otherwise like Obsidian go looking.
                </p>
              </>
            ),
          },
          {
            heading: 'What to look for in an Obsidian replacement',
            body: (
              <>
                <p>
                  <strong>Keep the links.</strong> If you rely on [[wiki links]] between notes, make sure the replacement has
                  them. Dash, Logseq and Bear do; Apple Notes and Notesnook do not.
                </p>
                <p>
                  <strong>Decide how much you want to configure.</strong> Logseq and Anytype reward tinkering the way Obsidian
                  does. Dash, Bear and Apple Notes are opinionated: open them and write.
                </p>
                <p>
                  <strong>Check whether encryption is built in or bolted on.</strong> Note locking in Obsidian depends on
                  community plugins. Dash, Notesnook and Standard Notes encrypt without any of that.
                </p>
                <p>
                  <strong>Test the mobile app first.</strong> Desktop-first tools often feel cramped on a phone. Dash was
                  redesigned for iPhone in 2026 with a full-width notes list and swipe to lock or trash.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Obsidian's links, without Obsidian's setup"
        ctaSubheadline="Dash gives you [[page links]], folders, tags and built-in encryption on Mac and iPhone. $14.99 one-time on Mac."
      />
    </>
  );
}
