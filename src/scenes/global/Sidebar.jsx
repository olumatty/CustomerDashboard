import React, { useState } from "react";
import Logo from "../../assets/Group 1000002785.svg";
import { sidebBarData } from "../../Data/Data";
import GetProImage from "../../assets/Get pro.png";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="w-16 md:w-60 h-screen bg-white shadow fixed left-0 top-0 transition-all duration-300 ease-in-out md:px-6 pt-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Logo"
          className="w-10 ml-3  md:h-12 md:w-12 cursor-pointer"
        />
        <h1 className="font-semibold text-xl hidden md:block">Dabang</h1>
      </div>

      {/* Navbar */} 
      <ul className="mt-12 space-y-10" >
        {sidebBarData.map((data, index) => {
          const isActive = activeLink === data.id; 
          return (
            <li
              key={index}
              className={`flex items-center gap-6 cursor-pointer ml-2 ${
                isActive ? "bg-[#5932EA] h-12 md:w-full mr-2 md:mr-0 text-white rounded-xl" : ""
              }`}
              onClick={() => setActiveLink(data.id)} // Corrected onClick handler
            >
              <div className=" pl-3">
                <img src={data.icon} alt="icon" className={`h-6 w-6 ${isActive ? "text-white" :" " }`} />
              </div>

              <span
                className={`hidden md:block text-sm transition-all ${
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
      <div className=" hidden md:block md:absolute md:bottom-10  md:left-0 md:px-8 md:py-2 cursor-pointer">
        <img src={GetProImage} alt="" className="h-40 w-40" />
      </div>
    </div>
  );
};

export default Sidebar;