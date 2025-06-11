'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function AnimatedButton({ href, className = '', children }: AnimatedButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    </Link>
  )
}