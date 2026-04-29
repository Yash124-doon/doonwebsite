'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '../../ui/card';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

interface GroupedCategory {
  id: string;
  title: string;
  description: string;
  images: GalleryItem[];
}

// Map exact DB category names to display details
const categoryInfoMap: Record<string, { title: string; description: string }> = {
  'Classroom Excellence': {
    title: 'Classroom Excellence',
    description: 'Modern learning environments fostering academic growth',
  },
  'State-of-the-Art Facilities': {
    title: 'State-of-the-Art Facilities',
    description: 'Cutting-edge resources for holistic development',
  },
  'Extracurricular Activities': {
    title: 'Extracurricular Activities',
    description: 'Sports, arts, and adventure programs',
  },
  'Campus & Infrastructure': {
    title: 'Campus & Infrastructure',
    description: 'Beautiful campus facilities and modern infrastructure',
  },
  'Events & Celebrations': {
    title: 'Events & Celebrations',
    description: 'Vibrant cultural and academic events',
  },
  'Student Life': {
    title: 'Student Life',
    description: 'A glimpse into the daily life of our students',
  }
};

export default function GalleryCategories() {
  const [categories, setCategories] = useState<GroupedCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${API_URL}/api/gallery`);
        const data = await res.json();
        
        if (data.success && data.data) {
          // Group by category
          const grouped: Record<string, GalleryItem[]> = {};
          
          data.data.forEach((item: GalleryItem) => {
            if (!grouped[item.category]) {
              grouped[item.category] = [];
            }
            grouped[item.category].push(item);
          });

          // Convert to array format expected by the UI
          const formattedCategories: GroupedCategory[] = Object.keys(grouped).map(catName => ({
            id: catName.toLowerCase().replace(/\s+/g, '-'),
            title: categoryInfoMap[catName]?.title || catName,
            description: categoryInfoMap[catName]?.description || 'Explore our gallery',
            images: grouped[catName]
          }));

          setCategories(formattedCategories);
        }
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#002B6B]"></div>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="py-20 flex flex-col justify-center items-center min-h-[400px] text-center px-4">
        <h3 className="text-2xl font-bold text-[#002B6B] mb-2">Gallery is currently being updated</h3>
        <p className="text-gray-500">Please check back soon for new pictures of our campus and events.</p>
      </div>
    );
  }

  return (
    <>
      {categories.map((category, categoryIndex) => (
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
              {category.images.map((imgItem, index) => (
                <motion.div
                  key={imgItem.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer relative"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64">
                      <Image
                        src={imgItem.image_url.startsWith('http') ? imgItem.image_url : `${API_URL}${imgItem.image_url}`}
                        alt={imgItem.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{imgItem.title}</h4>
                      </div>
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
