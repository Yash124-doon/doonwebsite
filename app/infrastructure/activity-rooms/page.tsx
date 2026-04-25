'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Music, Palette, Theater, Mic2 } from 'lucide-react';

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

export default function ActivityRoomsPage() {
  return (
    <>
      <PageHero
        title="Creative Studios & Activity Rooms"
        subtitle="Dedicated spaces for artistic expression, music, dance, and creative exploration."
        backgroundImage="https://images.unsplash.com/photo-1514525253361-b414683d7895?q=80&w=1035&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Activity Rooms' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Vibrant Creative Hubs</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                At DISJ, we believe that every child should have the space to find their creative 
                voice. Our activity rooms are thoughtfully designed separate studios for music, 
                dance, theatre, and visual arts, providing the specialized environment 
                needed for these disciplines to flourish.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Music Studio",
                  description: "A sound-treated space equipped with a wide range of vocal and instrumental tools, from synthesizers to traditional Indian instruments.",
                  icon: <Music className="w-8 h-8 text-primary" />
                },
                {
                  title: "Dance Studio",
                  description: "Spacious studio with wooden flooring and mirrored walls, perfect for practicing both Indian classical and contemporary dance forms.",
                  icon: <Theater className="w-8 h-8 text-primary" />
                },
                {
                  title: "Art & Craft Studio",
                  description: "An inspiring space filled with natural light, stocked with premium supplies for painting, sketching, and sculpture work.",
                  icon: <Palette className="w-8 h-8 text-primary" />
                },
                {
                  title: "Dramatics Room",
                  description: "A flexible space for theatre workshops and rehearsals, helping students build confidence and public speaking skills.",
                  icon: <Mic2 className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:bg-primary transition-all duration-500">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Joy of Expression</h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                 These spaces are more than just rooms; they are the heart of our cultural 
                 identity. Students from all grades spend their dedicated 'Activity Hours' 
                 here, guided by expert mentors who help them discover and polish their 
                 innate talents.
               </p>
               <div className="flex justify-center flex-wrap gap-4">
                  <div className="px-6 py-2 bg-white border border-gray-200 rounded-full font-bold text-primary">Acoustically Treated</div>
                  <div className="px-6 py-2 bg-white border border-gray-200 rounded-full font-bold text-primary">Mirrored Walls</div>
                  <div className="px-6 py-2 bg-white border border-gray-200 rounded-full font-bold text-primary">Pottery Section</div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
