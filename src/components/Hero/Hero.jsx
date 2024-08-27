import React from "react"
import hand_icon from "../../Assets/hand_icon.png"
import arrow_icon from "../../Assets/arrow.png"
import hero_image from "../../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='custom-linear-gradient-background h-[100vh] flex'>
      <div className=' flex-1 flex flex-col justify-center gap-5 pl-[150px] leading-[1.1] '>
        <h2 className=' text-[#090909] text-xl font-semibold '>
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className='flex items-center gap-5  '>
            <p className='text-[#171717] text-[55px] font-bold '>new</p>
            <img src={hand_icon} alt='' className='w-[60px]' />
          </div>
          <p className='text-[#171717] text-[55px] font-bold '>collection</p>
          <p className='text-[#171717] text-[55px] font-bold '>for everyone</p>
        </div>
        <div className=' flex justify-center items-center gap-5 w-[270px] h-[60px] rounded-[75px] mt-8 bg-[#ff4141] font-medium text-white text-lg '>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='fle-1 flex items-center justify-center mr-[150px] '>
        <img src={hero_image} alt='' className='h-[550px] w-[420px]' />
      </div>
    </div>
  )
}

export default Hero
