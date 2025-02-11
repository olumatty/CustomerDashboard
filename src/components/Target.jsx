import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value1: 40, value2: 50 },
  { name: "Feb", value1: 30, value2: 45 },
  { name: "Mar", value1: 25, value2: 60 },
  { name: "Apr", value1: 45, value2: 50 },
  { name: "May", value1: 50, value2: 70 },
  { name: "June", value1: 48, value2: 68 },
  { name: "July", value1: 49, value2: 65 }
];

const Target = () => {
  return (
    <div className='bg-white rounded-lg h-[280px]'>
      <h2 className="font-semibold pt-4 px-6">Target vs Reality</h2>
      <ResponsiveContainer width="100%" height="55%" className="pr-2">
        <BarChart data={data} >
          <XAxis
            dataKey="name"  
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10 }}  // Reduce text size
            interval={0} 
          />
          <YAxis hide={true} />  {/* Hide Y-Axis */}
          <Bar dataKey="value1" fill="#4AB58E" barSize={15} radius={[2, 2, 2, 2]} barGap={4} />
          <Bar dataKey="value2" fill="#FFCF00" barSize={15} radius={[2, 2, 2, 2]} barGap={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Target;