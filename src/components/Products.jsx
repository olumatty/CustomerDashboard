import React from 'react';

const Products = () => {
  return (
    <div className="bg-white rounded-lg h-full sm:h-auto overflow-hidden">
      <h2 className="font-semibold pt-4 px-4">Top Products</h2>

      {/* Make table scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-b-[#EDF2F6]">
              <th className="text-left text-[#96A5B8] text-[14px] font-normal py-3 px-3">#</th>
              <th className="text-left text-[#96A5B8] text-[14px] font-normal py-3 px-3">Name</th>
              <th className="text-left text-[#96A5B8] text-[14px] font-normal py-3 px-3">Popularity</th>
              <th className="text-left text-[#96A5B8] text-[14px] font-normal py-3 px-3">Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-[#EDF2F6]">
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">01</td>
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">Home Decor Range</td>
              <td className="py-4 px-3">
                <div className="w-40 bg-[#CDE7FF] rounded-full">
                  <div className="h-1 bg-[#0095FF] rounded-full w-[75%]"></div>
                </div>
              </td>
              <td className="py-4 px-3">
                <span className="px-2 py-1 border rounded-lg text-[12px] text-blue-600 border-blue-600">
                  45%
                </span>
              </td>
            </tr>

            <tr className="border-b border-b-[#EDF2F6]">
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">02</td>
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">Disney Princess Pink Bag 18'</td>
              <td className="py-4 px-3">
                <div className="w-40 bg-[#8CFAC7] rounded-full">
                  <div className="h-1 bg-[#00E096] rounded-full w-[60%]"></div>
                </div>
              </td>
              <td className="py-4 px-3">
                <span className="px-2 py-1 border rounded-lg text-[12px] text-green-600 border-green-600">
                  29%
                </span>
              </td>
            </tr>

            <tr className="border-b border-b-[#EDF2F6]">
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">03</td>
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">Bathroom Essentials</td>
              <td className="py-4 px-3">
                <div className="w-40 bg-[#C5A8FF] rounded-full">
                  <div className="h-1 bg-[#884DFF] rounded-full w-[50%]"></div>
                </div>
              </td>
              <td className="py-4 px-3">
                <span className="px-2 py-1 border rounded-lg text-[12px] text-purple-600 border-purple-600">
                  18%
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">04</td>
              <td className="py-4 px-3 text-[#444A6D] text-[13px]">Apple Smartwatches</td>
              <td className="py-4 px-3">
                <div className="w-40 bg-[#FFD5A4] rounded-full">
                  <div className="h-1 bg-[#FF8F0D] rounded-full w-[35%]"></div>
                </div>
              </td>
              <td className="py-4 px-3">
                <span className="px-2 py-1 border rounded-lg text-[12px] text-orange-600 border-orange-600">
                  25%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
