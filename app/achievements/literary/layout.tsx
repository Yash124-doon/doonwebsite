import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Literary Achievements of School in Jabalpur',
  description: 'Discover literary achievements of our school in Jabalpur. Student excellence in debates, writing, quizzes, and language competitions.',
  keywords: ['literary achievements of school in jabalpur', 'student excellence debates', 'school writing competitions jabalpur', 'quizzes and language competitions'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/achievements/literary/',
  },
};

export default function LiteraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
