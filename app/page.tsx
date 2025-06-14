'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, TrendingUp, Users, MapPin } from 'lucide-react'
import Link from 'next/link'
import AnimatedElement from './components/AnimatedElement'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Update {
  icon: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface ImageModalProps {
  update: Update;
  onClose: () => void;
}

export default function Home() {
  const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)

  // Image loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Image modal
  const ImageModal = ({ update, onClose }: ImageModalProps) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={update.image}
          alt={update.title}
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-400/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
                #ExploreNewInBhavnagar
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your Guide to
                <span className="block text-primary-600">Bhavnagar City</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Discover local gems, stay updated with city events, and connect with the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-6 py-3 text-white font-medium">
                  <span className="absolute inset-0 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors"></span>
                  <span className="relative flex items-center gap-2">
                    Explore Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group relative px-6 py-3 text-gray-900 dark:text-white font-medium">
                  <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"></span>
                  <span className="relative">Watch Video</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-100 dark:bg-primary-900/50 rounded-full blur-3xl absolute -top-1/2 -right-1/2 w-full"></div>
              {/* Add hero image here */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-sm ml-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popular Spots</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Discover trending locations</p>
                  </div>
                </div>
                {popularSpots.map((spot, index) => (
                  <div key={index} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{spot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Explore by Category
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Find exactly what you're looking for
              </p>
            </div>
            <div className="flex gap-2">
              {['All', 'Food', 'Culture', 'Events'].map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${index === 0 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 p-6 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                <div className="mb-4">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Latest Updates
              </h2>
              <div className="space-y-6">
                {updates.map((update, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => setSelectedUpdate(update)}
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={update.image}
                        alt={update.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {update.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 dark:text-white mt-1 mb-2">
                        {update.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {update.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {event.location}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>🎟️ {event.price}</span>
                        <span>👥 {event.attendees} attending</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedUpdate && (
          <ImageModal update={selectedUpdate} onClose={() => setSelectedUpdate(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}

const popularSpots = [
  "Takhteshwar Temple",
  "Victoria Park",
  "Barton Library",
  "Gandhi Smriti"
]

const categories = [
  {
    icon: "🍽️",
    title: "Food & Dining",
    description: "Explore restaurants, cafes, and local cuisine",
    image: "https://source.unsplash.com/800x600/?art-gallery"
  },
  {
    icon: "🎨",
    title: "Arts & Culture",
    description: "Discover galleries, museums, and cultural events",
    image: "https://source.unsplash.com/800x600/?art-gallery"
  },
  {
    icon: "🏛️",
    title: "Heritage",
    description: "Visit historical sites and monuments"
  },
  {
    icon: "🎉",
    title: "Entertainment",
    description: "Find events, shows, and activities"
  }
]

const updates = [
  {
    icon: "🎨",
    category: "Culture",
    title: "New Art Gallery Opening",
    description: "Experience modern art at the city's newest gallery space",
    image: "/images/art.jpg"
  },
  {
    icon: "🍽️",
    category: "Food",
    title: "Food Festival 2024",
    description: "Annual food festival featuring local cuisines",
    image: "/images/food-festival.jpg"
  },
  {
    icon: "🏛️",
    category: "Heritage",
    title: "Heritage Walk Tours",
    description: "Weekly guided tours of historical sites",
    image: "/images/heritage.png"
  }
]

const events = [
  {
    title: "Cultural Night 2024",
    location: "City Center Amphitheater",
    date: "Mar 15",
    price: "Free Entry",
    attendees: "120"
  },
  {
    title: "Food & Music Festival",
    location: "Victoria Park",
    date: "Mar 18",
    price: "₹200",
    attendees: "250"
  },
  {
    title: "Heritage Photography Walk",
    location: "Old City",
    date: "Mar 20",
    price: "₹100",
    attendees: "45"
  }
]