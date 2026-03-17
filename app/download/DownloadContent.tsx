'use client';

import React from 'react';
import Link from 'next/link';
import {
  Download,
  Apple,
  Globe,
  Monitor,
  Smartphone,
  ExternalLink,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';

export default function DownloadContent() {
  const platforms = [
    {
      name: 'macOS',
      status: 'available' as const,
      note: 'Recommended',
      primary: true,
    },
    {
      name: 'Web PWA',
      status: 'available' as const,
      note: 'Any browser',
      primary: false,
    },
    {
      name: 'Windows',
      status: 'unavailable' as const,
      note: 'Not yet available',
      primary: false,
    },
    {
      name: 'Linux',
      status: 'unavailable' as const,
      note: 'Not yet available',
      primary: false,
    },
    {
      name: 'iOS / Android',
      status: 'pwa' as const,
      note: 'Use Web PWA',
      primary: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: Download, text: 'Download Dash' }}
        headline="Get Dash for Your Device"
        highlightedWord="Device"
        subheadline="Dash runs best on Mac. Available as a native app with auto-updates, or as a Progressive Web App for any browser."
      />

      {/* Mac Download Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mac Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800/50 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-3 left-6">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </span>
              </div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Apple className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Dash for Mac
              </h2>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                $14.99
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                One-time purchase
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Native Electron app with auto-updates. The best way to experience Dash with full system integration, Touch ID support, and automatic updates.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Native macOS experience',
                  'Automatic updates',
                  'Touch ID / biometric unlock',
                  'Menu bar integration',
                  'Offline by default',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  document
                    .getElementById('payment-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-center"
              >
                Get Dash for Mac
              </button>
            </motion.div>

            {/* PWA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Web PWA
              </h2>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                Free
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Works in any browser
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Use Dash as a Progressive Web App directly in your browser. Free and works on any platform. The Mac app is recommended for the best experience.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Works on any platform',
                  'No installation required',
                  'Install as PWA for offline use',
                  'Same encryption & privacy',
                  'Free forever',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="https://efesop.github.io/rich-text-editor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                Open Web App
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform <span className="text-blue-600 dark:text-blue-400">Availability</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dash is available on Mac and the web today, with more platforms coming soon.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              {platforms.map((platform, index) => {
                const isAvailable = platform.status === 'available';
                const isPwa = platform.status === 'pwa';
                const IconComponent = platform.name === 'macOS' ? Monitor :
                  platform.name === 'Web PWA' ? Globe :
                  platform.name === 'iOS / Android' ? Smartphone : Monitor;

                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center justify-between px-6 py-4 ${
                      index !== platforms.length - 1
                        ? 'border-b border-gray-100 dark:border-gray-700'
                        : ''
                    } ${platform.primary ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {platform.name}
                      </span>
                      {platform.primary && (
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-medium">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {isAvailable ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : isPwa ? (
                        <Globe className="w-5 h-5 text-blue-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                      )}
                      <span
                        className={`text-sm ${
                          isAvailable
                            ? 'text-green-600 dark:text-green-400'
                            : isPwa
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400 dark:text-gray-500'
                        }`}
                      >
                        {platform.note}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <PaymentSection />

      <Footer />
    </main>
  );
}
