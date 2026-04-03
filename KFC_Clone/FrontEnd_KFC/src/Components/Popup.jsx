import React from "react";

export const Popup = ({ trigger, setactivePopup, children }) => {
  if (!trigger) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setactivePopup(false)}
      ></div>
      
      {/* Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in">
        <button 
          onClick={() => setactivePopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
