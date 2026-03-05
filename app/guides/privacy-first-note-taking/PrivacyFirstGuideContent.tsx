'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Eye,
  EyeOff,
  Server,
  Lock,
  Code,
  WifiOff,
  UserX,
  BarChart3,
  AlertTriangle,
  Minus,
  Plus,
  FileText,
  Ban,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';

export default function PrivacyFirstGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatPrivacyFirstMeans = [
    {
      icon: ShieldCheck,
      title: 'Privacy-First (Zero-Knowledge)',
      description:
        'The developer cannot access user data even if they wanted to. No accounts, no servers processing data, no telemetry. Privacy guaranteed by architecture.',
    },
    {
      icon: Eye,
      title: 'Privacy-Focused',
      description:
        'Takes privacy seriously but may still involve servers, accounts, and some data processing. Privacy enforced by policy and promises.',
    },
    {
      icon: FileText,
      title: 'Privacy-Compliant',
      description:
        'Meets legal requirements (GDPR, CCPA). Collects data but gives users control. Has a privacy policy and cookie consent. Minimum bar.',
    },
  ];

  const problemsWithCloud = [
    {
      icon: Server,
      title: 'Your Data on Their Servers',
      description:
        'When you type a note in a cloud app, that text is sent to and stored on the company\u2019s servers. The service typically holds the keys \u2014 they can read your notes.',
    },
    {
      icon: UserX,
      title: 'Accounts Tie to Identity',
      description:
        'Cloud apps require an account tied to your email. Your note-taking habits, topics, and timestamps become a profile \u2014 even if the content is encrypted.',
    },
    {
      icon: BarChart3,
      title: 'Telemetry and Analytics',
      description:
        'Most apps track how you use the product: features used, session length, note count. This data goes to third-party analytics services like Amplitude or Mixpanel.',
    },
    {
      icon: AlertTriangle,
      title: 'Terms Can Change',
      description:
        'Cloud providers can introduce AI training on your content, sell aggregated data, shut down, or increase prices. Your access depends on their goodwill.',
    },
  ];

  const dashDoesNot = [
    {
      icon: Ban,
      title: 'No AI Processing',
      description: 'Your notes are never sent to an AI service for \u201Csmart features.\u201D Your content stays on your device.',
    },
    {
      icon: BarChart3,
      title: 'No Analytics At All',
      description: 'No usage tracking, not even anonymized. No Segment, Amplitude, Google Analytics, Mixpanel, or Sentry.',
    },
    {
      icon: Search,
      title: 'No Third-Party Scripts',
      description: 'No tracking pixels, no fingerprinting, no ad networks, no external JavaScript. Zero outbound network requests.',
    },
  ];

  const howDashImplements = [
    {
      icon: Server,
      title: 'No Server',
      description:
        'Dash has no backend server. No infrastructure receives, processes, or stores your data. There is nothing to breach.',
    },
    {
      icon: UserX,
      title: 'No Accounts',
      description:
        'No sign-up, no login, no email, no identity. You download and use it. That\u2019s it.',
    },
    {
      icon: EyeOff,
      title: 'No Telemetry',
      description:
        'Zero analytics packages in the dependencies. Zero outbound network calls. The only network activity is checking for app updates on desktop.',
    },
    {
      icon: WifiOff,
      title: 'Local-Only Storage',
      description:
        'All data stays on your device. Desktop: local JSON files. Mobile: IndexedDB. No cloud sync, no backup service.',
    },
    {
      icon: Lock,
      title: 'Client-Side Encryption',
      description:
        'Encryption happens in your browser using WebCrypto API. Password and keys never stored or transmitted. AES-256-GCM with PBKDF2.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description:
        'Every claim is verifiable. No hidden network calls, no obfuscated telemetry, no backdoors. Privacy is a technical property, not a marketing claim.',
    },
  ];

  const faqs = [
    {
      question: 'What does privacy-first mean?',
      answer:
        'Privacy-first is a design philosophy where user privacy is the primary constraint. The app is built so the developer cannot access user data even if they wanted to \u2014 no accounts, no servers processing data, no telemetry. Privacy is guaranteed by architecture, not by policy.',
    },
    {
      question: 'How is privacy-first different from privacy-focused?',
      answer:
        'Privacy-focused apps take privacy seriously but may still involve servers, accounts, and some data processing. Privacy-first (zero-knowledge) apps are architectured so privacy is guaranteed by design \u2014 the developer literally cannot see your data.',
    },
    {
      question: 'Does Dash collect any analytics or telemetry?',
      answer:
        'No. Dash has zero analytics \u2014 no Segment, Amplitude, Google Analytics, Mixpanel, Sentry, or any telemetry service. The app makes zero network requests during normal operation. This is verifiable in the open-source code.',
    },
    {
      question: 'What data does Dash store about me?',
      answer:
        'None. Dash has no server, no accounts, no sign-up process, and no way to identify you. Your notes exist only on your device. There is no cloud copy, no backup service, and no server-side record.',
    },
    {
      question: 'How does Dash comply with privacy regulations?',
      answer:
        'Dash\u2019s architecture naturally aligns with privacy regulations by not collecting any data. When you don\u2019t collect data, regulations like GDPR, CCPA, and data residency requirements become irrelevant. Compliance through architecture, not legal effort.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero */}
      <SEOHero
        badge={{ icon: ShieldCheck, text: 'Privacy-First Design' }}
        headline="What Does Privacy-First Actually Mean?"
        highlightedWord="Privacy-First"
        subheadline="Most apps promise privacy in their terms of service. Dash guarantees it through architecture. No servers, no accounts, no telemetry \u2014 by design."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See the difference', href: '#the-problem' }}
      >
        {/* Privacy comparison mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-xs font-medium">Zero Knowledge</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="text-center mb-4">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Dash collects</p>
            </div>

            {['Analytics', 'Telemetry', 'User accounts', 'Usage data', 'Crash reports'].map((item) => (
              <div key={item} className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                <div className="flex items-center gap-1.5 text-red-500">
                  <Ban className="w-4 h-4" />
                  <span className="text-xs font-medium">None</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SEOHero>

      {/* Privacy Levels */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Three Levels of <span className="text-blue-600 dark:text-blue-400">Privacy</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not all privacy claims are equal. Understanding the difference matters.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatPrivacyFirstMeans.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`bg-gray-50 dark:bg-gray-800/50 border rounded-2xl p-8 h-full ${index === 0 ? 'border-blue-300 dark:border-blue-700 ring-1 ring-blue-200 dark:ring-blue-800' : 'border-gray-200 dark:border-gray-700'}`}>
                  {index === 0 && (
                    <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded mb-4">Dash</span>
                  )}
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

      {/* The Problem With Cloud Apps */}
      <section id="the-problem" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Problem With <span className="text-red-400">Cloud Note Apps</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Most note-taking apps operate on a cloud-first model. Here&apos;s what that means for your data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problemsWithCloud.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Dash Implements Privacy-First */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Dash <span className="text-blue-600 dark:text-blue-400">Implements</span> Privacy-First
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Zero data collection isn&apos;t a policy choice \u2014 it&apos;s an architectural impossibility to collect data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howDashImplements.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Dash Does NOT Do */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Dash <span className="text-blue-600 dark:text-blue-400">Doesn&apos;t</span> Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What we don&apos;t do is just as important as what we do.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dashDoesNot.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-gray-500 dark:text-gray-400" />
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

      {/* Payment */}
      <PaymentSection />

      {/* FAQ */}
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
                Privacy <span className="text-blue-600 dark:text-blue-400">Questions</span>
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

      {/* CTA */}
      <CTABanner
        headline="Privacy guaranteed by design"
        subheadline="Zero data collection. Zero telemetry. $14.99 one-time."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
