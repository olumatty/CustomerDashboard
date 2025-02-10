import React from "react";
import Sales from "../../components/Sales";
import VisitorInsightsChart from "../../components/Visitors";
import Revenue from "../../components/Revenue";
import Customer from "../../components/Customer"; 
import Target from "../../components/Target";

const Dashboard = () => {
  return (
    <div className="py-6 pl-6 pr-6 w-full gap-6 auto-rows-[260px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7">
          <Sales />
        </div>
        <div className="col-span-5">
          <VisitorInsightsChart />
        </div>
      </div>
      <div className="grid grid-cols-14 gap-6 mt-6">
        <div className="col-span-6">
          <Revenue />
        </div>
        <div className="col-span-4">
          <Customer />
        </div>
        <div className="col-span-4">
          <Target/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

