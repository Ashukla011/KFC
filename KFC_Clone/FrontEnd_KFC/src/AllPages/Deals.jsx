import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import { StartOrder } from '../Components/StartOrder';

export const Deals = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const deals = [
    {
      id: 1,
      title: "1 Pc Free Chicken...",
      description: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for new users.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=29.2",
    },
    {
      id: 2,
      title: "1 Pc free Veg Zinger...",
      description: "1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for new users.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=29.2",
    },
    {
      id: 3,
      title: "Upto Rs 100 off on...",
      description: "Upto Rs 100 off on min cart value of Rs 699 or more. Applicable on 4th order.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=29.2",
    }
  ];

  return (
    <div className="bg-[#f8f7f5] min-h-screen">
      <div className="pt-[100px]">
        <StartOrder />
      </div>

      {/* Banner */}
      <div className="w-full bg-black border-y-4 border-red-600">
        <img 
          className="w-full max-h-[200px] object-contain mx-auto" 
          src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg" 
          alt="Deals Banner"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-gray-900 mb-2">Deals & Offers</h1>
          <div className="flex space-x-1">
            <div className="w-8 h-1 bg-red-600"></div>
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-red-600"></div>
          </div>
        </div>

        {!isAuthenticated && (
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">Unlock Exclusive Deals</h2>
              <p className="text-gray-500 font-medium">Sign in to see special offers tailored just for you.</p>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase text-lg shadow-lg hover:bg-black transition-all transform hover:scale-105"
            >
              Sign In Now
            </button>
          </div>
        )}

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4 h-16 line-clamp-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-8 h-12 line-clamp-2">
                  {deal.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button className="text-xs font-black uppercase underline tracking-widest text-gray-900 hover:text-red-600 transition-colors">
                    View Details
                  </button>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-red-600 tracking-widest transition-all">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
