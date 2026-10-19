import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Page Linking: Wiki-Style Links and Backlinks in Notes';
const DESCRIPTION =
  'Wiki-style [[links]] and backlinks connect notes to each other instead of filing them away. How page linking works in Dash, and when it beats folders and tags.';
const PATH = '/guides/page-linking';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'page linking notes',
    'wiki style links notes',
    'double bracket links',
    'backlinks notes app',
    'connected notes app',
    'second brain app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How do I create a page link in Dash?',
    answer:
      'Type two square brackets and start typing a page name. Dash suggests matching pages as you type; pick one and the link is made. You can also select some text and click the page-link button in the toolbar to turn it into a link. The page has to exist first: create it, then link to it.',
  },
  {
    question: 'Do links break when I rename a page?',
    answer:
      'No. A link points at the page itself rather than at its title, so it keeps opening the right page after a rename. The link text keeps the old title until you edit it.',
  },
  {
    question: 'Does Dash show backlinks?',
    answer:
      'Yes. At the foot of every note, Dash lists the notes that link to it, with up to three snippets of the text around each link, and a chip in the status bar opens the same list without scrolling. Locked notes never show a snippet.',
  },
  {
    question: 'Can I link to a locked page?',
    answer:
      'Yes. The link works and shows the page title, and opening it prompts for the password as usual. Locking changes who can read the contents, not whether other notes can point at it.',
  },
  {
    question: 'Do page links need an internet connection?',
    answer:
      'No. Links are resolved locally, like everything else in Dash, so they work with the network off.',
  },
  {
    question: 'How does this compare to Obsidian?',
    answer:
      'Obsidian goes much further: a graph view, block-level references, and plugins that build on the link structure. Dash covers the part most people actually use, [[links]] and backlinks, without any setup, and adds encryption Obsidian leaves to plugins or full-disk encryption. Dash can import an Obsidian vault with its links intact.',
  },
];

const related = [
  {
    title: 'Obsidian alternatives',
    href: '/obsidian-alternatives',
    description: 'Eight apps for people who want less setup or built-in encryption.',
  },
  {
    title: 'Notes taking app for students',
    href: '/for-students',
    description: 'Linking lecture notes across modules without copying anything.',
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
    datePublished: '2025-11-20',
    dateModified: '2026-10-19',
  }),
  faqJsonLd(faqs),
];

export default function PageLinkingGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='BookOpen'
        badgeText='Guide'
        headline='Linking Notes Instead of Filing Them'
        subheadline='Folders make you decide where something belongs. Links let a note belong to everything it touches.'
        updated='October 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Folders force a choice at the worst moment. A note about a meeting where a supplier mentioned a pricing change
              belongs under that supplier, under that project, and under pricing. You pick one, and the other two paths lose
              it.
            </p>
            <p>
              Wiki-style links take the other approach: write the name in the text, and the note is reachable from the thing
              it mentions. This guide covers how that works in <a href='/'>Dash</a> and when it is worth the habit.
            </p>
          </>
        }
        sections={[
          {
            id: 'how',
            heading: 'How it works',
            body: (
              <>
                <p>
                  Type <code>[[</code> and start typing a page name. Dash suggests matches as you type; choose one and the
                  link is created inline. Or select some words and click the page-link button in the toolbar. Links point at
                  the page itself, not its title, so renaming a page never breaks a link to it (the link text keeps the old
                  name until you change it).
                </p>
                <p>
                  Because everything is local, the suggestions appear instantly and the links work offline. There is nothing
                  to index on a server and nothing to wait for.
                </p>
              </>
            ),
          },
          {
            id: 'backlinks',
            heading: 'Backlinks: the notes that point here',
            body: (
              <>
                <p>
                  A link has two ends, and Dash shows both. At the foot of every note is a list of the notes that link to it,
                  each with up to three snippets of the text around the link, so you can see why a note mentioned this one
                  without opening it. A chip in the status bar opens the same list from anywhere in a long note.
                </p>
                <p>
                  Locked notes stay locked here too. While a note is locked it contributes nothing, and once you unlock it
                  the list shows its title only, never a snippet of what it says.
                </p>
              </>
            ),
          },
          {
            id: 'when-to-use-what',
            heading: 'Folders, tags and links do different jobs',
            body: (
              <>
                <ul>
                  <li>
                    <strong>Folders are for where something lives.</strong> One home per note. Good for projects, clients,
                    modules, years.
                  </li>
                  <li>
                    <strong>Tags are for what kind of thing it is.</strong> Many per note. Good for status and theme: draft,
                    exam, follow-up.
                  </li>
                  <li>
                    <strong>Links are for what a note is about.</strong> Many per note, and specific. A person, a concept, a
                    piece of legislation, a character.
                  </li>
                </ul>
                <p>
                  Used together they cover most of what people try to force folders alone to do. The rule of thumb: if you
                  find yourself duplicating a note into two folders, it wanted a link.
                </p>
              </>
            ),
          },
          {
            id: 'practice',
            heading: 'What it looks like in practice',
            body: (
              <>
                <p>
                  <strong>Students:</strong> a page per lecture, and links to concept pages. Write [[Dynamic programming]] in
                  three different modules and the concept page becomes the place where your understanding accumulates,
                  instead of the same explanation being rewritten three times.
                </p>
                <p>
                  <strong>Writers:</strong> a page per chapter, links to characters and places. Clicking a name in a scene
                  opens what you already decided about them, which is how continuity errors get caught before an editor finds
                  them.
                </p>
                <p>
                  <strong>Work:</strong> a page per meeting, links to people and projects. Six months later the project page’s
                  backlinks are a trail of every conversation that touched it, assembled without any filing.
                </p>
                <p>
                  <strong>Research:</strong> a page per interview, links to themes. A memo about a theme sits next to links
                  from every interview that raised it.
                </p>
              </>
            ),
          },
          {
            id: 'habit',
            heading: 'Making it a habit',
            body: (
              <>
                <p>
                  The failure mode is linking everything, which produces a web where nothing stands out. Link proper nouns and
                  concepts you will write about more than once, and leave the rest as plain text. Do not build the structure in
                  advance; let pages come into existence when something needs to point at them. And keep using search, which
                  remains faster than navigation for anything you can half remember.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='Notes that point at each other.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
