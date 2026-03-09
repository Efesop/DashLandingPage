'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Lock,
  CheckCircle,
  KeyRound,
  EyeOff,
  FileText,
  Shield,
  ShieldCheck,
  Briefcase,
  Users,
  Plane,
  Megaphone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type DuressStage =
  | 'locked'
  | 'typing'
  | 'duress-enter'
  | 'hidden'
  | 'real-typing'
  | 'real-enter'
  | 'restored';

export default function AdvancedSecuritySection() {
  const [duressStage, setDuressStage] = useState<DuressStage>('locked');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    let timeout: NodeJS.Timeout;

    const timings: Record<DuressStage, { next: DuressStage; delay: number }> = {
      locked: { next: 'typing', delay: 1500 },
      typing: { next: 'duress-enter', delay: 1200 },
      'duress-enter': { next: 'hidden', delay: 800 },
      hidden: { next: 'real-typing', delay: 3000 },
      'real-typing': { next: 'real-enter', delay: 1200 },
      'real-enter': { next: 'restored', delay: 800 },
      restored: { next: 'locked', delay: 3000 },
    };

    const { next, delay } = timings[duressStage];

    timeout = setTimeout(() => {
      if (mountedRef.current) setDuressStage(next);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [duressStage]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const isLockScreen =
    duressStage === 'locked' ||
    duressStage === 'typing' ||
    duressStage === 'duress-enter' ||
    duressStage === 'real-typing' ||
    duressStage === 'real-enter';

  const isDuressPhase =
    duressStage === 'typing' || duressStage === 'duress-enter';
  const isRealPhase =
    duressStage === 'real-typing' || duressStage === 'real-enter';

  return (
    <section className="py-28 bg-[#0c1017] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6">
            <ShieldCheck className="mr-2 h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Decoy Mode
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e6f0] mb-6">
            A second password,{' '}
            <span className="text-blue-400">a decoy app</span>
          </h2>
          <p className="text-lg text-[#8b99b5] max-w-2xl mx-auto">
            Set a duress password that opens Dash to a convincing empty state.
            Your real notes stay hidden until you unlock with your actual password.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Explanation cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Duress card */}
            <div className="bg-[#1a2035] border border-[#1c2438] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-semibold text-[#e0e6f0] text-lg">
                  Duress password
                </h3>
              </div>
              <p className="text-sm text-[#8b99b5] leading-relaxed mb-4">
                Opens the app to an empty state. It looks like a freshly
                installed app — no notes, no history, nothing suspicious.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Your real data is safely hidden, not deleted</span>
              </div>
            </div>

            {/* Real password card */}
            <div className="bg-[#1a2035] border border-[#1c2438] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                  <KeyRound className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-[#e0e6f0] text-lg">
                  Real password
                </h3>
              </div>
              <p className="text-sm text-[#8b99b5] leading-relaxed mb-4">
                Unlocks the app normally with all your notes, folders, and
                data fully intact — as if nothing happened.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Everything restored instantly</span>
              </div>
            </div>

            {/* Use-case chips */}
            <div className="pt-2">
              <p className="text-xs text-[#5d6b88] uppercase tracking-wider font-medium mb-3">
                Ideal for
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Briefcase, label: 'Business professionals' },
                  { icon: Megaphone, label: 'Journalists & activists' },
                  { icon: Plane, label: 'Frequent travellers' },
                  { icon: Users, label: 'Shared devices' },
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
            </div>
          </motion.div>

          {/* Right - Animated Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/8 to-blue-500/5 rounded-3xl blur-2xl opacity-60" />

            <div className="relative bg-[#141825] rounded-2xl border border-[#1c2438] overflow-hidden shadow-2xl">
              {/* App bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0c1017] border-b border-[#1c2438]">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#5d6b88]" />
                  <span className="text-xs font-medium text-[#8b99b5] tracking-wide">
                    Dash
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={
                      isDuressPhase
                        ? 'duress'
                        : isRealPhase
                          ? 'real'
                          : duressStage
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    {isDuressPhase && (
                      <>
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        <span className="text-[10px] text-amber-400 font-medium">
                          Duress password
                        </span>
                      </>
                    )}
                    {isRealPhase && (
                      <>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-[10px] text-blue-400 font-medium">
                          Real password
                        </span>
                      </>
                    )}
                    {duressStage === 'hidden' && (
                      <>
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        <span className="text-[10px] text-amber-400 font-medium">
                          Decoy active
                        </span>
                      </>
                    )}
                    {duressStage === 'restored' && (
                      <>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-[10px] text-blue-400 font-medium">
                          Restored
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Demo content */}
              <div className="min-h-[300px] relative">
                <AnimatePresence mode="wait">
                  {isLockScreen ? (
                    <motion.div
                      key="lockscreen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6"
                    >
                      <div className="flex flex-col items-center justify-center min-h-[260px]">
                        <motion.div
                          animate={{
                            scale:
                              duressStage === 'duress-enter' ||
                              duressStage === 'real-enter'
                                ? [1, 1.08, 1]
                                : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Lock
                            className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                              duressStage === 'real-enter'
                                ? 'text-blue-400'
                                : duressStage === 'duress-enter'
                                  ? 'text-amber-400'
                                  : 'text-[#5d6b88]'
                            }`}
                          />
                        </motion.div>
                        <p className="text-[#e0e6f0] font-medium mb-4 text-sm">
                          Dash is Locked
                        </p>

                        <div className="w-60 bg-[#0c1017] border border-[#1c2438] rounded-lg px-3 py-2.5 mb-3">
                          <div className="flex items-center gap-2">
                            <KeyRound className="w-3.5 h-3.5 text-[#5d6b88] flex-shrink-0" />
                            <span className="text-sm text-[#8b99b5]">
                              {isDuressPhase
                                ? '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'
                                : isRealPhase
                                  ? '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'
                                  : ''}
                            </span>
                            {(duressStage === 'locked' ||
                              duressStage === 'typing' ||
                              duressStage === 'real-typing') && (
                              <span className="inline-block w-0.5 h-4 bg-blue-400 animate-pulse ml-auto" />
                            )}
                          </div>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.p
                            key={duressStage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`text-xs mt-1 ${
                              isRealPhase
                                ? 'text-blue-400'
                                : isDuressPhase
                                  ? 'text-amber-400'
                                  : 'text-[#5d6b88]'
                            }`}
                          >
                            {isDuressPhase
                              ? 'Entering duress password...'
                              : isRealPhase
                                ? 'Entering real password...'
                                : 'Enter password to unlock'}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ) : duressStage === 'hidden' ? (
                    <motion.div
                      key="hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6"
                    >
                      <div className="min-h-[260px] flex flex-col items-center justify-center">
                        <EyeOff className="w-8 h-8 text-[#5d6b88] mb-3" />
                        <p className="text-[#5d6b88] text-sm mb-1">
                          No notes yet
                        </p>
                        <p className="text-[#5d6b88] text-xs opacity-60">
                          Create your first note to get started
                        </p>

                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mt-5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full"
                        >
                          <span className="text-[10px] text-blue-400 font-medium">
                            Looks like a freshly installed app
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="restored"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6"
                    >
                      <div className="min-h-[260px]">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="space-y-2 mb-4">
                            {[
                              { name: 'Meeting Notes', date: 'Today' },
                              { name: 'Project Ideas', date: 'Yesterday' },
                              { name: 'Q1 Strategy', date: 'Mar 5' },
                            ].map((note, i) => (
                              <motion.div
                                key={note.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 p-3 bg-[#0c1017] border border-[#1c2438] rounded-lg"
                              >
                                <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span className="text-sm text-[#e0e6f0] flex-1">
                                  {note.name}
                                </span>
                                <span className="text-[10px] text-[#5d6b88]">
                                  {note.date}
                                </span>
                                <Shield className="w-3 h-3 text-blue-400" />
                              </motion.div>
                            ))}
                          </div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center gap-2 mt-4 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full"
                          >
                            <CheckCircle className="w-3 h-3 text-blue-400" />
                            <span className="text-[10px] text-blue-400 font-medium">
                              All notes restored securely
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
