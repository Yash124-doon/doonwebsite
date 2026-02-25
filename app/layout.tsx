/**
 * @fileoverview Root layout component for Doon International School website
 * @description Defines the global layout structure, metadata, and styling for all pages
 * @author Doon International School Development Team
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '../components/layout/header';
import UnifiedFooter from '../components/layout/UnifiedFooter';
import RegistrationSideStrip from '../components/ui/registration-side-strip';
import siteData from '../data/site.json';

// Configure Inter font with multiple weights for consistent typography
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

/**
 * Metadata configuration for the entire application
 * Dynamically uses site data for SEO optimization
 */
export const metadata: Metadata = {
  title: siteData.siteName,
  description: siteData.tagline,
};

/**
 * Root Layout Component
 *
 * Provides the global structure for all pages in the application:
 * - HTML document setup with proper language attribute
 * - Global font configuration (Inter)
 * - Navigation header (sticky/fixed positioning)
 * - Main content area with flex-grow for proper layout
 * - Unified footer with contact and navigation links
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to be rendered
 * @returns {JSX.Element} The root HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17786194195"
          strategy="afterInteractive"
        />
        <Script id="google-gtag-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17786194195');
          `}
        </Script> */}
        {/* New Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FY0R85Q5RJ"
          strategy="afterInteractive"
        />
        <Script id="google-gtag-ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FY0R85Q5RJ');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <RegistrationSideStrip />
        <Header />
        <main className="flex-grow min-h-[100dvh]">
          {children}
        </main>
        <UnifiedFooter />
      </body>
    </html>
  );
}
