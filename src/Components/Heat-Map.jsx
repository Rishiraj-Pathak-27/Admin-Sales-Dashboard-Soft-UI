import React from "react";
import Plot from "react-plotly.js";

const MapChart = ({ mapData, mapLayout, selectedMapCountry, handleCountrySelect, plotContainerRef }) => {
  return (
    <div className="relative bg-gray-50 rounded-lg p-4 mb-6 h-96" ref={plotContainerRef}>
      {typeof window !== "undefined" && (
        <Plot
          data={mapData}
          layout={mapLayout}
          config={{
            displayModeBar: true,
            responsive: true,
          }}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          onClick={handleCountrySelect}
        />
      )}

      {/* Country Info Overlay */}
      <div className="absolute top-48 left-1 bg-white rounded-lg shadow-lg p-4 border max-w-xs z-10">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-6 h-4 rounded-sm flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: "#ec4899" }}
          >
            {selectedMapCountry.code?.substring(0, 2)}
          </div>
          <span className="font-medium text-gray-900">{selectedMapCountry.name}</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Visitors:</span>
            <span className="font-bold text-gray-900">
              {selectedMapCountry.sessions?.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Change:</span>
            <span className="font-bold text-gray-900">{selectedMapCountry.change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapChart;
