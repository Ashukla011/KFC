import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../config/api";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import Loading from "../Components/Loadding";

export const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card"); // card | cod
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [address, setAddress] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    const savedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
    if (!savedAddress) {
      toast.warn("Please select an address first");
      navigate("/Adress");
      return;
    }
    setAddress(savedAddress);
  }, [isAuthenticated, navigate]);

  const handleStripeCheckout = async () => {
    try {
      setLoading(true);
      const res = await api.post(
        "/paymentApi/create-checkout-session",
        {
          items,
          address,
          totalAmount: totalPrice + (totalPrice * 0.05) + 37,
        }
      );

      if (res.data.url) {
        window.location.assign(res.data.url); // Redirect to Stripe
      }
    } catch (err) {
      toast.error("Failed to initiate payment. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCODOrder = async () => {
    try {
      setLoading(true);
      const res = await api.post(
        "/paymentApi/create-cod-order",
        {
          items,
          address,
          totalAmount: totalPrice + (totalPrice * 0.05) + 37,
        }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        navigate("/order-success", { state: { order: res.data.order } });
      }
    } catch (err) {
      toast.error("Failed to place order. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInitiatePayment = async () => {
    if (paymentMethod === "card") {
      await handleStripeCheckout();
    } else if (paymentMethod === "cod") {
      await handleCODOrder();
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="flex items-center space-x-2 mb-12">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-black"></div>
              <div className="w-2 h-8 bg-black"></div>
              <div className="w-2 h-8 bg-red-600"></div>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">
              Review & Pay
            </h1>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold uppercase mb-6 text-gray-900 pb-2 border-b-2 border-red-600 inline-block">Order Summary</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.foodId._id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <img src={item.foodId.image} alt="" className="w-12 h-12 object-cover rounded-lg border border-gray-200" />
                    <div>
                      <p className="font-bold text-sm text-gray-900 uppercase truncate max-w-[150px]">{item.foodId.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-black text-sm text-gray-900">₹{(item.foodId.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Taxes & Fees</p>
                <p>₹{(totalPrice * 0.05 + 37).toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-xl font-black text-red-600 pt-4 border-t border-dashed">
                <p>GRAND TOTAL</p>
                <p>₹{(totalPrice + (totalPrice * 0.05) + 37).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Delivery & Payment */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold uppercase mb-6 text-gray-900 pb-2 border-b-2 border-red-600 inline-block">Delivery To</h2>
              {address && (
                <div className="text-gray-600 space-y-1">
                  <p className="font-black text-gray-900 uppercase">{address.name}</p>
                  <p className="text-sm">{address.houseNo}, {address.area}</p>
                  <p className="text-sm">{address.city}, {address.state} - {address.zipCode}</p>
                  <p className="text-sm font-bold text-gray-900 mt-2 tracking-wider">+91 {address.mobileNumber}</p>
                </div>
              )}
              <button 
                onClick={() => navigate("/Adress")}
                className="mt-4 text-xs font-black uppercase text-red-600 hover:text-red-700 tracking-widest"
              >
                Change Address
              </button>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-red-100">
              <h2 className="text-xl font-bold uppercase mb-6 text-gray-900">Select Payment Method</h2>
              
              <div className="space-y-4 mb-8">
                {/* Card Payment Option */}
                <label className={`flex items-start p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === "card" 
                    ? "border-red-600 bg-red-50" 
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 mt-1 cursor-pointer accent-red-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-black text-gray-900 uppercase">💳 Card Payment</p>
                    <p className="text-xs text-gray-600 mt-1">Pay securely with Visa, Mastercard, or other card</p>
                  </div>
                </label>

                {/* COD Option */}
                <label className={`flex items-start p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === "cod" 
                    ? "border-red-600 bg-red-50" 
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 mt-1 cursor-pointer accent-red-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-black text-gray-900 uppercase">💵 Cash on Delivery</p>
                    <p className="text-xs text-gray-600 mt-1">Pay when you receive your order at your doorstep</p>
                  </div>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="mb-6 flex flex-wrap justify-center gap-4 opacity-60">
                  <img src="https://online.kfc.co.in/static/media/visa.9c857731.svg" alt="Visa" className="h-4" />
                  <img src="https://online.kfc.co.in/static/media/mastercard.4447477c.svg" alt="Mastercard" className="h-4" />
                  <img src="https://online.kfc.co.in/static/media/paytm.28913959.svg" alt="Paytm" className="h-4" />
                </div>
              )}
              
              <button
                onClick={handleInitiatePayment}
                disabled={loading || items.length === 0}
                className="w-full bg-red-600 text-white py-5 rounded-full font-black uppercase text-xl shadow-2xl hover:bg-black transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                <span>
                  {paymentMethod === "card" ? "Pay with Card" : "Place Order (COD)"}
                </span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
