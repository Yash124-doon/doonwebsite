'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Utensils, HeartPulse, ShieldCheck, Flame } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

export default function MessFacilityPage() {
  return (
    <>
      <PageHero
        title="Mess & Dining Facility"
        subtitle="Wholesome, nutritious, and hygienic dining: The energy for excellence."
        backgroundImage="https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Support Services', href: '/support-services' },
          { label: 'Mess Facility' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Healthy Fuel for Busy Minds</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The DISJ Mess Facility is more than just a place to eat; it's a space where 
                students learn the value of nutrition and healthy eating habits. Our 
                expert chefs and nutritionists collaborate to create a menu that is 
                both delicious and balanced.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Nutritious Menus",
                  description: "Expertly planned weekly menus that provide a balanced intake of proteins, vitamins, and minerals.",
                  icon: <HeartPulse className="w-8 h-8 text-primary" />
                },
                {
                  title: "Hygiene Protocols",
                  description: "Stringent sanitation measures in the kitchen and dining areas, following international food safety standards.",
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />
                },
                {
                  title: "Modern Kitchen",
                  description: "State-of-the-art industrial kitchen equipment ensuring efficient and safe food preparation.",
                  icon: <Flame className="w-8 h-8 text-primary" />
                },
                {
                  title: "Diverse Cuisines",
                  description: "A varied menu featuring Indian, Continental, and specialized healthy food options to cater to all palates.",
                  icon: <Utensils className="w-8 h-8 text-primary" />
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-lg">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black text-primary mb-6 uppercase">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use only high-quality, fresh ingredients sourced from trusted vendors. 
                  Regular audits are conducted by the school management to ensure that the 
                  highest standards of nutrition and cleanliness are maintained consistently.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  RO Purified Drinking Water
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Regular Staff Health Checks
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1560616186-28249263069e?q=80&w=1170&auto=format&fit=crop" 
                  alt="Students Dining" 
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
