import type { Metadata } from 'next';

/**
 * SEO Metadata for Admission Landing Page
 * Optimized for Google Ads Quality Score & Meta Ads Conversion
 * URL: /admission-landing-page
 */
export const metadata: Metadata = {
  title: 'Admissions Open 2025-26 | Doon International School Jabalpur | CBSE School',
  description:
    'Apply now for admission at Doon International School, Jabalpur. Best CBSE school in MP offering Nursery to Class 9 with modern facilities, experienced teachers, smart classrooms, day boarding & hostel. Limited seats available for 2025-26.',
  keywords: [
    'Doon International School Jabalpur admission',
    'best CBSE school Jabalpur',
    'school admission Jabalpur 2025',
    'CBSE school Madhya Pradesh',
    'best school in Jabalpur',
    'school admission open',
    'English medium school Jabalpur',
  ],
  openGraph: {
    title: 'Admissions Open 2025-26 | Doon International School Jabalpur',
    description:
      'Secure your child\'s future! Apply for admission at the best CBSE school in Jabalpur with world-class infrastructure and experienced faculty.',
    url: 'https://www.dooninternationaljabalpur.com/admission-landing-page',
    siteName: 'Doon International School, Jabalpur',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/heroimagenew.jpeg',
        width: 1200,
        height: 630,
        alt: 'Doon International School Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions Open 2025-26 | Doon International School Jabalpur',
    description:
      'Apply now for admission at the best CBSE school in Jabalpur. Limited seats available!',
    images: ['/assets/heroimagenew.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/admission-landing-page',
  },
};

export default function AdmissionLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
