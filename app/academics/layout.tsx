import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best CBSE School in Jabalpur | Academics at Doon International',
  description: 'Explore academic excellence at Doon International School Jabalpur with CBSE curriculum, innovative teaching and holistic student development.',
  keywords: ['best cbse school in jabalpur', 'academics doon international school', 'innovative teaching cbse curriculum', 'holistic student development'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/academics/',
  },
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
