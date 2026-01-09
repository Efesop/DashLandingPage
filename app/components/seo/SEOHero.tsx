'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

interface SEOHeroProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  headline: string;
  highlightedWord?: string;
  subheadline: string;
  primaryCTA?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function SEOHero({
  badge,
  headline,
  highlightedWord,
  subheadline,
  primaryCTA,
  secondaryCTA,
  children,
  variant = 'light',
}: SEOHeroProps) {
  const isDark = variant === 'dark';

  // Split headline to highlight specific word
  let headlineParts: { before: string; highlight: string; after: string } | null = null;
  if (highlightedWord && headline.includes(highlightedWord)) {
    const index = headline.indexOf(highlightedWord);
    headlineParts = {
      before: headline.substring(0, index),
      highlight: highlightedWord,
      after: headline.substring(index + highlightedWord.length),
    };
  }

  return (
    <section
      className={`relative overflow-hidden min-h-[85vh] flex items-center ${isDark
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950'
        }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  className={`inline-flex items-center rounded-full px-4 py-2 border ${isDark
                      ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                      : 'bg-white dark:bg-gray-900 border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 shadow-lg shadow-blue-500/5'
                    }`}
                >
                  <badge.icon className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              </motion.div>
            )}

            {/* Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-gray-900 dark:text-white'
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
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl leading-relaxed max-w-xl ${isDark ? 'text-slate-300' : 'text-gray-600 dark:text-gray-300'
                  }`}
              >
                {subheadline}
              </motion.p>
            </div>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                {primaryCTA && (
                  <Button
                    onClick={
                      primaryCTA.onClick ||
                      (() =>
                        document
                          .getElementById('payment-section')
                          ?.scrollIntoView({ behavior: 'smooth' }))
                    }
                    className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300"
                  >
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    className={`flex items-center gap-2 h-14 px-4 text-sm font-medium transition-colors ${isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                      }`}
                  >
                    <span>{secondaryCTA.text}</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </a>
                )}
              </motion.div>
            )}

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {['No account needed', 'Works offline', 'AES-256 encrypted'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Custom content (mockups, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative ring behind mockup */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative">
                {children}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
