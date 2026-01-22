'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  CheckCircle,
  X,
  CreditCard,
  WifiOff,
  Database,
  FileText,
  Download,
  Minus,
  Plus,
  Puzzle,
  DollarSign,
  Key,
  Settings,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '../components/ui/button';
import FloatingOrbs from '../components/ui/FloatingOrbs';

export default function VsObsidianContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const comparisonData = [
    { feature: 'Built-in Encryption', dash: true, obsidian: false },
    { feature: 'No Plugins Required for Security', dash: true, obsidian: false },
    { feature: 'No Sync Subscription', dash: true, obsidian: false },
    { feature: 'One-Time Payment', dash: true, obsidian: false },
    { feature: 'Works 100% Offline', dash: true, obsidian: true },
    { feature: 'No Account Required', dash: true, obsidian: true },
    { feature: 'Local-First Storage', dash: true, obsidian: true },
    { feature: 'Rich Text Editor', dash: true, obsidian: true },
    { feature: 'Export to Multiple Formats', dash: true, obsidian: true },
    { feature: 'Cross-Platform', dash: true, obsidian: true },
  ];

  const obsidianPainPoints = [
    {
      icon: Lock,
      title: 'Encryption Is an Afterthought',
      description:
        'Obsidian stores notes as plain text Markdown files. Encryption requires third-party plugins or tools. Dash encrypts notes with AES-256 at the click of a button - security is built-in, not bolted on.',
    },
    {
      icon: DollarSign,
      title: 'Sync Costs $8/Month',
      description:
        "Obsidian's sync feature costs $96/year. Dash is a one-time $14.99 payment with no recurring fees. Export encrypted .dashpack files to move notes between devices yourself.",
    },
    {
      icon: Puzzle,
      title: 'Plugin Dependency',
      description:
        'Need encryption? Install a plugin. Need features? Install plugins. Obsidian is powerful but requires setup and maintenance. Dash works perfectly out of the box.',
    },
    {
      icon: Settings,
      title: 'Complexity vs Simplicity',
      description:
        "Obsidian is built for power users who want to customize everything. Dash is built for people who want privacy without configuration. Open the app, write notes, they're encrypted.",
    },
  ];

  const dashAdvantages = [
    {
      icon: Lock,
      title: 'Military-Grade Encryption',
      description: 'AES-256-GCM encryption built into the app. Password-protect any note instantly.',
    },
    {
      icon: Key,
      title: 'Zero Configuration',
      description: 'No plugins to install, no settings to configure. Security works immediately.',
    },
    {
      icon: CreditCard,
      title: 'One-Time $14.99',
      description: 'Pay once, own forever. No subscriptions, no recurring charges.',
    },
    {
      icon: WifiOff,
      title: '100% Offline',
      description: 'Like Obsidian, notes stay on your device. Unlike Obsidian, they are encrypted.',
    },
    {
      icon: Database,
      title: 'True Privacy',
      description: 'No accounts, no telemetry, no data collection. Complete anonymity.',
    },
    {
      icon: Download,
      title: 'Portable Encryption',
      description: 'Export encrypted .dashpack bundles to securely move notes between devices.',
    },
  ];

  const faqs = [
    {
      question: "Is Dash as powerful as Obsidian?",
      answer:
        "Obsidian is designed for knowledge management with backlinks, graphs, and hundreds of plugins. Dash is designed for private note-taking with built-in encryption. If you need a second brain with complex linking, Obsidian may be better. If you need secure, private notes that just work, Dash is the answer.",
    },
    {
      question: "Can I migrate my Obsidian notes to Dash?",
      answer:
        "Yes. Your Obsidian vault contains Markdown files. Simply import those .md files into Dash. Basic formatting will be preserved. You can then add encryption to any notes containing sensitive information.",
    },
    {
      question: "Why does Obsidian not have built-in encryption?",
      answer:
        "Obsidian stores notes as plain .md files so they work with any text editor. This is great for portability but means your notes are readable by anyone with access to your computer. Dash uses a different approach - your notes are always protected.",
    },
    {
      question: "What about Obsidian Sync end-to-end encryption?",
      answer:
        "Obsidian Sync ($8/month) does offer E2E encryption for synced notes. However, your local vault files remain unencrypted plain text. Dash encrypts notes on your device, so even local files are protected without any subscription.",
    },
    {
      question: "Is Dash open source like Obsidian plugins?",
      answer:
        "Obsidian itself is closed source, though many plugins are open source. Dash is fully open source - the complete app code is on GitHub for anyone to audit. This is essential for verifying security claims.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header
        email=""
        setEmail={() => { }}
        isEmailSubmitted={false}
        downloadError=""
        downloadUrl=""
        handleEmailSubmit={() => { }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
        <FloatingOrbs variant="light" density="low" />

        <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-8"
            >
              <Shield className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Security Comparison</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Dash vs Obsidian
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Both are local-first. Only one has{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                built-in encryption.
              </span>{' '}
              No plugins, no subscriptions, no configuration.
            </motion.p>

            {/* Logo comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-8 mb-10"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <Image
                    src="/images/Dash256.png"
                    alt="Dash"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Dash</p>
                <p className="text-xs text-green-600 dark:text-green-400">Encrypted by Default</p>
              </div>

              <div className="text-3xl font-bold text-gray-400">vs</div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <div className="text-3xl">💎</div>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Obsidian</p>
                <p className="text-xs text-gray-500">Plain Text Files</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() =>
                  document
                    .getElementById('comparison-table')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-colors duration-200"
              >
                See Full Comparison
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Feature <span className="text-blue-600 dark:text-blue-400">Comparison</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See exactly how Dash and Obsidian compare on security and features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard variant="light" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/images/Dash256.png"
                            alt="Dash"
                            width={32}
                            height={32}
                            className="mb-1 rounded-lg"
                          />
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            Dash
                          </span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl mb-1">💎</div>
                          <span className="text-sm font-semibold text-gray-500">
                            Obsidian
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.dash ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.obsidian ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why Switch from Obsidian */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="text-blue-600 dark:text-blue-400">Encryption</span> Difference
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Obsidian is great for knowledge management, but if you need true privacy, these limitations matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {obsidianPainPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Dash Offers */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What <span className="text-blue-400">Dash</span> Offers
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              All the local-first benefits of Obsidian, plus built-in encryption without the complexity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dashAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side by Side Security */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Security <span className="text-blue-600 dark:text-blue-400">Side by Side</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Obsidian */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="light" className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">💎</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Obsidian</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Notes stored as plain text .md files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Encryption requires third-party plugins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Sync feature costs $8/month ($96/year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Local-first storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Works offline</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Dash */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="light" className="p-8 h-full border-2 border-blue-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Image src="/images/Dash256.png" alt="Dash" width={32} height={32} className="rounded-lg" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dash</h3>
                  <span className="ml-auto text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">Recommended</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">AES-256-GCM encryption built-in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">No plugins needed - works out of the box</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">One-time $14.99 - no subscriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Local-first storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Works 100% offline</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <PaymentSection />

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Common <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
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
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready for built-in encryption?"
        subheadline="No plugins. No subscriptions. Just privacy."
        buttonText="Get Dash for $14.99"
      />

      <Footer />
    </main>
  );
}
