'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  BookHeart,
  Heart,
  CheckCircle,
  Minus,
  Plus,
  Database,
  Moon,
  Sparkles,
  Cloud,
  Calendar,
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

export default function SecureJournalContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const journalNeeds = [
    {
      icon: Heart,
      title: 'Your Thoughts Deserve Privacy',
      description:
        "Your deepest thoughts, fears, dreams, and reflections are not data points for corporations. Dash keeps your journal encrypted and offline - truly private, not just hidden behind a login.",
    },
    {
      icon: Eye,
      title: 'No One Reads Your Journal',
      description:
        "Cloud-based apps store your entries on servers where employees could theoretically access them. With Dash, your words exist only on your device, encrypted with a password only you know.",
    },
    {
      icon: Shield,
      title: 'Protected from Everyone',
      description:
        "AES-256 encryption means even if someone accesses your device, your journal entries are unreadable without your password. The same encryption used by governments and banks.",
    },
  ];

  const features = [
    {
      icon: Lock,
      title: 'AES-256-GCM Encryption',
      description: 'AES-256-GCM encryption protects your journal entries. Only you can read them.',
    },
    {
      icon: WifiOff,
      title: '100% Offline',
      description: 'No cloud sync, no internet required. Write anywhere, anytime.',
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Your journal stays on your device. Not on corporate servers.',
    },
    {
      icon: Moon,
      title: 'Dark Mode',
      description: 'Write comfortably at night with a beautiful dark theme.',
    },
    {
      icon: Calendar,
      title: 'Easy Organization',
      description: 'Organize entries by date, folders, or tags. Find past reflections easily.',
    },
    {
      icon: Sparkles,
      title: 'Distraction-Free',
      description: 'Clean, minimal interface that lets you focus on your thoughts.',
    },
  ];

  const journalBenefits = [
    {
      title: 'Mental Health',
      description: 'Journaling reduces anxiety, processes emotions, and improves mood. Privacy lets you be completely honest.',
    },
    {
      title: 'Personal Growth',
      description: 'Track your journey, reflect on experiences, and see how far you have come.',
    },
    {
      title: 'Creative Expression',
      description: 'Write freely without worrying about who might see. True creative freedom.',
    },
    {
      title: 'Memory Keeping',
      description: 'Capture moments, thoughts, and experiences. Your life story, protected.',
    },
  ];

  const vsOtherApps = [
    { feature: 'End-to-End Encryption', dash: true, dayOne: 'Paid', journey: 'Paid' },
    { feature: 'No Cloud Required', dash: true, dayOne: false, journey: false },
    { feature: 'One-Time Payment', dash: true, dayOne: false, journey: false },
    { feature: 'No Account Needed', dash: true, dayOne: false, journey: false },
    { feature: 'Zero Data Collection', dash: true, dayOne: false, journey: false },
    { feature: 'Open Source', dash: true, dayOne: false, journey: false },
  ];

  const faqs = [
    {
      question: 'How is this different from Day One or Journey?',
      answer:
        'Day One and Journey are excellent journal apps, but they sync to the cloud and require subscriptions ($35-50/year) for encryption. Dash stores everything locally with built-in encryption for a one-time $14.99. No cloud means no breach risk and no recurring fees.',
    },
    {
      question: 'Can I add photos to my journal entries?',
      answer:
        'Currently, Dash focuses on text-based journaling with rich formatting. Photos and attachments are on the roadmap. For now, you can embed images using Markdown syntax if using the web version.',
    },
    {
      question: 'What if I want to journal on multiple devices?',
      answer:
        "Dash doesn't have cloud sync because that would require storing your private thoughts on servers. Export encrypted .dashpack files to transfer between devices. You control exactly when and how your journal moves.",
    },
    {
      question: 'Can my therapist or partner read my journal?',
      answer:
        "Only if you share your encryption password. Without it, encrypted entries are completely unreadable - even to forensic analysis. You have complete control over who sees what.",
    },
    {
      question: 'What happens if I forget my encryption password?',
      answer:
        "Encrypted entries cannot be recovered without the password. There is no backdoor - this is by design for true security. We recommend keeping your password in a secure password manager.",
    },
    {
      question: 'Is journaling in Dash good for mental health?',
      answer:
        'Research shows journaling benefits mental health by processing emotions, reducing anxiety, and improving self-awareness. The privacy of encrypted journaling lets you be completely honest, which maximizes these benefits.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: BookHeart, text: 'Private Journal' }}
        headline="Your Diary. Truly Private."
        highlightedWord="Private"
        subheadline="AES-256 encrypted journal that never syncs to the cloud. Write your deepest thoughts knowing they are protected from everyone - including us."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#features' }}
      >
        {/* Journal mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full">
              <Lock className="w-3 h-3" />
              <span className="text-xs font-medium">Private Journal</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY JOURNAL</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <Lock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Today</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Yesterday</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Jan 20, 2026</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Jan 19, 2026</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">January 22, 2026</h3>
                <span className="text-xs text-gray-400">8:45 PM</span>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                <p>Today was one of those days where everything felt possible. Had a breakthrough with...</p>
                <p className="text-gray-400 dark:text-gray-500 italic">
                  [Your private thoughts, encrypted and secure...]
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

      {/* Why Private Journaling */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why <span className="text-purple-600 dark:text-purple-400">Privacy</span> Matters for Journaling
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              True self-reflection requires true privacy. Your journal should be for your eyes only.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journalNeeds.map((need, index) => (
              <motion.div
                key={need.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <need.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
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

      {/* Benefits of Journaling */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Benefits of <span className="text-purple-600 dark:text-purple-400">Private</span> Journaling
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {journalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Start your secure journal — $14.99" />

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
              Journal <span className="text-purple-400">Features</span>
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
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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

      {/* Comparison */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Dash vs <span className="text-purple-600 dark:text-purple-400">Other Journals</span>
            </h2>
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
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400">Dash</span>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-gray-500">Day One</span>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <span className="text-sm font-semibold text-gray-500">Journey</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {vsOtherApps.map((row, index) => (
                      <tr key={row.feature}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {row.dayOne === true ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : row.dayOne === false ? '✗' : row.dayOne}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {row.journey === true ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : row.journey === false ? '✗' : row.journey}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
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
              Journal <span className="text-purple-600 dark:text-purple-400">Questions</span>
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
                      <Minus className="h-5 w-5 text-purple-500" />
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
        { title: 'How Dash Encryption Works', href: '/guides/encryption', description: 'Protect your journal with AES-256-GCM.' },
        { title: 'App Lock Guide', href: '/guides/app-lock', description: 'Lock your journal with Touch ID or password.' },
        { title: 'Decoy Password Guide', href: '/guides/duress-password', description: 'Hide journal entries behind decoy notes.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Start your private journal today."
        subheadline="$14.99 once. Your thoughts protected forever."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
