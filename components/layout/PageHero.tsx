'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/assets/about-hero-bg.jpg', // Default fallback
  breadcrumbs = [] 
}) => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 43, 107, 0.7), rgba(0, 43, 107, 0.7)), url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Decorative Wave (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mb-6 text-sm md:text-base text-white/80 font-medium"
          >
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-accent">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
