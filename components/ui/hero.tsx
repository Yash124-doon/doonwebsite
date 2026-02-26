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
            <source src={videoSrc} type="video/mp4" />
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


        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 style={{ margin: 0, padding: 0, lineHeight: 1.1, textAlign: 'center' }}>
            {/* "Doon International" - Elegant Serif */}
            <span style={{
              display: 'block',
              fontFamily: "var(--font-playfair), 'Georgia', serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 5.5vw, 4rem)',
              color: 'rgba(255,255,255,0.95)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
              marginBottom: '0.1em',
            }}>
              Doon International
            </span>

            {/* "SCHOOL" - Clean Bold White */}
            <span style={{
              display: 'block',
              fontFamily: "var(--font-poppins), 'Arial Black', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              color: 'rgba(255, 255, 255, 0.97)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: 1,
              textShadow: '0 2px 16px rgba(0,0,0,0.35)',
            }}>
              SCHOOL
            </span>
          </h1>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '16px auto',
          }}
        >
          <div style={{ height: '2px', width: '60px', background: 'linear-gradient(to right, transparent, #FFD700)' }} />
          <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
          <span style={{ color: '#FFA500', fontSize: '0.8rem' }}>✦</span>
          <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
          <div style={{ height: '2px', width: '60px', background: 'linear-gradient(to left, transparent, #FFD700)' }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
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
