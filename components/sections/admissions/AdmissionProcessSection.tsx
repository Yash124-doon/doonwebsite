import { motion } from 'framer-motion';
import Card from '../../ui/card';

const steps = [
  {
    step: "01",
    title: "Inquiry",
    desc: "Submit an online inquiry form or contact our admissions office",
    image: "/assets/facilities/classroom.webp",
    icon: "📇"
  },
  {
    step: "02",
    title: "Campus Visit",
    desc: "Schedule a visit to experience our facilities and meet our staff",
    image: "/assets/main-entrance.webp",
    icon: "🏠"
  },
  {
    step: "03",
    title: "Application",
    desc: "Complete and submit the application form with required documents",
    image: "/assets/home_visual_highlights/visual-highlight-2.jpg",
    icon: "📝"
  },
  {
    step: "04",
    title: "Assessment",
    desc: "Students undergo assessment or interview based on grade level",
    image: "/assets/home_visual_highlights/visual-highlight-1.jpg",
    icon: "🎤"
  },
  {
    step: "05",
    title: "Admission Offer",
    desc: "Successful applicants receive an admission offer",
    image: "/assets/gallery/gallery2.webp",
    icon: "🎉"
  },
  {
    step: "06",
    title: "Enrollment",
    desc: "Complete enrollment formalities and secure your child's place",
    image: "/assets/gallery/gallery3.webp",
    icon: "🎓"
  }
];

export default function AdmissionProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-black mb-4 text-primary">Admission Process</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">Your journey to excellence in 6 simple steps</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -2,
                transition: { duration: 0.15 }
              }}
            >
              <Card className="p-8 h-full text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-3xl font-heading font-black opacity-60">{step.step}</div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white drop-shadow-lg">{step.title}</h3>
                  <p className="leading-relaxed opacity-90">{step.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
