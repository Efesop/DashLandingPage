import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Secure Notes App for Journalists';
const DESCRIPTION =
  'A secure notes app for journalists: interview notes stay on your device, locked with AES-256, with a duress password, no account and optional encrypted sync.';
const PATH = '/for-journalists';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'secure notes app for journalists',
    'notes app for journalists',
    'encrypted notes journalist',
    'protect sources notes app',
    'private interview notes',
    'duress password notes app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Can notes in Dash be demanded in a legal process?',
    answer:
      'You can be. Encryption changes who can hand your notes over, not whether you can be asked for them. With sync off there is no company holding a copy to serve, and a locked note is unreadable without your password. What happens if you are ordered to provide that password depends entirely on your jurisdiction, and is a question for a media lawyer rather than a notes app.',
  },
  {
    question: 'How is this different from encrypted cloud storage?',
    answer:
      'Encrypted cloud storage still means a provider holds an account and a copy. Dash needs no account and keeps notes on the device by default. If you do enable sync, the relay holds only ciphertext encrypted with a key that never leaves your devices, so there is no readable copy to hand over.',
  },
  {
    question: 'What happens if I lose my device?',
    answer:
      'Locked notes stay unreadable without their password, so a seized or lost laptop does not expose them. The notes themselves are only as recoverable as your backups: export encrypted .dashpack files to storage you control, or enable Dash Sync so an encrypted copy exists on your other devices.',
  },
  {
    question: 'Can I share notes securely with an editor?',
    answer:
      'Export an encrypted .dashpack file and send it through whatever channel you already trust, sharing the password separately. Dash has no shared workspaces or collaborative editing, deliberately: those require a server that can read the content.',
  },
  {
    question: 'Can I verify the security claims?',
    answer:
      'Yes. Dash is open source under the MIT licence, so the encryption code is on GitHub for you or a security-minded colleague to read. For a tool that claims to protect sources, that is the minimum.',
  },
  {
    question: 'Does it work in the field on a phone?',
    answer:
      'Yes. The iPhone app is free, works with no signal, and unlocks with Face ID. Notes taken offline are simply notes on the device; nothing is queued to a server unless you have turned sync on.',
  },
];

const related = [
  {
    title: 'Duress password',
    href: '/guides/duress-password',
    description: 'A second password that opens a decoy set of notes under coercion.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Lock the app behind Touch ID or Face ID, with auto-lock timers.',
  },
  {
    title: 'Self-destructing notes',
    href: '/guides/self-destructing-notes',
    description: 'Notes that delete themselves when a timer runs out.',
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

export default function ForJournalistsPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='For journalists'
        headline='Notes That Do Not Put a Source at Risk'
        subheadline='Interview notes on your own device, locked with AES-256, with a duress password for the border and no account anywhere.'
        updated='September 2026'
        intro={
          <>
            <p>
              A reporter’s notebook is a list of people who trusted you. Most notes apps put that list on a company’s
              servers, under an account with your name on it, where it can be breached, demanded from the company rather
              than from you, or read by staff. That is a poor arrangement for source material.
            </p>
            <p>
              <a href='/'>Dash</a> is built the other way: notes on the device, no account, encryption on the notes that need
              it. It is a notes app, not a security programme, so this page is also clear about what it does not do.
            </p>
          </>
        }
        sections={[
          {
            id: 'what-it-does',
            heading: 'What Dash actually protects',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No account, no company copy.</strong> With sync off, Dash never contacts a server. There is no
                    provider holding your notes to be asked for them.
                  </li>
                  <li>
                    <strong>AES-256-GCM on any note.</strong> The key comes from your password via PBKDF2-SHA256 at 600,000
                    iterations. A locked note is ciphertext on disk, unreadable to anyone with the device.
                  </li>
                  <li>
                    <strong>A lock on the whole app,</strong> with auto-lock after 1, 5, 15 or 30 minutes and an instant lock
                    on Cmd+Shift+L when someone walks into the room.
                  </li>
                  <li>
                    <strong>A duress password.</strong> A second password opens a decoy set of notes rather than the real
                    ones, for a border crossing or a demand to unlock.
                  </li>
                  <li>
                    <strong>Self-destructing notes</strong> for a number or an address you need for two days and not after.
                  </li>
                  <li>
                    <strong>Open source under MIT,</strong> so the claims above can be checked rather than believed.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'what-it-does-not',
            heading: 'What it does not do',
            body: (
              <>
                <p>
                  Dash is not a secure communications tool. It does not replace Signal for talking to a source, SecureDrop for
                  receiving material, or a hardened operating system for high-risk work. It does not hide that a note exists,
                  only its contents. It cannot help if the device itself is compromised by malware or a keylogger, and it
                  cannot resist someone who can compel you to enter a password.
                </p>
                <p>
                  Legal exposure is a question for a media lawyer in your jurisdiction. Encryption changes who holds the
                  material; it does not change what a court can ask of you.
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
                    <strong>Never put a source’s identity in a note title.</strong> Titles are visible even when the body is
                    locked. Use initials or a codename, with the mapping in a separate locked note.
                  </li>
                  <li>
                    <strong>Lock as you go,</strong> not at the end of the day. An unlocked note is unlocked for as long as
                    you forget.
                  </li>
                  <li>
                    <strong>Set up the duress password before you need it,</strong> and rehearse which notes it shows.
                  </li>
                  <li>
                    <strong>Auto-lock at one minute on a laptop you carry.</strong> The inconvenience is Touch ID.
                  </li>
                  <li>
                    <strong>Back up encrypted,</strong> to a drive you control, so that losing the machine does not lose the
                    reporting.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'field',
            heading: 'In the field',
            body: (
              <>
                <p>
                  The iPhone app is free, works with no signal, and unlocks with Face ID. Notes taken on a train or in a
                  car park are simply files on the phone. If you want them on the desk machine afterwards, Dash Sync is
                  optional and encrypts everything on the device before it leaves, so the relay holds ciphertext it cannot
                  read; the alternative is an encrypted export you carry yourself.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes that protect the people in them. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Protect the notebook, protect the source.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
