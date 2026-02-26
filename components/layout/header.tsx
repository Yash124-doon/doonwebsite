/**
 * @fileoverview Main navigation header component for Doon International School
 * @description Responsive navigation header with dynamic styling, mobile menu, and scroll effects
 * @author Doon International School Development Team
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useScroll, useTransform, motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import ModernMobileMenu from '../ui/modern-mobile-menu';
import ModernHamburgerButton from '../ui/modern-hamburger-button';
import siteData from '../../data/site.json';
import { ChevronDown, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

/**
 * Main Header Component
 *
 * Features:
 * - Dynamic styling based on scroll position and current page
 * - Responsive design with mobile-first approach
 * - Dropdown navigation menus for complex sections
 * - Mobile hamburger menu with slide-out navigation
 * - Logo and school name display
 * - Enquiry and Parent Portal buttons with distinct styling
 * - Smooth transitions and hover effects
 *
 * Scroll Behavior:
 * - Transparent on homepage hero section
 * - Solid background after scrolling past hero (desktop)
 * - Immediate solid background on mobile
 * - Backdrop blur effect on larger screens
 *
 * @returns {JSX.Element} The responsive navigation header
 */
const Header: React.FC = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Helper function to reliably detect mobile devices (only call after mount)
  const isMobileDevice = () => {
    // Guard against server-side rendering
    if (typeof window === 'undefined') {
      return false;
    }

    // Check for touch capability (more reliable than width)
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check user agent for known mobile browsers
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileUserAgents = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUA = mobileUserAgents.test(userAgent);

    // Check screen size with multiple indicators
    const isSmallScreen = window.innerWidth < 1024;

    // Additional mobile detection for edge cases
    const isPortrait = window.innerHeight > window.innerWidth;
    const smallHeight = window.innerHeight < 900;

    // Use combination of factors for reliable detection
    return (hasTouch && isMobileUA) || isSmallScreen || (hasTouch && smallHeight);
  };

  // Determine if we need forced white background CSS on mobile (only call client-side)
  const shouldForceWhiteBackground = () => {
    // Only apply forced styling on client-side to prevent prerendering issues
    if (typeof window === 'undefined') {
      return false;
    }
    const isMobile = isMobileDevice();
    const shouldForce = isMobile && (pathname !== '/' || isScrolled);
    return shouldForce;
  };

  const shouldForceScrolled = () => {
    // Only apply forced styling on client-side to prevent prerendering issues
    if (typeof window === 'undefined') {
      return false;
    }
    return isMobileDevice() && isScrolled;
  };

  useEffect(() => {
    let scrollTicking = false;
    let resizeTicking = false;

    const handleScroll = () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const heroHeight = window.innerHeight; // Hero is full screen
          const mobile = isMobileDevice(); // Use improved mobile detection
          const scrollThreshold = mobile ? 100 : 0; // Small threshold on mobile, immediate on desktop
          const shouldBeScrolled = window.scrollY > scrollThreshold;

          // Force update for mobile devices to ensure immediate background change
          setIsScrolled(shouldBeScrolled);

          // Debug logging for mobile troubleshooting (remove in production)
          if (mobile && window.location.search.includes('debug-header')) {
            console.log(`Mobile Header Debug: ScrollY=${window.scrollY}, Threshold=${scrollThreshold}, IsScrolled=${shouldBeScrolled}, Width=${window.innerWidth}, Height=${window.innerHeight}`);
          }

          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    const handleResize = () => {
      if (!resizeTicking) {
        window.requestAnimationFrame(() => {
          const mobile = isMobileDevice(); // Use improved mobile detection
          setIsMobile(prev => prev !== mobile ? mobile : prev);

          // Force immediate background update on resize if mobile changed
          if (isMobileDevice() !== isMobile) {
            handleScroll();
          }

          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };

    // Use passive listeners for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize(); // initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const socialIconMap: { [key: string]: any } = {
    Facebook,
    Twitter,
    Instagram,
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <div className={`${shouldForceWhiteBackground() ? 'mobile-header-forced-white' : ''} ${shouldForceScrolled() ? 'mobile-header-forced-scrolled' : ''}`}>
        <header className={`${pathname === '/' ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ios-safari-header-neutralize ${isScrolled
          ? `shadow-lg border-b bg-white border-gray-300 lg:bg-white/90 lg:backdrop-blur-md`
          : pathname === '/'
            ? `bg-transparent shadow-none`
            : `shadow-lg border-b bg-white border-gray-300`
          }`}>
          <div className="container px-0.5 pr-2 py-1 md:px-4 md:py-1.5 lg:py-2 min-h-[3.5rem] md:min-h-[3.5rem] lg:min-h-[4rem] grid grid-cols-[auto_1fr_auto] items-center relative gap-4 lg:gap-8">
            {/* LEFT SIDE: LOGO */}
            <div className="flex items-center flex-shrink-0">
              <img
                src="/assets/doonlogo.png"
                alt="Doon International School Logo"
                className="w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 object-contain"
              />
            </div>

            {/* CENTER: SCHOOL NAME - On mobile in smaller font */}
            <div className="flex justify-center items-center col-start-2">
              <Link
                href="/"
                className={`block md:hidden xl:block ${(pathname === '/' && !isScrolled) || isMobileMenuOpen ? 'text-white' : 'text-black'} ${pathname === '/' && !isScrolled && !isMobileMenuOpen ? 'md:opacity-100 opacity-0' : 'opacity-100'} font-heading font-bold text-xs sm:text-sm xl:text-base hover:text-[#FFD700] transition-all duration-300`}
              >
                DOON INTERNATIONAL SCHOOL, JABALPUR
              </Link>
            </div>

            {/* RIGHT SIDE: NAV - Hidden on mobile, tablet optimized */}
            <div className="hidden md:flex items-center justify-end gap-2 md:gap-2 lg:gap-4 col-start-3">
              {siteData.navigation.map((item) => (
                <div key={item.name} className="relative group flex items-center flex-shrink-0">
                  {item.name === "ENQUIRY" ? (
                    <Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="bg-[#F2B33D] text-[#002B6B] px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2 rounded-full font-medium hover:bg-[#F2B33D]/90 transition-colors flex-shrink-0 whitespace-nowrap text-sm lg:text-base">
                      Enquiry
                    </Link>
                  ) : item.name === "PARENT PORTAL" ? (
                    <Link href={item.href} className="bg-[#002B6B] text-white px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2 rounded-full font-medium hover:bg-[#002B6B]/90 transition-colors flex-shrink-0 whitespace-nowrap text-sm lg:text-base">
                      Parent Portal
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className={`${pathname === '/' && !isScrolled ? 'text-white' : 'text-black'} hover:text-[#FFD700] transition-colors font-medium flex items-center space-x-1 leading-tight text-sm lg:text-base`}
                      >
                        <span className="whitespace-nowrap">{item.shortName || item.name}</span>
                        {item.dropdown && <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 mt-0.5" />}
                      </Link>
                      {item.dropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white/70 backdrop-blur-md border border-gray-300 py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] lg:min-w-[200px] z-50">
                          {item.dropdown.map((submenu, index) => (
                            <div key={submenu.name}>
                              <Link
                                href={submenu.href}
                                className="block px-3 lg:px-4 py-2 text-black hover:bg-gray-100 hover:text-[#FFD700] transition-colors text-sm lg:text-base"
                              >
                                {submenu.name}
                              </Link>
                              {index < item.dropdown.length - 1 && <div className="border-b border-gray-300 mx-2"></div>}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0 ml-auto">
              <ModernHamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            {/* Modern Mobile Menu */}
            <ModernMobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
