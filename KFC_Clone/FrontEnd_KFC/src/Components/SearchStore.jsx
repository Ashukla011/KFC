import React, { useState } from "react";

export const SearchStore = ({ setactivePopup, address1, setaddress1 }) => {
  const [address, setaddress] = useState("");
  
  const handleAdd = () => {
    if (!address.trim()) return;
    setaddress1(address);
    localStorage.setItem("address", JSON.stringify(address));
    setactivePopup(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <h1 className="text-xl font-black uppercase tracking-tight text-gray-900">Select a KFC</h1>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
           <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg>
        </div>
        <input
          type="search"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          placeholder="Search by state, city or zip"
          className="w-full pl-12 pr-32 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all font-medium"
        />
        <button 
          onClick={handleAdd}
          className="absolute right-2 top-2 bottom-2 bg-red-600 text-white px-8 rounded-xl font-black uppercase text-xs hover:bg-black transition-all shadow-lg active:scale-95"
        >
          Confirm
        </button>
      </div>
      
      <p className="mt-6 text-xs text-gray-400 text-center font-bold uppercase tracking-widest">
        Find your nearest finger lickin' good store
      </p>
    </div>
  );
};
