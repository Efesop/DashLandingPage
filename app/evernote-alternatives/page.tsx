import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Evernote Alternatives Without a Subscription (2026)';
const DESCRIPTION =
  'The best Evernote alternatives in 2026, including free and one-time-purchase options that keep notes on your device: Dash, Joplin, Apple Notes, Obsidian, Notesnook, Bear, Simplenote and UpNote.';
const PATH = '/evernote-alternatives';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['evernote alternative', 'evernote alternatives', 'best evernote alternative', 'evernote alternative free', 'evernote alternative mac', 'evernote replacement', 'apps like evernote'],
});

const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'Rich notes with folders and tags, attachments, version history and export to every common format. Stored on your device, encrypted, with no subscription needed for notes.',
    bestFor: 'Evernote refugees who want a one-time purchase and real privacy',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Encrypted on-device; optional end-to-end encrypted sync',
    pros: ['No subscription required; lifetime updates on Mac', 'Attachments, version history, Trash, scheduled backups', 'Lock notes with AES-256, Touch ID and Face ID'],
    cons: ['No web clipper', 'No Windows or Linux app yet', 'Sync is a separate subscription'],
    isDash: true,
  },
  {
    name: 'Joplin',
    tagline: 'The open-source Evernote: notebooks, tags, a web clipper and an ENEX importer, with encrypted sync to your own cloud.',
    bestFor: 'The most Evernote-like free option',
    price: 'Free; optional Joplin Cloud',
    privacy: 'End-to-end encryption available',
    pros: ['Imports Evernote .enex files', 'Web clipper', 'Sync via Dropbox, OneDrive, Nextcloud'],
    cons: ['Plain interface', 'Encryption is opt-in', 'Less polished on Mac'],
  },
  {
    name: 'Apple Notes',
    tagline: 'Free, preinstalled, and capable of scanning documents, tagging and locking notes.',
    bestFor: 'Apple users who want zero cost',
    price: 'Free',
    privacy: 'iCloud key unless Advanced Data Protection is on',
    pros: ['Free', 'Document scanning', 'Locked notes are end-to-end encrypted'],
    cons: ['Apple only', 'Weak export', 'No web clipper'],
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files with plugins for everything, including a web clipper.',
    bestFor: 'People who want to own their files forever',
    price: 'Free for personal use; paid Sync',
    privacy: 'Local files; Sync is end-to-end encrypted',
    pros: ['Files you can open anywhere', 'Plugins for clipping and more', 'Cross-platform'],
    cons: ['Setup heavy', 'Encryption via plugins', 'Not a quick-capture app'],
  },
  {
    name: 'Notesnook',
    tagline: 'Encrypted notes with importers for Evernote and a generous free tier.',
    bestFor: 'Encrypted cross-platform sync',
    price: 'Free tier; Notesnook Pro',
    privacy: 'End-to-end encrypted',
    pros: ['Evernote importer', 'Encryption by default', 'Open source'],
    cons: ['Account required', 'Attachments need Pro', 'Fewer organizing tools'],
  },
  {
    name: 'Bear',
    tagline: 'Elegant Markdown notes with nested tags and a friendly Evernote importer.',
    bestFor: 'Writers on Mac and iPhone',
    price: 'Free; Bear Pro for sync',
    privacy: 'iCloud sync; no note-level encryption',
    pros: ['Beautiful editor', 'Nested tags', 'Good export'],
    cons: ['Apple only', 'Subscription for sync', 'No encryption'],
  },
  {
    name: 'Simplenote',
    tagline: 'Plain-text notes with tags and fast sync, free and cross-platform.',
    bestFor: 'Minimalists who just want text',
    price: 'Free',
    privacy: 'Cloud-synced; no end-to-end encryption',
    pros: ['Free everywhere', 'Fast', 'Markdown support'],
    cons: ['Text only', 'No attachments', 'Provider can read notes'],
  },
  {
    name: 'UpNote',
    tagline: 'A tidy notebook-and-tag app with a one-time lifetime purchase option.',
    bestFor: 'Evernote’s structure at a one-time price',
    price: 'Free tier; one-time or subscription upgrade',
    privacy: 'Cloud-synced; no end-to-end encryption',
    pros: ['Notebooks and tags', 'One-time purchase available', 'Cross-platform'],
    cons: ['Cloud-first', 'No encryption', 'Smaller ecosystem'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'What is the best free Evernote alternative?',
    answer:
      'Joplin is the closest free replacement: it imports Evernote .enex files, has a web clipper and supports notebooks and tags. Apple Notes is free on Apple devices, and Notesnook has a usable free tier with encryption. Dash is free on iPhone and the web with a one-time $14.99 Mac app.',
  },
  {
    question: 'Is there an Evernote alternative without a subscription?',
    answer:
      'Yes. Dash is a one-time $14.99 purchase on Mac with no subscription required for notes. Apple Notes, Joplin and Obsidian are free. UpNote offers a lifetime purchase. Only sync-style extras, such as Dash Sync or Obsidian Sync, are sold as subscriptions.',
  },
  {
    question: 'How do I move my notes out of Evernote?',
    answer:
      'Export from Evernote as .enex or as HTML/Markdown. Joplin, Notesnook and Bear import .enex directly. Dash imports Markdown, plain text, DOCX, CSV and JSON, so export Evernote notes to Markdown or HTML first, then import.',
  },
  {
    question: 'Which Evernote alternative is the most private?',
    answer:
      'Dash, Joplin (with encryption enabled) and Notesnook keep the provider from reading your notes. Dash also works offline with no account, so nothing leaves your device unless you turn on its end-to-end encrypted sync.',
  },
  {
    question: 'Does any alternative have a web clipper like Evernote?',
    answer:
      'Joplin and Obsidian (via plugins) have web clippers. Dash does not have a clipper yet; it focuses on notes you write rather than pages you save.',
  },
];

const related = [
  { title: 'Dash vs Evernote', href: '/vs-evernote', description: 'A head-to-head on price, privacy and features.' },
  { title: 'Best notes apps for Mac', href: '/best-notes-app-for-mac', description: 'Eight Mac note-taking apps compared.' },
  { title: 'Offline notes app', href: '/offline-notes', description: 'Why notes that live on your device are worth the switch.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  itemListJsonLd('Evernote alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function EvernoteAlternativesPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="BookOpen"
        badgeText="Alternatives"
        headline="Evernote Alternatives Without the Subscription"
        subheadline="Evernote raised prices, cut its free plan and still cannot promise that nobody but you can read your notes. These eight apps fix at least one of those problems, and the first fixes all three."
        updated="September 2026"
        intro={
          <>
            <p>
              Evernote defined the category, then spent a decade adding features people did not ask for while the price went
              up and the free plan shrank. The good news is that its core, notebooks, tags, attachments and search, is now
              table stakes, and several apps do it without a monthly bill.
            </p>
            <p>
              We ranked the alternatives below on three things Evernote users tell us they want: no subscription, an easy
              import, and notes the provider cannot read. We make <strong>Dash</strong>, so it is listed first, with the same
              pros-and-cons treatment as everyone else.
            </p>
          </>
        }
        apps={apps}
        appsHeading="The best Evernote alternatives in 2026"
        inlineCTA="Pay once, keep your notes forever — Dash for Mac, $14.99"
        sections={[
          {
            heading: 'Moving from Evernote: a five-minute plan',
            body: (
              <>
                <ol>
                  <li>Export each notebook from Evernote (.enex, or HTML/Markdown if the app you are moving to prefers it).</li>
                  <li>Import into the new app. Joplin, Notesnook and Bear read .enex directly; Dash reads Markdown, text, DOCX, CSV and JSON.</li>
                  <li>Recreate your top-level notebooks as folders and your most-used tags. Do not migrate every tag; most were never used twice.</li>
                  <li>Lock anything sensitive. In Dash that is one click per note, or one setting for the whole app.</li>
                  <li>Cancel Evernote only after a week of using the new app for real.</li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Evernote's features, without Evernote's bill"
        ctaSubheadline="Dash is $14.99 one-time on Mac and free on iPhone. Notes stay on your device, encrypted."
      />
    </>
  );
}
