"use client";

import { useState, useRef, useEffect } from "react";
import BarChartComponent from "../components/Bar-Chart";
import MapChart from "../components/Heat-Map";
import PieChartComponent from "../components/Pie-Chart";

import {
  DollarSign,
  ArrowUp,
  ArrowDown,
  ShoppingCart,
  Earth,
  User,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import flag1 from "@/assets/3.png";
import flag2 from "@/assets/7.png";
import flag3 from "@/assets/8.png";
import flag4 from "@/assets/9.png";
import flag5 from "@/assets/5.png";
import flag6 from "@/assets/11.png";
import flag7 from "@/assets/12.png";

import profile1 from "@/assets/p6.png";
import profile2 from "@/assets/p3.png";
import profile3 from "@/assets/p7.png";
import profile4 from "@/assets/p8.png";
import profile5 from "@/assets/p9.png";
import profile6 from "@/assets/p10.png";
import profile7 from "@/assets/p11.png";
import profile8 from "@/assets/p12.png";
import profile9 from "@/assets/p13.png";



// Sales by country data with flag images
const salesByCountryData = [
  {
    country: "United States",
    flag: flag1,
    sales: 9600,
    value: "$756,600",
  },
  {
    country: "Canada",
    flag: flag2,
    sales: 8340,
    value: "$545,760",
  },
  {
    country: "France",
    flag: flag3,
    sales: 6700,
    value: "$487,560",
  },
  {
    country: "Australia",
    flag: flag4,
    sales: 3900,
    value: "$380,670",
  },
  {
    country: "Italy",
    flag: flag5,
    sales: 2470,
    value: "$230,900",
  },
  {
    country: "India",
    flag: flag6,
    sales: 700,
    value: "$47,480",
  },
  {
    country: "Japan",
    flag: flag7,
    sales: 300,
    value: "$7,200",
  },
];

// User signups data
const userSignupsData = [
  {
    id: 1,
    email: "name@company.com",
    country: "United States",
    role: "Author",
    status: "COMPLETED",
    flag: profile1,
    firstName: "Neil",
    lastName: "Sims",
    phone: "+(1)234567890",
    department: "Development",
    company: "123456",
  },
  {
    id: 2,
    email: "name@company.com",
    country: "United States",
    role: "Author",
    status: "COMPLETED",
    flag: profile2,
    firstName: "Bonnie",
    lastName: "Green",
    phone: "+(1)234567891",
    department: "Marketing",
    company: "123456",
  },
  {
    id: 3,
    email: "name@company.com",
    country: "Canada",
    role: "Customer",
    status: "PENDING",
    flag: profile3,
    firstName: "Helene",
    lastName: "Engels",
    phone: "+(1)234567892",
    department: "Sales",
    company: "123456",
  },
  {
    id: 4,
    email: "name@company.com",
    country: "United States",
    role: "Admin",
    status: "COMPLETED",
    flag: profile4,
    firstName: "Jese",
    lastName: "Leos",
    phone: "+(1)234567893",
    department: "HR",
    company: "123456",
  },
  {
    id: 5,
    email: "name@company.com",
    country: "Australia",
    role: "Author",
    status: "COMPLETED",
    flag: profile5,
    firstName: "Joseph",
    lastName: "Mcfall",
    phone: "+(61)234567894",
    department: "Development",
    company: "123456",
  },
  {
    id: 6,
    email: "name@company.com",
    country: "Germany",
    role: "Editor",
    status: "COMPLETED",
    flag: profile6,
    firstName: "Lana",
    lastName: "Byrd",
    phone: "+(49)234567895",
    department: "Content",
    company: "123456",
  },
  {
    id: 7,
    email: "name@company.com",
    country: "United States",
    role: "Author",
    status: "PENDING",
    flag: profile7,
    firstName: "Leslie",
    lastName: "Livingston",
    phone: "+(1)234567896",
    department: "Development",
    company: "123456",
  },
  {
    id: 8,
    email: "name@company.com",
    country: "United States",
    role: "Admin",
    status: "COMPLETED",
    flag: profile8,
    firstName: "Michael",
    lastName: "Gough",
    phone: "+(1)234567897",
    department: "Operations",
    company: "123456",
  },
];

// Country session data for choropleth map
const countrySessionData = [
  { country: "USA", code: "USA", sessions: 45000, change: "+8%" },
  { country: "Brazil", code: "BRA", sessions: 40016, change: "+5%" },
  { country: "Canada", code: "CAN", sessions: 25000, change: "+3%" },
  { country: "Germany", code: "DEU", sessions: 20000, change: "+2%" },
  { country: "France", code: "FRA", sessions: 18000, change: "+4%" },
  { country: "Australia", code: "AUS", sessions: 15000, change: "+1%" },
  { country: "India", code: "IND", sessions: 12000, change: "+7%" },
  { country: "Japan", code: "JPN", sessions: 8000, change: "+2%" },
  { country: "United Kingdom", code: "GBR", sessions: 22000, change: "+3%" },
  { country: "China", code: "CHN", sessions: 30000, change: "+6%" },
  { country: "Russia", code: "RUS", sessions: 17000, change: "+2%" },
  { country: "Mexico", code: "MEX", sessions: 9000, change: "+4%" },
];

// Latest customers data
const latestCustomersData = [
  {
    id: 1,
    name: "Neil Sims",
    email: "email@flowbite.com",
    avatar: profile1,
    amount: "$320",
  },
  {
    id: 2,
    name: "Micheal Gough",
    email: "email@flowbite.com",
    avatar: profile8,
    amount: "$320",
  },
  {
    id: 3,
    name: "Helene Engels",
    email: "email@flowbite.com",
    avatar: profile3,
    amount: "$320",
  },
  {
    id: 4,
    name: "Leslie Livingston",
    email: "email@flowbite.com",
    avatar: profile7,
    amount: "$320",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "email@flowbite.com",
    avatar: profile9,
    amount: "$320",
  },
  {
    id: 6,
    name: "Bonnie Green",
    email: "email@flowbite.com",
    avatar: profile2,
    amount: "$3467",
  },
  {
    id: 7,
    name: "Michael Gough",
    email: "email@flowbite.com",
    avatar: profile8,
    amount: "$67",
  },
  {
    id: 8,
    name: "Thomes Lean",
    email: "email@flowbite.com",
    avatar: profile4,
    amount: "$2367",
  },
  {
    id: 9,
    name: "Lana Byrd",
    email: "email@flowbite.com",
    avatar: profile6,
    amount: "$367",
  },
];

// Time period options for dropdown
const timePeriodOptions = [
  "Yesterday",
  "Today",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Custom...",
];

// Edit User Modal Component
const EditUserModal = ({ user, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    company: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        department: user.department || "",
        company: user.company || "",
        currentPassword: "",
        newPassword: "",
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {  
    onSave({ ...user, ...formData });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Edit user</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Bonnie"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="example@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="e.g. +(12)3456 789"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => handleInputChange("department", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Development"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="123456"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={formData.currentPassword}
              onChange={(e) =>
                handleInputChange("currentPassword", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={formData.newPassword}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Save all
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Component() {
  const [chartTimeframe, setChartTimeframe] = useState("Last 7 days");
  const [countryTimeframe, setCountryTimeframe] = useState("Last 7 days");
  const [sessionsTimeframe, setSessionsTimeframe] = useState("Last 7 days");
  const [isChartDropdownOpen, setIsChartDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSessionsDropdownOpen, setIsSessionsDropdownOpen] = useState(false);
  const [selectedMapCountry, setSelectedMapCountry] = useState({
    code: "BRA",
    name: "Brazil",
    sessions: 40016,
    change: "+5%",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [mapLayout, setMapLayout] = useState({
    geo: {
      showframe: false,
      showcoastlines: true,
      projection: {
        type: "mercator",
      },
      bgcolor: "rgba(0,0,0,0)",
    },
    margin: { t: 0, r: 0, b: 0, l: 0 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    dragmode: "zoom",
    width: 600,
    height: 300,
    autosize: true,
  });

  const [latestCustomersTimeframe, setLatestCustomersTimeframe] =
    useState("Last 7 days");
  const [acquisitionTimeframe, setAcquisitionTimeframe] =
    useState("Last 7 days");
  const [isLatestCustomersDropdownOpen, setIsLatestCustomersDropdownOpen] =
    useState(false);
  const [isAcquisitionDropdownOpen, setIsAcquisitionDropdownOpen] =
    useState(false);

  const chartDropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const sessionsDropdownRef = useRef(null);
  const plotContainerRef = useRef(null);
  const [isUserSignupsDropdownOpen, setIsUserSignupsDropdownOpen] =
    useState(false);
  const userSignupsDropdownRef = useRef(null);

  const latestCustomersDropdownRef = useRef(null);
  const acquisitionDropdownRef = useRef(null);

  // Adjust map size on window resize
  useEffect(() => {
    const handleResize = () => {
      if (plotContainerRef.current) {
        const width = plotContainerRef.current.clientWidth;
        const height = plotContainerRef.current.clientHeight;
        setMapLayout((prev) => ({
          ...prev,
          width,
          height,
        }));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        chartDropdownRef.current &&
        !chartDropdownRef.current.contains(event.target)
      ) {
        setIsChartDropdownOpen(false);
      }
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsCountryDropdownOpen(false);
      }
      if (
        sessionsDropdownRef.current &&
        !sessionsDropdownRef.current.contains(event.target)
      ) {
        setIsSessionsDropdownOpen(false);
      }
      if (
        userSignupsDropdownRef.current &&
        !userSignupsDropdownRef.current.contains(event.target)
      ) {
        setIsUserSignupsDropdownOpen(false);
      }
      if (
        latestCustomersDropdownRef.current &&
        !latestCustomersDropdownRef.current.contains(event.target)
      ) {
        setIsLatestCustomersDropdownOpen(false);
      }
      if (
        acquisitionDropdownRef.current &&
        !acquisitionDropdownRef.current.contains(event.target)
      ) {
        setIsAcquisitionDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleSaveUser = (updatedUser) => {
    // Here you would typically update the user in your data source
    console.log("Saving user:", updatedUser);
  };

  const handleCountrySelect = (data) => {
    if (data && data.points && data.points[0]) {
      const point = data.points[0];
      const countryCode = point.location;
      const countryData = countrySessionData.find(
        (c) => c.code === countryCode
      );

      if (countryData) {
        setSelectedMapCountry({
          code: countryData.code,
          name: countryData.country,
          sessions: countryData.sessions,
          change: countryData.change,
        });
      }
    }
  };

  // Prepare data for Plotly choropleth map
  const mapData = [
    {
      type: "choropleth",
      locationmode: "ISO-3",
      locations: countrySessionData.map((item) => item.code),
      z: countrySessionData.map((item) => item.sessions),
      text: countrySessionData.map(
        (item) => `${item.country}: ${item.sessions.toLocaleString()} sessions`
      ),
      colorscale: [
        [0, "#f9a8d4"],
        [0.2, "#f472b6"],
        [0.4, "#ec4899"],
        [0.6, "#db2777"],
        [0.8, "#be185d"],
        [1, "#9d174d"],
      ],
      autocolorscale: false,
      reversescale: false,
      marker: {
        line: {
          color: "#ffffff",
          width: 0.5,
        },
      },
      colorbar: {
        title: "Sessions",
        thickness: 15,
        len: 0.5,
        y: 0.5,
        yanchor: "middle",
        outlinewidth: 0,
      },
      hoverinfo: "text",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 ml-8 -mt-12 max-w-[1300px] px-1 bg-white min-h-screen py-8">
      {/* Top 4 Cards with New Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto w-full">
        {/* Today's Money Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <DollarSign size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">$3,600</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">
                    +16%
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 ">Today's Money</p>
            </div>
          </div>
        </div>

        {/* Hide scrollbar globally except where we want it */}
        <style jsx global>{`
          html,
          body {
            scrollbar-width: !important;
            -ms-overflow-style: !important;
          }
          ::-webkit-scrollbar {
            display: none !important;
          }
          .allow-scroll::-webkit-scrollbar {
            display: block !important;
            height: 8px;
          }
          .allow-scroll {
            scrollbar-width: thin !important;
            -ms-overflow-style: auto !important;
          }
          .allow-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .allow-scroll::-webkit-scrollbar-thumb {
            background: #c5c5c5;
            border-radius: 10px;
          }
          .allow-scroll::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}</style>

        {/* Today's Users Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Earth size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">2,300</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">
                    +3%
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Today's Users</p>
            </div>
          </div>
        </div>

        {/* New Clients Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <User size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">+3,462</p>
                <div className="flex items-center gap-0 ml-9 mt-1">
                  <ArrowDown size={20} className="text-red-500" />
                  <span className="text-xl font-medium text-red-500">-2%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">New Clients</p>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="bg-white rounded-2xl h-24 mt-5 p-6 shadow-sm border border-gray-100 shadow-[0_8px_24px_0_rgba(236,72,153,0.10)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0">
                <p className="text-2xl font-bold text-gray-900">$83,430</p>
                <div className="flex items-center gap-0 ml-1 mt-1">
                  <ArrowUp size={20} className="text-green-500" />
                  <span className="text-xl font-medium text-green-500">
                    +5.34%
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Sales</p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">

        {/*Bar Chart Section*/}
        
        <BarChartComponent />

        {/* Sales by Country Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Sales by Country
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            This is a list of latest country
          </p>

          {/* Table Headers */}
          <div className="grid grid-cols-3 gap-4 mb-4 pb-3 border-b border-gray-200">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              COUNTRY
            </div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">
              SALES
            </div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">
              VALUE
            </div>
          </div>

          {/* Country Data */}
          <div className="space-y-0">
            {salesByCountryData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 overflow-hidden flex items-center justify-center">
                    <img
                      src={item.flag || "/placeholder.svg"}
                      alt={item.country}
                      className="w-6 h-4 object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="text-sm text-gray-900">{item.country}</div>
                </div>
                <div className="text-center text-sm font-bold text-gray-900">
                  {item.sales.toLocaleString()}
                </div>
                <div className="text-center text-sm font-bold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section with dropdown */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-4">
            <div className="relative" ref={countryDropdownRef}>
              <button
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <span className="text-sm">{countryTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCountryDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 w-40">
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setCountryTimeframe(option);
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">SALES REPORT</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: User Signups and Sessions by Country */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {/* User Signups Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              User Signups
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            This is a list of latest users
          </p>

          {/* Table with horizontal scroll */}
          <div className="overflow-x-auto allow-scroll">
            <div className="min-w-[800px]">
              {/* Table Headers */}
              <div className="grid grid-cols-6 gap-4 mb-1 pb-3 border-b border-gray-300">
                <div className="text-xs font-medium text-gray-400 ml-8 uppercase tracking-wider">
                  NAME
                </div>
                <div className="text-xs font-medium text-gray-400 ml-10 uppercase tracking-wider">
                  EMAIL
                </div>
                <div className="text-xs font-medium text-gray-400 uppercase ml-8 tracking-wider">
                  COUNTRY
                </div>
                <div className="text-xs font-medium text-gray-400 uppercase ml-2 tracking-wider">
                  ROLE
                </div>
                <div className="text-xs font-medium text-gray-400 -ml-6 uppercase tracking-wider">
                  STATUS
                </div>
                <div className="text-xs font-medium text-gray-400 -ml-6 uppercase tracking-wider">
                  EDIT
                </div>
              </div>

              {/* User Data */}
              <div className="space-y-0 max-h-100 overflow-y-auto">
                {userSignupsData.map((user, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-300 last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={user.flag}
                          alt={`${user.firstName} ${user.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                    <div className="text-sm font-medium ml-5 text-gray-900">
                      {user.country}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.role}
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs -ml-12 font-bold uppercase tracking-wider ${
                          user.status === "COMPLETED"
                            ? "bg-green-100 text-green-800"
                            : "bg-pink-100 text-pink-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="flex items-center -ml-12 gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Edit user
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination and Bottom Section */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
            {/* Pagination Controls */}

            {/* Time Period and View All */}
            <div className="flex items-center gap-4">
              <div className="relative" ref={userSignupsDropdownRef}>
                <button
                  onClick={() =>
                    setIsUserSignupsDropdownOpen(!isUserSignupsDropdownOpen)
                  }
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <span className="text-sm">Last 7 days</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isUserSignupsDropdownOpen && (
                  <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10 w-52">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      Sep 16, 2021 - Sep 22, 2021
                    </div>
                    {timePeriodOptions.map((option, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setIsUserSignupsDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="flex items-center text-right ml-[285px] gap-2 text-gray-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
                <span className="text-sm font-medium">VIEW ALL USERS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sessions by Country Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Sessions by country
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            View website visitors by hovering over the map
          </p>

        
          <MapChart
            mapData={mapData}
            mapLayout={mapLayout}
            selectedMapCountry={selectedMapCountry}
            handleCountrySelect={handleCountrySelect}
            plotContainerRef={plotContainerRef}
          />

        
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="relative" ref={sessionsDropdownRef}>
              <button
                onClick={() =>
                  setIsSessionsDropdownOpen(!isSessionsDropdownOpen)
                }
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <span className="text-sm">{sessionsTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isSessionsDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 w-40">
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setSessionsTimeframe(option);
                        setIsSessionsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">LOCATION OVERVIEW</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Latest Customers and Acquisition Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-0 gap-6 max-w-4xl mx-auto w-full">
        {/* Latest Customers Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Latest Customers
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>

          {/* Customer List */}
          <div className="space-y-4 mb-6">
            {latestCustomersData.map((customer, index) => (
              <div
                key={index}
                className="flex items-center border-b py-2 border-gray-200 justify-between "
              >
                <div className="flex items-center mb-1 gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={customer.avatar || "/placeholder.svg"}
                      alt={customer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {customer.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {customer.email}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {customer.amount}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section with dropdown */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="relative" ref={latestCustomersDropdownRef}>
              <button
                onClick={() =>
                  setIsLatestCustomersDropdownOpen(
                    !isLatestCustomersDropdownOpen
                  )
                }
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <span className="text-sm">{latestCustomersTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLatestCustomersDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10 w-52">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    Sep 16, 2021 - Sep 22, 2021
                  </div>
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setLatestCustomersTimeframe(option);
                        setIsLatestCustomersDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">SALES REPORT</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Acquisition Overview Section */}
        <div className="bg-white rounded-2xl p-6 w-[761px] shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Acquisition Overview
            </h3>
          </div>
          <PieChartComponent />

          {/* Bottom section with dropdown */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="relative" ref={acquisitionDropdownRef}>
              <button
                onClick={() =>
                  setIsAcquisitionDropdownOpen(!isAcquisitionDropdownOpen)
                }
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <span className="text-sm">{acquisitionTimeframe}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isAcquisitionDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10 w-52">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    Sep 16, 2021 - Sep 22, 2021
                  </div>
                  {timePeriodOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setAcquisitionTimeframe(option);
                        setIsAcquisitionDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium">ACQUISITION REPORT</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      <EditUserModal
        user={editingUser}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveUser}
      />
    </div>
  );
}