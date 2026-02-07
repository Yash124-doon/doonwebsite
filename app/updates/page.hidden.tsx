'use client';

import { motion } from 'framer-motion';
import FeaturedNewsSection from '../../components/sections/updates/FeaturedNewsSection';
import AllNewsSection from '../../components/sections/updates/AllNewsSection';
import EventsSection from '../../components/sections/updates/EventsSection';
import NewsletterSignup from '../../components/sections/updates/NewsletterSignup';
import UpdatesCTA from '../../components/sections/updates/UpdatesCTA';

export default function Updates() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#002B6B] opacity-90">
          <div className="absolute inset-0 bg-[#F2B33D] opacity-20 animate-pulse" />
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-8 h-8 bg-[#F2B33D]/20 rounded-full"
            animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Latest
                <span className="block text-white">Updates</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Stay connected with the latest news, achievements, and upcoming events at Doon International School.
            </motion.p>
          </div>
        </div>
      </section>

      <FeaturedNewsSection />

      <AllNewsSection />

      <EventsSection />

      <UpdatesCTA />
    </>
  );
}
