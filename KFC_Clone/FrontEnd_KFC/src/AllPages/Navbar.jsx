import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";
import { fetchCart } from "../Redux/cartSlice";
import { useEffect } from "react";
import { Adress } from "./Adress";

export function WithAction() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchCart());
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    setShowUserMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  const address = JSON.parse(localStorage.getItem("selectedAddress"));
  console.log("select adddress in navbar", address);
  return (
    <>
      {/* ─── Desktop Header (top) ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm hidden md:block">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left – Location */}
          <div className="flex items-center space-x-2 text-sm cursor-pointer group min-w-[200px]">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Deliver To</p>
              <p className="font-black text-gray-900 text-sm leading-tight truncate max-w-[160px]">{address.city},{address.state}</p>
            </div>
          </div>

          {/* Center – Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          
              <span className="text-2xl font-black tracking-tight" style={{ color: "#D10024", fontFamily: "sans-serif" }}>
              {address.city}<span className="text-black"> {address.state}</span>
            </span>
           
          </Link>

          {/* Right – Actions */}
          <div className="flex items-center space-x-4 min-w-[200px] justify-end">
            {/* Navlinks */}
            <nav className="flex items-center space-x-6">
              {[
                { label: "Menu", to: "/RestaurentMune" },
                { label: "Offers", to: "/Deals" },
              ].map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm font-bold uppercase tracking-widest pb-1 border-b-2 transition-all ${
                    isActive(n.to) ? "text-red-600 border-red-600" : "text-gray-500 border-transparent hover:text-gray-900"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Search */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <Link to="/Cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center overflow-hidden"
              >
                {isAuthenticated ? (
                  <span className="text-sm font-black text-red-600 uppercase">{(user?.name || "U")[0]}</span>
                ) : (
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-2xl border border-gray-100 w-52 py-2 z-50 animate-scale-in">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-black text-gray-900 text-sm uppercase truncate">{user?.name}</p>
                        <p className="text-xs text-gray-400 font-medium">Member</p>
                      </div>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors uppercase tracking-wider">
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setShowUserMenu(false)} className="block px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors uppercase tracking-wider">Sign In</Link>
                      <Link to="/signup" onClick={() => setShowUserMenu(false)} className="block px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors uppercase tracking-wider">Create Account</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Header (top) ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm md:hidden">
        <div className="px-4 h-14 flex items-center justify-between">
          {/* Location */}
          <div className="flex items-center space-x-1 text-xs">
            <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Deliver To</p>
              <p className="font-black text-gray-900 text-xs leading-tight">Downtown</p>
            </div>
          </div>

          {/* Center logo */}
          <Link to="/">
            <span className="text-lg font-black tracking-tight" style={{ color: "#D10024" }}>
              KFC<span className="text-black"> Delivery</span>
            </span>
          </Link>

          {/* Right icons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to={isAuthenticated ? "/" : "/login"}>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                {isAuthenticated ? (
                  <span className="text-xs font-black text-red-600 uppercase">{(user?.name || "U")[0]}</span>
                ) : (
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Mobile Bottom Navigation ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden">
        <div className="grid grid-cols-4 h-16">
          {[
            {
              label: "HOME", to: "/",
              icon: (active) => (
                <svg className={`w-6 h-6 ${active ? "text-red-600" : "text-gray-400"}`} fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )
            },
            {
              label: "MENU", to: "/RestaurentMune",
              icon: (active) => (
                <svg className={`w-6 h-6 ${active ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              )
            },
            {
              label: "OFFERS", to: "/Deals",
              icon: (active) => (
                <svg className={`w-6 h-6 ${active ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              )
            },
            {
              label: "CART", to: "/Cart",
              badge: cartCount,
              icon: (active) => (
                <svg className={`w-6 h-6 ${active ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
          ].map((item) => {
            const active = isActive(item.to);
            return (
              <Link key={item.to} to={item.to} className="flex flex-col items-center justify-center space-y-1 relative">
                {item.badge > 0 && (
                  <span className="absolute top-2 right-5 bg-red-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
                <div className={`p-1 rounded-full ${active ? "bg-red-50" : ""}`}>
                  {item.icon(active)}
                </div>
                <span className={`text-[9px] font-black tracking-widest ${active ? "text-red-600" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
