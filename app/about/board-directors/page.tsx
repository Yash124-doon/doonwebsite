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

const directors = [
  {
    name: "Mrs. Mira Pradeep Singh",
    role: "President, Board of Trustees",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    bio: "Mrs. Mira Pradeep Singh provides strategic leadership and ensures the school's commitment to the visionary ideals of the Modern School Society."
  },
  {
    name: "Mr. Ajay Verma",
    role: "Chairman, Managing Committee",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    bio: "Mr. Ajay Verma focuses on educational innovation and excellence, bridging tradition with modern learning methodologies."
  },
  {
    name: "Dr. S.K. Sharma",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
    bio: "Dr. Sharma oversees the curriculum development and academic standards, ensuring DISJ remains at the forefront of quality education."
  },
  {
    name: "Ms. Anjali Gupta",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    bio: "Ms. Gupta manages the school's infrastructure and support services, ensuring a safe and enriching environment for all students."
  }
];

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageHero
        title="Board of Directors"
        subtitle="The dedicated leadership team steering DISJ towards excellence."
        backgroundImage="/assets/about-hero-bg.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Board of Directors' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="About DISJ">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-primary mb-6">Guiding Our Vision</h2>
            <p className="text-lg text-gray-600 mb-10">
              The Board of Directors at Doon International School, Jabalpur, is comprised of 
              distinguished individuals from various fields who share a common passion for 
              education and a commitment to nurturing the next generation of global leaders.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {directors.map((director, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-1">{director.name}</h3>
                    <p className="text-accent font-bold text-sm uppercase tracking-wider mb-4">{director.role}</p>
                    <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3">
                      {director.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
