import React from "react";

const MasterComponentswithQuantity = ({ image, Name, price, Description, onClick, badge }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 hover:shadow-xl transition-all group flex flex-col">
      <div className="relative overflow-hidden h-44">
        <img
          src={image}
          alt={Name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
            {badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight line-clamp-1 mb-1">
          {Name}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-2 flex-1 mb-3">
          {Description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-gray-900">₹{price}</span>
          <button
            onClick={onClick}
            className="w-9 h-9 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-xl leading-none hover:bg-black transition-all shadow-lg hover:shadow-red-200 hover:scale-110 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterComponentswithQuantity;
