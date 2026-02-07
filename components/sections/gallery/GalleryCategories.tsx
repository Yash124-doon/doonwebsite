import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '../../ui/card';

const galleryCategories = [
  {
    id: 'classroom',
    title: 'Classroom Excellence',
    description: 'Modern learning environments fostering academic growth',
    images: [
      '/assets/facilities/classroom.avif',
      '/assets/gallery/gallery1.avif',
      '/assets/gallery/gallery2.avif',
      '/assets/gallery/gallery3.avif',
      '/assets/gallery/gallery4.avif',
      '/assets/gallery/gallery5.avif'
    ]
  },
  {
    id: 'facilities',
    title: 'State-of-the-Art Facilities',
    description: 'Cutting-edge resources for holistic development',
    images: [
      '/assets/facilities/computer-lab.avif',
      '/assets/facilities/robotics.avif',
      '/assets/gallery/gallery6.avif',
      '/assets/main-hall.avif',
      '/assets/facilities/transport.avif'
    ]
  },
  {
    id: 'activities',
    title: 'Extracurricular Activities',
    description: 'Sports, arts, and adventure programs',
    images: [
      '/assets/facilities/horses.avif',
      '/assets/facilities/arts.avif'
    ]
  }
  /*
  {
    id: 'campus',
    title: 'Campus & Infrastructure',
    description: 'Beautiful campus facilities and modern infrastructure',
    images: [
      '/assets/main-entrance.avif'
    ]
  }
  */
];

export default function GalleryCategories() {
  return (
    <>
      {galleryCategories.map((category, categoryIndex) => (
        <section key={category.id} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-[#002B6B]">
                {category.title}
              </h2>
              <p className="text-lg text-[#002B6B]/80 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64">
                      <Image
                        src={image}
                        alt={`${category.title} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
