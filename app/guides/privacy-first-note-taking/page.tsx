import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Privacy-First Note Taking Explained';
const DESCRIPTION =
  'Privacy-first means the app cannot read your notes, not that it promises not to. What to check in any notes app, and what Dash actually stores about you.';
const PATH = '/guides/privacy-first-note-taking';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'privacy first note taking',
    'private note taking',
    'zero knowledge notes',
    'notes app no tracking',
    'notes app privacy policy',
    'privacy notes app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What does privacy-first mean?',
    answer:
      'That privacy is a property of how the app is built rather than a promise in its policy. A privacy-first notes app cannot read your notes, because they never reach it in readable form. A privacy-focused one usually can, and undertakes not to.',
  },
  {
    question: 'How is that different from privacy-focused?',
    answer:
      'Policies bind a company as it exists today. They can change with new management, new investors or a legal order. Architecture does not: if the provider never holds the key, there is nothing to change its mind about.',
  },
  {
    question: 'Does Dash collect analytics or telemetry?',
    answer:
      'No. There is no analytics SDK, no usage reporting and no crash telemetry carrying your content. With sync off, the app makes no network requests for your notes at all.',
  },
  {
    question: 'What data does Dash store about me?',
    answer:
      'Without sync: nothing, because there is no account and no server. With Dash Sync on: an email address if you signed in for billing, the subscription status tied to it, and encrypted blobs the relay cannot read. Not the notes, not the titles, not the keys.',
  },
  {
    question: 'Does this help with GDPR or similar rules?',
    answer:
      'Usually, yes, in the simplest possible way: an app that does not collect personal data has very little to handle, disclose or delete. If you are deploying Dash in an organisation with formal obligations, treat that as a question for your own compliance people rather than a claim we make on your behalf.',
  },
];

const related = [
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
  },
  {
    title: 'What is AES-256 encryption?',
    href: '/guides/encryption',
    description: 'The cipher, the key derivation and the salts, in plain language.',
  },
  {
    title: 'Offline-first apps',
    href: '/guides/offline-first',
    description: 'Why an app that works without a server is a different kind of software.',
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

export default function PrivacyFirstGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Guide'
        headline='Privacy-First, and How to Check the Claim'
        subheadline='Every notes app says it respects your privacy. The useful question is whether it could read your notes if it wanted to.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Privacy has become a marketing category, which makes the word almost useless on a product page. Nearly every
              notes app claims it. Very few are built so that the claim would survive a change of ownership, a new business
              model, or a court order.
            </p>
            <p>
              This guide is a short test you can apply to any notes app, including <a href='/'>Dash</a>, and an honest account
              of what Dash stores.
            </p>
          </>
        }
        sections={[
          {
            id: 'policy-vs-architecture',
            heading: 'Policy versus architecture',
            body: (
              <>
                <p>
                  A privacy policy is a promise about behaviour. It is worth something, and it binds the company that wrote
                  it, for as long as that company exists in its present form. Standard Notes, Evernote and Notion all have
                  reasonable policies.
                </p>
                <p>
                  Architecture is a statement about capability. If notes are encrypted on your device with a key the provider
                  never sees, no policy change, acquisition or subpoena makes the content readable to them, because there is
                  nothing to hand over. That is the difference between “we will not” and “we cannot”.
                </p>
              </>
            ),
          },
          {
            id: 'the-test',
            heading: 'Five questions to ask any notes app',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Does it work with no account?</strong> An account is a permanent record of you attached to the
                    content.
                  </li>
                  <li>
                    <strong>Does it work with the network off?</strong> If not, your notes must be on someone’s server for the
                    app to function.
                  </li>
                  <li>
                    <strong>Who holds the keys?</strong> “Encrypted at rest” usually means the provider does. Look for
                    end-to-end, or for local-only.
                  </li>
                  <li>
                    <strong>Can I read the code?</strong> For a security claim, an unverifiable assertion is just advertising.
                  </li>
                  <li>
                    <strong>Can I leave?</strong> Export in a standard format, without a subscription, or the privacy is
                    conditional on continued payment.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'dash-answers',
            heading: 'How Dash answers them',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No account.</strong> Install it and write. An email is involved only if you buy the Mac app or
                    subscribe to sync, and it is used for billing and entitlement, not attached to note content.
                  </li>
                  <li>
                    <strong>Works offline.</strong> Notes are files on your device; nothing is uploaded unless you turn sync
                    on.
                  </li>
                  <li>
                    <strong>You hold the keys.</strong> Locked notes use AES-256-GCM with keys derived on the device. With
                    sync on, the vault key never leaves your devices and the relay stores ciphertext.
                  </li>
                  <li>
                    <strong>Open source under MIT.</strong> The whole app is on GitHub.
                  </li>
                  <li>
                    <strong>Export any time</strong> to Markdown, PDF, DOCX or an encrypted backup, subscription or not.
                  </li>
                  <li>
                    <strong>No telemetry.</strong> No analytics SDK, no usage reporting, no crash data carrying your content.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'honesty',
            heading: 'Where Dash is not magic',
            body: (
              <>
                <p>
                  Local storage means backups are your job. A device that is compromised by malware exposes what you can see,
                  encryption or not. Metadata such as note titles and timestamps is not hidden by locking a note. And if you
                  choose to use sync, an email address and a subscription record exist, because payment requires an identity
                  even when the content does not.
                </p>
                <p>
                  Any page claiming a notes app solves all of that is selling something. The reasonable goal is to remove the
                  company from the trust equation, which is achievable, rather than to remove every risk, which is not.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Cannot read your notes, rather than will not.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
