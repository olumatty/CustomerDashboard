import React from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { value1: 30, value2: 50 },
  { value1: 40, value2: 70 },
  { value1: 35, value2: 65 },
  { value1: 38, value2: 68 },
  { value1: 25, value2: 55 },
  { value1: 20, value2: 45 }
];

const Volume = () => {
  return (
    <div className='bg-white rounded-lg h-[280px]'>
      <h2 className="font-semibold pt-4 px-6">Volume vs Service Level</h2>
      <ResponsiveContainer width="100%" height="60%">
        <BarChart data={data}>
          <Bar dataKey="value1" stackId="a" fill="#00D38D" barSize={15} radius={[0, 0, 3, 3]} />
          <Bar dataKey="value2" stackId="a" fill="#0095FF" barSize={15} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <hr className="text-[#EDF2F6] mt-2" />
      
            <div className="flex gap-5 items-center justify-center mt-2">
              <div className="flex gap-1 mt-1">
                <div className="mt-1">
                  <div className='h-3 w-3 rounded-full bg-[#0095FF]'></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#96A5B8]">Volume</span>
                  <span className="text-[11px]">1,135</span>
                </div>
              </div>
      
              {/* Vertical Line */}
              <div className="w-[1px] h-8 bg-[#BDC9D3]"></div>
      
              <div className="flex gap-1 mt-1">
                <div className="mt-1">
                  <div className='h-3 w-3 rounded-full bg-[#00E096]'></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#96A5B8]">Services</span>
                  <span className="text-[11px]">635</span>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Volume
