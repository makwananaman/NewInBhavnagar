'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Store, Tag, Info, Menu, X, Bell, User } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/businesses', icon: Store, label: 'Businesses' },
    { href: '/discounts', icon: Tag, label: 'Discounts' },
    { href: '/about', icon: Info, label: 'About' },
    { href: '/contact', icon: Info, label: 'Contact-Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
            NewInBhavnagar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${pathname === href 
                    ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Notification, Theme Toggle and Profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <Link 
              href="/login"
              className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2">
            {links.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${pathname === href 
                    ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

