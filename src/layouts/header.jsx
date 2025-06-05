"use client";

import { useTheme } from "@/hooks/use-theme";
import {
  Bell,
  ChevronsLeft,
  Moon,
  Search,
  Sun,
  Grid3X3,
  Eye,
  User,
  Settings,
  Inbox,
  DollarSign,
  CreditCard,
  LogOut,
  ShoppingCart,
  LayoutGrid,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import profile1 from "@/assets/p1.png";
import profile2 from "@/assets/p2.png";
import profile3 from "@/assets/p3.png";
import profile4 from "@/assets/p4.png";
import profile5 from "@/assets/p5.png";


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
];

// Mock apps data
const apps = [
  { name: "Sales", icon: DollarSign },
  { name: "Users", icon: User },
  { name: "Inbox", icon: Inbox },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Products", icon: Grid3X3 },
  { name: "Pricing", icon: DollarSign },
  { name: "Billing", icon: CreditCard },
  { name: "Logout", icon: LogOut },
];

export const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notificationRef = useRef(null);
  const appsRef = useRef(null);
  const profileRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (appsRef.current && !appsRef.current.contains(event.target)) {
        setShowApps(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`relative z-10 flex h-[60px] items-center justify-between bg-white dark:bg-gray-900 px-2 transition-all mb-4  ${
        collapsed ? "w-full max-w-full" : "max-w-[1250px] mx-auto"
      }`}
    >
      <div className="flex items-center gap-x-2 ml-4 mt-2">
        <button
          className="btn-ghost size-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className="relative flex items-center w-[320px] ml-4 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 border-2 border-gray-200 dark:border-gray-700 transition-colors"
          style={{}}
        >
          <Search size={20} className="text-slate-400 mr-2" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full bg-transparent text-slate-900 dark:text-slate-50 outline-0 placeholder:text-slate-400"
            style={{}}
            onFocus={(e) => {
              e.target.parentNode.style.boxShadow = "0 0 1px 1.5px #ff99ff";
              e.target.parentNode.style.borderColor = "#ff00ff";
            }}
            onBlur={(e) => {
              e.target.parentNode.style.boxShadow = "";
              e.target.parentNode.style.borderColor = "";
            }}
          />
        </div>
      </div>

     
      <div className="flex items-center gap-x-1 pr-4 flex-1 justify-end mt-2">
       

     
        <div className="relative" ref={appsRef}>
          <button
            className="btn-ghost size-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => {
              setShowApps(!showApps);
              setShowNotifications(false);
              setShowProfile(false);
            }}
          >
            <LayoutGrid size={20} />
          </button>

          {showApps && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-4 z-50">
              <div className="px-4 pb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Apps
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 px-4">
                {apps.map((app, index) => {
                  const IconComponent = app.icon;
                  return (
                    <button
                      key={index}
                      className="flex flex-col items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-2">
                        <IconComponent
                          size={20}
                          className="text-gray-600 dark:text-gray-300"
                        />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {app.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            className="btn-ghost size-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowApps(false);
              setShowProfile(false);
            }}
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-4 z-50">
              <div className="px-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Notifications
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
                        <p className="text-sm text-gray-900 dark:text-white">
                          <span className="font-semibold">
                            {notification.user}
                          </span>{" "}
                          {notification.message}
                        </p>
                        <p className="text-xs text-pink-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Eye size={16} className="mr-2" />
                  View all
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            className="size-10 overflow-hidden rounded-full hover:ring-2 hover:ring-blue-500 transition-all"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
              setShowApps(false);
            }}
          >
            <img
              src={profile1 || "/placeholder.svg"}
              alt="profile image"
              className="size-full object-cover"
            />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Settings
              </button>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Buy Now Button - rightmost */}
      <div className="flex items-center ml-2">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center space-x-2">
          <svg
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.25 14h10.5l1.375-8H6.375L5.25 2H2v2h2l3.6 9.59-1.35 2.44C5.52 16.37 6.48 18 8 18h12v-2H8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49-1.72-1-3.6 6.5H7.59l-.34-.75z" />
          </svg>
          <span>Buy now</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
