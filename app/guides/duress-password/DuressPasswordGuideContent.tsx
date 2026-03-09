'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Shield,
  Lock,
  KeyRound,
  EyeOff,
  AlertTriangle,
  Minus,
  Plus,
  FileText,
  Briefcase,
  Megaphone,
  Plane,
  Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';

export default function DuressPasswordGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatIsCards = [
    {
      icon: ShieldAlert,
      title: 'Silent Panic Action',
      description:
        'A secondary password that triggers a hidden response. The app opens normally — but your data is hidden behind a decoy empty state.',
    },
    {
      icon: EyeOff,
      title: 'Plausible Deniability',
      description:
        'An attacker sees an empty app and has no way to tell that data ever existed. Zero visual difference from a fresh install.',
    },
    {
      icon: AlertTriangle,
      title: 'Always Recoverable',
      description:
        'Your data stays safe on disk. Enter your real password anytime to restore everything — nothing is ever deleted.',
    },
  ];

  const howItWorks = [
    {
      icon: KeyRound,
      title: 'Setup',
      description:
        'Set a duress password in app lock settings. Must be at least 4 characters and different from your real password.',
    },
    {
      icon: EyeOff,
      title: 'Duress Entered',
      description:
        'Enter the duress password at the lock screen. Notes are cleared from memory and the app opens to a convincing empty state. Data stays safe on disk.',
    },
    {
      icon: ShieldCheck,
      title: 'Undetectable',
      description:
        'There is zero visual difference between a duress unlock and a fresh install. Enter your real password anytime to restore everything.',
    },
  ];

  const faqs = [
    {
      question: 'What is a duress password?',
      answer:
        'A secondary password that triggers a silent panic action when entered at the lock screen. Instead of unlocking your data, it opens a decoy empty app while your real data stays hidden.',
    },
    {
      question: 'Can an attacker tell a duress password was used?',
      answer:
        'No. There is zero visual difference between a normal unlock and a duress unlock. The app opens to an empty state identical to a fresh installation.',
    },
    {
      question: 'Can I recover my data after using the duress password?',
      answer:
        'Yes. Your data is always preserved on disk. Lock the app again and enter your real password to restore all your notes.',
    },
    {
      question: 'How does the duress password work with app lock?',
      answer:
        'The duress password is part of the app lock system. Set it up after enabling app lock. At the lock screen, entering the duress password triggers the panic action silently.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: ShieldAlert, text: 'Duress Password Guide' }}
        headline="A Password That Protects You Under Coercion"
        highlightedWord="Coercion"
        subheadline="A secondary password that silently hides your data when you're forced to unlock. Plausible deniability, built in."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-it-works' }}
      >
        {/* Duress password mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <ShieldAlert className="w-3 h-3" />
              <span className="text-xs font-medium">Duress Password</span>
            </div>
          </div>

          <div className="p-6">
            {/* Lock screen */}
            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-gray-400" />
              </div>
              <div className="h-9 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center px-3 max-w-xs mx-auto">
                <span className="text-gray-400 text-sm">{'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}</span>
              </div>
            </div>

            {/* Two scenarios side by side */}
            <div className="grid grid-cols-2 gap-4">
              {/* Real Password */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <KeyRound className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Real Password</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-green-500 dark:text-green-400" />
                    <div className="h-2 bg-green-300 dark:bg-green-600 rounded w-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-green-500 dark:text-green-400" />
                    <div className="h-2 bg-green-300 dark:bg-green-600 rounded w-4/5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-green-500 dark:text-green-400" />
                    <div className="h-2 bg-green-300 dark:bg-green-600 rounded w-3/5" />
                  </div>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-3">All notes visible</p>
              </div>

              {/* Duress Password */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Duress Password</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-amber-100 dark:bg-amber-900/30 rounded w-full" />
                  <div className="h-2 bg-amber-100 dark:bg-amber-900/30 rounded w-full" />
                  <div className="h-2 bg-amber-100 dark:bg-amber-900/30 rounded w-full" />
                </div>
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">Empty app state</p>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - What Is a Duress Password? */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Is a <span className="text-blue-600 dark:text-blue-400">Duress Password</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A secondary password designed for extreme situations where you may be forced to unlock your device.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatIsCards.map((item, index) => (
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

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mr-1">Ideal for</span>
            {[
              { icon: Briefcase, label: 'Business professionals' },
              { icon: Megaphone, label: 'Journalists & activists' },
              { icon: Plane, label: 'Frequent travellers' },
              { icon: Users, label: 'Shared devices' },
            ].map((chip) => (
              <span key={chip.label} className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                <chip.icon className="w-3.5 h-3.5" />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How It Works */}
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
              How It <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              From setup to activation — what happens when a duress password is entered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((feature, index) => (
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

      {/* Section 3 - How It Protects You */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="text-blue-600 dark:text-blue-400">Protects You</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Two passwords, two completely different outcomes. Your data is always safe.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Duress Password card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
                    <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="inline-block text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full mb-4">DURESS PASSWORD</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Opens a decoy empty app. Notes are cleared from memory but preserved on disk. Looks identical to a fresh install — no trace of your data.
                  </p>
                </div>
              </motion.div>

              {/* Real Password card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-800 rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                    <KeyRound className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="inline-block text-xs font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full mb-4">REAL PASSWORD</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Restores everything. All your notes, pages, and data come back exactly as you left them. Enter it anytime to return to normal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Security Properties */}
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
                Security <span className="text-blue-600 dark:text-blue-400">Properties</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                The cryptographic and architectural details behind the duress password system
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Duress Password Details</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Duress password hash', value: 'bcrypt', detail: 'With independent salt' },
                    { label: 'Storage', value: 'Separate hash', detail: 'Alongside but separate from real password hash' },
                    { label: 'Check order', value: 'Duress first', detail: 'Duress checked first, then real password' },
                    { label: 'Rate limiting', value: 'Equal enforcement', detail: 'Applies equally to all attempts' },
                    { label: 'When disabled', value: 'Settings cleared', detail: 'Duress settings cleared with app lock' },
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
                Duress Password <span className="text-blue-600 dark:text-blue-400">FAQ</span>
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
        headline="Protection when you need it most"
        subheadline="Duress password with plausible deniability. $14.99 one-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
