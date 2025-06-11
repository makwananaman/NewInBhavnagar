'use client'
import { motion } from 'framer-motion'

interface MotionLayoutProps {
  children: React.ReactNode
}

export default function MotionLayout({ children }: MotionLayoutProps) {
  return <motion.div>{children}</motion.div>
}