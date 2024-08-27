import React from "react"
import data_product from "../../Assets/data"
import Item from "../item/Item"

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]'>
      <h1 className='font-semibold text-[40px] text-[#171717] '>
        POPULAR IN WOMEN
      </h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] ' />
      <div className='mt-12 flex gap-8 '>
        {data_product.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
