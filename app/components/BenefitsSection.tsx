'use client';

import React from 'react';
import { Globe, Zap, Heart, CheckCircle, Plane, Wifi, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-24 bg-[#0c1017] relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-300 mb-6"
          >
            <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">No cloud dependencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#e0e6f0] mb-6"
          >
            No Cloud,{' '}
            <span className="text-blue-400">No Worries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#8b99b5] max-w-3xl mx-auto"
          >
            Experience the freedom of truly private notes that work exactly
            how you&apos;d expect
          </motion.p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1a2035] rounded-2xl border border-[#1c2438] p-8 text-center hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-[#141825] border border-[#1c2438] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-blue-400" />
              </div>

              <h3 className="text-2xl font-bold text-[#e0e6f0] mb-4">
                {benefit.title}
              </h3>

              <p className="text-[#8b99b5] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Great for chips + SEO text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-6xl mx-auto text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="text-xs text-[#5d6b88] uppercase tracking-wider font-medium mr-1">Great for</span>
            {[
              { icon: Plane, label: 'Frequent travellers' },
              { icon: Wifi, label: 'Low-connectivity areas' },
              { icon: MapPin, label: 'Remote workers' },
            ].map((chip) => (
              <div
                key={chip.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141825] border border-[#1c2438] text-xs text-[#8b99b5]"
              >
                <chip.icon className="w-3 h-3 text-blue-400" />
                {chip.label}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5d6b88] max-w-2xl mx-auto leading-relaxed mb-6">
            Unlike cloud-based note apps, Dash stores everything locally on your Mac. No server outages, no sync conflicts, no internet dependency — your notes are always available, instantly.
          </p>
          <a
            href="#payment-section"
            onClick={(e) => { e.preventDefault(); document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 active:bg-blue-700"
          >
            Try Dash — No subscription needed
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
