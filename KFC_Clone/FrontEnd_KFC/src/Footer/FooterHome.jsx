import React from "react";
import CHKZINGER from "../assets/CHKZINGER.jpg";
import VEGZINGER from "../assets/VEGZINGER.jpg";
import BIGSAVE from "../assets/BIGSAVE.jpg";
import ADDCHHK99 from "../assets/ADDCHK99.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export const FooterHome = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const offers = [
    {
      id: 1,
      image: CHKZINGER,
      title: "FREE CHICKEN...",
      desc: "1 PC free Chicken Zinger on a cart value of 499 or above on first...",
    },
    {
      id: 2,
      image: BIGSAVE,
      title: "UP TO 100 OFF...",
      desc: "Upto Rs 100 off on min cart value of Rs 699 or more. applicable...",
    },
    {
      id: 3,
      image: ADDCHHK99,
      title: "ADD 2 PC HOT N...",
      desc: "Add 2 Pc Hot n Crispy Chicken at just RS 99 on min cart value of ...",
    },
    {
      id: 4,
      image: VEGZINGER,
      title: "1 PC FREE VEG...",
      desc: "1Pc free Veg Zinger on cart vlaue of 499 or above on first..",
    },
  ];

  return (
    <div className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
            alt=""
            className="mb-4"
          />
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">Offer & Deals</h2>
            <Link to="/Deals" className="text-sm font-bold text-white hover:text-red-600 transition-colors uppercase tracking-widest mt-4 md:mt-0">
              View All Deals 🠒
            </Link>
          </div>
        </div>

        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="pb-8">
          {offers.map((offer) => (
            <div key={offer.id} className="px-3">
              <div className="bg-[#f8f7f5] rounded-3xl overflow-hidden shadow-xl flex flex-col h-full group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <h3 className="text-xl font-black text-red-600 mb-2 uppercase italic">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{offer.desc}</p>
                  
                  <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-gray-200">
                    <button className="text-xs font-black uppercase underline tracking-tighter text-gray-900 hover:text-red-600">View Details</button>
                    <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-gray-900 hover:text-white transition-all">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
