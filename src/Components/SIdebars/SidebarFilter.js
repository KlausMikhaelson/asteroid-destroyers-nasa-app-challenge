import React from "react";

const SidebarFilter = ({ characterizedExoplanets }) => {
  return (
    <div className="sidepanel w-72 absolute flex items-center justify-center bg-transparent p-2 z-50 h-[100vh] ">
      <div className="bg-white/5 w-full rounded-lg p-2 backdrop-blur-md h-[90vh]">
        <h1 className="text-white text-3xl">Exoplanets</h1>
        <hr className="border-white" />
        <div className="py-4">
          <h1 className="text-white text-xl">Telescope</h1>
          <input
            type="range"
            min="1"
            max="100"
            //   value={zoom}
            //   onChange={handleZoomChange}
            className="slider"
            id="myRange"
          />
          <h1 className="text-white my-2 text-xl">Characterize exoplanets</h1>
          <div className="flex flex-col py-2 gap-4">
            <div className="flex gap-2">
              <label
                htmlFor="distance"
                className="text-white gap-1 flex items-center"
              >
                <input type="checkbox" className="w-4 h-4" id="distance" />
                Distance
              </label>
              <label
                htmlFor="mass"
                className="text-white gap-1 flex items-center"
              >
                <input type="checkbox" id="mass" className="w-4 h-4" />
                Mass
              </label>
            </div>
            <div className="flex gap-2">
              <label
                htmlFor="distance"
                className="text-white gap-1 flex items-center"
              >
                <input type="checkbox" id="distance" className="w-4 h-4" />
                Distance
              </label>
              <label
                htmlFor="mass"
                className="text-white gap-1 flex items-center"
              >
                <input type="checkbox" id="mass" className="w-4 h-4" />
                Mass
              </label>
            </div>
          </div>
          <hr className="border-white py-2" />
          <div>
            <h1 className="text-white text-xl ">Exoplanet data:</h1>
            {characterizedExoplanets.length > 0 ? (
              <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                {characterizedExoplanets.map((planet) => (
                  <div
                    onClick={() => console.log(planet)}
                    key={planet.key}
                    className="flex flex-col gap-2 p-2 bg-white/5 rounded-lg"
                  >
                    <h1 className="text-white text-lg">{planet.name}</h1>
                    <p className="text-white">{planet.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white">No exoplanets characterized yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
