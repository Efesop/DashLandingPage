import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Notes App With Password Protection for Mac & iPhone';
const DESCRIPTION =
  'Dash is a notes app with password protection that actually encrypts: lock any note or the whole app with AES-256, unlock with Face ID or Touch ID, auto-lock on a timer, and add a decoy password for coercion.';
const PATH = '/password-protected-notes';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['notes app with password', 'password protected notes app', 'password protected notes', 'lock notes app', 'locked notes app', 'notes app with lock', 'secret notes app', 'hidden notes app', 'notes app with face id'],
});

const faqs: FAQ[] = [
  {
    question: 'What is the difference between a locked note and an encrypted note?',
    answer:
      'A lock screen hides a note behind a password but may leave the text readable on disk. An encrypted note is scrambled with a key derived from your password, so the file is unreadable without it. Dash does the second: locked notes are encrypted with AES-256-GCM and a key derived with PBKDF2 (600,000 iterations), so even someone with your device cannot read them.',
  },
  {
    question: 'Can I lock just one note, or the whole app?',
    answer:
      'Both. Lock individual notes with their own password, or turn on App Lock to require a master password (or Face ID / Touch ID) for everything, with an auto-lock timer of 1, 5, 15 or 30 minutes, a custom interval, or never.',
  },
  {
    question: 'Does it work with Face ID and Touch ID?',
    answer:
      'Yes. On Mac, unlock the app or a locked note with Touch ID; on iPhone, with Face ID or Touch ID. A password remains as the fallback, and you can always turn biometrics off.',
  },
  {
    question: 'What happens if I forget the password to a locked note?',
    answer:
      'The note cannot be recovered. There is no backdoor and no reset, because the password is never stored or sent anywhere. That is what makes the protection real. Keep the password in a password manager if you are worried about forgetting it.',
  },
  {
    question: 'Is a notes app with a password enough for sensitive information?',
    answer:
      'For most people, yes, if the app encrypts rather than just hides. For high-risk situations Dash adds a duress password: a second password that opens a decoy set of notes while your real data stays encrypted on disk, so you can unlock the app under pressure without revealing anything.',
  },
  {
    question: 'Can I password-protect notes in Apple Notes instead?',
    answer:
      'Yes, Apple Notes can lock individual notes with your device passcode or a custom password, and locked notes are end-to-end encrypted. Dash goes further with whole-app lock, auto-lock timers, a duress password, self-destructing notes and encryption for every note by default when App Lock is on. See our guide on how to lock notes on iPhone and Mac for the steps.',
  },
];

const related = [
  { title: 'How to lock notes on iPhone and Mac', href: '/guides/lock-notes-on-iphone-and-mac', description: 'Step by step for Apple Notes, and what locking actually protects.' },
  { title: 'App lock explained', href: '/guides/app-lock', description: 'Why Dash’s app lock encrypts instead of just hiding.' },
  { title: 'Duress password', href: '/guides/duress-password', description: 'A second password that opens a decoy under coercion.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  faqJsonLd(faqs),
];

export default function PasswordProtectedNotesPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="Lock"
        badgeText="Password protection"
        headline="A Notes App With Password Protection That Actually Encrypts"
        subheadline="Most notes apps with a password only hide the note. Dash encrypts it with AES-256, unlocks with Face ID or Touch ID, locks itself when you walk away, and can show a decoy if someone makes you open it."
        updated="September 2026"
        intro={
          <>
            <p>
              &ldquo;Password protected&rdquo; is doing a lot of work in app store listings. In many notes apps it means a lock
              screen in front of a plain-text file: convenient, and useless the moment someone opens the file another way. If a
              note is worth a password, it is worth encrypting.
            </p>
            <h3>What Dash locks, and how</h3>
            <ul>
              <li><strong>Lock a single note.</strong> Give any note its own password. The content is encrypted with AES-256-GCM using a key derived from that password with PBKDF2-SHA256 (600,000 iterations). Nothing about the note is readable on disk.</li>
              <li><strong>Lock the whole app.</strong> Turn on App Lock and every note is protected behind a master password. Dash locks itself after 1, 5, 15 or 30 minutes of inactivity, a custom interval, or on demand with Cmd+Shift+L on Mac.</li>
              <li><strong>Unlock with Face ID or Touch ID.</strong> Biometrics on iPhone and Mac unlock the app or an individual note; your password stays as the fallback.</li>
              <li><strong>Add a duress password.</strong> A second password that opens a decoy set of notes while your real data stays encrypted, for the rare situation where you are forced to unlock.</li>
              <li><strong>Let notes delete themselves.</strong> A self-destruct timer removes a note after an hour, a day, a week or a month, with a countdown so you know when.</li>
            </ul>
            <p>
              All of it works offline, with no account. Dash is open source, so the encryption code is there for anyone to read.
            </p>
          </>
        }
        inlineCTA="Lock notes with a password, Face ID or Touch ID — get Dash"
        sections={[
          {
            heading: 'How to lock a note in Dash',
            body: (
              <>
                <ol>
                  <li>Open the note and click the lock icon in the title bar on Mac, or swipe the note right in the list on iPhone.</li>
                  <li>Set a password for the note. It is used only to derive the encryption key and is never stored.</li>
                  <li>Choose whether Face ID or Touch ID may unlock it.</li>
                  <li>To protect everything at once, open Settings, choose App lock, set a master password and an auto-lock timer.</li>
                </ol>
                <p>
                  Locked notes show a lock icon in the sidebar and in search results, and their contents are excluded from
                  version history so no unencrypted snapshot is ever kept.
                </p>
              </>
            ),
          },
          {
            heading: 'Password-protected notes on iPhone',
            body: (
              <>
                <p>
                  The Dash iPhone app is free on the App Store. Notes lock and unlock with Face ID, the app can lock itself
                  when you switch away, and the same encrypted notes stay in step with your Mac if you turn on Dash Sync, which
                  encrypts everything on the device before it is uploaded.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Password protection that means something"
        ctaSubheadline="AES-256 encryption, Face ID and Touch ID, auto-lock and a duress password. $14.99 one-time on Mac, free on iPhone."
      />
    </>
  );
}
