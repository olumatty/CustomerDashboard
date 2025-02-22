import React, { useState } from "react";
import Logo from "../../assets/Group 1000002785.svg";
import { sidebBarData } from "../../data/Data";
import GetProImage from "../../assets/Get pro.png";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="w-16 md:w-28 lg:w-60 h-screen bg-white fixed left-0 top-0 transition-all duration-300 ease-in-out md:px-6 pt-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 ml-3 lg:h-12 lg:w-12 cursor-pointer"
        />
        <h1 className="font-semibold text-xl hidden lg:block">Dabang</h1>
      </div>

      {/* Navbar */} 
      <ul className="mt-10 space-y-8" >
        {sidebBarData.map((data, index) => {
          const isActive = activeLink === data.id; 
          return (
            <li
              key={index}
              className={`flex items-center gap-6 cursor-pointer ml-2 ${
                isActive ? "bg-[#5932EA] h-12 lg:w-full mr-2 md:mr-0 text-white rounded-xl" : ""
              }`}
              onClick={() => setActiveLink(data.id)} // Corrected onClick handler
            >
              <div className=" pl-3">
                <img src={data.icon} alt="icon" className={`h-4 w-4 ${isActive ? "text-white" :" " }`} />
              </div>

              <span
                className={`hidden lg:block text-sm transition-all ${
                  isActive ? "text-white" : "text-[#737791]" 
                }`}
              >
                {data.title}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Update */}
      <div className="hidden lg:block md:px-10 lg:absolute md:bottom-12 mx-auto md:left-0 md:mx-auto cursor-pointer">
        <img src={GetProImage} alt="" className="h-30 w-30" />
      </div>
    </div>
  );
};

export default Sidebar;