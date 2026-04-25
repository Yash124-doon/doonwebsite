'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { ClipboardCheck, Calendar, Info, MapPin } from 'lucide-react';

const sidebarItems = [
  { name: "Beyond Classroom Overview", href: "/beyond-classroom" },
  { name: "Creative Convergence", href: "/beyond-classroom/creative-convergence" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
  { name: "HMG Sports Excellence", href: "/beyond-classroom/hmg-sports" },
  { name: "Personality Development", href: "/beyond-classroom/personality-development" },
  { name: "Counseling Services", href: "/beyond-classroom/behavioral-counseling" },
  { name: "School Band", href: "/beyond-classroom/school-band" },
  { name: "Student Council", href: "/beyond-classroom/student-council" },
];

export default function AdmissionCounselingPage() {
  return (
    <>
      <PageHero
        title="Admission Counseling"
        subtitle="Guiding prospective families through the DISJ admission process with clarity and care."
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Admission Counseling' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Beyond Classroom">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Your Journey Begins Here</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We understand that choosing the right school for your child is a significant 
                decision. Our Admission Counseling team is dedicated to providing prospective 
                parents and students with all the information they need to make an informed choice.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "In-depth Consultations",
                  description: "Personalized meetings to understand your child's needs.",
                  icon: <Info className="w-6 h-6" />
                },
                {
                  title: "Campus Tours",
                  description: "Guided walkthroughs of our world-class facilities.",
                  icon: <MapPin className="w-6 h-6" />
                },
                {
                  title: "Process Guidance",
                  description: "Step-by-step help with registration and documentation.",
                  icon: <ClipboardCheck className="w-6 h-6" />
                },
                {
                  title: "Entry Assessments",
                  description: "Clarification on our diagnostic assessment procedures.",
                  icon: <Calendar className="w-6 h-6" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg text-center group hover:bg-primary transition-colors duration-300">
                  <div className="w-12 h-12 bg-accent/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs group-hover:text-white/80 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Meet Our Counselors</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                Our team consists of experienced educators who can provide deep insights into 
                the DISJ curriculum, school culture, and student life. We are available on all 
                working days from 9:00 AM to 4:00 PM.
              </p>
              <div className="flex gap-6">
                <a href="/enquiry" className="bg-primary text-white font-black px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Schedule a Visit
                </a>
                <a href="tel:+919201591900" className="bg-white text-primary border-2 border-primary font-black px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
