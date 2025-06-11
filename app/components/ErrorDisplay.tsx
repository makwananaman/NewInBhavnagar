import React from 'react'

export default function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="text-center py-20 text-red-600 text-lg font-semibold">
      {message}
    </div>
  )
}
