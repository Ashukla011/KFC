import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import Chicken_Bucket from "../assets/Chiken_Buckets.jpg";
import Burger from "../assets/Burgers.jpg";
import Rice_Bowlz from "../assets/rice_bowlz.jpg";
import Box_Meals from "../assets/Box_Measl.jpg";
import Chicken_Rolls from "../assets/Chicken_Rolles.jpg";
import side from "../assets/Sides.jpg";
import Beverages_deserts from "../assets/Beverages_Desserts.jpg";
import Kfc_Lunch_Specials from "../assets/Kfc_Lunch_Specials.jpg";
import periperi_match_specials_Banner from "../assets/Periperi_match_specials_Banner.webp";
import Allu_Arjun_Combo_Meal from "../assets/Allu_Arjun_Combo_Meal.webp";
import web from "../assets/web_1440x396px.webp";

const categories = [
  { id: "CHICKEN_BUCKETS", label: "Buckets", type: "CHICKENBUCKETS", icon: "🪣" },
  { id: "BURGERS", label: "Burgers", type: "BURGERS", icon: "🍔" },
  { id: "BOX_MEALS", label: "Box Meals", type: "BOXMEALS", icon: "📦" },
  { id: "CHICKEN_ROLLS", label: "Rolls", type: "ChickenRools", icon: "🌯" },
  { id: "SIDES", label: "Sides", type: "SIDES", icon: "🍟" },
  { id: "Beverages_DESEERTS", label: "Drinks", type: "BEVERAGES", icon: "🥤" },
  { id: "PERI_PERI_MATCH_SPECIALS", label: "Specials", type: "Peri_Peri", icon: "🌶️" },
  { id: "RICEBOWLZ", label: "Rice", type: "RICEBOWLZ", icon: "🍚" },
];

const featuredDeals = [
  {
    id: 1,
    badge: "DAILY DEAL",
    title: "Bucket Deal of the Day",
    subtitle: "8 Pc Hot & Crispy",
    price: "₹799",
    img: Chicken_Bucket,
    gradient: "from-[#D10024] to-[#8B0000]",
  },
  {
    id: 2,
    badge: "COMBO",
    title: "Zinger Box Meal",
    subtitle: "Burger + Fries + Drink",
    price: "₹499",
    img: Box_Meals,
    gradient: "from-[#1a1a1a] to-[#333]",
  },
];

const heroBanners = [
  { url: periperi_match_specials_Banner },
  { url: Allu_Arjun_Combo_Meal },
  { url: web },
];

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState("CHICKEN_BUCKETS");
  const [currentBanner, setCurrentBanner] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentBanner((p) => (p + 1) % heroBanners.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-20 md:pb-0">
      {/* ─── Top Spacer ─── */}
      <div className="h-14 md:h-16" />

      {/* ─── Hero Deal Banner ─── */}
      <div className="px-4 pt-4 pb-2 md:max-w-screen-xl md:mx-auto md:px-6 md:pt-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-52 md:h-72 cursor-pointer group"
          onClick={() => navigate("/RestaurentMune")}>
          {/* Background sweep */}
          <div className={`absolute inset-0 bg-gradient-to-r ${featuredDeals[0].gradient} transition-all duration-700`} />
          {/* Food Image */}
          <img
            src={featuredDeals[0].img}
            alt=""
            className="absolute right-0 top-0 h-full w-3/5 object-cover object-left mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D10024]/90 via-[#D10024]/60 to-transparent" />

          {/* Text */}
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center max-w-xs">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
              {featuredDeals[0].badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {featuredDeals[0].title}
            </h2>
            <p className="text-white/70 text-sm font-medium mt-1">{featuredDeals[0].subtitle}</p>
            <p className="text-white text-2xl font-black mt-3">{featuredDeals[0].price}</p>
          </div>

          {/* FAB delivery button */}
          <div className="absolute bottom-4 right-4 bg-red-600 hover:bg-black transition-colors w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-xl">🛵</span>
          </div>
        </div>
      </div>

      {/* ─── Category Pills ─── */}
      <div className="mt-6 md:mt-8 md:max-w-screen-xl md:mx-auto md:px-6">
        <div className="flex items-center justify-between px-4 md:px-0 mb-4">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">Browse Menu</h2>
          <Link to="/RestaurentMune" className="text-xs font-black text-red-600 uppercase tracking-widest hover:underline">
            View All →
          </Link>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide space-x-3 px-4 md:px-0 pb-2">
          {categories.map((cat) => (
            <NavHashLink
              key={cat.id}
              to={`/RestaurentMune#${cat.id}`}
              smooth
              onClick={() => setActiveCategory(cat.id)}
              className="flex-shrink-0 flex flex-col items-center space-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm transition-all group-hover:-translate-y-1 ${
                activeCategory === cat.id
                  ? "bg-red-600 shadow-red-200 shadow-lg"
                  : "bg-white group-hover:shadow-md"
              }`}>
                {cat.icon}
              </div>
              <span className={`text-[11px] font-black uppercase tracking-wider whitespace-nowrap ${
                activeCategory === cat.id ? "text-red-600" : "text-gray-500"
              }`}>
                {cat.label}
              </span>
            </NavHashLink>
          ))}
        </div>
      </div>

      {/* ─── Promo Cards Row ─── */}
      <div className="mt-8 md:max-w-screen-xl md:mx-auto md:px-6">
        <div className="flex items-center justify-between px-4 md:px-0 mb-4">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">Today's Deals</h2>
          <Link to="/Deals" className="text-xs font-black text-red-600 uppercase tracking-widest hover:underline">
            See All →
          </Link>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 md:px-0 pb-4">
          {[
            { img: Burger, name: "Classic Zinger", price: "₹249", badge: "BESTSELLER", badgeColor: "bg-orange-500" },
            { img: Chicken_Rolls, name: "Peri Peri Roll", price: "₹179", badge: "SPICY 🌶", badgeColor: "bg-red-500" },
            { img: Rice_Bowlz, name: "Chicken Rice Bowl", price: "₹199", badge: "NEW", badgeColor: "bg-green-500" },
            { img: side, name: "Fries & Dips", price: "₹99", badge: "POPULAR", badgeColor: "bg-yellow-500" },
            { img: Beverages_deserts, name: "Krusher Shake", price: "₹149", badge: "CHILLED", badgeColor: "bg-blue-500" },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => navigate("/RestaurentMune")}
              className="flex-shrink-0 w-44 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-gray-50"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className={`absolute top-2 left-2 ${item.badgeColor} text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                  {item.badge}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight leading-tight line-clamp-1">{item.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-base font-black text-gray-900">{item.price}</span>
                  <button className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg leading-none hover:bg-black transition-colors shadow-lg">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Second Deal Banner ─── */}
      <div className="mt-6 px-4 md:max-w-screen-xl md:mx-auto md:px-6">
        <div className="relative rounded-3xl overflow-hidden h-36 md:h-48 cursor-pointer group shadow-xl"
          onClick={() => navigate("/Deals")}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700" />
          <img src={Kfc_Lunch_Specials} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 max-w-xs">
            <span className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-2">🌶️ PERI PERI SPECIALS</span>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">Match Day Specials</h3>
            <p className="text-gray-400 text-sm font-medium mt-1">Free Zinger on orders ₹499+</p>
          </div>
        </div>
      </div>

      {/* ─── Featured Categories Grid ─── */}
      <div className="mt-8 md:max-w-screen-xl md:mx-auto md:px-6">
        <div className="flex items-center justify-between px-4 md:px-0 mb-4">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 md:px-0">
          {[
            { img: Chicken_Bucket, title: "CHICKEN BUCKETS", link: "CHICKEN_BUCKETS" },
            { img: Burger, title: "BURGERS", link: "BURGERS" },
            { img: Box_Meals, title: "BOX MEALS", link: "BOX_MEALS" },
            { img: Beverages_deserts, title: "BEVERAGES", link: "Beverages_DESEERTS" },
          ].map((item, i) => (
            <NavHashLink key={i} to={`/RestaurentMune#${item.link}`} smooth className="group">
              <div className="relative rounded-2xl overflow-hidden h-28 md:h-40 shadow-sm hover:shadow-xl transition-all">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-white font-black text-xs uppercase tracking-wide leading-tight">{item.title}</h3>
                </div>
              </div>
            </NavHashLink>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};
