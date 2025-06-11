'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedContent({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 overflow-y-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}