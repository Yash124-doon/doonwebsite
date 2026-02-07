import { motion } from 'framer-motion';
import Button from '../../ui/button';

export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-heading font-bold mb-4 text-[#002B6B]">
            Stay Updated
          </h3>
          <p className="text-lg mb-8 text-[#002B6B]/80 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2B33D] focus:border-transparent"
              />
              <Button className="bg-[#002B6B] text-white hover:bg-[#002B6B]/90 px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-[#002B6B]/60 mt-3">
              We respect your privacy and will never share your email address.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
