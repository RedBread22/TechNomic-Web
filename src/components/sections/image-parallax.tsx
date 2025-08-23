'use client';

import { useState, useEffect } from 'react';

export function ImageParallaxSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // --- TUNING ---
  const scrollStart = 120;     // früher anfangen
  const maxScale   = 1.08;     // weniger Zoom (8%)
  const divisor    = 800;      // größer = sanftere Steigung
  // ---------------

  const raw = 1 + Math.max(0, scrollY - scrollStart) / divisor;
  const scale = Math.min(raw, maxScale);

  return (
    <section className="relative h-[50vh] overflow-hidden bg-transparent">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <img
          src="/images/1.png"
          alt="Parallax Image"
          width={600}
          height={400}
          className="h-auto w-full max-w-[600px] rounded-lg object-contain transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </section>
  );
}
