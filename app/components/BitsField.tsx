'use client';

import React, { useEffect, useRef } from 'react';

type Props = {
  /** Ink colour as "r,g,b". */
  ink?: string;
  /** Resting alpha of a bit. */
  base?: number;
  /** Extra alpha at the centre of the sweep front. */
  peak?: number;
  /** Cell width in CSS px. */
  cell?: number;
  /** Row height in CSS px. */
  line?: number;
  /** Font size in CSS px. */
  font?: number;
  /** Fraction of the height where a fade to transparent begins (null = no fade). */
  fade?: number | null;
  /** Clear a soft ellipse behind the headline area. */
  clear?: boolean;
  /** Seconds per sweep across the field. */
  period?: number;
  className?: string;
  style?: React.CSSProperties;
};

const FONT_STACK = 'var(--font-geist-mono), "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

/**
 * A field of 0s and 1s drawn on a 2D canvas. A diagonal "decrypt" sweep crosses it every
 * `period` seconds, brightening and flipping the bits it passes; between sweeps the odd bit
 * flickers. Draws at ~12 fps, only while on screen and the tab is visible; a still field
 * under prefers-reduced-motion.
 */
export default function BitsField({
  ink = '13,13,13',
  base = 0.09,
  peak = 0.32,
  cell = 12.4,
  line = 21,
  font = 13,
  fade = null,
  clear = false,
  period = 7,
  className = '',
  style,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let bits = new Uint8Array(0);
    let glow = new Float32Array(0);
    let fadeY: number | null = null;
    let t = Math.random() * period;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let running = false;
    let disposed = false;

    const setup = () => {
      const rect = cv.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width));
      H = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${font}px ${FONT_STACK}`;
      ctx.textBaseline = 'top';
      cols = Math.ceil(W / cell);
      rows = Math.ceil(H / line);
      const n = cols * rows;
      bits = new Uint8Array(n);
      glow = new Float32Array(n);
      for (let i = 0; i < n; i++) bits[i] = Math.random() < 0.5 ? 1 : 0;
      fadeY = fade == null ? null : fade * H;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const span = W + H * 0.6 + 300;
      const s = ((t % period) / period) * span - 150;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = c * cell;
          const y = r * line;
          let a = base;
          if (!reduced) {
            const d = Math.abs(x + y * 0.6 - s);
            if (d < 60) {
              const k = 1 - d / 60;
              a += peak * k;
              if (Math.random() < 0.12) bits[i] ^= 1;
              if (k > glow[i]) glow[i] = k;
            } else if (glow[i] > 0) {
              a += peak * 0.7 * glow[i];
              glow[i] -= 0.025;
            }
            if (Math.random() < 0.0006) bits[i] ^= 1;
          }
          if (fadeY != null && y > fadeY) a *= Math.max(0, 1 - (y - fadeY) / (H - fadeY));
          if (clear) {
            const dx = (x - W / 2) / (W * 0.34);
            const dy = (y - H * 0.42) / (H * 0.36);
            const rr = dx * dx + dy * dy;
            if (rr < 1) a *= 0.2 + 0.8 * rr;
          }
          if (a <= 0.004) continue;
          ctx.fillStyle = `rgba(${ink},${a.toFixed(3)})`;
          ctx.fillText(bits[i] ? '1' : '0', x, y);
        }
      }
    };

    const loop = () => {
      if (disposed || !visible || document.hidden) {
        running = false;
        return;
      }
      draw();
      t += 1 / 12;
      timer = setTimeout(() => {
        raf = requestAnimationFrame(loop);
      }, 83);
    };

    const start = () => {
      if (running || reduced || disposed) return;
      running = true;
      loop();
    };

    setup();
    draw();

    const ro = new ResizeObserver(() => {
      setup();
      draw();
    });
    ro.observe(cv);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { rootMargin: '120px' }
    );
    io.observe(cv);

    const onVisibility = () => {
      if (!document.hidden) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      disposed = true;
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (timer) clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [ink, base, peak, cell, line, font, fade, clear, period]);

  return <canvas ref={ref} aria-hidden='true' className={className} style={style} />;
}
