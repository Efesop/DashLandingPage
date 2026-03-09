'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Key,
  KeyRound,
  Timer,
  Database,
  Fingerprint,
  Code,
  AlertTriangle,
  WifiOff,
  Minus,
  Plus,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';
import InlineCTA from '../../components/seo/InlineCTA';

export default function EncryptionGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const encryptionTypes = [
    {
      icon: Shield,
      title: 'Symmetric Encryption',
      description:
        'Same key encrypts and decrypts. Faster, used for data at rest. AES and ChaCha20 are examples.',
    },
    {
      icon: Key,
      title: 'Asymmetric Encryption',
      description:
        'Uses public + private key pair. Slower, used for key exchange. RSA and ECDSA are examples.',
    },
    {
      icon: Lock,
      title: 'Why AES-256-GCM?',
      description:
        'Proven security with decades of cryptanalysis. Hardware-accelerated. Provides both confidentiality and authentication.',
    },
  ];

  const pbkdf2Features = [
    {
      icon: KeyRound,
      title: 'Password to Key',
      description:
        'Your password cannot be used directly as an encryption key. PBKDF2 transforms it into a cryptographically strong 256-bit key.',
    },
    {
      icon: Timer,
      title: '600,000 Iterations',
      description:
        'Each iteration makes key derivation slower intentionally. A legitimate user waits milliseconds; an attacker trying billions of guesses waits years.',
    },
    {
      icon: Database,
      title: 'Unique Salt Per Page',
      description:
        'Each encrypted page gets a random 128-bit salt, preventing rainbow table attacks and ensuring identical passwords produce different keys.',
    },
    {
      icon: Shield,
      title: 'SHA-256 Hash Function',
      description:
        'PBKDF2 uses SHA-256 as its underlying hash function, a NIST-approved standard used across security-critical applications.',
    },
    {
      icon: Fingerprint,
      title: 'WebCrypto API',
      description:
        'Dash uses the browser-native WebCrypto API for all cryptographic operations - audited, hardware-accelerated, and battle-tested.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description:
        'Every line of encryption code is publicly auditable on GitHub. Security through transparency, not obscurity.',
    },
  ];

  const whatThisMeans = [
    {
      icon: Lock,
      title: 'No Master Password',
      description:
        'Each page can have its own password. No single point of failure.',
    },
    {
      icon: AlertTriangle,
      title: 'No Password Recovery',
      description:
        'Your password never leaves your device. Nobody can reset it. This is a feature - only you can read your notes.',
    },
    {
      icon: WifiOff,
      title: 'No Cloud Dependency',
      description:
        'Encryption works fully offline. No internet, no server, no account needed.',
    },
  ];

  const faqs = [
    {
      question: 'What is AES-256-GCM encryption?',
      answer:
        'AES-256-GCM is a symmetric encryption algorithm that uses 256-bit keys and provides both confidentiality and authentication. It is the same standard used by governments and banks worldwide to protect classified and financial data.',
    },
    {
      question: 'What is PBKDF2 key derivation?',
      answer:
        'PBKDF2 (Password-Based Key Derivation Function 2) transforms your password into a strong encryption key using 600,000 iterations of SHA-256. This process makes brute-force attacks computationally impractical, even with modern hardware.',
    },
    {
      question: 'What does zero-knowledge mean?',
      answer:
        'Zero-knowledge means the developer cannot access your data. All encryption happens on your device, and your password is never stored or transmitted. Even if compelled, there is nothing to hand over.',
    },
    {
      question: 'Can I recover notes if I forget the password?',
      answer:
        'No. This is by design. There is no password recovery mechanism, which means nobody - including the developer - can bypass your encryption. We recommend using a password manager to store your passwords securely.',
    },
    {
      question: 'Is AES-256 really unbreakable?',
      answer:
        'With 2^256 possible keys, brute-forcing AES-256 is impossible with current or foreseeable technology. The algorithm has withstood decades of cryptanalysis with no practical attacks discovered.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Lock, text: 'Encryption Guide' }}
        headline="What Is AES-256 Encryption?"
        highlightedWord="Encryption"
        subheadline="Learn how encryption works and how Dash uses AES-256-GCM, PBKDF2 key derivation, and zero-knowledge architecture to keep your notes private."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Learn how it works', href: '#how-it-works' }}
      >
        {/* Encryption visualization mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">Encryption Guide</span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Plaintext */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Plaintext</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full" />
                  <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-4/5" />
                  <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/5" />
                </div>
                <p className="text-xs text-gray-400 mt-3">Readable content</p>
              </div>

              {/* Arrow + key */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <KeyRound className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-xs font-medium">AES-256</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-400">PBKDF2 derived key</span>
              </div>

              {/* Ciphertext */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Ciphertext</span>
                </div>
                <div className="space-y-2 font-mono text-xs text-green-700 dark:text-green-400 opacity-70">
                  <p>a7f3e2b1...</p>
                  <p>9c4d8f6e...</p>
                  <p>2b1a7f3e...</p>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-green-600 dark:text-green-400">
                  <Shield className="w-3 h-3" />
                  <span>Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - What Is Encryption? */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Is <span className="text-blue-600 dark:text-blue-400">Encryption</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Encryption transforms readable data into unreadable ciphertext. Only someone with the correct key can reverse the process.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {encryptionTypes.map((item, index) => (
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

      {/* Section 2 - PBKDF2 Key Derivation */}
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
              PBKDF2 <span className="text-blue-400">Key Derivation</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Your password alone is not an encryption key. Key stretching transforms it into one that&apos;s cryptographically strong.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pbkdf2Features.map((feature, index) => (
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

      <InlineCTA text="Get AES-256 encryption — $14.99" variant="dark" />

      {/* Section 3 - How Dash Encrypts */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Dash <span className="text-blue-600 dark:text-blue-400">Encrypts</span> Your Notes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A three-step process that turns your password into military-grade protection.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 1</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Set Password</h3>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <KeyRound className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Enter Password</span>
                  </div>
                  <div className="h-9 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center px-3">
                    <span className="text-gray-400 text-sm">{'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">Enter a password for this page</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 2</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Derivation</h3>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <KeyRound className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">PBKDF2-SHA256</p>
                  <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">600K iterations + unique salt</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">STEP 3</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AES-256-GCM</h3>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Encrypted</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded ml-auto">GCM</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs text-green-700 dark:text-green-400 opacity-70">
                    <p>derived key + random IV</p>
                    <p>confidentiality + auth</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-green-600 dark:text-green-400">
                    <Shield className="w-3 h-3" />
                    <span>Authenticated encryption</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Technical Specifications */}
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
                The cryptographic primitives and parameters Dash uses under the hood
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
                    { label: 'Algorithm', value: 'AES-256-GCM', detail: 'Authenticated encryption with associated data' },
                    { label: 'Key Derivation', value: 'PBKDF2-SHA256', detail: '600,000 iterations for password stretching' },
                    { label: 'Salt Size', value: '128 bits', detail: 'Prevents rainbow table attacks' },
                    { label: 'IV Size', value: '96 bits', detail: 'GCM recommended nonce size' },
                    { label: 'Key Size', value: '256 bits', detail: 'Maximum AES strength' },
                    { label: 'Password Hashing', value: 'bcrypt', detail: '10 rounds for verification' },
                    { label: 'Crypto Implementation', value: 'WebCrypto API', detail: 'Browser-native, hardware-accelerated' },
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

      {/* Section 5 - What This Means For You */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What This Means <span className="text-blue-600 dark:text-blue-400">For You</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Strong encryption comes with trade-offs. Here is what you should know.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatThisMeans.map((item, index) => (
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
                Encryption <span className="text-blue-600 dark:text-blue-400">FAQ</span>
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
        headline="Protect your notes with real encryption"
        subheadline="AES-256-GCM encryption for $14.99. One-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
