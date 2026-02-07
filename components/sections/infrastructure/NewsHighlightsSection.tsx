import Link from 'next/link';

interface NewsItem {
  title: string;
  date: string; // ISO format preferred
  summary?: string;
  href?: string;
}

interface NewsHighlightsSectionProps {
  updates: NewsItem[];
}

export default function NewsHighlightsSection({ updates }: NewsHighlightsSectionProps) {
  // Limit to 3 updates
  const displayedUpdates = updates.slice(0, 3);

  return (
    <section className="py-24 px-4 bg-gray-50 text-black">
      <h2 className="text-3xl font-bold mb-16">News Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedUpdates.map((update, index) => (
          <div key={index} className="p-6 rounded-lg shadow-sm bg-white border">
            <h3 className="text-xl font-semibold mb-2">
              {update.href ? (
                <Link href={update.href} className="hover:text-blue-600 transition-colors">
                  {update.title}
                </Link>
              ) : (
                update.title
              )}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{update.date}</p>
            {update.summary && (
              <p className="text-base opacity-80">{update.summary}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
