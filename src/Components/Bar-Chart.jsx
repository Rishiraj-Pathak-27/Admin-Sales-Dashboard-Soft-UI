import React, { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUp, ChevronDown, ChevronRight } from "lucide-react";

const BarChartComponent = () => {
  const [isChartDropdownOpen, setIsChartDropdownOpen] = useState(false);
  const [chartTimeframe, setChartTimeframe] = useState("Last 7 Days");
  const chartDropdownRef = useRef(null);


  const weeklyData = [
    { day: "01", value: 30, background: 100 },
    { day: "02", value: 45, background: 100 },
    { day: "03", value: 60, background: 100 },
    { day: "04", value: 50, background: 100 },
    { day: "05", value: 70, background: 100 },
    { day: "06", value: 90, background: 100 },
    { day: "07", value: 40, background: 100 },
  ];

 
  const timePeriodOptions = [
    "Yesterday",
    "Today",
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
    "Custom...",
  ];

  return (
    <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white">$45,385</h2>
          <p className="text-slate-300 text-sm">Sales this week</p>
        </div>
        <div className="flex items-center gap-1 -mt-5">
          <ArrowUp size={22} className="text-green-400" />
          <span className="text-green-400 text-xl">12.5%</span>
        </div>
      </div>

      <div className="h-96 mb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} margin={{ top: 0, right: 30, left: 20, bottom: -10 }}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "white",
              }}
              formatter={(value) => [value, "Users"]}
              labelFormatter={(label) => `${label} Feb`}
            />
            <Bar dataKey="background" fill="#64748b" radius={[6, 6, 6, 6]} maxBarSize={18} />
            <Bar dataKey="value" fill="#C400A3" radius={[8, 8, 8, 8]} maxBarSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-600">
        <div className="relative" ref={chartDropdownRef}>
          <button
            onClick={() => setIsChartDropdownOpen(!isChartDropdownOpen)}
            className="flex items-center gap-2 mt-2 text-slate-300 hover:text-white transition-colors duration-200"
          >
            <span className="text-sm mb-1">{chartTimeframe}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {isChartDropdownOpen && (
            <div className="absolute bottom-full mb-2 left-0 mt-0 bg-slate-700 rounded-lg shadow-lg py-1 z-10 w-40">
              {timePeriodOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-600 hover:text-white cursor-pointer transition-colors duration-150"
                  onClick={() => {
                    setChartTimeframe(option);
                    setIsChartDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-white hover:bg-slate-700 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg">
          <span className="text-sm font-medium">SALES REPORT</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
