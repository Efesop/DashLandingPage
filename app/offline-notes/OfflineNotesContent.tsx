'use client';

import React, { useState } from 'react';
import {
  WifiOff,
  Shield,
  Lock,
  Database,
  Plane,
  Mountain,
  Zap,
  FileText,
  CheckCircle,
  Globe,
  Server,
  CloudOff,
  HardDrive,
  Save,
  Search,
  Palette,
  Download,
  Minus,
  Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import SEOHero from '../components/seo/SEOHero';
import CTABanner from '../components/seo/CTABanner';

export default function OfflineNotesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const offlineBenefits = [
    {
      icon: Plane,
      title: 'Works on Flights',
      description:
        'No WiFi required. Take notes during long flights, in airplane mode, without any connectivity issues.',
    },
    {
      icon: Mountain,
      title: 'Remote Locations',
      description:
        'Perfect for travel, camping, or anywhere with unreliable internet. Your notes are always accessible.',
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description:
        'No loading spinners, no sync delays. Your notes open instantly because they are stored locally.',
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description:
        'Data that never transmits cannot be intercepted. Offline-first means secure-first.',
    },
  ];

  const howOfflineWorks = [
    {
      icon: CloudOff,
      title: 'Zero Network Requests',
      description:
        'Dash never connects to the internet. No API calls, no telemetry, no analytics. Complete network isolation.',
    },
    {
      icon: HardDrive,
      title: 'Local Storage Only',
      description:
        'All notes are stored in your device local directory. macOS: ~/Library/Application Support/Dash/',
    },
    {
      icon: Server,
      title: 'No Cloud Sync',
      description:
        'There are no servers to sync with. No accounts, no cloud storage, no third-party dependencies.',
    },
    {
      icon: Globe,
      title: 'Works Anywhere',
      description:
        'Flights, remote areas, underground, or just bad WiFi. Your notes work regardless of connectivity.',
    },
  ];

  const offlineFeatures = [
    {
      icon: FileText,
      title: 'Full Editor',
      description: 'Rich text editing with headers, lists, code blocks - all offline.',
    },
    {
      icon: Save,
      title: 'Auto-Save',
      description: 'Changes saved instantly to your device. Never lose work.',
    },
    {
      icon: Download,
      title: 'Export Offline',
      description: 'Export to PDF, Markdown, Word without internet.',
    },
    {
      icon: Search,
      title: 'Search Offline',
      description: 'Find any note instantly with local search.',
    },
    {
      icon: Palette,
      title: 'Themes Work',
      description: 'Light, dark, and Fallout themes all work offline.',
    },
    {
      icon: Lock,
      title: 'Encrypt Offline',
      description: 'Password-protect notes without any connection.',
    },
  ];

  const useCases = [
    {
      title: 'Travel and Flights',
      description: 'Long-haul flights, train journeys, road trips - take notes anywhere without worrying about connectivity.',
    },
    {
      title: 'Remote Work',
      description: 'Working from a cabin, beach, or anywhere off-grid? Your notes are always there.',
    },
    {
      title: 'Privacy-Conscious Users',
      description: 'If your notes never touch the internet, they cannot be intercepted or leaked.',
    },
    {
      title: 'Unreliable Connections',
      description: 'Bad WiFi? Spotty cellular? It does not matter - Dash works the same.',
    },
  ];

  const faqs = [
    {
      question: 'How does Dash work without internet?',
      answer:
        'Dash stores all your notes locally on your device. The app never makes network requests - no API calls, no sync, no telemetry. Everything happens on your machine, so internet connectivity is simply not needed.',
    },
    {
      question: 'Where are my notes stored?',
      answer:
        'On macOS, notes are stored in ~/Library/Application Support/Dash/. On the PWA version, notes are stored in your browser IndexedDB. You always have direct access to your data files.',
    },
    {
      question: 'Can I sync notes between devices?',
      answer:
        'While there is no cloud sync (by design), you can export notes as encrypted .dashpack files and import them on another device. This gives you control over when and how data moves between devices.',
    },
    {
      question: 'What happens if I lose my device?',
      answer:
        'Since notes are stored locally, losing your device means losing your notes unless you have exported backups. We recommend regularly exporting encrypted .dashpack backups to external storage.',
    },
    {
      question: 'Does the search feature work offline?',
      answer:
        'Yes, everything works offline. Search, editing, formatting, themes, encryption, export - all features work without any internet connection.',
    },
    {
      question: 'Is the PWA version also fully offline?',
      answer:
        'Yes. Once you install the PWA, it works completely offline. Notes are stored in your browser and the app is cached locally.',
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

      {/* Hero Section */}
      <SEOHero
        badge={{ icon: WifiOff, text: 'Works Offline' }}
        headline="Notes That Work Without Internet."
        highlightedWord="Without"
        subheadline="No WiFi? No problem. Dash works 100% offline - no servers, no sync, no internet required. Your notes are always accessible."
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'See how it works', href: '#how-it-works' }}
      >
        {/* App mockup showing offline mode */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full">
                <WifiOff className="w-3 h-3" />
                <span className="text-xs font-medium">Offline Mode</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                <Plane className="w-3 h-3" />
                <span className="text-xs">Airplane Mode On</span>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">MY NOTES</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-900 dark:text-white font-medium truncate">Flight Journal</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Travel Plans</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Book Ideas</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 truncate">Personal</span>
                </div>
              </div>
            </div>

            {/* Note content */}
            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Flight Journal
                </h3>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Save className="w-4 h-4" />
                  <span className="text-xs font-medium">Saved locally</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                <p className="text-gray-500 text-xs">30,000 feet over the Atlantic</p>
                <p>Currently on a 9-hour flight to London. No WiFi, but Dash works perfectly...</p>
                <p>Ideas for the presentation:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Open with the privacy problem</li>
                  <li>Show offline demo</li>
                  <li>Compare to cloud alternatives</li>
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <WifiOff className="w-3 h-3 text-green-500" />
                  <span>No internet needed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HardDrive className="w-3 h-3" />
                  <span>Stored on device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SEOHero>

      {/* Benefits of Offline */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="text-blue-600 dark:text-blue-400">Offline</span> Matters
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Internet is not always available. Your notes should be.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {offlineBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 h-full text-center">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Offline Works */}
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
              How <span className="text-blue-400">Offline</span> Works
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Not just works offline - built offline from the ground up.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {howOfflineWorks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything Works <span className="text-blue-600 dark:text-blue-400">Offline</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Full functionality without any internet connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offlineFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              When <span className="text-blue-600 dark:text-blue-400">Offline</span> Matters Most
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {useCase.description}
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
                Offline <span className="text-blue-600 dark:text-blue-400">Questions</span>
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
        headline="Take notes anywhere"
        subheadline="No internet required. $14.99 one-time purchase."
        buttonText="Get Dash Now"
      />

      <Footer />
    </main>
  );
}
