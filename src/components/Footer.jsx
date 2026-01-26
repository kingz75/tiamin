import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Mainicon from "../assets/icons/mainicon.svg";

export default function Footer() {
  return (
    <footer className=" bg-[#24231D]  ">
      {/* MAIN FOOTER */}
      <div className=" text-[#FFFFFF] max-w-[1370px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] py-8 sm:py-12 lg:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          {/* Left Section */}
          <div>
            <Link to="/">
              <img src={Mainicon} alt="Cozym Logo" className="mb-6" />
            </Link>

            <p className="text-sm sm:text-base lg:text-[15px] font-medium leading-relaxed text-[#A5A49A]">
              Tiamin Group’s diverse portfolio includes road construction, rice
              processing, farming, charcoal production, commodity exchange, and
              international gold trading in Dubai.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full  bg-[#1F1E17] flex items-center justify-center text-[#ffffff] hover:bg-zinc-950 cursor-pointer">
                <FaXTwitter size={14} />
              </div>
              <div className="w-8 h-8 rounded-full  bg-[#1F1E17] flex items-center justify-center text-[#ffffff] hover:bg-zinc-950 cursor-pointer">
                <FaFacebook size={14} />
              </div>
              <div className="w-8 h-8 rounded-full  bg-[#1F1E17] flex items-center justify-center text-[#ffffff] hover:bg-zinc-950 cursor-pointer">
                <FaInstagram size={14} />
              </div>
            </div>
          </div>

          {/* Explore Section - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="font-bold text-base sm:text-lg">Explore</h3>
            <div className="flex gap-1">
              <div className="w-12 h-1 bg-[#4BAF47] mt-2 mb-4 rounded"></div>
              <div className="w-1 h-1 bg-[#4BAF47] mt-2 mb-4 rounded"></div>
            </div>

            <ul className="space-y-2 text-[#A5A49A] text-sm sm:text-base lg:text-[15px] font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FAA419] duration-200 flex items-center gap-2"
                >
                  <FaLeaf />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Contact</h3>

            <div className="flex gap-1 mb-4">
              <div className="w-12 h-1 bg-[#4BAF47] rounded"></div>
              <div className="w-1 h-1 bg-[#4BAF47] rounded"></div>
            </div>

            <div className="flex items-center gap-3 text-[#A5A49A] text-sm sm:text-base lg:text-[15px] ">
              <IoIosCall className="text-[#EEC044]" />
              +234 803 465 0072
            </div>
            <div className="flex items-center gap-3 text-[#A5A49A] text-sm sm:text-base lg:text-[15px]">
              <IoIosCall className="text-[#EEC044]" />
              +234 803 687 4426
            </div>
            <div className="flex items-center gap-3 text-[#A5A49A] text-sm sm:text-base lg:text-[15px]">
              <IoIosCall className="text-[#EEC044]" />
              +234 803 205 7724
            </div>

            <div className="flex items-center gap-4 text-[#A5A49A] mt-2 text-sm sm:text-base lg:text-[15px]">
              <IoMdMail className="text-[#EEC044]" />
              info@tiamingroup.com
            </div>

            <div className="flex items-start gap-4 text-[#A5A49A] text-sm sm:text-base lg:text-[15px] mt-2 leading-relaxed">
              <MdLocationPin className="text-[22px] text-[#EEC044]" />
              No. C-15 A.M. Shehu House, Amana City, Zaria Road, Kano, Nigeria
            </div>

            {/* Email Input + Telegram Button */}
            <div className="flex items-center bg-white rounded-md overflow-hidden mt-4 w-full ">
              <input
                type="text"
                placeholder="Your Email Address"
                className="flex-1 px-3 py-2 text-black text-sm outline-none"
              />
              <button className="bg-[#4BAF47] px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-center">
                <FaTelegramPlane className="text-[#ffffff] text-sm sm:text-base lg:text-[15px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="bg-[#1A1A1A] ">
        <div className="text-[#A5A49A] text-center py-4 lg:text-sm text-[12px]  flex justify-between max-w-[1370px] mx-auto lg:px-[100px] px-2">
          <div>© All Copyright 2025 by Tiamin Groups</div>
          <div>Terms of Use l Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}
