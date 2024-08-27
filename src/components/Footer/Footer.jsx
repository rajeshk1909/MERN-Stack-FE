import React from "react"
import footer_logo from "../../Assets/logo_big.png"
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col mt-[20px] justify-center items-center gap-[50px]">
      <div className="flex items-center gap-5 h-11 ">
        <img src={footer_logo} alt='' />
        <p className="text-[#383838] text-3xl font-bold ">SHOPPER</p>
      </div>
      <ul className="flex gap-[50px] text-[#252525] text-lg  ">
        <li className="cursor-pointer  ">Company</li>
        <li className="cursor-pointer  ">Products</li>
        <li className="cursor-pointer  ">Offices</li>
        <li className="cursor-pointer  ">About</li>
        <li className="cursor-pointer  ">Contact</li>
      </ul>
      <div className="flex gap-5  ">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]  ">
          <img src={instagram_icon} alt='' />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]  ">
          <img src={pintester_icon} alt='' />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb]  ">
          <img src={whatsapp_icon} alt='' />
        </div>
          </div>
          <div className="flex flex-col items-center gap-8 w-full mb-5 text-[#1a1a1a] text-lg  ">
              <hr className="w-[80%] rounded-[10px] h-[3px] bg-[#c7c7c7]  " />
              <p>Copyright @ 2024 - All Right Reserved</p>
          </div>
    </div>
  )
}

export default Footer
