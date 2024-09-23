import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-full bg-[#fce3fe] h-[86vh] pt-[70px] '>
      <div className='w-[510px] h-[470px] bg-white m-auto py-7 px-[60px]  '>
        <h1 className='my-3 text-2xl font-semibold '>Sign Up</h1>
        <div className='flex flex-col gap-5 mt-7 '>
          <input
            className='h-12 w-full pl-4 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c]  '
            type='text'
            placeholder='Your Name'
          />
          <input
            className='h-12 w-full pl-4 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c]  '
            type='email'
            placeholder='Email Address'
          />
          <input
            className='h-12 w-full pl-4 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c]  '
            type='password'
            placeholder='Password'
          />
        </div>
        <button className='h-12 w-full text-white bg-[#ff4141] mt-5 border-none font-medium '>
          Continue
        </button>
        <p className='mt-4 text-[#5c5c5c] text-sm font-medium  '>
          Already have an account ?{" "}
          <span className='text-[#ff4141] font-semibold '>Login Here</span>
        </p>
        <div className='flex items-center] text-xs mt-5 gap-4 text-[#5c5c5c] font-medium  '>
          <input type='checkbox' name='' id='' />
          <p>By continue, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup