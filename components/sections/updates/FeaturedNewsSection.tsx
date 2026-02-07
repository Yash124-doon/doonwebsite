import { motion } from 'framer-motion';
import Card from '../../ui/card';
import newsData from '../../../data/news.json';

export default function FeaturedNewsSection() {
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
          <h2 className="text-4xl font-heading font-bold mb-4 text-[#002B6B]">
            Featured Stories
          </h2>
          <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
            Celebrating achievements, milestones, and the vibrant life at our school
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsData.filter(news => news.featured).slice(0, 2).map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-48 bg-gradient-to-r from-[#002B6B] to-[#F2B33D] flex items-center justify-center">
                  <span className="text-4xl text-white">
                    {news.category === 'Sports' && '🏆'}
                    {news.category === 'Academic' && '📚'}
                    {news.category === 'Admissions' && '🎓'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-[#F2B33D]">{news.category}</span>
                    <span className="mx-2 text-[#002B6B]/30">•</span>
                    <span className="text-sm text-[#002B6B]/70">{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-[#002B6B] group-hover:text-[#F2B33D] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-[#002B6B]/70 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-[#002B6B]/60">
                    <span>By {news.author}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
