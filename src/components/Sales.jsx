import React from 'react'
import ExportBtn from "../assets/Export Icon.svg"
import SalesIcon from "../assets/Sales Icon.svg"
import OrderIcon from "../assets/Order Icon.svg"
import ProductIcon from "../assets/Disc Icon.svg"
import CustomerIcon from "../assets/New Costumers Icon.svg"

const Sales = () => {
  return (
    <div className='bg-white rounded-lg h-auto lg:h-[260px] py-4 px-6 md:px-8'>
      {/* Header */}
      <div className='flex justify-between items-center flex-wrap'>
        <div className='flex flex-col space-y-2'>
          <span className='font-semibold text-lg'>Today's Sales</span>
          <span className='text-sm text-[#737791]'>Sales Summary</span>
        </div>

        <div className='h-10 w-24 flex items-center border p-2  rounded-lg gap-2 cursor-pointer'>
          <img src={ExportBtn} alt="Export Button" />
          <span className='text-sm'>Export</span>
        </div>
      </div>

      {/* Card Section - Responsive */}
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:flex gap-4 md:gap-6 lg:gap-8'>
        
        {/* Total Sales */}
        <div className='bg-[#FFE2E5] lg:w-[140px] h-full rounded-lg p-4 flex flex-col items-start'>
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#FA5A7D]'>
            <img src={SalesIcon} alt='sales_icon' className='w-6 h-6' />
          </div>
          <span className='mt-3 font-semibold text-xl text-[#151D48]'>$1k</span>
          <span className='mt-2 text-[#425166] font-medium'>Total Sales</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+8% from yesterday</span>
        </div>

        {/* Total Order */}
        <div className='bg-[#FFF4DE] lg:w-[140px] h-full w-full max-w-[400px] rounded-lg p-4 flex flex-col items-start'>
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#FF947A]'>
            <img src={OrderIcon} alt='sales_icon' className='w-5 h-5' />
          </div>
          <span className='mt-3 font-semibold text-xl text-[#151D48]'>300</span>
          <span className='mt-2 text-[#425166] font-medium'>Total Order</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+5% from yesterday</span>
        </div>

        {/* Product Sold */}
        <div className='bg-[#DCFCE7] lg:w-[140px] h-full rounded-lg p-4 flex flex-col items-start'>
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#3CD856]'>
            <img src={ProductIcon} alt='sales_icon' className='w-6 h-6' />
          </div>
          <span className='mt-3 font-semibold text-xl  text-[#151D48]'>5</span>
          <span className='mt-2 text-[#425166] font-medium'>Product Sold</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+1.2% from yesterday</span>
        </div>

        {/* New Customers */}
        <div className='bg-[#F3E8FF] lg:w-[140px] h-full rounded-lg p-4 flex flex-col items-start'>
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#BF83FF]'>
            <img src={CustomerIcon} alt='sales_icon' className='w-6 h-6' />
          </div>
          <span className='mt-3 font-semibold text-xl text-[#151D48]'>8</span>
          <span className='mt-2 text-[#425166] font-medium whitespace-pre'>New Customers</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>0.5% from yesterday</span>
        </div>

      </div>
    </div>
  )
}

export default Sales;
