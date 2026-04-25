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
 * Interface for Navigation Items defined in site.json
 */
interface NavigationItem {
  name: string;
  shortName?: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
  external?: boolean;
}

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
          <div className="w-full px-2 md:px-6 lg:px-8 py-0 md:py-0 lg:py-0 min-h-[5rem] md:min-h-[5rem] lg:min-h-[5.5rem] flex items-center justify-between relative gap-2 xl:gap-8">
            {/* LEFT SIDE: LOGO & SCHOOL NAME */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                <img
                  src="/assets/doonlogo.png"
                  alt="Doon International School Logo"
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px] object-contain"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                />
                <div className={`flex flex-col ${(pathname === '/' && !isScrolled) || isMobileMenuOpen ? 'text-white' : 'text-[#002B6B]'} leading-[1] font-poppins tracking-tight text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] transition-colors duration-300`}>
                  <span className="drop-shadow-sm" style={{ fontWeight: 900 }}>DOON</span>
                  <span className="drop-shadow-sm" style={{ fontWeight: 900 }}>INTERNATIONAL</span>
                  <span className="drop-shadow-sm" style={{ fontWeight: 900 }}>SCHOOL</span>
                  <span className="drop-shadow-sm" style={{ fontWeight: 900 }}>JABALPUR</span>
                </div>
              </Link>
            </div>

            {/* RIGHT SIDE: NAV - Hidden on mobile, tablet optimized */}
            <div className="hidden md:flex items-center gap-1 xl:gap-4 ml-auto">
              {(siteData.navigation as NavigationItem[]).map((item) => (
                <div key={item.name} className="relative group flex items-center flex-shrink-0">
                  {item.name === "ADMISSION ENQUIRY" ? (
                    <Link
                      href={item.href}
                      className="bg-[#F2B33D] text-[#002B6B] px-5 lg:px-7 py-2 lg:py-3 rounded-full font-black hover:bg-[#F2B33D]/90 transition-all duration-300 flex-shrink-0 whitespace-nowrap text-xs xl:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                    >
                      Admission Enquiry
                    </Link>
                  ) : item.name === "PARENT PORTAL" ? (
                    null // Parent portal commented out/removed
                  ) : (
                    <div className="relative group">
                      <Link
                        href={item.href}
                        className={`${(pathname === '/' && !isScrolled)
                          ? 'text-white hover:text-[#FFD700]'
                          : pathname.startsWith(item.href) && item.href !== '/'
                            ? 'text-[#002B6B]'
                            : 'text-black hover:text-[#002B6B]'
                          } transition-colors font-semibold flex items-center space-x-1 leading-tight text-[11px] lg:text-[13px] xl:text-base relative py-2`}
                      >
                        <span className="whitespace-nowrap">{item.shortName || item.name}</span>
                        {item.dropdown && <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 mt-0.5" />}

                        {/* Active Indicator Underline */}
                        {pathname.startsWith(item.href) && item.href !== '/' && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      {item.dropdown && (
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                          <div className="bg-white border border-gray-100 py-3 shadow-xl rounded-xl min-w-[220px] lg:min-w-[260px] overflow-hidden">
                            {item.dropdown.map((submenu, index) => (
                              <div key={submenu.name}>
                                <Link
                                  href={submenu.href}
                                  className={`block px-5 py-2.5 text-sm lg:text-base transition-colors ${pathname === submenu.href
                                    ? 'text-red-600 bg-red-50 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#002B6B]'
                                    }`}
                                >
                                  {submenu.name}
                                </Link>
                                {index < item.dropdown!.length - 1 && (
                                  <div className="border-b border-gray-50 mx-4 my-1"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
