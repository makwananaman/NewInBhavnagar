'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About New In Bhavnagar</h1>
          <p className="text-lg md:text-xl text-primary-100">
            Discover the heart of Bhavnagar through its finest local businesses, services and more — all in one place.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're on a mission to support local growth by showcasing trusted and verified businesses in Bhavnagar.
            Whether you're a resident or visitor, find everything you need with confidence.
          </p>
        </motion.div>

        {/* Animated Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Verified Listings',
              desc: 'Only genuine, curated businesses appear on our platform.',
              icon: '/icons/check.svg'
            },
            {
              title: 'Community Driven',
              desc: 'Your feedback helps improve and expand the network.',
              icon: '/icons/community.svg'
            },
            {
              title: 'Promoting Local Economy',
              desc: 'We help customers and businesses grow together.',
              icon: '/icons/growth.svg'
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Meet the Creator</h2>
          <div className="flex flex-col items-center">
            <Image
              src="/images/founder.jpg"
              alt="Founder"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Naman Makwana</h3>
            <p className="text-gray-500 dark:text-gray-400">Founder & Developer of New In Bhavnagar</p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-600 text-white p-10 rounded-2xl shadow-lg inline-block"
        >
          <h2 className="text-2xl font-bold mb-4">Want your business featured?</h2>
          <p className="mb-6 text-primary-100">
            We’re open to new listings. Submit your business and get discovered!
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 font-semibold px-6 py-2 rounded-full hover:bg-primary-100"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
