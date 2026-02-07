import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function MissionVisionSection() {
  return (
<section id="vision" className="page-section py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl font-black mb-4 text-primary">Our Foundation</h2>
          <p className="font-body text-[15px] text-primary max-w-3xl mx-auto">The pillars that guide our educational excellence</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              y: -2,
              transition: { duration: 0.15 }
            }}
          >
            <Card className="p-10 h-full bg-brand-primary/5 text-primary border border-brand-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl text-white">🎯</span>
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-primary">
                Our mission is to provide holistic education that nurtures values, intellect, and skills. Through Ramcharitmanas and Bhagavad Gita classes, spiritual sessions, and International Relations/GK programs, we instill moral grounding and diplomatic thinking. With public speaking, foreign language learning, Vedic Maths, robotics, experiential learning, and exposure to national and international competitions, we prepare students for modern competency‑based education. Our unmatched boarding house, nutritionist‑curated meals, and exclusive sports facilities—including shooting, horse riding, athletics, and skating—ensure discipline, collaboration, and resilience. These areas together develop a well‑rounded personality that is focused, disciplined, emotionally strong, humble, and ready to crack competitions and face all challenges of life. We are committed to transparent communication, continuous assessment, and parent partnership, creating an environment where every child grows into a responsible, confident, and globally competitive citizen.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <Card className="p-10 h-full bg-brand-primary/10 text-primary border border-brand-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl text-white">🔮</span>
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-primary mb-4 italic">
                "Rooted in Values, Ready for the World"
              </p>
              <p className="text-lg leading-relaxed text-primary">
                To be the most trusted and transformative school in the region, blending cultural roots with global growth. We envision a future where every child from Doon International School is confident, disciplined, and future‑ready—equipped with socio‑emotional intelligence, academic excellence, and exposure to world‑class sports and fine arts, enabling them to thrive as leaders in society and on the global stage.
              </p>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
