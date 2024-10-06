import React, { useState } from "react";
import CanvasContainer from "../../Components/Canvas/CanvasContainer";
import LeftPanel from "../../Components/Panels/LeftPanel";
import RightPanel from "../../Components/Panels/RightPanel";
import TopPanel from "../../Components/Panels/TopPanel";

const Home = () => {
  const [selectedExoplanet, setSelectedExoplanet] = useState(null);
  const [filteredPlanets, setFilteredPlanets] = useState([]); // Store filtered planets
  const [filteredPlanetCount, setFilteredPlanetCount] = useState(0); // Store count of filtered planets

  // Function to handle exoplanet selection (triggered from the CanvasContainer or LeftPanel)
  const selectExoplanet = (planet) => {
    setSelectedExoplanet(planet); // Update selected exoplanet state
  };

  // Callback function to receive filtered planets from LeftPanel
  const handleApplyFilters = (filtered) => {
    setFilteredPlanets(filtered); // Update filtered planets
    setFilteredPlanetCount(filtered.length); // Update filtered planets count
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      {/* Top Panel for statistics */}
      <TopPanel stats={{ totalPlanets: 5765, viewedPlanets: filteredPlanetCount }} />

      {/* Left Panel for filtering */}
      <LeftPanel onApplyFilters={handleApplyFilters} onSelectExoplanet={selectExoplanet} /> {/* Pass callback to receive filtered data and handle selection */}

      {/* Right Panel for exoplanet details */}
      <RightPanel selectedExoplanet={selectedExoplanet} /> {/* Pass the selected exoplanet */}

      {/* Canvas for 3D visualization */}
      <CanvasContainer filteredPlanets={filteredPlanets} onSelectExoplanet={selectExoplanet} /> {/* Pass filtered planets and selection handler */}
    </div>
  );
};

export default Home;