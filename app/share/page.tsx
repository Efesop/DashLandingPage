import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Encrypted Note Sharing With a Link';
const DESCRIPTION =
  'Share a note as an encrypted link: the note is encrypted on your device and the key travels in the URL fragment, which browsers never send to a server.';
const PATH = '/share';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'encrypted note sharing',
    'secure note sharing',
    'share encrypted note link',
    'send a private note',
    'encrypted share link',
    'one time note',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How does encrypted sharing work?',
    answer:
      'Dash encrypts the note on your device and builds a link. The key sits in the part of the URL after the # symbol, which browsers never send to a server, so the decryption happens entirely in the recipient’s browser. Anyone with the full link can read the note; anyone who only sees the server side of it cannot.',
  },
  {
    question: 'Can the relay read a shared note?',
    answer:
      'No. If you choose to upload the encrypted blob for a shorter link, the relay stores ciphertext and never receives the key, because the key stays in the URL fragment. You can also skip the upload entirely and put the whole encrypted payload in the link itself.',
  },
  {
    question: 'How long is a shared note stored?',
    answer:
      'Uploaded share blobs are kept for 30 days and then deleted. A link that carries its own payload has no expiry and no server involved at all, so it lives exactly as long as the link does.',
  },
  {
    question: 'Can I password-protect a shared note?',
    answer:
      'Yes, and it is on by default. Dash generates a four-word passphrase with three digits, roughly 38 bits of entropy, or you can set your own. Send the link and the passphrase through different channels for the sensible version of this.',
  },
  {
    question: 'What happens to attachments in a shared note?',
    answer:
      'Attachments are not transmitted; they appear in the shared note as a placeholder naming the file. Images that are shared inline have their EXIF metadata stripped first, so location and camera details do not travel with them.',
  },
];

const related = [
  {
    title: 'Self-destructing notes',
    href: '/guides/self-destructing-notes',
    description: 'Notes that delete themselves when a timer runs out.',
  },
  {
    title: 'Privnote alternatives',
    href: '/privnote-alternatives',
    description: 'Encrypted, self-destructing note links compared.',
  },
  {
    title: 'How Dash encrypts notes',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
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

export default function SharePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Share2'
        badgeText='Encrypted sharing'
        headline='Share a Note Without Handing It to a Server'
        subheadline='The note is encrypted on your device and the key rides in the part of the link a browser never transmits. The recipient needs no account and no app.'
        updated='September 2026'
        intro={
          <>
            <p>
              Sharing is where most private notes apps quietly stop being private. To show a note to someone else, the usual
              approach uploads it somewhere readable, or requires the other person to make an account. Neither is necessary.
            </p>
            <p>
              <a href='/'>Dash</a> encrypts the note first, then puts the key in the URL fragment, the part after the # that
              browsers keep to themselves. The recipient opens the link in any browser and the decryption happens on their
              machine.
            </p>
          </>
        }
        sections={[
          {
            id: 'how-it-works',
            heading: 'How it works',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Encrypt on the device.</strong> Dash compresses the note, strips EXIF metadata from any inline
                    images, and encrypts the payload with a passphrase.
                  </li>
                  <li>
                    <strong>Build the link.</strong> The key goes in the fragment after the #. Browsers never send that part
                    to a server, so it cannot be logged by one.
                  </li>
                  <li>
                    <strong>Choose where the payload lives.</strong> Keep it inside the link itself, so no server is involved
                    at all, or upload the encrypted blob for a shorter link that expires after 30 days.
                  </li>
                  <li>
                    <strong>Send it.</strong> As a link, a QR code for someone in the room, or through the system share sheet.
                    The passphrase should travel separately.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'recipient',
            heading: 'What the recipient sees',
            body: (
              <>
                <p>
                  A read-only page that decrypts in their browser, with no account, no app and no sign-up. Dash users can open
                  it directly in the desktop app instead, through the dash:// link, which is convenient when the note is
                  something they want to keep.
                </p>
              </>
            ),
          },
          {
            id: 'limits',
            heading: 'What it is not',
            body: (
              <>
                <p>
                  A share link is a read-only copy, not collaboration: there is no live editing, and nothing you change
                  afterwards updates a link you already sent. Anyone holding the full link and the passphrase can read the
                  note, so treat both together as the secret. Attachments are not included, only named. And a link that
                  carries its own payload cannot be revoked, because there is no server holding anything to delete.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Encrypted sharing, built in. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Share the note, not the keys to everything.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
