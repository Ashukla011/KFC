import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, updateCartQuantity, removeFromCart, clearCartState } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import Loading from "../Components/Loadding";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalPrice, loading } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) { navigate("/login"); return; }
    dispatch(fetchCart());
  }, [dispatch, isAuthenticated, navigate]);

  const handleQty = (foodId, currentQty, delta) => {
    const newQty = currentQty + delta;
    if (newQty <= 0) dispatch(removeFromCart(foodId));
    else dispatch(updateCartQuantity({ foodId, quantity: newQty }));
  };

  const handleRemove = (foodId) => {
    dispatch(removeFromCart(foodId)).unwrap()
      .then(() => toast.success("Removed"))
      .catch(() => toast.error("Failed"));
  };

  const gst = totalPrice * 0.05;
  const delivery = 37;
  const grand = totalPrice + gst + delivery;

  if (loading && items.length === 0) return <Loading />;

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-20 md:pb-0">
      <div className="h-14 md:h-16" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="flex items-center space-x-3 mb-8">
          <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-black uppercase tracking-tight text-gray-900">My Order</h1>
          <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full">{items.reduce((a, i) => a + i.quantity, 0)} items</span>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-8xl mb-6">🪣</div>
            <h2 className="text-2xl font-black uppercase text-gray-900 mb-2">Your bucket is empty</h2>
            <p className="text-gray-400 font-medium mb-8">Add some finger lickin' good items to get started!</p>
            <button onClick={() => navigate("/RestaurentMune")}
              className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-sm shadow-xl hover:bg-black transition-all">
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ─── Item List ─── */}
            <div className="flex-1 min-w-0 space-y-3">
              {items.map((item) => (
                <div key={item.foodId._id} className="bg-white rounded-3xl p-4 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all">
                  <img src={item.foodId.image} alt={item.foodId.name}
                    className="w-20 h-20 object-cover rounded-2xl flex-shrink-0 border border-gray-100" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight line-clamp-1">
                      {item.foodId.name}
                    </h3>
                    <p className="text-lg font-black text-gray-900 mt-1">₹{item.foodId.price}</p>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {/* Qty Pill */}
                    <div className="flex items-center bg-gray-100 rounded-2xl overflow-hidden">
                      <button onClick={() => handleQty(item.foodId._id, item.quantity, -1)}
                        className="w-9 h-9 flex items-center justify-center text-gray-700 font-black text-lg hover:bg-gray-200 transition-colors">−</button>
                      <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
                      <button onClick={() => handleQty(item.foodId._id, item.quantity, 1)}
                        className="w-9 h-9 flex items-center justify-center text-red-600 font-black text-lg hover:bg-red-50 transition-colors">+</button>
                    </div>
                    {/* Remove */}
                    <button onClick={() => handleRemove(item.foodId._id)}
                      className="p-2 text-gray-300 hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              <button onClick={() => navigate("/RestaurentMune")}
                className="w-full border-2 border-dashed border-gray-300 text-gray-400 rounded-3xl py-4 font-black uppercase text-xs tracking-widest hover:border-red-400 hover:text-red-500 transition-all">
                + Add More Items
              </button>
            </div>

            {/* ─── Order Summary Panel ─── */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                {/* Panel Header */}
                <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
                  <h2 className="text-white font-black text-base uppercase tracking-wider">Order Summary</h2>
                  <span className="text-white font-black text-xl">₹{grand.toFixed(0)}</span>
                </div>

                {/* Breakdown */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>Subtotal ({items.length} items)</span>
                    <span className="font-bold text-gray-900">₹{totalPrice.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>GST (5%)</span>
                    <span className="font-bold text-gray-900">₹{gst.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-gray-900">₹{delivery}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between font-black text-gray-900">
                    <span className="text-base uppercase">Total</span>
                    <span className="text-red-600 text-xl">₹{grand.toFixed(0)}</span>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="px-6 pb-6">
                  <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Deliver To</p>
                        <p className="text-sm font-black text-gray-900">Your Address</p>
                      </div>
                    </div>
                    <Link to="/Adress" className="text-xs font-black text-red-600 uppercase hover:underline">Edit</Link>
                  </div>

                  {/* CTA */}
                  <Link to="/Adress">
                    <button className="w-full bg-red-600 hover:bg-black transition-all text-white py-4 rounded-2xl font-black uppercase tracking-wider text-base shadow-xl shadow-red-200 hover:shadow-none">
                      Checkout
                    </button>
                  </Link>

                  {/* Payment logos */}
                  <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-4">Secure payments via Stripe</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
