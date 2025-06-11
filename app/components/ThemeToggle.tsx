'use client'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      className={`p-2 rounded-full ${
        isDark ? 'bg-gray-800' : 'bg-yellow-100'
      } transition-colors`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-yellow-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  )
} 