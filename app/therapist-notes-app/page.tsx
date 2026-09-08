import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Therapist Notes App: Private Session Notes on Mac & iPhone';
const DESCRIPTION =
  'A therapist notes app for private session notes: encrypted on your Mac or iPhone, Face ID lock, no account, no vendor server. Not an EHR or a HIPAA service.';
const PATH = '/therapist-notes-app';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'therapist notes app',
    'note taking app for therapists',
    'private therapy notes',
    'psychotherapy notes app',
    'process notes app',
    'hipaa compliant notes app',
    'encrypted notes for counselors',
  ],
});

const HIPAA_ANSWER =
  'Dash is a private notebook, not an electronic health record. Dash Notes is not a HIPAA business associate and does not sign Business Associate Agreements. Whether it suits any clinical record depends on your licensing board, your jurisdiction and your own risk assessment. Keep the records your regulator requires in a system built for that, and use Dash for the notes you want to keep to yourself.';

const faqs: FAQ[] = [
  {
    question: 'Is Dash HIPAA compliant?',
    answer: HIPAA_ANSWER,
  },
  {
    question: 'Can I keep process notes in Dash?',
    answer:
      'Many therapists keep private process notes apart from the clinical record. Whether that is allowed, and how those notes must be stored, depends on your jurisdiction and your licensing board. Dash gives you the mechanics: notes that stay on your device, a password lock on any note, a lock on the whole app, and a duress password. The policy is yours to set with your board’s guidance.',
  },
  {
    question: 'What happens if I lose the device?',
    answer:
      'A note locked with a password stays unreadable without it, so a lost Mac or iPhone does not expose it. The notes themselves are only as safe as your backup: export encrypted .dashpack files to storage you control, or turn on Dash Sync, which keeps an encrypted copy in step across your own devices. Without either, notes that existed only on the lost device are gone.',
  },
  {
    question: 'Can someone holding my Mac read my notes?',
    answer:
      'Not while the app or the note is locked. Lock the whole app with a master password and Touch ID, set it to lock itself after 1, 5, 15 or 30 minutes, or lock it instantly with Cmd+Shift+L. Locked notes are encrypted with AES-256-GCM and only open with their password. A duress password opens a decoy set of notes instead of the real ones.',
  },
];

const related = [
  {
    title: 'Notes app with password protection',
    href: '/password-protected-notes',
    description: 'Lock a note, lock the app, and what a lock screen does not do.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Real encryption behind Touch ID and Face ID, with auto-lock timers.',
  },
  {
    title: 'Duress password',
    href: '/guides/duress-password',
    description: 'A second password that opens a decoy set of notes.',
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

export default function TherapistNotesAppPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='For therapists'
        headline='A Therapist Notes App That Keeps Session Notes on Your Device'
        subheadline='Private notes that never reach a vendor’s server. Lock any note, lock the app, and keep the clinical record where it belongs.'
        updated='September 2026'
        intro={
          <>
            <p>
              Session notes are the most sensitive writing most therapists do, and much of it ends up in whichever app was
              nearest: Apple Notes, a Google Doc, a Notion page, the practice’s record system. Each of those is fine for some
              things. None of them is a private notebook. A therapist notes app should do one thing before anything else: keep
              what you write about a client on your own device, readable by you and nobody else.
            </p>
            <p>
              This page is about that narrower job. It covers what to look for, where notes go in the popular apps, how{' '}
              <a href='/'>Dash</a> keeps them on the device, and, in plain terms, what Dash is not: it is not an electronic
              health record and not a HIPAA service. We build Dash, so read the rest with that in mind.
            </p>
          </>
        }
        sections={[
          {
            id: 'what-you-need',
            heading: 'What a therapist needs from a notes app',
            body: (
              <>
                <p>The list is short, and most consumer apps fail the first item.</p>
                <ul>
                  <li>
                    <strong>Notes stay on the device.</strong> Not “encrypted in transit”, not “encrypted at rest on our
                    servers”. On the device, so there is no copy for anyone else to hold.
                  </li>
                  <li>
                    <strong>No account.</strong> An account is a record of you, your email and your usage that outlives the
                    app. A private notebook should not need one.
                  </li>
                  <li>
                    <strong>A lock on each note and on the whole app,</strong> opened with a fingerprint or your face, that
                    locks itself again when you step away from the desk.
                  </li>
                  <li>
                    <strong>A way to keep quick process notes apart from the formal record,</strong> so the two never blur.
                  </li>
                  <li>
                    <strong>Export you control.</strong> Plain files or an encrypted backup you can move without asking a
                    vendor.
                  </li>
                  <li>
                    <strong>Nothing trained on your text.</strong> If an app offers AI, it should run on your machine or not at
                    all.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'where-notes-go',
            heading: 'Where session notes go in most apps',
            body: (
              <>
                <p>
                  <strong>Apple Notes</strong> syncs to iCloud. A note you lock is end-to-end encrypted; everything else is
                  readable by Apple unless you turn on Advanced Data Protection for the whole account. Most people never do.
                </p>
                <p>
                  <strong>Google Docs and Google Keep</strong> live on Google’s servers, tied to a Google account. They are
                  built for sharing, which is the opposite of what a session note needs.
                </p>
                <p>
                  <strong>Notion</strong> stores every page on Notion’s servers and does not offer end-to-end encryption.
                  Under its policies the company can access content, and its AI features work by reading it.
                </p>
                <p>
                  <strong>Your record system</strong> (an EHR or practice-management platform) is built for the clinical
                  record: audit trails, retention, and, in the United States, a Business Associate Agreement. That is where the
                  required record belongs. It is also a poor place for a half-formed thought between sessions, which is why so
                  many of those thoughts end up in the apps above.
                </p>
              </>
            ),
          },
          {
            id: 'how-dash-keeps-them',
            heading: 'How Dash keeps them on the device',
            body: (
              <>
                <p>
                  Dash is offline by default and has no account to create. Open it and write; the note is a file on your Mac
                  or iPhone. Nothing leaves the device unless you decide it should.
                </p>
                <ul>
                  <li>
                    <strong>Lock any note.</strong> A locked note is encrypted with AES-256-GCM, with the key derived from your
                    password by PBKDF2-SHA256 at 600,000 iterations. Open it with Touch ID on the Mac or Face ID on iPhone.
                  </li>
                  <li>
                    <strong>Lock the whole app.</strong> Set a master password, let Dash lock itself after 1, 5, 15 or 30
                    minutes, or lock it instantly with Cmd+Shift+L when someone walks in.
                  </li>
                  <li>
                    <strong>Duress password.</strong> A second password that opens a decoy set of notes rather than the real
                    ones, for the day a device is demanded rather than lost.
                  </li>
                  <li>
                    <strong>Self-destructing notes</strong> for the reminder you only need until the next session. Set a timer;
                    the note deletes itself when it runs out.
                  </li>
                  <li>
                    <strong>Open source.</strong> The whole app is published under the MIT licence, so the encryption is
                    auditable rather than promised.
                  </li>
                  <li>
                    <strong>Sync only if you ask.</strong> Dash Sync is an optional subscription. When it is on, every change is
                    encrypted on your device before upload, and the relay stores ciphertext it cannot read. When it is off, Dash
                    does not talk to a server at all.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'not-an-ehr',
            heading: 'Dash is not an EHR or a HIPAA service',
            body: (
              <>
                <p>{HIPAA_ANSWER}</p>
                <p>
                  In practice that means three things. Keep the record your regulator requires in the system built for it.
                  Use Dash for what you keep to yourself: reflections between sessions, supervision preparation, reminders,
                  reading notes. And check your board’s rules on where process notes may live before you move anything.
                </p>
              </>
            ),
          },
          {
            id: 'setup',
            heading: 'A working setup',
            body: (
              <>
                <ul>
                  <li>
                    <strong>One folder per client, named with initials or a code,</strong> never a full name in a folder or
                    note title. Titles show in the sidebar; the body can be locked.
                  </li>
                  <li>
                    <strong>Tags for themes</strong> (supervision, homework, referrals) so you can pull across clients without
                    opening each folder.
                  </li>
                  <li>
                    <strong>Lock anything identifying.</strong> Session notes get a password; a to-do list does not need one.
                  </li>
                  <li>
                    <strong>Auto-lock at 5 minutes on the office Mac,</strong> instant lock before you leave the room, Face ID
                    on the phone.
                  </li>
                  <li>
                    <strong>An encrypted backup every week.</strong> Export a .dashpack file to a drive you control. It is
                    encrypted with a password of your choosing and imports back into any Dash.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'platforms',
            heading: 'Mac and iPhone, with optional sync',
            body: (
              <>
                <p>
                  The Mac app is $14.99 once. The iPhone app is free on the App Store, and the web app is free too. The two
                  stay in step with Dash Sync, an optional subscription at $4.99 a month or $47.99 a year with a seven-day
                  trial; devices pair with a QR code and a short code, and the vault key never leaves them. Without sync, move
                  notes between devices with an encrypted .dashpack export.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes that stay in the room. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your session notes. Your device.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
