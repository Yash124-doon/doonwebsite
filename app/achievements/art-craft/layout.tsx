import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art & Craft Achievements in Jabalpur School',
  description: 'Showcasing art and craft achievements in our Jabalpur school. Creative excellence, exhibitions, and student participation in competitions.',
  keywords: ['art and craft achievements in jabalpur school', 'creative excellence school', 'school art exhibitions jabalpur', 'student participation craft competitions'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/achievements/art-craft/',
  },
};

export default function ArtCraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
