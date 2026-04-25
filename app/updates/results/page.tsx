'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Download } from 'lucide-react';

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

const toppers = [
  {
    name: "Aryan Sharma",
    class: "Class XII (Science)",
    percentage: "98.4%",
    achievement: "City Topper",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Sanya Gupta",
    class: "Class XII (Commerce)",
    percentage: "97.8%",
    achievement: "School Topper",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
  },
  {
    name: "Rohan Verma",
    class: "Class X",
    percentage: "99.2%",
    achievement: "State Level Merit",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop"
  }
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Academic Results"
        subtitle="Celebrating the academic brilliance and milestones achieved by our students."
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Results' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Board Highlights 2023-24</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Doon International School Jabalpur continues its legacy of 100% board results. 
                Our students have once again surpassed expectations, securing top positions 
                in the state and city merit lists.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                 {[
                   { label: "100%", sub: "Pass Percentage", icon: Star, color: "text-accent" },
                   { label: "45+", sub: "Students above 90%", icon: Trophy, color: "text-primary" },
                   { label: "99.2%", sub: "Highest Percentage", icon: TrendingUp, color: "text-green-600" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center">
                      <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-4xl font-black text-primary mb-1">{stat.label}</div>
                      <div className="text-gray-500 font-bold uppercase text-xs tracking-widest">{stat.sub}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary mb-10 uppercase text-center md:text-left">Our Shining Stars</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {toppers.map((topper, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-6 border-4 border-white">
                      <img src={topper.image} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-6 right-6 bg-accent text-primary font-black px-4 py-2 rounded-full text-sm shadow-lg">
                        {topper.percentage}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-black text-primary mb-1 uppercase tracking-tight">{topper.name}</h4>
                      <p className="text-accent font-bold mb-2">{topper.class}</p>
                      <p className="text-gray-400 text-xs font-black uppercase tracking-widest">{topper.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Detailed Result Analysis</h3>
               <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                 Download the comprehensive result PDF to see the subject-wise marks distribution 
                 and class-wise performance of DIS Jabalpur.
               </p>
               <button className="bg-accent text-primary font-black px-12 py-4 rounded-full shadow-xl hover:bg-white transition-all flex items-center gap-3 mx-auto">
                 <Download className="w-5 h-5" /> Download Result PDF
               </button>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
