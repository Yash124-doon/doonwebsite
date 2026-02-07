import { motion } from 'framer-motion';
import Card from '../../ui/card';
import eventsData from '../../../data/events.json';

export default function EventsSection() {
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
            Upcoming Events
          </h2>
          <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
            Mark your calendars for these exciting events and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.slice(0, 6).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <Card className={`p-6 text-center h-full bg-gradient-to-br ${
                event.featured
                  ? 'from-[#F2B33D]/10 to-[#002B6B]/10 border-[#F2B33D]/30'
                  : 'from-white to-slate-50 border-slate-200'
              } shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    event.category === 'Sports' && 'bg-red-100 text-red-600'
                  } ${
                    event.category === 'Academic' && 'bg-blue-100 text-blue-600'
                  } ${
                    event.category === 'Cultural' && 'bg-purple-100 text-purple-600'
                  } ${
                    event.category === 'Admissions' && 'bg-green-100 text-green-600'
                  }`}>
                    <span className="text-2xl">
                      {event.category === 'Sports' && '🏆'}
                      {event.category === 'Academic' && '📚'}
                      {event.category === 'Cultural' && '🎭'}
                      {event.category === 'Admissions' && '🎓'}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 text-[#002B6B]">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-[#002B6B]/70">
                    <span className="mr-2">📅</span>
                    <span>{new Date(event.date).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>

                  <div className="flex items-center justify-center text-sm text-[#002B6B]/70">
                    <span className="mr-2">⏰</span>
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center justify-center text-sm text-[#002B6B]/70">
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-[#002B6B]/70 leading-relaxed">
                  {event.description}
                </p>

                {event.featured && (
                  <div className="mt-4 pt-4 border-t border-[#F2B33D]/20">
                    <span className="inline-block bg-[#F2B33D] text-[#002B6B] text-xs font-medium px-3 py-1 rounded-full">
                      Featured Event
                    </span>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
