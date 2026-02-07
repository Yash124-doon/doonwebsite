import { motion } from 'framer-motion';
import Card from '../../ui/card';

const events = [
  {
    title: 'Annual Sports Day',
    desc: 'Celebrating athletic achievements and teamwork',
    icon: '🏆'
  },
  {
    title: 'Cultural Festival',
    desc: 'Showcasing diverse talents and traditions',
    icon: '🎭'
  },
  {
    title: 'Science Fair',
    desc: 'Innovative projects and scientific discoveries',
    icon: '🧪'
  }
];

export default function EventsGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-[#002B6B]">
            Events Gallery
          </h2>
          <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
            Relive the excitement of our school events, celebrations, and memorable moments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Card className="p-8 text-center h-full bg-gradient-to-br from-[#F2B33D]/10 to-[#002B6B]/10 text-[#002B6B] border border-[#002B6B]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#002B6B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">{event.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{event.title}</h3>
                <p className="leading-relaxed opacity-80">
                  {event.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
