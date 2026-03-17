'use client';

import React, { useState } from 'react';
import {
  Shield,
  ShieldOff,
  Lock,
  Unlock,
  KeyRound,
  Timer,
  Database,
  Fingerprint,
  Eye,
  Minus,
  Plus,
  Scale,
  Stethoscope,
  Building2,
  Briefcase,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';
import InlineCTA from '../../components/seo/InlineCTA';
import RelatedLinks from '../../components/seo/RelatedLinks';

export default function AppLockGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problemCards = [
    {
      icon: ShieldOff,
      title: 'UI Gate Only',
      description:
        'Most apps show a password screen on top of the app. Remove the screen and data is still plaintext on disk.',
    },
    {
      icon: Eye,
      title: 'No Disk Encryption',
      description:
        'Your notes are stored as readable text. Anyone with file system access \u2014 backups, forensic tools, malware \u2014 can read everything.',
    },
    {
      icon: Unlock,
      title: 'False Security',
      description:
        'It\u2019s a locked door with no walls. Casual snooping is blocked, but determined access bypasses it entirely.',
    },
  ];

  const howItWorksFeatures = [
    {
      icon: KeyRound,
      title: 'Real Key Derivation',
      description:
        'Your password is run through PBKDF2-SHA256 with 600,000 iterations to derive a 256-bit encryption key.',
    },
    {
      icon: Lock,
      title: 'AES-256-GCM Encryption',
      description:
        'All your pages are encrypted with authenticated encryption. Data on disk is ciphertext, not plaintext.',
    },
    {
      icon: Fingerprint,
      title: 'Touch ID Integration',
      description:
        'Your password is stored in the OS keychain, protected by the Secure Enclave. Touch ID provides real decryption, not a UI bypass.',
    },
    {
      icon: Timer,
      title: 'Auto-Lock',
      description:
        'Encrypt notes automatically after inactivity. Options from 1 minute to custom durations. Closing the app also triggers encryption.',
    },
    {
      icon: Shield,
      title: 'Encrypt on Every Save',
      description:
        'Every edit is re-encrypted before writing to disk. Plaintext only exists in memory while you\u2019re actively using the app.',
    },
    {
      icon: Database,
      title: 'Zero Knowledge',
      description:
        'Your password never leaves your device. No server, no recovery, no way for anyone else to access your data.',
    },
  ];

  const faqs = [
    {
      question: 'How is Dash\u2019s app lock different from other note apps?',
      answer:
        'Most app locks just show a password screen over the app while data stays as plaintext on disk. Dash\u2019s app lock actually encrypts all your notes using AES-256-GCM. The data on disk is unreadable without your password.',
    },
    {
      question: 'Does Touch ID actually decrypt my notes?',
      answer:
        'Yes. When you enable Touch ID, your password is stored in the OS secure keychain. Touch ID unlocks the keychain, retrieves your password, and Dash uses it to derive the encryption key. It\u2019s real decryption, not just a UI bypass.',
    },
    {
      question: 'What happens if I forget my app lock password?',
      answer:
        'Because Dash uses real encryption, there is no password recovery. If you forget your password and don\u2019t have Touch ID enabled, your encrypted notes are permanently inaccessible. Touch ID serves as a safety net.',
    },
    {
      question: 'Can I use both app lock and individual page locks?',
      answer:
        'Yes. App lock encrypts all pages without their own lock. Individually locked pages keep their independent encryption. The two layers work together without double-encrypting.',
    },
    {
      question: 'What does auto-lock do?',
      answer:
        'Auto-lock encrypts all your notes after a period of inactivity. When triggered, Dash encrypts everything in memory and writes ciphertext to disk before showing the lock screen.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Lock, text: 'App Lock Guide' }}
        headline="App Lock That Actually Encrypts"
        highlightedWord="Encrypts"
        subheadline="Most app locks just hide your data behind a screen. Dash's app lock encrypts everything on disk with AES-256-GCM."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-it-works' }}
      >
        {/* Lock screen mockup */}
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
              <span className="text-xs font-medium">AES-256 Encrypted</span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-4 gap-4">
              {/* Sidebar with blurred note titles */}
              <div className="col-span-1 bg-gray-50 dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-1.5">
                      <div className={`h-2 bg-gray-300 dark:bg-gray-600 rounded blur-[2px] ${i % 2 === 0 ? 'w-4/5' : 'w-full'}`} />
                      <div className={`h-1.5 bg-gray-200 dark:bg-gray-700 rounded blur-[2px] ${i % 3 === 0 ? 'w-3/5' : 'w-2/3'}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lock screen */}
              <div className="col-span-3 flex flex-col items-center justify-center py-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">Dash is Locked</p>

                {/* Password field */}
                <div className="w-64 h-9 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center px-3 mb-3">
                  <span className="text-gray-400 text-sm">{'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}</span>
                </div>

                {/* Touch ID button */}
                <button className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2">
                  <Fingerprint className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">Unlock with Touch ID</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - The Problem With Most App Locks */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Problem With Most <span className="text-blue-600 dark:text-blue-400">App Locks</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A password screen is not the same as encryption. Most app locks give you the appearance of security without the substance.
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
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mr-1">Ideal for</span>
            {[
              { icon: Scale, label: 'Legal professionals' },
              { icon: Stethoscope, label: 'Healthcare workers' },
              { icon: Building2, label: 'Enterprise teams' },
              { icon: Briefcase, label: 'Remote workers' },
            ].map((chip) => (
              <div key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <chip.icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How Dash's App Lock Works */}
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
              How Dash&apos;s App Lock <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real encryption at every layer. Your password derives a key, and that key encrypts everything on disk.
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

      <InlineCTA text="Lock your notes with Dash" variant="dark" />

      {/* Section 3 - The Full Encryption Flow */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Full <span className="text-blue-600 dark:text-blue-400">Encryption Flow</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three states your notes move through: setup, unlock, and lock.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Step 1 - Setup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 1</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Setup</h3>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <KeyRound className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Set Password</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <p>Generate random 128-bit salt</p>
                    <p>Derive 256-bit key via PBKDF2</p>
                    <p>Encrypt all pages, wipe plaintext</p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 - Unlock */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 2</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unlock</h3>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fingerprint className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">Password or Touch ID</p>
                  <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">Re-derive key, decrypt into memory</p>
                </div>
              </motion.div>

              {/* Step 3 - Lock */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 3</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lock</h3>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Encrypted</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded ml-auto">Secure</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <p>Encrypt all content in memory</p>
                    <p>Write ciphertext to disk</p>
                    <p>Clear plaintext from memory</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-green-600 dark:text-green-400">
                    <Shield className="w-3 h-3" />
                    <span>Manual or auto-lock</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - App Lock vs Page Lock */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              App Lock vs <span className="text-blue-600 dark:text-blue-400">Page Lock</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Two independent layers of encryption. Use both, either, or neither.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* App Lock card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 h-full">
                  <span className="inline-block text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-4">APP LOCK</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    One password encrypts everything. Automatic. Touch ID supported. Protects all pages that don&apos;t have individual locks.
                  </p>
                </div>
              </motion.div>

              {/* Page Lock card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl p-8 h-full">
                  <span className="inline-block text-xs font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-4">PAGE LOCK</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Each page gets its own password. Independent encryption key. Survives app lock being disabled. Requires separate password entry.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Callout box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center">
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  Both layers work independently. Pages with individual locks are not double-encrypted. You can use both, either, or neither.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Technical Specifications */}
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
                The cryptographic primitives and parameters behind Dash&apos;s app lock
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
                    { label: 'Key Derivation', value: 'PBKDF2-SHA256', detail: '600,000 iterations for password stretching' },
                    { label: 'Salt Size', value: '128 bits', detail: 'Unique per setup' },
                    { label: 'IV Size', value: '96 bits', detail: 'Unique per page per save' },
                    { label: 'Key Size', value: '256 bits', detail: 'Maximum AES strength' },
                    { label: 'Password Hashing', value: 'bcrypt (10 rounds)', detail: 'For password verification' },
                    { label: 'Biometric Storage', value: 'Electron safeStorage', detail: 'OS keychain integration' },
                    { label: 'Auto-Lock Options', value: '1 min \u2013 custom', detail: '1 min, 5 min, 15 min, 30 min, custom, never' },
                    { label: 'Encryption Scope', value: 'Page content', detail: 'Titles/metadata readable for sidebar' },
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
                App Lock <span className="text-blue-600 dark:text-blue-400">FAQ</span>
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
        { title: 'Secure Journal', href: '/secure-journal', description: 'Lock your private journal with biometrics.' },
        { title: 'Private Notes', href: '/private-notes', description: 'Keep your notes completely private.' },
        { title: 'How Dash Encryption Works', href: '/guides/encryption', description: 'Encryption plus app lock for maximum security.' },
        { title: 'Decoy Password Guide', href: '/guides/duress-password', description: 'Another layer of protection beyond app lock.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Lock your notes with real encryption"
        subheadline="AES-256-GCM app lock with Touch ID. $14.99 one-time purchase."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
