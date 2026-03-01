import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Best CBSE International School in Jabalpur, Madhya Pradesh',
  description: 'Learn about Doon International School – Best CBSE & International co-educational school in Jabalpur, MP. Top residential & day boarding school with hostel, sports facilities & English medium education since 1993.',
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
