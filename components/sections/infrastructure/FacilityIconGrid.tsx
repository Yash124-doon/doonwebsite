import Link from 'next/link';

interface FacilityNavItem {
  label: string;
  icon: string;
  anchor: string;
  color: string;
}

interface FacilityIconGridProps {
  items: FacilityNavItem[];
}

export default function FacilityIconGrid({ items }: FacilityIconGridProps) {
  return (
    <section className="py-16 px-4 bg-[#F9F6F0] text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Explore Our Facilities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`#${item.anchor}`}
            className="rounded-lg p-6 text-center shadow-sm"
            style={{ backgroundColor: item.color }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-semibold text-sm uppercase">{item.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
