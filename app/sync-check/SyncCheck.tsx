'use client';

import React, { useCallback, useEffect, useState } from 'react';

// Each probe is a plain HTTPS request from the visitor's device. Nothing is
// sent except the request itself — no notes, no account data.
//
// Discrimination logic (all Deno hosts share the same edge IP, so the pair
// "relay fails / deno.com works" isolates a NAME-based filter, while
// "both fail / other sites work" isolates a provider/IP block):
//   relay      – the actual sync server (CORS-enabled, real status code)
//   docs.deno.com – same edge IP as the relay, different name (deno.com itself sends
//                Cross-Origin-Resource-Policy, which makes no-cors probes fail)
//   fresh.deno.dev – same edge, a *.deno.dev name
//   pwa        – Dash web app host (GitHub Pages)
//   ip         – https://1.1.1.1 (IP literal: works without any DNS)
//   cf / g     – public DNS-over-HTTPS answers for the relay's name
const RELAY = 'https://dash-relay.efesop.deno.net';
const RELAY_HOST = 'dash-relay.efesop.deno.net';
// Current production revision's own hostname: the same relay under a second name.
const REV_HOST = 'dash-relay-f8f7mmv6xn2y.efesop.deno.net';
const TIMEOUT_MS = 12000;

type Status = 'pending' | 'ok' | 'fail';
type Probe = {
  key: string;
  label: string;
  detail: string;
  status: Status;
  ms?: number;
  note?: string;
  short?: string;
};

const INITIAL: Probe[] = [
  { key: 'relay', label: 'Dash sync server', detail: RELAY_HOST, status: 'pending' },
  { key: 'rev', label: 'Same sync server, alternate name', detail: REV_HOST, status: 'pending' },
  { key: 'sibling', label: 'Another name next to it', detail: 'zzz-probe.efesop.deno.net', status: 'pending' },
  { key: 'org', label: 'The efesop.deno.net name', detail: 'efesop.deno.net', status: 'pending' },
  { key: 'apex', label: 'deno.net itself', detail: 'deno.net', status: 'pending' },
  { key: 'deno', label: 'docs.deno.com (same servers, different name)', detail: 'docs.deno.com', status: 'pending' },
  { key: 'dev', label: 'A deno.dev site', detail: 'fresh.deno.dev', status: 'pending' },
  { key: 'pwa', label: 'Dash web app', detail: 'efesop.github.io', status: 'pending' },
  { key: 'ip', label: 'Direct IP (no DNS needed)', detail: '1.1.1.1', status: 'pending' },
  { key: 'cf', label: 'Cloudflare DNS lookup of the sync server', detail: 'cloudflare-dns.com', status: 'pending' },
  { key: 'g', label: 'Google DNS lookup of the sync server', detail: 'dns.google', status: 'pending' },
];

function withTimeout(): { signal: AbortSignal; done: () => void } {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  return { signal: ctrl.signal, done: () => clearTimeout(t) };
}

function failNote(ms: number, err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  if (/abort/i.test(msg) || ms >= TIMEOUT_MS - 200) return `timed out after ${(ms / 1000).toFixed(0)}s (blocked silently)`;
  if (ms < 1500) return `failed fast (${msg}) — name not found or connection refused`;
  return `failed after ${(ms / 1000).toFixed(1)}s (${msg})`;
}

async function reachable(url: string): Promise<Partial<Probe>> {
  const t0 = performance.now();
  const { signal, done } = withTimeout();
  try {
    await fetch(url, { mode: 'no-cors', cache: 'no-store', signal });
    const ms = Math.round(performance.now() - t0);
    return { status: 'ok', ms, note: `reached in ${ms} ms`, short: 'OK' };
  } catch (err) {
    const ms = Math.round(performance.now() - t0);
    return { status: 'fail', ms, note: failNote(ms, err), short: `FAIL(${(ms / 1000).toFixed(1)}s)` };
  } finally {
    done();
  }
}

async function relayHealth(): Promise<Partial<Probe>> {
  const t0 = performance.now();
  const { signal, done } = withTimeout();
  try {
    const res = await fetch(`${RELAY}/health`, { cache: 'no-store', signal });
    const ms = Math.round(performance.now() - t0);
    const body = (await res.text()).slice(0, 60).replace(/\s+/g, ' ');
    if (res.ok) return { status: 'ok', ms, note: `HTTP ${res.status} in ${ms} ms · ${body}`, short: 'OK' };
    return { status: 'fail', ms, note: `HTTP ${res.status} in ${ms} ms · ${body}`, short: `HTTP${res.status}` };
  } catch (err) {
    const ms = Math.round(performance.now() - t0);
    return { status: 'fail', ms, note: failNote(ms, err), short: `FAIL(${(ms / 1000).toFixed(1)}s)` };
  } finally {
    done();
  }
}

async function doh(url: string): Promise<Partial<Probe>> {
  const t0 = performance.now();
  const { signal, done } = withTimeout();
  try {
    const res = await fetch(url, { headers: { accept: 'application/dns-json' }, cache: 'no-store', signal });
    const ms = Math.round(performance.now() - t0);
    const json = await res.json();
    const answers: string[] = Array.isArray(json?.Answer)
      ? json.Answer.filter((a: { type: number }) => a.type === 1).map((a: { data: string }) => a.data)
      : [];
    if (answers.length) return { status: 'ok', ms, note: `answer: ${answers.join(', ')} (${ms} ms)`, short: answers[0] };
    return { status: 'fail', ms, note: `no address returned (status ${json?.Status ?? '?'}) in ${ms} ms`, short: 'NOADDR' };
  } catch (err) {
    const ms = Math.round(performance.now() - t0);
    return { status: 'fail', ms, note: failNote(ms, err), short: `FAIL(${(ms / 1000).toFixed(1)}s)` };
  } finally {
    done();
  }
}

function verdict(p: Record<string, Probe>): { title: string; body: string; tone: 'good' | 'bad' | 'warn' } {
  const ok = (k: string) => p[k]?.status === 'ok';
  if (ok('relay')) {
    return {
      tone: 'good',
      title: 'This device can reach the Dash sync server.',
      body: 'Open Dash → ••• → Sync settings and tap "Sync your notes" or "Enter a sync code". If Dash still shows an error, screenshot this page and the error together.',
    };
  }
  if (!ok('ip') && !ok('pwa') && !ok('cf') && !ok('g')) {
    return {
      tone: 'bad',
      title: 'This device has no working internet right now.',
      body: 'Nothing was reachable. Check Wi-Fi or cellular, turn Airplane Mode on and off, and run the check again.',
    };
  }
  if (ok('deno') || ok('dev')) {
    // Deno's servers answer under deno.com / deno.dev, so the failure is tied to a NAME.
    if (!ok('apex')) {
      return {
        tone: 'bad',
        title: 'Everything under deno.net is blocked on this phone.',
        body: 'deno.com and deno.dev work, but no deno.net address does. That is a domain filter on this phone or its DNS: a DNS or ad-blocking app, a VPN, a configuration profile (Settings → General → VPN & Device Management), or the mobile carrier. Screenshot this page.',
      };
    }
    if (!ok('org')) {
      return {
        tone: 'bad',
        title: 'Only the efesop.deno.net names are blocked.',
        body: 'deno.net itself works, but every name under efesop.deno.net is refused. That is a blocklist entry on this phone or its DNS. Screenshot this page.',
      };
    }
    return {
      tone: 'bad',
      title: 'Only the sync server\'s exact name is blocked.',
      body: 'Names right next to it work. This is almost always Screen Time: Settings → Screen Time → Content & Privacy Restrictions → Content Restrictions → Web Content. Set it to Unrestricted, or add dash-relay.efesop.deno.net under Always Allow. Then run the check again.',
    };
  }
  if (ok('pwa') || ok('ip')) {
    return {
      tone: 'bad',
      title: 'This network cannot reach the hosting provider the sync server runs on.',
      body: 'Other websites work, but every Deno-hosted site fails. The carrier or network is blocking that provider. Try a different network, or a hotspot from another phone, and run the check again.',
    };
  }
  return {
    tone: 'warn',
    title: 'Mixed result.',
    body: 'Screenshot this whole page and send it to support.',
  };
}

export default function SyncCheck() {
  const [probes, setProbes] = useState<Probe[]>(INITIAL);
  const [running, setRunning] = useState(false);
  const [ua, setUa] = useState('');
  const [ranAt, setRanAt] = useState('');

  const update = (key: string, patch: Partial<Probe>) =>
    setProbes(prev => prev.map(x => (x.key === key ? { ...x, ...patch } : x)));

  const run = useCallback(async () => {
    setRunning(true);
    setProbes(INITIAL);
    setRanAt(new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC');
    const tasks: Array<[string, () => Promise<Partial<Probe>>]> = [
      ['relay', relayHealth],
      ['rev', () => reachable(`https://${REV_HOST}/health`)],
      ['sibling', () => reachable('https://zzz-probe.efesop.deno.net/')],
      ['org', () => reachable('https://efesop.deno.net/')],
      ['apex', () => reachable('https://deno.net/')],
      ['deno', () => reachable('https://docs.deno.com/')],
      ['dev', () => reachable('https://fresh.deno.dev/')],
      ['pwa', () => reachable('https://efesop.github.io/rich-text-editor/manifest.json')],
      ['ip', () => reachable('https://1.1.1.1/cdn-cgi/trace')],
      ['cf', () => doh(`https://cloudflare-dns.com/dns-query?name=${RELAY_HOST}&type=A`)],
      ['g', () => doh(`https://dns.google/resolve?name=${RELAY_HOST}&type=A`)],
    ];
    // Run in parallel: a blocked host must not delay the others.
    await Promise.all(tasks.map(async ([key, fn]) => update(key, await fn())));
    setRunning(false);
  }, []);

  useEffect(() => {
    setUa(typeof navigator !== 'undefined' ? navigator.userAgent : '');
    run();
  }, [run]);

  const byKey = Object.fromEntries(probes.map(p => [p.key, p])) as Record<string, Probe>;
  const finished = probes.every(p => p.status !== 'pending');
  const v = finished ? verdict(byKey) : null;
  const code = probes.map(p => `${p.key}:${p.status === 'pending' ? '…' : p.short}`).join(' ');
  const device = /iPhone|iPad/.test(ua)
    ? `iOS ${(ua.match(/OS (\d+[_.]\d+)/)?.[1] || '?').replace('_', '.')}`
    : /Android/.test(ua) ? 'Android' : /Macintosh/.test(ua) ? 'Mac' : 'other';

  const toneClass = v?.tone === 'good'
    ? 'border-green-300 bg-green-50 text-green-900'
    : v?.tone === 'bad'
      ? 'border-red-300 bg-red-50 text-red-900'
      : 'border-amber-300 bg-amber-50 text-amber-900';

  return (
    <main className="min-h-screen bg-white text-gray-900 px-5 py-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold">Dash Sync connection check</h1>
      <p className="mt-2 text-sm text-gray-600">
        Checks whether this device can reach the Dash sync server. Only the checks themselves
        are sent. No notes, no email, no account details.
      </p>

      <div className={`mt-5 rounded-xl border p-4 ${finished ? toneClass : 'border-gray-200 bg-gray-50'}`}>
        {v ? (
          <>
            <p className="font-semibold">{v.title}</p>
            <p className="mt-1 text-sm leading-relaxed">{v.body}</p>
          </>
        ) : (
          <p className="text-sm">Running checks…</p>
        )}
      </div>

      <div className="mt-3 rounded-lg bg-gray-900 p-3 text-[11px] leading-relaxed text-gray-100 font-mono break-all">
        DASHCHECK v2 · {device} · {ranAt}
        <br />
        {code}
      </div>

      <ul className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-200">
        {probes.map(p => (
          <li key={p.key} className="flex items-start gap-3 px-4 py-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                p.status === 'ok' ? 'bg-green-100 text-green-700'
                  : p.status === 'fail' ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-500'
              }`}
              aria-label={p.status}
            >
              {p.status === 'ok' ? '✓' : p.status === 'fail' ? '✕' : '…'}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-xs text-gray-500 break-all">{p.detail}</p>
              {p.note && <p className="mt-0.5 text-xs text-gray-700 break-words">{p.note}</p>}
            </div>
          </li>
        ))}
      </ul>


      <button
        type="button"
        onClick={run}
        disabled={running}
        className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
      >
        {running ? 'Checking…' : 'Run the check again'}
      </button>

      <p className="mt-6 text-[11px] text-gray-400 break-all">{ua}</p>
    </main>
  );
}
