import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
  FaBars,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import headerBg from "../../assets/back/header2bg.png";

export default function Head({
  menuOpen,
  setMenuOpen,
  mobileSubsOpen,
  setMobileSubsOpen,
}) {
  const location = useLocation();
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isHome = location.pathname === "/";
  const isSubsidiariesActive = location.pathname.startsWith("/subsidiaries");

  console.log("Head render, subsidiariesOpen:", subsidiariesOpen);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navClass = ({ isActive }) =>
    `hover:text-[#1F1E17] ${isActive ? "text-[#1F1E17] font-extrabold" : ""}`;

  return (
    <header
      className="py-[20px] px-4 lg:px-[100px] bg-cover bg-center z-50  relative "
      style={isMobile ? {} : { backgroundImage: `url(${headerBg})` }}
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
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
            >
              Gallery
            </NavLink>

            {/* SUBSIDIARIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                console.log("Mouse enter subsidiaries");
                setSubsidiariesOpen(true);
              }}
              onMouseLeave={() => {
                console.log("Mouse leave subsidiaries");
                setSubsidiariesOpen(false);
              }}
            >
              <span
                className={`flex items-center gap-1 cursor-pointer ${
                  isSubsidiariesActive
                    ? "text-[#FAA419] font-bold"
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
                    Tiamin Rice Limited
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tiamin Gold & Jewelleries LCC
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tiamin Commodity Exchange
                  </NavLink>

                  <NavLink
                    to="/subsidiaries/list4"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tiamin Air
                  </NavLink>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
            >
              Contacts
            </NavLink>
          </ul>
        </nav>
        {/* Right icons */}
        <div className="hidden lg:flex items-center gap-8 pr-12">
          <div className="bg-[#878680] w-[0.07px] h-8"></div>

          <div className="flex items-center gap-8">
            <CiSearch className="cursor-pointer text-[20px] text-[#1F1E17]" />
            <FaShoppingCart className="cursor-pointer text-[20px] text-[#1F1E17]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white rounded-b-2xl shadow-lg z-50">
          <nav className="flex flex-col items-start gap-4 py-4 px-4 text-[#1F1E17]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>

            {/* Subsidiaries Dropdown */}
            <div className="flex flex-col items-start">
              <span
                className={`flex items-center gap-1 cursor-pointer ${
                  isSubsidiariesActive
                    ? "text-[#FAA419] font-bold"
                    : "hover:text-[#FAA419]"
                }`}
                onClick={() => setMobileSubsOpen(!mobileSubsOpen)}
              >
                Subsidiaries{" "}
                {mobileSubsOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </span>

              {mobileSubsOpen && (
                <div className="flex flex-col items-start gap-2 mt-2 ml-4">
                  <NavLink
                    to="/subsidiaries/list1"
                    className="hover:text-[#FAA419]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(true);
                    }}
                  >
                    Tiamin Rice Limited
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list2"
                    className="hover:text-[#FAA419]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(true);
                    }}
                  >
                    Tiamin Gold & Jewelleries LCC
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list3"
                    className="hover:text-[#FAA419]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(true);
                    }}
                  >
                    Tiamin Commodity Exchange
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list4"
                    className="hover:text-[#FAA419]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(true);
                    }}
                  >
                    Tiamin Air
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
