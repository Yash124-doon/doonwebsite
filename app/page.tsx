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
import OurAssociations from '../components/sections/home/OurAssociations';
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Doon International School, Jabalpur",
    "alternateName": "DISJ",
    "url": "https://www.dooninternationaljabalpur.com",
    "logo": "https://www.dooninternationaljabalpur.com/assets/doonlogo.png",
    "image": "https://www.dooninternationaljabalpur.com/assets/main-entrance.webp",
    "description": "Doon International School, Jabalpur is a premier co-educational CBSE affiliated day and residential school located in Jabalpur, Madhya Pradesh. Established in 2004 under the aegis of Doon International School, Dehradun, it offers holistic education from Pre-Primary to Class XII with world-class infrastructure, sports facilities, boarding house, and extracurricular programs.",
    "foundingDate": "2004",
    "telephone": "+91-9201591900",
    "email": "info@dooninternationaljabalpur.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagpur Road, Opposite Tata Motors, Manegaon",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482051",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.1815,
      "longitude": 79.9864
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "15:30"
      }
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "CBSE Affiliation",
      "credentialCategory": "Affiliation",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Central Board of Secondary Education",
        "alternateName": "CBSE",
        "url": "https://www.cbse.gov.in"
      },
      "identifier": "1031485"
    },
    "employee": {
      "@type": "Person",
      "name": "Dr. Rajiv Kumar Singh",
      "jobTitle": "Principal"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Smart Classrooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Boarding House / Hostel Facility", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sports Infrastructure", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Computer Labs", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Library", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Science Park & Laboratories", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Mess / Canteen Facility", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Transportation / Bus Facility", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Medical Facility", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Auditorium", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Robotics & STEM Lab", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Shooting Range (Gun for Glory / Gagan Narang)", "value": true }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1HHxdiv1Sp/",
      "https://www.instagram.com/doon_international_schooljbp",
      "https://www.linkedin.com/company/doon-international-school-jabalpur",
      "https://x.com/DoonIntlJbp"
    ]
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Doon International School, Jabalpur",
    "alternateName": "DISJ",
    "legalName": "Suman Devi Shikshan Sansthan",
    "url": "https://www.dooninternationaljabalpur.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.dooninternationaljabalpur.com/assets/doonlogo.png",
      "width": 300,
      "height": 100
    },
    "foundingDate": "2004",
    "description": "Doon International School, Jabalpur is a CBSE affiliated co-educational residential and day school providing world-class education under the aegis of Doon International School, Dehradun since 2004.",
    "telephone": "+91-9201591900",
    "email": "info@dooninternationaljabalpur.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagpur Road, Opposite Tata Motors, Manegaon",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482051",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9201591900",
        "contactType": "admissions",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
          ],
          "opens": "09:00",
          "closes": "15:30"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9201591893",
        "contactType": "customer support",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Doon International School, Dehradun",
      "foundingDate": "1993"
    },
    "sameAs": [
      "https://www.facebook.com/share/1HHxdiv1Sp/",
      "https://www.instagram.com/doon_international_schooljbp",
      "https://www.linkedin.com/company/doon-international-school-jabalpur",
      "https://x.com/DoonIntlJbp"
    ]
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Doon International School, Jabalpur",
    "alternateName": "Best International CBSE School in Jabalpur",
    "url": "https://www.dooninternationaljabalpur.com",
    "description": "Official website of Doon International School, Jabalpur — Best CBSE School in Jabalpur, Madhya Pradesh offering day and residential education with world-class infrastructure.",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Doon International School, Jabalpur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dooninternationaljabalpur.com/assets/doonlogo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.dooninternationaljabalpur.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Doon International School, Jabalpur",
    "alternateName": "DISJ",
    "description": "Best CBSE School in Jabalpur, Madhya Pradesh. A premier co-educational day and residential senior secondary school offering world-class education, boarding house, sports facilities, STEM labs, and holistic development programs since 2004.",
    "url": "https://www.dooninternationaljabalpur.com",
    "logo": "https://www.dooninternationaljabalpur.com/assets/doonlogo.png",
    "image": [
      "https://www.dooninternationaljabalpur.com/assets/main-entrance.webp",
      "https://www.dooninternationaljabalpur.com/assets/main-hall.webp",
      "https://www.dooninternationaljabalpur.com/assets/facilities/classroom.webp"
    ],
    "telephone": "+91-9201591900",
    "email": "info@dooninternationaljabalpur.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagpur Road, Opposite Tata Motors, Manegaon",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482051",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.1815,
      "longitude": 79.9864
    },
    "hasMap": "https://maps.google.com/?q=Doon+International+School+Jabalpur+Manegaon",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "15:30"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, Online Payment",
    "areaServed": [
      "Jabalpur",
      "Madhya Pradesh",
      "India"
    ],
    "keywords": "Best CBSE School Jabalpur, Top School Jabalpur, Boarding School Jabalpur, Residential School Jabalpur, CBSE School Madhya Pradesh, Doon International School",
    "sameAs": [
      "https://www.facebook.com/share/1HHxdiv1Sp/",
      "https://www.instagram.com/doon_international_schooljbp",
      "https://www.linkedin.com/company/doon-international-school-jabalpur",
      "https://x.com/DoonIntlJbp"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      {/* <PopupModal isOpen={showPopup} onClose={handleClosePopup} /> */}

      {/* Hero Section - Video Background */}
      {/* To switch back to image: replace videoSrc with imageUrl="/assets/heroimagenew.jpeg" imageAlt="Doon International School campus" */}
      <Hero
        title="Doon International School"
        subtitle={siteData.tagline}
        videoSrc="/assets/gallery/videos/DOON%20CHANGES.mp4"
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

      {/* //Our Associations Page Here */}
      <OurAssociations />

      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#002B6B] mb-6">A Culture of Excellence and Joy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At Doon International School, learning is not confined to classrooms. Our students participate in regular field visits, industry tours, and nature excursions that broaden their horizons.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            These experiences connect classroom knowledge with real-world applications, fostering curiosity and critical thinking while instilling teamwork, leadership, and respect for the environment.
          </p>
        </div>
      </section>

      <DiscoverDoon cards={discoverData.cards as any[]} />

      {/* Academic Life at Doon - Commented out */}
      {/* <AcademicsSection academics={homeData.academics} /> */}

      <TiltedCarousel />
    </>
  );
}
