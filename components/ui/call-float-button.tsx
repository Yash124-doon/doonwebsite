'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CALL_NUMBER = '+919201591900';

const CallFloatButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-3 group">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-[#002B6B] text-sm font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-slate-100"
          >
            Call us now!
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`tel:${CALL_NUMBER.replace(/\s+/g, '')}`}
        aria-label="Call us"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full bg-[#002B6B] flex items-center justify-center shadow-lg hover:shadow-[#002B6B]/40 hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 relative"
        id="global-call-btn"
      >
        <span className="absolute inset-0 rounded-full bg-[#002B6B] animate-ping opacity-20 group-hover:hidden"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
};

export default CallFloatButton;
