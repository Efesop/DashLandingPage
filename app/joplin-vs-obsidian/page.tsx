import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Joplin vs Obsidian: Sync, Encryption, Price and Plugins';
const DESCRIPTION =
  'Joplin vs Obsidian compared on sync, encryption, price, plugins and Mac and iPhone apps, with a clear pick for each, and Dash as a third option with no account.';
const PATH = '/joplin-vs-obsidian';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'joplin vs obsidian',
    'obsidian vs joplin',
    'joplin or obsidian',
    'joplin vs obsidian reddit',
    'is joplin better than obsidian',
  ],
});

// facts checked 2026-10-19: joplinapp.org (plans, help, GitHub licence), obsidian.md (pricing, license, help),
// github.com/obsidianmd/obsidian-importer (supported formats); see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Joplin',
    tagline:
      'The open-source notebook. Notes and to-dos in notebooks, written in Markdown or a rich-text editor, synced to Joplin Cloud or to storage you already pay for, with end-to-end encryption you switch on.',
    bestFor: 'Free encrypted sync to Dropbox, OneDrive or Nextcloud',
    price: 'Free; Joplin Cloud from €2.99 a month or €28.69 a year',
    privacy: 'End-to-end encryption for every sync target, off until you turn it on',
    pros: ['Open source (AGPL-3.0)', 'Sync to Dropbox, OneDrive, Nextcloud, WebDAV or S3 for free', 'Web clipper, OCR on desktop, a biometric lock on mobile'],
    cons: ['Notes live in a database, not plain files', 'Plain interface, utilitarian mobile apps', 'Backlinks and graph only through plugins'],
  },
  {
    name: 'Obsidian',
    tagline:
      'A folder of Markdown files with a superb editor on top: links, backlinks, a graph, Canvas and thousands of community plugins. The app is free; sync and publishing are paid add-ons.',
    bestFor: 'Linked notes in plain files you own',
    price: 'Free, including for work; Sync $4 a month billed yearly ($5 monthly)',
    privacy: 'Files stay on your disk unencrypted; Sync is end-to-end encrypted',
    pros: ['Notes are plain .md files in a folder', 'Backlinks, graph, Canvas, Bases and thousands of plugins', 'Polished on Mac, Windows, Linux, iPhone and Android'],
    cons: ['Closed-source app', 'No encryption at rest or app lock built in', 'Rewards setup and tinkering'],
  },
  {
    name: 'Dash',
    tagline:
      'The third option for Mac and iPhone: no account, nothing uploaded by default, a lock on any note and on the whole app, and [[links]] with backlinks. It imports an Obsidian vault directly, and Joplin through its Markdown export.',
    bestFor: 'Private notes on Mac and iPhone without the setup',
    price: '$14.99 once on Mac; free on iPhone and the web; sync $4.99 a month, optional',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['Lock any note or the whole app with Touch ID or Face ID', 'Duress password and self-destructing notes', 'Open source (MIT); exports Markdown, PDF and DOCX'],
    cons: ['No Windows, Linux or Android app (Android uses the web app)', 'No graph view or plugins', 'Notes are not plain files on disk'],
    isDash: true,
  },
];

const faqs: FAQ[] = [
  {
    question: 'Is Joplin better than Obsidian?',
    answer:
      'For linking ideas, writing comfort and plugins, Obsidian is the stronger app. Joplin is better if you want open-source software end to end, free end-to-end encrypted sync through storage you already have, and an Evernote-style notebook with a web clipper. Neither is better at everything; pick the one whose trade-off you mind least.',
  },
  {
    question: 'Which is more private, Joplin or Obsidian?',
    answer:
      'Both keep notes on your device and work without an account. Joplin’s apps are open source, and its end-to-end encryption works with any sync target, but you must turn it on. Obsidian’s paid Sync is end-to-end encrypted, while the app is closed source and free sync through iCloud Drive relies on Apple’s encryption. Neither encrypts notes on your own disk, and neither locks itself on a Mac.',
  },
  {
    question: 'Is Obsidian free? Is Joplin free?',
    answer:
      'Both apps are free. Obsidian has been free for personal and commercial use since February 2025; Obsidian Sync costs $4 a month billed yearly ($5 monthly) for one vault and 1 GB, Sync Plus $8 a month, and Publish $8 a month per site. Joplin is free and open source; Joplin Cloud starts at €2.99 a month (€28.69 a year), and syncing through Dropbox, OneDrive, Nextcloud, WebDAV or S3 costs nothing beyond your storage.',
  },
  {
    question: 'Can I move my notes from Joplin to Obsidian?',
    answer:
      'Yes. In Joplin, export everything as Markdown (File › Export all › MD - Markdown + Front Matter), then open the exported folder as a vault in Obsidian. Notebooks become folders and attachments come along; Joplin’s internal note links need tidying, and Obsidian’s Importer plugin has no Joplin option. Going the other way, Joplin 3.7 and later import an Obsidian vault directly.',
  },
  {
    question: 'Does Obsidian or Joplin have end-to-end encryption?',
    answer:
      'Both can encrypt sync end to end. Obsidian Sync does it by default with AES-256-GCM, with an optional standard mode in which Obsidian holds the key. Joplin offers end-to-end encryption on every sync target, Joplin Cloud included, but it stays off until you enable it on one device. Neither encrypts the notes stored on your own disk.',
  },
];

const related = [
  {
    title: 'Obsidian alternatives',
    href: '/obsidian-alternatives',
    description: 'Simpler, encrypted or free options if Obsidian is too much.',
  },
  {
    title: 'Joplin alternatives',
    href: '/joplin-alternative',
    description: 'The same privacy as Joplin in a nicer app.',
  },
  {
    title: 'Obsidian vs Apple Notes',
    href: '/obsidian-vs-apple-notes',
    description: 'Linked Markdown files or zero setup on Mac and iPhone.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
  }),
  itemListJsonLd('Joplin vs Obsidian', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function JoplinVsObsidianPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='Comparison'
        headline='Joplin vs Obsidian'
        subheadline='Two local-first notes apps that both work without an account, compared on how they store notes, sync, encryption, plugins and price, with Dash as the option built for Mac and iPhone privacy.'
        updated='October 2026'
        intro={
          <>
            <p>
              <strong>The verdict in one paragraph.</strong> Choose <strong>Obsidian</strong> if you think in links: your notes
              stay plain Markdown files in a folder you own, the editor is excellent, and a plugin exists for almost anything.
              Choose <strong>Joplin</strong> if you want everything open source, free end-to-end encrypted sync through Dropbox,
              OneDrive or Nextcloud, and an Evernote-style notebook with a web clipper. If what you really want is notes that are
              private on a Mac and an iPhone, locked with Touch ID or Face ID, with no setup and no account,{' '}
              <a href='/'>Dash</a> (which we make, and list last) is the third option.
            </p>
            <p>
              Both apps are free to download and run offline, so the choice comes down to three questions: do you want plain
              files or a managed database, how will you sync, and how much do you enjoy configuring your tools?
            </p>
          </>
        }
        comparison={{
          heading: 'Joplin vs Obsidian at a glance',
          subheading: 'Checked against each vendor’s pricing, help pages and repositories on 19 October 2026.',
          columns: [
            { key: 'joplin', label: 'Joplin' },
            { key: 'obsidian', label: 'Obsidian' },
            { key: 'dash', label: 'Dash', highlight: true },
          ],
          rows: [
            { feature: 'Works without an account', values: { joplin: true, obsidian: true, dash: true } },
            { feature: 'Open source', values: { joplin: 'AGPL-3.0', obsidian: false, dash: 'MIT' } },
            { feature: 'How notes are stored', values: { joplin: 'Database', obsidian: 'Markdown files', dash: 'App storage' } },
            { feature: 'Free sync', values: { joplin: 'Dropbox, OneDrive, WebDAV', obsidian: 'iCloud Drive', dash: 'Encrypted export' } },
            { feature: 'Paid sync', values: { joplin: 'From €2.99/mo', obsidian: 'From $4/mo', dash: '$4.99/mo' } },
            { feature: 'End-to-end encrypted sync', values: { joplin: 'Off by default', obsidian: 'On by default', dash: true } },
            { feature: 'Notes encrypted on your disk', values: { joplin: false, obsidian: false, dash: 'Locked notes' } },
            { feature: 'Built-in app lock', values: { joplin: 'Mobile only', obsidian: false, dash: 'Mac and iPhone' } },
            { feature: 'Backlinks and graph', values: { joplin: 'Plugins', obsidian: true, dash: 'Backlinks only' } },
            { feature: 'Plugins', values: { joplin: 'About 340', obsidian: 'Thousands', dash: false } },
            { feature: 'Windows, Linux and Android apps', values: { joplin: true, obsidian: true, dash: 'Web app' } },
            { feature: 'Price of the app', values: { joplin: 'Free', obsidian: 'Free', dash: '$14.99 once (Mac)' } },
          ],
        }}
        apps={apps}
        appsHeading='The three apps'
        sections={[
          {
            id: 'storage',
            heading: 'Plain files or a database: the difference that matters most',
            body: (
              <>
                <p>
                  Obsidian’s whole design rests on one decision: a vault is an ordinary folder of <code>.md</code> files. You can
                  open it in any editor, back it up with anything, put it under Git, and walk away from Obsidian without exporting
                  a thing. Attachments are ordinary files beside the notes.
                </p>
                <p>
                  Joplin keeps notes in its own database and writes them out as Markdown when you export or sync. The notes are
                  still Markdown inside, and the export is clean, but you cannot point another app at Joplin’s folder and start
                  editing. In exchange, Joplin handles notebooks, to-dos, tags, history and attachments for you, much as
                  Evernote did.
                </p>
                <p>
                  Dash sits nearer Joplin here: notes live in the app’s storage on your Mac or iPhone, and leave as Markdown, PDF,
                  DOCX or an encrypted backup whenever you export.
                </p>
              </>
            ),
          },
          {
            id: 'sync',
            heading: 'Sync and encryption',
            body: (
              <>
                <p>
                  <strong>Joplin</strong> syncs through Joplin Cloud (Basic is €2.99 a month or €28.69 a year for 2 GB; Pro is
                  €5.99 a month for 30 GB) or through storage you already have: Dropbox, OneDrive, Nextcloud, any WebDAV server,
                  S3 or a folder on disk, at no cost beyond the storage. End-to-end encryption works with every one of them, but
                  it is off by default: you enable it on one device, set a master password, and the other devices pick it up. Lose
                  that password and the notes cannot be recovered.
                </p>
                <p>
                  <strong>Obsidian Sync</strong> costs $4 a month billed yearly ($5 monthly) for one vault, 1 GB and a month of
                  version history; Sync Plus is $8 a month billed yearly for ten vaults, 10 GB and a year of history. It is
                  end-to-end encrypted by default with AES-256-GCM, with an optional standard mode in which Obsidian manages the
                  key. The free route Obsidian documents is iCloud Drive between a Mac and an iPhone; Syncthing and Git work for
                  the technically inclined.
                </p>
                <p>
                  Neither app encrypts the notes on your own disk; that is left to FileVault or the phone’s own protection. Dash
                  locks individual notes with AES-256-GCM on the device, and its optional sync ($4.99 a month or $47.99 a year,
                  with a seven-day trial) encrypts every change with a key that never leaves your devices.
                </p>
              </>
            ),
          },
          {
            id: 'writing',
            heading: 'Writing, linking and plugins',
            body: (
              <>
                <p>
                  Obsidian is the better writing tool for most people. Its editor renders Markdown as you type, <code>[[links]]</code>{' '}
                  autocomplete, every note shows its backlinks, and the graph, Canvas and Bases turn a pile of notes into
                  something you can navigate. Thousands of community plugins add calendars, task boards, spaced repetition and
                  more, which is both the attraction and the trap: it is easy to spend an evening configuring instead of writing.
                </p>
                <p>
                  Joplin gives you a Markdown editor with a preview and a rich-text editor for people who would rather not see
                  Markdown at all. It links notes to one another, and its plugin directory (about 340 plugins) adds backlinks, a
                  graph and much else, but the experience is plainer. Where Joplin is stronger is capture: the web clipper saves
                  pages straight into a notebook, and the desktop app runs OCR on images so their text turns up in search.
                </p>
                <p>
                  Dash has <code>[[links]]</code> with backlinks, Markdown shortcuts as you type, callouts, toggles and nested
                  lists, and no plugins. It is a deliberately smaller tool.
                </p>
              </>
            ),
          },
          {
            id: 'mac-iphone',
            heading: 'On a Mac and an iPhone',
            body: (
              <>
                <p>
                  Both apps run on macOS and iOS as well as Windows, Linux and Android. Obsidian’s mobile app is the more polished
                  of the two and can keep a vault in iCloud Drive, so a Mac and an iPhone can share notes without a subscription.
                  Joplin’s mobile apps feel utilitarian next to native iPhone apps, but they have something Obsidian lacks: a
                  biometric lock you can switch on. (Since iOS 18, iPhone can also require Face ID to open any app, Obsidian
                  included.)
                </p>
                <p>
                  Neither app has a built-in lock on a Mac, and neither encrypts notes on the device. If your
                  notes are sensitive and you use a Mac and an iPhone, that gap is the reason to look at Dash: lock any note with
                  AES-256-GCM, lock the whole app with Touch ID or Face ID and an auto-lock timer, and keep a duress password that
                  opens decoy notes.
                </p>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving between them',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Joplin to Obsidian:</strong> export everything from Joplin as Markdown with front matter and open the
                    folder as a vault. Obsidian’s Importer plugin covers Evernote, Notion, Apple Notes, Bear and others, but not
                    Joplin, so the Markdown export is the route.
                  </li>
                  <li>
                    <strong>Obsidian to Joplin:</strong> Joplin 3.7 and later import an Obsidian vault directly; older versions take it
                    through File › Import › MD - Markdown (directory). Canvas files and plugin data do not come across.
                  </li>
                  <li>
                    <strong>Either to Dash:</strong> Dash imports an Obsidian vault folder or zip directly, keeping{' '}
                    <code>[[wikilinks]]</code>, photos, callouts, front matter and tags, and imports Joplin’s Markdown export as a
                    folder of Markdown files. A preview shows what will come across before anything is written, and the import
                    can be undone.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'where-dash-fits',
            heading: 'Where Dash fits',
            body: (
              <>
                <p>
                  Pick Obsidian or Joplin if you need Windows, Linux or Android, want plugins, or want your notes as files you
                  manage yourself. Pick Dash if you write on a Mac and an iPhone and care most about privacy without setup: no
                  account, nothing uploaded unless you turn on end-to-end encrypted sync, locks on notes and on the app, and a Mac
                  app you buy once for $14.99. The iPhone app is free.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Obsidian’s [[links]] with locks on every note and on the app. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Private notes on Mac and iPhone, without the setup.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
