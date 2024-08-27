import React from "react"
import exclusive_image from "../../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='custom-linear-gradient-background w-[80%] h-[60vh] flex m-auto px-[140px] mb-[150px] '>
      <div className='flex-1 flex flex-col justify-center '>
        <h1 className='text-[#171717] text-[55px] font-semibold '>Exclusive</h1>
        <h1 className='text-[#171717] text-[55px] font-semibold '>
          Offers For You
        </h1>
        <p className='text-[#171717] text-lg font-semibold'>
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className='w-[210px] h-12 rounded-[35px] bg-[#ff4141] border-none text-white text-lg font-medium mt-8 cursor-pointer '>
          Check Now
        </button>
      </div>
      <div className='flex-1 flex items-center justify-end pt-32 '>
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offers
