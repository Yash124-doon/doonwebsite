import { motion } from 'framer-motion';
import Button from '../../ui/button';
import Link from 'next/link';

export default function UpdatesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002B6B] to-[#083B8C] text-center relative -mt-10 rounded-t-3xl shadow-xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-heading font-bold mb-4 text-white">
            Join Our Community
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Be part of the Doon International School family and experience excellence in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-[#F2B33D] text-[#002B6B] hover:bg-[#F2B33D]/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-[#002B6B] hover:bg-slate-100 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
