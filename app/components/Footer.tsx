'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Eye, Database, Zap, Twitter, Coffee } from 'lucide-react';

export default function Footer() {
  const privacyFeatures = [
    { icon: Shield, label: '100% Offline' },
    { icon: Eye, label: 'No Tracking' },
    { icon: Lock, label: 'No Account Needed' },
    { icon: Database, label: 'AES-256 Encrypted' },
    { icon: Zap, label: 'Zero Knowledge' },
  ];

  const useCaseLinks = [
    { href: '/private-notes', label: 'Private Notes App' },
    { href: '/encrypted-notes', label: 'Encrypted Notes App' },
    { href: '/offline-notes', label: 'Offline Notes App' },
    { href: '/secure-journal', label: 'Encrypted Diary' },
    { href: '/for-journalists', label: 'For Journalists' },
    { href: '/for-writers', label: 'For Writers' },
    { href: '/for-students', label: 'For Students' },
    { href: '/for-researchers', label: 'For Researchers' },
    { href: '/for-bitcoiners', label: 'For Bitcoiners' },
    { href: '/therapist-notes-app', label: 'For Therapists' },
    { href: '/share', label: 'Encrypted Sharing' },
    { href: '/password-protected-notes', label: 'Password-Protected Notes' },
    { href: '/privnote-alternatives', label: 'Privnote Alternatives' },
    { href: '/download', label: 'Download Dash' },
  ];

  const comparisonLinks = [
    { href: '/vs-notion', label: 'Dash vs Notion' },
    { href: '/vs-evernote', label: 'Dash vs Evernote' },
    { href: '/vs-obsidian', label: 'Dash vs Obsidian' },
    { href: '/vs-google-keep', label: 'Dash vs Google Keep' },
    { href: '/best-notes-app-for-mac', label: 'Best Notes Apps for Mac' },
    { href: '/open-source-notes-app', label: 'Open Source Notes Apps' },
    { href: '/journal-app-mac', label: 'Journal Apps for Mac' },
    { href: '/day-one-alternative', label: 'Day One Alternatives' },
    { href: '/obsidian-alternatives', label: 'Obsidian Alternatives' },
    { href: '/notion-alternatives', label: 'Notion Alternatives' },
    { href: '/evernote-alternatives', label: 'Evernote Alternatives' },
  ];

  return (
    <footer className='bg-[#f5f5f7] border-t border-gray-200 relative overflow-hidden'>
      {/* Glass divider at top */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent' />

      {/* Background decoration */}
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 lg:px-8 py-16 relative z-10'>
        <div className='grid gap-12 lg:grid-cols-12'>
          {/* Brand section */}
          <div className='lg:col-span-4'>
            <Link href='/' className='flex items-center space-x-3 mb-6'>
              <Image
                src='/images/Dash256.png'
                alt='Dash Logo'
                width={40}
                height={40}
                className='h-10 w-10 rounded-lg'
                unoptimized
                loading='eager'
              />
              <span className='text-2xl font-semibold text-gray-900'>Dash Notes</span>
            </Link>
            <p className='text-gray-600 mb-6 max-w-md leading-relaxed'>
              Private, encrypted notes for Mac and iPhone. Everything stays on
              your device unless you choose to sync it.
            </p>

            {/* Privacy badges */}
            <div className='flex flex-wrap gap-2'>
              {privacyFeatures.slice(0, 3).map((feature) => (
                <div
                  key={feature.label}
                  className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs'
                >
                  <feature.icon className='w-3 h-3 text-gray-700' />
                  <span className='text-gray-700'>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-gray-900 mb-6'>Use Cases</h3>
            <ul className='space-y-3'>
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-gray-600 transition-colors' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-gray-900 mb-6'>Compare</h3>
            <ul className='space-y-3'>
              {comparisonLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-gray-600 transition-colors' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-gray-900 mb-6'>Guides</h3>
            <ul className='space-y-3'>
              {[
                { href: '/guides/encryption', label: 'Encryption' },
                { href: '/guides/self-destructing-notes', label: 'Self-Destructing Notes' },
                { href: '/guides/offline-first', label: 'Offline-First Apps' },
                { href: '/guides/privacy-first-note-taking', label: 'Privacy-First Design' },
                { href: '/guides/app-lock', label: 'App Lock' },
                { href: '/guides/duress-password', label: 'Decoy Password' },
                { href: '/guides/page-linking', label: 'Page Linking' },
                { href: '/guides/seed-phrase-storage', label: 'Seed Phrase Storage' },
                { href: '/guides/local-ai', label: 'Local AI' },
                { href: '/guides/lock-notes-on-iphone-and-mac', label: 'Lock Notes on iPhone & Mac' },
                { href: '/changelog', label: 'Changelog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 group'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-gray-600 transition-colors' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-gray-900 mb-6'>Connect With Us</h3>
            <div className='space-y-4'>
              <Link
                href='https://twitter.com/efesopoulos'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:bg-white transition-colors group'
              >
                <div className='w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors'>
                  <Twitter className='w-5 h-5 text-gray-700' />
                </div>
                <div>
                  <p className='text-gray-900 font-medium text-sm'>Follow on X/Twitter</p>
                  <p className='text-gray-500 text-xs'>@efesopoulos</p>
                </div>
              </Link>

              <Link
                href='https://buymeacoffee.com/efez'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:bg-white transition-colors group'
              >
                <div className='w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors'>
                  <Coffee className='w-5 h-5 text-yellow-600' />
                </div>
                <div>
                  <p className='text-gray-900 font-medium text-sm'>Buy me a coffee</p>
                  <p className='text-gray-500 text-xs'>Support development</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Dash. Your privacy is our priority.
            </p>
            <div className='flex items-center gap-6 text-sm text-gray-500'>
              <Link
                href='/privacy-policy'
                className='hover:text-gray-900 transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='hover:text-gray-900 transition-colors'
              >
                Terms of Service
              </Link>
              <span className='flex items-center gap-2'>
                <Lock className='w-3 h-3 text-green-500' />
                100% Offline
              </span>
              <span className='flex items-center gap-2'>
                <Shield className='w-3 h-3 text-gray-600' />
                AES-256 Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
