'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopupModal from './popup-modal';

/**
 * RegistrationSideStrip component that displays a fixed-position side strip
 * for online registration that opens a QR code popup when clicked
 */
export default function RegistrationSideStrip(): JSX.Element {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleQROpen = () => {
    setIsQRModalOpen(true);
  };

  const handleQRClose = () => {
    setIsQRModalOpen(false);
  };

  return (
    <>
      {/* Mobile Version - very slim */}
      <motion.button
        onClick={handleQROpen}
        className="md:hidden fixed top-1/2 -translate-y-1/2 right-0 bg-[#002B6B] text-white font-medium rounded-l-md z-20 shadow-lg flex items-center justify-center"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          width: '20px',
          height: '160px',
          fontSize: '12px',
          padding: '4px 2px',
          whiteSpace: 'nowrap'
        }}
        aria-label="Online Registration"
        whileTap={{ scale: 0.95 }}
      >
        Online Registration
      </motion.button>

      {/* Desktop Version */}
      <motion.button
        onClick={handleQROpen}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0 w-6 h-48 bg-[#002B6B] text-white text-sm font-medium py-2 rounded-l-md z-20 shadow-lg transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,43,107,0.5)] items-center justify-center"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Online Registration"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        Online Registration
      </motion.button>

      <PopupModal
        isOpen={isQRModalOpen}
        onClose={handleQRClose}
        imageSrc="/images/qrcode.png"
        size="small"
      />
    </>
  );
}
