'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  CheckCircle,
  X,
  Eye,
  WifiOff,
  Database,
  FileText,
  Download,
  Minus,
  Plus,
  Target,
  BarChart3,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import CTABanner from '../components/seo/CTABanner';
import RelatedLinks from '../components/seo/RelatedLinks';
import InlineCTA from '../components/seo/InlineCTA';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '../components/ui/button';
import FloatingOrbs from '../components/ui/FloatingOrbs';

export default function VsGoogleKeepContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const comparisonData = [
    { feature: 'Works 100% Offline', dash: true, keep: false },
    { feature: 'No Account Required', dash: true, keep: false },
    { feature: 'Zero Data Collection', dash: true, keep: false },
    { feature: 'AES-256-GCM Encryption', dash: true, keep: false },
    { feature: 'No Ads or Tracking', dash: true, keep: false },
    { feature: 'Your Data Stays Local', dash: true, keep: false },
    { feature: 'Rich Text Editor', dash: true, keep: true },
    { feature: 'Cross-Platform', dash: true, keep: true },
    { feature: 'Free to Use', dash: false, keep: true },
  ];

  const googleConcerns = [
    {
      icon: Eye,
      title: 'Google Reads Your Notes',
      description:
        "Google Keep notes are stored on Google's servers and scanned for content. They can be used for ad targeting, product improvement, and more. Dash keeps notes only on your device - there's nothing for anyone to read.",
    },
    {
      icon: Target,
      title: 'Notes Feed Ad Profiles',
      description:
        "Your Google Keep notes contribute to your Google ad profile. Shopping lists, ideas, reminders - it all builds a picture of you. Dash has no ads, no profiles, no data collection.",
    },
    {
      icon: BarChart3,
      title: 'Detailed Usage Tracking',
      description:
        "Google tracks when you write, how often, what keywords you use. This metadata reveals patterns about your life. Dash has zero analytics, zero telemetry.",
    },
    {
      icon: Search,
      title: 'Potential for Government Access',
      description:
        "Data stored on Google's servers can be accessed through legal requests. With Dash, notes exist only on your encrypted device - there's no third party to subpoena.",
    },
  ];

  const dashAdvantages = [
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description: 'AES-256-GCM encryption built-in. Password-protect any sensitive note.',
    },
    {
      icon: WifiOff,
      title: 'True Offline',
      description: 'No internet ever required. Notes are always accessible.',
    },
    {
      icon: Database,
      title: 'Local Only',
      description: 'Data never leaves your device. No servers, no cloud.',
    },
    {
      icon: Shield,
      title: 'No Account',
      description: 'No sign-up, no email, no identity linked to your notes.',
    },
    {
      icon: Eye,
      title: 'Zero Tracking',
      description: 'No analytics, no telemetry, no usage monitoring.',
    },
    {
      icon: Download,
      title: 'Export Anywhere',
      description: 'PDF, Word, Markdown. Your notes, your formats.',
    },
  ];

  const faqs = [
    {
      question: "Google Keep is free. Why pay for Dash?",
      answer:
        "If a product is free, you're the product. Google Keep is free because your notes contribute to Google's advertising business. Dash costs $14.99 once because we make money from the product, not from your data. No ads, no tracking, no data mining - just a notes app that respects your privacy.",
    },
    {
      question: "Can I migrate my notes from Google Keep?",
      answer:
        "Yes. Export your Google Keep notes using Google Takeout, which provides them as a .zip file with HTML or JSON format. These can then be converted to text or Markdown and imported into Dash.",
    },
    {
      question: "Does Dash sync like Google Keep?",
      answer:
        "No - and that's by design. Syncing requires storing your data on servers, which creates privacy risks. Dash keeps notes only on your device. For moving notes between devices, export encrypted .dashpack files.",
    },
    {
      question: "Is Dash really more private than Google Keep?",
      answer:
        "Yes. Google Keep stores your notes on Google's servers where they can be accessed, analyzed, and used for advertising. Dash stores notes only on your device with optional AES-256 encryption. There are no servers, no cloud, no way for anyone to access your notes without your device and password.",
    },
    {
      question: "What about Google Keep's collaboration features?",
      answer:
        "Google Keep allows sharing lists with others through Google's servers. Dash is designed for private, personal notes. If you need to share, export to PDF or Word and send via your preferred secure method.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

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
              <span className="text-sm font-medium">Privacy Comparison</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Dash vs Google Keep
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Take notes{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                without Google watching.
              </span>{' '}
              No ads, no tracking, no data mining.
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
                <p className="text-xs text-green-600 dark:text-green-400">Private and Encrypted</p>
              </div>

              <div className="text-3xl font-bold text-gray-400">vs</div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <div className="text-3xl">📒</div>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Google Keep</p>
                <p className="text-xs text-gray-500">Cloud + Tracking</p>
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
              See exactly how Dash and Google Keep compare on privacy
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
                          <div className="text-2xl mb-1">📒</div>
                          <span className="text-sm font-semibold text-gray-500">
                            Google Keep
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
                          {row.keep ? (
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

      <InlineCTA text="Own your notes with Dash" />

      {/* Google Privacy Concerns */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="text-red-500">Google</span> Privacy Problem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Google Keep is convenient, but your notes become part of Google&apos;s data ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {googleConcerns.map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                        <concern.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {concern.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {concern.description}
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
              The <span className="text-blue-400">Dash</span> Difference
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Notes without the surveillance. Privacy without compromise.
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

      {/* Price Value */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Free vs <span className="text-blue-600 dark:text-blue-400">Private</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Google Keep is free because you pay with your data. Dash costs $14.99 once because your privacy is not for sale.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">📒</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Google Keep</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$0</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">You pay with your data</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Notes scanned for ads</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Usage tracked</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Google account required</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/images/Dash256.png" alt="Dash" width={32} height={32} className="rounded-lg" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Dash</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">$14.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">One-time, forever</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Zero data collection</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> No tracking at all</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> No account needed</li>
                </ul>
              </div>
            </div>
          </motion.div>
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

      <RelatedLinks heading="Learn More About Dash" links={[
        { title: 'Privacy-First Note Taking', href: '/guides/privacy-first-note-taking', description: 'Your notes, not Google data.' },
        { title: 'Offline-First Architecture', href: '/guides/offline-first', description: 'Works without Google servers.' },
        { title: 'Private Notes', href: '/private-notes', description: 'Truly private alternative to Keep.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to take notes without Google?"
        subheadline="$14.99 once. Privacy forever."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
