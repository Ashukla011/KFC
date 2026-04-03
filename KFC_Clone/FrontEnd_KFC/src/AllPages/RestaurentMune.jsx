import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MenuChildOne from "../Components/MenuChildOne";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/KfcDataSlice";
import Loading from "../Components/Loadding";
import { addToCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

const FOOD_CATEGORIES = [
  { id: "PERI_PERI_MATCH_SPECIALS", label: "Specials", type: "Peri_Peri", icon: "🌶️" },
  { id: "CHICKEN_ROLLS", label: "Rolls", type: "ChickenRools", icon: "🌯" },
  { id: "CHICKEN_BUCKETS", label: "Buckets", type: "CHICKENBUCKETS", icon: "🪣" },
  { id: "BOX_MEALS", label: "Box Meals", type: "BOXMEALS", icon: "📦" },
  { id: "BURGERS", label: "Burgers", type: "BURGERS", icon: "🍔" },
  { id: "RICEBOWLZ", label: "Rice Bowlz", type: "RICEBOWLZ", icon: "🍚" },
  { id: "SIDES", label: "Sides", type: "SIDES", icon: "🍟" },
  { id: "Beverages_DESEERTS", label: "Beverages", type: "BEVERAGES", icon: "🥤" },
];

export const RestaurentMune = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("PERI_PERI_MATCH_SPECIALS");

  const { loading, data } = useSelector((state) => state.data);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { items, totalPrice } = useSelector((state) => state.cart);

  const cartCount = items.reduce((acc, i) => acc + i.quantity, 0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      toast.warning("Please login to add items to your cart.");
      navigate("/login");
      return;
    }
    dispatch(addToCart({ foodId: item._id, quantity: 1 }))
      .unwrap()
      .then(() => toast.success(`${item.name} added!`))
      .catch((err) => toast.error(err.message || "Failed to add item"));
  };

  if (loading && (!data || data.length === 0)) return <Loading />;

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-14 md:h-16" />

      {/* ─── Mobile Category Pills (horizontal scroll, sticky) ─── */}
      <div className="sticky top-14 md:top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 space-x-3">
          {FOOD_CATEGORIES.map((cat) => (
            <ScrollLink
              key={cat.id}
              to={cat.id}
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              onSetActive={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer transition-all ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-md shadow-red-200"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.label}</span>
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* ─── Content: Sidebar + Grid ─── */}
      <div className="max-w-screen-xl mx-auto flex px-4 md:px-6 py-6 gap-8">

        {/* ─── Desktop Sidebar ─── */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-28 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 bg-red-600">
              <h2 className="text-white font-black text-sm uppercase tracking-widest">KFC Menu</h2>
            </div>
            <nav className="p-2 space-y-1">
              {FOOD_CATEGORIES.map((cat) => (
                <ScrollLink
                  key={cat.id}
                  to={cat.id}
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={400}
                  onSetActive={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-2xl cursor-pointer transition-all text-sm font-bold uppercase tracking-wider ${
                    activeCategory === cat.id
                      ? "bg-red-50 text-red-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.label}</span>
                </ScrollLink>
              ))}
            </nav>
          </div>
        </aside>

        {/* ─── Menu Grid ─── */}
        <div className="flex-1 min-w-0 pb-24 md:pb-0">
          {FOOD_CATEGORIES.map((category) => {
            const filtered = data ? data.filter((item) => item.foodType === category.type) : [];
            if (filtered.length === 0) return null;
            return (
              <section
                id={category.id}
                key={category.id}
                className="mb-10 scroll-mt-32"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-gray-900">
                    {category.label}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-xs font-bold text-gray-400">{filtered.length} items</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((item) => (
                    <MenuChildOne
                      key={item._id}
                      image={item.image}
                      Name={item.name}
                      price={item.price}
                      Description={item.description}
                      onClick={() => handleAddToCart(item)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* ─── Floating Cart Bar (appears when items in cart) ─── */}
      {cartCount > 0 && (
        <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 z-40">
          <button
            onClick={() => navigate("/Cart")}
            className="w-full bg-red-600 hover:bg-red-700 transition-all text-white rounded-2xl shadow-2xl shadow-red-300 flex items-center justify-between px-5 py-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-sm font-black">{cartCount}</span>
              </div>
              <span className="font-black text-sm uppercase tracking-wider">View My Order</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-base">₹{totalPrice.toFixed(0)}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};
