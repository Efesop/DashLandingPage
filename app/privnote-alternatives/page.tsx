import type { Metadata } from 'next';
import ArticleLayout, { type ArticleApp } from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, itemListJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Privnote Alternatives: Self-Destructing, Encrypted Notes (2026)';
const DESCRIPTION =
  'The best Privnote alternatives in 2026 for sending a note that destroys itself: Dash, PrivateBin, Bitwarden Send, One-Time Secret and Yopass, compared on encryption, expiry and whether the service can read your note.';
const PATH = '/privnote-alternatives';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['privnote alternative', 'privnote alternatives', 'self destructing note', 'one time note', 'disappearing note', 'self destructing message', 'encrypted note link', 'burn after reading note'],
});

const apps: ArticleApp[] = [
  {
    name: 'Dash',
    tagline:
      'Write the note in a real notes app, then share it as an end-to-end encrypted link, optionally with a password, that expires in 30 days. Or set the note itself to self-destruct on a timer.',
    bestFor: 'Sharing a note you also want to keep, encrypted, for yourself',
    price: '$14.99 one-time on Mac; free on iPhone and the web',
    privacy: 'Encrypted on your device; the relay sees only ciphertext',
    pros: ['Key travels in the link fragment, never sent to the server', 'Optional password and QR code for in-person handoff', 'Self-destructing notes with a countdown: 1 hour to 30 days'],
    cons: ['Not a one-click web form; it is a notes app', 'Links expire after 30 days rather than on first read', 'Recipient needs a browser, not the app'],
    isDash: true,
  },
  {
    name: 'PrivateBin',
    tagline: 'Open-source, zero-knowledge pastebin. Notes are encrypted in the browser and can burn after reading.',
    bestFor: 'A free Privnote-style form you can self-host',
    price: 'Free and open source',
    privacy: 'Zero-knowledge; server stores ciphertext',
    pros: ['Burn after reading', 'Self-hostable', 'Password option'],
    cons: ['You must trust whichever instance you use', 'Plain interface', 'No app; browser only'],
  },
  {
    name: 'Bitwarden Send',
    tagline: 'Send text or files with an expiry, a view limit and a password, from inside the Bitwarden password manager.',
    bestFor: 'People who already use Bitwarden',
    price: 'Free for text; files need a paid plan',
    privacy: 'End-to-end encrypted',
    pros: ['Max views and expiry dates', 'Password protection', 'Trusted, audited vendor'],
    cons: ['Requires a Bitwarden account', 'Files are a paid feature', 'Overkill for one quick note'],
  },
  {
    name: 'One-Time Secret',
    tagline: 'The classic: paste a secret, get a link that works once.',
    bestFor: 'Sending a single password or key',
    price: 'Free; paid plans for extras',
    privacy: 'Encrypted at rest; open source and self-hostable',
    pros: ['Truly one-time links', 'Optional passphrase', 'Open source'],
    cons: ['Short character limit on the free tier', 'Server-side encryption, not zero-knowledge by default', 'No formatting'],
  },
  {
    name: 'Yopass',
    tagline: 'Open-source secret sharing with client-side encryption and one-time or timed expiry.',
    bestFor: 'Developers who want something simple to self-host',
    price: 'Free and open source',
    privacy: 'Client-side encrypted',
    pros: ['Encryption happens in the browser', 'One-time or time-based expiry', 'Easy to self-host'],
    cons: ['Bare-bones', 'No password option on some setups', 'Text only'],
  },
];

const faqs: FAQ[] = [
  {
    question: 'What is Privnote and why look for an alternative?',
    answer:
      'Privnote is a free website that turns a note into a link that self-destructs after it is read. People look for alternatives because they want client-side encryption they can verify, a password on the link, a longer or timed expiry, to keep a copy for themselves, or simply an open-source tool they can self-host.',
  },
  {
    question: 'Which Privnote alternative is the most secure?',
    answer:
      'Tools that encrypt in your browser or app before anything is uploaded, and that keep the key out of the server’s hands, are the strongest: Dash, PrivateBin, Bitwarden Send and Yopass all work this way. Dash puts the key in the URL fragment, which browsers never send to the server, and lets you add a separate password.',
  },
  {
    question: 'Can I make a note that deletes itself on my own device?',
    answer:
      'Yes. Dash has self-destructing notes: set a note to delete after one hour, twelve hours, a day, a week, a month or a custom time, and a countdown badge shows how long is left. It is useful for one-time codes, temporary passwords and anything you do not want lingering.',
  },
  {
    question: 'Do these services let me add a password to the note?',
    answer:
      'Dash, PrivateBin, Bitwarden Send and One-Time Secret all support an extra password or passphrase, so you can send the link through one channel and the password through another.',
  },
  {
    question: 'Are burn-after-reading notes actually gone?',
    answer:
      'Once the encrypted blob is deleted from the server, nobody can recover it, but anyone who opened the note could have copied or screenshotted it first. Treat self-destructing notes as a way to limit exposure, not as a guarantee that a recipient cannot keep what they saw.',
  },
];

const related = [
  { title: 'Self-destructing notes', href: '/guides/self-destructing-notes', description: 'How timed deletion works in Dash and when to use it.' },
  { title: 'Encrypted note sharing', href: '/share', description: 'How Dash share links keep the key out of the server’s hands.' },
  { title: 'Encrypted notes app', href: '/encrypted-notes', description: 'AES-256 locking for the notes you keep.' },
];

const jsonLd = [
  articleJsonLd({ url: `https://dashnote.io${PATH}`, headline: TITLE, description: DESCRIPTION, datePublished: '2026-09-08' }),
  itemListJsonLd('Privnote alternatives', apps.map((a) => a.name)),
  faqJsonLd(faqs),
];

export default function PrivnoteAlternativesPage() {
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <ArticleLayout
        badgeIcon="Flame"
        badgeText="Self-destructing notes"
        headline="Privnote Alternatives for Notes That Destroy Themselves"
        subheadline="Privnote made burn-after-reading links famous. These five tools do the same job with encryption you can check, passwords you can add, and expiry you control."
        updated="September 2026"
        intro={
          <>
            <p>
              A self-destructing note solves a specific problem: you need to hand someone a password, a door code or a
              sentence you would rather not leave sitting in a chat log. Privnote does that with one text box. The
              alternatives below add the things Privnote leaves out: encryption that happens on your device, a password on the
              link, a timer instead of a single view, and, in Dash’s case, a copy that stays encrypted in your own notes.
            </p>
            <p>
              We make <strong>Dash</strong>, so it is listed first. It is also the odd one out: a full notes app rather than a
              web form. If you only ever need to send one secret, PrivateBin or Yopass will feel more direct.
            </p>
          </>
        }
        apps={apps}
        appsHeading="The best Privnote alternatives in 2026"
        inlineCTA="Encrypted share links and self-destructing notes — try Dash"
        sections={[
          {
            heading: 'How Dash share links work',
            body: (
              <>
                <p>
                  The note is compressed and encrypted on your device with AES-256-GCM. For short notes the ciphertext rides
                  inside the link itself, after the <code>#</code>, which browsers never send to any server. For longer notes the
                  encrypted blob is uploaded to a relay that cannot decrypt it and deletes it after 30 days. You can add a
                  password on top, share it by QR code in person, and the recipient decrypts in their browser with nothing to
                  install.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline="Send it encrypted. Keep it encrypted."
        ctaSubheadline="Dash is $14.99 one-time on Mac and free on iPhone. Share links and self-destructing notes are built in."
      />
    </>
  );
}
