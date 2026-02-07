import { motion } from 'framer-motion';
import Button from '../../ui/button';
import Link from 'next/link';

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-brand-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-4xl font-heading font-bold mb-6 text-white">
            Ready to Begin?
          </h3>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Our admissions team is here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 hover:text-brand-primary/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 hover:text-brand-primary/90 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
