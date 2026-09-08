import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Open Source Note Taking Apps in 2026: 6 Compared';
const DESCRIPTION =
  'Six open source note taking apps compared on licence, encryption, offline use and price: Joplin, Standard Notes, Notesnook, Logseq, Trilium and Dash (MIT).';
const PATH = '/open-source-notes-app';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'open source note taking app',
    'open source notes app',
    'open source encrypted notes',
    'free open source notes app mac',
    'self hosted notes app',
    'privacy notes app open source',
  ],
});

// facts checked 2026-09-08 against each project's repository and pricing page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A private, encrypted notes app for Mac and iPhone. Notes stay on your device by default, any note can be locked with AES-256, and sync is optional and end-to-end encrypted. MIT licensed, so you can read every line.',
    bestFor: 'People who want privacy without giving up a modern editor',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Offline by default; the sync relay only ever sees ciphertext',
    pros: [
      'MIT licence: the most permissive of the six',
      'Lock any note or the whole app; Touch ID and Face ID; duress password',
      'Wiki-style [[links]], folders, tags, focus mode, local AI, self-destructing notes',
    ],
    cons: ['No Windows or Linux app yet', 'Sync is a separate subscription', 'Notes are not plain Markdown files on disk'],
    isDash: true,
  },
  {
    name: 'Joplin',
    tagline:
      'The veteran. Markdown notes and notebooks on every desktop and mobile platform, with end-to-end encrypted sync to the storage of your choice: Nextcloud, Dropbox, OneDrive or Joplin Cloud.',
    bestFor: 'Bringing your own storage',
    price: 'Free; Joplin Cloud from €2.99 a month (Basic) or €5.99 (Pro)',
    privacy: 'End-to-end encryption for sync, switched on by you',
    pros: ['Windows, macOS, Linux, Android, iOS', 'Sync target is yours to pick', 'Web clipper and a large plugin ecosystem'],
    cons: ['Encryption is opt-in and easy to leave off', 'Utilitarian interface', 'No lock on individual notes'],
  },
  {
    name: 'Standard Notes',
    tagline:
      'End-to-end encrypted notes with a long security record, on every platform, with a free plan that covers plain-text notes and paid plans for the richer editors.',
    bestFor: 'Security-first users who want a trusted name',
    price: 'Free plan; paid plans for rich editors and more',
    privacy: 'End-to-end encrypted everywhere, by default',
    pros: ['Encrypted by default, not as an option', 'Mac, Windows, Linux, iOS, Android and web', 'AGPL-3.0, with published audits'],
    cons: ['The free editor is plain text', 'An account is required', 'Interface feels dated next to newer apps'],
  },
  {
    name: 'Notesnook',
    tagline:
      'A polished, encrypted-by-default notes app. Everything is encrypted on your device with XChaCha20-Poly1305 and Argon2 before it syncs; client and server are both open source.',
    bestFor: 'A modern encrypted app that just works',
    price: 'Free tier; Essential and Pro subscriptions',
    privacy: 'End-to-end encrypted by default',
    pros: ['Encryption on by default with a modern cipher', 'Web, desktop and mobile clients', 'GPL-3.0 client and server'],
    cons: ['An account is required', 'Free tier limits attachments (50 MB a month)', 'Notes are not local files'],
  },
  {
    name: 'Logseq',
    tagline:
      'An outliner built on local Markdown or Org-mode files, with backlinks, a graph and daily journals. Local-first to the core.',
    bestFor: 'Networked thinking in plain files',
    price: 'Free',
    privacy: 'Files stay on your disk; no encryption built in',
    pros: ['Your notes are plain text files you own', 'Backlinks, block references and a graph view', 'AGPL-3.0; desktop, web and iOS apps'],
    cons: ['No note encryption, so sensitive notes need your own protection', 'Real-time sync is still in alpha', 'Outliner style is not for everyone'],
  },
  {
    name: 'Trilium (TriliumNext)',
    tagline:
      'A hierarchical knowledge base with rich text, per-note encryption and self-hosted sync, now maintained by the community that took over the original project.',
    bestFor: 'Large personal knowledge bases you host yourself',
    price: 'Free',
    privacy: 'Protected notes are encrypted; sync through your own server',
    pros: ['Protected (encrypted) notes built in', 'Deep tree structure and scripting', 'AGPL-3.0, actively maintained'],
    cons: ['No native mobile apps; the web app on a phone', 'Sync means running your own server', 'Steeper setup than the others'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Which open source note taking apps encrypt notes by default?',
    answer:
      'Standard Notes and Notesnook encrypt everything by default and require an account to do it. Dash encrypts any note you lock, with the whole app lockable behind a master password, and needs no account. Joplin encrypts sync only if you switch it on. Trilium encrypts the notes you mark as protected. Logseq has no built-in encryption.',
  },
  {
    question: 'Is Dash open source if the Mac app costs $14.99?',
    answer:
      'Yes. The full source is on GitHub under the MIT licence, and you can build it yourself. The $14.99 buys the signed, notarised Mac app with automatic updates and supports the project. The iPhone app and the web app are free.',
  },
  {
    question: 'Can I self-host sync?',
    answer:
      'Joplin syncs to any WebDAV, Nextcloud, Dropbox or OneDrive storage you control. Trilium syncs through a server you run. Standard Notes and Notesnook publish their server code. Dash Sync uses the Dash relay, but because every note is encrypted on your device first, the relay never holds anything readable.',
  },
  {
    question: 'Which open source notes apps run on both Mac and iPhone?',
    answer:
      'Dash, Joplin, Standard Notes, Notesnook and Logseq all have Mac and iPhone apps. Trilium runs on the Mac and offers its web app on a phone.',
  },
  {
    question: 'What does the licence actually change for me?',
    answer:
      'Any of these licences lets you read the code and check what the app does with your notes, which is the point for a privacy tool. MIT (Dash) also lets anyone reuse the code in closed products; AGPL-3.0 (Joplin, Standard Notes, Logseq, Trilium) and GPL-3.0 (Notesnook) require changes to be shared under the same terms. For a user, the practical difference is small; for a company building on the code, it is the whole question.',
  },
];

const related = [
  {
    title: 'Obsidian alternatives',
    href: '/obsidian-alternatives',
    description: 'Eight apps for people who want less setup or built-in encryption.',
  },
  {
    title: 'Evernote alternatives',
    href: '/evernote-alternatives',
    description: 'Notes apps without a subscription, compared.',
  },
  {
    title: 'What AES-256 encryption is',
    href: '/guides/encryption',
    description: 'How Dash encrypts a note, in plain language.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Open source note taking apps', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function OpenSourceNotesAppPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Open source'
        headline='The Best Open Source Note Taking Apps in 2026'
        subheadline='Six apps whose code you can read, compared on licence, encryption, offline use, sync and price.'
        updated='September 2026'
        intro={
          <>
            <p>
              An open source note taking app is one whose code is public, so anyone can check what it does with your notes.
              For most software that is a nice-to-have. For a notes app that promises privacy, it is the only way the promise
              can be checked at all: a closed app that says it is encrypted is asking you to take its word.
            </p>
            <p>
              The six apps below all publish their code. They differ in almost everything else: which licence, whether
              encryption is on by default, whether notes are plain files, whether sync is yours to host, and whether the app
              is free. We build <a href='/'>Dash</a> and it is listed first, judged by the same rules as the others; its
              source is at{' '}
              <a href='https://github.com/Efesop/rich-text-editor' target='_blank' rel='noopener noreferrer'>
                github.com/Efesop/rich-text-editor
              </a>
              .
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six open source note taking apps'
        sections={[
          {
            id: 'what-open-source-guarantees',
            heading: 'What open source does and does not guarantee',
            body: (
              <>
                <p>
                  Public code guarantees that the app can be audited. It does not guarantee that anyone has audited it, that
                  the build you downloaded matches the code, or that the company behind it will keep running its servers. It
                  also says nothing about whether your notes are encrypted: Logseq is fully open source and stores plain text
                  files; Notesnook is open source and encrypts everything.
                </p>
                <p>
                  So read the licence as one signal among several. The others: whether encryption is on by default or
                  something you must remember to enable, whether the app works with no account and no connection, whether the
                  sync server is yours to host or the vendor’s to run, and what happens to your notes if the project stops.
                  Plain files (Logseq, Joplin) survive anything; encrypted databases need an export path (Dash exports to
                  Markdown, PDF, DOCX and an encrypted backup).
                </p>
              </>
            ),
          },
          {
            id: 'licences',
            heading: 'Licence and repository, app by app',
            body: (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>App</th>
                      <th>Licence</th>
                      <th>Encryption</th>
                      <th>Account needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dash</td>
                      <td>MIT</td>
                      <td>Per note and app lock, AES-256-GCM; sync end-to-end</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Joplin</td>
                      <td>AGPL-3.0</td>
                      <td>Sync end-to-end, opt-in</td>
                      <td>Only for Joplin Cloud</td>
                    </tr>
                    <tr>
                      <td>Standard Notes</td>
                      <td>AGPL-3.0</td>
                      <td>End-to-end by default</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Notesnook</td>
                      <td>GPL-3.0</td>
                      <td>End-to-end by default (XChaCha20-Poly1305)</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Logseq</td>
                      <td>AGPL-3.0</td>
                      <td>None built in</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Trilium</td>
                      <td>AGPL-3.0</td>
                      <td>Protected notes</td>
                      <td>No (your own server for sync)</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ),
          },
          {
            id: 'how-we-chose',
            heading: 'How we chose',
            body: (
              <>
                <p>
                  Every app here has a public repository under an OSI-approved licence for the client you actually run, a
                  release in the last year, and a Mac app. We left out apps that are source-available rather than open source,
                  and apps whose desktop client is open but whose sync is a closed service you cannot inspect. Prices and
                  licences were checked on 8 September 2026 against each project’s own pages; they change, so check again
                  before you decide.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Open source, encrypted, no account. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Read the code. Then lock a note.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
