'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Flag, Heart, Languages, Globe } from 'lucide-react';

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

const festivals = [
  { 
    title: "Independence Day", 
    date: "Aug 15", 
    desc: "A day of patriotic fervour, flag hoisting, and march past by the DISJ platoons.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1176&auto=format&fit=crop"
  },
  { 
    title: "Republic Day", 
    date: "Jan 26", 
    desc: "Celebrating the constitution with grand tableaus and cultural performances.",
    image: "https://images.unsplash.com/photo-1599408674251-57bc0dfb0b98?q=80&w=1214&auto=format&fit=crop"
  },
  { 
    title: "Gandhi Jayanti", 
    date: "Oct 02", 
    desc: "Reflecting on the values of non-violence through prayer and cleanliness drives.",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1173&auto=format&fit=crop"
  }
];

export default function NationalFestivalsPage() {
  return (
    <>
      <PageHero
        title="National Festivals"
        subtitle="Inculcating a sense of pride and patriotism: Celebrating the unity in our diversity."
        backgroundImage="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1176&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'National Festivals' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">One India, One DISJ</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                At Doon International School Jabalpur, we believe that education is incomplete 
                without strong national roots. Our celebrations of Independence Day, 
                Republic Day, and Gandhi Jayanti are grand events that bring together 
                staff and students in a shared spirit of patriotism.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { label: "Patriotism", icon: Flag, color: "text-orange-500" },
                   { label: "Secularism", icon: Heart, color: "text-pink-500" },
                   { label: "Languages", icon: Languages, color: "text-blue-500" },
                   { label: "Diversity", icon: Globe, color: "text-green-500" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center group hover:-translate-y-2 transition-all">
                      <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-xl font-black text-primary uppercase tracking-tight">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <div className="grid gap-12">
               {festivals.map((fes, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex flex-col md:flex-row gap-10 items-center border-b border-gray-100 pb-12 last:border-0"
                 >
                    <div className="md:w-1/3 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                       <img src={fes.image} alt={fes.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-2/3">
                       <div className="text-accent font-black text-sm uppercase tracking-[0.2em] mb-3">{fes.date}</div>
                       <h3 className="text-2xl font-black text-primary mb-4 uppercase">{fes.title}</h3>
                       <p className="text-gray-600 leading-relaxed text-lg">
                         {fes.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Cultural Synthesis</h3>
               <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                 In Addition to national days, we also celebrate major religious and cultural 
                 festivals like Diwali, Eid, and Christmas, helping our students understand 
                 and respect the rich heritage of their fellow citizens.
               </p>
               <div className="flex justify-center gap-4">
                  <div className="h-2 w-16 bg-orange-500 rounded-full" />
                  <div className="h-2 w-16 bg-white rounded-full" />
                  <div className="h-2 w-16 bg-green-500 rounded-full" />
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
