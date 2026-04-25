'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className = "", 
  animate = true 
}) => {
  if (!animate) {
    return (
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}>
        {children}
      </main>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default PageContainer;
