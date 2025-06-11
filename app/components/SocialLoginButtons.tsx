import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'

export default function SocialLoginButtons() {
  const socialButtons = [
    {
      icon: FcGoogle,
      label: 'Google',
      bgColor: 'bg-white',
      hoverBg: 'hover:bg-gray-50',
      darkHoverBg: 'dark:hover:bg-gray-700',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      bgColor: 'bg-[#1877F2]',
      textColor: 'text-white',
      hoverBg: 'hover:bg-[#1864D2]',
    },
    {
      icon: FaApple,
      label: 'Apple',
      bgColor: 'bg-black',
      textColor: 'text-white',
      hoverBg: 'hover:bg-gray-900',
    },
  ]

  return (
    <div className="flex justify-center space-x-4">
      {socialButtons.map(({ icon: Icon, label, bgColor, textColor, hoverBg, darkHoverBg }) => (
        <motion.button
          key={label}
          className={`p-3 rounded-full ${bgColor} ${textColor || 'text-gray-700'} ${hoverBg} ${darkHoverBg || ''} shadow-md`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-6 h-6" />
        </motion.button>
      ))}
    </div>
  )
} 