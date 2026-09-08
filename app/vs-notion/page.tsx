import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Notion Alternative: Private, Offline Notes (Dash vs Notion)';
const DESCRIPTION =
  'A private Notion alternative: Dash keeps notes on your device, encrypted, with no account and a one-time price. Dash vs Notion, feature by feature.';
const PATH = '/vs-notion';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'notion alternative',
    'dash vs notion',
    'private notion alternative',
    'notion privacy',
    'offline notion alternative',
    'notion without cloud',
    'is notion encrypted',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Can I really replace Notion with Dash?',
    answer:
      'For personal notes, yes: Dash has a block editor, folders, tags, wiki-style [[links]], search, attachments and export. For team wikis, databases and shared pages, Notion is the better tool and Dash does not try to compete. Many people keep both, with the private notes in Dash.',
  },
  {
    question: 'How do I move my notes from Notion?',
    answer:
      'Export your workspace from Notion as Markdown and CSV. You get a folder of Markdown files with your page structure. Paste the pages you use into Dash and keep the export as an archive; an encrypted .dashpack backup is a good place for it.',
  },
  {
    question: 'Is Dash as feature-rich as Notion?',
    answer:
      'No, and deliberately. Dash does one thing: private notes on your device. There are no databases, no shared workspaces and no page permissions, because those need a server that can read your content. What Dash adds instead is encryption on any note, an app lock, a duress password and self-destructing notes.',
  },
  {
    question: 'What about syncing between devices?',
    answer:
      'Dash Sync is an optional subscription at $4.99 a month or $47.99 a year with a seven-day trial. Everything is encrypted on your device before upload, so the relay only ever stores ciphertext. Leave it off and Dash never talks to a server; move notes with an encrypted .dashpack export instead.',
  },
  {
    question: 'Why is Dash a one-time payment when Notion is a subscription?',
    answer:
      'Notion runs your workspace on its servers, so its costs continue for as long as you use it. Dash runs on your device, so ours do not. The Mac app is $14.99 once, the iPhone and web apps are free, and the only subscription is the optional sync relay, priced where the cost actually is.',
  },
];

const related = [
  {
    title: 'Notion alternatives',
    href: '/notion-alternatives',
    description: 'Eight apps that keep your notes private, compared.',
  },
  {
    title: 'Is Notion private?',
    href: '/is-notion-private',
    description: 'What Notion encrypts, who holds the keys, and what its AI does with your pages.',
  },
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
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

export default function VsNotionPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Dash vs Notion'
        headline='A Notion Alternative for Notes That Stay Private'
        subheadline='Notion is a fine workspace for a team. For the notes you would not put in a shared workspace, Dash keeps everything on your device.'
        updated='September 2026'
        intro={
          <>
            <p>
              Notion’s pitch is that everything lives in one place. The catch is that the place is Notion’s servers, where
              your content is readable by the company, an account is required, and most of it needs a connection. For shared
              project docs that is a fair trade. For a journal, a password hint or a draft you are not ready to show, it is a
              bad one.
            </p>
            <p>
              <a href='/'>Dash</a> is the opposite arrangement. Notes are files on your Mac or iPhone, there is no account,
              and anything sensitive gets a lock. We make Dash, so judge the table below on the facts rather than the framing.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash vs Notion',
          subheading: 'Checked against Notion’s own security and pricing pages on 8 September 2026.',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'notion', label: 'Notion' },
          ],
          rows: [
            { feature: 'Works fully offline', values: { dash: true, notion: 'Partial' } },
            { feature: 'Works without an account', values: { dash: true, notion: false } },
            { feature: 'Provider cannot read your content', values: { dash: true, notion: false } },
            { feature: 'End-to-end encrypted sync', values: { dash: true, notion: false } },
            { feature: 'Lock individual notes', values: { dash: true, notion: false } },
            { feature: 'Lock the whole app', values: { dash: true, notion: false } },
            { feature: 'Wiki-style [[links]]', values: { dash: true, notion: true } },
            { feature: 'Databases and shared workspaces', values: { dash: false, notion: true } },
            { feature: 'Real-time collaboration', values: { dash: false, notion: true } },
            { feature: 'Open source', values: { dash: true, notion: false } },
            { feature: 'Price', values: { dash: '$14.99 once', notion: 'Free tier; per user' } },
          ],
        }}
        sections={[
          {
            id: 'privacy',
            heading: 'Where your notes actually live',
            body: (
              <>
                <p>
                  Notion encrypts data in transit with TLS and at rest with AES-256 on Amazon Web Services, and it holds the
                  keys. That means Notion can decrypt your pages; its policy limits staff access to troubleshooting and
                  recovery. There is no end-to-end encryption on any plan, and there cannot easily be one while Notion offers
                  server-side search, AI and collaboration.
                </p>
                <p>
                  Dash keeps notes on the device. Lock one and it is encrypted with AES-256-GCM using a key derived from your
                  password with PBKDF2-SHA256 at 600,000 iterations. If you turn on Dash Sync, changes are encrypted on your
                  device with a vault key that never leaves your devices, so the relay stores ciphertext it cannot read.
                </p>
              </>
            ),
          },
          {
            id: 'features',
            heading: 'What each is actually for',
            body: (
              <>
                <p>
                  <strong>Notion is better at:</strong> databases and views, team wikis, shared pages and permissions,
                  real-time collaboration, templates, and publishing a page to the web.
                </p>
                <p>
                  <strong>Dash is better at:</strong> private notes. Locking any note or the whole app with Touch ID or Face
                  ID, working with no connection and no account, a duress password that opens decoy notes, notes that delete
                  themselves on a timer, and a local AI assistant that runs on your own machine instead of a company’s.
                </p>
              </>
            ),
          },
          {
            id: 'pricing',
            heading: 'What each costs',
            body: (
              <>
                <p>
                  Notion has a free personal plan and charges per user for paid plans; the price recurs for as long as you use
                  it. Dash is $14.99 once for the Mac app, free on iPhone and the web. The only subscription is Dash Sync at
                  $4.99 a month or $47.99 a year, and you do not need it to take notes.
                </p>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving from Notion to Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export from Notion:</strong> Settings, then Export all workspace content, as Markdown and CSV.
                  </li>
                  <li>
                    <strong>Decide what is actually private.</strong> Most workspaces are mostly shared docs. Those can stay.
                  </li>
                  <li>
                    <strong>Bring the private pages across</strong> and lock the ones that need it. Keep the full export as an
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
        ctaHeadline='Keep the private notes out of the company cloud.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
