import React from 'react'
import Map from "../assets/world 1.png"

const SalesMap = () => {
  return (
    <div className="bg-white rounded-lg h-full py-4 px-8">
      <h2 className="font-semibold mb-6">Sales Mapping by Country</h2>
      <img src={Map} alt='Map' className='h-[85%] w-full'/>
    </div>
  )
}

export default SalesMap
