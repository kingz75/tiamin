import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import headerBg from "../../assets/back/header2bg.png";

export default function Head() {
  const navClass = ({ isActive }) =>
    `hover:text-[#1F1E17] ${isActive ? "text-[#1F1E17] font-extrabold" : ""}`;

  return (
    <header
      className="py-[20px] px-[100px] bg-cover bg-center "
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <div className="max-w-[1100px] mx-auto gap-10 flex items-center justify-between text-[#878680]">
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

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1F1E17]">
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
        <div className="flex items-center gap-8 pr-12">
          <div className="bg-[#878680] w-[0.07px] h-8"></div>

          <div className="flex items-center gap-8">
            <CiSearch className="cursor-pointer text-[20px] text-[#1F1E17]" />
            <FaShoppingCart className="cursor-pointer text-[20px] text-[#1F1E17]"/>
          </div>
        </div>
      </div>
    </header>
  );
}
