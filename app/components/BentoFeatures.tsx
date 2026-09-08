'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Lock, Check, Eye, Fingerprint } from 'lucide-react';

/* ── Shared ticker: counts 0..modulo-1 while the section is on screen and motion is allowed ── */
function useTicker(intervalMs: number, modulo: number, active: boolean) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setT((v) => (v + 1) % modulo), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, modulo, active]);
  return t;
}

const card = 'rounded-[20px] bg-gray-50 dark:bg-gray-900 p-6 sm:p-7 flex flex-col gap-5';
const panel =
  'bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.3)]';
const title = 'text-[22px] font-semibold tracking-[-0.02em] text-gray-900 dark:text-white';
const body = 'text-[15px] text-gray-500 dark:text-gray-400';

/* ── 1. Lock a note ── */
function LockCard({ active }: { active: boolean }) {
  const t = useTicker(150, 34, active);
  const dots = Math.max(0, Math.min(10, t - 3));
  const pressed = t >= 15 && t < 18;
  const locked = t >= 18;
  return (
    <div className={`${card} lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-6 min-h-[340px]`}>
      <div className='flex flex-col gap-2.5'>
        <h3 className='text-2xl font-semibold tracking-[-0.02em] text-gray-900 dark:text-white'>Lock a note in one click.</h3>
        <p className='text-base text-gray-500 dark:text-gray-400'>
          Each locked note is encrypted with AES-256-GCM and a key derived from its password. Open it with Touch ID on Mac,
          Face ID on iPhone. Or lock the whole app and let it lock itself when you walk away.
        </p>
      </div>
      <div className={`${panel} p-5 flex flex-col gap-3.5 mt-5 lg:mt-0`}>
        <div className='flex items-center gap-2.5'>
          <span
            className={`w-9 h-9 rounded-lg inline-flex items-center justify-center transition-colors duration-300 ${
              locked ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
            }`}
          >
            <Lock className='w-4 h-4' />
          </span>
          <div className='flex flex-col'>
            <span className='font-semibold text-[15px] text-gray-900 dark:text-white'>Lock &ldquo;Interview notes, 4 Sep&rdquo;</span>
            <span className='text-[12.5px] text-gray-500 dark:text-gray-400'>{locked ? 'Locked · AES-256-GCM' : 'Encrypted on this device'}</span>
          </div>
        </div>
        <div className='h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center px-3 font-mono text-[15px] text-gray-500 dark:text-gray-400 tracking-[0.2em]'>
          {'•'.repeat(dots)}
          {!locked && dots < 10 && <span className='w-px h-4 bg-gray-900 dark:bg-white ml-0.5 animate-pulse' aria-hidden='true' />}
        </div>
        <div className='flex items-center justify-between text-[13.5px] text-gray-600 dark:text-gray-300'>
          <span className='flex items-center gap-2'>
            <span className='relative inline-block w-8 h-[18px] rounded-full bg-blue-600'>
              <span className='absolute right-0.5 top-0.5 w-3.5 h-3.5 rounded-full bg-white' />
            </span>
            Allow Touch ID
          </span>
          <span
            className={`px-3.5 py-2 rounded-lg font-medium transition-all duration-200 ${
              locked ? 'bg-green-600 text-white' : pressed ? 'bg-gray-700 text-white scale-95' : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
            }`}
          >
            {locked ? (
              <span className='inline-flex items-center gap-1.5'>
                <Check className='w-3.5 h-3.5' /> Locked
              </span>
            ) : (
              'Lock note'
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── 2. Themes ── */
const THEMES = [
  { name: 'Light', bg: '#ffffff', fg: '#0d0d0d', border: '#e6e6e6', mono: false },
  { name: 'Dark', bg: '#0d0d0d', fg: '#ececec', border: '#0d0d0d', mono: false },
  { name: 'Night', bg: '#0c1017', fg: '#e0e6f0', border: '#1c2438', mono: false },
  { name: 'Terminal', bg: '#0b100b', fg: '#4ade80', border: '#0b100b', mono: true },
];
function ThemesCard({ active }: { active: boolean }) {
  const t = useTicker(1400, 4, active);
  return (
    <div className={`${card} min-h-[340px]`}>
      <div className='flex flex-col gap-1.5'>
        <h3 className={title}>Four themes, or match your Mac.</h3>
        <p className={body}>Light, Dark, Night, Terminal. Follows the system setting if you like.</p>
      </div>
      <div className='mt-auto grid grid-cols-2 gap-2.5'>
        {THEMES.map((theme, i) => (
          <div
            key={theme.name}
            style={{ background: theme.bg, color: theme.fg, borderColor: theme.border }}
            className={`h-[84px] rounded-[10px] border flex items-end p-2.5 text-xs transition-all duration-300 ${theme.mono ? 'font-mono' : ''} ${
              i === t ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900 scale-[1.02]' : ''
            }`}
          >
            {theme.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3. Page links ── */
function LinksCard({ active }: { active: boolean }) {
  const t = useTicker(140, 44, active);
  const typed = '[[Plan'.slice(0, Math.min(6, Math.max(0, t - 2)));
  const dropdown = t >= 5 && t < 24;
  const inserted = t >= 24;
  return (
    <div className={`${card} min-h-[320px]`}>
      <div className='flex flex-col gap-1.5'>
        <h3 className={title}>Type [[ to link notes.</h3>
        <p className={body}>Wiki-style links with autocomplete, plus folders and tags.</p>
      </div>
      <div className={`${panel} mt-auto p-4 flex flex-col gap-2.5 text-[14.5px] text-gray-900 dark:text-white`}>
        <div>
          Follow up on the{' '}
          {inserted ? (
            <span className='text-blue-600 dark:text-blue-400 border-b border-dotted border-blue-600'>[[Planning minutes, March]]</span>
          ) : (
            <>
              <span className='text-blue-600 dark:text-blue-400'>{typed}</span>
              <span className='inline-block w-px h-4 align-middle bg-gray-900 dark:bg-white ml-px animate-pulse' aria-hidden='true' />
            </>
          )}
        </div>
        <div
          className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-[13.5px] transition-opacity duration-200 ${
            dropdown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-white'>Planning minutes, March</div>
          <div className='px-3 py-2 text-gray-500 dark:text-gray-400'>Planning appeal, draft letter</div>
          <div className='px-3 py-2 text-gray-500 dark:text-gray-400'>Plans for the summer</div>
        </div>
      </div>
    </div>
  );
}

/* ── 4. Self-destructing notes ── */
const TIMERS = ['1h', '12h', '1d', '7d', '30d'];
function SelfDestructCard({ active }: { active: boolean }) {
  const t = useTicker(1000, 100000, active);
  const total = 6 * 3600 + 12 * 60 + 30 - t;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const sel = Math.floor(t / 3) % TIMERS.length;
  return (
    <div className={`${card} min-h-[320px]`}>
      <div className='flex flex-col gap-1.5'>
        <h3 className={title}>Notes that delete themselves.</h3>
        <p className={body}>Set a timer from one hour to thirty days. A countdown shows what is left.</p>
      </div>
      <div className={`${panel} mt-auto p-4 flex flex-col gap-3`}>
        <div className='flex items-center justify-between text-[14.5px]'>
          <span className='font-medium text-gray-900 dark:text-white'>Door code for the studio</span>
          <span className='font-mono text-[11.5px] px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 tabular-nums'>
            {h}h {m}m {String(s).padStart(2, '0')}s
          </span>
        </div>
        <div className='flex gap-1.5 text-[12.5px]'>
          {TIMERS.map((label, i) => (
            <span
              key={label}
              className={`px-2.5 py-1.5 rounded-[7px] transition-colors duration-300 ${
                i === sel ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 5. Duress password ── */
function DuressCard({ active }: { active: boolean }) {
  const t = useTicker(200, 40, active);
  const dots = Math.min(6, Math.max(0, t - 3));
  const revealed = t >= 12 && t < 34;
  return (
    <div className={`${card} min-h-[320px]`}>
      <div className='flex flex-col gap-1.5'>
        <h3 className={title}>A second password for bad days.</h3>
        <p className={body}>A duress password opens decoy notes. Your real notes stay encrypted on disk.</p>
      </div>
      <div className={`${panel} mt-auto p-4 flex flex-col gap-2.5 text-[13.5px]`}>
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 dark:text-gray-400'>Real password</span>
          <span className='font-mono text-gray-900 dark:text-white'>•••••••••</span>
        </div>
        <div className='h-px bg-gray-100 dark:bg-gray-800' />
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 dark:text-gray-400'>Duress password</span>
          <span className='font-mono text-gray-900 dark:text-white'>
            {'•'.repeat(dots)}
            {dots < 6 && <span className='inline-block w-px h-3.5 align-middle bg-gray-900 dark:bg-white ml-px animate-pulse' aria-hidden='true' />}
          </span>
        </div>
        <div
          className={`flex items-center gap-2 px-2.5 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-[12.5px] text-gray-600 dark:text-gray-300 transition-all duration-300 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          <Eye className='w-3.5 h-3.5 flex-shrink-0' />
          Opens &ldquo;Grocery lists&rdquo; and 4 harmless notes
        </div>
      </div>
    </div>
  );
}

/* ── 6. Sync ledger ── */
function hex(seed: number) {
  let x = (seed * 1103515245 + 12345) & 0x7fffffff;
  let out = '';
  for (let i = 0; i < 12; i++) {
    x = (x * 1103515245 + 12345) & 0x7fffffff;
    out += (x % 16).toString(16);
  }
  return out;
}
function SyncLedgerCard({ active }: { active: boolean }) {
  const t = useTicker(450, 100000, active);
  const chunks = Array.from({ length: 12 }, (_, i) => hex(i * 97 + Math.floor((t + i) / 3)));
  const secs = (41 * 60 + t) % 3600;
  return (
    <div className='rounded-[20px] bg-gray-900 dark:bg-black text-white p-6 sm:p-7 lg:col-span-2 grid lg:grid-cols-2 gap-6 min-h-[300px]'>
      <div className='flex flex-col gap-2.5'>
        <h3 className='text-2xl font-semibold tracking-[-0.02em]'>Sync, if you want it. Encrypted before it leaves.</h3>
        <p className='text-base text-gray-400'>
          Turn on Dash Sync and your Mac, iPhone and iPad stay in step. Notes are encrypted on the device with a vault key
          the server never has. This is what our relay sees:
        </p>
        <span className='font-mono text-[13px] text-gray-500 mt-1'>$4.99 / month · $47.99 / year · 7-day trial · optional</span>
      </div>
      <div className='bg-gray-800/60 dark:bg-gray-900 rounded-xl border border-gray-700 dark:border-gray-800 p-4 flex flex-col gap-2.5'>
        <span className='font-mono text-[11.5px] text-gray-500 tracking-[0.06em] tabular-nums'>
          RELAY · vault 3f9a · 09:{String(Math.floor(secs / 60)).padStart(2, '0')}:{String(secs % 60).padStart(2, '0')}
        </span>
        <div className='font-mono text-[12.5px] leading-[1.7] text-gray-500 break-all' aria-label='Encrypted data as seen by the sync relay'>
          {chunks.join(' ')}
        </div>
        <span className='text-[13px] text-gray-400'>No titles. No tags. No text. Just ciphertext and a timestamp.</span>
      </div>
    </div>
  );
}

/* ── 7. Local AI ── */
const REPLY = 'Two sources confirm the timeline independently; the March minutes are the discrepancy to chase.';
function LocalAICard({ active }: { active: boolean }) {
  const t = useTicker(45, 160, active);
  const shown = REPLY.slice(0, Math.max(0, t - 18));
  return (
    <div className={`${card} min-h-[300px]`}>
      <div className='flex flex-col gap-1.5'>
        <h3 className={title}>AI that stays on your Mac.</h3>
        <p className={body}>Summarize, rewrite and ask questions with Ollama or LM Studio. Nothing leaves the machine.</p>
      </div>
      <div className={`${panel} mt-auto p-3.5 flex flex-col gap-2.5 text-[13.5px]`}>
        <div className='self-end px-3 py-2 rounded-[10px] bg-gray-900 dark:bg-white text-white dark:text-gray-900'>Summarize this note</div>
        <div className='px-3 py-2 rounded-[10px] bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 min-h-[64px]'>
          {shown}
          {shown.length < REPLY.length && <span className='inline-block w-px h-3.5 align-middle bg-gray-900 dark:bg-white ml-px animate-pulse' aria-hidden='true' />}
        </div>
        <span className='font-mono text-[11.5px] text-gray-500 dark:text-gray-400'>ollama · llama3 · localhost</span>
      </div>
    </div>
  );
}

export default function BentoFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px' });
  const reduced = useReducedMotion();
  const active = inView && !reduced;

  return (
    <section id='features' ref={ref} className='py-16 sm:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900 dark:text-white text-balance max-w-[18ch]'>
            Everything you want from a notes app. Nothing that needs a server.
          </h2>
          <p className='text-[17px] text-gray-500 dark:text-gray-400 max-w-[34ch]'>
            A real block editor with links, folders and tags, plus the things only a private app can offer.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <LockCard active={active} />
          <ThemesCard active={active} />
          <LinksCard active={active} />
          <SelfDestructCard active={active} />
          <DuressCard active={active} />
          <SyncLedgerCard active={active} />
          <LocalAICard active={active} />
        </div>

        <p className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2'>
          <Fingerprint className='w-4 h-4' />
          Touch ID on Mac and Face ID on iPhone unlock the app or any locked note; a password is always the fallback.
        </p>
      </div>
    </section>
  );
}
