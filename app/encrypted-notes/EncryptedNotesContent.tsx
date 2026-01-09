'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  Key,
  FileText,
  CheckCircle,
  AlertTriangle,
  Database,
  Code,
  WifiOff,
  Minus,
  Plus,
  KeyRound,
  ShieldCheck,
  LockKeyhole,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';

export default function EncryptedNotesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyEncryptionMatters = [
    {
      icon: AlertTriangle,
      title: 'Data Breaches Are Everywhere',
      description:
        'In 2024 alone, billions of records were exposed. Cloud-based note apps are prime targets because they store sensitive personal information on servers.',
    },
    {
      icon: ShieldCheck,
      title: 'Privacy Is a Fundamental Right',
      description:
        'Your thoughts, ideas, and personal information deserve protection. Encryption ensures only you can access your notes - not companies, hackers, or governments.',
    },
    {
      icon: LockKeyhole,
      title: 'Your Thoughts Deserve Protection',
      description:
        'From personal journals to sensitive work notes, encryption gives you the confidence that your private thoughts stay private, no matter what.',
    },
  ];

  const encryptionFeatures = [
    {
      icon: Lock,
      title: 'AES-256-GCM Encryption',
      description:
        'The same encryption standard used by banks and governments. Each note is encrypted with a unique key derived from your password.',
    },
    {
      icon: Key,
      title: 'PBKDF2 Key Derivation',
      description:
        '200,000 iterations of password stretching makes brute-force attacks impractical. Your password becomes an uncrackable encryption key.',
    },
    {
      icon: Database,
      title: 'Local Key Generation',
      description:
        'Encryption keys are generated on your device using cryptographically secure random numbers. Keys never leave your machine.',
    },
    {
      icon: Eye,
      title: 'Zero-Knowledge Architecture',
      description:
        'We have no servers, no accounts, no way to see your notes. Even if someone demanded your data, we have nothing to give.',
    },
    {
      icon: Code,
      title: 'Open Source Verification',
      description:
        'Do not trust us - verify. Our entire codebase is open source on GitHub. Security researchers can audit every line.',
    },
    {
      icon: FileText,
      title: 'Encrypted Export',
      description:
        'Export notes as encrypted .dashpack files. Share securely between devices or create encrypted backups only you can open.',
    },
  ];

  const faqs = [
    {
      question: 'What encryption algorithm does Dash use?',
      answer:
        'Dash uses AES-256-GCM (Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode). This is the same encryption standard used by the US government for classified information and by banks worldwide.',
    },
    {
      question: 'How are encryption keys generated?',
      answer:
        'When you set a password on a note, Dash uses PBKDF2-SHA256 with 200,000 iterations to derive an encryption key from your password. This process, combined with a unique salt for each note, makes brute-force attacks computationally impractical.',
    },
    {
      question: 'Can Dash decrypt my notes?',
      answer:
        'No. Dash uses zero-knowledge architecture. We have no servers storing your data and no way to access your encryption keys. Your encrypted notes can only be decrypted with your password, which only you know.',
    },
    {
      question: 'What happens if I forget my encryption password?',
      answer:
        'If you forget your password, there is no way to recover encrypted notes. This is by design - it means no one else can recover them either. We recommend using a password manager and keeping secure backups.',
    },
    {
      question: 'Are all notes encrypted by default?',
      answer:
        'No, encryption is opt-in per note. This lets you keep casual notes quick to access while protecting sensitive information with a password. You choose which notes need encryption.',
    },
    {
      question: 'Can I verify Dash encryption is secure?',
      answer:
        'Yes. Dash is fully open source. You can audit the encryption implementation on GitHub, or have a security professional review it. We believe transparency is essential for trust in security tools.',
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
      <SEOHero
        badge={{ icon: Lock, text: 'Military-Grade Encryption' }}
        headline="Notes Protected by Real Encryption."
        highlightedWord="Encryption"
        subheadline="AES-256-GCM encryption keeps your sensitive notes unreadable to anyone but you. No backdoors, no master keys, no compromises."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Learn how it works', href: '#how-it-works' }}
      >
        {/* App mockup showing encryption */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">AES-256 Protected</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Bank Details</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Medical Records</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Passwords</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Shopping List</span>
                </div>
              </div>
            </div>

            {/* Password prompt overlay */}
            <div className="flex-1 p-5 relative">
              <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600 p-6 w-72">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <KeyRound className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Enter Password</h4>
                      <p className="text-xs text-gray-500">This note is encrypted</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-9 bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500 flex items-center px-3">
                      <span className="text-gray-400 text-sm">••••••••••••</span>
                    </div>
                    <button className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Unlock Note
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    AES-256-GCM encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Encryption Matters */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Note <span className="text-blue-600 dark:text-blue-400">Encryption</span> Matters
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your notes contain your most personal thoughts and sensitive information. Here is why encryption is essential.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyEncryptionMatters.map((item, index) => (
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

      {/* How Dash Encrypts */}
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
              How Dash <span className="text-blue-400">Encrypts</span> Your Notes
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Military-grade encryption with zero-knowledge architecture. Here is exactly how we protect your data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {encryptionFeatures.map((feature, index) => (
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

      {/* Encryption Flow Mockup */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Encrypt Any Note in <span className="text-blue-600 dark:text-blue-400">One Click</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Selective encryption lets you protect sensitive notes while keeping others easily accessible.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 1</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Regular Note</h3>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Meeting Notes</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  </div>
                  <p className="text-xs text-gray-400 mt-3">Not encrypted</p>
                </div>
              </motion.div>

              {/* Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 2</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Click to Encrypt</h3>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">Set a password</p>
                  <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">AES-256-GCM encryption</p>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 3</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Protected Note</h3>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Meeting Notes</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded ml-auto">Encrypted</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-green-200/50 dark:bg-green-900/30 rounded w-full blur-sm" />
                    <div className="h-2 bg-green-200/50 dark:bg-green-900/30 rounded w-4/5 blur-sm" />
                    <div className="h-2 bg-green-200/50 dark:bg-green-900/30 rounded w-3/4 blur-sm" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-green-600 dark:text-green-400">
                    <Shield className="w-3 h-3" />
                    <span>Password required to view</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
                Technical <span className="text-blue-600 dark:text-blue-400">Specifications</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                For security researchers and technical users who want to verify our encryption
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Encryption Details</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Encryption Algorithm', value: 'AES-256-GCM', detail: 'Authenticated encryption with associated data' },
                    { label: 'Key Derivation', value: 'PBKDF2-SHA256', detail: '200,000 iterations for password stretching' },
                    { label: 'Random Generation', value: 'crypto.getRandomValues', detail: 'Cryptographically secure PRNG' },
                    { label: 'Key Storage', value: 'Local device only', detail: 'Keys never transmitted anywhere' },
                    { label: 'Salt', value: 'Unique per note', detail: 'Prevents rainbow table attacks' },
                    { label: 'Source Code', value: 'Open source', detail: 'Fully auditable on GitHub' },
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
                Encryption <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Encrypt your notes today"
        subheadline="Military-grade protection for $14.99. One-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
