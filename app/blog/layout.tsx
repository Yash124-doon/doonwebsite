import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School News & Updates in Jabalpur',
  description: 'Stay updated with school news and updates in Jabalpur. Latest announcements, achievements, and important student activities.',
  keywords: ['school news and updates in jabalpur', 'latest announcements school jabalpur', 'important student activities', 'doon school blog'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/blog/',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
