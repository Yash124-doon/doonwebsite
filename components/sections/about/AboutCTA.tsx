import { motion } from 'framer-motion';
import Button from '../../ui/button';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white -mt-10 relative z-10 rounded-t-3xl shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-heading font-bold mb-4 text-primary">
          Learn More About Our Community
        </h3>
        <p className="text-lg mb-8 text-primary max-w-2xl mx-auto">
          Discover what makes Doon International School special.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions">
            <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              Admissions
            </Button>
          </Link>
          <Link href="/about#facilities">
            <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              Our Facilities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
