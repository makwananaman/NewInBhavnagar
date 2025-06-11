'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedWrapperProps {
  children: ReactNode;
}

export default function AnimatedWrapper({ children }: AnimatedWrapperProps) {
  return (
    <motion.div
      className="flex-1 overflow-y-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}