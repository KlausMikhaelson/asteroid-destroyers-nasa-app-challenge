import React from "react";

const BottomPanel = ({ cameraPosition, cameraRotation }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 w-auto h-[100px] backdrop-blur-md bg-blue-900/30 z-10 shadow-lg rounded-lg p-4 flex items-center justify-between text-white">
      {/* Displaying camera position and rotation */}
      <div className="text-sm">
        <p className="font-semibold">Camera Position</p>
        <p>X: {cameraPosition[0].toFixed(2)}, Y: {cameraPosition[1].toFixed(2)}, Z: {cameraPosition[2].toFixed(2)}</p>
      </div>
      <div className="text-sm">
        <p className="font-semibold">Camera Rotation</p>
        <p>X: {cameraRotation[0].toFixed(2)}, Y: {cameraRotation[1].toFixed(2)}, Z: {cameraRotation[2].toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BottomPanel;