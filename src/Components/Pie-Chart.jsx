import React from "react";
import Plot from "react-plotly.js";

const acquisitionData = [
  { name: "Organic Search", users: 5649, percentage: 30, color: "#06b6d4" },
  { name: "Referral", users: 4025, percentage: 24, color: "#3b82f6" },
  { name: "Direct", users: 3105, percentage: 18, color: "#06b6d4" },
  { name: "Social", users: 1251, percentage: 12, color: "#ec4899" },
  { name: "Other", users: 734, percentage: 9, color: "#8b5cf6" },
  { name: "Email", users: 456, percentage: 7, color: "#1f2937" },
];

const PieChartComponent = () => {
  const acquisitionPieData = [
    {
      type: "pie",
      values: acquisitionData.map((item) => item.percentage),
      labels: acquisitionData.map((item) => item.name),
      textinfo: "none",
      hoverinfo: "label+percent",
      marker: {
        colors: acquisitionData.map((item) => item.color),
      },
      hole: 0.4,
    },
  ];

  const acquisitionPieLayout = {
    showlegend: false,
    margin: { t: 0, r: 0, b: 0, l: 0 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    autosize: true,
    height: 240,
    width: 240,
  };

  return (
    <>

      <div className="flex justify-center mb-16">
        <div className="relative w-60 h-60">
          {typeof window !== "undefined" && (
            <Plot
              data={acquisitionPieData}
              layout={acquisitionPieLayout}
              config={{
                displayModeBar: false,
                responsive: true,
              }}
              style={{ width: "100%", height: "100%" }}
              useResizeHandler={true}
            />
          )}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-xs font-medium text-gray-900 uppercase tracking-wider">
          <span>TOP CHANNELS</span>
          <span className="mr-64">USERS</span>
        </div>
        {acquisitionData.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-bold mr-16 text-center text-gray-900">
                {item.users.toLocaleString()}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{item.percentage}%</span>
                <div className="w-36 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: item.color,
                      width: `${item.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PieChartComponent;
