import React from 'react'

export default function LoadingGrid({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-64 bg-gray-200 rounded-lg" />
      ))}
    </div>
  )
}
