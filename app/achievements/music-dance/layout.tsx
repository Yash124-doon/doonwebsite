import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music & Dance Achievements in Jabalpur School',
  description: 'Explore music and dance achievements in our Jabalpur school. Student success in cultural events, competitions, and stage performances.',
  keywords: ['music and dance achievements in jabalpur school', 'student success cultural events', 'dance competitions school jabalpur', 'stage performances school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/achievements/music-dance/',
  },
};

export default function MusicDanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
