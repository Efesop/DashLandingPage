import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Is Apple Notes Secure? Encryption, Locked Notes & iCloud';
const DESCRIPTION =
  'Is Apple Notes secure? What Apple encrypts, what iCloud can read, how locked notes and Advanced Data Protection work, and when to use an encrypted notes app.';
const PATH = '/is-apple-notes-secure';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'is apple notes secure',
    'how secure is apple notes',
    'is apple notes encrypted',
    'are apple notes private',
    'apple notes encryption',
    'apple notes end to end encrypted',
    'apple notes password',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Is Apple Notes end-to-end encrypted?',
    answer:
      'Only in two cases. A note you lock is end-to-end encrypted with a key derived from your password. And if you turn on Advanced Data Protection for iCloud, your whole Notes library becomes end-to-end encrypted. Otherwise notes synced to iCloud are encrypted in transit and on Apple’s servers, but Apple holds the keys.',
  },
  {
    question: 'Can Apple read my notes?',
    answer:
      'With the default settings, Apple can decrypt the notes in your iCloud account, because it holds the keys; its policies say it does so only in limited circumstances, including valid legal requests. Locked notes and, with Advanced Data Protection on, all notes are unreadable to Apple.',
  },
  {
    question: 'Are locked notes in Apple Notes secure?',
    answer:
      'Yes, for the content. Apple derives a key from your password with PBKDF2 and SHA-256 and encrypts the note and its attachments with AES-GCM, so the body is unreadable without the password or Face ID and Touch ID on your device. The title, the note’s existence and its dates are not hidden, and a locked note cannot be shared or searched by content.',
  },
  {
    question: 'Is Apple Notes safe for passwords?',
    answer:
      'A locked note is a reasonable place for the odd sensitive line, but it is not a password manager: no per-item breach checks, no autofill, no sharing controls. Use Apple Passwords or a dedicated manager for credentials, and an encrypted notes app for the notes around them.',
  },
];

const related = [
  {
    title: 'How to lock notes on iPhone and Mac',
    href: '/guides/lock-notes-on-iphone-and-mac',
    description: 'The steps for Apple Notes, and what a locked note does and does not protect.',
  },
  {
    title: 'Notes app with password protection',
    href: '/password-protected-notes',
    description: 'Lock a note, lock the app, and what a lock screen does not do.',
  },
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, no account, optional end-to-end encrypted sync.',
  },
];

const jsonLd = [
  articleJsonLd({
    url: `https://dashnote.io${PATH}`,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-09-08',
  }),
  faqJsonLd(faqs),
];

export default function IsAppleNotesSecurePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='Short answer'
        headline='Is Apple Notes Secure?'
        subheadline='Secure enough for most notes. Private from Apple only for the notes you lock, or for everything if you turn on Advanced Data Protection.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              <strong>Short answer:</strong> Apple Notes is well protected against outsiders. Notes travel to iCloud over an
              encrypted connection and sit on Apple’s servers encrypted with AES-256. What it is not, by default, is private
              from Apple: for an ordinary note, Apple holds the key. Two settings change that. Locking a note makes that note
              end-to-end encrypted, and Advanced Data Protection makes your whole Notes library end-to-end encrypted.
            </p>
            <p>
              The rest of this page is the detail behind that answer, taken from Apple’s own security documentation, and a
              plain view of what Apple Notes cannot do that a dedicated encrypted notes app such as <a href='/'>Dash</a> can.
            </p>
          </>
        }
        sections={[
          {
            id: 'what-is-encrypted',
            heading: 'What Apple Notes encrypts',
            body: (
              <>
                <p>
                  <strong>Locked notes.</strong> When you lock a note, Apple derives a key from your password using PBKDF2 with
                  SHA-256 and encrypts the note and every attachment with AES in Galois/Counter Mode. The password never goes
                  to Apple. On your own devices, Face ID or Touch ID stands in for the password. This is real end-to-end
                  encryption of the note body.
                </p>
                <p>
                  <strong>Everything else.</strong> Unlocked notes are encrypted in transit and at rest in iCloud with keys
                  Apple manages. That protects you from a stolen laptop or an intercepted connection. It does not protect the
                  notes from Apple itself, or from anyone who can compel Apple.
                </p>
              </>
            ),
          },
          {
            id: 'what-apple-can-see',
            heading: 'What Apple and iCloud can see',
            body: (
              <>
                <p>
                  With standard data protection, Apple can decrypt the unlocked notes in your account. Apple’s stated position is
                  that it accesses that data only in limited circumstances, and it publishes transparency reports on the legal
                  requests it receives. Whether that is acceptable depends on what is in the notes.
                </p>
                <p>
                  Notes kept in an “On My Mac” or “On My iPhone” account never sync to iCloud, and so are never on Apple’s
                  servers. Most people have iCloud Notes on, so most notes are.
                </p>
              </>
            ),
          },
          {
            id: 'advanced-data-protection',
            heading: 'Advanced Data Protection changes the answer',
            body: (
              <>
                <p>
                  Advanced Data Protection for iCloud is an opt-in setting that moves the keys for most iCloud categories,
                  Notes included, onto your devices. With it on, Apple cannot read your notes, and neither can anyone who
                  breaches or compels Apple. The trade is responsibility: you must set up a recovery contact or a recovery key,
                  because Apple can no longer reset the account for you. If you keep sensitive notes in Apple Notes and want to
                  stay there, this is the setting to turn on.
                </p>
              </>
            ),
          },
          {
            id: 'what-it-lacks',
            heading: 'What Apple Notes lacks',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No lock on the app.</strong> Anyone who unlocks the Mac or phone sees every unlocked note. There is
                    no app-level password or auto-lock timer.
                  </li>
                  <li>
                    <strong>Locked notes are limited.</strong> They cannot be shared, their content is not searchable, and the
                    title stays visible.
                  </li>
                  <li>
                    <strong>No duress password.</strong> There is no way to open a decoy set of notes if someone demands the
                    device unlocked.
                  </li>
                  <li>
                    <strong>No self-destructing notes.</strong> A note you want gone in an hour has to be deleted by hand.
                  </li>
                  <li>
                    <strong>Account-bound.</strong> Notes live in an Apple Account; there is no account-free mode outside the
                    local “On My Mac” folder, and export is limited to PDF and copy-paste.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'when-to-move',
            heading: 'When to move sensitive notes',
            body: (
              <>
                <p>
                  If your sensitive notes are a handful, lock them in Apple Notes and turn on Advanced Data Protection; that is
                  a sound setup. If sensitive notes are the point, a dedicated encrypted notes app is the better fit. Dash keeps
                  notes on the device with no account, locks any note with AES-256-GCM, locks the whole app behind Touch ID or
                  Face ID with auto-lock, adds a duress password and self-destructing notes, and only syncs, end-to-end
                  encrypted, if you ask it to. It is open source, so the claims can be checked. See{' '}
                  <a href='/password-protected-notes'>notes app with password protection</a> for how it compares.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Notes that are private from everyone, Apple included.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
