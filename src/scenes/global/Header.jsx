import React from "react";
import Search from "../../assets/Search.svg";
import Flag from "../../assets/Flag.svg";
import Arrow_down from "../../assets/chevron-down.svg";
import Bell from "../../assets/Bell.svg";
import Profile from "../../assets/person_one.jpg";
import Black_Arrow from "../../assets/Arrowdown_black.svg";

const Header = () => {
  return (
    <div className="h-22 py-4 px-4 md:pl-6 bg-white w-full">
      <div className="flex items-center justify-between flex-wrap">
        {/* Dashboard Title */}
        <h1 className="text-lg hidden lg:block lg:text-2xl font-semibold">Dashboard</h1>

        {/* Search Bar - Responsive */}
        <div className="relative w-[60%] md:w-[40%] lg:w-auto mt-3 md:mt-0">
          <div className="absolute top-3 left-4">
            <img src={Search} alt="search" className="h-6" />
          </div>
          <input
            placeholder="Search here..."
            type="text"
            className="w-full md:w-[400px] lg:w-[600px] h-10 md:h-12 px-12 bg-[#F9FAFB] rounded-lg outline-none"
          />
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center gap-4 md:gap-8 mt-3 md:mt-0">
          {/* Language Selector */}
          <div className="hidden md:flex gap-2 md:gap-3 items-center">
            <img src={Flag} alt="flag" className="h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">Eng (US)</span>
            <img src={Arrow_down} alt="arrow" className="cursor-pointer h-4 w-4" />
          </div>

          {/* Notification Icon */}
          <div className="relative flex items-center h-10 w-10 md:h-12 md:w-12 bg-gradient-to-r from-[#FFA412]/20 to-[#FFFAF1]/60 rounded-lg">
            <img src={Bell} alt="Notification" className="mx-auto h-5 w-5" />
            <span className="absolute w-2 h-2 rounded-full bg-red-600 right-2 top-2"></span>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4 mr-4">
            <img src={Profile} alt="Profile" className="h-10 w-10 md:h-14 md:w-14 object-cover rounded-xl" />
            <div className="hidden md:flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-medium">Mustifq</span>
                <img src={Black_Arrow} alt="arrow" className="cursor-pointer h-4 w-4" />
              </div>
              <span className="text-[#737791] text-sm">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
