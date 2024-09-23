import React, { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import dropdown_icon from "../Assets/dropdown_icon.png"
import Item from "../components/item/Item"

const ShopCategory = ({ banner, category }) => {
  const contextValue = useContext(ShopContext)
  const all_product = contextValue.all_product

  return (
    <div>
      <img className='block mx-auto my-7 w-[80%]  ' src={banner} alt='' />
      <div className='flex mx-[150px] justify-between items-center '>
        <p>
          <span className='font-semibold '>Showing 1-12</span> out of{" "}
          {all_product.length} products
        </p>
        <div className='py-[6px] flex items-center gap-2 px-4 rounded-[40px] border border-solid border-[#888] '>
          Sort by
          <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='my-5 mx-[150px] grid grid-cols-4 gap-y-20 '>
        {all_product.map((item, index) => {
          if (item.category === category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }
          return null
        })}
      </div>
      <div
        className='flex justify-center items-center my-[100px] mx-auto w-[180px] h-[52px] rounded-[75px] bg-[#ededed] font-medium 
      text-[#787878] '>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
