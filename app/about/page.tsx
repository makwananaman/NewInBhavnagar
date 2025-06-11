import Link from 'next/link'
import { ArrowRight, Users, Globe, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-primary-600">NewInBhavnagar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Your comprehensive guide to discovering and experiencing the vibrant city of Bhavnagar.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We strive to connect residents and visitors with the best of Bhavnagar, making it easier to discover local businesses, events, and experiences that make our city unique.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform serves as a bridge between the community and local establishments, fostering growth and cultural exchange.
              </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://source.unsplash.com/800x600/?city-life"
                alt="City Life"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}

const team = [
  {
    name: "Raj Patel",
    role: "Founder & CEO",
    description: "Passionate about connecting people with local experiences.",
    image: "https://source.unsplash.com/800x800/?portrait-man-1"
  },
  {
    name: "Priya Shah",
    role: "Community Manager",
    description: "Expert in building and nurturing local communities.",
    image: "https://source.unsplash.com/800x800/?portrait-woman-1"
  },
  {
    name: "Amit Desai",
    role: "Content Director",
    description: "Curates the best local content and experiences.",
    image: "https://source.unsplash.com/800x800/?portrait-man-2"
  }
]

