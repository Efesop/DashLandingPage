import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Is Notion Private? What Notion Can See in Your Notes';
const DESCRIPTION =
  'Is Notion private? Notion encrypts notes in transit and at rest but not end to end, so Notion holds the keys. What that means for sensitive notes.';
const PATH = '/is-notion-private';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'is notion private',
    'is notion encrypted',
    'is notion secure',
    'notion end to end encryption',
    'can notion see my notes',
    'notion privacy',
    'does notion train ai on my data',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Is Notion end-to-end encrypted?',
    answer:
      'No. Notion encrypts data in transit with TLS and at rest with AES-256 on its servers, and it holds the keys. End-to-end encryption, where only you could decrypt a page, is not offered on any plan.',
  },
  {
    question: 'Can Notion staff read my pages?',
    answer:
      'Technically yes, because Notion holds the encryption keys. Its policy is that employees access customer data only to troubleshoot problems or recover content on your behalf. That is a policy, not a technical barrier.',
  },
  {
    question: 'Does Notion train AI on my notes?',
    answer:
      'By default, no. Notion states that neither it nor its AI subprocessors use customer data to train models. Notion AI features send your content to models hosted by Notion and by providers such as Anthropic and OpenAI, with retention of 30 days or less on non-Enterprise plans and zero retention on Enterprise.',
  },
  {
    question: 'Can I password-protect a Notion page?',
    answer:
      'Not in Notion itself. Access is controlled by workspace and page sharing permissions, not by a password or a lock on the page. Anyone who can open your workspace can open the page.',
  },
];

const related = [
  {
    title: 'Notion alternatives',
    href: '/notion-alternatives',
    description: 'Eight apps that keep your notes private, compared.',
  },
  {
    title: 'Dash vs Notion',
    href: '/vs-notion',
    description: 'Feature by feature: privacy, offline use, pricing.',
  },
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
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

export default function IsNotionPrivatePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Short answer'
        headline='Is Notion Private?'
        subheadline='Private from strangers, not from Notion. Your pages are encrypted on Notion’s servers with keys Notion holds, and there is no end-to-end option.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              <strong>Short answer:</strong> Notion is secure in the ordinary sense. Data moves over TLS and sits on Amazon Web
              Services encrypted with AES-256. It is not private in the stronger sense: Notion holds the keys to every page,
              so the company can read your content, and there is no end-to-end encryption on any plan. Notion’s policy limits
              employee access to troubleshooting and recovery, and its AI features do not train on your data by default.
              Those are promises, and reasonable ones, but they are not locks.
            </p>
            <p>
              Below is what Notion’s own security pages say, what it means for the notes you would not want anyone else to
              read, and how to keep Notion for the work it is good at without keeping your private notes in it.
            </p>
          </>
        }
        sections={[
          {
            id: 'what-notion-encrypts',
            heading: 'What Notion encrypts, and who holds the keys',
            body: (
              <>
                <p>
                  Notion encrypts data in transit with TLS 1.2 or newer and at rest with AES-256, and hosts it on AWS in the
                  United States with backups across separate availability zones. That is the standard for a well-run cloud
                  service. The important detail is where the keys live: with Notion. Your password logs you in; it does not
                  encrypt your pages. So a breach of Notion’s systems, a legal demand, or a policy change could in principle
                  expose page content, in a way that is impossible for an end-to-end encrypted service.
                </p>
              </>
            ),
          },
          {
            id: 'not-end-to-end',
            heading: 'Not end-to-end, and why it matters',
            body: (
              <>
                <p>
                  End-to-end encryption means the content is encrypted on your device with a key only you hold, so the
                  service stores ciphertext it cannot open. Notion does not work that way, and could not while offering
                  full-text search across a workspace, server-side AI, and collaboration at the scale it does. That is a
                  design choice, not an oversight, and it is the right one for a team wiki. It is the wrong one for a journal,
                  a password hint, a medical note, or anything you would be uncomfortable seeing in a breach notification.
                </p>
              </>
            ),
          },
          {
            id: 'policy',
            heading: 'What the policy allows',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Employee access:</strong> Notion says staff access customer data only to troubleshoot problems or
                    recover content at your request.
                  </li>
                  <li>
                    <strong>AI:</strong> by default, neither Notion nor its AI subprocessors use customer data to train models.
                    Notion AI runs on models hosted by Notion and by providers including Anthropic and OpenAI; data retention at
                    those providers is 30 days or less on non-Enterprise plans and zero on Enterprise.
                  </li>
                  <li>
                    <strong>Location:</strong> data is hosted in AWS regions in the United States.
                  </li>
                </ul>
                <p>All of this is checked against Notion’s security and AI documentation on 8 September 2026. Policies change; the key custody does not.</p>
              </>
            ),
          },
          {
            id: 'keep-notion-for-work',
            heading: 'Keep Notion for work, move the private notes',
            body: (
              <>
                <p>
                  The practical answer is a split. Notion stays the place for shared docs, project trackers and anything a
                  colleague should be able to find. Personal and sensitive notes go somewhere that never sees a company’s
                  server, or sees it only as ciphertext. The split costs nothing: the private notes are the ones that never
                  needed to be shared.
                </p>
              </>
            ),
          },
          {
            id: 'alternatives',
            heading: 'Private alternatives',
            body: (
              <>
                <p>
                  <strong><a href='/'>Dash</a></strong> keeps notes on your Mac or iPhone with no account, locks any note with
                  AES-256-GCM, and syncs end-to-end encrypted only if you turn it on; $14.99 once on Mac, free on iPhone.{' '}
                  <strong>Standard Notes</strong> and <strong>Notesnook</strong> are end-to-end encrypted by default behind an
                  account. <strong>Obsidian</strong> keeps plain files on your disk. The full list, with prices and trade-offs,
                  is on our <a href='/notion-alternatives'>Notion alternatives</a> page.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Keep the private notes out of the company cloud.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
