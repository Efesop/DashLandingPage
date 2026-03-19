'use client';

import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Layers,
  MessageSquare,
  Shield,
  Terminal,
  Lock,
  Cpu,
  KeyRound,
  WifiOff,
  Minus,
  Plus,
  Check,
  X,
  PenLine,
  GraduationCap,
  Code,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PaymentSection from '../../components/PaymentSection';
import SEOHero from '../../components/seo/SEOHero';
import CTABanner from '../../components/seo/CTABanner';
import InlineCTA from '../../components/seo/InlineCTA';
import RelatedLinks from '../../components/seo/RelatedLinks';
import AIOrb from '../../components/AIOrb';

export default function LocalAIGuideContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const aiModes = [
    {
      icon: Sparkles,
      title: 'Guided Actions',
      description:
        'Select text and choose from summarize, rewrite, continue, fix grammar, expand, or convert to bullet points. One click, instant results.',
    },
    {
      icon: Layers,
      title: 'Generative Mode',
      description:
        'Start from scratch — brainstorm ideas, create outlines, generate to-do lists, meeting notes, pros and cons, journal entries, and more.',
    },
    {
      icon: MessageSquare,
      title: 'Chat Mode',
      description:
        'Ask follow-up questions about your notes. Conversation history is kept in memory only and cleared when you close the panel.',
    },
  ];

  const howItWorks = [
    {
      icon: Shield,
      title: 'Hard Localhost Enforcement',
      description:
        'The code rejects any non-local endpoint. Your data physically cannot leave your machine through the AI feature.',
    },
    {
      icon: Terminal,
      title: 'Multi-Provider Support',
      description:
        'Works with Ollama, LM Studio, LocalAI, Jan, or any OpenAI-compatible server running on localhost.',
    },
    {
      icon: Layers,
      title: 'Multi-Block Selection',
      description:
        'Select multiple blocks of content and send them all to AI at once. The editor highlights selected blocks while the AI panel is open.',
    },
    {
      icon: Cpu,
      title: 'Streaming Responses',
      description:
        'AI responses stream in real-time as formatted markdown. Styles adapt to all four Dash themes.',
    },
    {
      icon: KeyRound,
      title: 'No Keys or Accounts',
      description:
        'No API keys. No accounts. No sign-up. Just point Dash at your local model and start writing.',
    },
    {
      icon: Lock,
      title: 'Encrypted Pages Blocked',
      description:
        'Locked pages are automatically excluded from AI access. Privacy always comes first — unlock to use AI.',
    },
  ];

  const faqs = [
    {
      question: 'How does Local AI work in Dash?',
      answer:
        'Dash connects to AI models running on your computer via localhost. It works with Ollama, LM Studio, LocalAI, Jan, or any OpenAI-compatible local server. Your notes are sent to the local model for processing — they never leave your device.',
    },
    {
      question: 'Does Dash send my notes to the cloud for AI?',
      answer:
        'No. Dash enforces a hard localhost restriction — the code rejects any non-local endpoint. Your notes are processed entirely on your device by a model you control. No cloud servers are ever contacted for AI features.',
    },
    {
      question: 'What AI providers does Dash support?',
      answer:
        'Built-in presets for Ollama, LM Studio, LocalAI, and Jan. Also supports any OpenAI-compatible endpoint running on localhost. All connections are local-only.',
    },
    {
      question: 'Can AI access my encrypted pages?',
      answer:
        'No. Encrypted pages are automatically blocked from AI access. You must explicitly unlock a page before AI can process its content.',
    },
    {
      question: 'Do I need an API key or subscription?',
      answer:
        'No. Local AI servers like Ollama are free and open source. Dash requires no API keys, no accounts, and no subscriptions for AI features.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Bot, text: 'Local AI Guide' }}
        headline="AI That Never Leaves Your Device"
        highlightedWord="Never Leaves"
        subheadline="Summarize, rewrite, brainstorm, and chat with AI — powered by local models on your machine. No API keys, no cloud, no data ever sent anywhere."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-it-works' }}
      >
        {/* AI panel mockup */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full">
              <Bot className="w-3 h-3" />
              <span className="text-xs font-medium">Local AI</span>
            </div>
          </div>

          <div className="flex">
            {/* Note content side */}
            <div className="flex-1 p-5 border-r border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  The quarterly results show a <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-0.5 rounded">15% increase in user retention</span> compared to last quarter.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-0.5 rounded">Key factors include the new onboarding flow and reduced churn from pricing changes.</span>
                </p>
              </div>
            </div>

            {/* AI panel side */}
            <div className="w-52 p-4 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">AI Response</span>
              </div>
              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="font-medium text-gray-800 dark:text-gray-200">Summary:</p>
                <p>User retention up 15% QoQ, driven by improved onboarding and pricing adjustments.</p>
              </div>
              <div className="mt-3 flex gap-1.5">
                <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-[10px] font-medium">Replace</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-[10px] font-medium">Insert</div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-[10px] font-medium">Copy</div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Section 1 - Three AI Modes */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Three Ways to Use <span className="text-blue-600 dark:text-blue-400">AI</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Guided actions for quick edits, generative mode for new content, and chat for deeper exploration — all running locally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiModes.map((item, index) => (
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

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl mx-auto">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mr-1">Perfect for</span>
            {[
              { icon: PenLine, label: 'Writers' },
              { icon: GraduationCap, label: 'Students' },
              { icon: Code, label: 'Developers' },
            ].map((chip) => (
              <div key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                <chip.icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
              Local AI in Dash is private by architecture, not by policy. Here is what makes it different.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center mb-12"
          >
            <AIOrb size={140} generating />
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

      <InlineCTA text="Try Local AI in Dash — $14.99, one-time purchase" variant="dark" />

      {/* Section 3 - Dash vs Others */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Dash vs <span className="text-blue-600 dark:text-blue-400">Others</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                How Dash Local AI compares to other note-taking apps
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">AI Comparison</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-blue-600 dark:text-blue-400">Dash</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Notion</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Obsidian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Runs locally on device', dash: true, notion: false, obsidian: false },
                      { feature: 'No API key required', dash: true, notion: false, obsidian: false },
                      { feature: 'No cloud connection', dash: true, notion: false, obsidian: false },
                      { feature: 'Multi-provider support', dash: true, notion: false, obsidian: false },
                      { feature: 'Encrypted page protection', dash: true, notion: false, obsidian: false },
                      { feature: 'Streaming responses', dash: true, notion: true, obsidian: false },
                      { feature: 'No telemetry', dash: true, notion: false, obsidian: true },
                    ].map((row, index) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-gray-100 dark:border-gray-700 last:border-0 ${
                          index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.dash ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.notion ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.obsidian ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                Local AI <span className="text-blue-600 dark:text-blue-400">FAQ</span>
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

      <RelatedLinks heading="Related" links={[
        { title: 'Privacy-First Note Taking', href: '/guides/privacy-first-note-taking', description: 'The philosophy behind truly private notes.' },
        { title: 'How Dash Encryption Works', href: '/guides/encryption', description: 'AES-256-GCM encryption explained.' },
        { title: 'Offline-First Architecture', href: '/guides/offline-first', description: 'How Dash works without an internet connection.' },
      ]} />

      {/* CTA Banner */}
      <CTABanner
        headline="AI-powered notes, completely private"
        subheadline="Local AI with zero cloud dependencies. $14.99 one-time purchase."
        buttonText="Get Dash for Mac"
      />

      <Footer />
    </main>
  );
}
