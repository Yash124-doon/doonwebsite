'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for any queries or to schedule a visit."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <PageContainer>
        <div className="space-y-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: "Phone",
                  value: "+91 74711 25154",
                  icon: <Phone className="w-6 h-6" />,
                  color: "bg-blue-50"
                },
                {
                  title: "Email",
                  value: "info@disjabalpur.edu.in",
                  icon: <Mail className="w-6 h-6" />,
                  color: "bg-pink-50"
                },
                {
                  title: "Location",
                  value: "N.H. 07, Gram Imlai, Jabalpur (M.P.)",
                  icon: <MapPin className="w-6 h-6" />,
                  color: "bg-emerald-50"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 ${item.color} text-primary rounded-2xl flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.title}</div>
                    <div className="font-bold text-primary">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[5rem]" />
              <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight flex items-center gap-4">
                <MessageSquare className="text-accent w-8 h-8" /> Drop Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
                <textarea rows={5} placeholder="Your Message" className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all"></textarea>
                <button className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl hover:bg-black transition-all uppercase tracking-[0.2em]">Send Message</button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white bg-muted relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.719629944034!2d79.91134377531525!3d23.070738279140134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3a02a7cdb21%3A0x58771697fa8990ee!2sDoon%20International%20School!5e0!3m2!1sen!2sin!4v1761893512458!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              title="Doon International School Map"
              allowFullScreen
              frameBorder="0"
              style={{ backgroundColor: 'white' }}
            />
          </motion.div>

          {/* Office Hours Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-primary text-white p-12 md:p-20 rounded-[4rem] shadow-2xl overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2" />
            <div>
              <h3 className="text-3xl font-black mb-8 italic uppercase tracking-wider text-accent">Visit our Campus</h3>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                We encourage prospective parents to visit our campus to experience the
                vibrant learning culture of Doon International School firsthand.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"><Clock className="w-6 h-6 text-accent" /></div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Office Hours</div>
                    <div className="font-bold">Mon - Sat: 9:00 AM - 3:30 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center"><Globe className="w-6 h-6 text-accent" /></div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Connect Digitally</div>
                    <div className="font-bold">iinfo@dooninternationaljabalpur.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 h-[400px]">
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/20">
                <img src="/assets/main-entrance.webp" alt="Campus Entrance" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/20">
                <img src="/assets/facilities/classroom.webp" alt="Modern Classrooms" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/20">
                <img src="/assets/facilities/transport.webp" alt="School Transport" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/20">
                <img src="/assets/facilities/horses.webp" alt="Sports & Activities" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
