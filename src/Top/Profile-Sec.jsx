import React, { useRef } from 'react'
import profile1 from '@/assets/p1.png' // Update the path based on your project structure

const ProfileSec = ({ showProfile, setShowProfile, setShowNotifications, setShowApps }) => {
  const profileRef = useRef(null)

  return (
    <div className="relative" ref={profileRef}>
      <button
        className="size-10 overflow-hidden rounded-full hover:ring-2 hover:ring-blue-500 transition-all"
        onClick={() => {
          setShowProfile(!showProfile)
          setShowNotifications(false)
          setShowApps(false)
        }}
      >
        <img
          src={profile1 || "/placeholder.svg"}
          alt="profile image"
          className="size-full object-cover"
        />
      </button>

      {showProfile && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Profile
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Settings
          </button>
          <hr className="my-2 border-gray-200" />
          <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 transition-colors">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfileSec
