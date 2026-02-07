"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: "s1",
    subtitle: "THE INSPIRATION. THE BEGINNING.",
    title: "Inspired by the words of celebrated J. Krishnamurti (1895–1986)",
    desc: "Thinker-philosopher-teacher, we set out to create an institution that unfettered young minds.",
    image: "/assets/facilities/classroom.webp",
    slug: "inspired-by-j-krishnamurti",
  },
  {
    id: "s2",
    subtitle: "TOWARDS EXCELLENCE IN EDUCATION",
    title: "Doon International School is an acknowledged institution of excellence",
    desc: "A co-educational, day and residential school in Jabalpur, providing quality education with modern facilities and holistic development.",
    image: "/assets/main-entrance.webp",
    slug: "doon-international-school",
  },
  {
    id: "s3",
    subtitle: "MISSION STATEMENT",
    title: "Our educational institution has been conceptualized to educate young minds",
    desc: "In such a way as to make them stand tall even in the largest of crowds.",
    image: "/assets/main-hall.webp",
    slug: "mission-statement",
  },
  {
    id: "s4",
    subtitle: "IDEAL DIS STUDENT",
    title: "We want our children to be equipped with...",
    desc: "Moral values, honesty, linguistic skills, curiosity, and tolerance.",
    image: "/assets/facilities/computer-lab.webp",
    slug: "ideal-dis-student",
  },
  {
    id: "s5",
    subtitle: "THE SCHOOL PHILOSOPHY",
    title: "Doon International School Aims",
    desc: "To inspire curiosity, courage, and compassion through balanced education.",
    image: "/assets/facilities/robotics.webp",
    slug: "school-philosophy",
  },
  {
    id: "s6",
    subtitle: "TRULY INTERNATIONAL",
    title: "At the time of its inception",
    desc: "The founders felt the need to create an institution truly international in spirit and standards.",
    image: "/assets/facilities/horses.webp",
    slug: "truly-international",
  },
];

const CARDS_AROUND_CENTER = 4;
const VIRTUAL_CARDS = CARDS_AROUND_CENTER * 2 + 1;

export default function TiltedCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVeryNarrow, setIsVeryNarrow] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragAccumRef = useRef(0);
  const lastChangeTimeRef = useRef(0);

  // Detect mobile and very narrow screens
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsVeryNarrow(width <= 360); // iPhone 5 and similar narrow devices
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const springCenterIndex = useSpring(centerIndex, {
    stiffness: isMobile ? 120 : 200,
    damping: isMobile ? 35 : 30,
    mass: 0.6,
  });

  const next = useCallback(() => {
    const now = Date.now();
    if (now - lastChangeTimeRef.current > 300) { // Throttle to 300ms between changes
      setCenterIndex((i) => i + 1);
      lastChangeTimeRef.current = now;
    }
  }, []);

  const prev = useCallback(() => {
    const now = Date.now();
    if (now - lastChangeTimeRef.current > 300) { // Throttle to 300ms between changes
      setCenterIndex((i) => i - 1);
      lastChangeTimeRef.current = now;
    }
  }, []);



  const translateX = useTransform(
    springCenterIndex,
    (v) => -v * (isVeryNarrow ? 120 : isMobile ? 220 : 380)
  );

  const getVirtualCardAtPosition = useCallback(
    (positionOffset: number) => {
      const slideIndex =
        ((centerIndex + positionOffset) % slides.length + slides.length) % slides.length;
      return {
        ...slides[slideIndex],
        key: `card-${centerIndex + positionOffset}`,
        positionOffset,
      };
    },
    [centerIndex]
  );

  // Mobile version
  if (isMobile) {
    return (
      <section className="relative bg-[#102544] py-16 overflow-hidden">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Towards Excellence
          <span className="block h-[2px] w-12 bg-[#FFC940] mx-auto mt-2"></span>
        </h2>

        <div className="max-w-full mx-auto px-2">
          <motion.div
            className="carousel-perspective-mobile relative overflow-hidden"
            style={{
              perspective: isVeryNarrow ? "600px" : "800px",
              x: translateX,
              height: isVeryNarrow ? "360px" : "460px", // Shorter container for narrow screens
              touchAction: "none" // Prevent browser touch defaults
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // Prevent infinite drag
            dragElastic={0.1} // Small elasticity for bounds
            onDragStart={() => {
              dragAccumRef.current = 0;
            }}
            onDrag={(_, info) => {
              // Accumulate drag distance for threshold-based snapping
              dragAccumRef.current += info.delta.x;
            }}
            onDragEnd={(event, info) => {
              const now = Date.now();
              if (now - lastChangeTimeRef.current < 300) {
                dragAccumRef.current = 0;
                return;
              }

              // Snap to next/previous slide based on drag distance threshold
              const dragDistance = Math.abs(dragAccumRef.current);
              const cardWidth = isVeryNarrow ? 120 : 220; // Same as translateX calculation

              if (dragDistance > cardWidth * 0.3) { // 30% threshold for slide change
                if (dragAccumRef.current > 0) {
                  // Dragged right, go to previous slide (infinite)
                  setCenterIndex(centerIndex - 1);
                } else {
                  // Dragged left, go to next slide (infinite)
                  setCenterIndex(centerIndex + 1);
                }
                lastChangeTimeRef.current = now;
              } else {
                // Not enough drag, stay on current slide
                setCenterIndex(centerIndex);
              }

              dragAccumRef.current = 0;
            }}
          >
            <div
              ref={containerRef}
              className="carousel-3d-mobile relative h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {Array.from({ length: VIRTUAL_CARDS }, (_, i) => {
                const positionOffset = i - Math.floor(VIRTUAL_CARDS / 2);
                const data = getVirtualCardAtPosition(positionOffset);
                const pos = data.positionOffset;

                // Reduce 3D effects for very narrow screens
                const rotateY = isVeryNarrow ? pos * -3 : pos * -6;
                const cardTranslateX = pos * (isVeryNarrow ? 120 : 220);
                const translateZ = isVeryNarrow
                  ? (pos === 0 ? 0 : Math.max(-20, 20 - Math.abs(pos) * 20))
                  : (pos === 0 ? 0 : Math.max(-40, 40 - Math.abs(pos) * 40));
                const scale = isVeryNarrow
                  ? (pos === 0 ? 1.0 : pos === 1 || pos === -1 ? 0.97 : 0.92)
                  : (pos === 0 ? 1.0 : pos === 1 || pos === -1 ? 0.95 : 0.88);
                const opacity = Math.abs(pos) > 4 ? 0 : 1;
                const zIndex = 50 - Math.abs(pos);
                const cardHeight = isVeryNarrow ? "h-72" : "h-96"; // 288px vs 384px

                return (
                  <motion.article
                    key={data.key}
                    className={`carousel-card-mobile absolute ${isVeryNarrow ? 'w-72' : 'w-80'} ${cardHeight} rounded-sm overflow-hidden shadow-lg`}
                    style={{
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      transform: `translate3d(${cardTranslateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.25))",
                      zIndex,
                      opacity,
                      transition:
                        "transform 250ms cubic-bezier(0.4,0.0,0.2,1), opacity 200ms ease",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${data.image})` }}
                    />
                    <img
                      src={data.image}
                      alt=""
                      loading="lazy"
                      className="absolute opacity-0 pointer-events-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    <div className={`relative z-20 h-full flex flex-col justify-end text-white ${isVeryNarrow ? 'pb-1' : 'pb-2'}`} style={{ transform: "translateZ(20px)", isolation: "isolate" }}>
                      <div className={`bg-gradient-to-t from-black/70 via-black/40 to-black/20 rounded-b-sm ${isVeryNarrow ? 'px-4 pb-3' : 'px-5 pb-4'}`} style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", textRendering: "optimizeLegibility", transform: "translateZ(0)", transformStyle: "preserve-3d" }}>
                        <span className={`inline-block bg-[#0E1C30]/80 text-[#FFC940] px-2 py-[1px] text-[9px] uppercase tracking-wider rounded-sm shadow-sm block ${isVeryNarrow ? 'mb-2' : 'mb-3'}`}>
                          {data.subtitle}
                        </span>
                        <h3 className={`font-semibold leading-tight text-white ${isVeryNarrow ? 'text-sm mb-2' : 'text-base mb-3'}`}>
                          {data.title}
                        </h3>
                        <p className={`text-gray-200/90 leading-snug ${isVeryNarrow ? 'text-[11px]' : 'text-xs'}`}>
                          {data.desc}
                        </p>
                        <div className={`${isVeryNarrow ? 'mt-2' : 'mt-3'}`}>
                          <Link href={`/blog/${data.slug}`}>
                            <span className={`text-[#F6C75A] uppercase font-medium tracking-wide hover:underline cursor-pointer ${isVeryNarrow ? 'text-[9px]' : 'text-[10px]'}`}>
                              Read More →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Swipe Indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {slides.map((_, index) => {
                const isActive = index === (((centerIndex % slides.length) + slides.length) % slides.length);
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => { const currentIndex = ((centerIndex % slides.length) + slides.length) % slides.length; let delta = index - currentIndex; if (Math.abs(delta) > slides.length / 2) { delta = delta > 0 ? delta - slides.length : delta + slides.length; } setCenterIndex(centerIndex + delta); }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${isActive
                      ? 'bg-[#FFC940] shadow-lg transform scale-110'
                      : 'bg-white/40'
                      }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation',
                      userSelect: 'none'
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version
  return (
    <section className="relative bg-[#102544] py-24 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Towards Excellence
        <span className="block h-[2px] w-16 bg-[#FFC940] mx-auto mt-2"></span>
      </h2>

      <div className="carousel-perspective max-w-[1400px] mx-auto px-6 mt-24">
        <motion.div
          ref={containerRef}
          className="carousel-3d relative h-[600px] flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            x: translateX,
          }}
        >
          {Array.from({ length: VIRTUAL_CARDS }, (_, i) => {
            const positionOffset = i - Math.floor(VIRTUAL_CARDS / 2);
            const data = getVirtualCardAtPosition(positionOffset);
            const pos = data.positionOffset;

            const rotateY = pos === 0 ? 0 : pos * -16;
            const translateX = pos * 380;
            const translateZ =
              pos === 0 ? 0 : Math.max(-60, 40 - Math.abs(pos) * 40);
            const scale =
              pos === 0 ? 1.0 : pos === 1 || pos === -1 ? 0.98 : 0.92;
            const opacity = Math.abs(pos) > 3 ? 0 : 1;
            const zIndex = 50 - Math.abs(pos);

            return (
              <motion.article
                key={data.key}
                className="carousel-card absolute w-[340px] md:w-[420px] h-[520px] md:h-[600px] rounded-sm overflow-hidden shadow-lg cursor-pointer"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  filter: "drop-shadow(0 10px 35px rgba(0,0,0,0.45))",
                  transition:
                    "transform 300ms cubic-bezier(0.4,0.0,0.2,1), opacity 150ms ease",
                  opacity,
                  zIndex,
                }}
                onClick={() => {
                  const now = Date.now();
                  if (now - lastChangeTimeRef.current > 300) {
                    setCenterIndex(centerIndex + positionOffset);
                    lastChangeTimeRef.current = now;
                  }
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${data.image})` }}
                />
                <img
                  src={data.image}
                  alt=""
                  loading="lazy"
                  className="absolute opacity-0 pointer-events-none"
                />

                <div
                  className="relative z-20 p-6 h-full flex flex-col justify-end text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  style={{
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                    transform: "translateZ(0)"
                  }}
                >
                  <span className="inline-block bg-[#0E1C30]/90 text-[#FFC940] px-2 py-[3px] text-[11px] uppercase tracking-wider rounded-sm shadow-sm">
                    {data.subtitle}
                  </span>
                  <h3 className="mt-4 font-semibold text-lg md:text-2xl leading-snug text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-200/90 mt-3 leading-relaxed">
                    {data.desc}
                  </p>
                  <div className="mt-4">
                    <Link href={`/blog/${data.slug}`}>
                      <span className="text-[#F6C75A] uppercase text-xs font-medium tracking-wide hover:underline cursor-pointer">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-12 bottom-10 w-9 h-9 border border-white/70 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-white/10 hover:scale-105 transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-12 bottom-10 w-9 h-9 border border-white/70 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-white/10 hover:scale-105 transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </section>
  );
}
