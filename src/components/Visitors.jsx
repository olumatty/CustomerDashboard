import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const data = [
  { name: "Jan", loyal: 320, new: 250, unique: 260 },
  { name: "Feb", loyal: 310, new: 215, unique: 320 },
  { name: "Mar", loyal: 270, new: 200, unique: 300 },
  { name: "Apr", loyal: 230, new: 140, unique: 290 },
  { name: "May", loyal: 200, new: 210, unique: 210 },
  { name: "Jun", loyal: 240, new: 340, unique: 200 },
  { name: "Jul", loyal: 305, new: 380, unique: 240 },
  { name: "Aug", loyal: 340, new: 370, unique: 370 },
  { name: "Sep", loyal: 290, new: 320, unique: 290 },
  { name: "Oct", loyal: 280, new: 270, unique: 300 },
  { name: "Nov", loyal: 170, new: 200, unique: 220 },
  { name: "Dec", loyal: 130, new: 130, unique: 200 },
];

const VisitorInsightsChart = () => {
  return (
    <div className="w-full h-[280px] bg-white rounded-lg">
      <h2 className="font-semibold pt-4 px-6">Visitor Insights</h2>
      <ResponsiveContainer width="98%" height="75%" className="mt-2 pr-2 lg:pr-4">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#6B7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            tick={{ fill: "#6B7280", fontSize: 10, color: "#7B91B0" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line type="basis" dataKey="loyal" stroke="#A700FF" strokeWidth={4} dot={false} />
          <Line type="basis" dataKey="new" stroke="#EF4444" strokeWidth={4} dot={false} />
          <Line type="basis" dataKey="unique" stroke="#3CD856" strokeWidth={4} dot={false} />
          <ReferenceDot x="Jul" y={380} r={7} fill="red" stroke="white" strokeWidth={2} />
          <ReferenceLine x="Jul" stroke="red" strokeDasharray="4 4" />
        </LineChart>
      </ResponsiveContainer>
      <div className=" hidden md:flex gap-3 items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#A700FF]"></div>
          <span className="text-[10px]">Loyal Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#EF4444]"></div>
          <span className="text-[10px]">New Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#3CD856]"></div>
          <span className="text-[10px]">Unique Customers</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorInsightsChart;
