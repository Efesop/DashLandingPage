import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'What Is AES-256 Encryption? How Dash Encrypts Notes';
const DESCRIPTION =
  'What AES-256-GCM and PBKDF2 actually do, why 600,000 iterations matter, and exactly how Dash encrypts a note on your device. In plain language.';
const PATH = '/guides/encryption';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'aes-256 encryption',
    'what is aes-256-gcm',
    'pbkdf2 key derivation',
    'how notes encryption works',
    'zero knowledge encryption',
    'encrypted notes explained',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What is AES-256-GCM encryption?',
    answer:
      'AES is the Advanced Encryption Standard, the cipher most of the internet uses. The 256 is the key length in bits. GCM is the mode of operation, and it authenticates as well as encrypts, so if the ciphertext is altered the app detects it instead of silently decrypting something wrong.',
  },
  {
    question: 'What is PBKDF2 key derivation?',
    answer:
      'A password is not a key: it is too short and too predictable. PBKDF2 stretches it into one by hashing it repeatedly, 600,000 times in Dash, with a unique random salt per note. That makes each guess in a brute-force attack expensive, which is the whole point.',
  },
  {
    question: 'What does zero-knowledge mean here?',
    answer:
      'It means the people running the service cannot read your content. In Dash it is simpler than that by default: with sync off there is no service at all. With sync on, notes are encrypted on your device before upload, so the relay holds ciphertext and never sees the key.',
  },
  {
    question: 'Can I recover a note if I forget the password?',
    answer:
      'No. There is no reset, no backdoor and no recovery key. That is what makes the encryption meaningful: if we could recover it, so could someone else with enough leverage over us. Keep the password in a password manager.',
  },
  {
    question: 'Is AES-256 secure enough?',
    answer:
      'Yes. There is no known practical attack against AES-256, and it is approved for classified material by governments. In real life the weak point is never the cipher; it is a guessable password, a compromised device, or malware watching you type.',
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
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any note, and how the optional sync stays end-to-end encrypted.',
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

export default function EncryptionGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Lock'
        badgeText='Guide'
        headline='What AES-256 Encryption Actually Does'
        subheadline='Every notes app says “encrypted”. Here is what the word covers, what it does not, and precisely how a note is encrypted in Dash.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              “Encrypted” is doing a lot of work in most product pages. It can mean the connection to a server is encrypted,
              that the server’s disk is encrypted, or that the content itself is encrypted with a key only you hold. Those are
              three very different promises, and only the last one keeps a company from reading your notes.
            </p>
            <p>
              This guide explains the pieces, then shows exactly what happens when you lock a note in <a href='/'>Dash</a>.
            </p>
          </>
        }
        sections={[
          {
            id: 'aes',
            heading: 'AES-256-GCM, piece by piece',
            body: (
              <>
                <p>
                  <strong>AES</strong> is a block cipher: it turns a fixed-size chunk of data into ciphertext using a key, and
                  back again. It has been the standard since 2001 and is implemented in hardware on every modern processor,
                  which is why encrypting a note is instant.
                </p>
                <p>
                  <strong>256</strong> is the key size in bits. The number of possible keys is 2 to the power of 256, which is
                  a number with 78 digits. Brute force is not a threat model; it is a thought experiment.
                </p>
                <p>
                  <strong>GCM</strong>, Galois/Counter Mode, is how the cipher is applied to data longer than one block. It
                  also produces an authentication tag. If a single byte of the ciphertext changes, decryption fails loudly
                  rather than returning garbage. That protects you from a whole class of tampering attacks.
                </p>
              </>
            ),
          },
          {
            id: 'pbkdf2',
            heading: 'Why your password is not the key',
            body: (
              <>
                <p>
                  Keys are 256 random bits. Passwords are short, memorable and drawn from a much smaller space. Handing a
                  password straight to a cipher would throw away most of its strength, so a key derivation function stands in
                  between.
                </p>
                <p>
                  Dash uses <code>PBKDF2-SHA256</code> with <strong>600,000 iterations</strong> and a unique random salt for
                  every note. The iterations make each attempt slow: an attacker testing a million candidate passwords pays
                  that cost a million times. The salt means a precomputed table cannot be reused across notes, or across
                  users.
                </p>
              </>
            ),
          },
          {
            id: 'in-dash',
            heading: 'What happens when you lock a note',
            body: (
              <>
                <ol>
                  <li>
                    <strong>A salt is generated</strong> from the platform’s cryptographically secure random number generator,
                    unique to that note.
                  </li>
                  <li>
                    <strong>Your password is stretched</strong> through PBKDF2-SHA256 at 600,000 iterations with that salt,
                    producing a 256-bit key.
                  </li>
                  <li>
                    <strong>The note is encrypted</strong> with AES-256-GCM under that key, producing ciphertext and an
                    authentication tag.
                  </li>
                  <li>
                    <strong>Only the ciphertext, salt and tag are written to disk.</strong> The password and the derived key
                    are never stored and never transmitted.
                  </li>
                  <li>
                    <strong>To open it,</strong> Dash repeats the derivation with your password and the stored salt. Wrong
                    password, wrong key, failed authentication, no plaintext.
                  </li>
                </ol>
                <p>
                  Touch ID and Face ID do not replace this. They release the stored secret from the platform’s secure
                  enclave so the same derivation can run, which is why biometrics are a convenience layer over real
                  encryption rather than a substitute for it.
                </p>
              </>
            ),
          },
          {
            id: 'limits',
            heading: 'What encryption does not protect against',
            body: (
              <>
                <ul>
                  <li>
                    <strong>A weak password.</strong> Six characters stretched 600,000 times is still six characters.
                  </li>
                  <li>
                    <strong>A compromised device.</strong> Malware that reads your screen or keyboard sees the plaintext you
                    see.
                  </li>
                  <li>
                    <strong>An unlocked note.</strong> While it is open, it is open.
                  </li>
                  <li>
                    <strong>Metadata.</strong> A locked note still has a title, a size and timestamps. Do not put the secret
                    in the title.
                  </li>
                  <li>
                    <strong>Coercion.</strong> Encryption does not resist someone who can compel a password. That is what the{' '}
                    <a href='/guides/duress-password'>duress password</a> is for.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'verify',
            heading: 'Do not trust this page',
            body: (
              <>
                <p>
                  Everything above is a claim on a vendor’s website, which is worth very little on its own. Dash is open
                  source under the MIT licence, so the encryption code is on GitHub and can be read by you or anyone you
                  trust. For a security claim, that is the difference between evidence and marketing.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Encryption you can read the source of.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
