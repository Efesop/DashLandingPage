'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Eye, Database, Zap, Twitter, Coffee } from 'lucide-react';

export default function Footer() {
  const privacyFeatures = [
    { icon: Shield, label: '100% Offline' },
    { icon: Eye, label: 'No Tracking' },
    { icon: Lock, label: 'No Accounts' },
    { icon: Database, label: 'Military Encryption' },
    { icon: Zap, label: 'Zero Knowledge' },
  ];

  const useCaseLinks = [
    { href: '/private-notes', label: 'Private Notes App' },
    { href: '/for-journalists', label: 'For Journalists' },
  ];

  const comparisonLinks = [
    { href: '/vs-notion', label: 'Dash vs Notion' },
  ];

  return (
    <footer className='bg-gray-900 dark:bg-black relative overflow-hidden'>
      {/* Glass divider at top */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' />

      {/* Background decoration */}
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl' />

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
                className='h-10 w-10'
              />
              <span className='text-2xl font-semibold text-white'>Dash</span>
            </Link>
            <p className='text-gray-400 mb-6 max-w-md leading-relaxed'>
              Own your notes for real. The only notes app that puts privacy
              first and keeps your thoughts completely secure.
            </p>

            {/* Privacy badges */}
            <div className='flex flex-wrap gap-2'>
              {privacyFeatures.slice(0, 3).map((feature) => (
                <div
                  key={feature.label}
                  className='flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card-dark text-xs'
                >
                  <feature.icon className='w-3 h-3 text-blue-400' />
                  <span className='text-gray-300'>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-white mb-6'>Use Cases</h3>
            <ul className='space-y-3'>
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-gray-300 transition-colors text-sm flex items-center gap-2 group'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div className='lg:col-span-2'>
            <h3 className='font-semibold text-white mb-6'>Compare</h3>
            <ul className='space-y-3'>
              {comparisonLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-gray-300 transition-colors text-sm flex items-center gap-2 group'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className='lg:col-span-4'>
            <h3 className='font-semibold text-white mb-6'>Connect With Us</h3>
            <div className='space-y-4'>
              <Link
                href='https://twitter.com/efesopoulos'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-3 rounded-xl glass-card-dark hover:bg-white/5 transition-colors group'
              >
                <div className='w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors'>
                  <Twitter className='w-5 h-5 text-blue-400' />
                </div>
                <div>
                  <p className='text-white font-medium text-sm'>Follow on X/Twitter</p>
                  <p className='text-gray-500 text-xs'>@efesopoulos</p>
                </div>
              </Link>

              <Link
                href='https://buymeacoffee.com/efez'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-3 rounded-xl glass-card-dark hover:bg-white/5 transition-colors group'
              >
                <div className='w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors'>
                  <Coffee className='w-5 h-5 text-yellow-400' />
                </div>
                <div>
                  <p className='text-white font-medium text-sm'>Buy me a coffee</p>
                  <p className='text-gray-500 text-xs'>Support development</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 pt-8 border-t border-gray-800/50'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Dash. Your privacy is our priority.
            </p>
            <div className='flex items-center gap-6 text-sm text-gray-500'>
              <span className='flex items-center gap-2'>
                <Lock className='w-3 h-3 text-green-500' />
                100% Offline
              </span>
              <span className='flex items-center gap-2'>
                <Shield className='w-3 h-3 text-blue-500' />
                AES-256 Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
