'use client'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  )
}