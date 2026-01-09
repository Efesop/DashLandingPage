'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  headline?: string;
  highlightedWord?: string;
  subheadline?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'light' | 'dark';
}

export default function FeatureGrid({
  headline,
  highlightedWord,
  subheadline,
  features,
  columns = 3,
  variant = 'light',
}: FeatureGridProps) {
  const isDark = variant === 'dark';

  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  // Split headline to highlight specific word
  let headlineParts: { before: string; highlight: string; after: string } | null = null;
  if (headline && highlightedWord && headline.includes(highlightedWord)) {
    const index = headline.indexOf(highlightedWord);
    headlineParts = {
      before: headline.substring(0, index),
      highlight: highlightedWord,
      after: headline.substring(index + highlightedWord.length),
    };
  }

  return (
    <section
      className={`py-24 ${
        isDark
          ? 'bg-slate-900'
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        {(headline || subheadline) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {headline && (
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}
              >
                {headlineParts ? (
                  <>
                    {headlineParts.before}
                    <span className="text-blue-600 dark:text-blue-400">
                      {headlineParts.highlight}
                    </span>
                    {headlineParts.after}
                  </>
                ) : (
                  headline
                )}
              </h2>
            )}
            {subheadline && (
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  isDark ? 'text-slate-300' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {subheadline}
              </p>
            )}
          </motion.div>
        )}

        {/* Feature Grid */}
        <div className={`grid gap-6 ${columnClasses[columns]} max-w-6xl mx-auto`}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`h-full p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700'
                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isDark
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : 'bg-blue-100 dark:bg-blue-900/30'
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      isDark ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
