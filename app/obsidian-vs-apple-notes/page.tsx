import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Obsidian vs Apple Notes: Links, Privacy, Sync and Price';
const DESCRIPTION =
  'Obsidian vs Apple Notes on Mac and iPhone: links, Markdown, sync, encryption and price compared, with a clear pick for each, plus Dash for private notes.';
const PATH = '/obsidian-vs-apple-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'obsidian vs apple notes',
    'apple notes vs obsidian',
    'obsidian vs apple notes reddit',
    'is obsidian better than apple notes',
    'move apple notes to obsidian',
  ],
});

// facts checked 2026-10-19: obsidian.md (pricing, help: iCloud sync, Importer for Apple Notes), support.apple.com (Notes guides,
// locked notes, Require Face ID), Apple Platform Security (Advanced Data Protection); see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Apple Notes',
    tagline:
      'Already on every iPhone, iPad and Mac. Quick capture, checklists, scans, sketches, audio transcripts and shared notes, synced through iCloud, with Markdown import and export since iOS 26 and macOS 26.',
    bestFor: 'Quick notes, scans and shared lists with no setup',
    price: 'Free; iCloud includes 5 GB, then 50 GB for $0.99 a month',
    privacy: 'Locked notes end-to-end encrypted; the rest only with Advanced Data Protection',
    pros: ['Nothing to set up on Apple devices', 'Scanning, drawing, audio transcripts and Math Notes', 'Shared notes with real-time collaboration'],
    cons: ['Apple devices only, plus iCloud.com in a browser', 'One-way >> links; no backlinks or graph', 'Apple holds the keys unless you lock a note or turn on Advanced Data Protection'],
  },
  {
    name: 'Obsidian',
    tagline:
      'A folder of Markdown files with a superb editor on top: links, backlinks, a graph, Canvas and thousands of community plugins, on every desktop and phone platform.',
    bestFor: 'Linked notes in plain files you own',
    price: 'Free; Sync $4 a month billed yearly, or iCloud Drive at no extra cost',
    privacy: 'Files stay on your disk unencrypted; Sync is end-to-end encrypted',
    pros: ['Notes are plain .md files in a folder', 'Backlinks, graph, Canvas, Bases and thousands of plugins', 'Mac, Windows, Linux, iPhone and Android'],
    cons: ['Closed-source app', 'No encryption at rest or app lock built in', 'Takes setup to get comfortable'],
  },
  {
    name: 'Dash',
    tagline:
      'The middle ground for Mac and iPhone: as quick to start as Apple Notes, with [[links]] and backlinks, a lock on any note and on the whole app, and no Apple Account or iCloud involved.',
    bestFor: 'Private notes on Mac and iPhone with locks that cover everything',
    price: '$14.99 once on Mac; free on iPhone and the web; sync $4.99 a month, optional',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['Lock the app on Mac and iPhone; lock notes with attachments too', 'Duress password and self-destructing notes', 'Open source (MIT); exports Markdown, PDF and DOCX'],
    cons: ['No handwriting, scanning or shared editing', 'No graph view or plugins', 'Sync is a subscription'],
    isDash: true,
  },
];

const faqs: FAQ[] = [
  {
    question: 'Is Obsidian better than Apple Notes?',
    answer:
      'Better for linked thinking, long-term knowledge bases and anyone who wants notes as plain files that work on Windows or Android too. Apple Notes is better for quick capture, scanning, handwriting, sharing a list with family, and anyone who wants zero setup on Apple devices. Many people use both: Apple Notes for the shopping list, Obsidian for the research.',
  },
  {
    question: 'Can I use Obsidian with iCloud?',
    answer:
      'Yes. Obsidian officially supports keeping a vault in iCloud Drive to sync a Mac and an iPhone at no extra cost; on iPhone the vault must sit in the Obsidian folder in iCloud Drive. Obsidian warns against iCloud Drive on Windows and against using iCloud and Obsidian Sync on the same vault. Under Apple’s standard data protection, iCloud Drive files are not end-to-end encrypted.',
  },
  {
    question: 'Is Obsidian more private than Apple Notes?',
    answer:
      'It depends on how you sync. Obsidian keeps notes as files on your device with no account, and Obsidian Sync encrypts them end to end by default. Apple Notes in iCloud is encrypted, but Apple holds the keys unless you lock a note or turn on Advanced Data Protection, and an Obsidian vault in iCloud Drive gets the same Apple protection. Neither app encrypts notes on your own disk or locks itself on a Mac.',
  },
  {
    question: 'How do I move Apple Notes to Obsidian?',
    answer:
      'On a Mac, install Obsidian’s official Importer plugin and choose Apple Notes. It converts notes to Markdown with their images, scans, tables and PDFs; it runs on macOS only and skips locked notes, so unlock those first. Dash imports folders of Markdown files, so notes exported from Notes as Markdown come across too.',
  },
  {
    question: 'Does Apple Notes support Markdown?',
    answer:
      'Partly. Since iOS 26 and macOS 26, Notes imports Markdown files and exports a note as Markdown, and iOS 27 and macOS 27 add Copy as Markdown and turn pasted Markdown into formatting. You never write in Markdown, though: Notes converts it to rich text, and attachments do not travel inside a .md file. Obsidian stores every note as a Markdown file.',
  },
];

const related = [
  {
    title: 'Apple Notes alternatives',
    href: '/apple-notes-alternative',
    description: 'Encrypted, exportable notes apps for Mac and iPhone.',
  },
  {
    title: 'Is Apple Notes secure?',
    href: '/is-apple-notes-secure',
    description: 'What Apple encrypts, what iCloud can read, and what Advanced Data Protection changes.',
  },
  {
    title: 'Joplin vs Obsidian',
    href: '/joplin-vs-obsidian',
    description: 'Open-source notebook or plain Markdown files, compared.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
  }),
  itemListJsonLd('Obsidian vs Apple Notes', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function ObsidianVsAppleNotesPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Laptop'
        badgeText='Comparison'
        headline='Obsidian vs Apple Notes'
        subheadline='The app that is already on your iPhone against the app people build second brains in, compared on linking, Markdown, sync, privacy and price, with Dash for notes that need a real lock.'
        updated='October 2026'
        intro={
          <>
            <p>
              <strong>The verdict in one paragraph.</strong> Stay with <strong>Apple Notes</strong> if you want notes that are
              simply there: free, instant on every Apple device, good at scans, sketches, checklists and shared lists, and now able
              to import and export Markdown. Move to <strong>Obsidian</strong> if your notes are turning into a body of knowledge:
              plain Markdown files you own, links and backlinks, a graph, and apps for Windows and Android as well. If the deciding
              question is privacy on a Mac and an iPhone, with a lock on the whole app and notes Apple never holds,{' '}
              <a href='/'>Dash</a> (which we make, and list last) sits between the two.
            </p>
            <p>
              Most people comparing these two already use Apple Notes and wonder whether they have outgrown it. The sections
              below follow the questions that decide it: setup, links and Markdown, sync and privacy, and how to move.
            </p>
          </>
        }
        comparison={{
          heading: 'Obsidian vs Apple Notes at a glance',
          subheading: 'Checked against Apple’s and Obsidian’s own pages on 19 October 2026 (iOS 27 and macOS 27).',
          columns: [
            { key: 'an', label: 'Apple Notes' },
            { key: 'obsidian', label: 'Obsidian' },
            { key: 'dash', label: 'Dash', highlight: true },
          ],
          rows: [
            { feature: 'Price', values: { an: 'Free', obsidian: 'Free; Sync $4/mo', dash: '$14.99 once (Mac)' } },
            { feature: 'Windows and Android apps', values: { an: false, obsidian: true, dash: 'Web app' } },
            { feature: 'How notes are stored', values: { an: 'Database', obsidian: 'Markdown files', dash: 'App storage' } },
            { feature: 'Markdown', values: { an: 'Import, export', obsidian: 'Native', dash: 'Import, export' } },
            { feature: 'Backlinks', values: { an: false, obsidian: true, dash: true } },
            { feature: 'Graph view', values: { an: false, obsidian: true, dash: false } },
            { feature: 'Scanning, drawing, audio', values: { an: true, obsidian: 'Plugins', dash: false } },
            { feature: 'Shared editing', values: { an: true, obsidian: 'Shared vaults', dash: 'Read-only links' } },
            { feature: 'Encrypted so the vendor cannot read', values: { an: 'Locked notes; ADP', obsidian: 'With Sync', dash: 'Locked notes; sync' } },
            { feature: 'Lock the app on a Mac', values: { an: false, obsidian: 'Plugin', dash: true } },
            { feature: 'Works without an account', values: { an: 'On My iPhone', obsidian: true, dash: true } },
            { feature: 'Works offline', values: { an: true, obsidian: true, dash: true } },
          ],
        }}
        apps={apps}
        appsHeading='The three apps'
        sections={[
          {
            id: 'setup',
            heading: 'Nothing to set up, or a system you build',
            body: (
              <>
                <p>
                  Apple Notes asks for nothing. It is on the iPhone already, Quick Notes open from anywhere on a Mac, and notes
                  appear on every device signed in to the same Apple Account. Scanning a receipt, sketching with an Apple Pencil,
                  recording a meeting with a live transcript or sharing a shopping list takes a tap.
                </p>
                <p>
                  Obsidian asks you to decide where the vault lives, how it syncs, and which of its features and plugins you want.
                  Those decisions are the point: they let it become a writing desk, a research database or a task board. They
                  also mean an evening of setup before it feels like yours, and a habit of tending it afterwards.
                </p>
              </>
            ),
          },
          {
            id: 'links-markdown',
            heading: 'Links, Markdown and notes you keep for years',
            body: (
              <>
                <p>
                  Since iOS 17 you can link one Apple Note to another by typing <code>&gt;&gt;</code>, and iOS 27 adds links to a
                  section of a note. The links go one way: there is no list of the notes that point back, and no graph. Markdown
                  arrived in iOS 26 and macOS 26 as import and export, and iOS 27 adds Copy as Markdown and converts pasted
                  Markdown into formatting. You still never write or see Markdown in Notes, and photos do not travel inside an
                  exported <code>.md</code> file.
                </p>
                <p>
                  Obsidian is built on both ideas. Every note is a Markdown file, <code>[[links]]</code> autocomplete, every note
                  shows its backlinks, and the graph, Canvas and Bases (database views of your notes) help a large collection stay
                  navigable. If you expect to keep notes for a decade, or to open them in other tools, plain files are the safer
                  bet.
                </p>
                <p>
                  Dash has <code>[[links]]</code> with backlinks and Markdown shortcuts as you type, and exports Markdown, without
                  a graph or plugins.
                </p>
              </>
            ),
          },
          {
            id: 'sync-privacy',
            heading: 'Sync and privacy',
            body: (
              <>
                <p>
                  <strong>Apple Notes</strong> syncs through iCloud, which includes 5 GB free; 50 GB costs $0.99 a month in the US.
                  With Apple’s standard data protection, notes are encrypted in transit and on Apple’s servers, but Apple holds
                  the keys. A note you lock is end-to-end encrypted, and turning on Advanced Data Protection (ADP) extends that to
                  every note. Notes in the On My iPhone or On My Mac account never leave the device.
                </p>
                <p>
                  <strong>Obsidian</strong> needs no account. A vault in iCloud Drive syncs a Mac and an iPhone for free, with the
                  same Apple protection as Apple Notes. Obsidian Sync, $4 a month billed yearly ($5 monthly), encrypts end to end
                  by default and keeps a month of version history; Sync Plus at $8 a month keeps a year. Files on your own disk are
                  not encrypted by Obsidian.
                </p>
                <p>
                  Neither app locks itself on a Mac; Obsidian only through a community plugin. On iPhone, iOS 18 and later can
                  require Face ID to open any app, both of these included. Dash locks the app on Mac and iPhone with Touch ID or
                  Face ID and an auto-lock timer, locks any note with AES-256-GCM (including notes with attachments, which Apple
                  Notes will not lock), and syncs only if you turn on its end-to-end encrypted sync.
                </p>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving from Apple Notes',
            body: (
              <>
                <ul>
                  <li>
                    <strong>To Obsidian:</strong> on a Mac, install the official Importer plugin and choose Apple Notes. It
                    converts notes to Markdown with images, scans, tables and PDFs. It does not run on iPhone, and it skips locked
                    notes, so remove those locks first.
                  </li>
                  <li>
                    <strong>Back to Apple Notes:</strong> on macOS 26 and later, File › Import Markdown brings in a folder of
                    Markdown files and can keep its folder structure.
                  </li>
                  <li>
                    <strong>To Dash:</strong> export notes from Notes as Markdown (File › Export as › Markdown on a Mac), then
                    import the folder in Dash. An Obsidian vault imports directly, with its <code>[[wikilinks]]</code>, photos and
                    tags. A preview shows what will come across before anything is written.
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
                  Keep Apple Notes for scans, sketches and shared lists; it is very good at them. Choose Obsidian if you want a
                  knowledge base in plain files on every platform. Choose Dash if you write on a Mac and an iPhone and want notes
                  that are private by default: no account, nothing uploaded unless you turn on end-to-end encrypted sync, a lock on
                  any note and on the whole app, a duress password and self-destructing notes. Dash is $14.99 once on Mac and free
                  on iPhone. It has no handwriting, scanning or shared editing.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Apple Notes’ ease with a lock on the whole app. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Quick to start. Private all the way down.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
