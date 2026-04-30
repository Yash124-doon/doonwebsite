'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Map, Library, Microscope, Tablet, Monitor, Music, Activity, Utensils, Trophy, Cpu, Mic2 } from 'lucide-react';

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

const facilities = [
  {
    title: "Eco-Friendly Campus",
    description: "A lush green, pollution-free campus designed to provide a serene learning environment.",
    icon: <Map className="w-8 h-8 text-primary" />,
    href: "/infrastructure/campus"
  },
  {
    title: "The Knowledge Hub",
    description: "Extensive library with a vast collection of books and digital learning resources.",
    icon: <Library className="w-8 h-8 text-primary" />,
    href: "/infrastructure/library"
  },
  {
    title: "Science Laboratories",
    description: "Fully equipped laboratories for Physics, Chemistry, and Biology, designed to foster curiosity and hands-on learning under expert supervision.",
    icon: <Microscope className="w-8 h-8 text-primary" />,
    href: "/infrastructure/science-labs"
  },
  {
    title: "STEM & Robotics Lab",
    description: "Advanced lab enhanced with Virtual Reality (VR) facilities to nurture creativity, problem-solving, and innovation.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    href: "/infrastructure/science-park"
  },
  {
    title: "Smart Classrooms",
    description: "Every classroom is equipped with smart LED panels and touch-screen interactive boards making learning engaging and future-ready.",
    icon: <Tablet className="w-8 h-8 text-primary" />,
    href: "/infrastructure/smart-class"
  },
  {
    title: "IT Infrastructure",
    description: "Advanced computer labs with high-speed internet and specialized software.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
    href: "/infrastructure/computer-lab"
  },
  {
    title: "Creative Zones",
    description: "Dedicated spaces for pottery, modern dance, music, and art & craft where creativity flourishes.",
    icon: <Music className="w-8 h-8 text-primary" />,
    href: "/infrastructure/activity-rooms"
  },
  {
    title: "State-of-the-Art Auditorium",
    description: "The cultural heartbeat of the school, equipped with modern sound and lighting systems for plays, debates, and performances.",
    icon: <Mic2 className="w-8 h-8 text-primary" />,
    href: "/infrastructure" 
  }
];

export default function InfrastructureOverviewPage() {
  return (
    <>
      <PageHero
        title="Modern Infrastructure"
        subtitle="A world-class environment designed to inspire and facilitate multi-dimensional growth."
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Infrastructure' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Infrastructure">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Spaces for Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At DISJ, we believe that the environment is the 'third teacher'. Our campus is 
                thoughtfully designed to provide a balance of academic rigour, physical fitness, 
                and creative exploration.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((f, index) => (
                <Link key={index} href={f.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
                    <p className="text-gray-500 text-sm relaxed-relaxed mb-6">
                      {f.description}
                    </p>
                    <div className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore <span>&rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <section id="sports" className="scroll-mt-24">
               <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
               >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/3 -translate-y-1/3" />
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                   <div className="md:w-1/2">
                      <Trophy className="w-12 h-12 text-accent mb-6" />
                      <h3 className="text-3xl font-black mb-6 uppercase italic">HMG Arena</h3>
                      <p className="text-white/80 text-lg leading-relaxed mb-10">
                        Our sports infrastructure includes professional-standard courts for 
                        various disciplines, ensuring that our budding athletes have the 
                        perfect platform to train and excel.
                      </p>
                      <ul className="grid grid-cols-2 gap-4">
                        {["Tennis Courts", "Football Turf", "Basketball Court", "Swimming Pool"].map((s, i) => (
                          <li key={i} className="flex items-center gap-3 font-bold text-white/90">
                            <Activity className="w-4 h-4 text-accent" /> {s}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="md:w-1/2 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1546519156-d81a3ae9729d?q=80&w=1176&auto=format&fit=crop" 
                        alt="Sports Arena" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                 </div>
               </motion.div>
            </section>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
