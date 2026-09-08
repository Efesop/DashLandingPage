import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Obsidian Alternative with Built-In Encryption';
const DESCRIPTION =
  'An Obsidian alternative with encryption built in and no plugins to configure: wiki links, folders, tags, Face ID and Touch ID. Dash vs Obsidian compared.';
const PATH = '/vs-obsidian';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'obsidian alternative',
    'dash vs obsidian',
    'obsidian encryption',
    'is obsidian encrypted',
    'encrypted markdown notes',
    'obsidian alternative mac',
    'secure obsidian alternative',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Is Dash as powerful as Obsidian?',
    answer:
      'No. Obsidian has a graph view, block references, canvas and thousands of community plugins, and nothing here matches that. Dash covers the parts most people use, wiki-style [[links]], folders, tags and search, and adds encryption, an app lock and a local AI assistant without a single plugin.',
  },
  {
    question: 'Can I move my Obsidian vault to Dash?',
    answer:
      'Your vault is a folder of Markdown files, so the content moves easily: paste the notes you want into Dash, where basic formatting and [[links]] carry over. Keep the vault itself as an archive; nothing about switching deletes it.',
  },
  {
    question: 'Why does Obsidian not encrypt notes?',
    answer:
      'Because plain files are the point. A vault is Markdown any editor can open, which is excellent for portability and means anyone with access to your disk or your backups can read it. Obsidian leaves encryption to full-disk encryption or plugins.',
  },
  {
    question: 'What about Obsidian Sync being end-to-end encrypted?',
    answer:
      'It is, and it is well built. Obsidian Sync costs $4 a month billed yearly and encrypts notes in transit and on Obsidian’s servers so the company cannot read them. The files on your own disk stay in plain text. Dash encrypts the note itself, so a locked note is unreadable even to someone holding your unlocked Mac.',
  },
  {
    question: 'Is Dash open source like Obsidian?',
    answer:
      'Dash is open source under the MIT licence, so the whole app can be audited. Obsidian’s app is closed source, though many of its plugins are open. For a tool whose selling point is encryption, being able to read the code matters.',
  },
];

const related = [
  {
    title: 'Obsidian alternatives',
    href: '/obsidian-alternatives',
    description: 'Eight apps for people who want less setup or built-in encryption.',
  },
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, and how the optional sync stays end-to-end encrypted.',
  },
  {
    title: 'Page linking',
    href: '/guides/page-linking',
    description: 'Wiki-style [[links]] between notes, without plugins.',
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

export default function VsObsidianPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='Dash vs Obsidian'
        headline='An Obsidian Alternative With Encryption Built In'
        subheadline='Obsidian keeps your notes in plain files anyone with your disk can read. Dash keeps the links and the folders, and locks the notes that matter.'
        updated='September 2026'
        intro={
          <>
            <p>
              Obsidian is the best argument for plain files: your notes are Markdown, they will outlive any company, and the
              plugin ecosystem can bend the app into almost anything. The cost is that a vault is readable by anyone who
              reaches your disk, a Time Machine backup or a synced folder, and that getting it set up the way you want takes
              real time.
            </p>
            <p>
              <a href='/'>Dash</a> trades some of that power for encryption you do not have to assemble. Wiki-style [[links]],
              folders, tags and search work out of the box, and any note can be locked with AES-256. We make Dash, so weigh
              the table rather than the adjectives.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash vs Obsidian',
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
            { feature: 'Graph view and block references', values: { dash: false, obsidian: true } },
            { feature: 'Plugins', values: { dash: false, obsidian: true } },
            { feature: 'Notes as plain files you own', values: { dash: 'Export', obsidian: true } },
            { feature: 'Open source app', values: { dash: true, obsidian: false } },
            { feature: 'Price', values: { dash: '$14.99 once', obsidian: 'Free; Sync $4/mo' } },
          ],
        }}
        sections={[
          {
            id: 'encryption',
            heading: 'The encryption difference',
            body: (
              <>
                <p>
                  Obsidian Sync is genuinely end-to-end encrypted: notes are encrypted before they reach Obsidian’s servers,
                  so the company cannot read them. What stays unprotected is the vault itself. The Markdown files sit in the
                  clear on your disk, in your backups, and in any folder you happen to sync with something else. Full-disk
                  encryption helps if the machine is off; it does nothing while you are logged in.
                </p>
                <p>
                  Dash encrypts the note. Lock one and its contents are AES-256-GCM ciphertext on disk, with a key derived
                  from your password using PBKDF2-SHA256 at 600,000 iterations. Lock the whole app and it seals itself after a
                  few minutes away, opening with Touch ID or Face ID.
                </p>
              </>
            ),
          },
          {
            id: 'power',
            heading: 'What Obsidian does better',
            body: (
              <>
                <p>
                  Plain files, forever, in a format any editor can read. A graph view and block references for people who
                  think in connections. Canvas. Thousands of plugins covering everything from spaced repetition to Kanban.
                  Windows and Linux apps. If your notes are a knowledge base you tinker with, Obsidian is the better tool and
                  this page will not pretend otherwise.
                </p>
              </>
            ),
          },
          {
            id: 'simplicity',
            heading: 'What Dash does better',
            body: (
              <>
                <p>
                  Everything works on first launch: links, folders, tags, search, attachments, four themes and a focus mode,
                  with no plugin list to curate. Encryption is built in rather than bolted on. There is a duress password for
                  the day someone demands your device unlocked, and self-destructing notes for the things you only need for an
                  hour. The local AI assistant talks to a model on your own machine, so notes stay put.
                </p>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving from Obsidian to Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Keep your vault.</strong> It is plain Markdown and costs nothing to leave in place as an archive.
                  </li>
                  <li>
                    <strong>Bring across the notes you actually open</strong>, which is usually a small fraction of the vault.
                    Formatting and [[links]] carry over.
                  </li>
                  <li>
                    <strong>Lock the sensitive ones</strong> and, if you want them on the phone too, turn on Dash Sync.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Links and folders, with encryption included. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your vault, encrypted, without a plugin.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
