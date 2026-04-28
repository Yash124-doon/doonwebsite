import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Principal’s Message | Doon International School Jabalpur',
  description: 'Read the Principal’s message at Doon International School Jabalpur on academics, student growth and educational excellence.',
  keywords: ['principal message doon school jabalpur', 'school principal vision', 'academics and educational excellence jabalpur', 'student growth school principal'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/principal-vision/',
  },
};

export default function PrincipalVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
