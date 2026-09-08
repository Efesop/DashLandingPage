import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Notion Alternatives That Keep Your Notes Private (2026)';
const DESCRIPTION =
  'Notion alternatives that keep your notes private: eight apps compared on offline use, encryption, price and platforms, from Dash and Obsidian to Standard Notes.';
const PATH = '/notion-alternatives';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['notion alternative', 'notion alternatives', 'best notion alternative', 'notion alternative free', 'private notion alternative', 'notion alternative offline', 'apps like notion'],
});

const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A block editor with headings, lists, checklists, tables, code and embeds, but every note stays on your device, encrypted. No account, no server, unless you turn on end-to-end encrypted sync.',
    bestFor: 'Personal notes you would never put on someone else’s server',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Offline by default; provider cannot read notes',
    pros: ['Works fully offline with no sign-up', 'Lock notes with AES-256, Touch ID and Face ID', 'Wiki links, tags, focus mode, local AI, open source'],
    cons: ['No databases or team workspaces', 'No real-time collaboration', 'No Windows or Linux app yet'],
    isDash: true,
  },
  {
    name: 'Anytype',
    tagline: 'Objects, relations and sets like Notion’s databases, stored locally and synced peer-to-peer with encryption.',
    bestFor: 'Notion-style structure without Notion’s servers',
    price: 'Free for personal use',
    privacy: 'Local-first, encrypted sync',
    pros: ['Closest feature match to Notion databases', 'Encrypted, no central server', 'Cross-platform'],
    cons: ['Concepts take time to learn', 'Still maturing', 'Sharing is limited'],
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files with a huge plugin ecosystem. Databases via community plugins, if you want them.',
    bestFor: 'Power users who like to build their own system',
    price: 'Free for personal use; paid Sync',
    privacy: 'Local files; Sync is end-to-end encrypted',
    pros: ['You own the files', 'Endless customization', 'Cross-platform'],
    cons: ['Steep learning curve', 'Encryption via plugins only', 'Mobile is functional, not delightful'],
  },
  {
    name: 'Craft',
    tagline: 'The document side of Notion, done with more polish and a native feel on Apple devices.',
    bestFor: 'Beautiful documents and sharing',
    price: 'Free tier; paid plans',
    privacy: 'Cloud-synced',
    pros: ['Native Mac and iOS apps', 'Pages inside pages', 'Publishing built in'],
    cons: ['Cloud-first', 'No encryption', 'No databases'],
  },
  {
    name: 'Joplin',
    tagline: 'Open-source notebooks with end-to-end encrypted sync to a cloud you already pay for.',
    bestFor: 'Open-source users who want their own storage',
    price: 'Free; optional Joplin Cloud',
    privacy: 'End-to-end encryption available',
    pros: ['Dropbox, OneDrive, Nextcloud, WebDAV sync', 'Web clipper', 'Cross-platform'],
    cons: ['Plain interface', 'Encryption is opt-in', 'No databases'],
  },
  {
    name: 'Notesnook',
    tagline: 'Zero-knowledge encrypted notes with a free tier that is actually usable.',
    bestFor: 'Encrypted notes across every platform',
    price: 'Free tier; Notesnook Pro',
    privacy: 'End-to-end encrypted',
    pros: ['Encryption by default', 'Open source', 'Good importers'],
    cons: ['Account required', 'No databases or wiki links', 'Attachments need Pro'],
  },
  {
    name: 'Standard Notes',
    tagline: 'End-to-end encrypted notes with a decade of history, now part of Proton.',
    bestFor: 'Security-first, long-term trust',
    price: 'Free tier; paid plans',
    privacy: 'End-to-end encrypted',
    pros: ['Audited encryption', 'Cross-platform', 'Two-factor authentication'],
    cons: ['Plain-text editor on the free tier', 'Dated interface', 'No structure beyond tags'],
  },
  {
    name: 'Apple Notes',
    tagline: 'Free and preinstalled. Tables, checklists, tags and Smart Folders cover a surprising amount of Notion.',
    bestFor: 'Simple notes in the Apple ecosystem',
    price: 'Free',
    privacy: 'iCloud key unless Advanced Data Protection is on',
    pros: ['No setup', 'Locked notes are end-to-end encrypted', 'Handwriting and scanning'],
    cons: ['Apple only', 'Weak export', 'No databases'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Is Notion private?',
    answer:
      'Not in the way an encrypted notes app is. Notion encrypts data in transit and at rest, but it is not end-to-end encrypted, so Notion (and anyone with access to its systems) can read your content. Notion also requires an account and an internet connection for most features. Apps like Dash, Anytype, Notesnook and Standard Notes are built so the provider cannot read your notes.',
  },
  {
    question: 'What is the best free Notion alternative?',
    answer:
      'Anytype is the closest free alternative for Notion-style objects and databases. Obsidian, Joplin and Apple Notes are free for personal note-taking. Dash is free on iPhone and the web, with a one-time $14.99 Mac app.',
  },
  {
    question: 'Which Notion alternative works offline?',
    answer:
      'Dash, Anytype, Obsidian, Joplin and Apple Notes all work fully offline, with the master copy of your notes on your device. Notesnook and Standard Notes cache notes locally but are built around encrypted cloud sync.',
  },
  {
    question: 'Which Notion alternative does not require an account?',
    answer:
      'Dash, Obsidian, Joplin and Apple Notes need no account to take notes. Dash only asks for an email if you choose to subscribe to its optional sync.',
  },
  {
    question: 'Can I export my Notion workspace into these apps?',
    answer:
      'Notion exports pages as Markdown and CSV. Dash imports Markdown, plain text, DOCX, CSV and JSON; Obsidian, Joplin, Notesnook and Standard Notes all import Markdown too. Databases translate best into Anytype or Obsidian.',
  },
];

const related = [
  { title: 'Dash vs Notion', href: '/vs-notion', description: 'Feature by feature: privacy, offline use, pricing.' },
  { title: 'Obsidian alternatives', href: '/obsidian-alternatives', description: 'Simpler, encrypted or free options if Obsidian is too much.' },
  { title: 'Is Notion private?', href: '/is-notion-private', description: 'What Notion encrypts, who holds the keys, and what its AI does with your pages.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  itemListJsonLd('Notion alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function NotionAlternativesPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="Shield"
        badgeText="Alternatives"
        headline="Notion Alternatives That Keep Your Notes Private"
        subheadline="Notion is a fine team workspace. It is a poor place for a journal, a password hint, a therapy note or a draft you are not ready to share. These eight apps give you the editor without the server."
        updated="September 2026"
        intro={
          <>
            <p>
              Notion’s pitch is that everything lives in one place. The catch is that the place is Notion’s servers, where
              your content is readable by the company, needs an internet connection, and is tied to an account. For shared
              project docs that is fine. For personal notes it is a bad trade.
            </p>
            <p>
              The alternatives below were picked for one of three reasons: they work offline, they need no account, or the
              provider cannot read what you write. We build <strong>Dash</strong>, so it is listed first; every app gets the
              same honest treatment.
            </p>
          </>
        }
        apps={apps}
        appsHeading="The best private Notion alternatives in 2026"
        inlineCTA="A block editor that never phones home — try Dash"
        sections={[
          {
            heading: 'What you give up, and what you get back',
            body: (
              <>
                <p>
                  Leaving Notion for a private app means giving up shared databases and live collaboration. What you get back is
                  ownership: notes that open instantly with no connection, no login screen, and no company that can be
                  subpoenaed, breached or acquired with your journal inside it.
                </p>
                <p>
                  If you still need Notion for work, the practical answer is to split: keep team projects in Notion and move
                  anything personal or sensitive to an app that encrypts on your device. Dash was designed for exactly that
                  second job, with a familiar block editor so the switch costs nothing to learn.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Notion's editor. Your device. Nobody else's server."
        ctaSubheadline="Dash is $14.99 one-time on Mac and free on iPhone. No account needed."
      />
    </>
  );
}
