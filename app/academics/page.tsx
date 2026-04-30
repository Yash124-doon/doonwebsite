'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Microscope, PenTool, Activity, BarChart, Brain, Heart, MessageCircle, Globe, Palette, Lightbulb } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const academicCards = [
  {
    title: "Methodology",
    description: "Our innovative teaching approach focuses on inquiry-based and experiential learning.",
    icon: <PenTool className="w-6 h-6" />,
    href: "/academics/methodology"
  },
  {
    title: "Curriculum",
    description: "A robust CBSE-based framework that scales with the student's growth from Pre-Primary to Secondary.",
    icon: <BookOpen className="w-6 h-6" />,
    href: "/academics/curriculum"
  },
  {
    title: "Infrastructure",
    description: "State-of-the-art labs and digital classrooms that make learning an immersive experience.",
    icon: <Microscope className="w-6 h-6" />,
    href: "/academics/infrastructure"
  }
];

export default function AcademicsOverviewPage() {
  return (
    <>
      <PageHero
        title="Empowering Minds, Enriching Souls"
        subtitle="The Doon Way to Holistic Excellence"
        backgroundImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Academics">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Academic Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                At Doon International School, education is not memorization—it is transformation. 
                Our curriculum blends intellectual rigor, cultural depth, and experiential learning 
                to nurture every child’s potential. With innovation, values, and creativity at its 
                core, we prepare learners to excel in academics and life.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {academicCards.map((card, index) => (
                <Link key={index} href={card.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center text-accent font-bold text-sm uppercase tracking-wider gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Nurturing Leaders
                </div>
                <h3 className="text-3xl font-black text-primary mb-6">Holistic Educational Philosophy</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We don't just aim for board results; we aim for life-readiness. Our philosophy 
                  integrates physical education, arts, and character building into the 
                  scholastic day, ensuring that every DISJ student is a well-rounded global citizen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <GraduationCap className="w-5 h-5 text-accent" /> Expert Mentorship
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop" 
                  alt="Student Excellence" 
                  className="rounded-3xl shadow-xl border-4 border-white"
                />
              </div>
            </motion.div>

            {/* Detailed Academic Content Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Our Distinctive Academic Pillars</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We go beyond traditional boundaries to ensure every student receives a well-rounded, future-ready education.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* ELCP */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">ELCP – Experiential Learning</h4>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">Our Experiential Learning Curriculum Plan ensures every chapter is paired with a real-world activity:</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Children spinning experience centripetal force before studying it in Physics.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Measuring the school garden becomes a live lesson in area and perimeter.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> A mock market setup teaches profit, loss, and budgeting.</li>
                  </ul>
                </div>

                {/* Assessments */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Assessments & Remediation</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Learning is continuously monitored through weekly assessments. Based on classroom interaction and performance, additional remediation classes are scheduled. Every lesson is designed with pre-set academic standards to ensure all children are engaged, challenged, and supported.
                  </p>
                </div>

                {/* Vedic Mathematics */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Vedic Mathematics</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Guided by the Principal Sir, our Vedic Maths program enhances mental agility, speed, and accuracy. Students develop a love for numbers and master quick calculation techniques—an invaluable skill for competitive exams.
                  </p>
                </div>

                {/* Spiritual Classes */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Spiritual Classes</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Rooted in Indian values, our spiritual sessions nurture mindfulness, gratitude, and ethical grounding. Through stories, chants, and reflection, students learn to balance ambition with humility and inner peace.
                  </p>
                </div>

                {/* Spoken English */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Spoken English & Personality</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Confidence in communication is cultivated through debates, role plays, and public speaking. Students develop essential life skills—leadership, etiquette, and emotional intelligence—that prepare them for global platforms.
                  </p>
                </div>

                {/* Foreign Language */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Foreign Language Exposure</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We offer foreign language programs such as French and German to broaden horizons. Students gain linguistic skills and cultural awareness, equipping them for international opportunities.
                  </p>
                </div>

                {/* Fine Arts Integration */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center shrink-0">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Fine Arts Integration</h4>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">At Doon, fine arts are integral to academics, acting as a medium of personality development and interdisciplinary learning:</p>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <strong className="text-primary block mb-1">Dance</strong>
                      Learners explore the science of body posture and understand mathematical sequencing in steps.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <strong className="text-primary block mb-1">Visual Art</strong>
                      Students identify and apply shapes, symmetry, and geometry in creative ways.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <strong className="text-primary block mb-1">Music</strong>
                      Helps develop coordination and grasp the scientific principles of sound.
                    </div>
                  </div>
                </div>

                {/* Innovation Platforms */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Experiential Learning & IGNITE@DIS</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our curriculum emphasizes learning by doing through projects, fieldwork, exhibitions, and real-life applications. Robotics, science labs, social studies surveys, and thematic showcases make knowledge meaningful. <br/><br/>
                    We proudly host <strong>IGNITE@DIS</strong>, our flagship Science and Innovation Club, where students explore STEM, AI, and design thinking through hands-on challenges, coding, model-making, and research. These platforms foster curiosity, creativity, and a spirit of invention.
                  </p>
                </div>

              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-10 md:p-16 text-center text-white"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90 max-w-4xl mx-auto">
                "From Vedic Maths to robotics, spoken English to spiritual wisdom—Doon International 
                School nurtures every learner with precision, passion, and purpose. Here, every talent 
                finds its path, every dream finds its wings."
              </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
