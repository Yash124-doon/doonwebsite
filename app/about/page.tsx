'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import AboutCTA from '../../components/sections/about/AboutCTA';
import MissionVisionSection from '../../components/sections/about/MissionVisionSection';
import CoreValuesSection from '../../components/sections/about/CoreValuesSection';

const sidebarItems = [
  { name: "About Us", href: "/about" },
  { name: "Chairman's Message", href: "/about/chairmans-message" },
  { name: "Principal's Message", href: "/principal-vision" },
  { name: "Our Founder", href: "/about/founder" },
  { name: "Board of Directors", href: "/about/board-directors" },
  { name: "Mission And Vision", href: "/about/mission-vision" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Nurturing minds, building futures since 2004."
        backgroundImage="/assets/about-hero-bg.jpg"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="About DISJ">
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-black text-primary mb-6">Excellence in Education</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Doon International School is committed to providing world-class education 
                that prepares students for global success. We are recognized as one of the 
                leading institutions in Jabalpur, Madhya Pradesh.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our curriculum is designed to balance intellectual rigour with emotional 
                growth, nurturing children who are not just intelligent but kind, creative, 
                and self-aware.
              </p>
            </section>

            <MissionVisionSection />
            <CoreValuesSection />

            {/* Facilities Summary */}
            <section id="facilities">
              <h2 className="text-3xl font-black text-primary mb-8">School Facilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Smart Classrooms", icon: "📚", text: "Digitally enabled learning spaces." },
                  { title: "Library", icon: "📖", text: "Wealth of knowledge and quiet study area." },
                  { title: "Science Park", icon: "🔬", text: "Experiential learning through science." },
                  { title: "Sports Complex", icon: "⚽", text: "Modern infrastructure for physical growth." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-muted rounded-2xl">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-primary">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </SubPageLayout>
      </PageContainer>

      <AboutCTA />
    </>
  );
}
