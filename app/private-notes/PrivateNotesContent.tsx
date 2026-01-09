'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Eye,
  WifiOff,
  Database,
  Key,
  CheckCircle,
  HardDrive,
  FileText,
  Minus,
  Plus,
  Cloud,
  CloudOff,
  Smartphone,
  Laptop,
  FolderLock,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSection from '../components/PaymentSection';
import CTABanner from '../components/seo/CTABanner';
import { Button } from '../components/ui/button';

export default function PrivateNotesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'My private thoughts...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const privacyFeatures = [
    {
      icon: WifiOff,
      title: '100% Offline',
      description:
        'Dash never connects to the internet. Your notes exist only on your device, making remote access impossible.',
    },
    {
      icon: Lock,
      title: 'AES-256 Encryption',
      description:
        'Military-grade encryption protects your notes. Even if someone gets your device, encrypted notes remain unreadable.',
    },
    {
      icon: Eye,
      title: 'Zero-Knowledge Design',
      description:
        'We never see your notes. There are no servers, no accounts, no way for anyone - including us - to access your data.',
    },
    {
      icon: Database,
      title: 'Local Storage Only',
      description:
        "All data stored in your device's local directory. You control exactly where your notes live.",
    },
    {
      icon: Key,
      title: 'Your Keys, Your Control',
      description:
        'Encryption keys are generated and stored locally. We never see or store them anywhere.',
    },
    {
      icon: FolderLock,
      title: 'Selective Encryption',
      description:
        'Choose which notes to encrypt. Keep casual notes quick to access while protecting sensitive information.',
    },
  ];

  const faqs = [
    {
      question: 'What makes Dash more private than other note apps?',
      answer:
        'Unlike cloud-based apps like Notion or Evernote, Dash stores everything locally on your device. There are no servers, no accounts, and no internet connection required. Your notes physically cannot be accessed by anyone but you.',
    },
    {
      question: 'How does the encryption work?',
      answer:
        "Dash uses AES-256-GCM encryption, the same standard used by banks and governments. When you password-protect a note, it's encrypted with a key derived using PBKDF2-SHA256 with 200,000 iterations, making brute-force attacks impractical.",
    },
    {
      question: 'Can Dash read my notes?',
      answer:
        'No. Dash is designed with zero-knowledge architecture. Your notes never leave your device, and encrypted notes can only be decrypted with your password. We have no servers, no accounts, and no way to access your data.',
    },
    {
      question: 'What happens if I lose my device?',
      answer:
        "Since notes are stored locally, losing your device means losing your notes unless you've exported backups. We recommend regularly exporting encrypted .dashpack files to external storage.",
    },
    {
      question: 'Is Dash open source?',
      answer:
        'Yes, Dash is open source. You can audit the code yourself on GitHub to verify our privacy claims. We believe transparency is essential for trust.',
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

      {/* Hero Section - Redesigned */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Private by Design</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Notes That Stay{' '}
                <span className="text-blue-400">On Your Device</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                Unlike cloud apps that store your thoughts on remote servers, Dash keeps everything local and encrypted. Your private notes stay private.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl"
                >
                  Get Dash for Mac
                </Button>
                <div className="flex items-center gap-2 text-slate-400 px-4">
                  <span className="text-sm">$14.99 one-time</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>No account needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Works offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>AES-256 encrypted</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Mockup: Cloud vs Local comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid gap-4">
                {/* Cloud app - crossed out */}
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-5 opacity-60">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500/60 -rotate-3" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Cloud Note Apps</p>
                      <p className="text-sm text-slate-400">Your notes on their servers</p>
                    </div>
                    <div className="text-red-400 text-xs font-medium bg-red-500/10 px-3 py-1 rounded-full">
                      Not Private
                    </div>
                  </div>
                </div>

                {/* Dash - highlighted */}
                <div className="relative bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-blue-500/40 rounded-2xl p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center">
                      <CloudOff className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Dash</p>
                      <p className="text-sm text-blue-300">100% offline and encrypted</p>
                    </div>
                    <div className="text-green-400 text-xs font-medium bg-green-500/10 px-3 py-1 rounded-full">
                      Private
                    </div>
                  </div>

                  {/* Typing animation mockup */}
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">Encrypted Note</span>
                    </div>
                    <p className="text-white font-mono text-sm">
                      {typedText}
                      <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse" />
                    </p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700">
                      <HardDrive className="w-3 h-3 text-slate-500" />
                      <span className="text-xs text-slate-500">Stored locally on your Mac</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Privacy Problem - Visual Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Problem With Cloud Notes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              When you use cloud-based note apps, your private thoughts travel through servers you do not control.
            </p>
          </motion.div>

          {/* Visual comparison */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Other Apps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50/50 dark:bg-red-950/10 border-2 border-red-200 dark:border-red-900/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Other Note Apps</h3>
              </div>

              {/* Flow diagram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                    <Laptop className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">You write a note</span>
                </div>
                <div className="ml-5 w-0.5 h-6 bg-red-300 dark:bg-red-700" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Sent to their servers</span>
                </div>
                <div className="ml-5 w-0.5 h-6 bg-red-300 dark:bg-red-700" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Can be read, scanned, breached</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-red-200 dark:border-red-900/50">
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Data breaches expose your notes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Companies can read your content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Requires constant internet
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Dash */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50/50 dark:bg-green-950/10 border-2 border-green-200 dark:border-green-900/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dash</h3>
              </div>

              {/* Flow diagram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                    <Laptop className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">You write a note</span>
                </div>
                <div className="ml-5 w-0.5 h-6 bg-green-300 dark:bg-green-700" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Encrypted on your device</span>
                </div>
                <div className="ml-5 w-0.5 h-6 bg-green-300 dark:bg-green-700" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Stays on your Mac forever</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-900/50">
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    No servers means no breaches
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Only you can read your notes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Works completely offline
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Dash Protects Your Privacy */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
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
              Privacy Features Built In
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every aspect of Dash is designed with your privacy in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {privacyFeatures.map((feature, index) => (
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

      {/* Mockup: Encryption Demo */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Password Protection for Sensitive Notes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Some notes need extra protection. With one click, encrypt any note with a password only you know.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">AES-256-GCM Encryption</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Same standard used by banks and governments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">200,000 PBKDF2 Iterations</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Makes brute-force attacks impractical</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Local Key Storage</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Keys never leave your device</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Encryption mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Note list */}
                <div className="space-y-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 flex-1">Shopping list</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 flex-1">Meeting notes</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-4 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 flex-1">Account details </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">Encrypted</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-4 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 flex-1">Personal journal</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">Encrypted</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Sync Mockup */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Phone mockup */}
                <div className="absolute -left-4 -bottom-8 lg:-left-20 lg:-bottom-4 xl:-left-24 w-32 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-2xl aspect-[9/16] flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-white text-xs font-medium">iPhone</p>
                      <p className="text-[10px] text-gray-400">PWA</p>
                    </div>
                  </div>
                </div>

                {/* Export arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-blue-500 to-blue-400" />
                </div>

                {/* Mac */}
                <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-4 shadow-2xl">
                  <div className="bg-white dark:bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Laptop className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-900 dark:text-white font-medium">Your Mac</p>
                      <p className="text-sm text-gray-500">Primary device</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sync Without the Cloud
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Need your notes on another device? Export encrypted bundles and import anywhere. No cloud required.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Encrypted .dashpack Files</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Your notes travel securely via AirDrop, email, or USB</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">PWA for Mobile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Access notes on iPhone or Android via browser</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">You Control the Transfer</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">No automatic syncing through third-party servers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
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
                Privacy Questions Answered
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
        headline="Ready for truly private notes?"
        subheadline="One-time purchase. Lifetime privacy."
        buttonText="Get Dash for $14.99"
      />

      <Footer />
    </main>
  );
}
