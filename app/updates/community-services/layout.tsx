import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Community Service Activities in Jabalpur',
  description: 'Explore community service activities in Jabalpur school. Social initiatives, outreach programs, and student involvement in real-world impact.',
  keywords: ['school community service activities in jabalpur', 'social initiatives school', 'outreach programs school', 'student involvement real-world impact'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/community-services/',
  },
};

export default function CommunityServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
