'use client';

import React from 'react';
import { cn } from '../../../lib/utils';

interface FloatingOrbsProps {
  variant?: 'light' | 'dark';
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export default function FloatingOrbs({
  variant = 'light',
  className,
  density = 'medium',
}: FloatingOrbsProps) {
  const orbConfigs = {
    low: [
      { size: 300, x: '20%', y: '20%', animation: 'animate-orb-1' },
      { size: 250, x: '70%', y: '60%', animation: 'animate-orb-2' },
    ],
    medium: [
      { size: 350, x: '10%', y: '20%', animation: 'animate-orb-1' },
      { size: 280, x: '70%', y: '10%', animation: 'animate-orb-2' },
      { size: 220, x: '80%', y: '60%', animation: 'animate-orb-3' },
      { size: 180, x: '20%', y: '70%', animation: 'animate-orb-2' },
    ],
    high: [
      { size: 400, x: '5%', y: '10%', animation: 'animate-orb-1' },
      { size: 350, x: '75%', y: '5%', animation: 'animate-orb-2' },
      { size: 300, x: '85%', y: '50%', animation: 'animate-orb-3' },
      { size: 250, x: '15%', y: '60%', animation: 'animate-orb-2' },
      { size: 200, x: '50%', y: '80%', animation: 'animate-orb-1' },
    ],
  };

  const colorClass = variant === 'light' ? 'bg-blue-400/10' : 'bg-blue-500/15';

  const orbs = orbConfigs[density];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {orbs.map((orb, index) => (
        <div
          key={index}
          className={cn(
            'absolute rounded-full blur-3xl',
            colorClass,
            orb.animation
          )}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
        />
      ))}
    </div>
  );
}
