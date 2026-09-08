import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Secure Notes App for Researchers';
const DESCRIPTION =
  'A secure notes app for researchers: fieldwork and interview notes stay on your device, locked with AES-256, with no third-party account holding a copy.';
const PATH = '/for-researchers';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'secure notes app for researchers',
    'research notes app',
    'encrypted research notes',
    'qualitative research notes app',
    'fieldwork notes app',
    'private notes for academics',
  ],
});

const NOT_A_COMPLIANCE_TOOL =
  'Dash is a private notebook, not a compliance system. It is not certified against any research data standard, and we do not sign data processing agreements or Business Associate Agreements. What it gives you is strong encryption on your own device with no third party holding a copy. Whether that satisfies your ethics board, your institution or your funder is a question for them, and the answer usually depends on your data management plan rather than on the app.';

const faqs: FAQ[] = [
  {
    question: 'Is Dash suitable for IRB or ethics-approved research?',
    answer: NOT_A_COMPLIANCE_TOOL,
  },
  {
    question: 'Can I use it for health-related research data?',
    answer:
      'Dash is not a HIPAA business associate and does not sign Business Associate Agreements, so it should not hold identifiable health records covered by those rules. Keep regulated records in the system your institution approves, and use Dash for the analytic notes, memos and drafts you keep to yourself.',
  },
  {
    question: 'How do I share research notes with collaborators?',
    answer:
      'Export an encrypted .dashpack file, or a plain Markdown, DOCX or PDF version if the content is not sensitive, and share it through the channel your project already uses. Dash has no shared workspaces, because those need a server that can read the content.',
  },
  {
    question: 'Can I verify the security claims?',
    answer:
      'Yes. Dash is open source under the MIT licence, so your institution’s IT or security team can review the encryption implementation on GitHub rather than take a vendor’s word for it.',
  },
  {
    question: 'What about backing up research notes?',
    answer:
      'Export encrypted .dashpack files to storage you control, on a schedule that matches your data management plan. If you want an encrypted copy kept in step across your own machines, Dash Sync is optional at $4.99 a month and encrypts everything on the device before upload.',
  },
  {
    question: 'Does my institution need to approve the software?',
    answer:
      'Often, yes, especially for anything touching participant data. The useful facts for that conversation: notes are stored locally, there is no account and no telemetry, encryption is AES-256-GCM with PBKDF2-SHA256 at 600,000 iterations, sync is off by default and end-to-end encrypted when on, and the source code is public.',
  },
];

const related = [
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, and how the optional sync stays end-to-end encrypted.',
  },
  {
    title: 'How Dash encrypts notes',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Lock a shared office machine behind Touch ID with auto-lock.',
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

export default function ForResearchersPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Search'
        badgeText='For researchers'
        headline='Research Notes That Stay on Your Machine'
        subheadline='Fieldwork notes, interview memos and analytic writing, encrypted on your own device with no third-party account in the middle.'
        updated='September 2026'
        intro={
          <>
            <p>
              Research notes are awkward data. They often contain things participants said on the understanding that only you
              would hear them, they rarely fit the systems built for formal records, and they end up in whatever app is
              nearest: a cloud notes service, a shared drive, a document platform that reads content to be helpful.
            </p>
            <p>
              <a href='/'>Dash</a> is a plain answer to that: a notebook on your own machine, with real encryption on the
              notes that need it and no company holding a copy. This page is also clear about what it is not, because in
              research that matters more than a feature list.
            </p>
          </>
        }
        sections={[
          {
            id: 'what-it-gives',
            heading: 'What it gives a research project',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Local storage with no account.</strong> Notes are files on your machine; nothing is uploaded
                    unless you turn sync on.
                  </li>
                  <li>
                    <strong>AES-256-GCM on any note,</strong> with keys derived by PBKDF2-SHA256 at 600,000 iterations and
                    kept on the device.
                  </li>
                  <li>
                    <strong>A lock on the app</strong> for the shared office machine, with auto-lock timers and Touch ID.
                  </li>
                  <li>
                    <strong>Structure that suits qualitative work:</strong> folders per site or wave, tags for themes and
                    codes, [[links]] between a memo and the interviews it draws on, and search across the lot.
                  </li>
                  <li>
                    <strong>Attachments</strong> for consent scans, photographs and PDFs, stored on the device with the note.
                  </li>
                  <li>
                    <strong>Open source under MIT,</strong> so an IT review can read the code.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'not-compliance',
            heading: 'What Dash is not',
            body: (
              <>
                <p>{NOT_A_COMPLIANCE_TOOL}</p>
                <p>
                  In practice: keep identifiable participant data in the system your institution approves, keep the linking
                  file wherever your protocol says it belongs, and use Dash for pseudonymised notes, memos, coding decisions
                  and drafts. That is where most of the thinking happens anyway, and it is the part that usually has no
                  designated home.
                </p>
              </>
            ),
          },
          {
            id: 'practice',
            heading: 'A working practice',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Pseudonymise in the note, not afterwards.</strong> Participant 14, not a name, from the first
                    keystroke.
                  </li>
                  <li>
                    <strong>A folder per wave or site,</strong> a page per interview, memos in their own folder linked to the
                    interviews they discuss.
                  </li>
                  <li>
                    <strong>Tags as codes.</strong> A tag collects every instance of a theme across sites without moving
                    anything.
                  </li>
                  <li>
                    <strong>Lock anything with a name in it,</strong> and lock the app on a machine that leaves your office.
                  </li>
                  <li>
                    <strong>Encrypted exports on a schedule</strong> that matches your data management plan, to storage you
                    control.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'it-review',
            heading: 'For an IT or ethics review',
            body: (
              <>
                <p>
                  The facts a reviewer usually asks for: data is stored locally in the application’s directory on the user’s
                  machine; there is no account, no telemetry and no analytics; note encryption is AES-256-GCM with keys
                  derived by PBKDF2-SHA256 at 600,000 iterations and a unique salt per note; keys never leave the device;
                  synchronisation is disabled by default and, when enabled, encrypts content on the device before transmission
                  so the relay stores only ciphertext; the source code is published under the MIT licence.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes your participants would recognise as private. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Research notes, encrypted on your own machine.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
