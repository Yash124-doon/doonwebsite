import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Counselling for Students in Jabalpur | Doon International',
  description: 'Explore career counselling and future guidance programs at Doon International School Jabalpur to help students make informed choices.',
  keywords: ['career counselling for students in jabalpur', 'future guidance programs school', 'make informed choices students', 'career counselling doon school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/career-counselling/',
  },
};

export default function CareerCounsellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
