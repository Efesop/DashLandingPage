'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface AIOrbProps {
  size?: number;
  generating?: boolean;
}

interface Blob {
  color: [number, number, number];
  alpha: number;
  radius: number;
  speedX: number;
  speedY: number;
  amplitudeX: number;
  amplitudeY: number;
  phase: number;
}

const idleBlobs: Blob[] = [
  { color: [70, 120, 255], alpha: 0.9, radius: 0.55, speedX: 0.3, speedY: 0.25, amplitudeX: 0.28, amplitudeY: 0.24, phase: 0 },
  { color: [140, 80, 250], alpha: 0.8, radius: 0.45, speedX: -0.25, speedY: 0.4, amplitudeX: 0.24, amplitudeY: 0.3, phase: 1.8 },
  { color: [230, 90, 180], alpha: 0.65, radius: 0.38, speedX: 0.2, speedY: -0.3, amplitudeX: 0.22, amplitudeY: 0.2, phase: 3.6 },
  { color: [40, 180, 255], alpha: 0.6, radius: 0.37, speedX: -0.15, speedY: 0.2, amplitudeX: 0.18, amplitudeY: 0.26, phase: 5.2 },
  { color: [170, 110, 255], alpha: 0.5, radius: 0.3, speedX: 0.22, speedY: 0.18, amplitudeX: 0.16, amplitudeY: 0.18, phase: 7.0 },
];

const generatingBlobs: Blob[] = [
  { color: [20, 80, 255], alpha: 0.95, radius: 0.5, speedX: 1.6, speedY: 1.1, amplitudeX: 0.36, amplitudeY: 0.32, phase: 0 },
  { color: [0, 190, 250], alpha: 0.85, radius: 0.44, speedX: -1.3, speedY: 1.8, amplitudeX: 0.32, amplitudeY: 0.38, phase: 0.8 },
  { color: [200, 50, 210], alpha: 0.7, radius: 0.38, speedX: 1.9, speedY: -1.4, amplitudeX: 0.34, amplitudeY: 0.28, phase: 1.6 },
  { color: [80, 100, 255], alpha: 0.75, radius: 0.4, speedX: -1.1, speedY: 1.5, amplitudeX: 0.28, amplitudeY: 0.34, phase: 2.8 },
  { color: [160, 70, 240], alpha: 0.6, radius: 0.32, speedX: 1.4, speedY: -1.8, amplitudeX: 0.3, amplitudeY: 0.26, phase: 4.0 },
  { color: [40, 220, 240], alpha: 0.5, radius: 0.28, speedX: -1.7, speedY: 1.2, amplitudeX: 0.26, amplitudeY: 0.32, phase: 5.5 },
];

function fbm(x: number, y: number, z: number): number {
  let v = 0, amp = 1, freq = 1;
  for (let i = 0; i < 4; i++) {
    v += amp * (Math.sin(x * freq * 1.1 + z) * Math.cos(y * freq * 0.9 + z * 0.7) +
      Math.sin(x * freq * 0.6 - z * 1.3) * Math.sin(y * freq * 1.4 + z * 0.5)) / 2;
    amp *= 0.5;
    freq *= 2.1;
  }
  return v;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export default function AIOrb({ size = 120, generating = false }: AIOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const paramsRef = useRef({ speed: 0.004, wobble: 0.25, blur: 28, deform: 0.2 });
  const targetRef = useRef(generating);

  targetRef.current = generating;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 2;
    const w = size * dpr;
    const h = size * dpr;

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const params = paramsRef.current;
    const target = targetRef.current
      ? { speed: 0.025, wobble: 0.5, blur: 18, deform: 0.4 }
      : { speed: 0.004, wobble: 0.25, blur: 28, deform: 0.2 };

    params.speed = lerp(params.speed, target.speed, 0.035);
    params.wobble = lerp(params.wobble, target.wobble, 0.035);
    params.blur = lerp(params.blur, target.blur, 0.035);
    params.deform = lerp(params.deform, target.deform, 0.035);

    timeRef.current += params.speed;
    const time = timeRef.current;

    const cx = w / 2;
    const cy = h / 2;
    const sphereR = (Math.min(w, h) / 2) - 8 * dpr;

    const blobs = targetRef.current ? generatingBlobs : idleBlobs;

    // Pass 1: Draw blobs on offscreen canvas
    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h;
    const octx = offscreen.getContext('2d')!;

    octx.save();
    octx.beginPath();
    octx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    octx.clip();

    for (const blob of blobs) {
      const sloshX = Math.sin(time * blob.speedX + blob.phase) * sphereR * blob.amplitudeX
        + fbm(blob.phase, time * 0.6, blob.phase + 3) * sphereR * params.wobble * 0.25;
      const sloshY = Math.cos(time * blob.speedY * 1.15 + blob.phase + 1) * sphereR * blob.amplitudeY
        + fbm(blob.phase + 7, time * 0.5, blob.phase + 9) * sphereR * params.wobble * 0.25;

      const bx = cx + sloshX;
      const by = cy + sloshY;
      const baseR = sphereR * blob.radius;
      const segments = 80;

      octx.beginPath();
      for (let s = 0; s <= segments; s++) {
        const angle = (s / segments) * Math.PI * 2;
        const noise1 = fbm(Math.cos(angle) * 2, Math.sin(angle) * 2, time * 1.2 + blob.phase);
        const noise2 = fbm(Math.cos(angle) * 3.5 + 10, Math.sin(angle) * 3.5 + 10, time * 0.7 + blob.phase + 5);
        const wave = Math.sin(angle * 3 + time * 2 + blob.phase) * 0.08
          + Math.sin(angle * 5 - time * 3 + blob.phase * 2) * 0.04;
        const r = baseR * (1 + params.deform * (noise1 * 0.5 + noise2 * 0.3) + wave);
        const px = bx + Math.cos(angle) * r;
        const py = by + Math.sin(angle) * r;
        if (s === 0) octx.moveTo(px, py);
        else octx.lineTo(px, py);
      }
      octx.closePath();

      const grad = octx.createRadialGradient(bx, by, 0, bx, by, baseR * 1.2);
      const [cr, cg, cb] = blob.color;
      grad.addColorStop(0, `rgba(${cr},${cg},${cb},${blob.alpha})`);
      grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      octx.fillStyle = grad;
      octx.fill();
    }
    octx.restore();

    // Pass 2: Blur and overlay compositing
    const blurred = document.createElement('canvas');
    blurred.width = w;
    blurred.height = h;
    const bctx = blurred.getContext('2d')!;

    bctx.save();
    bctx.beginPath();
    bctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    bctx.clip();
    bctx.filter = `blur(${params.blur * (dpr / 2)}px)`;
    bctx.drawImage(offscreen, 0, 0);
    bctx.filter = 'none';

    // Overlay color spots
    bctx.globalCompositeOperation = 'overlay';
    for (let i = 0; i < Math.min(3, blobs.length); i++) {
      const b = blobs[i];
      const sx = cx + Math.sin(time * b.speedX * 0.5 + b.phase) * sphereR * 0.3;
      const sy = cy + Math.cos(time * b.speedY * 0.5 + b.phase) * sphereR * 0.3;
      const sg = bctx.createRadialGradient(sx, sy, 0, sx, sy, sphereR * 0.6);
      sg.addColorStop(0, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.3)`);
      sg.addColorStop(1, 'rgba(0,0,0,0)');
      bctx.fillStyle = sg;
      bctx.fillRect(0, 0, w, h);
    }
    bctx.globalCompositeOperation = 'source-over';
    bctx.restore();

    // Pass 3: Final composite
    ctx.clearRect(0, 0, w, h);

    // Drop shadow
    ctx.save();
    ctx.shadowColor = 'rgba(100, 120, 180, 0.2)';
    ctx.shadowBlur = 30 * dpr;
    ctx.shadowOffsetY = 10 * dpr;
    ctx.beginPath();
    ctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(blurred, 0, 0);
    ctx.restore();

    // Pass 4: Glass frost overlay
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    ctx.clip();
    const frost = ctx.createRadialGradient(cx, cy * 0.8, 0, cx, cy, sphereR);
    frost.addColorStop(0, 'rgba(255,255,255,0.1)');
    frost.addColorStop(0.4, 'rgba(255,255,255,0.15)');
    frost.addColorStop(0.7, 'rgba(255,255,255,0.25)');
    frost.addColorStop(1, 'rgba(255,255,255,0.35)');
    ctx.fillStyle = frost;
    ctx.fill();
    ctx.restore();

    // Pass 5: Glass highlights
    // Rim stroke
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, sphereR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(180, 190, 220, 0.4)';
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();
    ctx.restore();

    // Specular highlight
    ctx.save();
    ctx.translate(cx + sphereR * -0.28, cy + sphereR * -0.3);
    ctx.rotate(-0.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, sphereR * 0.35, sphereR * 0.25, 0, 0, Math.PI * 2);
    const spec = ctx.createRadialGradient(0, 0, 0, 0, 0, sphereR * 0.35);
    spec.addColorStop(0, 'rgba(255,255,255,0.55)');
    spec.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = spec;
    ctx.fill();
    ctx.restore();

    animRef.current = requestAnimationFrame(draw);
  }, [size]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
    />
  );
}
