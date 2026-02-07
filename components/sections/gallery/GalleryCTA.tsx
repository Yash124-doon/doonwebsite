import Button from '../../ui/button';
import Link from 'next/link';

export default function GalleryCTA() {
  return (
    <section className="py-20 bg-white -mt-10 relative z-10 rounded-t-3xl shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-heading font-bold mb-4 text-[#002B6B]">
          Explore More About Our School
        </h3>
        <p className="text-lg mb-8 text-[#002B6B]/80 max-w-2xl mx-auto">
          Discover our commitment to academic excellence and holistic development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <Button size="lg" className="bg-[#002B6B] text-white hover:bg-[#002B6B]/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              About Us
            </Button>
          </Link>
          <Link href="/about#facilities">
            <Button size="lg" className="bg-[#F2B33D] text-[#002B6B] hover:bg-[#F2B33D]/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              Facilities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
