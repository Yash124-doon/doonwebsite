import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board of Directors | Doon International School Jabalpur',
  description: 'Meet the Board of Directors of Doon International School Jabalpur guiding academic excellence, innovation and student success.',
  keywords: ['board of directors doon school jabalpur', 'school board members', 'guiding academic excellence', 'innovation and student success jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about/board-directors/',
  },
};

export default function BoardDirectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
