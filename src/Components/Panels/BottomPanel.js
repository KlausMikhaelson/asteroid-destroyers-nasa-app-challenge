import React from "react";

const BottomPanel = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 w-auto h-[100px] backdrop-blur-md bg-blue-900/30 z-10 shadow-lg rounded-lg p-4 flex items-center justify-center text-white">
      {/* Placeholder content */}
      <div className="text-center text-sm">
        <p>This is the bottom panel. Future content can go here.</p>
      </div>
    </div>
  );
};

export default BottomPanel;