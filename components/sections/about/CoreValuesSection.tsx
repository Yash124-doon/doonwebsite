import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-primary">Our Core Values</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">The fundamental principles that shape our educational philosophy</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🎯",
              title: "Excellence",
              desc: "Striving for the highest standards in academics, character, and service.",
              delay: 0
            },
            {
              icon: "🤝",
              title: "Integrity",
              desc: "Upholding honesty, transparency, and ethical behavior in all our actions.",
              delay: 0.1
            },
            {
              icon: "❤️",
              title: "Compassion",
              desc: "Fostering empathy, kindness, and respect for all members of our community.",
              delay: 0.2
            },
            {
              icon: "🚀",
              title: "Innovation",
              desc: "Embracing creativity, critical thinking, and adaptive learning approaches.",
              delay: 0.3
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: value.delay,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                transition: { duration: 0.15 }
              }}
            >
              <Card className="p-8 text-center h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <div className="text-4xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-primary text-[15px] leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
