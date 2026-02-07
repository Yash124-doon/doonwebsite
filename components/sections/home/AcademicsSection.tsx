import Image from 'next/image';

interface AcademicItem {
  title: string;
  summary: string;
  image?: string;
}

interface AcademicsSectionProps {
  academics: AcademicItem[];
}

export default function AcademicsSection({ academics }: AcademicsSectionProps) {
  // Limit to 6 items maximum
  const displayedAcademics = academics.slice(0, 6);

  return (
    <section className="py-24 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold mb-16">Academic Life at Doon</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedAcademics.map((academic, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6 group hover:shadow-lg transition-shadow duration-300">
            {academic.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={academic.image}
                  alt={academic.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{academic.title}</h3>
            <p className="text-base opacity-80 leading-relaxed">{academic.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
