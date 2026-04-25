'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';

const sidebarItems = [
  { name: "About Us", href: "/about" },
  { name: "Chairman's Message", href: "/about/chairmans-message" },
  { name: "Principal's Message", href: "/principal-vision" },
  { name: "Our Founder", href: "/about/founder" },
  { name: "Board of Directors", href: "/about/board-directors" },
  { name: "Mission And Vision", href: "/about/mission-vision" },
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        title="Our Founder"
        subtitle="Honoring the vision and legacy of Lala Raghubir Singh."
        backgroundImage="/assets/about-hero-bg.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Our Founder' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="About DISJ">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25" />
                <img 
                  src="/assets/founder.webp" 
                  alt="Lala Raghubir Singh - Founder" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop";
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-primary">Lala Raghubir Singh</h3>
                  <p className="text-gray-500 font-medium">Founder & Visionary</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <h2 className="text-3xl font-black text-primary mb-6">A Legacy of Educational Excellence</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Lala Raghubir Singh, the visionary behind Modern School Society, believed that 
                  education should be a transformative journey. He envisioned an institution where 
                  traditional Indian values would blend seamlessly with a progressive global outlook.
                </p>
                
                <p>
                  He steadfastly upheld the ideals of integrity, creativity, and curiosity. 
                  His vision was to create a learning environment where children could develop 
                  a lifelong love for learning and a deep sense of responsibility toward their nation.
                </p>

                <div className="bg-muted p-8 rounded-2xl border-l-8 border-primary my-8">
                  <p className="text-primary font-bold text-xl italic mb-4">
                    "Self-realisation cannot be achieved by the weak-willed."
                  </p>
                  <p className="text-primary/70 font-medium">— Lala Raghubir Singh's Life Motto</p>
                </div>

                <p>
                  Today, Doon International School, Jabalpur, continues to carry forward this 
                  rich legacy. Every branch managed by the Modern School Society represents 
                  this unified vision of holistic education, evolving to meet the needs 
                  of the 21st century while staying true to its roots.
                </p>

                <p>
                  The school crest, which he inspired, signifies the circle of eternity crossed 
                  by the three elements in human development—body, mind, and spirit—with the 
                  sun shining between the triangle and the circle.
                </p>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
