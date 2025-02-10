import React from "react";
import Search from "../../assets/Search.svg";
import Flag from "../../assets/Flag.svg";
import Arrow_down from "../../assets/chevron-down.svg";
import Bell from "../../assets/Bell.svg";
import Profile from "../../assets/person_one.jpg";
import Black_Arrow from "../../assets/Arrowdown_black.svg";

const Header = () => {
  return (
    <div className="h-22 py-4 pl-6 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <div>
          <div className="relative mr-4">
            <div className="absolute top-3 px-4 ">
              <img src={Search} alt="search" className="h-6" />
            </div>
            <input
              placeholder="Search here..."
              type="text"
              className="w-[600px] h-12 px-14 bg-[#F9FAFB] rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-3 items-center">
            <img src={Flag} alt="flag" />
            <span className="font-semibold">Eng (Us)</span>
            <img src={Arrow_down} alt="arrow" className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-6 cursor-pointer">
            <div className="flex items-center relative h-12 w-12 bg-gradient-to-r from-[#FFA412]/20 to-[#FFFAF1]/60 rounded-lg">
              <img src={Bell} alt="Notification" className="mx-auto" />
              <span className="absolute w-2 h-2 rounded-full bg-red-600 left-8 top-1"></span>
            </div>

            <div className="flex items-center gap-6 ">
              <div>
                <img
                  src={Profile}
                  alt="Profile Image"
                  className="h-14 w-14 object-fit rounded-xl "
                />
              </div>
              <div className="flex flex-col mr-8">
                <div className="flex flex-row gap-8">
                  <span className="font-medium">Mustifq</span>
                  <img src={Black_Arrow} alt="" className="cursor-pointer" />
                </div>
                <span className="text-[#737791] text-sm">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
