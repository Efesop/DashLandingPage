'use client';

import React, { useState } from 'react';
import {
  Link,
  Type,
  Database,
  MousePointer,
  Shield,
  Lock,
  WifiOff,
  Code,
  Minus,
  Plus,
  Check,
  X,
  Clock,
  GraduationCap,
  BookOpen,
  PenLine,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';
import InlineCTA from '../../components/seo/InlineCTA';
import RelatedLinks from '../../components/seo/RelatedLinks';

export default function PageLinkingGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const linkingMethods = [
    {
      icon: Type,
      title: 'Type [[',
      description:
        'Start typing [[ anywhere in a text block. An autocomplete dropdown shows all your pages. Type to filter, arrow keys to navigate, Enter to insert.',
    },
    {
      icon: Link,
      title: 'Inline Toolbar',
      description:
        'Select text and click the link icon in the formatting toolbar. Search for a page and the selected text becomes a clickable page link.',
    },
  ];

  const howLinksWork = [
    {
      icon: Database,
      title: 'Stored by ID',
      description:
        'Links reference the page\u2019s unique ID, not its title. Rename a page and all links to it still work perfectly.',
    },
    {
      icon: MousePointer,
      title: 'Click to Navigate',
      description:
        'Click any page link to jump to that page instantly. Links are styled with dotted underlines so you can tell them apart from URLs.',
    },
    {
      icon: Shield,
      title: 'Fully Private',
      description:
        'Page links are local references only. Zero network requests. No external URLs, no tracking, no analytics.',
    },
    {
      icon: Lock,
      title: 'Works With Encryption',
      description:
        'Link to encrypted pages freely. Clicking the link prompts for the page password if it\u2019s locked.',
    },
    {
      icon: WifiOff,
      title: 'Works Offline',
      description:
        'Everything is local. Links work identically whether you\u2019re online or completely disconnected.',
    },
    {
      icon: Code,
      title: 'Clean Storage',
      description:
        'Links are stored as HTML anchor elements with data-page-id attributes. Content is sanitized through DOMPurify.',
    },
  ];

  const faqs = [
    {
      question: 'How do I create a page link in Dash?',
      answer:
        'Type [[ anywhere in a text block to open an autocomplete dropdown. Select a page to insert a link. You can also select text and use the link icon in the inline toolbar.',
    },
    {
      question: 'Do page links break when I rename a page?',
      answer:
        'No. Links reference the page\u2019s unique ID, not its title. Renaming a page does not affect any existing links.',
    },
    {
      question: 'Can I link to encrypted pages?',
      answer:
        'Yes. You can link to any page including encrypted ones. Clicking the link will prompt for the page password if locked.',
    },
    {
      question: 'Do page links require internet?',
      answer:
        'No. Page links are purely local references. They work fully offline with zero network requests.',
    },
    {
      question: 'How does Dash compare to Obsidian for linking?',
      answer:
        'Both support [[ wiki links. Dash adds toolbar-based linking. Obsidian has backlinks and graph view, which are planned for Dash. Both work offline and keep data local.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Link, text: 'Page Linking Guide' }}
        headline="Connect Your Notes With Wiki Links"
        highlightedWord="Wiki Links"
        subheadline="Type [[ to link any note to any other note. Build a personal knowledge base with instant navigation — all offline, all private."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Learn how it works', href: '#how-it-works' }}
      >
        {/* Page linking visualization mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <Link className="w-3 h-3" />
              <span className="text-xs font-medium">Page Linking</span>
            </div>
          </div>

          <div className="p-6">
            {/* Note editor content */}
            <div className="space-y-3">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                The authentication flow is documented in{' '}
                <span className="text-blue-600 dark:text-blue-400 border-b border-dotted border-blue-400 dark:border-blue-500 cursor-pointer">
                  Auth Architecture
                </span>
                . For the API layer, see the notes below.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                We should also update the{' '}
                <span className="text-gray-700 dark:text-gray-300">[[</span>
              </p>
            </div>

            {/* Autocomplete dropdown */}
            <div className="mt-1 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg w-64 overflow-hidden">
              <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800">
                <span className="text-xs text-gray-400">Link to page...</span>
              </div>
              <div className="py-1">
                <div className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                    <Link className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-900 dark:text-white">
                    <span className="font-bold">API</span> Reference
                  </span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="w-4 h-4 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Link className="w-2.5 h-2.5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-bold">A</span>uth <span className="font-bold">A</span>rchitecture
                  </span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="w-4 h-4 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Link className="w-2.5 h-2.5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    D<span className="font-bold">a</span>tabase Schema
                  </span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="w-4 h-4 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Link className="w-2.5 h-2.5 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Depl<span className="font-bold">o</span>yment Notes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - Two Ways to Link */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Two Ways to <span className="text-blue-600 dark:text-blue-400">Link</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create page links with keyboard shortcuts or the formatting toolbar. Both methods are fast and intuitive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {linkingMethods.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl mx-auto">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mr-1">Perfect for</span>
            {[
              { icon: GraduationCap, label: 'Students & researchers' },
              { icon: BookOpen, label: 'Knowledge workers' },
              { icon: PenLine, label: 'Writers' },
            ].map((chip) => (
              <div key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <chip.icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How Links Work */}
      <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Links <span className="text-blue-400">Work</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Page links are fast, private, and resilient. Here is what happens under the hood.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howLinksWork.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Start linking pages in Dash" variant="dark" />

      {/* Section 3 - Dash vs Others */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Dash vs <span className="text-blue-600 dark:text-blue-400">Others</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                How Dash page linking compares to other note-taking apps
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Link className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Linking Comparison</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-blue-600 dark:text-blue-400">Dash</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Obsidian</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Notion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: '[[ wiki links', dash: true, obsidian: true, notion: true },
                      { feature: 'Toolbar linking', dash: true, obsidian: false, notion: true },
                      { feature: 'Works offline', dash: true, obsidian: true, notion: false },
                      { feature: 'Data stays local', dash: true, obsidian: true, notion: false },
                      { feature: 'Links survive renames', dash: true, obsidian: true, notion: true },
                      { feature: 'Backlinks panel', dash: 'planned', obsidian: true, notion: true },
                      { feature: 'Graph view', dash: 'planned', obsidian: true, notion: false },
                    ].map((row, index) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-gray-100 dark:border-gray-700 last:border-0 ${
                          index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.dash === 'planned' ? (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">
                              <Clock className="w-3 h-3" />
                              Planned
                            </span>
                          ) : row.dash ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.obsidian ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.notion ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Section */}
      <PaymentSection />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Page Linking <span className="text-blue-600 dark:text-blue-400">FAQ</span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-xl border transition-all duration-300 overflow-hidden ${openFaq === index
                    ? 'border-blue-200 dark:border-blue-800 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700'
                    }`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openFaq === index
                        ? 'bg-blue-100 dark:bg-blue-900/50'
                        : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                        {openFaq === index ? (
                          <Minus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks heading="Related" links={[
        { title: 'Notes for Writers', href: '/for-writers', description: 'Build a connected writing workspace.' },
        { title: 'Notes for Students', href: '/for-students', description: 'Link lecture notes across subjects.' },
        { title: 'Notes for Researchers', href: '/for-researchers', description: 'Connect research notes and citations.' },
        { title: 'Offline-First Architecture', href: '/guides/offline-first', description: 'Page links work entirely offline.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Build your personal knowledge base"
        subheadline="Wiki-style page linking with offline privacy. $14.99 one-time purchase."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
