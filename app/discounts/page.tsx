import Link from 'next/link'
import { Tag, Search, Filter, ArrowRight } from 'lucide-react'

const DiscountPage = () => {
  // Mock data for discounts
  const discounts = [
    { id: 1, business: "Spice Haven Restaurant", discount: "20% off on all main courses", code: "SPICE20", category: "Dining" },
    { id: 2, business: "TechGenius Electronics", discount: "Free screen protector with any smartphone purchase", code: "FREESCREEN", category: "Shopping" },
    { id: 3, business: "Fitness First Gym", discount: "50% off on annual membership", code: "FIT50", category: "Health" },
    { id: 4, business: "Bookworm's Paradise", discount: "Buy 2 books, get 1 free", code: "BOOK3FOR2", category: "Shopping" },
    { id: 5, business: "Glamour Beauty Salon", discount: "30% off on all services for new customers", code: "NEWGLOW30", category: "Beauty" },
    { id: 6, business: "Green Grocers", discount: "10% off on organic produce", code: "ORGANIC10", category: "Grocery" },
  ]

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-12 text-gray-800">Discounts in Bhavnagar</h1>
      
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search discounts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-seagreen-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button className="bg-seagreen-100 text-seagreen-700 px-4 py-2 rounded-full inline-flex items-center hover:bg-seagreen-200 transition duration-300">
          <Filter size={18} className="mr-2" /> Filter Discounts
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {discounts.map((discount) => (
          <div key={discount.id} className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
            <span className="inline-block bg-seagreen-100 text-seagreen-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">{discount.category}</span>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{discount.business}</h2>
            <p className="text-gray-600 mb-4">{discount.discount}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center bg-seagreen-50 px-4 py-2 rounded-full">
                <Tag className="h-5 w-5 text-seagreen-500 mr-2" />
                <span className="font-semibold text-seagreen-700">{discount.code}</span>
              </div>
              <Link href={`/discount/${discount.id}`} className="text-seagreen-600 hover:text-seagreen-700 font-semibold">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/all-discounts" className="bg-seagreen-500 text-white px-6 py-3 rounded-full hover:bg-seagreen-600 transition duration-300 inline-flex items-center">
          View All Discounts <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  )
}

export default DiscountPage

