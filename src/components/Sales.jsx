import React from 'react'
import ExportBtn from "../assets/Export Icon.svg"
import SalesIcon from "../assets/Sales Icon.svg"
import OrderIcon from "../assets/Order Icon.svg"
import ProductIcon from "../assets/Disc Icon.svg"
import CustomerIcon from "../assets/New Costumers Icon.svg"

const Sales = () => {
  return (
    <div className='bg-white h-[260px] p-4 '>
      {/* Header */}
      <div className='flex justify-between'>
        <div className='flex flex-col space-y-3'>
          <span className='font-medium text-xl'>Today's Sales</span>
          <span className='text-sm text-[#737791]'>Sales Summary</span>
        </div>

        <div className='h-10 w-24 items-center flex border p-2 rounded-lg gap-2'>
          <img src={ExportBtn} alt ="Export Button"/>
          <span className='text-sm'>Export</span>
        </div>
      </div>

      {/* Card */}
      <div className='mt-6 flex gap-6'>
        <div className='h-42 w-42 bg-[#FFE2E5] rounded-lg p-4 flex flex-col' >
          <div className='w-8 h-8 flex justify-center items-center pt-1 rounded-full bg-[#FA5A7D]'><img src ={SalesIcon} alt='sales_icon' className='w-6 h-6' /></div>
          <span className='mt-3 font-semibold text-xl text-[#151D48] text'>$1k</span>
          <span className='mt-2 text-[#425166] font-medium'>Total Sales</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+8% from yesterday</span>
        </div>

        <div className='h-42 w-42 bg-[#FFF4DE] rounded-lg p-4 flex flex-col' >
          <div className='w-8 h-8 flex justify-center items-center  rounded-full bg-[#FF947A]'><img src ={OrderIcon} alt='sales_icon' className='w-5 h-5' /></div>
          <span className='mt-3 font-semibold text-xl text-[#151D48] text'>300</span>
          <span className='mt-2 text-[#425166] font-medium'>Total Order</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+5% from yesterday</span>
        </div>

        <div className='h-42 w-42 bg-[#DCFCE7] rounded-lg p-4 flex flex-col' >
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-[#3CD856]'><img src ={ProductIcon} alt='sales_icon' className='w-6 h-6' /></div>
          <span className='mt-3 font-semibold text-xl text-[#151D48] text'>5</span>
          <span className='mt-2 text-[#425166] font-medium'>Product Sold</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>+1,2% from yesterday</span>
        </div>

        <div className='h-42 w-42 bg-[#F3E8FF] rounded-lg p-4 flex flex-col' >
          <div className='w-8 h-8 flex justify-center items-center  rounded-full bg-[#BF83FF]'><img src ={CustomerIcon} alt='sales_icon' className='w-6 h-6' /></div>
          <span className='mt-3 font-semibold text-xl text-[#151D48] text'>8</span>
          <span className='mt-2 text-[#425166] font-medium'>New Customers</span>
          <span className='text-[10px] mt-2 text-[#4079ED]'>0,5% from yesterday</span>
        </div>

      </div>
    </div>
  )
}

export default Sales
