import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-9xl font-black text-gray-100 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-red-600 text-6xl">Oops!</span>
      </h1>
      <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mt-8 mb-4">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-8 font-medium">
        Looks like you took a wrong turn. Even our fastest delivery drivers can't find this page!
      </p>
      <Link to="/">
        <button className="bg-red-600 text-white px-12 py-4 rounded-full font-black uppercase text-lg shadow-2xl hover:bg-black transition-all transform hover:scale-105 active:scale-95">
          Back To Home
        </button>
      </Link>
    </div>
  );
};
