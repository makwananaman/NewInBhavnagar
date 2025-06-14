'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Tag, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'

const discounts = [
  {
    id: 1,
    image: '/images/spice-haven.jpg',
    business: 'Spice Haven',
    description: '20% off on all main courses',
    code: 'SPICE20',
    category: 'Dining',
    logo: '/logos/spice-haven-logo.png'
  },
  {
    id: 2,
    image: '/images/tech-hub.jpg',
    business: 'TechGenius',
    description: 'Free screen protector with any smartphone purchase',
    code: 'FREESCREEN',
    category: 'Shopping',
    logo: '/logos/techgenius-logo.png'
  },
  {
    id: 3,
    image: '/images/gym.jpg',
    business: 'Fitness First',
    description: '50% off on annual membership',
    code: 'FIT50',
    category: 'Health',
    logo: '/logos/fitnessfirst-logo.png'
  },
]

const categories = ['All', 'Dining', 'Shopping', 'Health']

export default function DiscountPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return discounts.filter((d) => {
      const matchCat = category === 'All' || d.category === category
      const matchSearch =
        d.business.toLowerCase().includes(search.toLowerCase()) ||
        d.description.toLowerCase().includes(search.toLowerCase()) ||
        d.code.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-center text-4xl font-bold mt-10 mb-6 text-gray-800 dark:text-white">
        Discounts in Bhavnagar
      </h1>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search discounts..."
            className="w-full pl-10 pr-4 py-2 border rounded-full dark:bg-gray-800 dark:text-white border-gray-300 focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                category === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-800'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition"
          >
            <img src={d.image} alt={d.business} className="w-full h-44 object-cover group-hover:brightness-75 transition" />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300" />

            <div className="p-5 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <img src={d.logo} alt="Logo" className="w-8 h-8 rounded-full border" />
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">{d.business}</h2>
              </div>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                d.category === 'Dining'
                  ? 'bg-red-100 text-red-600'
                  : d.category === 'Shopping'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-green-100 text-green-600'
              }`}>
                {d.category}
              </span>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{d.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center bg-green-50 dark:bg-green-900 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-700 dark:text-white">{d.code}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(d.code)}
                    className="ml-2 text-xs text-green-600 hover:underline"
                  >
                    Copy
                  </button>
                </div>

                <Link
                  href={`/discount/${d.id}`}
                  className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline"
                >
                  View <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-12 text-gray-500 dark:text-gray-400">
          No discounts match your search or category.
        </p>
      )}
    </div>
  )
}
