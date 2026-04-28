import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CBSE Curriculum School in Jabalpur | Doon International School',
  description: 'Discover the CBSE curriculum framework at Doon International School Jabalpur designed for academic excellence and future readiness.',
  keywords: ['cbse curriculum school in jabalpur', 'cbse curriculum framework', 'academic excellence future readiness', 'doon international school curriculum'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/academics/curriculum/',
  },
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
