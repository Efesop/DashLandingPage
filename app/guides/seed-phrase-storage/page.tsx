import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Seed Phrase Storage: How to Store a Seed Phrase Securely';
const DESCRIPTION =
  'How to store a crypto seed phrase safely: why metal beats paper, why no hot device is the primary place for it, and what a notes app is genuinely good for.';
const PATH = '/guides/seed-phrase-storage';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'seed phrase storage',
    'crypto seed phrase storage',
    'how to store seed phrase',
    'best way to store seed phrase',
    'seed phrase backup',
    'where to store seed phrase',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Is it safe to store a seed phrase digitally?',
    answer:
      'Not as your primary backup. Any device that connects to the internet can be compromised by malware that reads the screen, the clipboard or the keyboard, and application-level encryption does not survive that. The primary copy of a recovery phrase should be offline, on metal, in a physically secure place.',
  },
  {
    question: 'What is BIP-39 validation?',
    answer:
      'BIP-39 is the standard that defines the 2,048-word list recovery phrases are drawn from. Dash’s seed phrase block checks each word against that list and marks it valid or invalid, which catches transcription errors: a misread word on a metal plate is a common and expensive mistake.',
  },
  {
    question: 'Can I store both 12-word and 24-word phrases?',
    answer:
      'Yes. The seed phrase block uses a numbered grid sized for either length, so the position of each word is unambiguous when you check it against your backup.',
  },
  {
    question: 'How should I protect a seed phrase note in Dash?',
    answer:
      'Lock it, so it is encrypted with AES-256-GCM rather than sitting readable. Keep app lock on with a short auto-lock timer. Consider a passphrase (sometimes called the 25th word) kept only in your head. And treat the note as a working aid for verification, not as the backup you would rely on if the house burned down.',
  },
  {
    question: 'Can I export a seed phrase from Dash?',
    answer:
      'The note exports like any other, including inside an encrypted .dashpack backup. Think carefully before you do: every export is another copy, and copies are the main way recovery phrases leak.',
  },
];

const related = [
  {
    title: 'Notes app for bitcoiners',
    href: '/for-bitcoiners',
    description: 'No account, no telemetry, and an honest line on what not to store.',
  },
  {
    title: 'What is AES-256 encryption?',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
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
    datePublished: '2025-11-20',
    dateModified: '2026-09-08',
  }),
  faqJsonLd(faqs),
];

export default function SeedPhraseStorageGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='KeyRound'
        badgeText='Guide'
        headline='How to Store a Seed Phrase Securely'
        subheadline='Twelve or twenty-four words that are worth everything in the wallet. Here is where they should live, and where they should not.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              A recovery phrase is not a password. It is the wallet. Anyone who reads it can move the funds, from anywhere,
              with no further step, and there is no reset and no support line. That asymmetry should drive every decision
              about where the words are kept.
            </p>
            <p>
              We make a notes app, and the honest headline is that your seed phrase should not primarily live in one, ours
              included. Here is the reasoning, and what a notes app is genuinely useful for around it.
            </p>
          </>
        }
        sections={[
          {
            id: 'primary-backup',
            heading: 'Where the phrase should actually live',
            body: (
              <>
                <p>
                  <strong>On metal, offline, in a physically secure place.</strong> Stamped or engraved steel survives fire and
                  flood in a way paper does not, and it cannot be read remotely by anything. Keep a second copy in a second
                  location, because the realistic failure is not a hacker, it is a house fire, a flood, or a move.
                </p>
                <p>
                  <strong>Paper is acceptable as a stopgap</strong> and much better than nothing, but it fails in exactly the
                  situations backups exist for. If paper is what you have today, protect it from water and put a metal plate
                  on the list.
                </p>
                <p>
                  <strong>Never in a photo, a password manager note, an email to yourself, or cloud storage.</strong> Those are
                  the four ways most phrases leak, and all of them turn a physical secret into a networked one.
                </p>
              </>
            ),
          },
          {
            id: 'why-not-a-device',
            heading: 'Why not a computer or a phone',
            body: (
              <>
                <p>
                  A device that goes online has an enormous attack surface: the operating system, the browser, every extension
                  and app, and whatever you installed at 1am last year. Malware that reads the clipboard or takes screenshots
                  is common and cheap, and it operates while you are logged in, which is exactly when your encrypted note is
                  decrypted and on screen.
                </p>
                <p>
                  Encryption at the application level does not help against that. It protects the file at rest from someone
                  holding the disk. It cannot protect plaintext from software running as you, on your machine, at the moment
                  you look at it.
                </p>
              </>
            ),
          },
          {
            id: 'what-dash-is-for',
            heading: 'What a notes app is genuinely good for',
            body: (
              <>
                <p>Everything around the phrase, which is more than people expect and is usually scattered:</p>
                <ul>
                  <li>
                    <strong>Verification.</strong> Dash’s seed phrase block lays the words out in a numbered grid and validates
                    each against the BIP-39 wordlist, so a transcription error on your metal backup shows up as a red mark
                    rather than as a failed recovery years later.
                  </li>
                  <li>
                    <strong>Wallet inventory:</strong> which device holds which wallet, firmware versions, when each was last
                    checked.
                  </li>
                  <li>
                    <strong>Derivation paths and address types,</strong> without which recovery in a different wallet becomes
                    guesswork.
                  </li>
                  <li>
                    <strong>Passphrase hints,</strong> never the passphrase itself.
                  </li>
                  <li>
                    <strong>An inheritance procedure:</strong> the ordered steps someone you trust would need to follow.
                  </li>
                </ul>
                <p>
                  If you do use the seed phrase block to check a backup, lock the note, keep app lock on with a short timer,
                  and treat it as a working aid rather than the backup itself.
                </p>
              </>
            ),
          },
          {
            id: 'checklist',
            heading: 'A short checklist',
            body: (
              <>
                <ol>
                  <li>Metal backup, made carefully, checked word by word against the wallet.</li>
                  <li>A second copy in a second physical location.</li>
                  <li>No photograph of it at any stage, including while you were making it.</li>
                  <li>A passphrase you keep only in memory, if your threat model calls for one.</li>
                  <li>A test recovery on a spare wallet, because an unverified backup is a hope, not a backup.</li>
                  <li>Notes covering wallet inventory, derivation paths and the recovery procedure, locked.</li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Keep the words offline. Keep the rest encrypted.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
