'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Award, Calendar, ArrowRight } from 'lucide-react';

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

const awards = [
  {
    title: "Best Emerging School of Jabalpur",
    organization: "Education World Excellence Awards",
    date: "October 2023",
    description: "Honored for innovation in digital learning and student-centric pedagogy.",
    image: "https://images.unsplash.com/photo-1578574515323-c3c8ef01456e?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Top CBSE School for Co-curricular Activities",
    organization: "School Merit Awards",
    date: "August 2023",
    description: "Recognized for providing diverse opportunities in sports, music, and arts.",
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Eco-Friendly School Award",
    organization: "Green India Council",
    date: "June 2023",
    description: "Awarded for our Science Park initiative and sustainable campus practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1174&auto=format&fit=crop"
  }
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        title="Awards & Recognition"
        subtitle="Celebrating the accolades that inspire us to keep striving for excellence."
        backgroundImage="https://images.unsplash.com/photo-1578574515323-c3c8ef01456e?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Awards' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Institutional Honors</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Our commitment to excellence is reflected in the numerous awards and 
                recognitions we have received over the years. These honors belong to every 
                student, parent, and faculty member who contributes to the DISJ legacy.
              </p>
            </motion.div>

            <div className="grid gap-12">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-4">
                      <Calendar className="w-4 h-4" /> {award.date}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-primary transition-colors">{award.title}</h3>
                    <p className="text-primary/70 font-bold mb-6 italic">{award.organization}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {award.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Full Story <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
               <Award className="w-16 h-16 text-accent mx-auto mb-8" />
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Motivated by Merit</h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 While awards validate our efforts, our true reward is seeing our students 
                 grow into responsible, capable, and compassionate citizens. We continue 
                 to raise the bar for educational excellence in Jabalpur.
               </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
