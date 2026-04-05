import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";
import { clearCartState } from "../Redux/cartSlice";
import Loading from "../Components/Loadding";

export const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  // const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId) {
      verifyPayment();
    } else if (location.state?.order) {
      // Handle COD order passed via state
      setOrder(location.state.order);
      dispatch(clearCartState());
      setLoading(false);
    } else {
      navigate("/");
    }
  }, [sessionId, location.state]);

  const verifyPayment = async () => {
    try {
      const res = await api.get(`/paymentApi/verify-payment/${sessionId}`);
      if (res.data.success) {
        setOrder(res.data.order);
        dispatch(clearCartState());
      }
    } catch (err) {
      console.error("Verification failed", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="flex-1 bg-red-600"></div>
          <div className="flex-1 bg-black"></div>
          <div className="flex-1 bg-red-600"></div>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="bg-green-100 p-6 rounded-full inline-block">
            <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">Order Success!</h1>
        <p className="text-gray-500 font-medium mb-8 uppercase tracking-widest text-xs">Finger Lickin' Goodness is on the way</p>

        {order && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <div className="flex justify-between items-center mb-4 border-b pb-4">
               <span className="text-xs font-black text-gray-400 uppercase">Order ID</span>
               <span className="text-sm font-bold text-gray-700 truncate ml-4">#{order._id.slice(-8).toUpperCase()}</span>
            </div>
            <div className="space-y-3">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">{item.quantity} x {item.name}</span>
                  <span className="font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-dashed mt-4 pt-4 flex justify-between">
              <span className="font-black text-gray-900 uppercase">Total Paid</span>
              <span className="font-black text-red-600 text-lg">₹{order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <Link to="/">
            <button className="w-full bg-red-600 text-white py-4 rounded-full font-black uppercase text-lg shadow-lg hover:bg-red-700 transition-all">
              Go To Home
            </button>
          </Link>
          <Link to="/RestaurentMune">
            <button className="w-full bg-white text-gray-900 py-3 rounded-full font-bold uppercase text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
              Order More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
