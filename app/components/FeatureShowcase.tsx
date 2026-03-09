'use client';

import React, { useEffect } from 'react';
import {
  Shield,
  HardDrive,
  EyeOff,
  Timer,
  UserX,
  BadgeCheck,
  Sparkles,
  PenLine,
  GraduationCap,
  Briefcase,
  Newspaper,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ── CSS from the actual Dash app (globals.css) ── */
const illustrationStyles = `
.dash-feat-illus {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; border-radius: 8px;
}

/* ── Lock / Encryption ── */
.dash-feat-illus-lock { padding: 4px; }
.dash-feat-lock-doc {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden;
  display: flex; flex-direction: column; padding: 6px 5px; gap: 4px;
}
.dash-feat-lock-doc-lines {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; gap: 4px; padding: 5px 4px;
  animation: dash-feat-lock-lines 5s linear infinite;
}
.dash-feat-lock-line-1 { width: 85%; height: 2px; border-radius: 1px; }
.dash-feat-lock-line-2 { width: 60%; height: 2px; border-radius: 1px; }
.dash-feat-lock-line-3 { width: 72%; height: 2px; border-radius: 1px; }
.dash-feat-lock-line-4 { width: 50%; height: 2px; border-radius: 1px; }
.dash-feat-lock-line-5 { width: 78%; height: 2px; border-radius: 1px; }
@keyframes dash-feat-lock-lines {
  0%,22% { opacity:1 } 27% { opacity:0 } 78% { opacity:0 } 83%,100% { opacity:1 }
}
.dash-feat-lock-matrix {
  position: absolute; inset: 0;
  display: flex; justify-content: center; gap: 1px; padding: 2px;
  opacity: 0; animation: dash-feat-lock-matrix-show 5s linear infinite;
}
.dash-feat-lock-col {
  display: flex; flex-direction: column; align-items: center;
  font-size: 6px; font-family: monospace; font-weight: 700; line-height: 1.2;
  animation: dash-feat-lock-cascade 5s linear infinite;
}
.dash-feat-lock-col span { opacity: 0; animation: dash-feat-lock-digit 1.2s ease-out infinite; }
.dash-feat-lock-col span:nth-child(1) { animation-delay: 0s; }
.dash-feat-lock-col span:nth-child(2) { animation-delay: 0.15s; }
.dash-feat-lock-col span:nth-child(3) { animation-delay: 0.3s; }
.dash-feat-lock-col span:nth-child(4) { animation-delay: 0.45s; }
.dash-feat-lock-col span:nth-child(5) { animation-delay: 0.6s; }
.dash-feat-lock-col span:nth-child(6) { animation-delay: 0.75s; }
.dash-feat-lock-col-1 { animation-delay: 0s; }
.dash-feat-lock-col-2 { animation-delay: 0.2s; }
.dash-feat-lock-col-3 { animation-delay: 0.1s; }
.dash-feat-lock-col-4 { animation-delay: 0.3s; }
.dash-feat-lock-col-5 { animation-delay: 0.15s; }
@keyframes dash-feat-lock-matrix-show {
  0%,28% { opacity:0 } 32%,75% { opacity:1 } 80%,100% { opacity:0 }
}
@keyframes dash-feat-lock-cascade { 0% { transform:translateY(-3px) } 100% { transform:translateY(3px) } }
@keyframes dash-feat-lock-digit { 0% { opacity:0.2 } 30% { opacity:1 } 70% { opacity:0.6 } 100% { opacity:0.15 } }

/* ── Timer / Self-Destruct ── */
.dash-feat-illus-timer { padding: 4px; }
.dash-feat-timer-doc {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden; display: flex; flex-direction: column;
}
.dash-feat-timer-doc-lines {
  display: flex; flex-direction: column; gap: 3px; padding: 6px 5px;
  animation: dash-feat-timer-lines-fade 4s ease-in-out infinite;
}
@keyframes dash-feat-timer-lines-fade {
  0%,30% { opacity:1 } 60% { opacity:0.3 } 75%,85% { opacity:0 } 100% { opacity:1 }
}
.dash-feat-timer-flames {
  position: absolute; bottom: 0; left: 0; right: 0; height: 100%; pointer-events: none;
}
.dash-feat-flame {
  position: absolute; bottom: -2px; border-radius: 50% 50% 30% 30%;
  opacity: 0; filter: blur(0.5px);
}
.dash-feat-flame-1 {
  left: 2px; width: 7px; height: 16px;
  background: linear-gradient(to top, #ef4444, #f97316, #fbbf24cc);
  animation: dash-feat-flame-a 4s 0.8s ease-in-out infinite;
}
.dash-feat-flame-2 {
  left: 8px; width: 10px; height: 22px;
  background: linear-gradient(to top, #dc2626, #ef4444, #f97316);
  animation: dash-feat-flame-b 4s 0.9s ease-in-out infinite;
}
.dash-feat-flame-3 {
  left: 14px; width: 12px; height: 28px;
  background: linear-gradient(to top, #b91c1c, #ef4444, #fbbf24);
  animation: dash-feat-flame-a 4s 0.85s ease-in-out infinite;
}
.dash-feat-flame-4 {
  left: 22px; width: 9px; height: 20px;
  background: linear-gradient(to top, #ef4444, #fb923c, #fbbf24cc);
  animation: dash-feat-flame-b 4s 1.0s ease-in-out infinite;
}
.dash-feat-flame-5 {
  right: 2px; width: 7px; height: 14px;
  background: linear-gradient(to top, #dc2626, #f97316, #fde68a);
  animation: dash-feat-flame-a 4s 1.1s ease-in-out infinite;
}
@keyframes dash-feat-flame-a {
  0%,18% { opacity:0; transform: scaleY(0) scaleX(0.8) translateY(4px) }
  30% { opacity:1; transform: scaleY(0.9) scaleX(1) translateY(0) }
  40% { opacity:1; transform: scaleY(1.1) scaleX(0.85) translateY(-3px) }
  48% { opacity:0.85; transform: scaleY(0.85) scaleX(1.1) translateY(-1px) }
  56% { opacity:1; transform: scaleY(1.15) scaleX(0.9) translateY(-4px) }
  64% { opacity:0.9; transform: scaleY(0.95) scaleX(1.05) translateY(-2px) }
  72% { opacity:1; transform: scaleY(1.05) scaleX(0.9) translateY(-3px) }
  82%,100% { opacity:0; transform: scaleY(0.2) scaleX(0.6) translateY(2px) }
}
@keyframes dash-feat-flame-b {
  0%,20% { opacity:0; transform: scaleY(0) scaleX(0.7) translateY(4px) }
  32% { opacity:1; transform: scaleY(1) scaleX(0.9) translateY(0) }
  42% { opacity:0.9; transform: scaleY(0.9) scaleX(1.1) translateY(-2px) }
  50% { opacity:1; transform: scaleY(1.2) scaleX(0.8) translateY(-5px) }
  58% { opacity:0.85; transform: scaleY(0.85) scaleX(1.05) translateY(-2px) }
  66% { opacity:1; transform: scaleY(1.1) scaleX(0.95) translateY(-4px) }
  74% { opacity:0.9; transform: scaleY(1) scaleX(0.9) translateY(-3px) }
  84%,100% { opacity:0; transform: scaleY(0.15) scaleX(0.5) translateY(3px) }
}
.dash-feat-timer-burn {
  position: absolute; bottom: 0; left: 0; right: 0; height: 0%;
  background: linear-gradient(to top, rgba(234,88,12,0.6), rgba(239,68,68,0.25), transparent);
  animation: dash-feat-timer-burn-up 4s ease-in-out infinite;
}
@keyframes dash-feat-timer-burn-up {
  0%,20% { height:0% } 50% { height:60% } 70% { height:100% } 85%,100% { height:0% }
}

/* ── Shield / Offline (app style) ── */
.dash-feat-illus-shield { padding: 4px; }
.dash-feat-shield-app {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden;
}
.dash-feat-shield-content {
  display: flex; flex-direction: column; gap: 3px; padding: 6px 5px;
}
.dash-feat-shield-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  border-top: 1.5px solid;
  animation: dash-feat-shield-slide 5s ease-in-out infinite;
}
@keyframes dash-feat-shield-slide {
  0%,10% { transform:translateY(100%) } 25%,75% { transform:translateY(0) } 90%,100% { transform:translateY(100%) }
}
.dash-feat-shield-check {
  animation: dash-feat-shield-check-pulse 5s ease-in-out infinite;
}
@keyframes dash-feat-shield-check-pulse {
  0%,20% { opacity:0; transform:scale(0.5) }
  35% { opacity:1; transform:scale(1) }
  55% { opacity:1; transform:scale(1) }
  65% { opacity:0.4; transform:scale(1) }
  70% { opacity:1; transform:scale(1.1) }
  75%,80% { opacity:1; transform:scale(1) }
  85%,100% { opacity:0; transform:scale(0.5) }
}

/* ── Zero Tracking (duress-style: data lines + tracking dots vanish) ── */
.dash-feat-illus-tracking { padding: 4px; }
.dash-feat-tracking-screen {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden; display: flex; flex-direction: column;
}
.dash-feat-tracking-data {
  display: flex; flex-direction: column; gap: 3px; padding: 6px 5px;
  animation: dash-feat-tracking-vanish 4.5s ease-in-out infinite;
}
@keyframes dash-feat-tracking-vanish {
  0%,35% { opacity:1; transform:translateY(0) }
  50% { opacity:0; transform:translateY(6px) }
  85% { opacity:0 }
  100% { opacity:1; transform:translateY(0) }
}
.dash-feat-tracking-dots {
  display: flex; gap: 3px; justify-content: center; padding: 2px 5px;
}
.dash-feat-tracking-dot {
  width: 4px; height: 4px; border-radius: 50%;
  animation: dash-feat-tracking-dot-appear 4.5s ease-in-out infinite;
}
@keyframes dash-feat-tracking-dot-appear {
  0% { opacity:0; transform:scale(0) }
  15% { opacity:1; transform:scale(1) }
  35%,50% { opacity:1; transform:scale(1) }
  55% { opacity:0; transform:scale(0) }
  100% { opacity:0 }
}

/* ── No Account (duress-style: form fields vanish, content lines appear) ── */
.dash-feat-illus-noauth { padding: 4px; }
.dash-feat-noauth-screen {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden;
}
.dash-feat-noauth-form {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; gap: 3px; padding: 6px 5px;
  align-items: center;
  animation: dash-feat-noauth-form-out 5s ease-in-out infinite;
}
@keyframes dash-feat-noauth-form-out {
  0%,25% { opacity:1; transform:translateY(0) }
  40% { opacity:0; transform:translateY(-8px) }
  75% { opacity:0 }
  90%,100% { opacity:1; transform:translateY(0) }
}
.dash-feat-noauth-content {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; gap: 4px; padding: 6px 5px;
  opacity: 0;
  animation: dash-feat-noauth-content-in 5s ease-in-out infinite;
}
@keyframes dash-feat-noauth-content-in {
  0%,35% { opacity:0; transform:translateY(6px) }
  50%,70% { opacity:1; transform:translateY(0) }
  80%,100% { opacity:0; transform:translateY(6px) }
}
.dash-feat-noauth-cursor {
  position: absolute; left: 5px; top: 7px;
  width: 1.5px; height: 8px; border-radius: 1px;
  opacity: 0;
  animation: dash-feat-noauth-cursor-blink 5s ease-in-out infinite;
}
@keyframes dash-feat-noauth-cursor-blink {
  0%,35% { opacity:0 }
  45% { opacity:1 }
  50% { opacity:0 }
  55% { opacity:1 }
  60% { opacity:0 }
  65% { opacity:1 }
  70%,100% { opacity:0 }
}

/* ── One-Time Purchase (receipt with prices struck, checkmark) ── */
.dash-feat-illus-paid { padding: 4px; }
.dash-feat-paid-doc {
  width: 38px; height: 44px; border: 1px solid; border-radius: 4px;
  position: relative; overflow: hidden;
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 3px;
}
.dash-feat-paid-row { position: relative; display: flex; align-items: center; }
.dash-feat-paid-strike {
  position: absolute; top: 50%; left: -2px; right: -2px;
  height: 1px; border-radius: 1px;
  transform-origin: left;
  animation: dash-feat-paid-strike-grow 4.5s ease-out infinite;
}
.dash-feat-paid-strike-d1 { animation-delay: 0s; }
.dash-feat-paid-strike-d2 { animation-delay: 0.2s; }
.dash-feat-paid-strike-d3 { animation-delay: 0.4s; }
@keyframes dash-feat-paid-strike-grow {
  0%,20% { transform:scaleX(0) } 35%,70% { transform:scaleX(1) } 85%,100% { transform:scaleX(0) }
}
.dash-feat-paid-check {
  display: flex; align-items: center; gap: 2px;
  animation: dash-feat-paid-check-pop 4.5s ease-out infinite;
}
@keyframes dash-feat-paid-check-pop {
  0%,40% { opacity:0; transform:scale(0) }
  50% { opacity:1; transform:scale(1.2) }
  55%,70% { opacity:1; transform:scale(1) }
  85%,100% { opacity:0; transform:scale(0) }
}
`;

/* ── Illustration Components (matching FeaturesPanel.js exactly) ── */

const A = '#60a5fa'; // accent for dark blue theme
const M = '#1c2438'; // muted border
const T = '#5d6b88'; // text muted

function LockVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-lock">
      <div className="dash-feat-lock-doc" style={{ borderColor: M, background: `${A}08` }}>
        <div className="dash-feat-lock-doc-lines">
          <div className="dash-feat-lock-line-1" style={{ background: A }} />
          <div className="dash-feat-lock-line-2" style={{ background: `${A}99` }} />
          <div className="dash-feat-lock-line-3" style={{ background: A }} />
          <div className="dash-feat-lock-line-4" style={{ background: `${A}99` }} />
          <div className="dash-feat-lock-line-5" style={{ background: A }} />
        </div>
        <div className="dash-feat-lock-matrix" style={{ color: A }}>
          {[
            ['4','7','1','0','9','3'],
            ['8','2','5','6','1','4'],
            ['0','3','9','7','2','8'],
            ['6','1','4','5','0','3'],
            ['2','9','7','3','8','1'],
          ].map((col, i) => (
            <div key={i} className={`dash-feat-lock-col dash-feat-lock-col-${i+1}`}>
              {col.map((d, j) => <span key={j}>{d}</span>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfflineVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-shield">
      <div className="dash-feat-shield-app" style={{ borderColor: M, background: `${A}05` }}>
        <div className="dash-feat-shield-content">
          <div style={{ background: M, width: '80%', height: 2, borderRadius: 1 }} />
          <div style={{ background: M, width: '60%', height: 2, borderRadius: 1 }} />
          <div style={{ background: M, width: '70%', height: 2, borderRadius: 1 }} />
        </div>
        <div className="dash-feat-shield-overlay" style={{ background: '#0a0a0a', borderColor: A }}>
          <div className="dash-feat-shield-check" style={{ color: A }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function EyeVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-tracking">
      <div className="dash-feat-tracking-screen" style={{ borderColor: M, background: `${A}05` }}>
        <div className="dash-feat-tracking-data">
          <div style={{ background: T, width: '80%', height: 2, borderRadius: 1 }} />
          <div style={{ background: T, width: '55%', height: 2, borderRadius: 1 }} />
          <div style={{ background: T, width: '68%', height: 2, borderRadius: 1 }} />
        </div>
        <div className="dash-feat-tracking-dots">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className="dash-feat-tracking-dot"
              style={{ background: A, animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimerVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-timer">
      <div className="dash-feat-timer-doc" style={{ borderColor: M }}>
        <div className="dash-feat-timer-doc-lines">
          <div style={{ background: T, width: '80%', height: 2, borderRadius: 1 }} />
          <div style={{ background: T, width: '55%', height: 2, borderRadius: 1 }} />
          <div style={{ background: T, width: '68%', height: 2, borderRadius: 1 }} />
        </div>
        <div className="dash-feat-timer-flames">
          <div className="dash-feat-flame dash-feat-flame-1" />
          <div className="dash-feat-flame dash-feat-flame-2" />
          <div className="dash-feat-flame dash-feat-flame-3" />
          <div className="dash-feat-flame dash-feat-flame-4" />
          <div className="dash-feat-flame dash-feat-flame-5" />
        </div>
        <div className="dash-feat-timer-burn" />
      </div>
    </div>
  );
}

function NoAccountVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-noauth">
      <div className="dash-feat-noauth-screen" style={{ borderColor: M, background: `${A}05` }}>
        {/* Form fields that slide out */}
        <div className="dash-feat-noauth-form">
          <div style={{ width: '75%', height: 5, borderRadius: 2, border: `1px solid ${M}`, background: `${A}05` }} />
          <div style={{ width: '75%', height: 5, borderRadius: 2, border: `1px solid ${M}`, background: `${A}05` }} />
          <div style={{ width: '50%', height: 6, borderRadius: 2, background: `${A}15`, border: `1px solid ${A}30`, marginTop: 1 }} />
        </div>
        {/* Content lines that appear (just start writing) */}
        <div className="dash-feat-noauth-content">
          <div style={{ background: A, width: '85%', height: 2, borderRadius: 1 }} />
          <div style={{ background: `${A}99`, width: '60%', height: 2, borderRadius: 1 }} />
          <div style={{ background: A, width: '72%', height: 2, borderRadius: 1 }} />
          <div style={{ background: `${A}99`, width: '50%', height: 2, borderRadius: 1 }} />
        </div>
        {/* Blinking cursor */}
        <div className="dash-feat-noauth-cursor" style={{ background: A }} />
      </div>
    </div>
  );
}

function PurchaseVisual() {
  return (
    <div className="dash-feat-illus dash-feat-illus-paid">
      <div className="dash-feat-paid-doc" style={{ borderColor: M, background: `${A}05` }}>
        {/* Subscription price rows that get struck through */}
        {['$4/mo', '$4/mo', '$4/mo'].map((price, i) => (
          <div key={i} className="dash-feat-paid-row">
            <span style={{ fontSize: 6, fontFamily: 'monospace', fontWeight: 600, color: T }}>{price}</span>
            <div className={`dash-feat-paid-strike dash-feat-paid-strike-d${i+1}`} style={{ background: `${A}90` }} />
          </div>
        ))}
        {/* Checkmark pops in */}
        <div className="dash-feat-paid-check">
          <span style={{ color: A, fontSize: 8, fontWeight: 'bold' }}>&#10003;</span>
          <span style={{ color: `${A}cc`, fontSize: 5, fontWeight: 700, fontFamily: 'monospace' }}>PAID</span>
        </div>
      </div>
    </div>
  );
}

/* ── Feature data ── */

const features = [
  {
    icon: Shield,
    title: 'AES-256 Encryption',
    description: 'Every note is protected with AES-256 encryption before it touches your storage.',
    Visual: LockVisual,
  },
  {
    icon: HardDrive,
    title: '100% Offline',
    description: 'No internet required. Your notes are always accessible, on a plane or off the grid.',
    Visual: OfflineVisual,
  },
  {
    icon: EyeOff,
    title: 'Zero Tracking',
    description: 'No analytics, no data collection, no corporate surveillance. Your privacy is absolute.',
    Visual: EyeVisual,
  },
  {
    icon: Timer,
    title: 'Self-Destructing Notes',
    description: 'Set pages to auto-delete after a time period. A live countdown tracks the remaining time.',
    Visual: TimerVisual,
  },
  {
    icon: UserX,
    title: 'No Account Required',
    description: 'No signup, no email, no passwords to remember. Just open and start writing.',
    Visual: NoAccountVisual,
  },
  {
    icon: BadgeCheck,
    title: 'One-Time Purchase',
    description: 'Pay once, use forever. No subscriptions, no hidden costs, no premium tiers.',
    Visual: PurchaseVisual,
  },
];

/* ── Animation variants ── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ── Component ── */

export default function FeatureShowcase() {
  useEffect(() => {
    const id = 'dash-feature-showcase-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = illustrationStyles;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  return (
    <section id="features" className="py-24 bg-[#0c1017] relative overflow-hidden">
      {/* Background blur glow blobs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-[#8b99b5] mb-6"
          >
            <Sparkles className="mr-2 h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">Everything you need</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#e0e6f0] mb-5"
          >
            Private notes,{' '}
            <span className="text-blue-400">perfected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#8b99b5] max-w-2xl mx-auto"
          >
            All the power you need, with none of the privacy compromises
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="bg-[#1a2035] border border-[#1c2438] rounded-2xl p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-[#e0e6f0] mb-1.5 text-base">
                    {feature.title}
                  </h3>
                  <p className="text-[#8b99b5] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <feature.Visual />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Perfect for chips + SEO text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-6xl mx-auto text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="text-xs text-[#5d6b88] uppercase tracking-wider font-medium mr-1">Perfect for</span>
            {[
              { icon: PenLine, label: 'Writers & journalers' },
              { icon: GraduationCap, label: 'Students' },
              { icon: Briefcase, label: 'Professionals' },
              { icon: Newspaper, label: 'Journalists' },
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
            Dash is a private, encrypted notes app for macOS. AES-256 encryption, offline storage, and zero data collection — starting at $14.99, one-time purchase with no subscriptions.
          </p>
          <a
            href="#payment-section"
            onClick={(e) => { e.preventDefault(); document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 active:bg-blue-700"
          >
            Get Dash — One-time purchase
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
