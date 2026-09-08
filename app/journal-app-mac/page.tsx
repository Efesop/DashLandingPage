import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Journal App for Mac (2026): 7 Journaling & Diary Apps';
const DESCRIPTION =
  'The best journal app for Mac in 2026: Day One, Apple Journal, Diarium, Journey, Bear, Obsidian and Dash compared on privacy, encryption, price and offline use.';
const PATH = '/journal-app-mac';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'journal app mac',
    'journaling app mac',
    'diary app mac',
    'best journal app for mac',
    'best diary app for mac',
    'journal app for mac free',
    'encrypted journal app mac',
  ],
});

// facts checked 2026-09-08 against each vendor's pricing or FAQ page; see the PR for URLs
const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'A private notebook that works as a diary: a page per day, links between entries, a lock on anything sensitive, and nothing leaving the Mac unless you turn on encrypted sync.',
    bestFor: 'A diary that is genuinely private',
    price: '$14.99 once on Mac; free on iPhone and the web',
    privacy: 'Offline by default; locked entries use AES-256; sync is end-to-end encrypted',
    pros: [
      'No account; nothing uploaded unless you choose sync',
      'Lock any entry or the whole app; duress password; self-destructing notes',
      'Wiki-style [[links]], tags, attachments, four themes, focus mode',
    ],
    cons: ['No prompts, streaks or “on this day”', 'No Windows or Linux app', 'Sync is a separate subscription'],
    isDash: true,
  },
  {
    name: 'Day One',
    tagline:
      'The reference journaling app: photos, prompts, templates, “On This Day” and streaks, on every Apple device, Android and the web.',
    bestFor: 'A rich, prompted journaling habit',
    price: 'Basic free; Silver $49.99 a year; Gold $74.99 a year',
    privacy: 'End-to-end encrypted on every plan, including the free one; account required',
    pros: ['Encryption included on the free plan', 'Prompts, templates and memories done well', 'Mac, iPhone, iPad, Watch, Android and web'],
    cons: ['An account and Day One’s cloud are the default', 'Unlimited photos and the best features are paid', 'Owned by Automattic; your journal lives in its service'],
  },
  {
    name: 'Apple Journal',
    tagline:
      'Apple’s own journal, free with the operating system: suggestions drawn from your photos, workouts and places, on iPhone, iPad and now the Mac.',
    bestFor: 'Zero-cost, zero-setup journaling on Apple devices',
    price: 'Free',
    privacy: 'Locks with Touch ID or Face ID; Apple says entries synced through iCloud are end-to-end encrypted',
    pros: ['Free and preinstalled', 'Suggestions from your own photos and activity', 'Lock the app with a fingerprint or your face'],
    cons: ['Apple devices only', 'Tied to your Apple Account and iCloud', 'Little control over export'],
  },
  {
    name: 'Diarium',
    tagline:
      'A classic diary with media, templates and a calendar view. Free with a one-time Pro purchase per platform, syncing through the cloud storage you already have.',
    bestFor: 'A traditional diary without a subscription',
    price: 'Free; Pro is a one-time purchase per platform',
    privacy: 'Entries stay on the device; password, PIN or biometrics; no account',
    pros: ['One-time purchase, no account', 'Windows, Mac, iOS, Android and iPad', 'Imports from Day One and Journey'],
    cons: ['Sync goes through your own OneDrive, Google Drive, Dropbox, iCloud or WebDAV', 'A separate purchase on each platform', 'Plainer than the newer apps'],
  },
  {
    name: 'Journey',
    tagline:
      'A multimedia journal with moods and prompts on every platform, including Windows, Linux and the web, with Journey Cloud sync and a self-hosting option.',
    bestFor: 'Journaling everywhere, including Windows and Linux',
    price: 'Free tier; Premium as a subscription or a one-time purchase',
    privacy: 'Journey Cloud sync with end-to-end encryption offered; passcode and biometrics',
    pros: ['The widest platform list here', 'End-to-end encryption available', 'Self-hosting on the way'],
    cons: ['Cloud-first, with an account', 'Prices are not shown on the site; check in the app', 'Busy interface'],
  },
  {
    name: 'Bear',
    tagline:
      'A Markdown notes app that many people journal in, with a daily-note habit built from tags and the nicest typography on the Mac.',
    bestFor: 'Journaling inside a notes app',
    price: 'Free; Bear Pro $2.99 a month or $29.99 a year',
    privacy: 'iCloud sync; per-note encryption and app lock with Pro',
    pros: ['Beautiful writing environment and themes', 'Encrypt individual entries on Pro', 'Exports to Markdown, PDF, DOCX and more'],
    cons: ['Apple platforms only', 'iCloud sync is not end-to-end encrypted by Bear', 'Journaling features are do-it-yourself'],
  },
  {
    name: 'Obsidian',
    tagline:
      'Plain Markdown files with a Daily Notes plugin: the most durable journal you can keep, if you are happy to set it up.',
    bestFor: 'A journal you can still open in thirty years',
    price: 'Free for personal use; Obsidian Sync $4 a month billed yearly',
    privacy: 'Files on your disk; Sync is end-to-end encrypted; no built-in entry lock',
    pros: ['Your entries are plain text files you own', 'Daily notes, templates and backlinks', 'End-to-end encrypted sync'],
    cons: ['No encryption at rest without plugins or FileVault', 'Set-up before you write a word', 'Heavier on the phone'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'Does the Mac have a built-in journal app?',
    answer:
      'Yes. Apple Journal, which started on the iPhone, is now on the Mac and iPad with macOS 26 and iPadOS 26. It is free, locks with Touch ID, and syncs through iCloud. If you want a journal that does not depend on an Apple Account, or one that runs on Windows too, look at the other apps here.',
  },
  {
    question: 'What is the best free journal app for Mac?',
    answer:
      'Apple Journal is free and preinstalled. Day One’s Basic plan is free and includes end-to-end encryption, with one photo per entry. Obsidian is free for personal use. Dash is free on iPhone and the web, with a one-time $14.99 purchase for the Mac app.',
  },
  {
    question: 'Which journal apps for Mac are encrypted?',
    answer:
      'Day One is end-to-end encrypted on every plan. Apple says Journal entries synced through iCloud are end-to-end encrypted. Journey offers end-to-end encryption. Dash locks any entry with AES-256 on the device and encrypts sync end to end. Bear encrypts individual notes on Bear Pro. Obsidian encrypts its sync but not the files on disk.',
  },
  {
    question: 'Can I keep the same journal on Mac and iPhone?',
    answer:
      'All seven can. Day One, Apple Journal, Journey and Bear sync through their own or Apple’s cloud; Diarium syncs through your cloud storage; Obsidian uses Obsidian Sync. Dash keeps Mac and iPhone in step with the optional end-to-end encrypted Dash Sync, or with an encrypted .dashpack export if you would rather not subscribe.',
  },
];

const related = [
  {
    title: 'Encrypted diary and journal app',
    href: '/secure-journal',
    description: 'How Dash keeps a diary on your device, and how it compares with Day One and Journey.',
  },
  {
    title: 'Best notes apps for Mac',
    href: '/best-notes-app-for-mac',
    description: 'Eight Mac notes apps compared on privacy, offline use and price.',
  },
  {
    title: 'Day One alternatives',
    href: '/day-one-alternative',
    description: 'Journals without a subscription or an account, and how to move your entries.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  itemListJsonLd('Journal apps for Mac', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function JournalAppMacPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='Journaling on Mac'
        headline='The Best Journal Apps for Mac in 2026'
        subheadline='Seven journaling and diary apps for the Mac, compared on who can read your entries, whether they work offline, and what they cost.'
        updated='September 2026'
        intro={
          <>
            <p>
              A journal is the one document on your Mac that was never meant for anyone else. That makes the choice of journal
              app unusual: the editor barely matters, and the questions that do are where the entries are stored, who holds
              the key, whether the app works with the Wi‑Fi off, and whether you are buying it or renting it.
            </p>
            <p>
              The seven apps below cover the range, from Apple’s free built-in journal to plain Markdown files. We build{' '}
              <a href='/'>Dash</a>, so it is listed first and judged by the same four questions as the rest.
            </p>
          </>
        }
        apps={apps}
        appsHeading='Seven journal apps for the Mac'
        sections={[
          {
            id: 'what-matters',
            heading: 'What matters in a journal app',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Does it work offline?</strong> A journal that needs a connection is a web page with a diary skin.
                  </li>
                  <li>
                    <strong>Who can read the entries?</strong> “Encrypted at rest” means the company holds the key. End-to-end
                    means it does not. On the device with a lock means there is no company in the loop at all.
                  </li>
                  <li>
                    <strong>Does it need an account?</strong> An account is a record of you that outlives the app.
                  </li>
                  <li>
                    <strong>Is the price a purchase or a rent?</strong> A journal is a decades-long habit. Subscriptions add
                    up; so does the risk that a service closes with your entries inside it.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'private-vs-encrypted',
            heading: '“Private” versus encrypted',
            body: (
              <>
                <p>
                  Every journal app on this list calls itself private. Three different things hide behind the word. Some apps
                  mean a passcode screen, which stops a person picking up your Mac and nothing else. Some mean encryption on
                  their servers, which stops an outsider but not the company. Only end-to-end encryption, or entries that never
                  leave the device, stops both.
                </p>
                <p>
                  Day One, Journey and Apple Journal offer end-to-end encryption for their sync. Dash locks an entry on the
                  device with AES-256-GCM, so the entry is unreadable without your password whether or not you ever sync it.
                  Bear does the same for individual notes on its paid plan. Obsidian leaves the files in the clear on your disk
                  and encrypts only the sync.
                </p>
              </>
            ),
          },
          {
            id: 'journaling-in-dash',
            heading: 'Journaling in Dash',
            body: (
              <>
                <p>
                  Dash is a notes app first, so a journal in it is a folder of pages: one page per day, titled with the date,
                  with tags for the themes you want to track. Because pages link to each other with [[double brackets]], an
                  entry can point back to the day something started, and a name or a project collects every mention over the
                  years.
                </p>
                <p>
                  Entries you would not want anyone to read get a lock: encrypted with AES-256-GCM, opened with Touch ID on the
                  Mac or Face ID on iPhone. Lock the whole app and it locks itself after a few minutes away. A duress password
                  opens a decoy set of notes instead of the real journal. Photos and PDFs attach to an entry and stay on the
                  device with it. Focus mode clears the sidebar so it is just you and the page.
                </p>
              </>
            ),
          },
          {
            id: 'leaving-day-one',
            heading: 'Moving out of Day One',
            body: (
              <>
                <p>
                  Day One exports a whole journal as JSON, Markdown or PDF from its settings. Keep that export as the archive
                  of the old journal. Diarium and Journey import Day One exports directly; Obsidian reads the Markdown files as
                  they are. In Dash, start the new journal from today and paste in the entries you want at hand, keeping the
                  full archive as an encrypted backup. Our <a href='/day-one-alternative'>Day One alternatives</a> page goes
                  through the options.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A diary nobody else can open. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your journal. Your Mac. Nobody else’s server.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
