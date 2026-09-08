import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Notes Taking App for Students (Private, Works Offline)';
const DESCRIPTION =
  'A notes taking app for students that works offline, needs no account and keeps lecture notes on your device. Lock any note. $14.99 once on Mac, free on iPhone.';
const PATH = '/for-students';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'notes taking app for students',
    'note taking app for students',
    'private notes for students',
    'student note taking privacy',
    'offline notes app for students',
    'notes app no account',
    'encrypted notes student',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Why should students pay for a notes app?',
    answer:
      'Free apps are paid for with your data: what you study, when, and what you struggle with. The $14.99 one-time price for the Mac app means you are the customer, not the product. It is less than one month of most subscriptions, and the iPhone app is free.',
  },
  {
    question: 'Can I use this for exam notes and sensitive material?',
    answer:
      'Yes. Lock any note with a password and it is encrypted with AES-256-GCM, the standard banks use. Someone with your laptop cannot read a locked note without the password, and you can open it with Touch ID or Face ID.',
  },
  {
    question: 'How do I organise notes for multiple classes?',
    answer:
      'Make a folder per class or subject, tag across them for topics like “exam prep” or “cite this”, and link notes together with [[double brackets]]. Search finds anything across every folder in an instant.',
  },
  {
    question: 'What about syncing between my laptop and phone?',
    answer:
      'Two options. Dash Sync, an optional subscription at $4.99 a month with a 7-day free trial, keeps notes in step between your laptop and phone; everything is encrypted on your device before upload, so the server never sees your notes. Or skip the subscription and move notes with an encrypted .dashpack export when you need to.',
  },
  {
    question: 'Is this available on iOS and Android?',
    answer:
      'Yes. Dash is a native iPhone app on the App Store, free to download, and on Android it runs as a web app in the browser. Every version keeps notes on the device and locks them the same way.',
  },
  {
    question: 'Why not just use Apple Notes or Google Keep?',
    answer:
      'Apple Notes syncs to iCloud, where Apple holds a key unless you turn on Advanced Data Protection. Google Keep lives inside Google’s account and advertising ecosystem. Both companies can read your notes. Dash keeps them on your device, with a password lock on anything you want to protect.',
  },
];

const related = [
  {
    title: 'Offline-first apps',
    href: '/guides/offline-first',
    description: 'Why notes that live on the device beat notes that live on a server.',
  },
  {
    title: 'Page linking',
    href: '/guides/page-linking',
    description: 'Connect lecture notes across subjects with [[links]].',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Keep a shared laptop honest with Touch ID and auto-lock.',
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

export default function ForStudentsPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='For students'
        headline='A Notes Taking App for Students That Stays Private'
        subheadline='Lecture notes, essays and the personal stuff, kept on your device. No account, no tracking, works in a lecture hall with no signal.'
        updated='September 2026'
        intro={
          <>
            <p>
              A notes taking app for students has to survive three things: a lecture hall with no Wi‑Fi, a shared laptop, and
              four years of everything you ever wrote. The apps most students start with are free, and free is paid for with
              your data. Your study habits, your interests and your struggles are exactly the kind of signal an advertising
              company or an AI lab wants.
            </p>
            <p>
              <a href='/'>Dash</a> takes the other approach. Notes are files on your Mac or iPhone. There is no account, so
              there is no record of you to sell or leak. Anything sensitive gets a password and real encryption. And the Mac app
              is a one-time purchase, which is cheaper than a month of most subscriptions.
            </p>
          </>
        }
        sections={[
          {
            id: 'why-privacy',
            heading: 'Why privacy matters for students',
            body: (
              <>
                <p>Your study notes reveal more about you than you might think.</p>
                <ul>
                  <li>
                    <strong>Your notes are not ad fodder.</strong> Free note apps make money from what you write. They analyse
                    your habits, your interests, your struggles. Dash collects nothing; your notes exist only on your device.
                  </li>
                  <li>
                    <strong>Nothing trains on your essays.</strong> Many apps now use user content to train AI. Your drafts,
                    research notes and personal thoughts become training data. Dash works offline, so your writing cannot train
                    anything. If you want AI help, Dash talks to a model running on your own machine.
                  </li>
                  <li>
                    <strong>Focus without prompts.</strong> No notifications about features, no upgrade nags, no sync failures
                    ten minutes before a deadline. A clean, fast notes app that lets you study.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'free-apps',
            heading: 'The reality of free note apps',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Free apps sell your data.</strong> If the product is free, you are the product. Your notes become
                    advertising signal.
                  </li>
                  <li>
                    <strong>AI training on your content.</strong> Several note apps now train models on user content, with
                    consent buried in the terms.
                  </li>
                  <li>
                    <strong>Breaches expose everything.</strong> Notes stored on a server can leak in a breach. Notes stored on
                    your device cannot leak from a server that does not have them.
                  </li>
                  <li>
                    <strong>Terms change.</strong> A provider can change how it uses your data after you have written four
                    years of notes into it.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'features',
            heading: 'Built for focused studying',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Password protection.</strong> Lock a note and it is encrypted with AES-256-GCM. Roommates and family
                    cannot open it; you can, with Touch ID or Face ID.
                  </li>
                  <li>
                    <strong>Works offline.</strong> Library, café, train, plane. No connection needed, ever.
                  </li>
                  <li>
                    <strong>On your device.</strong> Notes stay on your Mac or iPhone, not on a server being analysed.
                  </li>
                  <li>
                    <strong>No account.</strong> No sign-up, no email, nothing in a company database.
                  </li>
                  <li>
                    <strong>Organise everything.</strong> Folders for each class, tags for topics, [[links]] between notes,
                    search that finds anything instantly.
                  </li>
                  <li>
                    <strong>Four themes and a focus mode,</strong> including a terminal-green theme for late nights.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'setup',
            heading: 'A setup that lasts the degree',
            body: (
              <>
                <ul>
                  <li>
                    <strong>One folder per module,</strong> a note per lecture, titled with the date and topic so search can
                    find it later.
                  </li>
                  <li>
                    <strong>Tags across folders:</strong> “exam”, “cite”, “ask”. A tag pulls the relevant notes from every
                    module into one list.
                  </li>
                  <li>
                    <strong>Link, do not copy.</strong> Write [[Dynamic programming]] in a note and Dash links it to the note of
                    that name. Concepts that recur across courses get one note with many links in.
                  </li>
                  <li>
                    <strong>Lock the personal folder.</strong> A journal or a note with a password in it gets a lock; lecture
                    notes do not need one.
                  </li>
                  <li>
                    <strong>Export at the end of term.</strong> Markdown, PDF or DOCX for the essays; an encrypted .dashpack
                    backup for everything.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'price',
            heading: '$14.99 once',
            body: (
              <>
                <p>
                  Less than two months of a music subscription, less than one textbook chapter, and it covers the Mac app for
                  good. The iPhone app and the web app are free. The only subscription in Dash is the optional end-to-end
                  encrypted sync, and you do not need it to take notes.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Notes that stay on your laptop. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your notes. Not their data.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
