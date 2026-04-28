import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Happenings & Activities in Jabalpur',
  description: 'Explore school happenings in Jabalpur including events, awards, results, sports day, annual functions, and student activities shaping all-round development.',
  keywords: ['school happenings in jabalpur', 'school events jabalpur', 'school activities jabalpur', 'student activities shaping all-round development', 'doon international school happenings'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/',
  },
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
