import React from "react";

const RightPanel = ({ selectedExoplanet }) => {
  // Assuming the LLM habitability prediction is calculated elsewhere and passed down as a boolean.
  const isHabitable = selectedExoplanet?.habitable || false; // Example: using a field 'habitable' for simplicity

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
      <div className="flex flex-col space-y-2 bg-blue-800/40 p-2 rounded-md text-sm">
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
      <div
        className={`p-4 mt-4 rounded-md text-center font-semibold ${
          isHabitable
            ? "bg-green-200/70 text-green-800"
            : "bg-yellow-200/70 text-yellow-800"
        }`}
      >
        {isHabitable ? "Habitable" : "Not Habitable"}
      </div>
    </div>
  );
};

export default RightPanel;