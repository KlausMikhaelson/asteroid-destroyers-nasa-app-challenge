import React, { useState } from "react";
import axios from "axios"; // You can also use fetch if preferred

const LeftPanel = ({ onApplyFilters, onSelectExoplanet }) => {
  const [selectedTelescope, setSelectedTelescope] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState(""); // Exoplanet category filter state
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filteredPlanetCount, setFilteredPlanetCount] = useState(0); // Initialize count as 0
  const [snrThreshold, setSnrThreshold] = useState(""); // Make the SNR input an empty string by default

  // Function to handle filter application
  const applyFilters = async () => {
    try {
      // API call to get filtered exoplanets
      const params = {
        SNR0: 100,
        SNR_filter: snrThreshold ? Number(snrThreshold) : 5,
        D: selectedTelescope === "config-2" ? 8 : 6,
        top_n: 5765,
        category: selectedAttribute || "",
      };
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/get_top_planets`, params, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const {
        SNR_filter_count: filteredPlanetCount,
        top_planets: filteredPlanets,
      } = response.data;

      setFilteredPlanets(filteredPlanets);
      setFilteredPlanetCount(filteredPlanetCount); // Update planet count
      onApplyFilters(filteredPlanets); // Callback to pass the filtered data to parent
    } catch (error) {
      console.error("Error fetching filtered planets:", error);
    }
  };

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-[300px] h-[600px] backdrop-blur-md bg-slate-900/80 z-10 shadow-lg rounded-lg p-4 flex flex-col space-y-4 text-white">
      {/* Header */}
      <div className="text-lg font-semibold text-center">
        HWO Characterizability Filters
      </div>

      {/* Telescope Filters */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">HWO Telescope Config</label>
        <select
          className="p-2 rounded-md bg-blue-800/40 text-sm text-white focus:outline-none"
          value={selectedTelescope}
          onChange={(e) => setSelectedTelescope(e.target.value)}
        >
          <option value="">All Telescopes</option>
          <option value="config-1">Config 1 (SNR0: 100, D: 6m)</option>
          <option value="config-2">Config 2 (SNR0: 100, D: 8m)</option>
        </select>
      </div>

      {/* SNR Threshold Input */}
      <div className="flex items-center space-x-2">
        <label className="font-medium text-sm">SNR Threshold</label>
        <input
          type="number"
          className="p-2 rounded-md bg-blue-800/40 text-sm text-white focus:outline-none flex-grow"
          value={snrThreshold}
          placeholder="SNR"
          onChange={(e) => setSnrThreshold(e.target.value)}
        />
      </div>

      {/* Attribute Filters */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">Exoplanet category</label>
        <select
          className="p-2 rounded-md bg-blue-800/40 text-sm text-white focus:outline-none"
          value={selectedAttribute}
          onChange={(e) => setSelectedAttribute(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="neptunian">Neptunian</option>
          <option value="gas-giant">Gas Giant</option>
          <option value="super-earth">Super-earth</option>
          <option value="terrestrial">Terrestrial</option>
        </select>
      </div>

      {/* Apply Button */}
      <button
        className="p-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 focus:outline-none font-bold"
        onClick={applyFilters}
      >
        Apply Filters
      </button>

      {/* Total Number of Filtered Planets */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm font-semibold">Filtered Planets</span>
        <span className="text-sm">{filteredPlanetCount}</span>
      </div>

      {/* Exoplanet List */}
      <div className="flex-1 overflow-y-auto bg-blue-800/20 p-2 rounded-md">
        {filteredPlanets.length === 0 ? (
          <div className="text-center text-gray-400 text-sm">
            No exoplanets found
          </div>
        ) : (
          <ul className="space-y-2">
            {filteredPlanets.map((planet, index) => (
              <li
                key={index}
                className="p-2 bg-blue-800/30 rounded-md shadow text-sm cursor-pointer"
                onClick={() => onSelectExoplanet(planet)} // Trigger selection on click
              >
                {planet.pl_name} - {planet.hostname}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;