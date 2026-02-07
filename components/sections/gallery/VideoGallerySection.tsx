import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function VideoGallerySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-[#002B6B]">
            Video Gallery
          </h2>
          <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
            Coming soon: Watch our campus life, events, and student achievements come to life through our video collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: item * 0.1 }}
              className="group"
            >
              <Card className="p-8 text-center h-full bg-[#002B6B]/5 border border-[#002B6B]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-[#002B6B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🎥</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-[#002B6B]">
                  Educational Content {item}
                </h3>
                <p className="text-[#002B6B]/70 leading-relaxed">
                  Showcasing academic excellence, student achievements, and campus activities through engaging video content.
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
