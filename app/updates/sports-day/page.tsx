'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Trophy, Activity, Timer, Zap } from 'lucide-react';

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

const highlights = [
  { title: "Inter-House Football", winner: "Teresa House", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1293&auto=format&fit=crop" },
  { title: "Athletic Meet", record: "100m Sprint (11.8s)", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop" },
  { title: "Yoga Demonstration", focus: "Holistic Wellness", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop" }
];

export default function SportsDayPage() {
  return (
    <>
      <PageHero
        title="National Sports Day"
        subtitle="Fueling the fire of sportsmanship and commemorating the legacy of Major Dhyan Chand."
        backgroundImage="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1173&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Sports Day' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Vigor, Valor, Victory</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                National Sports Day at DIS Jabalpur is a high-octane celebration of physical fitness 
                and healthy competition. The entire campus transforms into a stadium as students 
                from all four houses compete for the prestigious Overall Sports Trophy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { label: "500+", sub: "Participants", icon: Activity, color: "text-blue-500" },
                   { label: "12", sub: "New Records", icon: Timer, color: "text-red-500" },
                   { label: "House Trophy", sub: "Annual Honor", icon: Trophy, color: "text-accent" },
                   { label: "High Energy", sub: "Campus Vibes", icon: Zap, color: "text-yellow-500" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                      <stat.icon className={`w-10 h-10 mb-4 ${stat.color} group-hover:text-white transition-colors`} />
                      <div className="text-4xl font-black text-primary mb-1 group-hover:text-white">{stat.label}</div>
                      <div className="text-gray-400 font-bold uppercase text-[10px] tracking-widest group-hover:text-white/60">{stat.sub}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary mb-10 uppercase">Event Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
                    <div className="h-56 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-8">
                       <h4 className="text-xl font-black text-primary mb-2 uppercase">{item.title}</h4>
                       <p className="text-accent font-bold text-sm uppercase tracking-widest">{item.winner || item.record || item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
            >
               <div className="absolute -bottom-10 lg:-right-10 opacity-10">
                  <Trophy className="w-64 h-64" />
               </div>
               <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">The Overall Champions</h3>
               <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
                 "Winning is not everything, but the will to win is. We congratulate **Gandhi House** 
                 for clinching the overall sports trophy for the year 2023-24 with their 
                 exceptional performance across all track and field events."
               </p>
               <div className="inline-block bg-accent text-primary px-12 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-2xl">
                  Gandhi House - Overall Champions
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
