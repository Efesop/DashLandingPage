import type { Metadata } from 'next';
import ArticleLayout from '../components/seo/ArticleLayout';
import { articleJsonLd, faqJsonLd, pageMetadata, type FAQ } from '../../lib/seo';

const TITLE = 'Google Keep Alternative Without Google Tracking';
const DESCRIPTION =
  'A Google Keep alternative that keeps notes on your device instead of Google’s servers: encrypted, offline, no account. Dash vs Google Keep compared.';
const PATH = '/vs-google-keep';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'google keep alternative',
    'dash vs google keep',
    'notes without google',
    'private google keep alternative',
    'google keep privacy',
    'notes app no tracking',
    'google keep replacement',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'Google Keep is free. Why pay for Dash?',
    answer:
      'Because free means your notes sit inside a Google account, readable by Google and tied to the profile it keeps on you. The Mac app costs $14.99 once, and the iPhone and web apps are free, so the price of leaving is small and the notes become yours alone.',
  },
  {
    question: 'Can I move my notes from Google Keep?',
    answer:
      'Yes. Use Google Takeout to export Keep as a zip of HTML and JSON files. Bring the notes you use into Dash and keep the export as an archive; an encrypted .dashpack file is a good place for it.',
  },
  {
    question: 'Does Dash sync like Google Keep?',
    answer:
      'It can. Dash Sync is optional, at $4.99 a month or $47.99 a year with a seven-day trial, and keeps Mac, iPhone, iPad and the web in step. Everything is encrypted on your device before upload, so the relay only stores ciphertext. Leave it off and Dash never contacts a server.',
  },
  {
    question: 'Is Dash really more private than Google Keep?',
    answer:
      'Yes, structurally. Keep requires a Google account and stores notes on Google’s servers with Google’s keys. Dash needs no account, keeps notes on your device by default, and encrypts any note you lock with AES-256 so nobody else can read it, us included.',
  },
  {
    question: 'What do I lose by leaving Google Keep?',
    answer:
      'Instant capture from anywhere in the Google ecosystem, reminders tied to Google Assistant, colour-coded cards and collaborative lists. Dash gives you folders, tags, wiki-style [[links]], attachments, search, locked notes, an app lock and self-destructing notes instead.',
  },
];

const related = [
  {
    title: 'Private notes app',
    href: '/private-notes',
    description: 'Notes that stay on your device, with no account.',
  },
  {
    title: 'Notes app with password protection',
    href: '/password-protected-notes',
    description: 'Lock a note, lock the app, and what a lock screen does not do.',
  },
  {
    title: 'Offline notes app',
    href: '/offline-notes',
    description: 'Why notes that work with the Wi‑Fi off are the private ones.',
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

export default function VsGoogleKeepPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <ArticleLayout
        badgeIcon='Shield'
        badgeText='Dash vs Google Keep'
        headline='A Google Keep Alternative With No Google Account'
        subheadline='Keep is fast, free and tied to the account Google builds around you. Dash keeps the speed and drops the account.'
        updated='September 2026'
        intro={
          <>
            <p>
              Google Keep is very good at one thing: catching a thought in two seconds. It is also a Google product, which
              means a Google account, notes on Google’s servers with Google’s keys, and a place in the profile the company
              maintains about you. For a shopping list that is fine. For anything you would not want read, it is not.
            </p>
            <p>
              <a href='/'>Dash</a> keeps notes on your Mac or iPhone with no account at all, and locks the ones that matter.
              We make Dash, so judge the comparison on the facts.
            </p>
          </>
        }
        comparison={{
          heading: 'Dash vs Google Keep',
          columns: [
            { key: 'dash', label: 'Dash', highlight: true },
            { key: 'keep', label: 'Google Keep' },
          ],
          rows: [
            { feature: 'Works fully offline', values: { dash: true, keep: 'Partial' } },
            { feature: 'Works without an account', values: { dash: true, keep: false } },
            { feature: 'Provider cannot read your notes', values: { dash: true, keep: false } },
            { feature: 'Lock individual notes', values: { dash: true, keep: false } },
            { feature: 'Lock the whole app', values: { dash: true, keep: false } },
            { feature: 'Self-destructing notes', values: { dash: true, keep: false } },
            { feature: 'Folders, tags and [[links]]', values: { dash: true, keep: 'Labels' } },
            { feature: 'Shared and collaborative notes', values: { dash: false, keep: true } },
            { feature: 'Open source', values: { dash: true, keep: false } },
            { feature: 'Price', values: { dash: '$14.99 once', keep: 'Free' } },
          ],
        }}
        sections={[
          {
            id: 'privacy',
            heading: 'What “free” costs',
            body: (
              <>
                <p>
                  Keep has no subscription because it is part of an account that carries your mail, your calendar, your
                  location history and your search. Notes are stored on Google’s servers, encrypted with Google’s keys, and
                  are available to the company and to legal requests. Google does not need to read your notes for the
                  arrangement to be a poor fit for a journal or a password hint.
                </p>
                <p>
                  Dash has no account, so there is no profile to join. Notes stay on the device. Lock one and it is encrypted
                  with AES-256-GCM, so even someone holding your unlocked Mac cannot open it.
                </p>
              </>
            ),
          },
          {
            id: 'what-keep-does-better',
            heading: 'What Keep does better',
            body: (
              <>
                <p>
                  Instant capture from anywhere in the Google ecosystem, voice notes through Assistant, location and time
                  reminders, shared lists that update live, and a free Android app that is already on the phone. If your
                  notes are lists you share with someone else, Keep is hard to beat.
                </p>
              </>
            ),
          },
          {
            id: 'what-dash-does-better',
            heading: 'What Dash does better',
            body: (
              <>
                <ul>
                  <li>
                    <strong>No account, no profile.</strong> Nothing to sign into and nothing to leak.
                  </li>
                  <li>
                    <strong>Real encryption.</strong> AES-256-GCM on any note you lock, opened with Touch ID or Face ID.
                  </li>
                  <li>
                    <strong>A lock on the app itself,</strong> with auto-lock timers and a duress password that opens decoy
                    notes.
                  </li>
                  <li>
                    <strong>Structure that scales.</strong> Folders, tags, wiki-style [[links]] and search, rather than
                    coloured cards and labels.
                  </li>
                  <li>
                    <strong>Notes that delete themselves</strong> when a timer runs out.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'switching',
            heading: 'Moving from Google Keep to Dash',
            body: (
              <>
                <ol>
                  <li>
                    <strong>Export with Google Takeout.</strong> Select Keep and download the zip; you get HTML and JSON per
                    note.
                  </li>
                  <li>
                    <strong>Bring across what you use.</strong> Most Keep libraries are mostly finished lists.
                  </li>
                  <li>
                    <strong>Lock anything sensitive</strong>, and turn on Dash Sync if you want the same notes on the phone.
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        faqs={faqs}
        related={related}
        inlineCTA='Quick capture without a Google account. Dash is $14.99 once on Mac, free on iPhone.'
        ctaHeadline='Notes that are not part of an advertising profile.'
        ctaSubheadline='$14.99 once on Mac. Free on iPhone.'
      />
    </>
  );
}
