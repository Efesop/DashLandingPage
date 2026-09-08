import type { Metadata } from 'next';
import ArticleLayout from '../../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../../lib/seo';

const TITLE = 'Duress Password: What It Is & How to Set One Up';
const DESCRIPTION =
  'A duress password is a second password that opens a decoy instead of your real data. How it works, where it is used, and how to set one up in Dash.';
const PATH = '/guides/duress-password';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'duress password',
    'duress pin',
    'decoy password',
    'plausible deniability notes',
    'panic password',
    'hidden vault app',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What is a duress password?',
    answer:
      'A second password that unlocks a different, harmless set of data. It exists for situations where refusing to unlock is not an option: a border crossing, a demand from someone with power over you, a moment where the safest answer is to appear to comply.',
  },
  {
    question: 'Can someone tell that a decoy password was used?',
    answer:
      'Not from the app. Dash opens normally and shows the decoy notes as if they were everything. There is no error, no warning and no visible second vault. What it cannot do is defeat someone who already knows how much material to expect, or who examines the device forensically over a long period.',
  },
  {
    question: 'Can I get my real data back afterwards?',
    answer:
      'Yes. Entering the real password opens the real notes as usual. Using the duress password does not delete anything or change your data; it simply shows a different set.',
  },
  {
    question: 'How does the duress password work with app lock?',
    answer:
      'It is part of app lock. You set the real master password first, then a separate duress password. Either unlocks the app; which set of notes appears depends on which one you typed.',
  },
  {
    question: 'Is a duress password legal?',
    answer:
      'It depends entirely on where you are and what is being asked. In some jurisdictions, giving an incomplete response to a lawful order carries serious consequences of its own. This is a technical feature, not legal advice; if you are in a situation where you might use it, talk to a lawyer in that jurisdiction first.',
  },
];

const related = [
  {
    title: 'App lock',
    href: '/guides/app-lock',
    description: 'Real encryption behind Touch ID and Face ID, with auto-lock timers.',
  },
  {
    title: 'Secure notes for journalists',
    href: '/for-journalists',
    description: 'Notes that protect the people in them, and what encryption cannot do.',
  },
  {
    title: 'Self-destructing notes',
    href: '/guides/self-destructing-notes',
    description: 'Notes that delete themselves when a timer runs out.',
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

export default function DuressPasswordGuidePage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='KeyRound'
        badgeText='Guide'
        headline='Duress Passwords, and When They Help'
        subheadline='Encryption protects notes from people who cannot make you open them. A duress password is for the situation where someone can.'
        updated='September 2026'
        showPayment={false}
        intro={
          <>
            <p>
              Every encrypted app has the same blind spot. The maths is excellent against an attacker with your laptop and no
              access to you. It does nothing at all against an attacker who has both, and who can simply insist that you type
              the password.
            </p>
            <p>
              A duress password, sometimes called a decoy or panic password, is the standard answer: a second password that
              opens something plausible and harmless. This guide covers how it works, how to set one up in{' '}
              <a href='/'>Dash</a>, and, importantly, when it is the wrong tool.
            </p>
          </>
        }
        sections={[
          {
            id: 'how-it-works',
            heading: 'How it works',
            body: (
              <>
                <p>
                  You set two passwords. The real one opens your notes. The duress one opens a separate set that you have
                  prepared in advance, and the app behaves completely normally either way: same screen, same speed, no
                  warning, no hint that a second vault exists.
                </p>
                <p>
                  The security property is not secrecy of the mechanism, which is documented on this page. It is that
                  someone looking at the unlocked app has no way to tell whether they are seeing everything.
                </p>
              </>
            ),
          },
          {
            id: 'setup',
            heading: 'Setting one up in Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Turn on app lock</strong> in Settings and set your real master password.
                  </li>
                  <li>
                    <strong>Add a duress password.</strong> It must be different, and it should be as memorable under stress
                    as the real one. Something you can type while frightened.
                  </li>
                  <li>
                    <strong>Prepare the decoy.</strong> Unlock with the duress password and write real-looking notes: a
                    shopping list, some work notes, a couple of half-finished ideas. An empty decoy is worse than none, because
                    an empty notes app is exactly what a hidden vault looks like.
                  </li>
                  <li>
                    <strong>Rehearse.</strong> Use the duress password occasionally so that entering it does not require
                    thought.
                  </li>
                </ol>
              </>
            ),
          },
          {
            id: 'decoy-quality',
            heading: 'The decoy is the whole feature',
            body: (
              <>
                <p>
                  A convincing decoy is mundane and lived-in. Ten to thirty notes, written over time, on ordinary subjects:
                  recipes, meeting notes, a packing list, a draft message to a landlord. Dates should be spread out rather
                  than all from one afternoon.
                </p>
                <p>
                  What it should not contain: nothing at all, obviously fake filler, or anything that hints at a second set.
                  The goal is that the search stops because it has found what it expected.
                </p>
              </>
            ),
          },
          {
            id: 'limits',
            heading: 'When this is the wrong tool',
            body: (
              <>
                <p>
                  A duress password helps against a quick, informal inspection. It is much weaker against someone who knows
                  what to look for, has forensic tools, or already knows roughly what material you hold. Disk-level artefacts,
                  file sizes and access patterns can all suggest more data exists.
                </p>
                <p>
                  It also carries a real risk that is not technical. In some jurisdictions, providing a misleading response to
                  a lawful order is itself a serious offence, and the consequences can be worse than the disclosure you were
                  avoiding. If you might genuinely face that situation, the useful step is advice from a lawyer where you are,
                  not a feature toggle. For high-risk work, not carrying the data across the border at all beats any password
                  scheme.
                </p>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        ctaHeadline='A second password for the day you need one.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
