import { motion } from 'framer-motion';
import Card from '../../ui/card';

const documents = [
  { icon: "📄", title: "Birth Certificate" },
  { icon: "📊", title: "Academic Records" },
  { icon: "📜", title: "Transfer Certificate" },
  { icon: "🖼️", title: "Photographs" },
  { icon: "🎫", title: "Identity Documents" },
];

export default function RequiredDocumentsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-black mb-4 text-primary">Required Documents</h2>
            <p className="text-xl text-primary">Please prepare these documents for your application</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  transition: { duration: 0.15 }
                }}
              >
                <Card className="p-6 bg-brand-primary text-white border-0 shadow-lg hover:shadow-xl hover:bg-brand-primary/90 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="text-2xl">{doc.icon}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold">{doc.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
