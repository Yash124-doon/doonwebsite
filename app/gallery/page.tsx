'use client';

import { motion } from 'framer-motion';
import GalleryCTA from '../../components/sections/gallery/GalleryCTA';
import GalleryCategories from '../../components/sections/gallery/GalleryCategories';

import EventsGallery from '../../components/sections/gallery/EventsGallery';

export default function Gallery() {

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
            className="absolute top-20 left-10 w-8 h-8 bg-white/20 rounded-full"
            animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-32 right-20 w-6 h-6 bg-[#F2B33D]/30 rounded-full"
            animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 text-white leading-tight">
                Our Visual
                <span className="block text-white">Gallery</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the vibrant life at Doon International School through our comprehensive gallery showcasing academics, facilities, and extracurricular activities.
            </motion.p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      <GalleryCategories />



      <EventsGallery />

      <GalleryCTA />
    </>
  );
}
