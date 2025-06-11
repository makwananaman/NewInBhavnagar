'use client'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
}

export default function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}