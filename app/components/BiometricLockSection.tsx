'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Fingerprint,
  Timer,
  Flame,
  CheckCircle,
  Lock,
  FileText,
  Shield,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Stage = 'unlocked' | 'locking' | 'locked' | 'unlocking';

export default function BiometricLockSection() {
  const [stage, setStage] = useState<Stage>('unlocked');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const timeline: { next: Stage; duration: number }[] = [
      { next: 'locking', duration: 2800 },
      { next: 'locked', duration: 600 },
      { next: 'unlocking', duration: 2000 },
      { next: 'unlocked', duration: 700 },
    ];

    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const advance = () => {
      if (!mountedRef.current) return;
      const step = timeline[index];
      timeoutId = setTimeout(() => {
        if (!mountedRef.current) return;
        setStage(step.next);
        index = (index + 1) % timeline.length;
        advance();
      }, step.duration);
    };

    advance();

    return () => {
      mountedRef.current = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const features = [
    {
      icon: Fingerprint,
      title: 'Touch ID Unlock',
      description:
        'Use Touch ID on macOS to unlock the app or individual locked pages. No password typing needed.',
    },
    {
      icon: Timer,
      title: 'Auto-Lock on Inactivity',
      description:
        'App locks automatically after 1, 5, 15, or 30 minutes idle. Or lock instantly with Cmd+Shift+L.',
    },
    {
      icon: Flame,
      title: 'Self-Destructing Notes',
      description:
        'Set notes to auto-delete after 1 hour, 1 day, 7 days, or 30 days. Countdown badge shows time remaining.',
    },
  ];

  return (
    <section className='py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-10 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6'>
            <Fingerprint className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium text-blue-300'>
              Advanced Protection
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Your notes, guarded by{' '}
            <span className='text-blue-400'>your fingerprint</span>
          </h2>
          <p className='text-lg text-slate-300 max-w-3xl mx-auto'>
            Touch ID unlock, automatic locking, and self-destructing notes.
            Security that works without getting in your way.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto'>
          {/* Left - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className='flex gap-4 items-start bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/30 transition-colors duration-300'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-blue-500/15 border border-blue-500/25 rounded-xl flex items-center justify-center'>
                  <feature.icon className='w-6 h-6 text-blue-400' />
                </div>
                <div>
                  <h3 className='font-semibold text-white mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-400 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative'
          >
            {/* Glow behind mockup */}
            <div className='absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl opacity-60' />

            <div className='relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl'>
              {/* Window chrome */}
              <div className='flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500/80' />
                  <div className='w-3 h-3 rounded-full bg-yellow-500/80' />
                  <div className='w-3 h-3 rounded-full bg-green-500/80' />
                </div>
                <div className='flex items-center gap-2'>
                  <motion.div
                    animate={{
                      backgroundColor:
                        stage === 'unlocked'
                          ? 'rgba(34, 197, 94, 0.15)'
                          : 'rgba(239, 68, 68, 0.15)',
                    }}
                    className='flex items-center gap-1.5 px-2.5 py-1 rounded-full'
                  >
                    <motion.div
                      animate={{
                        backgroundColor:
                          stage === 'unlocked'
                            ? 'rgb(34, 197, 94)'
                            : 'rgb(239, 68, 68)',
                      }}
                      className='w-2 h-2 rounded-full'
                    />
                    <motion.span
                      className='text-xs font-medium'
                      animate={{
                        color:
                          stage === 'unlocked'
                            ? 'rgb(134, 239, 172)'
                            : 'rgb(252, 165, 165)',
                      }}
                    >
                      {stage === 'unlocked' ? 'Unlocked' : 'Locked'}
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              {/* Content area */}
              <div className='relative min-h-[300px]'>
                {/* Note content */}
                <motion.div
                  animate={{
                    filter:
                      stage === 'locked' || stage === 'locking'
                        ? 'blur(8px)'
                        : 'blur(0px)',
                    opacity:
                      stage === 'locked' || stage === 'locking' ? 0.3 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className='p-5'
                  style={{ willChange: 'filter' }}
                >
                  {/* Sidebar + content layout */}
                  <div className='flex gap-4'>
                    {/* Mini sidebar */}
                    <div className='w-40 flex-shrink-0'>
                      <div className='text-xs font-semibold text-slate-500 mb-2 px-2'>
                        MY NOTES
                      </div>
                      <div className='space-y-1'>
                        <div className='flex items-center gap-2 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20'>
                          <Lock className='w-3 h-3 text-blue-400' />
                          <span className='text-xs text-white font-medium truncate'>
                            Meeting Notes
                          </span>
                        </div>
                        <div className='flex items-center gap-2 p-2 rounded-lg'>
                          <Lock className='w-3 h-3 text-green-400' />
                          <span className='text-xs text-slate-400 truncate'>
                            Legal Draft
                          </span>
                        </div>
                        <div className='flex items-center gap-2 p-2 rounded-lg'>
                          <FileText className='w-3 h-3 text-slate-500' />
                          <span className='text-xs text-slate-400 truncate'>
                            Quick Notes
                          </span>
                        </div>
                        <div className='flex items-center gap-2 p-2 rounded-lg'>
                          <Flame className='w-3 h-3 text-orange-400' />
                          <span className='text-xs text-slate-400 truncate'>
                            Temp Brief
                          </span>
                          <span className='text-[10px] text-orange-400 ml-auto'>
                            2d
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Note content */}
                    <div className='flex-1 border-l border-slate-700 pl-4'>
                      <h3 className='text-sm font-semibold text-white mb-1'>
                        Confidential Meeting Notes
                      </h3>
                      <p className='text-xs text-slate-500 mb-3'>
                        January 15, 2026
                      </p>
                      <div className='space-y-2'>
                        <p className='text-xs text-slate-300 leading-relaxed'>
                          Discussed Q1 strategy and budget allocations. Key
                          decisions on the restructuring proposal...
                        </p>
                        <div className='space-y-1.5'>
                          <div className='h-2 bg-slate-700 rounded w-full' />
                          <div className='h-2 bg-slate-700 rounded w-5/6' />
                          <div className='h-2 bg-slate-700 rounded w-4/6' />
                        </div>
                      </div>
                      <div className='flex items-center gap-3 mt-4 pt-3 border-t border-slate-700'>
                        <div className='flex items-center gap-1.5'>
                          <Shield className='w-3 h-3 text-green-400' />
                          <span className='text-[10px] text-slate-500'>
                            AES-256
                          </span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Lock className='w-3 h-3 text-green-400' />
                          <span className='text-[10px] text-slate-500'>
                            Password Protected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Lock screen overlay */}
                <AnimatePresence>
                  {(stage === 'locked' ||
                    stage === 'locking' ||
                    stage === 'unlocking') && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className='absolute inset-0 flex flex-col items-center justify-center bg-slate-900/70 backdrop-blur-sm'
                    >
                      {/* Fingerprint with pulse rings */}
                      <div className='relative w-20 h-20 flex items-center justify-center'>
                        {/* Pulse rings - only when locked */}
                        {stage === 'locked' && (
                          <>
                            <motion.div
                              className='absolute inset-0 rounded-full border-2 border-blue-400/30'
                              animate={{
                                scale: [1, 1.6, 2.2],
                                opacity: [0.5, 0.2, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeOut',
                              }}
                            />
                            <motion.div
                              className='absolute inset-0 rounded-full border-2 border-blue-400/30'
                              animate={{
                                scale: [1, 1.6, 2.2],
                                opacity: [0.5, 0.2, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeOut',
                                delay: 0.7,
                              }}
                            />
                          </>
                        )}

                        {/* Green success ring when unlocking */}
                        {stage === 'unlocking' && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className='absolute inset-0 rounded-full border-2 border-green-400/50'
                          />
                        )}

                        {/* Fingerprint icon */}
                        <motion.div
                          animate={{
                            scale: stage === 'unlocking' ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Fingerprint
                            className={`w-10 h-10 transition-colors duration-300 ${
                              stage === 'unlocking'
                                ? 'text-green-400'
                                : 'text-blue-400'
                            }`}
                          />
                        </motion.div>

                        {/* Checkmark overlay on unlock */}
                        <AnimatePresence>
                          {stage === 'unlocking' && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ type: 'spring', duration: 0.4 }}
                              className='absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5'
                            >
                              <CheckCircle className='w-4 h-4 text-white' />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Text */}
                      <motion.p
                        className='text-white font-medium mt-4 text-sm'
                        key={stage}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stage === 'unlocking'
                          ? 'Unlocked'
                          : 'Dash is Locked'}
                      </motion.p>
                      <p className='text-slate-400 text-xs mt-1'>
                        {stage === 'unlocking'
                          ? ''
                          : 'Use Touch ID to unlock'}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className='absolute -bottom-3 -right-3 bg-slate-800 rounded-lg px-3 py-1.5 shadow-lg border border-slate-700'
            >
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium text-white text-xs'>
                  Touch ID Enabled
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
