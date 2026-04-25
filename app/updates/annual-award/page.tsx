'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Medal, Star } from 'lucide-react';

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

export default function AnnualAwardPage() {
  return (
    <>
      <PageHero
        title="Annual Award Ceremony"
        subtitle="A night of recognition, honoring the persistent efforts and exceptional talents of our students."
        backgroundImage="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Annual Award' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Merit & Beyond</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The Annual Award Ceremony at Doon International School Jabalpur is a celebration of 
                multidimensional success. We don't just reward marks; we honor character, 
                perseverance, and the spirit of inquiry that defines the Doonite way of life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { title: "Scholar Badges", desc: "For Academic Excellence", icon: GraduationCap, color: "bg-blue-600" },
                   { title: "Special Medals", desc: "For Extra-curriculars", icon: Medal, color: "bg-accent" },
                   { title: "Student of Year", desc: "All-rounder Award", icon: Star, color: "bg-orange-500" },
                   { title: "Legacy Award", desc: "For Social Service", icon: Award, color: "bg-primary" }
                 ].map((cat, i) => (
                   <div key={i} className={`${cat.color} p-8 rounded-3xl text-white shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                      <cat.icon className="w-10 h-10 mb-6 opacity-80" />
                      <h4 className="text-xl font-black mb-2 leading-tight uppercase">{cat.title}</h4>
                      <p className="text-white/70 text-sm font-bold uppercase tracking-widest">{cat.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative group rounded-[3rem] overflow-hidden shadow-2xl h-[400px]"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1549057442-32561ea9bc76?q=80&w=1170&auto=format&fit=crop" 
                    alt="Awards on Stage" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-12 flex flex-col justify-end">
                     <h4 className="text-2xl font-black text-white mb-2 uppercase">Gala Evening</h4>
                     <p className="text-white/70">Parents and dignitaries gathered to witness the pride of DISJ.</p>
                  </div>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col justify-center"
               >
                  <h3 className="text-2xl font-black text-primary mb-6 uppercase">Cultivating a Growth Mindset</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our awards are designed to motivate even those who might not be topper-tier 
                    in academics but show exceptional improvement, kindness, or creative spark. 
                    We believe every child has a genius that deserves a platform.
                  </p>
                  <ul className="space-y-4">
                     {["Most Improved Student Award", "100% Attendance Award", "Envoy of Peace Recognition", "Creative Spark Medal"].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-primary font-bold">
                          <div className="w-2 h-2 bg-accent rounded-full" /> {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center"
            >
               <Award className="w-16 h-16 text-primary mx-auto mb-8" />
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The DISJ Honor Roll</h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                 The names etched on our trophies represent hours of dedication, early mornings, 
                 and the courage to fail and try again. We salute our young achievers!
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest">Merit 2024</div>
                  <div className="bg-white text-primary border border-gray-100 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-sm">Scholarships</div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
