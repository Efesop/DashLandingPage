'use client';

import React, { useState } from 'react';
import {
  Share2,
  Lock,
  Shield,
  Key,
  Users,
  Link,
  QrCode,
  Clock,
  Eye,
  Wifi,
  Globe,
  MousePointer2,
  UserCheck,
  Minus,
  Plus,
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

export default function ShareContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sharingFeatures = [
    {
      icon: Lock,
      title: 'Client-Side Encryption',
      description:
        'Notes are encrypted with AES-256-GCM on your device before anything touches the network. The plaintext never leaves your machine.',
    },
    {
      icon: Shield,
      title: 'Zero-Knowledge Relay',
      description:
        'The relay server only handles encrypted blobs it cannot read. No accounts, no logs, auto-deleted after 30 days.',
    },
    {
      icon: Key,
      title: 'Key in URL Fragment',
      description:
        'The encryption key lives in the URL fragment (#) — never sent to the server. Only the person with the link can decrypt.',
    },
  ];

  const howItWorks = [
    {
      icon: Lock,
      step: '1',
      title: 'Encrypt',
      description:
        'Content is encrypted client-side with AES-256-GCM using a random key. The plaintext never leaves your device.',
    },
    {
      icon: Share2,
      step: '2',
      title: 'Share',
      description:
        'For short notes, encrypted data goes in the URL fragment. For larger notes, the encrypted blob is uploaded to the zero-knowledge relay.',
    },
    {
      icon: Eye,
      step: '3',
      title: 'Decrypt',
      description:
        'The recipient opens the link. The key in the URL fragment decrypts the content in their browser — the server never sees plaintext.',
    },
  ];

  const collaborationFeatures = [
    {
      icon: Wifi,
      title: 'Real-Time E2E Encrypted Editing',
      description:
        'WebSocket relay broadcasts encrypted binary messages between participants. A random 256-bit key is generated per session — the relay cannot read your content.',
    },
    {
      icon: Clock,
      title: 'Session Controls',
      description:
        'Duration options (1h, 6h, 24h, 1 week, unlimited) and optional session password for access control. You decide who can join and for how long.',
    },
    {
      icon: MousePointer2,
      title: 'Live Cursors & Presence',
      description:
        'See where other participants are editing in real-time. Typing indicators and participant avatars keep everyone in sync.',
    },
    {
      icon: UserCheck,
      title: 'Edit Request System',
      description:
        'Guests can request edit access. The host approves or dismisses via the notification panel — full control over who can modify the note.',
    },
  ];

  const extraFeatures = [
    {
      icon: Key,
      title: 'Optional Password Protection',
      description:
        'Separate the link from the decryption password. Share them through different channels for an extra layer of security.',
    },
    {
      icon: QrCode,
      title: 'QR Code for Passwords',
      description:
        'Share the password via a QR code for convenient in-person exchange. Keep the link and password on separate channels.',
    },
    {
      icon: Link,
      title: 'Deep Link Support',
      description:
        'Recipients with Dash installed can import directly via the dashnotes:// protocol. One tap to open and decrypt.',
    },
    {
      icon: Globe,
      title: 'Native Share Sheet',
      description:
        'AirDrop, Messages, and other share options on supported platforms. Share encrypted links using the tools you already know.',
    },
  ];

  const faqs = [
    {
      question: 'How does encrypted sharing work in Dash?',
      answer:
        'Notes are encrypted client-side with AES-256-GCM before leaving your device. For short notes, the encrypted data is embedded directly in the URL fragment. For larger notes, the encrypted blob is uploaded to a zero-knowledge relay server with a 30-day TTL. The encryption key lives in the URL fragment and is never sent to the server.',
    },
    {
      question: 'Can the relay server read my shared notes?',
      answer:
        'No. The relay server operates on a zero-knowledge basis. Your notes are encrypted before they are uploaded, and the encryption key is stored in the URL fragment which is never sent to the server. The relay only handles encrypted blobs it cannot read.',
    },
    {
      question: 'How do live collaboration sessions work?',
      answer:
        'Live collaboration uses an E2E encrypted WebSocket connection. A random 256-bit key is generated for each session and shared via the URL fragment. All messages are encrypted binary data that the relay server cannot read. Participants see live cursors, typing indicators, and presence information.',
    },
    {
      question: 'How long are shared notes stored?',
      answer:
        'Shared notes on the relay server are auto-deleted after 30 days. If your note is small enough to fit in the URL fragment, it is never stored on any server at all — the encrypted data travels entirely within the link itself.',
    },
    {
      question: 'Can I password-protect a shared note?',
      answer:
        'Yes. You can add a separate password for extra security, allowing you to share the link and the password through different channels. You can also share the password via a QR code for convenient in-person exchange.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Share2, text: 'Encrypted Sharing' }}
        headline="Share Notes Without Giving Up Privacy"
        highlightedWord="Privacy"
        subheadline="End-to-end encrypted sharing and live collaboration. Your notes are encrypted before they leave your device — the relay server can never read your content."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-sharing-works' }}
      >
        {/* Sharing mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <Share2 className="w-3 h-3" />
              <span className="text-xs font-medium">Sharing</span>
            </div>
          </div>

          <div className="p-6">
            {/* Note preview */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Meeting Notes</h3>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">Encrypted</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p>Q1 planning session highlights...</p>
                <p className="text-gray-400">3 paragraphs, 2 checklists</p>
              </div>
            </div>

            {/* Encrypted link */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Link className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Encrypted Share Link</span>
              </div>
              <div className="font-mono text-xs text-gray-500 dark:text-gray-400 break-all">
                dashnote.io/s/a3f8...#<span className="text-blue-600 dark:text-blue-400">k=7x9B...mQ2p</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>AES-256-GCM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Expires in 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Encrypted Sharing Features */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Encrypted <span className="text-blue-600 dark:text-blue-400">Sharing</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Share notes without exposing your content to any server. Everything is encrypted before it leaves your device.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sharingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Sharing Works */}
      <section id="how-sharing-works" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Sharing <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Three steps. Zero trust required in the server.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Share notes without compromising privacy" />

      {/* Live Collaboration */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Live <span className="text-blue-600 dark:text-blue-400">Collaboration</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-time collaborative editing with end-to-end encryption. The relay server never sees your content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {collaborationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Full transparency on how encrypted sharing and live collaboration work under the hood
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
                  <h3 className="text-lg font-semibold text-white">Sharing & Collaboration Specs</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Sharing Encryption', value: 'AES-256-GCM', detail: 'Authenticated encryption with associated data' },
                    { label: 'Session Encryption', value: 'AES-256-GCM', detail: 'Random 256-bit key per session' },
                    { label: 'Key Exchange', value: 'URL Fragment', detail: 'Key in # fragment — never sent to server' },
                    { label: 'Relay Server', value: 'dash-relay.efesop.deno.dev', detail: 'Zero-knowledge, handles only encrypted blobs' },
                    { label: 'Data Retention', value: '30 days', detail: 'Auto-deleted, or never stored if in URL fragment' },
                    { label: 'Protocol', value: 'WebSocket / HTTPS', detail: 'WebSocket for sessions, HTTPS for sharing' },
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

      {/* Extra Features */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              More Sharing <span className="text-blue-600 dark:text-blue-400">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {extraFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="light" hover={false} className="p-8 h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
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
              Sharing <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        { title: 'How Dash Encryption Works', href: '/guides/encryption', description: 'The encryption behind secure sharing.' },
        { title: 'Privacy-First Note Taking', href: '/guides/privacy-first-note-taking', description: 'Share without sacrificing privacy.' },
        { title: 'Self-Destructing Notes', href: '/guides/self-destructing-notes', description: 'Notes that delete after being read.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="Privacy-first sharing, built in"
        subheadline="E2E encrypted sharing and live collaboration. $14.99 one-time purchase."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
