'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    category: 'all',
    rating: 'all',
    priceRange: 'all'
  })

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search businesses..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      <div className="flex gap-4">
        <select 
          className="rounded-lg border p-2"
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="all">All Categories</option>
          <option value="restaurant">Restaurants</option>
          <option value="retail">Retail</option>
          <option value="services">Services</option>
        </select>
        {/* Add more filters as needed */}
      </div>
    </div>
  )
} 