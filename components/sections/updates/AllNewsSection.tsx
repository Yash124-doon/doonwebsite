import { motion } from 'framer-motion';
import Card from '../../ui/card';
import newsData from '../../../data/news.json';

export default function AllNewsSection() {
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
          <h2 className="text-4xl font-heading font-bold mb-4 text-[#002B6B]">
            All Updates
          </h2>
          <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
            Complete news archive and announcements from the school community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-40 bg-gradient-to-r from-[#F2B33D]/20 to-[#002B6B]/20 flex items-center justify-center">
                  <span className="text-3xl">
                    {news.category === 'Sports' && '🏆'}
                    {news.category === 'Academic' && '📚'}
                    {news.category === 'Admissions' && '🎓'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-[#F2B33D] bg-[#F2B33D]/10 px-2 py-1 rounded-full">{news.category}</span>
                    <span className="ml-auto text-xs text-[#002B6B]/60">{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3 text-[#002B6B] leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-sm text-[#002B6B]/70 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#002B6B]/60">By {news.author}</span>
                    <span className="text-xs text-[#F2B33D] font-medium">Read More →</span>
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
