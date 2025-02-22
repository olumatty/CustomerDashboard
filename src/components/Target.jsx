import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Bag from "../assets/Bag 1.svg"
import Ticket from "../assets/Ticket Star 1.svg"

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
      <ResponsiveContainer width="100%" height="50%" className="px-2">
        <BarChart data={data} >
          <XAxis
            dataKey="name"  
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10 }}
            interval={0} 
          />
          <YAxis hide={true} />
          <Bar dataKey="value1" fill="#4AB58E" barSize={15} radius={[3, 3, 3, 3]} barGap={4} />
          <Bar dataKey="value2" fill="#FFCF00" barSize={15} radius={[3, 3, 3, 3]} barGap={4} />
        </BarChart>
      </ResponsiveContainer>
      <div className='flex space-x-5'>
      <div>
      <div className='px-6 mt-1 flex items-center gap-3'>
        <div className='h-8 w-8 bg-[#E2FFF3] rounded-lg'><img src={Bag} alt='Bag' className='mx-auto pt-2'/></div>
        <div className='flex flex-col'>
          <span className='text-[12px] font-semibold'> Reality Sales</span>
          <span className='text-[10px] text-[#737791]'>Global</span>
        </div>
      </div>

      <div className='px-6 mt-4 flex items-center gap-3'>
        <div className='h-8 w-8 bg-[#FFF4DE] rounded-lg'><img src={Ticket} alt='Bag' className='mx-auto pt-2'/></div>
        <div className='flex flex-col'>
          <span className='text-[12px] font-semibold'> Target Sales</span>
          <span className='text-[10px] mt- text-[#737791]'>Global</span>
        </div>
      </div>
      </div>

      <div>
        <div className='flex flex-col space-y-8 mt-1'>
          <span className='text-[#27AE60] font-medium text-[16px]'> 8.823</span>
          <span className='text-[#FFA412] font-medium text-[16px  '> 12.122</span>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Target;