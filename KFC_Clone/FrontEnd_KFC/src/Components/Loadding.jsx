import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white/50 fixed inset-0 z-[9999]">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute w-16 h-16 border-4 border-gray-100 rounded-full"></div>
        {/* Spinning Ring */}
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        {/* Center Dot */}
        <div className="absolute w-2 h-2 bg-black rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
