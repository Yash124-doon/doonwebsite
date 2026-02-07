'use client';

import React, { useState } from 'react';
import FlipCard from '../ui/flip-card';

interface DiscoverCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: 'book' | 'sports' | 'building' | 'map';
}

interface DiscoverDoonProps {
  cards: DiscoverCard[];
}

export default function DiscoverDoon({ cards }: DiscoverDoonProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleFlip = (cardId: string) => (isFlipped: boolean) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (isFlipped) {
        newSet.add(cardId);
      } else {
        newSet.delete(cardId);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full bg-[#F8F9FB] py-24 px-4" id="discover-doon">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F48] mb-4">
            Discover Doon
            <span className="block h-[3px] w-20 bg-[#FFD200] mx-auto mt-3"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the world-class facilities, academic excellence, and holistic development opportunities at Doon International School
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div key={card.id} className="group">
              <FlipCard
                card={card}
                onFlip={handleFlip(card.id)}
              />
            </div>
          ))}
        </div>

        {/* Clean section end without instructional text */}
      </div>
    </section>
  );
}
