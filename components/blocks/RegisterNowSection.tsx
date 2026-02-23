'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopupModal from '../ui/popup-modal';

export default function RegisterNowSection() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleQROpen = () => {
    setIsQRModalOpen(true);
  };

  const handleQRClose = () => {
    setIsQRModalOpen(false);
  };

  return (
    <section className="relative z-[3] w-full bg-white pb-8 mb-12 pt-8 md:pt-12" id="register-now">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-100 rounded-xl p-6 md:p-8 bg-white shadow-sm">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#001F48] text-center mb-6 sm:mb-4 relative inline-block">
          Register Now
          <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
        </h2>

        <p className="text-gray-700 font-body leading-relaxed text-base space-y-4 sm:space-y-5 max-w-4xl mx-auto text-center mb-8">
          Join our community of learners. Scan the QR code below to register and begin your journey with Doon International School.
          Experience world-class education, innovative curriculum, and holistic development in a nurturing environment that prepares you for global success.
        </p>

        <div className="flex justify-center">
          <motion.div
            className="cursor-pointer max-w-xs w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={handleQROpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleQROpen();
              }
            }}
            aria-label="Scan QR code to register"
          >
            {/* <div className="p-4 bg-white rounded-lg shadow-lg border-2 border-[#FFD200] hover:border-[#001F48] transition-colors duration-300">
              <img
                src="/images/qrcode.png"
                alt="Registration QR Code"
                className="w-full h-auto rounded"
              />
              <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                Tap to enlarge
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
      </div>

      <PopupModal isOpen={isQRModalOpen} onClose={handleQRClose} imageSrc="/images/qrcode.png" size="small" />
    </section>
  );
}
