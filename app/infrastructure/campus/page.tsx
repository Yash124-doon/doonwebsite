'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Map, Leaf, Shield, Sun } from 'lucide-react';

const sidebarItems = [
  { name: "Infrastructure Overview", href: "/infrastructure" },
  { name: "Campus & Surroundings", href: "/infrastructure/campus" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Science Park", href: "/infrastructure/science-park" },
  { name: "Science Labs", href: "/infrastructure/science-labs" },
  { name: "Smart Classrooms", href: "/infrastructure/smart-class" },
  { name: "Computer Lab", href: "/infrastructure/computer-lab" },
  { name: "Activity Rooms", href: "/infrastructure/activity-rooms" },
  { name: "Health Center", href: "/support-services/medical" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
];

export default function CampusSurroundingsPage() {
  return (
    <>
      <PageHero
        title="Campus & Surroundings"
        subtitle="A panoramic view of our lush, green, and modern educational sanctuary."
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Campus' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Infrastructure">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">An Eco-Friendly Sanctuary</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Spread across several acres of beautifully landscaped grounds, the DISJ campus 
                is a perfect blend of modern architecture and natural beauty. Our campus is 
                designed to minimize environmental impact while maximizing the quality of 
                student life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Lush Greenery",
                  description: "Thousands of trees and plants create a pollution-free micro-climate that enhances cognitive focus and well-being.",
                  icon: <Leaf className="w-8 h-8 text-primary" />
                },
                {
                  title: "Safe & Secure",
                  description: "Strategically designed layouts with clear signage and 24/7 security monitoring for student safety.",
                  icon: <Shield className="w-8 h-8 text-primary" />
                },
                {
                  title: "Sustainable Practices",
                  description: "Solar power integration, rainwater harvesting, and organic composting are part of our 'Green Campus' mission.",
                  icon: <Sun className="w-8 h-8 text-primary" />
                },
                {
                  title: "Panoramic Design",
                  description: "Architecture that allows for maximum natural light and ventilation, reducing energy consumption.",
                  icon: <Map className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?q=80&w=1170&auto=format&fit=crop" 
                alt="Aerial Campus View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-12">
                <div className="text-white">
                  <h4 className="text-3xl font-black mb-4 uppercase italic tracking-wider">The DISJ Vista</h4>
                  <p className="max-w-xl text-white/80 text-lg leading-relaxed">
                    A campus designed for more than just studying; it's a place where 
                    students create lifelong memories in a safe and inspiring environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
