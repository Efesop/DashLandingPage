'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  WifiOff,
  Cloud,
  CheckCircle,
  X,
  DollarSign,
  Eye,
  Database,
  FileText,
  Download,
  CreditCard,
  Code,
  Minus,
  Plus,
  AlertTriangle,
  Server,
  UserX,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import CTABanner from '../components/seo/CTABanner';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '../components/ui/button';
import FloatingOrbs from '../components/ui/FloatingOrbs';

export default function VsEvernoteContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const evernoteProblems = [
    {
      icon: DollarSign,
      title: 'Expensive Subscription',
      description:
        'Evernote costs $14.99/month ($180/year). Over 5 years, that is $900. Dash is $14.99 once, forever.',
    },
    {
      icon: Cloud,
      title: 'Everything in the Cloud',
      description:
        'Your notes live on Evernote servers. They can access, scan, and analyze your content. Privacy is limited.',
    },
    {
      icon: Server,
      title: 'Requires Internet',
      description:
        'Evernote needs internet to sync. Offline access is limited and unreliable. Bad WiFi means frustrated users.',
    },
    {
      icon: UserX,
      title: 'Account Required',
      description:
        'You must create an account with your email. Your identity is tied to your notes from day one.',
    },
  ];

  const comparisonFeatures = [
    { feature: '100% Offline', dash: true, evernote: false },
    { feature: 'No Account Required', dash: true, evernote: false },
    { feature: 'No Tracking/Analytics', dash: true, evernote: false },
    { feature: 'AES-256 Encryption', dash: true, evernote: false },
    { feature: 'No Monthly Subscription', dash: true, evernote: false },
    { feature: 'Open Source', dash: true, evernote: false },
    { feature: 'No Cloud Storage', dash: true, evernote: false },
    { feature: 'Rich Text Editor', dash: true, evernote: true },
    { feature: 'Export to PDF', dash: true, evernote: true },
    { feature: 'Cross-Platform', dash: true, evernote: true },
  ];

  const pricingComparison = [
    { period: 'One-time', evernote: '$14.99', dash: '$14.99', evernoteTotal: '$14.99', dashTotal: '$14.99' },
    { period: 'Year 1', evernote: '+$165', dash: '$0', evernoteTotal: '$179.88', dashTotal: '$14.99' },
    { period: 'Year 2', evernote: '+$180', dash: '$0', evernoteTotal: '$359.76', dashTotal: '$14.99' },
    { period: 'Year 3', evernote: '+$180', dash: '$0', evernoteTotal: '$539.64', dashTotal: '$14.99' },
    { period: 'Year 5', evernote: '+$360', dash: '$0', evernoteTotal: '$899.40', dashTotal: '$14.99' },
  ];

  const whatYouKeep = [
    'Rich text formatting',
    'Headers and lists',
    'Code blocks',
    'Checklists',
    'Export to multiple formats',
    'Search functionality',
    'Folder organization',
    'Tags and filtering',
  ];

  const whatYouGain = [
    {
      icon: Shield,
      title: 'True Privacy',
      description: 'Your notes never leave your device. No servers, no scanning, no profiling.',
    },
    {
      icon: DollarSign,
      title: 'No Subscription',
      description: '$14.99 one-time. No monthly fees, no price increases, no renewal hassles.',
    },
    {
      icon: WifiOff,
      title: 'Real Offline Access',
      description: 'Works without internet. Not just cached - truly local-first.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Verify security claims yourself. Full transparency, no hidden code.',
    },
  ];

  const migrationSteps = [
    {
      step: 1,
      title: 'Export from Evernote',
      description: 'Go to Evernote > File > Export and save your notes. You can export as HTML or ENEX format.',
    },
    {
      step: 2,
      title: 'Download Dash',
      description: 'Get Dash for Mac. One-time purchase, instant download, no account required.',
    },
    {
      step: 3,
      title: 'Create Your Notes',
      description: 'Copy your content into Dash. Organize with folders and encrypt sensitive notes.',
    },
    {
      step: 4,
      title: 'Enjoy Privacy',
      description: 'Your notes now live on your device only. No cloud, no tracking, no subscription.',
    },
  ];

  const faqs = [
    {
      question: 'Can I import my Evernote notes directly?',
      answer:
        'Dash does not have a direct ENEX import feature yet. However, you can export your Evernote notes as HTML and copy the content into Dash. We are considering adding direct import in a future update.',
    },
    {
      question: 'Does Dash have all the features of Evernote?',
      answer:
        'Dash focuses on privacy-first note-taking. It includes rich text editing, formatting, folders, tags, search, and export. It does not include features like web clipping, collaboration, or cloud sync - these require servers that would compromise privacy.',
    },
    {
      question: 'What about syncing between devices?',
      answer:
        'Dash does not have cloud sync by design. You can export encrypted .dashpack files and import them on another device. This gives you manual control over when and how your notes move between devices.',
    },
    {
      question: 'Is Dash really just $14.99 forever?',
      answer:
        'Yes. One payment, lifetime access. No subscription, no renewal fees, no upsells. Major updates are included. Compare that to Evernote at $180/year.',
    },
    {
      question: 'What if Evernote adds better privacy features?',
      answer:
        'Cloud-based apps cannot offer true privacy because your data must exist on their servers for the service to work. Dash is architecturally different - your notes never leave your device.',
    },
    {
      question: 'Can I try Dash before buying?',
      answer:
        'Dash is open source, so you can review the code on GitHub. The PWA version is free to try in your browser. The Mac app is a one-time $14.99 purchase.',
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

      {/* Hero Section - Clean design like vs-notion */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
        <FloatingOrbs variant="light" density="low" />

        <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-8"
            >
              <Shield className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Privacy Comparison</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Dash vs Evernote
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Same note-taking power.{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                No subscription.
              </span>{' '}
              Pay once, own forever.
            </motion.p>

            {/* Logo comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-8 mb-10"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <Image
                    src="/images/Dash256.png"
                    alt="Dash"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Dash</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">$14.99 one-time</p>
              </div>

              <div className="text-3xl font-bold text-gray-400">vs</div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">E</span>
                  </div>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Evernote</p>
                <p className="text-xs text-gray-500">$14.99/month</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() =>
                  document
                    .getElementById('comparison-table')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-colors duration-200"
              >
                See Full Comparison
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Switch from Evernote - Clean design */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Users Are <span className="text-blue-600 dark:text-blue-400">Switching</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Evernote has become expensive and privacy-invasive. Here is why users are moving to Dash.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {evernoteProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                        <problem.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="comparison-table" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Feature <span className="text-blue-600 dark:text-blue-400">Comparison</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See exactly how Dash and Evernote compare on privacy and features
            </p>
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
                        <div className="flex flex-col items-center">
                          <Image
                            src="/images/Dash256.png"
                            alt="Dash"
                            width={32}
                            height={32}
                            className="mb-1 rounded-lg"
                          />
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            Dash
                          </span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-1">
                            <span className="text-white font-bold">E</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-500">
                            Evernote
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {comparisonFeatures.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.dash ? (
                            <CheckCircle className="w-5 h-5 text-blue-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.evernote ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Pricing Comparison - Better visual */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cost Over <span className="text-blue-600 dark:text-blue-400">Time</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pay once with Dash. Pay forever with Evernote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Evernote pricing */}
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Evernote</h3>
                    <p className="text-sm text-gray-500">Subscription model</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {pricingComparison.map((item, index) => (
                    <div key={item.period} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">{item.evernote}</span>
                        <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{item.evernoteTotal}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500">After 5 years:</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$899.40</p>
                </div>
              </div>

              {/* Dash pricing */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">RECOMMENDED</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/Dash256.png"
                    alt="Dash"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Dash</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">One-time payment</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {pricingComparison.map((item, index) => (
                    <div key={item.period} className="flex justify-between items-center py-2 border-b border-blue-200 dark:border-blue-800/50 last:border-0">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                      <div className="text-right">
                        <span className={`text-sm font-semibold ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>
                          {item.dash}
                        </span>
                        <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{item.dashTotal}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                  <p className="text-sm text-gray-500">After 5 years:</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$14.99</p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">Save $884.41</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get with Dash */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What You <span className="text-blue-600 dark:text-blue-400">Get</span> with Dash
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Features you keep */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                All the features you need
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {whatYouKeep.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What you gain */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Plus privacy benefits
              </h3>
              <div className="space-y-4">
                {whatYouGain.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800/50"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Guide */}
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
              Switch in <span className="text-blue-400">4 Easy Steps</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Moving from Evernote to Dash is straightforward.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Switching <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Ready to switch to privacy?"
        subheadline="One payment. No more subscriptions."
        buttonText="Get Dash for $14.99"
      />

      <Footer />
    </main>
  );
}
