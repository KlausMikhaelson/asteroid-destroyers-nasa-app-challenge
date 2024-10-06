import React, { useState, useEffect } from "react";
import { generateHabitabilityResponse } from "../../helpers/openai.helper"; // Import the helper function

const RightPanel = ({ selectedExoplanet }) => {
  const [loading, setLoading] = useState(false);
  const [isHabitable, setIsHabitable] = useState(null); // Null initially while waiting for the response

  useEffect(() => {
    // If an exoplanet is selected, fetch the habitability prediction
    if (selectedExoplanet) {
      setLoading(true); // Set loading to true
      generateHabitabilityResponse(selectedExoplanet)
        .then((response) => {
          // Parse response as a boolean ("true" or "false" as string to boolean)
          const parsedResponse = response.toLowerCase() === "true";
          setIsHabitable(parsedResponse);
        })
        .catch((error) => {
          console.error("Error fetching habitability:", error);
          setIsHabitable(null); // Handle error case
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the API call finishes
        });
    }
  }, [selectedExoplanet]);

  // Check if an exoplanet is selected
  if (!selectedExoplanet) {
    return (
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 w-[300px] h-[600px] backdrop-blur-md bg-slate-900/80 z-10 shadow-lg rounded-lg p-4 flex flex-col space-y-4 text-white">
        {/* Header */}
        <div className="text-lg font-semibold text-center">
          Exoplanet Details
        </div>
        {/* Placeholder for when no planet is selected */}
        <div className="text-center text-gray-400 text-sm">
          Select an exoplanet to see details
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 w-[300px] h-[600px] backdrop-blur-md bg-slate-900/80 z-10 shadow-lg rounded-lg p-4 flex flex-col space-y-2 text-white">
      {/* Header */}
      <div className="text-lg font-semibold text-center">
        {selectedExoplanet.pl_name} Details
      </div>

      {/* Exoplanet Information */}
      <div className="flex flex-col space-y-2 bg-blue-800/40 p-2 rounded-md text-sm flex-grow overflow-y-auto">
        <div className="flex justify-between">
          <span className="font-medium text-sm">Planet Name</span>
          <span className="text-sm">{selectedExoplanet.pl_name}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Host Name</span>
          <span className="text-sm">{selectedExoplanet.hostname}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Stars</span>
          <span className="text-sm">{selectedExoplanet.sy_snum}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Discovery Year</span>
          <span className="text-sm">{selectedExoplanet.disc_year}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Discovery Method</span>
          <span className="text-sm">{selectedExoplanet.discoverymethod}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Planet Radius (R<sub>⊕</sub>)</span>
          <span className="text-sm">{selectedExoplanet.pl_rade}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Stellar Radius (R<sub>☉</sub>)</span>
          <span className="text-sm">{selectedExoplanet.st_rad}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Effective Temp. (K)</span>
          <span className="text-sm">{selectedExoplanet.st_teff}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Distance (pc)</span>
          <span className="text-sm">{selectedExoplanet.sy_dist}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Surface Gravity (log g)</span>
          <span className="text-sm">{selectedExoplanet.st_logg}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Spectral Type</span>
          <span className="text-sm">{selectedExoplanet.st_spectype}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Orbital Period (days)</span>
          <span className="text-sm">{selectedExoplanet.pl_orbper}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-sm">Category</span>
          <span className="text-sm">{selectedExoplanet.category}</span>
        </div>
      </div>

      {/* LLM Prediction Block */}
      <div className="flex flex-col items-center space-y-2 mt-4">
        {loading ? (
          <div className="text-center p-4 text-gray-400">
            {/* Simple Spinner */}
            <svg
              className="animate-spin h-5 w-5 text-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <div className="mt-2 text-sm">Analyzing Habitability...</div>
          </div>
        ) : (
          <div
            className={`p-4 rounded-md text-center font-semibold w-full ${
              isHabitable
                ? "bg-[#00ff001a] bg-opacity-50 text-[#00ff00]" // Green for "Habitable"
                : "bg-[#ffff001a] bg-opacity-90 text-[#ffff00]" // Yellow for "Not Habitable"
            }`}
          >
            {isHabitable ? "Habitable" : "Not Habitable"}
          </div>
        )}

        {/* Disclaimer Text */}
        <div className="text-xs text-gray-300 text-center">
          This is an LLM-based prediction and may be inaccurate.
        </div>
      </div>
    </div>
  );
};

export default RightPanel;