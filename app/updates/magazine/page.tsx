'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { BookOpen, Download, Eye, Layers } from 'lucide-react';

const sidebarItems = [
  { name: "Latest Updates", href: "/updates" },
  { name: "Awards & Recognitions", href: "/updates/awards" },
  { name: "Academic Results", href: "/updates/results" },
  { name: "Annual Function", href: "/updates/annual-function" },
  { name: "Sports Day", href: "/updates/sports-day" },
  { name: "Annual Award Ceremony", href: "/updates/annual-award" },
  { name: "Investiture Ceremony", href: "/updates/investiture" },
  { name: "National Festivals", href: "/updates/national-festivals" },
  { name: "Special Assemblies", href: "/updates/special-assemblies" },
  { name: "Community Services", href: "/updates/community-services" },
  { name: "Annual Report", href: "/updates/annual-report" },
  { name: "News & Media", href: "/updates/news" },
  { name: "School Magazine", href: "/updates/magazine" },
  { name: "Recent Events", href: "/updates/events" },
];

const issues = [
  {
    title: "The Doonite - Annual Edition 2023",
    theme: "Resilience & Growth",
    pages: "124 Pages",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop"
  },
  {
    title: "The Doonite - Vol 2 2022",
    theme: "Digital Frontiers",
    pages: "98 Pages",
    image: "https://images.unsplash.com/photo-1543004218-ee141d0ef1bc?q=80&w=687&auto=format&fit=crop"
  },
  {
    title: "The Doonite - Vol 1 2021",
    theme: "The New Normal",
    pages: "86 Pages",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=624&auto=format&fit=crop"
  }
];

export default function MagazinePage() {
  return (
    <>
      <PageHero
        title="The Doonite"
        subtitle="Our official school magazine: A canvas for the thoughts, art, and stories of DISJ."
        backgroundImage="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'The Doonite' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Happenings">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Voice of DISJ</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                'The Doonite' is a high-quality annual publication that celebrates the 
                diverse talents of our student body. It serves as a historical record 
                of the academic year and a creative outlet for our young writers and artists.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl mb-6">
                    <img 
                      src={issue.image} 
                      alt={issue.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                       <div className="flex gap-4 w-full">
                          <button className="flex-1 bg-white text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg hover:bg-accent transition-colors">
                            <Eye className="w-4 h-4" /> Preview
                          </button>
                          <button className="flex-1 bg-accent text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg hover:bg-white transition-colors">
                            <Download className="w-4 h-4" /> PDF
                          </button>
                       </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 leading-tight">{issue.title}</h3>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase">
                        <Layers className="w-3.5 h-3.5" /> {issue.pages}
                     </div>
                     <div className="h-1 w-1 bg-gray-300 rounded-full" />
                     <div className="flex items-center gap-1.5 text-xs text-accent font-black uppercase">
                        Theme: {issue.theme}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 text-center max-w-3xl mx-auto">
                 <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <BookOpen className="w-8 h-8" />
                 </div>
                 <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Call for Contributions</h3>
                 <p className="text-white/80 text-lg leading-relaxed mb-8">
                   Are you a DISJ student with a story to tell or art to share? Contributions for 
                   the 2024 edition of 'The Doonite' are now open. Reach out to the Literary 
                   Club or upload your work through the student portal.
                 </p>
                 <button className="bg-white text-primary font-black px-10 py-4 rounded-full shadow-lg hover:bg-accent transition-all">
                   Submit Your Entry
                 </button>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
