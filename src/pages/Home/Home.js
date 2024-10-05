import React, { useState } from "react";
import CanvasContainer from '../../Components/Canvas/CanvasContainer';
import LeftPanel from '../../Components/Panels/LeftPanel';
import RightPanel from '../../Components/Panels/RightPanel';
import TopPanel from '../../Components/Panels/TopPanel';
import BottomPanel from '../../Components/Panels/BottomPanel';

// Mock stats data for the TopPanel (you could dynamically compute this)
const stats = {
  totalPlanets: 5800,    // Example total number of exoplanets
  viewedPlanets: 50,     // Example currently viewed planets
};

const Home = () => {
  const [selectedExoplanet, setSelectedExoplanet] = useState(null);

  // Function to handle exoplanet selection (triggered from the CanvasContainer or elsewhere)
  const selectExoplanet = (planet) => {
    setSelectedExoplanet(planet);
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      {/* Panels */}
      <TopPanel stats={stats} />
      <LeftPanel />
      <RightPanel exoplanet={selectedExoplanet} /> {/* Pass the selected exoplanet */}
      {/* <BottomPanel /> */}

      {/* Canvas for visualization */}
      <CanvasContainer selectExoplanet={selectExoplanet} />  {/* Pass the select function */}
    </div>
  );
};

export default Home;