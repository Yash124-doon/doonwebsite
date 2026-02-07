'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FacilityItem {
  title: string;
  description: string;
  image?: string;
  isHeroSection?: boolean;
}

interface FacilityNavItem {
  anchor: string;
  color: string;
  label: string;
  icon: string;
}

interface InfrastructureFacilitiesSectionProps {
  facilities: FacilityItem[];
  facilityNav: FacilityNavItem[];
  title?: string;
}

export default function InfrastructureFacilitiesSection({ facilities, facilityNav, title = "Infrastructure Facilities" }: InfrastructureFacilitiesSectionProps) {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();

  return (
    <section className="text-black">
      <div className="pt-24 pb-4 px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">{title}</h2>

        <div className="space-y-4">
          {facilities.map((facility, index) => {
            const anchorId = slugify(facility.title);
            const navItem = facilityNav.find(item => item.anchor === anchorId);
            const borderColor = navItem?.color || '#60A5FA';

            // Render hero section differently for the final tagline
            if (facility.isHeroSection) {
              return (
                <motion.div
                  key={index}
                  id={anchorId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="relative h-[280px] w-full overflow-hidden rounded-lg"
                >
                  {facility.image && (
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-6">
                      <div className="text-xl md:text-2xl font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: facility.description }} />
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Regular facility rendering
            return (
              <motion.div
                key={index}
                id={anchorId}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.08, 2.0),
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div
                  className="bg-[#FAF4E9] border-l-4"
                  style={{ borderLeftColor: borderColor }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-6 md:px-16 py-12">
                    {facility.image && (
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[640px] aspect-[16/10] overflow-hidden rounded-lg">
                          <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 640px"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex-1 max-w-prose">
                      <h3 className="text-2xl font-semibold mb-3">{facility.title}</h3>
                      <div className="text-base opacity-80 leading-relaxed" dangerouslySetInnerHTML={{ __html: facility.description }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
