import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Local AI Notes App: Private AI Assistant That Runs Offline';
const DESCRIPTION =
  'Use an AI assistant inside your notes without sending a word to the cloud. Dash connects to Ollama, LM Studio and other local models running on your own Mac.';
const PATH = '/guides/local-ai';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'local ai notes app',
    'private ai assistant',
    'offline ai assistant',
    'ollama notes app',
    'lm studio notes',
    'ai notes without cloud',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'How does local AI work in Dash?',
    answer:
      'You run a model on your own machine with Ollama, LM Studio, LocalAI or Jan, and point Dash at it. When you ask for a summary or a rewrite, Dash sends the text to that local server over your own network interface. The request never leaves the machine.',
  },
  {
    question: 'Does Dash send my notes to the cloud for AI?',
    answer:
      'No. There is no Dash AI service and no cloud provider in the loop. If you have no local model running, the AI features simply do nothing rather than falling back to a remote one.',
  },
  {
    question: 'Which providers are supported?',
    answer:
      'Anything exposing a local HTTP endpoint of the usual shape: Ollama, LM Studio, LocalAI and Jan are the tested ones. You choose which model to run, which means you also choose the trade-off between quality and speed on your hardware.',
  },
  {
    question: 'Can the AI read my locked pages?',
    answer:
      'Only what you have unlocked and are looking at. A locked page is ciphertext until you open it, so it cannot be sent anywhere, including to a local model.',
  },
  {
    question: 'Do I need an API key or a subscription?',
    answer:
      'No. There is no key to buy and no usage billing, because there is no service. The cost is the disk space and memory the model needs on your own computer.',
  },
];

const related = [
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
  },
  {
    title: 'Is Notion private?',
    href: '/is-notion-private',
    description: 'What Notion encrypts, who holds the keys, and what its AI does with your pages.',
  },
  {
    title: 'Privacy-first note taking',
    href: '/guides/privacy-first-note-taking',
    description: 'What zero-knowledge design means in practice.',
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

export default function LocalAIGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Laptop'
        badgeText='Guide'
        headline='An AI Assistant That Never Leaves Your Mac'
        subheadline='Summaries, rewrites and questions about your own notes, answered by a model running on your machine rather than a company’s.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Every notes app added AI in the last two years, and nearly all of them added it the same way: your text is sent
              to a provider, processed there, and covered by whatever the terms say about retention and training. For notes
              that is an odd bargain, because notes are exactly the writing you did not intend to publish.
            </p>
            <p>
              <a href='/'>Dash</a> takes the other route. The assistant talks to a model running on your own computer, so the
              text never leaves it. Here is how to set that up and what to expect.
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
                  A local model runner, such as Ollama or LM Studio, downloads a model and serves it on your machine.
                  Dash sends requests to that local endpoint. There is no Dash AI service in between, no API key, and no
                  usage billing, because nothing is being called remotely.
                </p>
                <p>
                  If no local model is running, the AI features are simply inert. Dash does not quietly fall back to a cloud
                  provider, which is the behaviour that makes the privacy claim meaningful rather than conditional.
                </p>
              </>
            ),
          },
          {
            id: 'setup',
            heading: 'Setting it up',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Install a runner.</strong> Ollama is the simplest on a Mac; LM Studio adds a graphical interface
                    for browsing models. LocalAI and Jan also work.
                  </li>
                  <li>
                    <strong>Pull a model.</strong> An 8-billion-parameter model is a reasonable starting point on Apple
                    silicon: fast enough to feel interactive, good enough for summaries and rewriting.
                  </li>
                  <li>
                    <strong>Point Dash at it</strong> in Settings, choosing the provider and the model you pulled.
                  </li>
                  <li>
                    <strong>Use it from the editor,</strong> on a selection or a whole note, for summarising, rewriting,
                    extracting actions or asking a question about what you wrote.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'expectations',
            heading: 'What to expect from a local model',
            body: (
              <>
                <p>
                  A model that runs on a laptop is not the largest frontier model, and it will not match one on hard
                  reasoning or broad world knowledge. For the things a notes assistant is actually asked to do, summarising a
                  long note, tightening a paragraph, pulling out action items, turning scribbles into prose, a modern local
                  model is genuinely good.
                </p>
                <p>
                  Speed depends on your hardware and the model size. On Apple silicon, a mid-size model responds in a few
                  seconds. Larger models are slower and need more memory, and the model files themselves take several
                  gigabytes of disk.
                </p>
              </>
            ),
          },
          {
            id: 'privacy',
            heading: 'Why it matters for notes',
            body: (
              <>
                <p>
                  Cloud AI in a notes app means the private half of your writing is sent to a third party. Even with good
                  terms, and Notion for instance states that customer data is not used for training by default, the content
                  has still left your machine and sits in someone’s retention window.
                </p>
                <p>
                  A local model removes that step. It also means the feature works on a plane, keeps working if a provider
                  changes its pricing, and cannot be quietly repurposed. Locked pages stay out of it entirely: they are
                  ciphertext until you open them, so there is nothing to send.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='AI that runs where your notes already are.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
