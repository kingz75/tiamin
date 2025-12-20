import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Call from "../assets/icons/callicon.svg";
import Mainicon from "../assets/icons/mainicon.svg";

export default function Header() {
  const navClass = ({ isActive }) =>
    `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-extrabold" : ""}`;

  return (
    <header className="py-[5px] px-[60px] bg-cover bg-center bg-black/40">
      <div className="max-w-[1370px] mx-auto gap-10 flex items-center justify-between text-white">
        {/* Left section: Logo + Socials */}
        <div className="flex items-center gap-24">
          <Link to="/">
            <img src={Mainicon} alt="Logo" className="w-[80px]" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaXTwitter size={14} />
            </div>
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaFacebook size={14} />
            </div>
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={navClass}>
            Gallery
          </NavLink>

          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
            <span>Subsidiaries</span>
            <FaChevronDown className="text-xs" />
          </div>

          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <div className="bg-[#ffffff60] w-[0.07px] h-8"></div>

          <div className="flex items-center gap-4">
            <CiSearch className="cursor-pointer text-[20px]" />
            <FaShoppingCart className="cursor-pointer text-[20px]" />
          </div>

          <div className="flex items-center gap-2 px-4 py-1 text-sm">
            <img src={Call} alt="" className="w-[35px]" />
            <div className="leading-tight">
              <p className="text-[12px] font-medium">Call Anytime</p>
              <p className="font-semibold text-[16px]">+234 803 687 4426</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
