import React, { useState } from "react"
import logo from "../../Assets/logo.png"
import Badge from "@mui/material/Badge"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [menu, setMenu] = useState("shop")

  return (
    <div className='custom-box-shadow flex justify-around p-4 '>
      <div className='flex items-center gap-[10px] '>
        <img src={logo} alt='' />
        <p className='text-[#171717] text-[30px] font-semibold '>SHOPPER</p>
      </div>
      <div className=' flex items-center gap-[50px] text-[#626262] font-medium  '>
        <div
          onClick={() => {
            setMenu("shop")
          }}
          className=' flex flex-col items-center justify-center gap-[3px] cursor-pointer '>
          <Link to='/'>Shop</Link>

          {menu === "shop" ? (
            <hr className=' border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]  ' />
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            setMenu("mens")
          }}
          className=' flex flex-col items-center justify-center gap-[3px] cursor-pointer '>
          <Link to='/men'>Men</Link>
          {menu === "mens" ? (
            <hr className=' border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]  ' />
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            setMenu("womens")
          }}
          className=' flex flex-col items-center justify-center gap-[3px] cursor-pointer '>
          <Link to='/women'>Women</Link>
          {menu === "womens" ? (
            <hr className=' border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]  ' />
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            setMenu("kids")
          }}
          className=' flex flex-col items-center justify-center gap-[3px] cursor-pointer '>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" ? (
            <hr className=' border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]  ' />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='flex items-center gap-[45px]  '>
        <Link to='/login'>
          <button className='w-[125px] h-11 outline-none border border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-lg font-medium bg-white cursor-pointer active:bg-[#f3f3f3] '>
            Login
          </button>
        </Link>

        <Badge
          badgeContent={1}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#ff6347",
              color: "#ffffff",
            },
          }}
          color='primary'>
          <Link to='cart'>
            <ShoppingCartCheckoutIcon
              color='action'
              sx={{ fontSize: 32 }}
              className='cursor-pointer'
              onClick={() => {
                navigate("/CardPage")
              }}
            />
          </Link>
        </Badge>
      </div>
    </div>
  )
}

export default Navbar
