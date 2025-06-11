import React, { useRef } from 'react'
import { Bell, Eye } from 'lucide-react'

import profile1 from "@/assets/p1.png";
import profile2 from "@/assets/p2.png";
import profile3 from "@/assets/p3.png";
import profile4 from "@/assets/p4.png";
import profile5 from "@/assets/p5.png";

const NotificationSec = ({ showNotifications, setShowNotifications, setShowApps, setShowProfile }) => {
  const notificationRef = useRef(null)

  const notifications = [
    {
      id: 1,
      user: "Bonnie Green",
      message: "Hey, what's up? All set for the presentation?",
      time: "a few moments ago",
      avatar: profile3,
      type: "message",
      badge: "9",
    },
    {
      id: 2,
      user: "Jese leos",
      message: "and 5 others started following you.",
      time: "10 minutes ago",
      avatar: profile2,
      type: "follow",
      badge: "+",
    },
    {
      id: 3,
      user: "Joseph Mcfall",
      message: "and 141 others love your story. See it and view more stories.",
      time: "44 minutes ago",
      avatar: profile1,
      type: "like",
      badge: "♥",
    },
    {
      id: 4,
      user: "Leslie Livingston",
      message: "mentioned you in a comment: @bonnie.green what do you say?",
      time: "1 hour ago",
      avatar: profile4,
      type: "mention",
      badge: "@",
    },
    {
      id: 5,
      user: "Robert Brown",
      message:
        "posted a new video: Glassmorphism - learn how to implement the new design trend.",
      time: "3 hours ago",
      avatar: profile5,
      type: "video",
      badge: "▶",
    },
  ]

  return (
    <div className="relative" ref={notificationRef}>
      <button
        className="btn-ghost size-11 hover:bg-gray-100 rounded-lg transition-colors relative"
        onClick={() => {
          setShowNotifications(!showNotifications)
          setShowApps(false)
          setShowProfile(false)
        }}
      >
        <Bell size={20} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      {showNotifications && (
        <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
          <div className="px-4 pb-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={notification.avatar || "/placeholder.svg"}
                      alt={notification.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {notification.badge}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{notification.user}</span>{" "}
                      {notification.message}
                    </p>
                    <p className="text-xs text-pink-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pt-3 border-t border-gray-200">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <Eye size={16} className="mr-2" />
              View all
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationSec
