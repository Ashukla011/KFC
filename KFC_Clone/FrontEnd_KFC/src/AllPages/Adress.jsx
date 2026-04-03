import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

export const Adress = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    houseNo: "",
    area: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false
  });

  const { token, isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchAddresses();
  }, [isAuthenticated, navigate]);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3500/addressApi", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAddresses(res.data);
      if (res.data.length > 0) {
        const defaultAddr = res.data.find(a => a.isDefault) || res.data[0];
        setSelectedAddress(defaultAddr._id);
      }
    } catch (err) {
      toast.error("Failed to fetch addresses");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:3500/addressApi", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Address added successfully");
      setShowForm(false);
      setFormData({
        name: user?.name || "",
        mobileNumber: user?.mobile || "",
        houseNo: "",
        area: "",
        city: "",
        state: "",
        zipCode: "",
        isDefault: false
      });
      fetchAddresses();
    } catch (err) {
      toast.error("Failed to add address");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/addressApi/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Address deleted");
      fetchAddresses();
    } catch (err) {
      toast.error("Failed to delete address");
    }
  };

  const handleProceed = () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }
    const addr = addresses.find(a => a._id === selectedAddress);
    localStorage.setItem("selectedAddress", JSON.stringify(addr));
    navigate("/Payment");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-black"></div>
              <div className="w-2 h-8 bg-red-600"></div>
              <div className="w-2 h-8 bg-black"></div>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900">
              Delivery Address
            </h1>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gray-900 text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-gray-800 transition-all flex items-center space-x-2"
          >
            <span>{showForm ? "Cancel" : "+ Add New"}</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 animate-fade-in-down">
            <h2 className="text-xl font-bold uppercase mb-6 text-gray-900 border-b pb-4">New Delivery Address</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="Receiver's Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">House/Flat No.</label>
                <input
                  type="text"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Landmark/Area</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g., Maharashtra, Delhi"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isDefault"
                    checked={formData.isDefault}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                  />
                  <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Set as default address</span>
                </label>
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-4 rounded-full font-black uppercase text-lg shadow-lg hover:bg-red-700 transition-all transform hover:scale-[1.01]"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {addresses.length === 0 && !showForm ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium uppercase tracking-widest">No addresses saved yet</p>
            </div>
          ) : (
            addresses.map((addr) => (
              <div
                key={addr._id}
                onClick={() => setSelectedAddress(addr._id)}
                className={`flex items-start p-6 rounded-3xl cursor-pointer border-2 transition-all ${
                  selectedAddress === addr._id
                    ? "border-red-600 bg-red-50 shadow-md"
                    : "border-white bg-white hover:border-gray-200"
                }`}
              >
                <div className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                  selectedAddress === addr._id ? "border-red-600" : "border-gray-400 font-bold"
                }`}>
                  {selectedAddress === addr._id && <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>}
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-gray-900 uppercase tracking-tight">{addr.name}</span>
                    <div className="flex items-center space-x-4">
                      {addr.isDefault && (
                        <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Default</span>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(addr._id); }}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {addr.houseNo}, {addr.area}<br/>
                    {addr.city}, {addr.state} - {addr.zipCode}
                  </p>
                  <p className="text-gray-900 text-sm font-bold mt-2">Mobile: +91 {addr.mobileNumber}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {addresses.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleProceed}
              className="bg-gray-900 text-white px-16 py-4 rounded-full font-black uppercase text-xl shadow-2xl hover:bg-black transition-all transform hover:translate-y-[-2px]"
            >
              Continue to Payment
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
