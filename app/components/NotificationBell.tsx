'use client'
import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([])
  const [unread, setUnread] = useState(0)

  return (
    <div className="relative">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell className="w-6 h-6" />
        {unread > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </div>
  )
} 