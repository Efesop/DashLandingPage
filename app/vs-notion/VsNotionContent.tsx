'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  CheckCircle,
  X,
  Cloud,
  CreditCard,
  Eye,
  WifiOff,
  Database,
  FileText,
  Download,
  Minus,
  Plus,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '../components/ui/button';
import FloatingOrbs from '../components/ui/FloatingOrbs';

export default function VsNotionContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const comparisonData = [
    { feature: 'Works 100% Offline', dash: true, notion: false },
    { feature: 'No Account Required', dash: true, notion: false },
    { feature: 'Zero Data Collection', dash: true, notion: false },
    { feature: 'Military-Grade Encryption', dash: true, notion: false },
    { feature: 'One-Time Payment', dash: true, notion: false },
    { feature: 'No Monthly Subscription', dash: true, notion: false },
    { feature: 'Your Data Stays Local', dash: true, notion: false },
    { feature: 'Rich Text Editor', dash: true, notion: true },
    { feature: 'Export to Multiple Formats', dash: true, notion: true },
    { feature: 'Cross-Platform', dash: true, notion: true },
  ];

  const notionPainPoints = [
    {
      icon: Cloud,
      title: 'Cloud Dependency',
      description:
        'Notion requires constant internet connection. No wifi? No notes. With Dash, your notes are always accessible, even in airplane mode.',
    },
    {
      icon: Eye,
      title: 'Data Collection Concerns',
      description:
        'Notion stores all your notes on their servers. They can be accessed, analyzed, or leaked. Dash keeps everything encrypted on your device.',
    },
    {
      icon: CreditCard,
      title: 'Recurring Subscription Costs',
      description:
        "Notion's paid plans cost $8-15/month. That is $96-180/year, forever. Dash is a one-time $14.99 payment for lifetime access.",
    },
    {
      icon: AlertTriangle,
      title: 'Vendor Lock-In Risk',
      description:
        'If Notion shuts down or changes terms, you could lose access to years of notes. With Dash, your data is always yours, locally stored.',
    },
  ];

  const migrationSteps = [
    {
      step: 1,
      title: 'Export from Notion',
      description: 'Go to Settings then Export all workspace content as Markdown and CSV.',
    },
    {
      step: 2,
      title: 'Download Dash',
      description: 'Purchase and download Dash for Mac. Install and open the app.',
    },
    {
      step: 3,
      title: 'Import Your Notes',
      description: 'Use Dash import feature to bring in your Markdown files. All formatting preserved.',
    },
    {
      step: 4,
      title: 'Encrypt and Organize',
      description: 'Add password protection to sensitive notes and organize with folders and tags.',
    },
  ];

  const faqs = [
    {
      question: 'Can I really replace Notion with Dash?',
      answer:
        'For personal note-taking, absolutely. Dash has rich text editing, organization with folders and tags, search, and multiple export formats. If you need team collaboration or databases, Notion may still be better - but for private, personal notes, Dash is the more secure choice.',
    },
    {
      question: 'How do I migrate my notes from Notion?',
      answer:
        'Notion lets you export your workspace as Markdown files. Simply export from Notion, then import those Markdown files into Dash. Your formatting will be preserved, and you can then organize and encrypt as needed.',
    },
    {
      question: 'Is Dash as feature-rich as Notion?',
      answer:
        "Dash focuses on doing one thing exceptionally well: private, encrypted note-taking. It has rich text editing, folders, tags, search, and export options. It does not have databases or team features because those require cloud infrastructure that compromises privacy.",
    },
    {
      question: 'What about syncing between devices?',
      answer:
        'Dash does not offer cloud sync because that would require storing your data on servers. Instead, you can export encrypted .dashpack files and import them on other devices. This keeps you in control of your data.',
    },
    {
      question: 'Why is Dash a one-time payment when Notion is subscription?',
      answer:
        "Notion needs ongoing revenue to maintain servers that store everyone's data. Dash runs entirely on your device with no server costs, so we can offer lifetime access for a single payment.",
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

      {/* Hero Section - Custom comparison hero */}
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
              <span className="text-sm font-medium">Privacy Comparison</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Dash vs Notion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Same note-taking power.{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                True privacy.
              </span>{' '}
              No cloud, no tracking, no subscriptions.
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
                <p className="text-xs text-green-600 dark:text-green-400">Private and Offline</p>
              </div>

              <div className="text-3xl font-bold text-gray-400">vs</div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <div className="text-3xl">📝</div>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Notion</p>
                <p className="text-xs text-gray-500">Cloud-Based</p>
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
              See exactly how Dash and Notion compare on privacy and features
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
                          <div className="text-2xl mb-1">📝</div>
                          <span className="text-sm font-semibold text-gray-500">
                            Notion
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
                          {row.notion ? (
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

      {/* Why Switch from Notion */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Users Are <span className="text-blue-600 dark:text-blue-400">Switching</span> from Notion
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Notion is great for teams, but for personal notes, these concerns are driving users to more private alternatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {notionPainPoints.map((point, index) => (
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
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
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

      {/* Migration Guide */}
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
              Migrate from Notion in <span className="text-blue-400">4 Easy Steps</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Switching to Dash is straightforward. Here is how to bring your notes over.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What You <span className="text-blue-600 dark:text-blue-400">Get</span> with Dash
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: WifiOff,
                title: 'True Offline Access',
                description: 'Notes work without internet. Always.',
              },
              {
                icon: Lock,
                title: 'Military Encryption',
                description: 'AES-256-GCM protection for sensitive notes.',
              },
              {
                icon: Database,
                title: 'Local Storage',
                description: 'Data stays on your device. Period.',
              },
              {
                icon: FileText,
                title: 'Rich Editor',
                description: 'Headers, lists, code blocks, and more.',
              },
              {
                icon: Download,
                title: 'Export Options',
                description: 'PDF, Markdown, Word, encrypted bundles.',
              },
              {
                icon: CreditCard,
                title: 'One-Time $14.99',
                description: 'No subscriptions. Lifetime access.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
              Switching <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Ready to take back your privacy?"
        subheadline="Switch from Notion in minutes."
        buttonText="Get Dash for $14.99"
      />

      <Footer />
    </main>
  );
}
