'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface InlineCTAProps {
  text?: string;
  href?: string;
  variant?: 'light' | 'dark';
}

export default function InlineCTA({
  text = 'Get Dash for Mac — $14.99, one-time purchase',
  href = '#payment-section',
  variant = 'light',
}: InlineCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 text-center"
    >
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg ${
          variant === 'dark'
            ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {text}
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
