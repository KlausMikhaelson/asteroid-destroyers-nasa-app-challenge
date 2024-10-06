import React from "react";

const TopPanel = ({ stats }) => {
  const { totalPlanets, viewedPlanets } = stats;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[600px] h-[60px] backdrop-blur-md bg-slate-900/80 z-10 shadow-lg rounded-lg p-4 flex flex-col justify-center text-white">
      <div className="flex justify-around items-center">
        {/* Number of Exoplanets */}
        <p className="text-lg">{totalPlanets} exoplanets</p>
        <p className="text-lg">{viewedPlanets} focused</p>
      </div>
    </div>
  );
};

export default TopPanel;