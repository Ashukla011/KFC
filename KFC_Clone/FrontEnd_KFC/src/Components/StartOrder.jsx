import React, { useEffect, useState } from "react";
import { Popup } from "./Popup";
import { SearchStore } from "./SearchStore";

export const StartOrder = () => {
  const [activePopup, setactivePopup] = useState(false);
  const [address1, setaddress1] = useState("");

  useEffect(() => {
    const add = JSON.parse(localStorage.getItem("address"));
    if (add) setaddress1(add);
  }, []);

  return (
    <div className="bg-[#202124] py-4 px-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 shadow-inner overflow-hidden">
      {!address1 ? (
        <>
          <h4 className="text-white text-sm font-black uppercase tracking-widest text-center">
            Let's order for delivery, pick up, or dine-in
          </h4>
          <button
            onClick={() => setactivePopup(true)}
            className="bg-red-600 text-white px-10 py-3 rounded-full font-black uppercase text-sm hover:bg-red-700 transition-all shadow-xl transform hover:scale-[1.02] active:scale-95"
          >
            Start Order
          </button>
        </>
      ) : (
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest">{address1}</h4>
        </div>
      )}

      <Popup trigger={activePopup} setactivePopup={setactivePopup}>
        <SearchStore
          address1={address1}
          setaddress1={setaddress1}
          setactivePopup={setactivePopup}
        />
      </Popup>
    </div>
  );
};
