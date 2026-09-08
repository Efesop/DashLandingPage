import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Private Writing App for Writers & Manuscripts';
const DESCRIPTION =
  'A private writing app for manuscripts and drafts: notes stay on your Mac or iPhone, any chapter can be locked with AES-256, and nothing you write trains an AI.';
const PATH = '/for-writers';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'private writing app',
    'writing app for writers',
    'manuscript app mac',
    'encrypted writing app',
    'novel writing app privacy',
    'distraction free writing app mac',
    'notes app for authors',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How do I organise a novel in Dash?',
    answer:
      'A folder for the book, a page per chapter, and pages for characters, places and research. Wiki-style [[links]] connect a chapter to the character notes it touches, so clicking a name opens what you already decided about them. Tags mark drafts, cuts and things to check.',
  },
  {
    question: 'Can I export to Word for my editor?',
    answer:
      'Yes. Any page exports to DOCX, Markdown or PDF, so an editor gets a file they can mark up in Word or Pages. You can also export a whole folder as an encrypted .dashpack backup for yourself.',
  },
  {
    question: 'What if I write on more than one device?',
    answer:
      'Dash Sync is optional, at $4.99 a month or $47.99 a year with a seven-day trial, and keeps a manuscript in step across Mac, iPhone, iPad and the web. Everything is encrypted on your device before upload, so the relay only ever holds ciphertext. Without it, move drafts with an encrypted .dashpack export.',
  },
  {
    question: 'Is this better than Scrivener?',
    answer:
      'Not for structure. Scrivener has the corkboard, compile and manuscript-level tooling a long book benefits from. Dash is better when the priority is that the draft stays private: encryption on any page, a lock on the app, and no account or cloud in the way.',
  },
  {
    question: 'Will my writing train AI models?',
    answer:
      'No. Dash has no cloud AI. If you want an assistant, Dash talks to a model running on your own machine through Ollama, LM Studio or similar, so the text never leaves the device. With sync off, nothing you write reaches a server at all.',
  },
  {
    question: 'What happens if I forget my encryption password?',
    answer:
      'A locked page cannot be recovered without its password. There is no backdoor, which is the point. Keep the password in a password manager and export encrypted backups regularly.',
  },
];

const related = [
  {
    title: 'Encrypted notes app',
    href: '/encrypted-notes',
    description: 'AES-256 on any page, and how the optional sync stays end-to-end encrypted.',
  },
  {
    title: 'Page linking',
    href: '/guides/page-linking',
    description: 'Wiki-style [[links]] between chapters, characters and research.',
  },
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Lock the manuscript behind Touch ID or Face ID.',
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

export default function ForWritersPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='For writers'
        headline='A Writing App Where the Draft Stays Yours'
        subheadline='Manuscripts, character notes and the ideas you are not ready to show, kept on your own machine and locked when they need to be.'
        updated='September 2026'
        intro={
          <>
            <p>
              An unfinished manuscript is a strange kind of document. It is worthless to almost everyone and enormously
              exposing to you. Most writing apps treat it like any other file: synced to a company’s servers, tied to an
              account, and increasingly read by whatever AI feature the company shipped this quarter.
            </p>
            <p>
              <a href='/'>Dash</a> keeps the draft on your Mac or iPhone. There is no account, nothing is uploaded unless you
              ask, any page can be locked with AES-256, and the only AI is one you run yourself.
            </p>
          </>
        }
        sections={[
          {
            id: 'setup',
            heading: 'A setup for a long project',
            body: (
              <>
                <ul>
                  <li>
                    <strong>A folder per book,</strong> a page per chapter, titled so search finds them: “12 — The ferry”.
                  </li>
                  <li>
                    <strong>Pages for people and places.</strong> Write [[Marguerite]] in a chapter and Dash links it to the
                    note of that name, so the character’s history is one click from the scene.
                  </li>
                  <li>
                    <strong>Tags across the folder:</strong> draft, cut, check, continuity. A tag pulls every affected chapter
                    into one list when you change something structural.
                  </li>
                  <li>
                    <strong>A cuts page.</strong> Nothing gets deleted, it gets moved. Sentences you loved are easier to lose
                    when you know where they went.
                  </li>
                  <li>
                    <strong>Focus mode</strong> clears the sidebar so it is you and the page, in whichever of the four themes
                    suits the hour.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'privacy',
            heading: 'Why it matters for a draft',
            body: (
              <>
                <p>
                  A first draft is a private conversation with yourself. Knowing it sits on a server, readable by a company
                  and subject to whatever the terms say next year, changes what you are willing to write. That is a real cost
                  to the work, not just a principle.
                </p>
                <p>
                  In Dash the draft is a file on your machine. Lock the chapters you would not want read over your shoulder and
                  they are AES-256-GCM ciphertext, opened with your password or Touch ID. Lock the whole app and it seals
                  itself when you leave the desk. If you turn on sync so the manuscript follows you to the phone, it is
                  encrypted before it leaves the device.
                </p>
              </>
            ),
          },
          {
            id: 'ai',
            heading: 'Nothing here trains a model',
            body: (
              <>
                <p>
                  Several writing apps now feed drafts to cloud models, with consent buried in the terms. Dash has no cloud AI
                  at all. The assistant, if you want one, connects to a model running on your own computer, so a request to
                  tighten a paragraph never leaves the machine. With sync off, the app makes no network requests for your
                  content.
                </p>
              </>
            ),
          },
          {
            id: 'export',
            heading: 'Getting the manuscript out',
            body: (
              <>
                <p>
                  Export a page or a folder as Markdown for another writing tool, DOCX for an editor who works in Word, or PDF
                  for a reader. For backups, an encrypted .dashpack file holds the whole project and opens only with your
                  password. Nothing about Dash traps the work inside it.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='A draft nobody else can read. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Your unpublished work stays unpublished.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
