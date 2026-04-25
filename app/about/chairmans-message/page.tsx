'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import siteData from '@/data/site.json';
import { motion } from 'framer-motion';

const sidebarItems = [
  { name: "About Us", href: "/about" },
  { name: "Chairman's Message", href: "/about/chairmans-message" },
  { name: "Principal's Message", href: "/principal-vision" },
  { name: "Our Founder", href: "/about/founder" },
  { name: "Board of Directors", href: "/about/board-directors" },
  { name: "Mission And Vision", href: "/about/mission-vision" },
];

export default function ChairmansMessagePage() {
  return (
    <>
      <PageHero
        title="Chairman's Message"
        subtitle="Guiding Doon International School towards a future of excellence and integrity."
        backgroundImage="/assets/about-hero-bg.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: "Chairman's Message" }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="About DISJ">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <img 
                  src="/assets/chairman.webp" 
                  alt="Chairman of Doon International School" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop";
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-primary">Mr. Ajay Verma</h3>
                  <p className="text-gray-500 font-medium">Chairman, Managing Committee</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <h2 className="text-3xl font-black text-primary mb-6">A Vision for Independent Thinking</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our founder, Lala Raghubir Singh, believed in an education that is not confined to textbooks, 
                  but one that enables children to think independently and act with conviction. 
                  Doon International School continues to uphold that vision.
                </p>
                
                <p>
                  Our teachers play a crucial role in making learning relevant, dynamic, and joyful, 
                  ensuring that students are equipped for an ever-changing world. 
                  We remain committed to providing an environment where innovation and tradition coexist harmoniously, 
                  fostering confident, ethical, and empathetic learners.
                </p>

                <p className="italic font-medium text-primary/80 border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-xl">
                  "At DISJ, we don't just teach students; we nurture leaders of tomorrow who are 
                  rooted in values and empowered by knowledge."
                </p>

                <p>
                  We invite you to be a part of this journey where every child is encouraged 
                  to discover their potential and contribute meaningfully to society.
                </p>
              </div>

              <div className="mt-10">
                <p className="font-heading font-bold text-primary text-xl">— Mr. Ajay Verma</p>
                <p className="text-gray-500">Chairman, Managing Committee</p>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
