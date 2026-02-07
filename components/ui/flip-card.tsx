'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface DiscoverCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: 'book' | 'sports' | 'building' | 'map';
  link?: string;
}

interface FlipCardProps {
  card: DiscoverCard;
  onFlip?: (flipped: boolean) => void;
}

const iconMap = {
  book: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    </svg>
  ),
  sports: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
    </svg>
  ),
  building: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l8 4v16h-16v-16l8-4z"/>
      <rect x="8" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="10" y="14" width="2" height="2" fill="currentColor"/>
      <rect x="14" y="14" width="2" height="2" fill="currentColor"/>
      <path d="M9 18h6v2h-6v-2z"/>
    </svg>
  ),
  map: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  ),
};

export default function FlipCard({ card, onFlip }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFlip = useCallback(() => {
    // If card has a link, navigate instead of flipping
    if (card.link) {
      router.push(card.link);
      return;
    }

    // Disable flip on mobile - content is always visible
    if (isMobile) return;

    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    onFlip?.(newFlippedState);
  }, [isFlipped, onFlip, card.link, router, isMobile]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  }, [handleFlip]);

  const handleMouseEnter = useCallback(() => {
    // Only flip on hover for larger screens (desktop)
    if (window.innerWidth >= 768) {
      setIsFlipped(true);
      onFlip?.(true);
    }
  }, [onFlip]);

  const handleMouseLeave = useCallback(() => {
    // Only flip back on hover leave for larger screens (desktop)
    if (window.innerWidth >= 768) {
      setIsFlipped(false);
      onFlip?.(false);
    }
  }, [onFlip]);

  return (
    <div
      className="relative w-full h-[28rem] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      style={{
        perspective: '1000px'
      }}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${card.title}`}
      aria-expanded={isMobile || isFlipped}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-lg"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Bottom-aligned title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
              <h3 className="text-white text-lg font-bold leading-tight">
                {card.title}
              </h3>
              {isMobile && <p className="text-white/70 text-sm leading-relaxed mt-1">
                {card.subtitle}
              </p>}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              {/* Icon */}
              <div className="mb-4 bg-primary/20 rounded-full p-3">
                {iconMap[card.icon]}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white/90 text-sm leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
