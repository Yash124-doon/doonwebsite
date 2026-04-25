'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const sidebarItems = [
  { name: "About Us", href: "/about" },
  { name: "Chairman's Message", href: "/about/chairmans-message" },
  { name: "Principal's Message", href: "/principal-vision" },
  { name: "Our Founder", href: "/about/founder" },
  { name: "Board of Directors", href: "/about/board-directors" },
  { name: "Mission And Vision", href: "/about/mission-vision" },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        title="Mission & Vision"
        subtitle="Our guiding principles for academic excellence and ethical growth."
        backgroundImage="/assets/about-hero-bg.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Mission & Vision' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="About DISJ">
          <div className="space-y-20">
            {/* Vision Section */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-tight">Our Vision</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    To nurture confident global leaders with compassion and innovation. We envision graduates 
                    who excel academically and uphold ethical values.
                  </p>
                  <div className="mt-6 space-y-4">
                    <p className="text-gray-600 text-lg">
                      Through comprehensive arts, sciences, and experiential learning, we develop 
                      well-rounded individuals. Our students become ambassadors of progress, 
                      honoring tradition while embracing the future.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1523050335102-c67440e1b12d?q=80&w=1170&auto=format&fit=crop" 
                      alt="Student looking into the future" 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Mission Section */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-tight">Our Mission</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    At Doon International School, we strive for academic excellence and holistic development. 
                    We provide world-class education that builds character, creativity, and leadership.
                  </p>
                  <div className="mt-6 space-y-4">
                    <p className="text-gray-600 text-lg">
                      Our inclusive programs blend rigorous academics with sports and arts. 
                      We prepare students to become ethical global citizens who contribute positively to society.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop" 
                      alt="Students collaborating" 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Motto Section */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-accent mb-8">Our Motto</h2>
                <p className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  "Self-realisation cannot be achieved by the weak-willed."
                </p>
                <div className="h-1 w-24 bg-accent mx-auto mb-8" />
                <p className="text-2xl md:text-4xl font-serif italic text-white/90">
                  नायमात्मा बलहीनेन लभ्यः
                </p>
              </div>
            </motion.section>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
