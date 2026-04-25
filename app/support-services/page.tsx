'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Coffee, Bus, Activity, Home, Monitor, LayoutGrid } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

const services = [
  {
    title: "Mess Facility",
    description: "Hygienic and nutritious dining with a variety of balanced meals prepared in our modern kitchen.",
    icon: <Coffee className="w-8 h-8 text-primary" />,
    href: "/support-services/mess"
  },
  {
    title: "Bus Facility",
    description: "Safe and reliable transport with a fleet of modern buses covering key areas of Jabalpur.",
    icon: <Bus className="w-8 h-8 text-primary" />,
    href: "/support-services/bus"
  },
  {
    title: "Medical Facility",
    description: "On-campus health center with trained medical staff and emergency support available 24/7.",
    icon: <Activity className="w-8 h-8 text-primary" />,
    href: "/support-services/medical"
  },
  {
    title: "Boarding House",
    description: "Comfortable and secure residential facilities providing a 'home away from home' experience.",
    icon: <Home className="w-8 h-8 text-primary" />,
    href: "/support-services/boarding"
  },
  {
    title: "School ERP",
    description: "Our comprehensive digital portal for parents to track academic progress, fees, and attendance.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
    href: "/support-services/erp"
  }
];

export default function SupportServicesOverviewPage() {
  return (
    <>
      <PageHero
        title="Support Services"
        subtitle="Comprehensive facilities that ensure a safe, healthy, and efficient school environment."
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Support Services' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Support Services">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Our Commitment to Care</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At Doon International School, we understand that a world-class education 
                requires a world-class support system. Our support services are designed 
                to take care of every practical need of our students, from nutrition and 
                health to safety and digital accessibility.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="text-accent font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Details <span>&rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2">
                   <h3 className="text-3xl font-black mb-6 uppercase">Safety First Policy</h3>
                   <p className="text-white/80 text-lg leading-relaxed mb-8">
                     The safety and security of our students is our top priority. Our campus 
                     is under 24/7 CCTV surveillance, and we follow strict entry/exit protocols 
                     to ensure a secure learning environment.
                   </p>
                   <ul className="space-y-3">
                     {["CCTV Surveillance", "Trained Security Personnel", "Fire Safety Systems", "Entry Pass System"].map((u, i) => (
                       <li key={i} className="flex items-center gap-3 font-semibold text-white/90">
                         <LayoutGrid className="w-5 h-5 text-accent" /> {u}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl border-4 border-white/10">
                   <img 
                    src="https://images.unsplash.com/photo-1557053503-0c252e5c8093?q=80&w=1000&auto=format&fit=crop" 
                    alt="Safe Campus" 
                    className="w-full h-full object-cover"
                   />
                 </div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
