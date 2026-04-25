'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Library, BookOpen, Globe, Coffee } from 'lucide-react';

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

export default function LibraryPage() {
  return (
    <>
      <PageHero
        title="The Knowledge Hub"
        subtitle="A quiet sanctuary of wisdom, research, and lifelong learning."
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Library' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Expand Your Horizons</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The DISJ Library is a state-of-the-art facility that serves as the heart of 
                our academic community. With a collection of over 10,000 books, periodicals, 
                and digital resources, it provides students with the tools they need for 
                independent research and a love for reading.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Extensive Collection",
                  description: "Thousands of books ranging from academic curriculum to classic literature, biographies, and modern fiction.",
                  icon: <Library className="w-8 h-8 text-primary" />
                },
                {
                  title: "Digital Resources",
                  description: "Access to online journals, e-books, and educational databases through our dedicated digital kiosks.",
                  icon: <Globe className="w-8 h-8 text-primary" />
                },
                {
                  title: "Quiet Study Zones",
                  description: "Thoughtfully designed seating areas that provide a distraction-free environment for deep study and reflection.",
                  icon: <BookOpen className="w-8 h-8 text-primary" />
                },
                {
                  title: "Leisure Reading",
                  description: "Comfortable seating and a diverse magazine section to encourage reading for pleasure and relaxation.",
                  icon: <Coffee className="w-8 h-8 text-primary" />
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
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Librarian Guidance</h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                 Our professional librarians are always on hand to help students with 
                 research queries, book selections, and teaching information literacy skills. 
                 We also hold regular storytelling sessions and book fairs to keep the 
                 literary spirit alive.
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Library Scene" />
                  <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Library Stacks" />
                  <img src="https://images.unsplash.com/photo-1491845339678-2c49b2d894df?q=80&w=1170&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Reading Desk" />
                  <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1290&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Digital Kiosk" />
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
