import React from "react";
import Graph from "../assets/Group 1000002786.png";
import BlueTick from "../assets/BlueTick.svg";
import GreenTick from "../assets/GreenTick.svg";

const Customer = () => {
  return (
    <div className="bg-white rounded-lg h-[280px] py-4 px-8">
      <h2 className="font-semibold mb-4">Customer Satisfaction</h2>
      <img src={Graph} alt="graph" className='h-40 w-full' />
      <hr className="text-[#EDF2F6] mt-3" />

      <div className="flex gap-5 items-center justify-center mt-2">
        <div className="flex gap-1">
          <div className="mt-2">
            <img src={BlueTick} alt="tick" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#96A5B8] whitespace-pre">Last Month</span>
            <span className="text-[11px]">$3,004</span>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] h-8 bg-[#BDC9D3]"></div>

        <div className="flex gap-1">
          <div className="mt-2">
            <img src={GreenTick} alt="tick" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#96A5B8] whitespace-pre">This Month</span>
            <span className="text-[11px]">$4,504</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
