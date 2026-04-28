import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder of Doon International School Jabalpur | Our Vision',
  description: 'Learn about the founder of Doon International School Jabalpur and the vision shaping quality education and student development.',
  keywords: ['founder of doon international school jabalpur', 'doon school founder vision', 'shaping quality education jabalpur', 'student development founder'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about/founder/',
  },
};

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
