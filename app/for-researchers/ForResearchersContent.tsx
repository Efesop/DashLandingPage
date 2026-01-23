'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  Microscope,
  FileText,
  CheckCircle,
  Minus,
  Plus,
  Database,
  ClipboardCheck,
  Users,
  Server,
  Code,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';

export default function ForResearchersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const researcherNeeds = [
    {
      icon: ClipboardCheck,
      title: 'Data Protection Compliance',
      description:
        "Research often involves sensitive data that requires protection. Dash's local-only storage with AES-256 encryption helps meet institutional data security requirements without relying on third-party cloud services.",
    },
    {
      icon: Users,
      title: 'Participant Privacy',
      description:
        "Interview notes, observations, and participant data deserve protection. With Dash, this information never leaves your device and can be encrypted with military-grade security.",
    },
    {
      icon: Server,
      title: 'No Third-Party Servers',
      description:
        "Many institutions restrict where research data can be stored. Dash stores everything locally - there are no external servers involved, simplifying compliance.",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description: 'Password-protect sensitive research notes. Same encryption standard used by government agencies.',
    },
    {
      icon: WifiOff,
      title: 'Offline Operation',
      description: 'Works in the field, in the lab, anywhere. No network requests, no cloud dependency.',
    },
    {
      icon: Database,
      title: 'Local Storage Only',
      description: 'Data stays on your device. No external servers, no third-party access.',
    },
    {
      icon: Eye,
      title: 'Zero Data Collection',
      description: 'No analytics, no telemetry, no usage tracking. Your research activity is invisible.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Full source code available for security audit. Verify the claims yourself.',
    },
    {
      icon: FileText,
      title: 'Export Options',
      description: 'Export to Word, PDF, or Markdown for papers and reports. Keep originals encrypted.',
    },
  ];

  const useCases = [
    {
      title: 'Interview Notes',
      description: 'Keep participant interview transcripts and notes encrypted. Protect subject confidentiality.',
    },
    {
      title: 'Field Observations',
      description: 'Record sensitive observations offline. Works in remote locations without connectivity.',
    },
    {
      title: 'Literature Notes',
      description: 'Organize research papers, citations, and reading notes. Search across all your notes instantly.',
    },
    {
      title: 'Lab Notebooks',
      description: 'Document experiments and findings. Export to standard formats for publication.',
    },
    {
      title: 'Grant Proposals',
      description: 'Draft proposals privately before submission. Protect preliminary ideas.',
    },
    {
      title: 'Peer Review Notes',
      description: 'Keep confidential review comments encrypted and organized.',
    },
  ];

  const compliancePoints = [
    {
      title: 'No Cloud Transmission',
      description: 'Research data never leaves your device. No network requests are made.',
    },
    {
      title: 'Strong Encryption',
      description: 'AES-256-GCM with PBKDF2 key derivation (600,000 iterations).',
    },
    {
      title: 'No Account Required',
      description: 'No personal information collected. No identity linked to data.',
    },
    {
      title: 'Auditable Code',
      description: 'Open source application. Security can be independently verified.',
    },
  ];

  const faqs = [
    {
      question: 'Is Dash suitable for IRB-regulated research?',
      answer:
        "Dash's local-only storage and strong encryption can help meet many IRB data security requirements. Since data never leaves your device and can be encrypted, it provides a high level of protection. However, always consult your IRB and institution's specific requirements.",
    },
    {
      question: 'Can I use this for HIPAA-related research?',
      answer:
        "Dash's encryption and local storage align with many HIPAA security principles, but we cannot provide a formal HIPAA compliance certification. For healthcare research, work with your institution's compliance office to determine if Dash meets your specific requirements.",
    },
    {
      question: 'How do I share research notes with collaborators?',
      answer:
        'Export notes to Word, PDF, or Markdown for sharing. For sensitive data, export as encrypted .dashpack files - collaborators need Dash and your password to decrypt. This keeps you in control of how data is shared.',
    },
    {
      question: 'Can I verify the security claims?',
      answer:
        'Yes. Dash is fully open source on GitHub. The encryption implementation uses standard cryptographic libraries (AES-256-GCM, PBKDF2). Security researchers can audit the code directly.',
    },
    {
      question: 'What about backing up research notes?',
      answer:
        'Notes are stored in your local application data folder. Include this in your regular backup routine. You can also export encrypted .dashpack bundles as additional backups. With proper backups, you maintain data integrity without cloud dependency.',
    },
    {
      question: 'Does my institution need to approve this software?',
      answer:
        "That depends on your institution's policies. Dash's local-only, encrypted storage typically satisfies institutional security requirements more easily than cloud-based alternatives. Check with your IT department or data governance office.",
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
        badge={{ icon: Microscope, text: 'For Researchers' }}
        headline="Research Data Deserves Real Protection"
        highlightedWord="Protection"
        subheadline="Local-only storage with military-grade encryption. Meet institutional data security requirements without third-party cloud services."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See security details', href: '#security' }}
      >
        {/* Research notes mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
              <Lock className="w-3 h-3" />
              <span className="text-xs font-medium">Encrypted</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">RESEARCH PROJECT</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Lock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Participant Data</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Interview Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Literature Review</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Analysis Notes</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Participant Interview - P007</h3>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-medium">AES-256</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p><strong>Date:</strong> January 15, 2026</p>
                <p><strong>Duration:</strong> 45 minutes</p>
                <p><strong>Key Themes:</strong></p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
                  <li>Theme 1: [Encrypted content]</li>
                  <li>Theme 2: [Encrypted content]</li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Database className="w-3 h-3" />
                  <span>Local only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3 h-3" />
                  <span>No cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Researchers Need Dash */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Researchers <span className="text-blue-600 dark:text-blue-400">Choose</span> Dash
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Research data requires protection. Cloud storage creates compliance complications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {researcherNeeds.map((need, index) => (
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

      {/* Security Details */}
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
              Security <span className="text-blue-400">Specifications</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Technical details for institutional review and compliance assessment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {compliancePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
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

      {/* Use Cases */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Research <span className="text-blue-600 dark:text-blue-400">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
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
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Compliance <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Research data deserves protection."
        subheadline="Local storage. Military encryption. One-time $14.99."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
