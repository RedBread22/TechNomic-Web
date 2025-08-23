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

  const scale = Math.min(Math.max(1 + (scrollY - 500) / 1000, 1), 1.2);

  return (
    <section className="relative h-[50vh] overflow-hidden bg-transparent">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="w-full max-w-[600px] transition-transform duration-800 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src="https://placehold.co/600x400.png"
            alt="Parallax Image"
            width={600}
            height={400}
            className="h-auto w-full max-w-[90%] rounded-lg object-contain md:max-w-full"
            data-ai-hint="abstract illustration dark"
          />
        </div>
      </div>
    </section>
  );
}
