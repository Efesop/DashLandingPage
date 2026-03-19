'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  MessageSquare,
  Terminal,
  ArrowRight,
  Bot,
  Shield,
  KeyRound,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AIOrb from './AIOrb';

export default function LocalAISection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Guided Actions',
      description:
        'Summarize, rewrite, expand, fix grammar, and convert to bullets. Select text and let AI do the rest.',
    },
    {
      icon: MessageSquare,
      title: 'Chat Mode',
      description:
        'Ask follow-up questions about your notes. In-memory only — history is cleared when you close the panel.',
    },
    {
      icon: Terminal,
      title: 'Multi-Provider',
      description:
        'Ollama, LM Studio, LocalAI, Jan, or any OpenAI-compatible server running on localhost.',
    },
  ];

  const trustChips = [
    { icon: Shield, label: 'Hard localhost enforcement' },
    { icon: KeyRound, label: 'No API keys needed' },
    { icon: Lock, label: 'Encrypted pages blocked from AI' },
  ];

  return (
    <section id="local-ai" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-6">
            <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Local AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI that stays on{' '}
            <span className="text-emerald-600 dark:text-emerald-400">your device</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect to local AI models like Ollama or LM Studio. Summarize, rewrite, brainstorm, and chat — without your notes ever leaving your machine.
          </p>
        </motion.div>

        {/* AI Orb visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-14"
        >
          <AIOrb size={160} />
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-7 h-full">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {trustChips.map((chip) => (
            <div
              key={chip.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400"
            >
              <chip.icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {chip.label}
            </div>
          ))}
        </motion.div>

        {/* Learn more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/guides/local-ai"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
          >
            Learn more about Local AI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
