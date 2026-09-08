import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Best Notes App for Mac in 2026: 8 Apps Compared';
const DESCRIPTION =
  'The best notes apps for Mac in 2026, compared on privacy, offline use, encryption and price: Apple Notes, Dash, Bear, Obsidian, Craft, Notion, Joplin and Standard Notes.';
const PATH = '/best-notes-app-for-mac';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'best notes app for mac',
    'best mac notes app',
    'notes app for mac',
    'mac note taking app',
    'best app for taking notes mac',
    'macbook notes app',
    'private notes app mac',
  ],
});

const apps: ArticleApp[] = [
  {
    name: 'Apple Notes',
    tagline: 'The app already on your Mac. Fast, free, and better every year, with locked notes, tags and Smart Folders.',
    bestFor: 'Anyone who lives inside iCloud',
    price: 'Free',
    privacy: 'iCloud holds a key unless Advanced Data Protection is on',
    pros: ['Free and preinstalled', 'Handwriting and scanning on iPad and iPhone', 'Locked notes use end-to-end encryption'],
    cons: ['Unlocked notes are readable by Apple unless you enable Advanced Data Protection', 'Export is limited to PDF and copy-paste', 'No Windows or Linux'],
  },
  {
    name: 'Dash',
    tagline:
      'A private, encrypted notes app for Mac and iPhone. Notes stay on your device by default, every note can be locked with AES-256, and sync is optional and end-to-end encrypted.',
    bestFor: 'People who want privacy without giving up a modern editor',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Offline by default; relay only ever sees ciphertext',
    pros: [
      'Lock any note or the whole app; Touch ID and Face ID',
      'Wiki-style [[links]], folders, tags, focus mode, local AI',
      'Open source (MIT), exports to Markdown, PDF, DOCX and more',
    ],
    cons: ['No Windows or Linux app yet', 'Sync is a separate subscription', 'Younger ecosystem than the big names'],
    isDash: true,
  },
  {
    name: 'Bear',
    tagline: 'A beautiful Markdown editor with tags instead of folders. One of the most polished writing experiences on the Mac.',
    bestFor: 'Writers who love Markdown and tags',
    price: 'Free; Bear Pro subscription for sync and themes',
    privacy: 'Syncs through iCloud; no note-level encryption',
    pros: ['Gorgeous typography and themes', 'Nested tags and cross-note links', 'Excellent export options'],
    cons: ['Sync and themes need the subscription', 'Apple platforms only', 'No password on individual notes'],
  },
  {
    name: 'Obsidian',
    tagline: 'Local Markdown files, a graph view and thousands of community plugins. The power-user choice.',
    bestFor: 'Tinkerers building a personal knowledge base',
    price: 'Free for personal use; paid Sync add-on',
    privacy: 'Files stay local; Obsidian Sync is end-to-end encrypted',
    pros: ['Your notes are plain files you own', 'Endless plugins and customization', 'Cross-platform'],
    cons: ['Steep learning curve', 'Encryption and mobile polish depend on plugins', 'Easy to spend more time configuring than writing'],
  },
  {
    name: 'Craft',
    tagline: 'Design-led documents with blocks, pages inside pages and beautiful sharing.',
    bestFor: 'Structured docs you want to share or present',
    price: 'Free tier; paid plans for more storage and features',
    privacy: 'Cloud-synced; provider holds your data',
    pros: ['Polished, native feel on Mac and iOS', 'Great for outlines and long documents', 'Publishing and sharing built in'],
    cons: ['Cloud-first by design', 'No note-level encryption', 'Free tier limits'],
  },
  {
    name: 'Notion',
    tagline: 'Databases, wikis and team workspaces. More of an everything-app than a notes app.',
    bestFor: 'Teams and project tracking',
    price: 'Free personal plan; paid plans per user',
    privacy: 'Everything lives on Notion servers; no end-to-end encryption',
    pros: ['Powerful databases and templates', 'Collaboration is excellent', 'Web, desktop and mobile'],
    cons: ['Needs an internet connection for most things', 'Your content is readable by the provider', 'Slow for quick capture'],
  },
  {
    name: 'Joplin',
    tagline: 'Open-source Markdown notes with end-to-end encrypted sync to the cloud of your choice.',
    bestFor: 'Open-source fans who want to bring their own storage',
    price: 'Free; optional Joplin Cloud subscription',
    privacy: 'End-to-end encrypted sync (opt-in)',
    pros: ['Sync to Dropbox, OneDrive, Nextcloud or Joplin Cloud', 'Web clipper and plugins', 'Cross-platform'],
    cons: ['Utilitarian interface', 'Encryption must be switched on', 'Less native-feeling on Mac'],
  },
  {
    name: 'Standard Notes',
    tagline: 'End-to-end encrypted notes since 2016, now part of Proton. Simple, sturdy and audited.',
    bestFor: 'Security-first users who want a trusted name',
    price: 'Free tier; paid plans for rich editors and more',
    privacy: 'End-to-end encrypted everywhere',
    pros: ['Long security track record', 'Cross-platform', 'Two-factor authentication'],
    cons: ['The free editor is plain text', 'Richer editors are behind the subscription', 'Interface feels dated next to newer apps'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'What is the best free notes app for Mac?',
    answer:
      'Apple Notes is the best free notes app for most Mac users: it is preinstalled, fast, and locked notes are end-to-end encrypted. If you want plain Markdown files instead, Obsidian is free for personal use. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Which notes app for Mac is the most private?',
    answer:
      'Dash, Standard Notes and Joplin are the most private options here: all three encrypt notes so the provider cannot read them. Dash goes one step further by working offline by default with no account, so nothing leaves your Mac unless you turn on its end-to-end encrypted sync.',
  },
  {
    question: 'Which notes app works on both Mac and iPhone?',
    answer:
      'Apple Notes, Dash, Bear, Craft, Notion, Obsidian, Joplin and Standard Notes all have Mac and iPhone apps. Dash keeps the two in step with an optional end-to-end encrypted sync subscription; Apple Notes and Bear use iCloud.',
  },
  {
    question: 'Is there a good notes app for Mac without a subscription?',
    answer:
      'Yes. Apple Notes is free, Obsidian is free for personal use, and Dash is a one-time $14.99 purchase for the Mac app with no subscription required for note-taking. Bear, Craft and Notion put their best features behind subscriptions.',
  },
  {
    question: 'Does Apple Notes encrypt your notes?',
    answer:
      'Only locked notes are end-to-end encrypted. Ordinary notes stored in iCloud are encrypted in transit and at rest, but Apple holds the keys unless you enable Advanced Data Protection. Apps like Dash encrypt on your device with keys that never leave it.',
  },
];

const related = [
  { title: 'Obsidian alternatives', href: '/obsidian-alternatives', description: 'Simpler, encrypted or free options if Obsidian is too much.' },
  { title: 'Notes app with password protection', href: '/password-protected-notes', description: 'How to lock notes with a password, Face ID or Touch ID.' },
  { title: 'How to lock notes on iPhone and Mac', href: '/guides/lock-notes-on-iphone-and-mac', description: 'Step by step for Apple Notes, and what locking actually protects.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  itemListJsonLd('Best notes apps for Mac', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function BestNotesAppForMacPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="Laptop"
        badgeText="Mac apps compared"
        headline="The Best Notes Apps for Mac in 2026"
        highlightedWord="Notes Apps for Mac"
        subheadline="Eight Mac note-taking apps compared on the things that matter once the honeymoon is over: privacy, offline use, encryption, export and what you actually pay."
        updated="September 2026"
        intro={
          <>
            <p>
              Every Mac ships with a capable notes app, so a third-party one has to earn its place. We compared the eight apps
              people actually switch between, looking at five things: whether it works fully offline, whether the provider can
              read your notes, how easy it is to get your data out, how it feels to write in every day, and what it costs over
              five years rather than one month.
            </p>
            <p>
              We build <strong>Dash</strong>, so it is on this list. We have tried to be fair: each app below gets the same
              &ldquo;best for&rdquo;, price, privacy, pros and cons treatment, and we say plainly where Dash falls short.
            </p>
            <h3>The short version</h3>
            <ul>
              <li><strong>Best for most people:</strong> Apple Notes, if you are happy inside iCloud.</li>
              <li><strong>Best for privacy:</strong> Dash, for notes that stay on your device and encrypted by default.</li>
              <li><strong>Best for Markdown purists:</strong> Bear on Apple platforms, Obsidian if you want plain files everywhere.</li>
              <li><strong>Best for teams and databases:</strong> Notion, with Craft as the prettier document-first option.</li>
              <li><strong>Best open source:</strong> Joplin for bring-your-own sync, Standard Notes for a long encryption track record.</li>
            </ul>
          </>
        }
        apps={apps}
        appsHeading="The 8 best notes apps for Mac, ranked"
        inlineCTA="Try the private one — Dash for Mac, $14.99 one-time"
        sections={[
          {
            heading: 'How to choose a notes app for your Mac',
            body: (
              <>
                <p>
                  <strong>Decide where your notes should live.</strong> Cloud-first apps (Notion, Craft, Google Keep) are
                  convenient, but the provider can read everything. Local-first apps (Dash, Obsidian, Apple Notes with
                  Advanced Data Protection) keep the master copy on your Mac.
                </p>
                <p>
                  <strong>Check what &ldquo;encrypted&rdquo; means.</strong> Encrypted in transit and at rest is table stakes and
                  still lets the company read your notes. End-to-end encryption, where only your devices hold the keys, is the
                  bar that matters. Dash, Standard Notes, Joplin and Obsidian Sync clear it; Notion, Craft and Bear do not.
                </p>
                <p>
                  <strong>Try the export before you commit.</strong> A notes app is a ten-year decision. Make sure you can leave
                  with Markdown, PDF or DOCX files, not a proprietary archive.
                </p>
                <p>
                  <strong>Add up the subscription.</strong> A $10-a-month plan is $600 over five years. Apple Notes and Obsidian
                  are free, and Dash is $14.99 once for the Mac app, with sync as the only optional subscription.
                </p>
              </>
            ),
          },
          {
            heading: 'Why we built Dash the way we did',
            body: (
              <>
                <p>
                  We wanted the feel of a modern block editor with the privacy of a paper notebook. So Dash stores notes on your
                  Mac as encrypted files, locks individual notes or the whole app with AES-256-GCM, unlocks with Touch ID, and
                  never talks to a server unless you switch on Dash Sync, which encrypts everything on your device first. The
                  code is open source under the MIT license, so you can check every claim on this page yourself.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Private notes, on your Mac and iPhone"
        ctaSubheadline="Dash is $14.99 one-time on Mac and free on iPhone. Notes stay on your device unless you choose to sync them."
      />
    </>
  );
}
