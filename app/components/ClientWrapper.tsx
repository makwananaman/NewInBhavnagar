'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <AnimatePresence mode='wait'>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex-1 overflow-auto p-4"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}