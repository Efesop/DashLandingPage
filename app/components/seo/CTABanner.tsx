'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock } from 'lucide-react';
import { Button } from '../ui/button';

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  buttonText?: string;
  onClick?: () => void;
  variant?: 'default' | 'dark' | 'gradient';
}

export default function CTABanner({
  headline,
  subheadline,
  buttonText = 'Get Dash Now',
  onClick,
  variant = 'default',
}: CTABannerProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      document
        .getElementById('payment-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700" />
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute top-8 left-[10%] hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-300" />
            <span className="text-white/90 text-sm font-medium">AES-256 Encrypted</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-[10%] hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-200" />
            <span className="text-white/90 text-sm font-medium">100% Offline</span>
          </div>
        </div>
      </motion.div>


      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {headline}
          </motion.h2>
          
          {subheadline && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={handleClick}
              className="h-14 px-10 bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold rounded-xl shadow-2xl shadow-black/20 transition-all duration-300 group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-sm">One-time payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-sm">Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-sm">No subscription</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
