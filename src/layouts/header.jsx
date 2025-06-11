"use client";

import {
  Bell,
  ChevronsLeft,
  Search,
  Grid3X3,
  Eye,
  User,
  Settings,
  Inbox,
  DollarSign,
  CreditCard,
  LogOut,
  LayoutGrid,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import AppSec from "../Top/App-Sec";
import NotificationSec from "../Top/Notification-Sec";
import ProfileSec from "../Top/Profile-Sec";

export const Header = ({ collapsed, setCollapsed }) => {
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
      className={`relative z-10 flex h-[60px] items-center justify-between bg-white px-2 transition-all mb-4  ${
        collapsed ? "w-full max-w-full" : "max-w-[1250px] mx-auto"
      }`}
    >
      <div className="flex items-center gap-x-2 ml-4 mt-2">
        <button
          className="btn-ghost size-10 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className="relative flex items-center w-[320px] ml-4 h-10 bg-gray-50 rounded-lg px-3 border-2 border-gray-200 transition-colors"
          style={{}}
        >
          <Search size={20} className="text-slate-400 mr-2" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-400"
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
        <AppSec
          showApps={showApps}
          setShowApps={setShowApps}
          setShowNotifications={setShowNotifications}
          setShowProfile={setShowProfile}
        />
        <NotificationSec
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          setShowApps={setShowApps}
          setShowProfile={setShowProfile}
        />


        <ProfileSec
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          setShowNotifications={setShowNotifications}
          setShowApps={setShowApps}
        />
   
      </div>

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
