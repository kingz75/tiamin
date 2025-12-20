import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Mainicon from "../../assets/icons/mainicon.svg";

export default function Top() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-[1300px] mx-auto px-[100px] py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Mainicon} alt="Tiamin Rice" className="w-[77px] " />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full  bg-[#F8F7F0] flex items-center justify-center text-[#1F1E17] hover:bg-gray-100 cursor-pointer">
            <FaXTwitter size={14} />
          </div>
          <div className="w-8 h-8 rounded-full  bg-[#F8F7F0] flex items-center justify-center text-[#1F1E17] hover:bg-gray-100 cursor-pointer">
            <FaFacebook size={14} />
          </div>
          <div className="w-8 h-8 rounded-full  bg-[#F8F7F0] flex items-center justify-center text-[#1F1E17] hover:bg-gray-100 cursor-pointer">
            <FaInstagram size={14} />
          </div>
        </div>
        <div className="flex justify-between gap-8 items-center">
          {/* Call Anytime */}
          <div className="text-[14px] font-bold text-[#1F1E17] ">
            <p className="font-semibold text[12px] text-[#878680]">
              Call anytime
            </p>
            <p>+2348034650072</p>
            <p>+2348036876426</p>
            <p>+2348032057724</p>
          </div>
          <div className="bg-[#0f000060] w-[0.07px] h-14"></div>

          {/* Email */}
          <div className="text-[14px] font-bold text-[#1F1E17] ">
            <p className="font-semibold text-[12px] text-[#878680]">
              Send email
            </p>
            <p>info@tiamingroup.com</p>
          </div>
          <div className="bg-[#0f010160] w-[0.07px] h-14"></div>

          {/* Address */}
          <div className="text-[14px] font-bold text-[#1F1E17] ">
            <p className="font-semibold text-[12px] text-[#878680]">
              No. C-15 A.M. Shehu House, Amana City,
            </p>
            <p>Zaria Road, Kano, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
