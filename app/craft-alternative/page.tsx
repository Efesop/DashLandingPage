import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Craft Alternatives in 2026: Block Editors That Stay Local';
const DESCRIPTION =
  'Craft alternatives in 2026 for people who want a block editor without the cloud or the subscription: Dash, Obsidian, Anytype, Apple Notes, Bear and Notion compared.';
const PATH = '/craft-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'craft alternative',
    'craft alternatives',
    'craft docs alternative',
    'apps like craft',
    'block editor notes app',
    'craft vs notion',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A block editor for Mac and iPhone that keeps documents on your device with no account, locks any note with AES-256, and syncs end-to-end encrypted only if you turn it on.',
    bestFor: 'Craft-style writing with nothing on a company server',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['Block editor with headings, lists, tables, images and attachments', 'No account, nothing uploaded by default', 'Lock any note, lock the app, duress password; open source (MIT)'],
    cons: ['No shared or published pages', 'No Windows or Linux app', 'Sync is a subscription'],
    isDash: true,
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files with an editor that grows as far as you want it to, on every platform.',
    bestFor: 'Long-lived documents in files you own',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files stay local; Sync is end-to-end encrypted',
    pros: ['Your documents are plain files', 'Windows, macOS, Linux, iOS, Android', 'Backlinks, canvas, thousands of plugins'],
    cons: ['Less polished than Craft out of the box', 'No note encryption at rest', 'Closed source app'],
  },
  {
    name: 'Anytype',
    tagline: 'The closest to Craft’s structured feel, with objects and relations, and local-first end-to-end encrypted sync.',
    bestFor: 'Craft’s structure with encryption and offline first',
    price: 'Explorer free (1 GB network space); Builder $99 a year; Co-Creator $299 for three years',
    privacy: 'Local-first with end-to-end encrypted peer-to-peer sync',
    pros: ['Encrypted collaboration', 'Mac, Windows, Linux, iOS, Android', 'Generous free tier'],
    cons: ['Source-available, not open source', 'Heavier learning curve', 'Publishing is limited'],
  },
  {
    name: 'Apple Notes',
    tagline: 'Free, fast and preinstalled, with tables, attachments, locked notes and Markdown export since macOS 26.',
    bestFor: 'Zero-cost documents on Apple devices',
    price: 'Free',
    privacy: 'iCloud holds a key unless Advanced Data Protection is on; locked notes are end-to-end encrypted',
    pros: ['Free and already there', 'Locked notes are end-to-end encrypted', 'Handwriting and scanning'],
    cons: ['Apple devices only', 'No app lock', 'Basic structure compared with Craft'],
  },
  {
    name: 'Bear',
    tagline: 'Markdown with the best typography on Apple devices, tags instead of folders, per-note encryption on Pro.',
    bestFor: 'Writing-first notes on Apple devices',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock need Pro',
    pros: ['Beautiful editor and themes', 'Encrypt individual notes on Pro', 'Exports to Markdown, PDF, DOCX'],
    cons: ['Apple only', 'Sync needs Pro', 'No blocks or nested pages like Craft'],
  },
  {
    name: 'Notion',
    tagline: 'Blocks, databases and team workspaces. The obvious Craft alternative if the point is collaboration rather than privacy.',
    bestFor: 'Teams and structured collaboration',
    price: 'Free personal plan; paid plans per user',
    privacy: 'Cloud-only; encrypted with Notion’s keys, no end-to-end option',
    pros: ['Databases and templates', 'Collaboration is excellent', 'Web, desktop and mobile'],
    cons: ['Everything lives on Notion’s servers', 'Offline support is partial', 'Slow for quick capture'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Craft?',
    answer:
      'Craft is a beautiful editor and works offline, but its documents live in Craft’s cloud with keys Craft holds, and unlimited use needs Plus at $8 a month billed yearly. People leave for a document that stays on their own device, for a licence they buy once, or for plain files they can open with anything.',
  },
  {
    question: 'What is the best free Craft alternative?',
    answer:
      'Obsidian is free for personal use and keeps documents as Markdown files. Apple Notes is free on Apple devices. Anytype’s Explorer plan is free with 1 GB of network space. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Is there a Craft alternative with encryption?',
    answer:
      'Anytype is end-to-end encrypted and local-first. Dash locks any note with AES-256 on the device and encrypts sync end to end. Apple Notes encrypts locked notes end to end. Bear encrypts individual notes on Pro. Obsidian encrypts sync only; Notion has no end-to-end option.',
  },
  {
    question: 'Can I import my Craft documents?',
    answer:
      'Craft exports documents as Markdown, PDF, DOCX or TextBundle. Obsidian and Bear open Markdown directly, Apple Notes imports Markdown since macOS 26, Notion and Anytype import Markdown through their apps. In Dash, paste in the documents you use and keep the export as an archive.',
  },
  {
    question: 'Does Craft work offline?',
    answer:
      'Yes. Craft keeps a local copy and works fully offline, syncing when a connection returns. The distinction is where the master copy lives: in Craft’s cloud, encrypted with Craft’s keys, rather than only on your device.',
  },
];

const related = [
  {
    title: 'Notion alternatives',
    href: '/notion-alternatives',
    description: 'Eight apps that keep your notes private, compared.',
  },
  {
    title: 'Best notes apps for Mac',
    href: '/best-notes-app-for-mac',
    description: 'Eight Mac notes apps compared on privacy, offline use and price.',
  },
  {
    title: 'Is Notion private?',
    href: '/is-notion-private',
    description: 'What Notion encrypts, who holds the keys, and what its AI does with your pages.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Craft alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function CraftAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Craft Alternatives'
        subheadline='Six block editors and document apps for people who want Craft’s polish with documents that stay on their device, or a licence they buy once.'
        updated='September 2026'
        intro={
          <>
            <p>
              Craft is one of the nicest places to write a structured document on a Mac or an iPhone. The reasons people look
              for a Craft alternative are about where the documents live and what they cost: Craft keeps the master copy in
              its cloud with its own keys, unlimited use is a Plus subscription at $8 a month billed yearly, and the free tier
              stops at 1,500 blocks.
            </p>
            <p>
              The six apps below answer one of those each. We build <a href='/'>Dash</a>, so it is listed first and judged by
              the same rules as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Craft alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Craft',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Cloud-first.</strong> Craft works offline, but the master copy of every document sits in Craft’s
                    service, encrypted with Craft’s keys. There is no end-to-end option and no local-only mode.
                  </li>
                  <li>
                    <strong>The subscription.</strong> The free tier caps at 1,500 blocks and 1 GB; Plus is $8 a month billed
                    yearly, or $10 monthly.
                  </li>
                  <li>
                    <strong>Lock-in by format.</strong> Documents are Craft documents first; export to Markdown works but
                    flattens the structure.
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
                  Keep the block editor and the native feel; a replacement that drops you into raw Markdown is a different
                  product, though Obsidian and Bear make it a pleasant one. Then fix the thing that bothered you: Dash or
                  Anytype if it was the cloud, Obsidian if it was the format, Apple Notes if it was the price, Notion if the
                  real need was collaboration.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your documents out of Craft',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export.</strong> From a document or a whole space, export as Markdown (TextBundle keeps images),
                    PDF or DOCX.
                  </li>
                  <li>
                    <strong>Import.</strong> Obsidian and Bear open Markdown directly; Apple Notes imports Markdown since macOS
                    26; Notion and Anytype import through their apps.
                  </li>
                  <li>
                    <strong>Or start fresh.</strong> In Dash, paste in the documents you use and keep the export as an
                    encrypted .dashpack archive on a drive you control.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A block editor that never phones home. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Documents that stay on your Mac.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
