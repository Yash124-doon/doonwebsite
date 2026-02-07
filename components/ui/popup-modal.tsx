'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  size?: 'small' | 'large';
}

/**
 * PopupModal component that displays the popup.jpg image with a close button and blurred backdrop
 */
export default function PopupModal({ isOpen, onClose, imageSrc, size }: PopupModalProps): JSX.Element {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal when clicking the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <img
                src={imageSrc || "/images/popup.jpg"}
                alt="Popup"
                className={`w-auto h-auto object-contain rounded-lg shadow-2xl ${
                  size === 'small'
                    ? 'max-w-[70vw] max-h-[70vh] md:max-w-[60vw] md:max-h-[60vh]'
                    : 'max-w-[90vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[90vh]'
                }`}
              />
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 shadow-lg transition-colors border-2 border-gray-200"
                aria-label="Close popup"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
