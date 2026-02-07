'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ModernHamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const ModernHamburgerButton: React.FC<ModernHamburgerButtonProps> = ({
  isOpen,
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      onClick={onClick}
      aria-expanded={isOpen}
      className={`relative flex items-center justify-center ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Button background - Larger touch target */}
      <div className="relative w-12 h-12 sm:w-11 sm:h-11 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation">
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm sm:blur-md scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Redesigned hamburger lines with absolute positioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-5 h-5">
<div className="absolute inset-0 flex items-center justify-center">
  <div className="relative flex flex-col items-center justify-center space-y-[6px]">
                  {/* Top Bar */}
                  <motion.div
                    className="w-5 h-[2px] bg-white rounded-full"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 6 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Middle Bar */}
                  <motion.div
                    className="w-5 h-[2px] bg-white rounded-full"
                    animate={{
                      opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                  {/* Bottom Bar */}
                  <motion.div
                    className="w-5 h-[2px] bg-white rounded-full"
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -6 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </div>

          </div>
        </div>
      </div>

      <span className="sr-only">Toggle mobile menu</span>
    </motion.button>
  );
};

export default ModernHamburgerButton;
