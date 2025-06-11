'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Store, Tag, Info, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/businesses', icon: Store, label: 'Businesses' },
    { href: '/discounts', icon: Tag, label: 'Discounts' },
    { href: '/about', icon: Info, label: 'About' },
  ]

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 w-64' : 'translate-x-0 w-16'}
      `}>
        <div className="p-4 mt-14">
          <h2 className={`text-xl font-bold text-primary-600 transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            NewInBhavnagar
          </h2>
        </div>

        <nav className="space-y-2 px-2">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center px-3 py-3 rounded-lg transition-all duration-300
                ${pathname === href 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-50'}
              `}
            >
              <Icon className={`w-5 h-5 ${pathname === href ? 'text-primary-600' : 'text-gray-400'}`} />
              <span className={`ml-3 transition-opacity duration-300
                ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}