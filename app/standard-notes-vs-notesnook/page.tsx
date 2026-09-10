import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Standard Notes vs Notesnook: Encryption, Price, Platforms';
const DESCRIPTION =
  'Standard Notes vs Notesnook compared on encryption, licences, free tiers, prices and Mac and iPhone apps, with Dash as a third option that needs no account.';
const PATH = '/standard-notes-vs-notesnook';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'standard notes vs notesnook',
    'notesnook vs standard notes',
    'notesnook alternative',
    'encrypted notes app comparison',
    'obsidian vs standard notes',
  ],
});

// facts checked 2026-09-08: standardnotes.com/plans (via search; the site blocks fetches), notesnook.com/pricing, both GitHub repos
const apps: ArticleApp[] = [
  {
    name: 'Standard Notes',
    tagline:
      'End-to-end encrypted notes since 2016, now part of Proton. Plain and sturdy, with a free plan that covers plain-text notes and paid plans for richer editors, file storage and history.',
    bestFor: 'A long security record and the Proton ecosystem',
    price: 'Free (plain text); Productivity $90 a year; Professional $120 a year',
    privacy: 'End-to-end encrypted by default; account required',
    pros: ['Nearly a decade of audits and a conservative design', 'Mac, Windows, Linux, iOS, Android and web', 'AGPL-3.0; server code published'],
    cons: ['The free editor is plain text only', 'The full app costs $90 a year', 'Interface feels dated'],
  },
  {
    name: 'Notesnook',
    tagline:
      'A newer, more polished encrypted-by-default app. Rich text on the free plan, everything encrypted on your device with XChaCha20-Poly1305 and Argon2 before it syncs.',
    bestFor: 'A modern encrypted app with a usable free tier',
    price: 'Free; Essential $19.99 a year; Pro $69.99 a year',
    privacy: 'End-to-end encrypted by default; account required',
    pros: ['Rich editor without paying', 'Web, desktop and mobile clients', 'GPL-3.0 client and server'],
    cons: ['Younger project and team', 'Free tier limits attachments to 50 MB a month', 'Notes are not local files'],
  },
  {
    name: 'Dash',
    tagline:
      'The third option: notes that never leave your device unless you choose sync. No account, lock any note with AES-256, a lock on the whole app, and a Mac app you buy once.',
    bestFor: 'Privacy without an account',
    price: '$14.99 once on Mac; free on iPhone and the web; sync $4.99 a month, optional',
    privacy: 'Offline by default; locked notes AES-256-GCM; sync end-to-end encrypted',
    pros: ['No account, nothing uploaded by default', 'Duress password and self-destructing notes', 'Open source (MIT); Touch ID and Face ID'],
    cons: ['No Windows or Linux app', 'Encryption is per note you lock, not everything by default', 'Sync is a subscription'],
    isDash: true,
  },
];

const faqs: FAQ[] = [
  {
    question: 'Is Notesnook better than Standard Notes?',
    answer:
      'For most people starting today, Notesnook gives you more for free: a rich editor, attachments and a modern interface, all end-to-end encrypted. Standard Notes wins on track record, on its conservative design, and for anyone already inside Proton. Both are sound choices; the difference is polish versus pedigree.',
  },
  {
    question: 'Is Standard Notes still free?',
    answer:
      'Yes. The free plan gives you unlimited end-to-end encrypted plain-text notes on every platform. Rich text, spreadsheets, revision history and file storage need the Productivity plan at $90 a year or the Professional plan at $120 a year.',
  },
  {
    question: 'Who owns Standard Notes?',
    answer:
      'Proton, the Swiss company behind Proton Mail, acquired Standard Notes in April 2024. The app kept its name, its open-source licence and its pricing.',
  },
  {
    question: 'Can I move notes between them?',
    answer:
      'Yes. Standard Notes exports a decrypted backup and plain files; Notesnook imports from a range of apps and formats and exports to Markdown, HTML and PDF. Expect to lose some formatting either way. Dash exports Markdown, PDF and DOCX and an encrypted .dashpack backup.',
  },
];

const related = [
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'How Dash encrypts a note on the device, and its optional end-to-end sync.',
  },
  {
    title: 'Open source note taking apps',
    href: '/open-source-notes-app',
    description: 'Six apps whose code you can read, compared.',
  },
  {
    title: 'Standard Notes alternatives',
    href: '/standard-notes-alternative',
    description: 'Rich text and encryption without the yearly plan.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Standard Notes vs Notesnook', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function StandardNotesVsNotesnookPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='Comparison'
        headline='Standard Notes vs Notesnook'
        subheadline='Two end-to-end encrypted notes apps compared on encryption, free tiers, prices and platforms, with Dash as the option that needs no account.'
        updated='September 2026'
        intro={
          <>
            <p>
              <strong>The verdict in one paragraph.</strong> Both apps encrypt everything on your device before it reaches
              their servers, both are open source, and both run on the Mac, iPhone and everywhere else. Notesnook gives you a
              rich editor and attachments for free and looks the more modern of the two. Standard Notes charges $90 a year for
              its rich editors but has a longer security record and is now part of Proton. If neither account-based model
              appeals, <a href='/'>Dash</a> (which we make, and list last here) keeps notes on the device with no account at all.
            </p>
          </>
        }
        comparison={{
          heading: 'Side by side',
          subheading: 'Checked against each vendor’s pages and repositories on 8 September 2026.',
          columns: [
            { key: 'sn', label: 'Standard Notes' },
            { key: 'nn', label: 'Notesnook' },
            { key: 'dash', label: 'Dash', highlight: true },
          ],
          rows: [
            { feature: 'Encrypted so the vendor cannot read notes', values: { sn: true, nn: true, dash: 'Locked notes; sync' } },
            { feature: 'Works without an account', values: { sn: false, nn: false, dash: true } },
            { feature: 'Rich text on the free plan', values: { sn: 'Plain text', nn: true, dash: true } },
            { feature: 'Open source', values: { sn: 'AGPL-3.0', nn: 'GPL-3.0', dash: 'MIT' } },
            { feature: 'Mac and iPhone apps', values: { sn: true, nn: true, dash: true } },
            { feature: 'Windows and Linux apps', values: { sn: true, nn: true, dash: false } },
            { feature: 'Lock the app; duress password', values: { sn: 'App lock', nn: 'App lock', dash: true } },
            { feature: 'Self-destructing notes', values: { sn: false, nn: false, dash: true } },
            { feature: 'Full app, per year', values: { sn: '$90', nn: '$69.99', dash: '$14.99 once' } },
          ],
        }}
        apps={apps}
        appsHeading='The three apps'
        sections={[
          {
            id: 'encryption',
            heading: 'Encryption and what the server sees',
            body: (
              <>
                <p>
                  Standard Notes and Notesnook both encrypt note content on your device with a key derived from your account
                  password, using modern primitives (Notesnook documents XChaCha20-Poly1305 with Argon2; Standard Notes uses a
                  comparable construction in its current protocol). Their servers store ciphertext and the metadata needed to
                  sync it. Neither vendor can read your notes, and both publish the code so you can check.
                </p>
                <p>
                  Dash takes a different route. There is no account and, by default, no server: notes are files on your Mac
                  or iPhone. You lock the notes that need it with AES-256-GCM and a password of your own. If you turn on Dash
                  Sync, changes are encrypted with a vault key that never leaves your devices, and the relay stores ciphertext.
                </p>
              </>
            ),
          },
          {
            id: 'plans',
            heading: 'Free tier and paid plans',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Standard Notes:</strong> free plan with unlimited encrypted plain-text notes. Productivity, $90 a
                    year, adds rich editors, spreadsheets, a year of revision history and file storage. Professional, $120 a
                    year, adds 100 GB of storage and subscription sharing.
                  </li>
                  <li>
                    <strong>Notesnook:</strong> free plan with a rich editor and 50 MB of attachments a month. Essential is
                    $1.99 a month or $19.99 a year; Pro is $6.99 a month or $69.99 a year; a Believer tier costs more and
                    funds development.
                  </li>
                  <li>
                    <strong>Dash:</strong> $14.99 once for the Mac app; the iPhone and web apps are free. The only subscription
                    is the optional end-to-end encrypted sync at $4.99 a month or $47.99 a year.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'platforms',
            heading: 'Platforms and offline use',
            body: (
              <>
                <p>
                  Standard Notes and Notesnook run on Mac, Windows, Linux, iOS, Android and in the browser, and both work
                  offline once you are signed in, syncing when a connection returns. Dash runs on Mac, iPhone and the web
                  (Android through the web app); it is offline by design, with sync as the optional extra rather than the
                  premise.
                </p>
              </>
            ),
          },
          {
            id: 'open-source',
            heading: 'Open source and self-hosting',
            body: (
              <>
                <p>
                  Standard Notes is AGPL-3.0 and Notesnook is GPL-3.0; both publish their server code, so the determined can
                  self-host. Dash is MIT licensed. Its sync relay is run by Dash, but because the relay only ever holds
                  ciphertext, self-hosting buys little that the encryption does not already give you.
                </p>
              </>
            ),
          },
          {
            id: 'where-dash-fits',
            heading: 'Where Dash fits',
            body: (
              <>
                <p>
                  Pick Standard Notes or Notesnook if you want every note encrypted automatically and synced everywhere behind
                  one account, and you are happy to pay yearly for the full app. Pick Dash if you would rather there was no
                  account, no upload by default, a lock you apply deliberately, a duress password for the worst day, and a Mac
                  app you pay for once.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Encrypted notes with no account to make. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='The encrypted notes app with no account.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
