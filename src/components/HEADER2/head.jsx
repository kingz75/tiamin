import { NavLink, Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import headerBg from "../../assets/back/header2bg.png";

export default function Head() {
  const location = useLocation();
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isSubsidiariesActive = location.pathname.startsWith("/subsidiaries");

  const navClass = ({ isActive }) =>
    `hover:text-[#1F1E17] ${isActive ? "text-[#1F1E17] font-extrabold" : ""}`;

  return (
    <header
      className="py-[20px] px-[100px] bg-cover bg-center z-50  relative "
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <div className="max-w-[1100px] mx-auto gap-10 flex items-center justify-between text-[#878680]">
        <nav>
          <ul
            className={`hidden md:flex items-center gap-6 font-semibold ${
              isHome ? "text-white" : "text-[#002b45]"
            }`}
          >
            {/* HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              Service
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              Gallery
            </NavLink>

            {/* SUBSIDIARIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setSubsidiariesOpen(true)}
              onMouseLeave={() => setSubsidiariesOpen(false)}
            >
              <span
                className={`flex items-center gap-1 cursor-pointer ${
                  isSubsidiariesActive
                    ? "text-[#FAA419]"
                    : "hover:text-[#FAA419]"
                }`}
              >
                Subsidiaries{" "}
                {subsidiariesOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </span>

              {subsidiariesOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-20">
                  <NavLink
                    to="/subsidiaries/list1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    List1
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    List2
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    List3
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list4"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    List4
                  </NavLink>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
            >
              Contacts
            </NavLink>
          </ul>
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
