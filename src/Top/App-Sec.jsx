import React, { useRef } from "react";
import {
  LayoutGrid,
  DollarSign,
  User,
  Inbox,
  Settings,
  Grid3X3,
  CreditCard,
  LogOut,
} from "lucide-react";

const AppSec = ({
  showApps,
  setShowApps,
  setShowNotifications,
  setShowProfile,
}) => {
  const appsRef = useRef(null);


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

  return (
    <div className="relative" ref={appsRef}>
      <button
        className="btn-ghost size-11 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => {
          setShowApps(!showApps);
          setShowNotifications(false);
          setShowProfile(false);
        }}
      >
        <LayoutGrid size={20} />
      </button>

      {showApps && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
          <div className="px-4 pb-3">
            <h3 className="text-lg font-semibold text-gray-900">Apps</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 px-4">
            {apps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <IconComponent size={20} className="text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">{app.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppSec;
