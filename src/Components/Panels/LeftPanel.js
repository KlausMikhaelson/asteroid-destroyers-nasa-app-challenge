import React, { useState } from "react";

// Mock data for exoplanets (replace this with actual data)
const exoplanets = [
  { name: 'Planet A', telescope: 'Hubble', attribute: 'Habitable' },
  { name: 'Planet B', telescope: 'Kepler', attribute: 'Gas Giant' },
  { name: 'Planet C', telescope: 'James Webb', attribute: 'Rocky' },
  { name: 'Planet D', telescope: 'Hubble', attribute: 'Gas Giant' },
];

const LeftPanel = () => {
  const [selectedTelescope, setSelectedTelescope] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  // Function to handle filter application
  const applyFilters = () => {
    let filtered = exoplanets;

    if (selectedTelescope) {
      filtered = filtered.filter(planet => planet.telescope === selectedTelescope);
    }
    if (selectedAttribute) {
      filtered = filtered.filter(planet => planet.attribute === selectedAttribute);
    }

    setFilteredPlanets(filtered);
  };

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-[300px] h-[600px] backdrop-blur-md bg-slate-900/80 z-10 shadow-lg rounded-lg p-4 flex flex-col space-y-4 text-white">
      
      {/* Header */}
      <div className="text-lg font-semibold text-center">
        Exoplanet Filters
      </div>

      {/* Telescope Filters */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">Telescope</label>
        <select 
          className="p-2 rounded-md bg-blue-800/40 text-sm text-white focus:outline-none"
          value={selectedTelescope} 
          onChange={(e) => setSelectedTelescope(e.target.value)}
        >
          <option value="">All Telescopes</option>
          <option value="Hubble">Hubble</option>
          <option value="Kepler">Kepler</option>
          <option value="James Webb">James Webb</option>
        </select>
      </div>

      {/* Attribute Filters */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-sm">Attribute</label>
        <select 
          className="p-2 rounded-md bg-blue-800/40 text-sm text-white focus:outline-none"
          value={selectedAttribute} 
          onChange={(e) => setSelectedAttribute(e.target.value)}
        >
          <option value="">All Attributes</option>
          <option value="Habitable">Habitable</option>
          <option value="Gas Giant">Gas Giant</option>
          <option value="Rocky">Rocky</option>
        </select>
      </div>

      {/* Apply Button */}
      <button
        className="p-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 focus:outline-none"
        onClick={applyFilters}
      >
        Apply Filters
      </button>

      {/* Exoplanet List */}
      <div className="flex-1 overflow-y-auto bg-blue-800/20 p-2 rounded-md">
        {filteredPlanets.length === 0 ? (
          <div className="text-center text-gray-400 text-sm">No exoplanets found</div>
        ) : (
          <ul className="space-y-2">
            {filteredPlanets.map((planet, index) => (
              <li key={index} className="p-2 bg-blue-800/30 rounded-md shadow text-sm">
                {planet.name} - {planet.telescope} ({planet.attribute})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;