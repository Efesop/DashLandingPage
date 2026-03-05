'use client';

import React, { useState } from 'react';
import {
  WifiOff,
  Zap,
  Shield,
  HardDrive,
  Cloud,
  CloudOff,
  Smartphone,
  Monitor,
  Globe,
  Ban,
  Server,
  Download,
  FileText,
  ArrowRight,
  Minus,
  Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';

export default function OfflineFirstGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const offlineFirstBenefits = [
    {
      icon: Zap,
      title: 'Speed',
      description:
        'Local reads and writes are instant. No loading spinners, no server round trips, no latency.',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description:
        'When data never leaves your device, there is nothing to intercept, breach, or subpoena from a server.',
    },
    {
      icon: HardDrive,
      title: 'Ownership',
      description:
        'Your data is yours. No service can change terms, increase prices, or lock you out.',
    },
  ];

  const approaches = [
    {
      title: 'Cloud-Based',
      icon: Cloud,
      description: 'Data on remote server. Requires internet. Offline access limited or unavailable.',
      examples: 'Google Docs, early Notion',
      highlighted: false,
    },
    {
      title: 'Offline-Capable',
      icon: CloudOff,
      description: 'Data on server, cached locally. Works with cached data. Sync conflicts possible.',
      examples: 'Notion, Apple Notes',
      highlighted: false,
    },
    {
      title: 'Offline-First (Dash)',
      icon: HardDrive,
      description: 'Data on your device as primary. Works fully offline. No sync, no conflicts, no server.',
      examples: 'Dash',
      highlighted: true,
    },
  ];

  const storageSteps = [
    {
      step: 1,
      icon: Monitor,
      title: 'Desktop (Electron)',
      description: 'JSON files on local filesystem. Accessible, portable, backupable.',
    },
    {
      step: 2,
      icon: Smartphone,
      title: 'Mobile (PWA)',
      description: 'IndexedDB with persistent storage. Automatic storage persistence request.',
    },
    {
      step: 3,
      icon: Globe,
      title: 'Web Browser',
      description: 'localStorage fallback. 5-10MB limit. Desktop or mobile recommended for heavy use.',
    },
  ];

  const noSyncFeatures = [
    {
      icon: Ban,
      title: 'No Sync Conflicts',
      description:
        'You never lose data to a merge conflict. What you see is what you have.',
    },
    {
      icon: Server,
      title: 'No Server Infrastructure',
      description:
        'No servers to maintain, secure, or pay for. No accounts to create or manage.',
    },
    {
      icon: Download,
      title: 'Export & Import',
      description:
        'Move data between devices via export. Supports JSON, Markdown, PDF, DOCX, and more. Encrypted exports available.',
    },
  ];

  const faqs = [
    {
      question: 'What does offline-first mean?',
      answer:
        'Offline-first means the app works fully without internet as its default mode of operation. Your data is stored locally on your device, and no network connection is needed for any functionality.',
    },
    {
      question: 'How is offline-first different from offline-capable?',
      answer:
        'Offline-capable apps cache server data locally so you can access it without internet, but the server remains the primary data source. Offline-first apps store data locally as the primary source with no server involved at all.',
    },
    {
      question: 'How does Dash store data?',
      answer:
        'Dash uses the best storage backend for each platform automatically. On desktop (Electron), it uses local JSON files on the filesystem. On mobile (PWA), it uses IndexedDB. On web browsers, it falls back to localStorage. The platform is auto-detected.',
    },
    {
      question: "Why doesn't Dash sync between devices?",
      answer:
        'By design. No sync means no conflicts, no servers, no accounts, and no data in transit that could be intercepted. You can move data between devices using the export and import feature instead.',
    },
    {
      question: 'What if I lose my device?',
      answer:
        'If you lose your device without having exported backups, the data on that device is lost. This is the tradeoff of local-only storage. We recommend regular exports. Encrypted pages remain protected even if someone accesses the device.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: WifiOff, text: 'Offline-First Architecture' }}
        headline="Your Notes, Always Available"
        highlightedWord="Always"
        subheadline="Offline-first means your data lives on your device. No internet required, no servers, no sync conflicts. It just works."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Learn how it works', href: '#how-it-works' }}
      >
        {/* App mockup showing offline mode */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2.5 py-1 rounded-full">
              <WifiOff className="w-3 h-3" />
              <span className="text-xs font-medium">No Internet</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Project Ideas</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Meeting Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Journal Entry</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Recipe Collection</span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-5">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Project Ideas</h4>
                <p className="text-xs text-gray-400">Last edited just now</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              </div>
              <div className="flex items-center gap-1.5 mt-4 text-xs text-green-600 dark:text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Everything saved locally</span>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* What Is Offline-First? */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Is <span className="text-blue-600 dark:text-blue-400">Offline-First</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Offline-first is a design philosophy where your device is the source of truth, not a remote server.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offlineFirstBenefits.map((item, index) => (
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
        </div>
      </section>

      {/* Three Approaches Compared */}
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
              Three Approaches <span className="text-blue-400">Compared</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Not all apps handle data the same way. Here is how the three main approaches stack up.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-full rounded-2xl p-6 ${
                  approach.highlighted
                    ? 'bg-slate-800/60 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800/60 border border-slate-700'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    approach.highlighted
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : 'bg-slate-700/50 border border-slate-600'
                  }`}>
                    <approach.icon className={`w-6 h-6 ${approach.highlighted ? 'text-blue-400' : 'text-slate-400'}`} />
                  </div>
                  {approach.highlighted && (
                    <span className="inline-block text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded mb-3">RECOMMENDED</span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {approach.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    Examples: {approach.examples}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Dash Stores Your Data */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Dash <span className="text-blue-600 dark:text-blue-400">Stores</span> Your Data
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dash automatically selects the best storage backend for your platform.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {storageSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP {item.step}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-5 py-2.5">
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                  Automatic platform detection — Dash detects your platform and selects the right backend transparently.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="text-blue-600 dark:text-blue-400">Details</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                For developers and technical users who want to understand the storage architecture
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Storage Specifications</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Desktop Storage', value: 'File system', detail: 'Effectively unlimited' },
                    { label: 'Mobile Storage', value: 'IndexedDB', detail: '50-100+ MB' },
                    { label: 'Web Storage', value: 'localStorage', detail: '5-10 MB' },
                    { label: 'Database Name', value: 'DashNotesDB', detail: 'Consistent across platforms' },
                    { label: 'Object Stores', value: 'pages, tags, metadata', detail: 'Structured data organization' },
                    { label: 'Data Migration', value: 'Automatic', detail: 'Seamless between backends' },
                    { label: 'PWA Support', value: 'Service worker + manifest', detail: 'Full progressive web app' },
                    { label: 'Sync', value: 'None by design', detail: 'Local-only architecture' },
                  ].map((spec) => (
                    <div key={spec.label} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{spec.label}</span>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 font-mono mb-1">{spec.value}</p>
                      <p className="text-xs text-gray-500">{spec.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Sync, By Design */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              No Sync, <span className="text-blue-600 dark:text-blue-400">By Design</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sync introduces complexity, conflicts, and servers. Dash eliminates all of that.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {noSyncFeatures.map((item, index) => (
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
                Offline-First <span className="text-blue-600 dark:text-blue-400">Questions</span>
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

      {/* CTA Banner */}
      <CTABanner
        headline="Notes that work everywhere, always"
        subheadline="No internet required. $14.99 one-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
