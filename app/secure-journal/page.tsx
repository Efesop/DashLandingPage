import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Encrypted Diary & Journal App for Mac and iPhone';
const DESCRIPTION =
  'An encrypted diary and journal app for Mac and iPhone: AES-256 locked entries, Face ID, no account, offline by default, optional end-to-end encrypted sync.';
const PATH = '/secure-journal';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'encrypted diary',
    'encrypted journal',
    'private journal app',
    'private journal',
    'diary app with password',
    'journal app with password',
    'private diary app',
    'secure journaling app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How is this different from Day One or Journey?',
    answer:
      'Day One and Journey are good journaling apps built around their own clouds and accounts; Day One includes end-to-end encryption on every plan. Dash starts from the other end. There is no account, nothing leaves your device unless you turn sync on, any entry can be locked with AES-256, and the Mac app is $14.99 once. If you do want sync, it is optional and end-to-end encrypted.',
  },
  {
    question: 'Can I add photos to my journal entries?',
    answer:
      'Yes. Add images inline, or attach photos (JPEG, PNG, GIF, WebP) and PDFs to any entry from the block menu or by drag-and-drop, up to 10 MB per file. Attachments are stored on your device with the entry.',
  },
  {
    question: 'What if I want to journal on more than one device?',
    answer:
      'Turn on Dash Sync and the journal stays in step across Mac, iPhone, iPad and the web, encrypted on your device before upload so the relay only ever holds ciphertext. Or keep it fully offline and move entries with an encrypted .dashpack export. You decide when and how the journal moves.',
  },
  {
    question: 'Can my partner or therapist read my journal?',
    answer:
      'Not without your password. A locked entry is encrypted with AES-256-GCM and only opens with the password you set, or with Touch ID or Face ID on your own device. Lock the whole app as well and it locks itself after a few minutes away.',
  },
  {
    question: 'What happens if I forget my encryption password?',
    answer:
      'A locked entry cannot be recovered without its password. There is no backdoor, which is the point. Keep the password in a password manager and make encrypted backups.',
  },
  {
    question: 'Is journaling in Dash good for mental health?',
    answer:
      'Journaling is widely used to process emotions, notice patterns and settle a busy mind, and it works best when you can be completely honest on the page. A diary that nobody else can open makes that honesty easier.',
  },
];

const related = [
  {
    title: 'How Dash encrypts notes',
    href: '/guides/encryption',
    description: 'AES-256-GCM and key derivation, explained in plain language.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Lock the whole journal behind Touch ID or Face ID, with auto-lock timers.',
  },
  {
    title: 'Duress password',
    href: '/guides/duress-password',
    description: 'A second password that opens decoy entries instead of the real ones.',
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

export default function SecureJournalPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='Encrypted diary'
        headline='An Encrypted Diary and Journal App That Stays Yours'
        subheadline='Entries locked with AES-256 on your own Mac or iPhone. No account, offline by default, and sync only if you ask for it.'
        updated='September 2026'
        intro={
          <>
            <p>
              A diary is the one thing you write that is meant for nobody. Most journal apps still route it through a company:
              an account to open, a cloud to sync to, a subscription to keep the door open. Some of them encrypt it well.
              None of them can match a diary that never leaves your device in the first place.
            </p>
            <p>
              <a href='/'>Dash</a> is an encrypted diary in that older sense. Entries are pages on your Mac or iPhone. Lock an
              entry and it is encrypted with AES-256-GCM; open it with your password, Touch ID or Face ID. Nothing is uploaded
              unless you turn on the optional end-to-end encrypted sync, and the Mac app is a one-time purchase.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash, Day One and Journey',
          subheading: 'Checked against each vendor’s own pages on 8 September 2026.',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'dayone', label: 'Day One' },
            { key: 'journey', label: 'Journey' },
          ],
          rows: [
            { feature: 'Entries encrypted so the vendor cannot read them', values: { dash: true, dayone: true, journey: 'Optional' } },
            { feature: 'Works without an account', values: { dash: true, dayone: false, journey: false } },
            { feature: 'Offline by default, nothing uploaded', values: { dash: true, dayone: false, journey: false } },
            { feature: 'Lock individual entries on the device', values: { dash: true, dayone: false, journey: false } },
            { feature: 'Buy once, no subscription needed', values: { dash: true, dayone: 'Free tier', journey: 'Partial' } },
            { feature: 'Duress password and self-destructing entries', values: { dash: true, dayone: false, journey: false } },
            { feature: 'Open source', values: { dash: true, dayone: false, journey: false } },
          ],
        }}
        sections={[
          {
            id: 'why-privacy',
            heading: 'Why privacy matters for journaling',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Your thoughts are not data points.</strong> Fears, plans, half-formed ideas: a company has no
                    business analysing them, and a journal that lives on a server invites exactly that.
                  </li>
                  <li>
                    <strong>Nobody reads over your shoulder.</strong> Cloud journals sit on servers that other people can, in
                    principle, reach. Entries that exist only on your device, encrypted with a password only you
                    know, do not.
                  </li>
                  <li>
                    <strong>Honesty needs a closed door.</strong> The value of a journal comes from writing what you would not
                    say aloud. That only works when you are certain nobody else will read it.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'features',
            heading: 'What Dash gives a diary',
            body: (
              <>
                <ul>
                  <li>
                    <strong>AES-256-GCM on any entry.</strong> Lock it and it is unreadable without your password; the key is
                    derived with PBKDF2-SHA256 at 600,000 iterations and never leaves the device.
                  </li>
                  <li>
                    <strong>Touch ID and Face ID.</strong> Open locked entries, or the whole app, with a fingerprint or your
                    face. Auto-lock after 1, 5, 15 or 30 minutes, or instantly with Cmd+Shift+L.
                  </li>
                  <li>
                    <strong>Offline by default.</strong> Write on a plane, in a field, in a hospital waiting room. Sync is
                    optional and end-to-end encrypted when you want it.
                  </li>
                  <li>
                    <strong>A duress password</strong> that opens a decoy set of entries, and <strong>self-destructing notes</strong>{' '}
                    for the thought you want to write down and let go of.
                  </li>
                  <li>
                    <strong>Dates, folders, tags and links.</strong> One page per day, tags for the recurring themes,
                    [[links]] that connect an entry to the day something began.
                  </li>
                  <li>
                    <strong>Four themes and a focus mode,</strong> including a dark Night theme for writing late.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'benefits',
            heading: 'What a private journal is for',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Settling the mind.</strong> Putting a worry on the page is often enough to shrink it.
                  </li>
                  <li>
                    <strong>Noticing patterns.</strong> Tags and search show you what keeps coming back.
                  </li>
                  <li>
                    <strong>Writing without an audience.</strong> Drafts, letters never sent, the things you are working out.
                  </li>
                  <li>
                    <strong>Keeping a record.</strong> Photos and PDFs attach to an entry and stay with it, on your device.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A diary nobody else can open. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Start your encrypted diary today.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
