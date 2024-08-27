import React from 'react'
import new_collection from '../../Assets/new_collections'
import Item from '../item/Item'

const NewCollection = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[150px] '>
      <h1 className='font-semibold text-[40px] text-[#171717] '>
        NEW COLLECTION
      </h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] ' />
      <div className='grid grid-cols-4 mt-12 gap-8'>
        {new_collection.map((item, index) => (
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

export default NewCollection