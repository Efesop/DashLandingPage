'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  FileText,
  PenTool,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Minus,
  Plus,
  Download,
  Cloud,
  Sparkles,
  Database,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';
import InlineCTA from '../components/seo/InlineCTA';
import RelatedLinks from '../components/seo/RelatedLinks';
import GlassCard from '../components/ui/GlassCard';

export default function ForWritersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const writerNeeds = [
    {
      icon: BookOpen,
      title: 'Manuscript Protection',
      description:
        "Your unpublished novel, screenplay, or memoir is your most valuable asset. Cloud-based apps store your work on servers that can be hacked, leaked, or accessed by employees. Dash keeps your manuscripts encrypted on your device only.",
    },
    {
      icon: AlertTriangle,
      title: 'No Pre-Release Leaks',
      description:
        "Imagine your plot twists leaked online before publication. With cloud storage, there's always a risk. With Dash, your work exists only on your machine - there's nothing to leak because there's no server.",
    },
    {
      icon: Eye,
      title: 'True Creative Privacy',
      description:
        "Your early drafts, character notes, and story ideas deserve privacy. Unlike apps that analyze your content for features or ads, Dash never reads, scans, or processes your writing. Complete creative freedom.",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description:
        'Password-protect any note with AES-256 encryption. Even if someone accesses your device, your manuscripts remain unreadable.',
    },
    {
      icon: WifiOff,
      title: '100% Offline',
      description:
        'Write anywhere - coffee shops, cabins, flights. No internet required, no sync failures, no connection anxiety.',
    },
    {
      icon: PenTool,
      title: 'Distraction-Free Editor',
      description:
        'Clean, minimal interface that lets you focus on writing. Rich text formatting without the clutter.',
    },
    {
      icon: Download,
      title: 'Export Anywhere',
      description:
        'Export to Word, PDF, or Markdown when you need to share with editors. Keep the originals encrypted.',
    },
    {
      icon: Database,
      title: 'Local Storage',
      description:
        'Your files stay on your device. No cloud servers, no third-party access, no terms of service surprises.',
    },
    {
      icon: Sparkles,
      title: 'No AI Training',
      description:
        "Your writing won't train AI models. Unlike some apps that use your content to improve their AI, Dash never touches your words.",
    },
  ];

  const useCases = [
    {
      title: 'Novel Writing',
      description:
        'Keep chapters, character sheets, and plot outlines encrypted. Export when ready for your editor.',
    },
    {
      title: 'Screenwriting',
      description:
        'Protect your screenplay ideas and drafts. Hollywood leaks are real - keep your scripts truly private.',
    },
    {
      title: 'Memoir & Personal Writing',
      description:
        'Your life stories contain sensitive details about real people. Keep them encrypted and private.',
    },
    {
      title: 'Research Notes',
      description:
        'Store interview notes, source materials, and research securely while working on non-fiction.',
    },
  ];

  const cloudRisks = [
    {
      risk: 'Data Breaches',
      description: 'Major note apps have been hacked. Your manuscripts could be exposed.',
    },
    {
      risk: 'Employee Access',
      description: 'Cloud providers have employees who could theoretically access your files.',
    },
    {
      risk: 'AI Training',
      description: 'Some apps use your content to train AI models without clear disclosure.',
    },
    {
      risk: 'Terms Changes',
      description: 'Companies can change terms of service, affecting how your content is used.',
    },
  ];

  const faqs = [
    {
      question: 'How do I organize a novel in Dash?',
      answer:
        'Use folders for each project, with subfolders for chapters, characters, and research. Tag notes for easy filtering. You can keep your entire novel organized in one place, all encrypted.',
    },
    {
      question: 'Can I export to Word for my editor?',
      answer:
        'Yes. Dash exports to Word (.docx), PDF, and Markdown formats. Export when you need to share, keep the encrypted originals in Dash.',
    },
    {
      question: 'What if I write on multiple devices?',
      answer:
        "Dash doesn't have cloud sync because that would require storing your data on servers. Instead, export encrypted .dashpack files to move between devices. You control the transfer.",
    },
    {
      question: 'Is this better than Scrivener for privacy?',
      answer:
        'Scrivener is excellent for novel organization but stores files unencrypted. Dash offers built-in AES-256 encryption for any note. If privacy is your priority, Dash provides security Scrivener lacks.',
    },
    {
      question: "Will my writing train AI models?",
      answer:
        "Absolutely not. Dash is 100% offline - your writing never leaves your device. There are no servers to send data to, no AI features that process your content, no way for your manuscripts to train any models.",
    },
    {
      question: 'What happens if I forget my encryption password?',
      answer:
        "Encrypted notes are truly encrypted - there's no backdoor, no recovery option, no way for us to help. This is by design for true security. We recommend keeping a secure backup of your password.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: PenTool, text: 'For Writers' }}
        headline="Your Unpublished Work Deserves Real Protection"
        highlightedWord="Protection"
        subheadline="AES-256 encrypted notes that never touch the cloud. Your manuscripts, character notes, and story ideas stay truly private."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See features', href: '#features' }}
      >
        {/* Writing app mockup */}
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
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY NOVEL</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Lock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Chapter 12 Draft</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Character Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Plot Outline</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Research</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Chapter 12 Draft</h3>
                <span className="text-xs text-gray-400">2,847 words</span>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                <p>The morning light filtered through the cabin window as Sarah finally understood what she had to do. The letter from her grandmother...</p>
                <p className="text-gray-400 dark:text-gray-500 italic">
                  [Your story continues, encrypted and private...]
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>AES-256</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <WifiOff className="w-3 h-3" />
                  <span>Offline</span>
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

      {/* Why Writers Need Dash */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Writers <span className="text-blue-600 dark:text-blue-400">Choose</span> Dash
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your creative work is valuable. Standard cloud apps put it at risk.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {writerNeeds.map((need, index) => (
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

      {/* Cloud Risks */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="text-red-500">Risks</span> of Cloud Storage for Writers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {cloudRisks.map((item, index) => (
              <motion.div
                key={item.risk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.risk}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Start writing privately — $14.99" />

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
              Built for <span className="text-blue-400">Writers</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Everything you need to write privately and productively.
            </p>
          </motion.div>

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
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Perfect for <span className="text-blue-600 dark:text-blue-400">Every</span> Writer
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
              Writer <span className="text-blue-600 dark:text-blue-400">Questions</span>
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

      <RelatedLinks heading="Learn More" links={[
        { title: 'Offline-First Architecture', href: '/guides/offline-first', description: 'How Dash works without an internet connection.' },
        { title: 'Page Linking Guide', href: '/guides/page-linking', description: 'Connect ideas across notes with bidirectional links.' },
        { title: 'Encrypted Notes', href: '/encrypted-notes', description: 'Protect your manuscripts with AES-256 encryption.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Your stories deserve protection."
        subheadline="AES-256 encryption for $14.99."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
