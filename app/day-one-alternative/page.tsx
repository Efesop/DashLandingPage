import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Day One Alternatives in 2026: Private Journals, Buy Once';
const DESCRIPTION =
  'Day One alternatives in 2026 for a journal without a subscription or an account: Dash, Apple Journal, Diarium, Journey, Obsidian and Bear compared.';
const PATH = '/day-one-alternative';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'day one alternative',
    'day one alternatives',
    'apps like day one',
    'journal app without subscription',
    'day one alternative mac',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A private notebook that makes a good diary: entries stay on your Mac or iPhone, any entry can be locked with AES-256, and the Mac app is a one-time purchase.',
    bestFor: 'A journal that is genuinely yours, bought once',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'No account; offline by default; locked entries AES-256; optional end-to-end encrypted sync',
    pros: ['No account and nothing uploaded unless you turn sync on', 'Lock entries, lock the app, duress password', 'Open source (MIT); exports to Markdown, PDF, DOCX and an encrypted backup'],
    cons: ['No prompts, streaks or “on this day”', 'No Windows or Linux app', 'Sync is a separate subscription'],
    isDash: true,
  },
  {
    name: 'Apple Journal',
    tagline: 'Free with your iPhone, iPad and Mac, with suggestions from your photos and activity and a lock behind Face ID or Touch ID.',
    bestFor: 'The free, no-setup option on Apple devices',
    price: 'Free',
    privacy: 'Apple says entries synced through iCloud are end-to-end encrypted; tied to your Apple Account',
    pros: ['Free and already installed', 'Locks with Face ID or Touch ID', 'Suggestions from your own photos and workouts'],
    cons: ['Apple devices only', 'Little control over export', 'Needs an Apple Account and iCloud to sync'],
  },
  {
    name: 'Diarium',
    tagline: 'A traditional diary with media, templates and a calendar; free with a one-time Pro purchase per platform and no account.',
    bestFor: 'A Day One-style diary without the subscription',
    price: 'Free; Pro is a one-time purchase per platform',
    privacy: 'Entries on the device; password, PIN or biometrics; syncs through your own cloud storage',
    pros: ['One-time purchase, no account', 'Imports Day One exports directly', 'Windows, Mac, iOS, Android and iPad'],
    cons: ['Sync relies on your OneDrive, Google Drive, Dropbox, iCloud or WebDAV', 'Pro is bought separately on each platform', 'Plainer design'],
  },
  {
    name: 'Journey',
    tagline: 'The closest match to Day One’s feature list, with moods, prompts and media, on every platform including Windows, Linux and the web.',
    bestFor: 'Day One features on non-Apple platforms',
    price: 'Free tier; Premium as a subscription or a one-time purchase',
    privacy: 'Journey Cloud sync; end-to-end encryption offered; passcode and biometrics',
    pros: ['Runs everywhere, including Windows and Linux', 'End-to-end encryption available', 'Imports from Day One'],
    cons: ['Cloud-first, with an account', 'Prices are not on the website', 'Busier than the others'],
  },
  {
    name: 'Obsidian',
    tagline: 'Plain Markdown files with a Daily Notes plugin. The most portable journal there is, and the most work to set up.',
    bestFor: 'A journal in files you will own forever',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files on your disk; Sync is end-to-end encrypted; no entry lock built in',
    pros: ['Your entries are plain text files', 'Reads a Day One Markdown export as it is', 'End-to-end encrypted sync'],
    cons: ['No encryption at rest without plugins or FileVault', 'Set-up before you write', 'Heavier on the phone'],
  },
  {
    name: 'Bear',
    tagline: 'A Markdown notes app with the nicest typography on the Mac; a daily-note habit built from tags, and per-note encryption on Pro.',
    bestFor: 'Journaling inside a notes app on Apple devices',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock with Pro',
    pros: ['Beautiful writing environment', 'Encrypt individual entries on Pro', 'Exports to Markdown, PDF and DOCX'],
    cons: ['Apple platforms only', 'iCloud sync is not end-to-end encrypted by Bear', 'Journaling features are do-it-yourself'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Why switch from Day One?',
    answer:
      'Three reasons come up. The best features (unlimited photos, multiple journals with everything on) sit on the Silver and Gold plans at $49.99 and $74.99 a year. The journal lives in Day One’s cloud behind an account, which some people would rather not have. And Day One is Apple-and-Android only on the desktop side of things, with no Windows or Linux app. Its free Basic plan with end-to-end encryption is generous, so if none of those bother you, there is no need to leave.',
  },
  {
    question: 'What is the best free Day One alternative?',
    answer:
      'Apple Journal, if you are on Apple devices: free, locked with Face ID or Touch ID, and synced through iCloud. Obsidian is free for personal use and keeps the journal in plain Markdown files. Diarium is free with a one-time Pro upgrade. Dash is free on iPhone and the web.',
  },
  {
    question: 'Is there a Day One alternative with encryption?',
    answer:
      'Dash locks any entry with AES-256 on the device and encrypts sync end to end. Journey offers end-to-end encryption. Apple says Journal entries synced through iCloud are end-to-end encrypted. Bear encrypts individual notes on Pro. Obsidian encrypts its sync but not the files on your disk.',
  },
  {
    question: 'Can I import my Day One journal?',
    answer:
      'Export the journal from Day One as JSON, Markdown or PDF. Diarium and Journey import Day One exports directly. Obsidian reads the Markdown files as they are. In Dash, keep the export as an encrypted archive and paste in the entries you want at hand; Dash does not read Day One’s format directly.',
  },
  {
    question: 'Is Day One end-to-end encrypted?',
    answer:
      'Yes. Day One lists end-to-end encryption on every plan, including the free Basic plan. The difference with the apps here is not whether the vendor can read your journal but whether there is a vendor and an account in the loop at all, and whether you are paying once or every year.',
  },
];

const related = [
  {
    title: 'Journal apps for Mac',
    href: '/journal-app-mac',
    description: 'Seven journaling apps compared on privacy, price and offline use.',
  },
  {
    title: 'Encrypted diary and journal app',
    href: '/secure-journal',
    description: 'How Dash keeps a diary on your device, with a Day One and Journey comparison.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Lock the whole journal behind Touch ID or Face ID.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Day One alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function DayOneAlternativePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='Alternatives'
        headline='Day One Alternatives for a Private Journal'
        subheadline='Six journals for people who want their entries on their own device, without a subscription or an account, and how to move a Day One journal across.'
        updated='September 2026'
        intro={
          <>
            <p>
              Day One is the journaling app most people are measured against, and for good reason: it is polished, it runs
              everywhere Apple and Android do, and its free plan now includes end-to-end encryption. People still look for a
              Day One alternative for three reasons: the yearly plans, the account and cloud at the centre of it, and a wish
              to keep a diary in something simpler or more durable.
            </p>
            <p>
              The six apps below each answer one of those. We build <a href='/'>Dash</a>, so it is listed first and judged
              by the same rules as the others.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Six Day One alternatives'
        sections={[
          {
            id: 'why-people-leave',
            heading: 'Why people leave Day One',
            body: (
              <>
                <ul>
                  <li>
                    <strong>The yearly plans.</strong> Basic is free with one photo per entry. Unlimited photos, more journals
                    and the rest sit on Silver at $49.99 a year and Gold at $74.99 a year. Over a decade of journaling that is a
                    real sum.
                  </li>
                  <li>
                    <strong>The account and the cloud.</strong> Your journal lives in Day One’s service, now part of
                    Automattic. It is end-to-end encrypted, which is the right design, but some people would rather there was
                    no service to trust at all.
                  </li>
                  <li>
                    <strong>Wanting something simpler.</strong> Prompts, streaks and memories are motivating for some and
                    noise for others. A page and a lock is enough for a lot of diaries.
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
                  Keep the habit. Day One’s real product is the daily nudge, and any replacement needs its own: a page per day
                  that is one keystroke away, a reminder, or a journal folder that opens on launch. Keep end-to-end encryption
                  as the floor, not a feature to pay for. Fix the two things that bothered you: pick an app you buy once if it
                  was the price, and an app with no account if it was the cloud.
                </p>
              </>
            ),
          },
          {
            id: 'moving-out',
            heading: 'Moving your journal out of Day One',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export from Day One.</strong> In the app’s settings, export the journal as JSON (the complete
                    record, with metadata), Markdown (the text, one file per entry) and PDF (a readable archive).
                  </li>
                  <li>
                    <strong>Import where it is supported.</strong> Diarium and Journey read Day One exports directly. Obsidian
                    opens the Markdown folder as a vault with no import at all.
                  </li>
                  <li>
                    <strong>Or start fresh with an archive.</strong> In Dash, begin the new journal from today, paste in the
                    handful of entries you return to, and keep the full export as an encrypted .dashpack backup on your own
                    drive.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A diary you buy once and nobody else can open. Dash is $14.99 on Mac, free on iPhone.'
        ctaHeadline='Your journal. Your device. Bought once.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
