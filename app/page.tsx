/**
 * @fileoverview Main homepage component for Doon International School
 * @description Displays the primary landing page with hero section, features, news, and academic information
 * @author Doon International School Development Team
 */

'use client';

import Hero from '../components/ui/hero';
import Button from '../components/ui/button';
import Link from 'next/link';
import FeatureStripSection from '../components/blocks/feature-strip-section';
import NewsTickerSection from '../components/blocks/news-ticker-section';
import WelcomeSection from '../components/blocks/WelcomeSection';
import DiscoverDoon from '../components/blocks/discover-doon';
import AcademicsSection from '../components/sections/home/AcademicsSection';
import TiltedCarousel from '../components/blocks/TiltedCarousel';

import PopupModal from '../components/ui/popup-modal';
import RegisterNowSection from '../components/blocks/RegisterNowSection';
import siteData from '../data/site.json';
import homeData from '../data/doon/home.json';
import discoverData from '../data/doon/discover.json';
import { useState, useEffect } from 'react';

/**
 * Home page component that renders the main landing page for Doon International School
 *
 * Features displayed:
 * - Hero section with video background and call-to-action buttons
 * - Feature strip showcasing school highlights
 * - News ticker with latest updates
 * - Welcome section introducing the school
 * - Campus statistics and achievements
 * - Academic programs overview
 * - Interactive tilted carousel with additional content
 *
 * @returns {JSX.Element} The complete homepage layout
 */

export default function Home(): JSX.Element {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   // Show popup on every homepage load with slight delay to prevent flash
  //   const timer = setTimeout(() => setShowPopup(true), 200);
  //   return () => clearTimeout(timer);
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      {/* <PopupModal isOpen={showPopup} onClose={handleClosePopup} /> */}

      {/* Hero Section - Video Background */}
      {/* To switch back to image: replace videoSrc with imageUrl="/assets/heroimagenew.jpeg" imageAlt="Doon International School campus" */}
      <Hero
        title="Doon International School"
        subtitle={siteData.tagline}
        videoSrc="https://crm-generalize.dentalguru.software/Assets/DOON%20CHANGES.mp4"
      >
        <Link href="/about">
          <Button size="lg" className="btn-mobile bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
        <Link href="/admissions">
          <Button size="lg" className="btn-mobile bg-accent text-primary hover:bg-[#E0A72F] shadow-lg hover:shadow-xl w-full sm:w-auto">
            Enroll Now
          </Button>
        </Link>
      </Hero>

      {/* Feature Strip */}
      <FeatureStripSection />

      {/* Latest News Ticker */}
      <NewsTickerSection />

      <WelcomeSection />

      <RegisterNowSection />

      <DiscoverDoon cards={discoverData.cards as any[]} />

      {/* Academic Life at Doon - Commented out */}
      {/* <AcademicsSection academics={homeData.academics} /> */}

      <TiltedCarousel />
    </>
  );
}
