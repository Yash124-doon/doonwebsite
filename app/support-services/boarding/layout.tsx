import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Day Boarding & Hostel School in Jabalpur',
  description: 'Looking for the best day boarding school with hostel facilities in Jabalpur, Madhya Pradesh? Explore top-quality education, care, and modern campus amenities.',
  keywords: ['best day boarding school in jabalpur', 'hostel facilities jabalpur', 'day boarding school', 'hostel school in jabalpur madhya pradesh', 'doon international school boarding'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/boarding/',
  },
};

export default function BoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
