import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Doon International School Jabalpur - News & Updates',
  description: 'Read the latest blog posts, news, events, and educational insights from Doon International School, Jabalpur. Stay informed about school activities and achievements.',
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
