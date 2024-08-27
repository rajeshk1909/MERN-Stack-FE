import React from 'react'

const NewsLetter = () => {
  return (
    <div className='custom-linear-gradient-background w-[80%] flex flex-col items-center justify-center m-auto pt-[50px] mb-[150px] gap-8 '>
      <h1 className='text-[#454545] text-[40px] font-semibold '>
        Get Exclusive Offers On Your Email
      </h1>
      <p className='text-[#454545] text-lg  '>
        Subscribe to our newletter and stay updated
      </p>
      <div className='flex items-center justify-between bg-white w-[580px] h-[50px] rounded-[80px] border border-solid border-[#e3e3e3] '>
        <input
          className='custom-font-family-popins w-[450px] ml-[30px] border-none outline-none text-[#616161] text-base '
          type='email'
          placeholder='Your Email Address'
        />
        <button className='w-[150px] h-[50px] rounded-[80px] bg-black text-white text-base '>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter