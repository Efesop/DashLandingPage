'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  GraduationCap,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Minus,
  Plus,
  Database,
  Sparkles,
  Brain,
  Target,
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

export default function ForStudentsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const studentNeeds = [
    {
      icon: Eye,
      title: 'Your Notes Are Not Ad Fodder',
      description:
        "Free note apps make money from your data. They analyze your study habits, your interests, your struggles. Dash doesn't collect anything - your notes exist only on your device.",
    },
    {
      icon: Sparkles,
      title: 'Not Training AI Models',
      description:
        "Many apps use your content to train AI. Your essays, research notes, and personal thoughts become training data. Dash is 100% offline - your writing can't train anything.",
    },
    {
      icon: Target,
      title: 'Focus Without Distractions',
      description:
        "No notifications about features. No prompts to upgrade. No sync failures. Just a clean, fast notes app that lets you focus on studying.",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'Password Protection',
      description: 'Encrypt sensitive notes with AES-256. Roommates and family cannot access protected notes.',
    },
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'Study anywhere - library, coffee shop, airplane. No internet needed.',
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Notes stay on your device. Not on corporate servers being analyzed.',
    },
    {
      icon: Brain,
      title: 'Distraction-Free',
      description: 'Clean interface. No social features, no notifications, no AI assistants.',
    },
    {
      icon: BookOpen,
      title: 'Organize Everything',
      description: 'Folders for each class, tags for topics. Find anything instantly with search.',
    },
    {
      icon: Shield,
      title: 'No Account Required',
      description: 'No email sign-up, no password to remember, no data in corporate databases.',
    },
  ];

  const privacyConcerns = [
    {
      concern: 'Free apps sell your data',
      reality: 'If the product is free, you are the product. Your notes become advertising data.',
    },
    {
      concern: 'AI training on your content',
      reality: 'Many note apps now train AI on user content without clear consent.',
    },
    {
      concern: 'Data breaches expose everything',
      reality: 'Cloud-stored notes can be leaked in breaches. Local storage eliminates this risk.',
    },
    {
      concern: 'Companies can change terms',
      reality: 'Cloud providers can change how they use your data at any time.',
    },
  ];

  const faqs = [
    {
      question: 'Why should students pay for a notes app?',
      answer:
        "Free apps monetize you through data collection and ads. The $14.99 one-time payment means you're the customer, not the product. No data mining, no AI training, no privacy compromises. Plus, it's cheaper than one month of most subscriptions - for lifetime access.",
    },
    {
      question: 'Can I use this for exam notes and sensitive material?',
      answer:
        'Yes. Password-protect any note with AES-256 encryption - the same standard used by banks. Even if someone accesses your device, encrypted notes are unreadable without your password.',
    },
    {
      question: 'How do I organize notes for multiple classes?',
      answer:
        'Create folders for each class or subject. Use tags for cross-cutting topics (like "exam-prep" or "important"). The instant search finds content across all your notes.',
    },
    {
      question: 'What about syncing between my laptop and phone?',
      answer:
        "Dash doesn't have cloud sync because that requires storing your data on servers. You can export encrypted .dashpack files to move notes between devices when needed. This keeps you in control.",
    },
    {
      question: 'Is this available on iOS/Android?',
      answer:
        'Dash is available as a Progressive Web App (PWA) that works in mobile browsers. The native Mac app provides the best experience. All versions maintain the same privacy standards.',
    },
    {
      question: 'Why not just use Apple Notes or Google Keep?',
      answer:
        "Apple Notes syncs to iCloud (Apple's servers). Google Keep is deeply integrated with Google's data ecosystem. Both companies have access to your notes. Dash stores everything locally with optional encryption.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: GraduationCap, text: 'For Students' }}
        headline="Your Study Notes Should Not Train AI Models"
        highlightedWord="Train"
        subheadline="Private notes that stay on your device. No tracking, no data mining, no corporate surveillance. Just you and your notes."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See why it matters', href: '#why-privacy' }}
      >
        {/* Student notes mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">Private</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY CLASSES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <BookOpen className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">CS 301 Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <BookOpen className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Biology 201</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Personal Journal</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <BookOpen className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Thesis Research</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">CS 301 - Algorithms</h3>
                <span className="text-xs text-gray-400">Lecture 12</span>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Dynamic Programming</strong></p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Break problem into subproblems</li>
                  <li>Store results to avoid recomputation</li>
                  <li>Build solution from stored results</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-500 italic text-xs mt-3">
                  Your notes, not feeding any algorithm...
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-green-500" />
                  <span>Not tracked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Not training AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Privacy Matters */}
      <section id="why-privacy" className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why <span className="text-blue-600 dark:text-blue-400">Privacy</span> Matters for Students
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your study notes reveal more about you than you might think.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studentNeeds.map((need, index) => (
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

      {/* Privacy Concerns */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="text-red-500">Reality</span> of Free Note Apps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {privacyConcerns.map((item, index) => (
              <motion.div
                key={item.concern}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.concern}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.reality}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Get Dash for Mac — $14.99" />

      {/* Features */}
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
              Built for <span className="text-blue-400">Focused</span> Studying
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

      {/* One-Time Price Highlight */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-950/50 px-4 py-2 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 mb-8">
              <CheckCircle className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Student-Friendly Pricing</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              $14.99 Once. <span className="text-blue-600 dark:text-blue-400">Forever.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Less than two months of Spotify. Less than one textbook chapter. Lifetime access to private, encrypted notes without subscriptions draining your budget.
            </p>
          </motion.div>
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
              Student <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        { title: 'Offline-First Architecture', href: '/guides/offline-first', description: 'Study anywhere — no Wi-Fi required.' },
        { title: 'Page Linking Guide', href: '/guides/page-linking', description: 'Connect lecture notes across subjects.' },
        { title: 'App Lock Guide', href: '/guides/app-lock', description: 'Keep your notes private with biometric lock.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Your notes. Not their data."
        subheadline="One-time $14.99 for lifetime privacy."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
