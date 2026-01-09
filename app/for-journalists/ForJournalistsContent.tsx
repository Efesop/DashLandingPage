'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  UserX,
  FileText,
  Key,
  Server,
  AlertTriangle,
  CheckCircle,
  Newspaper,
  Users,
  Database,
  Minus,
  Plus,
  UserCheck,
  Briefcase,
  Scale,
  Code,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';

export default function ForJournalistsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const journalistNeeds = [
    {
      icon: Users,
      title: 'Source Protection',
      description:
        "Your sources trust you with sensitive information. Standard note apps store data on servers that can be subpoenaed, hacked, or leaked. Dash keeps everything encrypted on your device - there is nothing to hand over.",
    },
    {
      icon: AlertTriangle,
      title: 'Legal Compliance Concerns',
      description:
        "When your notes exist only on your encrypted device, there is no third-party server to subpoena. Your notes, your device, your control - protected by the same encryption governments use.",
    },
    {
      icon: Eye,
      title: 'No Corporate Surveillance',
      description:
        "Unlike cloud-based apps, Dash never analyzes your notes, tracks your usage, or builds profiles. There is no metadata to expose what you are investigating.",
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'AES-256-GCM Encryption',
      description:
        'The gold standard in encryption. Each password-protected note uses a unique encryption key derived from your password with 200,000 PBKDF2 iterations.',
    },
    {
      icon: WifiOff,
      title: 'Offline-Only Architecture',
      description:
        'Dash never connects to the internet. There are no servers, no cloud storage, no network requests. Your notes physically cannot be remotely accessed.',
    },
    {
      icon: Server,
      title: 'No Server-Side Storage',
      description:
        "Unlike Evernote, Notion, or Google Keep, we do not have servers storing your data. There is nothing to hack, nothing to subpoena, nothing to leak.",
    },
    {
      icon: UserX,
      title: 'No Account Required',
      description:
        'Use Dash without creating an account. No email, no password stored with us, no personal information collected. Complete anonymity.',
    },
    {
      icon: Eye,
      title: 'Zero Metadata Collection',
      description:
        'We do not track what you write, when you write, or how often. No analytics, no telemetry, no usage data. Your activity is invisible.',
    },
    {
      icon: Key,
      title: 'Local Key Generation',
      description:
        'Encryption keys are generated on your device using cryptographically secure random number generation. Keys never leave your machine.',
    },
  ];

  const useCases = [
    {
      title: 'Investigative Reporting',
      description:
        'Keep investigation notes, source contacts, and sensitive documents encrypted and offline. No paper trail on corporate servers.',
    },
    {
      title: 'Source Interviews',
      description:
        'Take notes during confidential meetings knowing they are encrypted the moment you save. Share encrypted exports only when you choose.',
    },
    {
      title: 'Field Reporting',
      description:
        'Works without internet - perfect for remote locations, conflict zones, or areas with restricted connectivity.',
    },
    {
      title: 'Document Storage',
      description:
        'Keep transcripts, research, and reference materials organized and encrypted. Export to PDF or Word when needed.',
    },
  ];

  const professionals = [
    {
      icon: Newspaper,
      title: 'Investigative Reporters',
      description: 'Protect sources and investigations from surveillance',
    },
    {
      icon: Scale,
      title: 'Legal Professionals',
      description: 'Maintain attorney-client privilege with encrypted notes',
    },
    {
      icon: UserCheck,
      title: 'Human Rights Activists',
      description: 'Keep sensitive communications away from prying eyes',
    },
    {
      icon: Code,
      title: 'Security Researchers',
      description: 'Store vulnerability research securely and offline',
    },
  ];

  const faqs = [
    {
      question: 'Can my notes be subpoenaed if they are in Dash?',
      answer:
        "Dash stores notes only on your local device with optional AES-256 encryption. Unlike cloud-based apps where a third party holds your data, there is no company server to subpoena. Your encrypted notes can only be accessed with your password, which you are not obligated to provide in many jurisdictions (consult legal counsel for your specific situation).",
    },
    {
      question: 'How is this different from using encrypted cloud storage?',
      answer:
        "Encrypted cloud storage still sends your data to external servers, creating metadata trails and potential access points. Dash never transmits data anywhere - your notes exist only on your device. There is no network traffic to intercept, no server to hack, no company that can be compelled to hand over data.",
    },
    {
      question: 'What happens if I lose my device?',
      answer:
        'Password-protected notes remain encrypted. Without your password, they are unreadable - even to forensic analysis. We recommend keeping encrypted backups (.dashpack files) in a secure location. Non-encrypted notes would be accessible, so we recommend encrypting sensitive material.',
    },
    {
      question: 'Can I share notes securely with colleagues?',
      answer:
        'Yes. Export notes as encrypted .dashpack files that can only be opened with Dash and your chosen password. Share via secure channels of your choice. The recipient needs Dash and the password to decrypt.',
    },
    {
      question: 'Is Dash open source? Can I verify the security claims?',
      answer:
        'Yes, Dash is fully open source. The complete source code is available on GitHub for security researchers, journalists, or anyone to audit. We believe transparency is essential for trust in security tools.',
    },
    {
      question: 'Does Dash work on mobile for field reporting?',
      answer:
        'Dash is available as a Progressive Web App (PWA) that works on iOS and Android browsers. The native Mac app provides the best experience with automatic updates. All versions maintain the same security standards.',
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
        badge={{ icon: Newspaper, text: 'For Journalists' }}
        headline="Protect Your Sources. Protect Your Notes."
        highlightedWord="Protect"
        subheadline="Military-grade encrypted notes that never touch the cloud. No servers to subpoena, no data to leak, no compromises on press freedom."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See security details', href: '#security' }}
      >
        {/* App interface mockup with sidebar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
              <WifiOff className="w-3 h-3" />
              <span className="text-xs font-medium">Offline Mode</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar - note list */}
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">ENCRYPTED NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Lock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Source A Interview</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Whistleblower Docs</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Investigation Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Story Draft</span>
                </div>
              </div>
            </div>

            {/* Note content */}
            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Source A Interview
                </h3>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-medium">Protected</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p className="text-gray-500 text-xs">January 9, 2026 • 2:30 PM</p>
                <p><strong>Contact:</strong> Anonymous government official</p>
                <p><strong>Topic:</strong> Budget allocation irregularities</p>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">Key points from meeting:</p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    <li>• Documents show discrepancies in Q3...</li>
                    <li>• Follow up needed on department...</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>AES-256</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3 h-3" />
                  <span>Local only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3 h-3" />
                  <span>No cloud access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Journalists Need Dash */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Journalists <span className="text-blue-600 dark:text-blue-400">Need</span> Dash
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Standard note apps put your sources and your work at risk. Here is why privacy-first tools matter for journalism.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journalistNeeds.map((need, index) => (
              <motion.div
                key={need.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <need.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
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

      {/* Security Features Deep Dive */}
      <section id="security" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Security <span className="text-blue-400">Details</span> for the Technical
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We know journalists need to verify security claims. Here is exactly how Dash protects your notes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
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

      {/* Technical Specifications - Separate Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-blue-600 dark:text-blue-400">Specifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              For security researchers and technical journalists who need to audit our claims
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Encryption & Security Specs</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Encryption Algorithm', value: 'AES-256-GCM', detail: 'Authenticated encryption with associated data' },
                    { label: 'Key Derivation Function', value: 'PBKDF2-SHA256', detail: '200,000 iterations for password stretching' },
                    { label: 'Random Number Generation', value: 'crypto.getRandomValues', detail: 'Cryptographically secure PRNG' },
                    { label: 'Storage Location', value: '~/Library/Application Support/Dash/', detail: 'Local device only, no cloud sync' },
                    { label: 'Network Requests', value: 'Zero', detail: 'Completely offline, no telemetry' },
                    { label: 'Source Code', value: 'Open Source (GitHub)', detail: 'Fully auditable by security researchers' },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{spec.label}</span>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 font-mono mb-1">{spec.value}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{spec.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
              How Journalists <span className="text-blue-600 dark:text-blue-400">Use</span> Dash
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
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
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

      {/* Trusted by Professionals - Improved */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for <span className="text-blue-400">Privacy-First</span> Professionals
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Dash is designed for anyone who needs true privacy: investigative journalists, lawyers, activists, researchers, and privacy advocates who refuse to compromise on security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {professionals.map((professional, index) => (
              <motion.div
                key={professional.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center h-full hover:border-blue-500/30 transition-colors">
                  <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <professional.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {professional.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {professional.description}
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
              Security <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Your sources deserve protection."
        subheadline="Get military-grade encryption for $14.99."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
