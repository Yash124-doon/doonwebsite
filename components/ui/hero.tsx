'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoPoster?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, imageAlt, videoSrc, videoPoster, children }) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
             style={{ marginTop: '0px', paddingTop: '0px' }}>
      {/* Background: Video or Image or Fallback */}
      {videoSrc ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Semi-transparent overlay for text contrast */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 43, 107, 0.4)' }} />
        </>
      ) : imageUrl ? (
        <>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role={imageAlt ? "img" : undefined}
            aria-label={imageAlt}
          />
          {/* Semi-transparent overlay for text contrast */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
        </>
      ) : (
        /* Solid Brand Background */
        <div className="absolute inset-0 bg-brand-primary opacity-90">
          <div className="absolute inset-0 bg-brand-secondary opacity-20 animate-pulse" />
        </div>
      )}



      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.03 }}
        >
          <h1 className="font-heading font-bold mb-6 text-white leading-tight text-center" style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.3),
              0 4px 8px rgba(0, 0, 0, 0.3),
              0 8px 16px rgba(0, 0, 0, 0.2)
            `,
            fontSize: 'clamp(2.5rem, 8vw, 5rem)' // Responsive font size from 40px to 80px
          }}>
            <span className="block" style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)' // From 32px to 56px - proportionally smaller
            }}>
              {title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block" style={{
              fontSize: 'clamp(3rem, 9vw, 6rem)' // From 48px to 96px - proportionally larger
            }}>
              {title.split(' ').slice(2).join(' ')}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="font-body text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {children}
          </motion.div>
        )}
      </div>


    </section>
  );
};

export default Hero;
