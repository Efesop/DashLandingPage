'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  Send,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AIOrb from './AIOrb';

const placeholderPrompts = [
  'Summarize my meeting notes...',
  'Rewrite this paragraph more concisely...',
  'Create a to-do list from these notes...',
  'Expand on this idea...',
  'Fix the grammar in this section...',
];

export default function LocalAISection() {
  const [generating, setGenerating] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderPrompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || generating) return;
    setGenerating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setGenerating(false);
      setInputValue('');
    }, 4000);
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
            <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Local AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI that stays on{' '}
            <span className="text-blue-600 dark:text-blue-400">your device</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect to local AI models like Ollama or LM Studio. Summarize, rewrite, brainstorm, and chat — without your notes ever leaving your machine.
          </p>
        </motion.div>

        {/* AI Orb with interactive input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center mb-14"
        >
          <AIOrb size={160} generating={generating} />

          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full max-w-md"
          >
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholderPrompts[placeholderIndex]}
                disabled={generating}
                className="w-full px-5 py-3 pr-12 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 disabled:opacity-60 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || generating}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
              {generating ? 'Generating locally...' : 'Type a prompt and press Enter to see it generate'}
            </p>
          </form>
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
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
              <chip.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
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
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more about Local AI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
