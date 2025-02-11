import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Monday", online: 13500, offline: 11500 },
  { day: "Tuesday", online: 16000, offline: 12000 },
  { day: "Wednesday", online: 5000, offline: 22000 },
  { day: "Thursday", online: 15000, offline: 6000 },
  { day: "Friday", online: 11000, offline: 9000 },
  { day: "Saturday", online: 16000, offline: 13000 },
  { day: "Sunday", online: 21000, offline: 11000 },
];

const Revenue = () => {
  return (
    <div className=" bg-white rounded-lg h-[280px] ">
      <h2 className="font-semibold  pt-4 px-8">Total Revenue</h2>
      <ResponsiveContainer width="100%" height="78%" className="pr-4 mt-1 ">
        <BarChart data={data}>
          <CartesianGrid
            vertical={false}
            horizontal={true}
            stroke="#EFF1F3"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10 }}
            interval={0}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10 }}
            domain={[0, 25000]}
            ticks={[0, 5000, 10000, 15000, 20000, 25000]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Bar
            dataKey="online"
            fill="#0095FF"
            barSize={10}
            radius={[2, 2, 2, 2]}
            color="#7B91B0"
          />
          <Bar
            dataKey="offline"
            fill="#00E096"
            name="Offline Sales"
            barSize={10}
            radius={[2, 2, 2, 2]}
            color="#7B91B0"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 items-center justify-center">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#0095FF]"></div>
          <span className="text-[10px]">Online Sales</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#00E096]"></div>
          <span className="text-[10px]">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
