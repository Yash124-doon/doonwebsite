/**
 * @fileoverview Root layout component for Doon International School website
 * @description Defines the global layout structure, metadata, and styling for all pages
 * @author Doon International School Development Team
 */

import type { Metadata } from 'next';
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import LayoutContent from '@/components/layout/LayoutContent';
import NextTopLoader from 'nextjs-toploader';

// Configure Inter font with multiple weights for consistent typography
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

// Playfair Display - elegant serif for hero title
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  variable: '--font-playfair',
});

// Poppins - modern sans-serif for bold heading
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-poppins',
});

/**
 * Metadata configuration for the entire application
 * Dynamically uses site data for SEO optimization
 */
export const metadata: Metadata = {
  title: 'Best International CBSE School in Jabalpur | Doon International School',
  description: 'Doon International School is a leading international CBSE school in Jabalpur, Madhya Pradesh offering quality education, modern facilities, sports and admissions open.',
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com',
  },
  icons: {
    icon: 'favicon/favicon.ico',
    shortcut: 'favicon/favicon.ico',
    apple: 'favicon/favicon.ico',
  },
  verification: {
    google: 'G9ld7IDs81MlXRGWdP6d8YQ_dAg7rOZcltt_vWaBIzI',
  },
};

/**
 * Root Layout Component
 *
 * Provides the global structure for all pages in the application:
 * - HTML document setup with proper language attribute
 * - Global font configuration (Inter)
 * - Navigation header (sticky/fixed positioning) — hidden on /admin routes
 * - Main content area with flex-grow for proper layout
 * - Unified footer with contact and navigation links — hidden on /admin routes
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV8JC6KH');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} ${playfair.variable} ${poppins.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV8JC6KH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextTopLoader
          color="#FFD700"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FFD700,0 0 5px #FFD700"
        />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
