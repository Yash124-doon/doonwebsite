/**
 * @fileoverview About page component for Doon International School
 * @description Displays comprehensive information about the school's mission, values, and facilities
 * @author Doon International School Development Team
 */

'use client';

import { motion } from 'framer-motion';
import AboutCTA from '../../components/sections/about/AboutCTA';
import MissionVisionSection from '../../components/sections/about/MissionVisionSection';
import CoreValuesSection from '../../components/sections/about/CoreValuesSection';

/**
 * About page component that showcases Doon International School's identity and offerings
 *
 * Features displayed:
 * - Hero section with animated background and school introduction
 * - Mission and vision statements
 * - Core values that guide the institution
 * - Comprehensive facilities showcase with images and descriptions
 * - Call-to-action section for engagement
 *
 * The page uses Framer Motion for smooth animations and responsive design
 * to ensure optimal viewing experience across all devices.
 *
 * @returns {JSX.Element} The complete about page layout
 */
export default function About(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-brand-primary opacity-90">
          <div className="absolute inset-0 bg-brand-secondary opacity-20 animate-pulse" />
        </div>

        {/* Brand-Aligned Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-6 h-6 bg-brand-secondary/20 rounded-full"
            animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-32 right-20 w-4 h-4 bg-brand-primary/30 rounded-full"
            animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-3xl font-heading font-black mb-8 text-white leading-tight">
                <span className="block text-white">Excellence</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="font-body text-[15px] mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Nurturing minds, building futures since 1985. We are committed to providing
              world-class education that prepares students for global success.
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

      <MissionVisionSection />

      <CoreValuesSection />

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-primary">School Facilities</h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">World-class infrastructure designed for excellence in education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Classrooms",
                description: "All classrooms equipped with smart boards, air purifiers, and digital learning resources.",
                icon: "📚"
              },
              {
                title: "Library",
                description: "Comprehensive library with storytelling programs and creative writing activities.",
                icon: "📖"
              },
              {
                title: "Computer Labs",
                description: "State-of-the-art computer laboratories with updated systems and multimedia facilities.",
                icon: "💻"
              },
              {
                title: "Auditorium",
                description: "Spacious auditorium with modern lighting and sound systems for performances and events.",
                icon: "🎭"
              },
              {
                title: "Science Park",
                description: "Interactive outdoor learning space with exhibits demonstrating scientific principles.",
                icon: "🔬"
              },
              {
                title: "Sports Facilities",
                description: "Comprehensive sports infrastructure for physical education and athletics.",
                icon: "⚽"
              }
            ].map((facility, index) => {
              const backgroundImages = [
                '/images/classroom/classroom.webp',
                '/images/library/classroom.avif',
                '/images/computer-lab/computer-lab.webp',
                '/images/auditorium/main-hall.webp',
                '/images/science-park/robotics.webp',
                '/images/sports/horses.webp'
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden min-h-[280px]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImages[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 drop-shadow-lg">{facility.icon}</div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-white drop-shadow-lg">{facility.title}</h3>
                    <p className="text-white text-[15px] leading-relaxed drop-shadow-md">{facility.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      <AboutCTA />
    </>
  );
}
