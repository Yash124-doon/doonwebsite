'use client';

import { usePathname } from 'next/navigation';
import Header from './header';
import UnifiedFooter from './UnifiedFooter';
import RegistrationSideStrip from '../ui/registration-side-strip';
import WhatsAppFloatButton from '../ui/whatsapp-float-button';
import CallFloatButton from '../ui/call-float-button';

/**
 * LayoutContent — Conditionally renders Header, Footer, and floating
 * elements based on the current route. Admin routes (/admin/*) get
 * a clean layout without the website chrome.
 */
export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  // Admin pages: render children only — no header, footer, or floating buttons
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // All other pages: normal website layout
  return (
    <>
      <RegistrationSideStrip />
      <Header />
      <main className="flex-grow min-h-[100dvh]">
        {children}
      </main>
      <UnifiedFooter />
      <WhatsAppFloatButton />
      <CallFloatButton />
    </>
  );
}
