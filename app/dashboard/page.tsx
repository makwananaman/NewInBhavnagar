'use client'
import { useState, useEffect } from 'react'
import { BarChart, Users, Star, MessageSquare } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Business Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Views</h3>
          <div className="flex items-center mt-2">
            <Users className="text-primary-500 mr-2" />
            <span className="text-2xl font-bold">1,234</span>
          </div>
        </div>
        {/* Add more stats cards */}
      </div>

      {/* Add charts, reviews list, etc. */}
    </div>
  )
} 