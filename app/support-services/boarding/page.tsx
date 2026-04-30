'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Home, Shield, Users, Coffee } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

export default function BoardingHousePage() {
  return (
    <>
      <PageHero
        title="Boarding House"
        subtitle="A secure and nurturing 'home away from home' for our residential students."
        backgroundImage="https://images.unsplash.com/photo-1555854817-5b2337a75515?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Support Services', href: '/support-services' },
          { label: 'Boarding House' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Support Services">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Residential Life</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                The Boarding House at Doon International School provides a cohesive community 
                environment where students from across the country learn the values of 
                independence, teamwork, and cultural diversity. Our hostel facilities are 
                designed to offer modern comfort while maintaining a disciplined and academic atmosphere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                <strong>A Second Home:</strong> For families opting for residential facilities, our Boarding House offers a nurturing environment that feels like a second home. With structured routines, mentorship programs, and personalized care, boarders enjoy a balance of academics, co-curricular activities, and leisure. Safety and well-being are our top priorities, and every child is guided to develop independence, responsibility, and camaraderie with peers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Comfortable Accommodation",
                  description: "Spacious, well-ventilated rooms with dedicated study areas for every student.",
                  icon: <Home className="w-8 h-8 text-primary" />
                },
                {
                  title: "24/7 Security",
                  description: "Round-the-clock security and house wardens ensuring a safe and supervised environment.",
                  icon: <Shield className="w-8 h-8 text-primary" />
                },
                {
                  title: "Communal Dining",
                  description: "Nutritious and varied meals served in a communal setting, fostering table etiquette and fellowship.",
                  icon: <Coffee className="w-8 h-8 text-primary" />
                },
                {
                  title: "Recreation & Bonding",
                  description: "Planned weekend activities, sports, and common rooms for relaxation and peer social interaction.",
                  icon: <Users className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 p-10 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:bg-primary transition-all duration-500">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Mentorship & Pastoral Care</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Every boarder at DISJ is under the care of experienced house masters and 
                wardens who provide emotional support and academic guidance, acting as 
                guardians and mentors. This personalized care ensures that every student 
                feels valued and supported.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1098&auto=format&fit=crop" 
                alt="Hostel Common Room" 
                className="w-full h-[350px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
