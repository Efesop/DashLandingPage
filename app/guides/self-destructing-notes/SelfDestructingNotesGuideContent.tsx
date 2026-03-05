'use client';

import React, { useState } from 'react';
import {
  Timer,
  Clock,
  Shield,
  FileCheck,
  Server,
  Smartphone,
  Zap,
  Bell,
  Trash2,
  Lock,
  Key,
  AlertTriangle,
  Minus,
  Plus,
  Eye,
  WifiOff,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';

export default function SelfDestructingNotesGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whySelfDestruct = [
    {
      icon: Clock,
      title: 'Sensitive Info Has a Shelf Life',
      description:
        'Meeting notes, temporary passwords, draft ideas. Some information should be captured but not kept permanently.',
    },
    {
      icon: Shield,
      title: 'Reduce Your Data Footprint',
      description:
        'Fewer stored notes means less exposure if a device is lost. Temporary notes don\u2019t accumulate and clutter your workspace.',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Security',
      description:
        'Some industries require mandatory deletion policies. Minimizing data at rest reduces attack surface and aligns with privacy regulations.',
    },
  ];

  const combineWithEncryption = [
    {
      icon: Lock,
      title: 'Encrypt + Self-Destruct',
      description:
        'Lock a page with AES-256-GCM then set a timer. Content encrypted while it exists, destroyed when timer expires.',
    },
    {
      icon: Key,
      title: 'Double Protection',
      description:
        'Even if someone bypasses deletion, encrypted content remains unreadable without the password.',
    },
    {
      icon: Timer,
      title: 'Flexible Timers',
      description:
        'From 1 minute to 1 year. Cancel anytime before expiry to keep the page permanently.',
    },
  ];

  const faqs = [
    {
      question: 'What are self-destructing notes?',
      answer:
        'Self-destructing notes are documents that permanently auto-delete after a set time. Once the timer expires, the note is removed from storage with no recovery possible.',
    },
    {
      question: 'How does Dash handle destruction differently from web tools?',
      answer:
        'Dash uses client-side destruction. Your notes are stored locally on your device and deleted locally when the timer expires. This works fully offline and requires no server trust. Web-based tools store your data on their servers, requiring you to trust the operator to actually delete it.',
    },
    {
      question: 'What timer options are available?',
      answer:
        'Dash offers presets of 1 hour, 1 day, 7 days, and 30 days. You can also set a custom duration anywhere from 1 minute to 1 year, specified in minutes, hours, or days.',
    },
    {
      question: 'Can I cancel a self-destruct timer?',
      answer:
        'Yes. You can cancel a self-destruct timer anytime before it expires through the page menu. Once cancelled, the page is kept permanently unless you set a new timer.',
    },
    {
      question: 'Can I combine self-destruct with encryption?',
      answer:
        'Yes. You can encrypt a page with AES-256-GCM and set a self-destruct timer on the same page. The content remains encrypted while it exists, then is permanently destroyed when the timer expires.',
    },
  ];

  const warningMilestones = [
    {
      threshold: 'Under 2 hours',
      behavior: 'Badge shifts to warm/urgent tones',
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
    },
    {
      threshold: '10 minutes',
      behavior: 'Brief pulse animation',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    },
    {
      threshold: '5 minutes',
      behavior: 'Double pulse, timer icon animates',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    },
    {
      threshold: '1 minute',
      behavior: 'Shake animation, switches to seconds',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    },
    {
      threshold: '10 seconds',
      behavior: 'Continuous urgent pulse with glow',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Timer, text: 'Self-Destructing Notes' }}
        headline="Notes That Delete Themselves."
        highlightedWord="Delete"
        subheadline="Set a timer, and when it expires, the note is permanently destroyed. No recovery, no trash folder, no undo."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-it-works' }}
      >
        {/* App mockup showing countdown timer */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full">
              <Timer className="w-3 h-3" />
              <span className="text-xs font-medium">2h 15m remaining</span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Timer className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Temp Passwords</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Timer className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Meeting Notes</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Private Journal</span>
                </div>
              </div>
            </div>

            {/* Note content with countdown */}
            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Temp Passwords</h4>
                <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                  <Timer className="w-3 h-3" />
                  <span className="text-xs font-mono font-medium">2:15:42</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/5" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-3 h-3" />
                <span>This note will self-destruct when the timer expires</span>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Why Self-Destructing Notes? */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="text-blue-600 dark:text-blue-400">Self-Destructing</span> Notes?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not everything you write needs to last forever. Some notes are better off disappearing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whySelfDestruct.map((item, index) => (
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

      {/* Server vs Client-Side Destruction */}
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
              Server vs <span className="text-blue-400">Client-Side</span> Destruction
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Where your notes are stored and deleted matters. Here is how the two approaches compare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Server-Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
                <div className="w-12 h-12 bg-slate-700/50 border border-slate-600 rounded-xl flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Server-Side Destruction</h3>
                <ul className="space-y-3">
                  {[
                    'Note stored on a server with expiration',
                    'Requires trust in server operator',
                    'Data exists on someone else\u2019s infrastructure',
                    'Deletion may not be verifiable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 mt-6">Examples: Privnote, One Time Secret</p>
              </div>
            </motion.div>

            {/* Client-Side (Dash) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-full bg-slate-800/60 border-2 border-blue-500/50 rounded-2xl p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/30">Dash</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client-Side Destruction</h3>
                <ul className="space-y-3">
                  {[
                    'Note stored locally with expiration timestamp',
                    'No third-party trust required',
                    'Deletion happens on your hardware',
                    'Works fully offline',
                    'Verifiable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Dash Implements It */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Dash <span className="text-blue-600 dark:text-blue-400">Implements</span> It
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three simple steps from creation to permanent deletion.
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Set a Timer</h3>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Timer className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Choose Duration</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {['1h', '1d', '7d', '30d'].map((preset) => (
                      <div
                        key={preset}
                        className={`text-center py-1.5 text-xs font-medium rounded-lg border ${
                          preset === '1d'
                            ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400'
                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {preset}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 text-center">Or custom: 1 min to 1 year</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Countdown Begins</h3>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800 text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300 font-medium font-mono">23:41:08</p>
                  <p className="text-xs text-amber-600/70 dark:text-amber-400/70 mt-1">Warnings at 2h, 10m, 5m, 1m, 10s</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Permanent Deletion</h3>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Page Destroyed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-red-200/50 dark:bg-red-900/30 rounded w-full blur-sm" />
                    <div className="h-2 bg-red-200/50 dark:bg-red-900/30 rounded w-4/5 blur-sm" />
                    <div className="h-2 bg-red-200/50 dark:bg-red-900/30 rounded w-3/4 blur-sm" />
                  </div>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-3">No trash. No recovery. No undo.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown & Warning System */}
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
                Countdown & <span className="text-blue-600 dark:text-blue-400">Warning</span> System
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Visual urgency escalates as expiration approaches so you never miss the moment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-red-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Bell className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Warning Milestones</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {warningMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.threshold}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                    >
                      <div className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold ${milestone.color}`}>
                        {milestone.threshold}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 dark:text-gray-300">{milestone.behavior}</p>
                      </div>
                      <Timer className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Combine with Encryption */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Combine with <span className="text-blue-600 dark:text-blue-400">Encryption</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Layer self-destruction on top of encryption for maximum protection.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {combineWithEncryption.map((item, index) => (
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
                Self-Destruct <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Sensitive notes deserve a deadline"
        subheadline="Self-destructing notes with encryption. $14.99 one-time."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
