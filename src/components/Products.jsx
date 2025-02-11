import React from 'react';

const Products = () => {
  return (
    <div className="bg-white lg:h-[280px] rounded-lg p-4">
      <h2 className="font-semibold pt-4 px-4">Top Products</h2>

      {/* Table for large screens */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-b-[#EDF2F6]">
              <th className="text-left text-[#96A5B8] font-normal py-3 px-3">#</th>
              <th className="text-left text-[#96A5B8] font-normal py-3 px-3">Name</th>
              <th className="text-left text-[#96A5B8] font-normal py-3 px-3">Popularity</th>
              <th className="text-left text-[#96A5B8] font-normal py-3 px-3">Sales</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "01", name: "Home Decor Range", popularity: "75%", color: "bg-[#0095FF]", bg: "bg-[#CDE7FF]", sales: "45%", textColor: "text-blue-600", borderColor: "border-blue-600" },
              { id: "02", name: "Disney Princess Pink Bag 18'", popularity: "60%", color: "bg-[#00E096]", bg: "bg-[#8CFAC7]", sales: "29%", textColor: "text-green-600", borderColor: "border-green-600" },
              { id: "03", name: "Bathroom Essentials", popularity: "50%", color: "bg-[#884DFF]", bg: "bg-[#C5A8FF]", sales: "18%", textColor: "text-purple-600", borderColor: "border-purple-600" },
              { id: "04", name: "Apple Smartwatches", popularity: "35%", color: "bg-[#FF8F0D]", bg: "bg-[#FFD5A4]", sales: "25%", textColor: "text-orange-600", borderColor: "border-orange-600" }
            ].map((product) => (
              <tr key={product.id} className="border-b border-b-[#EDF2F6]">
                <td className="py-4 px-3 text-[#444A6D] text-[13px]">{product.id}</td>
                <td className="py-4 px-3 text-[#444A6D] text-[13px]">{product.name}</td>
                <td className="py-4 px-3">
                  <div className={`w-40 ${product.bg} rounded-full`}>
                    <div className={`h-1 ${product.color} rounded-full`} style={{ width: product.popularity }}></div>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-1 border rounded-lg text-[12px] ${product.textColor} ${product.borderColor}`}>
                    {product.sales}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card-style for small screens */}
      <div className="block md:hidden">
        {[
          { id: "01", name: "Home Decor Range", popularity: "75%", color: "bg-[#0095FF]", bg: "bg-[#CDE7FF]", sales: "45%", textColor: "text-blue-600", borderColor: "border-blue-600" },
          { id: "02", name: "Disney Princess Pink Bag 18'", popularity: "60%", color: "bg-[#00E096]", bg: "bg-[#8CFAC7]", sales: "29%", textColor: "text-green-600", borderColor: "border-green-600" },
          { id: "03", name: "Bathroom Essentials", popularity: "50%", color: "bg-[#884DFF]", bg: "bg-[#C5A8FF]", sales: "18%", textColor: "text-purple-600", borderColor: "border-purple-600" },
          { id: "04", name: "Apple Smartwatches", popularity: "35%", color: "bg-[#FF8F0D]", bg: "bg-[#FFD5A4]", sales: "25%", textColor: "text-orange-600", borderColor: "border-orange-600" }
        ].map((product) => (
          <div key={product.id} className="p-4 border-b border-b-[#EDF2F6]">
            <h3 className="text-[#444A6D] font-medium">{product.name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className={`w-full ${product.bg} rounded-full`}>
                <div className={`h-1 ${product.color} rounded-full`} style={{ width: product.popularity }}></div>
              </div>
              <span className={`px-2 py-1 border rounded-lg text-[12px] ${product.textColor} ${product.borderColor}`}>
                {product.sales}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
