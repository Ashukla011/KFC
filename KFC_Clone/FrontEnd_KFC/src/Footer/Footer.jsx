import React from "react";
import { MdEditLocation } from "react-icons/md";
import { FooterHome } from "./FooterHome";

const Footer = () => {
  const sectionData = [
    {
      title: "Legal",
      items: ["Terms and Condition", "Privacy Policy", "Disclaimer", "Caution & Notice"],
    },
    {
      title: "KFC India",
      items: ["Menu", "About KFC", "KFC Care", "Careers", "Our Golden Past"],
    },
    {
      title: "KFC Food",
      items: ["Menu", "Order Lookup", "Gift Card", "Nutrition & Allergen"],
    },
    {
      title: "Support",
      items: ["Get Help", "Contact Us", "KFC Feedback", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-black text-white pt-12">
      <FooterHome />

      <div className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
              alt="KFC Logo"
              className="h-20"
            />
          </div>

          {/* Links Sections */}
          {sectionData.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-lg font-black uppercase tracking-widest mb-6 text-gray-100">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Find KFC Section */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-1">
             <div className="flex items-center space-x-2 group cursor-pointer">
                <MdEditLocation className="text-red-600 h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="font-bold uppercase tracking-widest text-sm border-b-2 border-transparent group-hover:border-white transition-all">Find a KFC</span>
             </div>

             <div className="mt-8 flex space-x-4">
               <a href="#" className="hover:opacity-80 transition-opacity">
                 <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="Google Play" className="h-10" />
               </a>
               <a href="#" className="hover:opacity-80 transition-opacity">
                 <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="App Store" className="h-10" />
               </a>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          <p>© Content Copyright 2024 KFC India. All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Instagram</a>
             <a href="#" className="hover:text-white">Facebook</a>
             <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
