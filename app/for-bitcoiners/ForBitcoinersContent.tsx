'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  CheckCircle,
  Minus,
  Plus,
  Database,
  Key,
  Code,
  Bitcoin,
  UserX,
  FileKey,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';

export default function ForBitcoinersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const bitcoinerNeeds = [
    {
      icon: Key,
      title: 'Secure Seed Phrase Notes',
      description:
        "Need to store seed phrase hints, wallet notes, or recovery instructions? AES-256 encryption means even if someone accesses your device, your crypto notes stay protected.",
    },
    {
      icon: Eye,
      title: 'True Privacy Alignment',
      description:
        "You already value privacy - that's why you use Bitcoin. Dash shares those values: no accounts, no tracking, no cloud, no data collection. Your notes, your device, your control.",
    },
    {
      icon: FileKey,
      title: 'Zero Trust Architecture',
      description:
        "Your notes never touch any server. No cloud sync, no backup services, no third-party access. Just your encrypted files on your device. Verify the code yourself - it's open source.",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description: 'Same encryption standard used by governments and banks. Password-protect any sensitive note.',
    },
    {
      icon: WifiOff,
      title: '100% Offline',
      description: 'No internet required. No network requests. Your notes never touch any server.',
    },
    {
      icon: UserX,
      title: 'No Account Required',
      description: 'No email, no sign-up, no identity verification. Complete anonymity.',
    },
    {
      icon: Database,
      title: 'Local Storage Only',
      description: 'Notes stored on your device. No cloud, no sync servers, no third-party access.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Full source code on GitHub. Verify the security claims yourself - trust but verify.',
    },
    {
      icon: Shield,
      title: 'One-Time Purchase',
      description: 'Pay once, own forever. No subscriptions, no recurring fees, no ongoing data collection.',
    },
  ];

  const useCases = [
    {
      title: 'Wallet Documentation',
      description: 'Keep notes about your wallet setup, derivation paths, and configuration - encrypted.',
    },
    {
      title: 'Recovery Instructions',
      description: 'Store encrypted instructions for family members to recover your Bitcoin if needed.',
    },
    {
      title: 'Transaction Notes',
      description: 'Document important transactions, counterparties, and UTXOs for your records.',
    },
    {
      title: 'Security Procedures',
      description: 'Keep your operational security procedures and checklists in one encrypted place.',
    },
  ];

  const privacyComparison = [
    { feature: 'No Account Required', dash: true, others: false },
    { feature: 'Zero Data Collection', dash: true, others: false },
    { feature: '100% Offline Operation', dash: true, others: false },
    { feature: 'Open Source', dash: true, others: false },
    { feature: 'Local-Only Storage', dash: true, others: false },
    { feature: 'Military-Grade Encryption', dash: true, others: false },
    { feature: 'One-Time Purchase (No Subscriptions)', dash: true, others: false },
  ];

  const faqs = [
    {
      question: 'Is this safe for storing seed phrases?',
      answer:
        "We recommend never storing your actual seed phrase digitally. However, Dash is excellent for storing hints, partial information, or instructions that could help you remember - encrypted with AES-256. The encryption is the same standard used by governments.",
    },
    {
      question: 'Why should I trust this app?',
      answer:
        "Don't trust - verify. Dash is fully open source on GitHub. The encryption uses standard AES-256-GCM with PBKDF2 key derivation. Your note data is never transmitted anywhere. The code is auditable.",
    },
    {
      question: 'What if the company disappears?',
      answer:
        "Your notes are stored locally on your device as encrypted files. They don't depend on any server or service. Even if Dash disappeared tomorrow, your files would still exist on your machine. The code is open source if you ever need to build it yourself.",
    },
    {
      question: 'Can I run this air-gapped?',
      answer:
        'Yes. Once installed, Dash never needs internet access. You can use it on a completely air-gapped machine. Notes are stored locally and encrypted locally.',
    },
    {
      question: 'How is the encryption implemented?',
      answer:
        'Dash uses AES-256-GCM encryption with PBKDF2 key derivation (600,000 iterations). Each note can have its own password. The encryption happens entirely on your device - no keys are ever transmitted anywhere.',
    },
    {
      question: 'Is there any telemetry or analytics?',
      answer:
        'Zero analytics or telemetry. Dash collects no data - no analytics, no crash reporting, no tracking. The Mac app checks for updates only, but your notes data is never transmitted. You can verify this by monitoring network traffic or reviewing the open source code.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Bitcoin, text: 'For Bitcoiners' }}
        headline="Privacy-First Notes. Built for Bitcoiners."
        highlightedWord="Bitcoiners"
        subheadline="No accounts, no cloud, no tracking. Just encrypted notes you control. The same privacy values you expect from Bitcoin."
        primaryCTA={{ text: 'Get Dash' }}
        secondaryCTA={{ text: 'See features', href: '#features' }}
      >
        {/* Bitcoin-themed mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">100% Offline</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">ENCRYPTED NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <Lock className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Wallet Setup</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Recovery Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">OPSEC Checklist</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Node Config</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Wallet Setup</h3>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-medium">AES-256</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p><strong>Hardware Wallet:</strong> Coldcard Mk4</p>
                <p><strong>Derivation Path:</strong> m/84&apos;/0&apos;/0&apos;</p>
                <p><strong>Passphrase Hint:</strong> [Encrypted]</p>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    Your crypto notes, encrypted locally, never touching any server...
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <WifiOff className="w-3 h-3" />
                  <span>Offline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Code className="w-3 h-3" />
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Bitcoiners Choose Dash */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for <span className="text-orange-500">Bitcoin</span> Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Privacy is not a feature. It is a right. Dash is built on the same principles.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bitcoinerNeeds.map((need, index) => (
              <motion.div
                key={need.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <need.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {need.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {need.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Comparison */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy <span className="text-orange-500">Comparison</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              How Dash compares to typical note apps on privacy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <GlassCard variant="light" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        Privacy Feature
                      </th>
                      <th className="px-6 py-4 text-center">
                        <span className="text-sm font-bold text-orange-500">Dash</span>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-gray-500">Most Apps</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {privacyComparison.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-red-500">✗</span>
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

      {/* Features */}
      <section id="features" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Features <span className="text-orange-400">Bitcoiners</span> Love
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Use <span className="text-orange-500">Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {useCase.description}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Common <span className="text-orange-500">Questions</span>
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
                className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-orange-500" />
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
        headline="Your notes. Your device. Your control."
        subheadline="No accounts. No tracking. No cloud."
        buttonText="Get Dash"
      />

      <Footer />
    </main>
  );
}
