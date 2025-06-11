'use client'
import { Share2 } from 'lucide-react'

interface Business {
  id: string
  name: string
  description: string
}

export default function ShareButton({ business }: { business: Business }) {
  const shareUrl = `https://yourdomain.com/business/${business.id}`
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: business.name,
          text: business.description,
          url: shareUrl
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  )
} 