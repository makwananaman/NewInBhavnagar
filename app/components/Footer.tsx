import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NewInBhavnagar</h3>
            <p className="text-gray-300">Discover the latest openings and best deals in Bhavnagar, Gujarat.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/discounts" className="text-gray-300 hover:text-white transition duration-300">Discounts</Link></li>
              <li><Link href="/business" className="text-gray-300 hover:text-white transition duration-300">For Businesses</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-300 mb-4">Follow us on social media for the latest updates:</p>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2023 NewInBhavnagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

