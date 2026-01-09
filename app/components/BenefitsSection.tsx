'use client';

import React from 'react';
import { Globe, Zap, Heart, CheckCircle, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingOrbs from './ui/FloatingOrbs';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Globe,
      title: 'Works anywhere',
      description:
        "No internet? No problem. Your notes are always available, whether you're on a plane or in a remote location.",
    },
    {
      icon: Zap,
      title: 'Lightning fast',
      description:
        "No network delays or server downtime. Everything loads instantly because it's stored right on your device.",
    },
    {
      icon: Heart,
      title: 'Stress-free privacy',
      description:
        'Never worry about data breaches, account hacks, or corporate surveillance. Your notes stay yours.',
    },
  ];

  return (
    <section className='py-24 bg-gray-900 relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900' />
      <FloatingOrbs variant='dark' density='low' />

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-300 mb-6'
          >
            <CheckCircle className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium'>No cloud dependencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-6xl font-bold text-white mb-6'
          >
            No Cloud,{' '}
            <span className='text-blue-400'>No Worries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-300 max-w-3xl mx-auto'
          >
            Experience the freedom of truly private notes that work exactly
            how you'd expect
          </motion.p>
        </div>

        {/* Benefits Cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className='bg-gray-800/50 rounded-2xl border border-gray-700 p-8 text-center hover:border-blue-500/30 transition-colors duration-300'
            >
              <div className='w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <benefit.icon className='w-8 h-8 text-blue-400' />
              </div>

              <h3 className='text-2xl font-bold text-white mb-4'>
                {benefit.title}
              </h3>

              <p className='text-gray-400 leading-relaxed'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Offline Status Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='flex justify-center'
        >
          <div className='bg-gray-800/60 border border-gray-700 rounded-xl px-8 py-5'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-4'>
                <div className='relative'>
                  <WifiOff className='w-6 h-6 text-gray-500' />
                  <div className='absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-gray-800' />
                </div>
                <div className='h-6 w-px bg-gray-700' />
                <div className='flex flex-col'>
                  <span className='text-xs text-gray-500 uppercase tracking-wider'>
                    Network Status
                  </span>
                  <span className='text-white font-medium'>Offline Mode</span>
                </div>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20'>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                <span className='text-green-400 text-sm font-medium'>
                  Notes Available
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
