'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Music, Mic2, Palette, Sparkles } from 'lucide-react';

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

export default function AnnualFunctionPage() {
  return (
    <>
      <PageHero
        title="Annual function"
        subtitle="The grandest scale of creativity and culture: Discover the magic of our annual extravaganza."
        backgroundImage="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Annual Function' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Theme 2024: "Udaan - The Wings of Hope"</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The DIS Jabalpur Annual Function is a spectacular display of talent, where 
                the entire school comes together to present a themed narrative attraverso 
                music, dance, and drama. It serves as a platform for every student to 
                overcome stage fright and shine.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                 {[
                   { title: "Symphony", icon: Music, label: "Live Orchestra" },
                   { title: "Drama", icon: Mic2, label: "Theatrical Play" },
                   { title: "Design", icon: Palette, label: "Creative Sets" },
                   { title: "Special", icon: Sparkles, label: "Light & Sound" }
                 ].map((feat, i) => (
                   <div key={i} className="bg-muted p-8 rounded-3xl text-center border border-primary/5 hover:border-accent transition-all">
                      <feat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-black text-primary uppercase mb-1">{feat.title}</h4>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{feat.label}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
               <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] -rotate-2" />
                  <img 
                    src="https://images.unsplash.com/photo-1514525253361-bee8d4034605?q=80&w=1074&auto=format&fit=crop" 
                    alt="Performers on Stage" 
                    className="relative rounded-[2.5rem] shadow-2xl z-10"
                  />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-primary mb-8 uppercase tracking-tight">A Night to Remember</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Last year's function, attendend by over 2,000 parents and special guests, 
                    showcased the cultural diversity of India and global environmental 
                    concerns. Our primary students stole the hearts with their innocent 
                    portrayal of fairy tales, while the senior section engaged the 
                    audience with a hard-hitting contemporary dance drama.
                  </p>
                  <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-primary/80 font-medium">
                    "The level of professionalism and the technical execution of the light and sound 
                    was at par with national theater standards." - Guest of Honor
                  </blockquote>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Behind the Curtains</h3>
               <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                 Watch our exclusive 'Behind the Scenes' documentary featuring the 3-month long 
                 journey of rehearsals, costume design, and set construction.
               </p>
               <div className="flex justify-center">
                 <button className="bg-white text-primary font-black px-12 py-4 rounded-full shadow-xl hover:bg-accent hover:scale-105 transition-all flex items-center gap-3">
                   <Mic2 className="w-5 h-5" /> Watch Documentary
                 </button>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
