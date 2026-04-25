'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Music, Palette, Mic, Camera } from 'lucide-react';

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

const arts = [
  {
    title: "Vocal & Instrumental Music",
    description: "From classical Indian ragas to contemporary western music, our music department is a haven for aspiring musicians.",
    icon: <Music className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Visual Arts",
    description: "Painting, sketching, and sculpture studios where students transform their imagination into tangible masterpieces.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=880&auto=format&fit=crop"
  },
  {
    title: "Dance & Performing Arts",
    description: "Our dance studio echoes with the rhythms of Kathak, Bharatnatyam, and modern dance forms.",
    icon: <Mic className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1169&auto=format&fit=crop"
  },
  {
    title: "Media & Photography",
    description: "Capturing life at DISJ through the lens, exploring digital storytelling and visual journalism.",
    icon: <Camera className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1170&auto=format&fit=crop"
  }
];

export default function CreativeConvergencePage() {
  return (
    <>
      <PageHero
        title="Creative Convergence"
        subtitle="Where imagination meets expression and talent finds its stage."
        backgroundImage="https://images.unsplash.com/photo-1514525253361-b414683d7895?q=80&w=1035&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Creative Convergence' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Artistic Spirit</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                At DISJ, we believe that every child is an artist. Our 'Creative Convergence' 
                department provides the resources, mentorship, and platform for students to 
                explore their creative potential across various mediums.
              </p>
            </motion.div>

            <div className="grid gap-12">
              {arts.map((art, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="md:w-1/2 p-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                      {art.icon}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{art.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {art.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Annual Cultural Fest</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Our creative journey culminates in the grand Annual Award Ceremony and Cultural Fest, 
                where the entire school community comes together to celebrate the artistic 
                achievements of our students.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1170&auto=format&fit=crop" 
                alt="Stages of cultural fest" 
                className="w-full h-[300px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
