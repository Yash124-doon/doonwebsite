import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top School in Jabalpur, Madhya Pradesh',
  description: 'Looking for the top school in Jabalpur, Madhya Pradesh? Discover the best co-educational school offering quality academics, modern facilities, and holistic development.',
  keywords: ['top school in jabalpur madhya pradesh', 'best co-educational school', 'quality academics jabalpur', 'modern facilities school', 'holistic development school jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about/',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
