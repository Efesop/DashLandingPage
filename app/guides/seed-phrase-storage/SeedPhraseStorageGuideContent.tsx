'use client';

import React, { useState } from 'react';
import {
  Coins,
  FileText,
  Cloud,
  Shield,
  Grid3x3,
  CheckCircle,
  Keyboard,
  Lock,
  Copy,
  ArrowDownUp,
  Fingerprint,
  ShieldAlert,
  HardDrive,
  Minus,
  Plus,
  CreditCard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';
import InlineCTA from '../../components/seo/InlineCTA';

export default function SeedPhraseStorageGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problemCards = [
    {
      icon: FileText,
      title: 'Paper Is Fragile',
      description:
        'Paper can be lost, damaged by water or fire, or found by someone else. No encryption, no backup, no validation.',
    },
    {
      icon: Cloud,
      title: 'Cloud Is Risky',
      description:
        'Storing seed phrases in cloud note apps means trusting their servers, their employees, and their security against breaches.',
    },
    {
      icon: Shield,
      title: 'Dash Is Different',
      description:
        'Local-only storage with AES-256 encryption. Your seed phrase never touches a network. BIP-39 validation prevents typos.',
    },
  ];

  const howItWorksFeatures = [
    {
      icon: Grid3x3,
      title: 'Numbered Grid',
      description:
        'A clean 4x3 or 4x6 grid layout displays your words numbered 1-12 or 1-24. Visual and easy to verify.',
    },
    {
      icon: CheckCircle,
      title: 'BIP-39 Validation',
      description:
        'Each word is validated against the official 2048-word BIP-39 English wordlist. Green checkmark for valid, red X for typos.',
    },
    {
      icon: Keyboard,
      title: 'Smart Input',
      description:
        'Type words individually, paste all at once, or use Tab/Enter to navigate between fields. Words auto-distribute on paste.',
    },
    {
      icon: Lock,
      title: 'Page Encryption',
      description:
        'Lock the page with a password to encrypt the seed phrase with AES-256-GCM. Unreadable without your password.',
    },
    {
      icon: Copy,
      title: 'Secure Copy',
      description:
        'Copy All button copies the full phrase. Clipboard is automatically cleared after 30 seconds to prevent exposure.',
    },
    {
      icon: ArrowDownUp,
      title: 'Export Support',
      description:
        'Included in all 8 export formats — PDF, Markdown, Plain Text, RTF, DOCX, CSV, JSON, XML.',
    },
  ];

  const securityRecommendations = [
    {
      icon: Lock,
      title: 'Lock the Page',
      description:
        'Use page encryption to password-protect any page with a seed phrase. AES-256-GCM encryption.',
    },
    {
      icon: Fingerprint,
      title: 'Enable App Lock',
      description:
        'Set up app lock with a strong master password so all notes are encrypted at rest.',
    },
    {
      icon: ShieldAlert,
      title: 'Set Up Duress Password',
      description:
        'If concerned about coercion, set a duress password that wipes or hides data on entry.',
    },
    {
      icon: HardDrive,
      title: 'Keep Physical Backup',
      description:
        'Don\'t rely on digital storage alone. Keep a physical backup in a secure location as well.',
    },
  ];

  const faqs = [
    {
      question: 'Is it safe to store seed phrases digitally?',
      answer:
        'In Dash, yes. Your seed phrase is stored locally with no cloud sync or network requests. Combined with page encryption (AES-256-GCM), the data on disk is unreadable without your password.',
    },
    {
      question: 'What is BIP-39 validation?',
      answer:
        'BIP-39 is the Bitcoin standard defining 2048 valid mnemonic words. Dash validates each word against this list, showing green checkmarks for valid words and red indicators for typos.',
    },
    {
      question: 'Can I store 12-word and 24-word phrases?',
      answer:
        'Yes. Toggle between 12 and 24-word formats using the button in the block header.',
    },
    {
      question: 'How should I protect my seed phrase in Dash?',
      answer:
        'Lock the page with a password, enable app lock for full-device encryption, and consider setting up a duress password for additional coercion protection.',
    },
    {
      question: 'Can I export my seed phrase?',
      answer:
        'Yes. Seed phrases are included in all 8 export formats. They render as numbered lists in document formats like PDF and Markdown.',
    },
  ];

  const seedWords = [
    'abandon', 'ability', 'able', 'about',
    'above', 'absent', 'absorb', 'abstract',
    'absurd', 'abuse', 'access', 'accident',
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Coins, text: 'Seed Phrase Guide' }}
        headline="Secure Seed Phrase Storage"
        highlightedWord="Seed Phrase"
        subheadline="Store cryptocurrency recovery phrases in an encrypted, offline vault with BIP-39 validation. No cloud, no risk."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Learn how it works', href: '#how-it-works' }}
      >
        {/* Seed phrase grid mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <Coins className="w-3 h-3" />
              <span className="text-xs font-medium">Seed Phrase</span>
            </div>
          </div>

          <div className="p-6">
            {/* 4x3 seed phrase grid */}
            <div className="grid grid-cols-4 gap-3">
              {seedWords.map((word, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-2.5 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-gray-400 w-4 text-right">{index + 1}.</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{word}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Encryption badge */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">AES-256 Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - The Problem With Seed Phrase Storage */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Problem With <span className="text-blue-600 dark:text-blue-400">Seed Phrase Storage</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Traditional methods of storing seed phrases are either fragile, insecure, or both.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problemCards.map((item, index) => (
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

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-6xl mx-auto">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mr-1">Essential for</span>
            {[
              { icon: Coins, label: 'Crypto holders' },
              { icon: CreditCard, label: 'DeFi users' },
              { icon: Shield, label: 'Security-conscious traders' },
            ].map((chip) => (
              <div key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <chip.icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How It Works */}
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
              How It <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A purpose-built seed phrase block with validation, encryption, and secure clipboard handling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorksFeatures.map((feature, index) => (
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

      <InlineCTA text="Store seed phrases securely — $14.99" variant="dark" />

      {/* Section 3 - Security Recommendations */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Security <span className="text-blue-600 dark:text-blue-400">Recommendations</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Best practices for protecting seed phrases stored in Dash.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {securityRecommendations.map((item, index) => (
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

      {/* Section 4 - How It's Stored */}
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
                How It&apos;s <span className="text-blue-600 dark:text-blue-400">Stored</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Seed phrases are stored as structured JSON, encrypted when the page is locked.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Data Structure</h3>
                </div>
              </div>

              <div className="p-6">
                <pre className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                  <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`{
  "type": "seedPhrase",
  "data": {
    "words": ["abandon", "ability", "able", ...],
    "count": 12
  }
}`}
                  </code>
                </pre>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      When the page is locked, this entire JSON structure is encrypted with AES-256-GCM. The data on disk becomes unreadable ciphertext that can only be decrypted with the correct password.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Each word is validated against the BIP-39 wordlist before storage. Invalid words are flagged immediately so you can correct typos before locking the page.
                    </p>
                  </div>
                </div>
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
                Seed Phrase <span className="text-blue-600 dark:text-blue-400">FAQ</span>
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
        headline="Protect your crypto recovery phrases"
        subheadline="BIP-39 validated seed phrase storage with AES-256 encryption. $14.99 one-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
