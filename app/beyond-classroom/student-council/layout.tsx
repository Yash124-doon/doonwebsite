import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Leadership Council in Jabalpur | Doon International',
  description: 'Learn how student council programs at Doon International School Jabalpur build leadership, responsibility and confidence.',
  keywords: ['student leadership council in jabalpur', 'student council programs school', 'build leadership responsibility confidence', 'doon school student council'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/student-council/',
  },
};

export default function StudentCouncilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
