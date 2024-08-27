import React from "react"

const Item = (props) => {
  return (
    <div className='w-[270px] transition-transform duration-[600ms] ease-in-out hover:scale-105'>
      <img src={props.image} alt='' className='w-full h-auto' />
      <p className='my-5'>{props.name}</p>
      <div className='flex gap-5'>
        <div className='text-[#374157] text-lg font-semibold'>
          ${props.new_price}
        </div>
        <div className='text-[#8c8c8c] text-lg font-medium line-through'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
