'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Info } from 'lucide-react';

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

const events = [
  {
    title: "Annual Sports Meet 2024",
    date: "15 Jan, 2024",
    time: "9:00 AM - 4:00 PM",
    venue: "School Grounds",
    description: "A grand celebration of athleticism, teamwork, and spirit featuring various track and field events.",
    image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Science & Innovation Fair",
    date: "10 Feb, 2024",
    time: "10:30 AM - 2:30 PM",
    venue: "Exhibition Hall",
    description: "Witness the revolutionary ideas and projects developed by our young scientists in our Science Park.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1332&auto=format&fit=crop"
  },
  {
    title: "Cultural Extravaganza",
    date: "25 Feb, 2024",
    time: "5:30 PM Onwards",
    venue: "School Auditorium",
    description: "An evening of music, dance, and drama showcasing the artistic convergence at DISJ.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop"
  }
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="School Events"
        subtitle="Stay updated with the vibrant and dynamic life at Doon International School."
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Events' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Calendar of Joy</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Our calendar is packed with events that challenge, inspire, and entertain. 
                From academic symposiums to sporting matches, there's always something 
                exciting happening at DISJ.
              </p>
            </motion.div>

            <div className="grid gap-10">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row hover:shadow-2xl transition-all group"
                >
                  <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:rotate-1 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="flex flex-wrap gap-4 mb-6">
                       <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase bg-accent/20 px-3 py-1.5 rounded-full">
                         <Calendar className="w-3.5 h-3.5" /> {event.date}
                       </div>
                       <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase bg-muted px-3 py-1.5 rounded-full">
                         <MapPin className="w-3.5 h-3.5" /> {event.venue}
                       </div>
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-8 max-w-xl line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-6 border-t border-gray-100 pt-8">
                       <button className="bg-primary text-white font-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 text-sm uppercase">
                         <Info className="w-4 h-4" /> Registration Details
                       </button>
                       <div className="flex items-center gap-2 text-primary/50 text-xs font-bold uppercase tracking-widest">
                         <Users className="w-4 h-4" /> Open to All Parents
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[3rem] p-10 md:p-16 text-center text-primary relative overflow-hidden"
            >
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Never Miss an Update</h3>
               <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                 Subscribe to our digital calendar to get instant notifications about upcoming 
                 events, holidays, and school celebrations directly on your mobile device.
               </p>
               <div className="flex justify-center gap-4">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-black shadow-lg hover:shadow-xl transition-all">
                    Link My Calendar
                  </button>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
