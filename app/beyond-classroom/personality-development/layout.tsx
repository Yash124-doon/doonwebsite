import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personality Development Program in Jabalpur | Doon International',
  description: 'Build confidence, leadership and communication skills through personality development programs at Doon International School Jabalpur.',
  keywords: ['personality development program in jabalpur', 'build confidence leadership school', 'communication skills doon school', 'personality development jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/personality-development/',
  },
};

export default function PersonalityDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
