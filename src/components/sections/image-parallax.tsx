'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ImageParallaxSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Adjust the starting point of the scroll effect if needed
  const scrollStart = 500;
  const scale = Math.min(Math.max(1 + (scrollY - scrollStart) / 1000, 1), 1.2);

  return (
    <section className="relative h-[50vh] overflow-hidden bg-transparent">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="w-full max-w-[600px] transition-transform duration-800 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src="https://placehold.co/600x400.png"
            data-ai-hint="human robot hand"
            alt="A human hand and a robotic hand reaching towards each other."
            width={600}
            height={400}
            className="h-auto w-full max-w-[90%] rounded-lg object-contain md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
